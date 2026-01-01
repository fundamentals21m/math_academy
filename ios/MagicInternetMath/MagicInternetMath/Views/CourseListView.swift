import SwiftUI

struct CourseListView: View {
    @StateObject private var dataService = CourseDataService.shared

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 32) {
                    // Hero section
                    HeroView()

                    // Sections with courses
                    ForEach(dataService.sections) { section in
                        CourseSectionView(
                            section: section,
                            courses: dataService.getCourses(for: section.id)
                        )
                    }
                }
                .padding(.horizontal, 16)
                .padding(.bottom, 32)
            }
            .background(Color.bgDark.ignoresSafeArea())
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .principal) {
                    Text("Magic Internet Math")
                        .font(.headline)
                        .foregroundStyle(LinearGradient.neonGradient)
                }
            }
        }
    }
}

// MARK: - Hero View

struct HeroView: View {
    var body: some View {
        VStack(spacing: 16) {
            Text("Magic Internet Math")
                .font(.system(size: 28, weight: .bold))
                .foregroundStyle(LinearGradient.neonGradient)
                .neonGlow(color: .neonCyan, radius: 15)

            Text("Interactive courses covering the mathematics that powers modern technology")
                .font(.body)
                .foregroundColor(.textMuted)
                .multilineTextAlignment(.center)
                .padding(.horizontal, 24)
        }
        .padding(.vertical, 24)
    }
}

// MARK: - Section View

struct CourseSectionView: View {
    let section: CourseSection
    let courses: [Course]

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            // Section header
            HStack(spacing: 12) {
                Text(section.title)
                    .font(.caption.bold())
                    .textCase(.uppercase)
                    .tracking(1)
                    .foregroundColor(section.style.badgeColor)
                    .padding(.horizontal, 10)
                    .padding(.vertical, 4)
                    .background(section.style.badgeColor.opacity(0.15))
                    .cornerRadius(6)

                Text(section.subtitle)
                    .font(.subheadline)
                    .foregroundColor(.textMuted)

                Spacer()
            }

            // Course cards
            ForEach(courses) { course in
                CourseCardView(course: course)
            }
        }
    }
}

#Preview {
    CourseListView()
}
