import Foundation
import Combine

// MARK: - User Progress Model

struct UserProgress: Codable {
    var totalXP: Int
    var level: Int
    var sectionsCompleted: [String]  // e.g., ["crypto:1", "ba:5"]
    var streak: StreakData
    var courseProgress: [String: CourseProgress]

    struct CourseProgress: Codable {
        var completedSections: Int
        var totalSections: Int
        var xp: Int

        var percentage: Double {
            guard totalSections > 0 else { return 0 }
            return Double(completedSections) / Double(totalSections)
        }
    }

    struct StreakData: Codable {
        var currentStreak: Int
        var lastActiveDate: Date?
    }

    static let empty = UserProgress(
        totalXP: 0,
        level: 1,
        sectionsCompleted: [],
        streak: StreakData(currentStreak: 0, lastActiveDate: nil),
        courseProgress: [:]
    )
}

// MARK: - Progress Service

class ProgressService: ObservableObject {
    static let shared = ProgressService()

    @Published private(set) var progress: UserProgress

    private let storageKey = "magic-internet-math-progress"
    private let defaults = UserDefaults.standard

    private init() {
        // Load from UserDefaults
        if let data = defaults.data(forKey: storageKey),
           let decoded = try? JSONDecoder().decode(UserProgress.self, from: data) {
            progress = decoded
        } else {
            progress = .empty
        }
    }

    // MARK: - Public Methods

    func markSectionCompleted(_ sectionId: String, courseId: String, totalSections: Int) {
        guard !progress.sectionsCompleted.contains(sectionId) else { return }

        progress.sectionsCompleted.append(sectionId)
        updateCourseProgress(courseId: courseId, totalSections: totalSections)
        awardXP(50)
        updateStreak()
        save()
    }

    func getCourseProgress(for courseId: String) -> UserProgress.CourseProgress? {
        progress.courseProgress[courseId]
    }

    func getProgressPercentage(for courseId: String) -> Double {
        progress.courseProgress[courseId]?.percentage ?? 0
    }

    // MARK: - Private Methods

    private func updateCourseProgress(courseId: String, totalSections: Int) {
        var courseProgress = progress.courseProgress[courseId] ?? UserProgress.CourseProgress(
            completedSections: 0,
            totalSections: totalSections,
            xp: 0
        )
        courseProgress.completedSections += 1
        courseProgress.xp += 50
        progress.courseProgress[courseId] = courseProgress
    }

    private func awardXP(_ amount: Int) {
        progress.totalXP += amount
        recalculateLevel()
    }

    private func recalculateLevel() {
        // Level formula: level = sqrt(totalXP / 100) + 1
        progress.level = Int(sqrt(Double(progress.totalXP) / 100.0)) + 1
    }

    private func updateStreak() {
        let today = Calendar.current.startOfDay(for: Date())

        if let lastActive = progress.streak.lastActiveDate {
            let lastActiveDay = Calendar.current.startOfDay(for: lastActive)
            let daysSinceLastActive = Calendar.current.dateComponents([.day], from: lastActiveDay, to: today).day ?? 0

            if daysSinceLastActive == 0 {
                // Same day, no streak update
            } else if daysSinceLastActive == 1 {
                // Consecutive day
                progress.streak.currentStreak += 1
            } else {
                // Streak broken
                progress.streak.currentStreak = 1
            }
        } else {
            // First activity
            progress.streak.currentStreak = 1
        }

        progress.streak.lastActiveDate = today
    }

    private func save() {
        if let data = try? JSONEncoder().encode(progress) {
            defaults.set(data, forKey: storageKey)
        }
    }

    // MARK: - Reset (for testing)

    func reset() {
        progress = .empty
        defaults.removeObject(forKey: storageKey)
    }
}
