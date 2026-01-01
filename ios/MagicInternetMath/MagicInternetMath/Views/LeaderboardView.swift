import SwiftUI

struct LeaderboardView: View {
    @StateObject private var service = LeaderboardService.shared
    @State private var selectedCourse: LeaderboardCourse = .overall

    var body: some View {
        NavigationStack {
            ZStack {
                Color.bgDark.ignoresSafeArea()

                VStack(spacing: 0) {
                    // Course picker
                    Picker("Course", selection: $selectedCourse) {
                        ForEach(LeaderboardCourse.allCases) { course in
                            Text(course.displayName).tag(course)
                        }
                    }
                    .pickerStyle(.menu)
                    .tint(.neonCyan)
                    .padding()
                    .onChange(of: selectedCourse) { newValue in
                        Task {
                            await service.fetchLeaderboard(courseId: newValue.rawValue)
                        }
                    }

                    // Content
                    if service.isLoading {
                        Spacer()
                        ProgressView()
                            .progressViewStyle(CircularProgressViewStyle(tint: .neonCyan))
                            .scaleEffect(1.5)
                        Spacer()
                    } else if let error = service.error {
                        Spacer()
                        ErrorView(message: error) {
                            Task {
                                await service.fetchLeaderboard(courseId: selectedCourse.rawValue)
                            }
                        }
                        Spacer()
                    } else if service.rankings.isEmpty {
                        Spacer()
                        EmptyLeaderboardView()
                        Spacer()
                    } else {
                        // Rankings list
                        ScrollView {
                            LazyVStack(spacing: 8) {
                                ForEach(service.rankings) { entry in
                                    LeaderboardRow(entry: entry)
                                }
                            }
                            .padding()
                        }
                        .refreshable {
                            await service.fetchLeaderboard(courseId: selectedCourse.rawValue)
                        }
                    }
                }
            }
            .navigationTitle("Leaderboard")
            .navigationBarTitleDisplayMode(.inline)
        }
        .task {
            await service.fetchLeaderboard(courseId: selectedCourse.rawValue)
        }
    }
}

// MARK: - Leaderboard Row

struct LeaderboardRow: View {
    let entry: LeaderboardEntry

    var body: some View {
        HStack(spacing: 12) {
            // Rank
            ZStack {
                if let medal = entry.medal {
                    Text(medal)
                        .font(.title2)
                } else {
                    Text("#\(entry.rank)")
                        .font(.subheadline.bold())
                        .foregroundColor(.textMuted)
                }
            }
            .frame(width: 44)

            // Name and npub
            VStack(alignment: .leading, spacing: 2) {
                Text(entry.displayText)
                    .font(.body.weight(.semibold))
                    .foregroundColor(.textPrimary)

                if entry.displayName != nil {
                    Text(entry.shortNpub)
                        .font(.caption2.monospaced())
                        .foregroundColor(.textMuted)
                }
            }

            Spacer()

            // XP and Level
            VStack(alignment: .trailing, spacing: 2) {
                Text("\(entry.xp.formatted()) XP")
                    .font(.subheadline.bold())
                    .foregroundColor(.featuredGold)

                Text("Level \(entry.level)")
                    .font(.caption)
                    .foregroundColor(.textMuted)
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
        .background(entry.rank <= 3 ? Color.featuredGold.opacity(0.08) : Color.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(entry.rank <= 3 ? Color.featuredGold.opacity(0.3) : Color.borderGlow, lineWidth: 1)
        )
    }
}

// MARK: - Empty State

struct EmptyLeaderboardView: View {
    var body: some View {
        VStack(spacing: 16) {
            Text("🏆")
                .font(.system(size: 48))

            Text("No rankings yet!")
                .font(.headline)
                .foregroundColor(.textPrimary)

            Text("Be the first - start a course and earn XP!")
                .font(.subheadline)
                .foregroundColor(.textMuted)
                .multilineTextAlignment(.center)
        }
        .padding()
    }
}

// MARK: - Error View

struct ErrorView: View {
    let message: String
    let retry: () -> Void

    var body: some View {
        VStack(spacing: 16) {
            Image(systemName: "wifi.slash")
                .font(.system(size: 48))
                .foregroundColor(.error)

            Text("Could not load leaderboard")
                .font(.headline)
                .foregroundColor(.textPrimary)

            Text(message)
                .font(.caption)
                .foregroundColor(.textMuted)

            Button("Retry", action: retry)
                .buttonStyle(.borderedProminent)
                .tint(.neonCyan)
        }
        .padding()
    }
}

#Preview {
    LeaderboardView()
}
