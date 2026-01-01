import Foundation

class NostrAuthService: ObservableObject {
    static let shared = NostrAuthService()

    private let npubKey = "nostr_npub"
    private let displayNameKey = "nostr_displayName"

    @Published var isAuthenticated = false
    @Published var npub: String?
    @Published var displayName: String?
    @Published var error: String?

    private init() {
        // Load existing auth on init
        loadStoredIdentity()
    }

    // MARK: - Load Stored Identity

    private func loadStoredIdentity() {
        if let storedNpub = UserDefaults.standard.string(forKey: npubKey) {
            self.npub = storedNpub
            self.displayName = UserDefaults.standard.string(forKey: displayNameKey)
            self.isAuthenticated = true
        }
    }

    // MARK: - Connect with npub

    @MainActor
    func connect(npub: String) throws {
        error = nil

        // Validate npub
        let identity = try NostrIdentity(npub: npub)

        // Store in UserDefaults
        UserDefaults.standard.set(identity.npub, forKey: npubKey)

        self.npub = identity.npub
        self.isAuthenticated = true
    }

    // MARK: - Disconnect

    @MainActor
    func disconnect() {
        UserDefaults.standard.removeObject(forKey: npubKey)
        UserDefaults.standard.removeObject(forKey: displayNameKey)
        npub = nil
        displayName = nil
        isAuthenticated = false
    }

    // MARK: - Update Display Name

    @MainActor
    func updateDisplayName(_ name: String?) {
        if let name = name, !name.isEmpty {
            UserDefaults.standard.set(name, forKey: displayNameKey)
            self.displayName = name
        } else {
            UserDefaults.standard.removeObject(forKey: displayNameKey)
            self.displayName = nil
        }
    }
}
