import Foundation

struct CourseData: Codable {
    let sections: [CourseSection]
    let courses: [Course]
}

class CourseDataService: ObservableObject {
    static let shared = CourseDataService()

    @Published private(set) var sections: [CourseSection] = []
    @Published private(set) var courses: [Course] = []

    private init() {
        loadData()
    }

    private func loadData() {
        // Try loading from bundled JSON
        if let url = Bundle.main.url(forResource: "courses", withExtension: "json") {
            do {
                let data = try Data(contentsOf: url)
                let decoded = try JSONDecoder().decode(CourseData.self, from: data)
                self.sections = decoded.sections
                self.courses = decoded.courses
                return
            } catch {
                print("Failed to load courses.json: \(error)")
            }
        }

        // Fallback to hardcoded data
        loadHardcodedData()
    }

    private func loadHardcodedData() {
        sections = [
            CourseSection(id: "featured", title: "Featured", subtitle: "Our flagship courses", style: .featured),
            CourseSection(id: "beginners", title: "Beginners", subtitle: "Start here to build a strong foundation", style: .beginner),
            CourseSection(id: "calculus", title: "Calculus", subtitle: "Continuous mathematics and analysis", style: .subject),
            CourseSection(id: "algebra", title: "Algebra", subtitle: "Algebraic structures and systems", style: .subject),
            CourseSection(id: "geometry", title: "Geometry", subtitle: "Euclidean and non-Euclidean geometry", style: .subject),
            CourseSection(id: "history", title: "Math History", subtitle: "The stories behind the mathematics", style: .subject),
        ]

        courses = [
            Course(id: "crypto", title: "Cryptography Math",
                   description: "Learn the mathematics that powers modern encryption.",
                   icon: "🔐", iconImage: nil, url: "cryptography/",
                   tags: ["12 Lessons", "Interactive"], sections: ["featured"],
                   totalSections: 12, progressPrefix: "crypto:",
                   leaderboardUrl: "cryptography/#/leaderboard", shortName: "Cryptography",
                   progressGradient: "linear-gradient(90deg, #6366f1, #818cf8)"),
        ]
    }

    func getCourses(for sectionId: String) -> [Course] {
        courses.filter { $0.sections.contains(sectionId) }
    }

    func getCourse(by id: String) -> Course? {
        courses.first { $0.id == id }
    }
}
