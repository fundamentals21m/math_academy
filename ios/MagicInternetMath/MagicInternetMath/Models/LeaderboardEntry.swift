import Foundation

struct LeaderboardEntry: Identifiable, Codable {
    var id: String { npub }
    let rank: Int
    let npub: String
    let displayName: String?
    let xp: Int
    let level: Int

    // Shortened npub for display
    var shortNpub: String {
        guard npub.count > 16 else { return npub }
        return "\(npub.prefix(8))...\(npub.suffix(8))"
    }

    // Medal emoji for top 3
    var medal: String? {
        switch rank {
        case 1: return "🥇"
        case 2: return "🥈"
        case 3: return "🥉"
        default: return nil
        }
    }

    // Display text (name or shortened npub)
    var displayText: String {
        displayName ?? shortNpub
    }
}

// Firebase response wrapper
struct LeaderboardResponse: Codable {
    let result: LeaderboardResult
}

struct LeaderboardResult: Codable {
    let rankings: [LeaderboardEntry]
    let userRank: Int?
}
