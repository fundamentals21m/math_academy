import SwiftUI

// MARK: - Color Extensions

extension Color {
    // Neon Cyberpunk Palette (from main.css)
    static let neonCyan = Color(hex: "#00f5ff")
    static let neonMagenta = Color(hex: "#ff00ff")
    static let neonPurple = Color(hex: "#bf00ff")
    static let neonBlue = Color(hex: "#4d4dff")
    static let neonGreen = Color(hex: "#00ff9f")

    // Background colors
    static let bgDark = Color(hex: "#0a0a0f")
    static let bgLight = Color(hex: "#12121a")
    static let bgCard = Color(hex: "#12121a").opacity(0.9)

    // Text colors
    static let textPrimary = Color(hex: "#e8e8ff")
    static let textMuted = Color(hex: "#8888aa")

    // Border
    static let borderGlow = Color(hex: "#00f5ff").opacity(0.15)

    // Status colors
    static let success = Color(hex: "#00ff9f")
    static let error = Color(hex: "#ff3366")
    static let warning = Color(hex: "#ffaa00")

    // Section badge colors
    static let featuredGold = Color(hex: "#fbbf24")
    static let beginnerGreen = Color(hex: "#4ade80")
    static let subjectIndigo = Color(hex: "#818cf8")

    // Hex initializer
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3:
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6:
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8:
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}

// MARK: - View Modifiers

extension View {
    func neonGlow(color: Color = .neonCyan, radius: CGFloat = 10) -> some View {
        self
            .shadow(color: color.opacity(0.6), radius: radius / 2)
            .shadow(color: color.opacity(0.4), radius: radius)
            .shadow(color: color.opacity(0.2), radius: radius * 2)
    }

    func cardStyle() -> some View {
        self
            .background(Color.bgCard)
            .cornerRadius(16)
            .overlay(
                RoundedRectangle(cornerRadius: 16)
                    .stroke(Color.borderGlow, lineWidth: 1)
            )
    }
}

// MARK: - Gradients

extension LinearGradient {
    static let neonGradient = LinearGradient(
        colors: [.neonCyan, .neonMagenta, .neonPurple],
        startPoint: .leading,
        endPoint: .trailing
    )

    static let cardGradient = LinearGradient(
        colors: [.neonCyan.opacity(0.1), .neonMagenta.opacity(0.05)],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
}
