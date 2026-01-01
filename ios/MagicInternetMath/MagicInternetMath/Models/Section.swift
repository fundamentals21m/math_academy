import SwiftUI

struct CourseSection: Identifiable, Codable {
    let id: String
    let title: String
    let subtitle: String
    let style: SectionStyle

    enum SectionStyle: String, Codable {
        case featured
        case beginner
        case subject

        var badgeColor: Color {
            switch self {
            case .featured: return .featuredGold
            case .beginner: return .beginnerGreen
            case .subject: return .subjectIndigo
            }
        }
    }
}

// MARK: - Sample Data for Previews

extension CourseSection {
    static let sample = CourseSection(
        id: "featured",
        title: "Featured",
        subtitle: "Our flagship courses",
        style: .featured
    )
}
