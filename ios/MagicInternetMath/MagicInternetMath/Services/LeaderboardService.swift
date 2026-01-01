import Foundation

class LeaderboardService: ObservableObject {
    static let shared = LeaderboardService()

    private let baseURL = "https://us-central1-magic-internet-math-96630.cloudfunctions.net"

    @Published var rankings: [LeaderboardEntry] = []
    @Published var isLoading = false
    @Published var error: String?

    private init() {}

    @MainActor
    func fetchLeaderboard(courseId: String = "overall", limit: Int = 50) async {
        isLoading = true
        error = nil

        do {
            let entries = try await fetchFromFirebase(courseId: courseId, limit: limit)
            rankings = entries
        } catch {
            self.error = error.localizedDescription
        }

        isLoading = false
    }

    private func fetchFromFirebase(courseId: String, limit: Int) async throws -> [LeaderboardEntry] {
        guard let url = URL(string: "\(baseURL)/getLeaderboard") else {
            throw LeaderboardError.invalidURL
        }

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")

        let body: [String: Any] = [
            "data": [
                "courseId": courseId,
                "limit": limit
            ]
        ]

        request.httpBody = try JSONSerialization.data(withJSONObject: body)

        let (data, response) = try await URLSession.shared.data(for: request)

        guard let httpResponse = response as? HTTPURLResponse,
              httpResponse.statusCode == 200 else {
            throw LeaderboardError.serverError
        }

        let decoder = JSONDecoder()
        let leaderboardResponse = try decoder.decode(LeaderboardResponse.self, from: data)

        // Add rank numbers if not present
        return leaderboardResponse.result.rankings.enumerated().map { index, entry in
            LeaderboardEntry(
                rank: entry.rank > 0 ? entry.rank : index + 1,
                npub: entry.npub,
                displayName: entry.displayName,
                xp: entry.xp,
                level: entry.level
            )
        }
    }

    enum LeaderboardError: LocalizedError {
        case invalidURL
        case serverError
        case decodingError

        var errorDescription: String? {
            switch self {
            case .invalidURL: return "Invalid URL"
            case .serverError: return "Server error"
            case .decodingError: return "Failed to decode response"
            }
        }
    }
}

// Course options for leaderboard picker
enum LeaderboardCourse: String, CaseIterable, Identifiable {
    case overall = "overall"
    case crypto = "crypto"
    case ba = "ba"
    case linalg = "linalg"
    case advlinalg = "advlinalg"
    case calc_easy = "calc_easy"
    case calc1 = "calc1"
    case calc_lib_art = "calc_lib_art"
    case ra = "ra"
    case islr = "islr"
    case aa = "aa"
    case four_pillars = "four_pillars"
    case mom = "mom"
    case wm = "wm"

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .overall: return "Overall"
        case .crypto: return "Cryptography"
        case .ba: return "Basic Algebra"
        case .linalg: return "Linear Algebra"
        case .advlinalg: return "Advanced LinAlg"
        case .calc_easy: return "Beginner Calculus"
        case .calc1: return "Intermediate Calc"
        case .calc_lib_art: return "Calc Liberal Art"
        case .ra: return "Real Analysis"
        case .islr: return "Statistical Learning"
        case .aa: return "Abstract Algebra"
        case .four_pillars: return "Four Pillars"
        case .mom: return "Men of Math"
        case .wm: return "Why Math?"
        }
    }
}
