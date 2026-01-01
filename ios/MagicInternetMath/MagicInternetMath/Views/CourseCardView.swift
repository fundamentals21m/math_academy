import SwiftUI

struct CourseCardView: View {
    let course: Course

    var body: some View {
        NavigationLink(destination: CourseWebView(course: course)) {
            VStack(alignment: .leading, spacing: 16) {
                // Header with icon
                HStack(spacing: 12) {
                    // Icon
                    Text(course.icon)
                        .font(.system(size: 28))
                        .frame(width: 48, height: 48)
                        .background(Color.neonCyan.opacity(0.1))
                        .cornerRadius(10)

                    VStack(alignment: .leading, spacing: 4) {
                        Text(course.title)
                            .font(.headline)
                            .foregroundColor(.textPrimary)

                        // Tags
                        HStack(spacing: 6) {
                            ForEach(course.tags, id: \.self) { tag in
                                TagView(text: tag)
                            }
                        }
                    }

                    Spacer()

                    // Chevron
                    Image(systemName: "chevron.right")
                        .foregroundColor(.textMuted)
                        .font(.caption)
                }

                // Description
                Text(course.description)
                    .font(.subheadline)
                    .foregroundColor(.textMuted)
                    .lineLimit(3)
                    .multilineTextAlignment(.leading)

                // Progress bar (placeholder - connect to progress service later)
                ProgressBarView(progress: 0, gradient: course.gradient)
                    .opacity(0) // Hidden until progress tracking is implemented
            }
            .padding(16)
            .cardStyle()
        }
        .buttonStyle(.plain)
    }
}

// MARK: - Tag View

struct TagView: View {
    let text: String

    var body: some View {
        Text(text)
            .font(.caption2)
            .fontWeight(.medium)
            .foregroundColor(.neonCyan)
            .padding(.horizontal, 8)
            .padding(.vertical, 3)
            .background(Color.neonCyan.opacity(0.1))
            .cornerRadius(4)
    }
}

// MARK: - Progress Bar View

struct ProgressBarView: View {
    let progress: Double // 0.0 to 1.0
    let gradient: LinearGradient

    var body: some View {
        GeometryReader { geometry in
            ZStack(alignment: .leading) {
                // Background track
                RoundedRectangle(cornerRadius: 4)
                    .fill(Color.bgDark)

                // Progress fill
                RoundedRectangle(cornerRadius: 4)
                    .fill(gradient)
                    .frame(width: geometry.size.width * CGFloat(progress))
                    .neonGlow(color: .neonCyan, radius: 5)
            }
        }
        .frame(height: 6)
    }
}

#Preview {
    NavigationStack {
        ScrollView {
            VStack {
                CourseCardView(course: .sample)
            }
            .padding()
        }
        .background(Color.bgDark)
    }
}
