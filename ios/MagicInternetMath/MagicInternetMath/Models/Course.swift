import SwiftUI

struct Course: Identifiable, Codable, Hashable {
    let id: String
    let title: String
    let description: String
    let icon: String
    let iconImage: String?
    let url: String
    let tags: [String]
    let sections: [String]
    let totalSections: Int
    let progressPrefix: String
    let leaderboardUrl: String?
    let shortName: String?
    let progressGradient: String?

    // Base URL for all courses
    static let baseURL = "https://mathacademy-cyan.vercel.app/"

    var fullURL: URL? {
        URL(string: Self.baseURL + url)
    }

    var gradient: LinearGradient {
        // Parse CSS gradient string to SwiftUI gradient
        guard let gradientStr = progressGradient else {
            return LinearGradient(colors: [.neonCyan, .neonMagenta], startPoint: .leading, endPoint: .trailing)
        }

        // Extract colors from "linear-gradient(90deg, #color1, #color2)"
        let pattern = #"#([0-9a-fA-F]{6})"#
        let regex = try? NSRegularExpression(pattern: pattern)
        let matches = regex?.matches(in: gradientStr, range: NSRange(gradientStr.startIndex..., in: gradientStr)) ?? []

        let colors: [Color] = matches.compactMap { match in
            guard let range = Range(match.range(at: 1), in: gradientStr) else { return nil }
            return Color(hex: "#" + String(gradientStr[range]))
        }

        guard colors.count >= 2 else {
            return LinearGradient(colors: [.neonCyan, .neonMagenta], startPoint: .leading, endPoint: .trailing)
        }

        return LinearGradient(colors: colors, startPoint: .leading, endPoint: .trailing)
    }
}

// MARK: - Sample Data for Previews

extension Course {
    static let sample = Course(
        id: "crypto",
        title: "Cryptography Math",
        description: "Learn the mathematics that powers modern encryption.",
        icon: "🔐",
        iconImage: nil,
        url: "cryptography/",
        tags: ["12 Lessons", "Interactive"],
        sections: ["featured"],
        totalSections: 12,
        progressPrefix: "crypto:",
        leaderboardUrl: "cryptography/#/leaderboard",
        shortName: "Cryptography",
        progressGradient: "linear-gradient(90deg, #6366f1, #818cf8)"
    )
}
