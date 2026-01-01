import SwiftUI

@main
struct MagicInternetMathApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .preferredColorScheme(.dark)
        }
    }
}

struct ContentView: View {
    var body: some View {
        TabView {
            CourseListView()
                .tabItem {
                    Label("Courses", systemImage: "book.fill")
                }

            ProgressDashboardView()
                .tabItem {
                    Label("Progress", systemImage: "chart.bar.fill")
                }

            LeaderboardView()
                .tabItem {
                    Label("Leaderboard", systemImage: "trophy.fill")
                }

            SettingsView()
                .tabItem {
                    Label("Settings", systemImage: "gearshape.fill")
                }
        }
        .tint(.neonCyan)
    }
}

struct ProgressDashboardView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("Progress Dashboard")
                    .font(.title)
                    .foregroundColor(.textPrimary)
                Text("Coming soon...")
                    .foregroundColor(.textMuted)
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(Color.bgDark)
            .navigationTitle("Progress")
        }
    }
}

struct SettingsView: View {
    @StateObject private var authService = NostrAuthService.shared
    @State private var npubInput = ""
    @State private var showNpubInput = false
    @State private var displayNameInput = ""
    @State private var showDisplayNameEditor = false

    var body: some View {
        NavigationStack {
            List {
                Section("Account") {
                    if authService.isAuthenticated {
                        // Connected state
                        VStack(alignment: .leading, spacing: 8) {
                            HStack {
                                Image(systemName: "checkmark.circle.fill")
                                    .foregroundColor(.success)
                                Text("Connected")
                                    .foregroundColor(.success)
                            }

                            if let displayName = authService.displayName {
                                Text(displayName)
                                    .font(.headline)
                                    .foregroundColor(.textPrimary)
                            }

                            if let npub = authService.npub {
                                Text(shortenNpub(npub))
                                    .font(.caption.monospaced())
                                    .foregroundColor(.textMuted)
                            }
                        }
                        .padding(.vertical, 4)

                        Button(action: { showDisplayNameEditor = true }) {
                            HStack {
                                Image(systemName: "pencil")
                                    .foregroundColor(.neonCyan)
                                Text("Edit Display Name")
                            }
                        }

                        Button(role: .destructive, action: { authService.disconnect() }) {
                            HStack {
                                Image(systemName: "xmark.circle")
                                Text("Disconnect")
                            }
                        }
                    } else {
                        // Not connected state
                        Button(action: { showNpubInput = true }) {
                            HStack {
                                Image(systemName: "bolt.fill")
                                    .foregroundColor(.neonCyan)
                                Text("Connect with Nostr")
                            }
                        }
                    }

                    if let error = authService.error {
                        Text(error)
                            .font(.caption)
                            .foregroundColor(.error)
                    }
                }

                Section("About") {
                    HStack {
                        Text("Version")
                        Spacer()
                        Text("1.0.0")
                            .foregroundColor(.textMuted)
                    }
                }
            }
            .navigationTitle("Settings")
            .sheet(isPresented: $showNpubInput) {
                NpubInputSheet(npubInput: $npubInput) {
                    do {
                        try authService.connect(npub: npubInput)
                        npubInput = ""
                        showNpubInput = false
                    } catch {
                        authService.error = error.localizedDescription
                    }
                }
            }
            .sheet(isPresented: $showDisplayNameEditor) {
                DisplayNameSheet(displayName: $displayNameInput, currentName: authService.displayName) {
                    authService.updateDisplayName(displayNameInput.isEmpty ? nil : displayNameInput)
                    showDisplayNameEditor = false
                }
            }
        }
    }

    private func shortenNpub(_ npub: String) -> String {
        guard npub.count > 16 else { return npub }
        return "\(npub.prefix(12))...\(npub.suffix(8))"
    }
}

// MARK: - Npub Input Sheet

struct NpubInputSheet: View {
    @Binding var npubInput: String
    @Environment(\.dismiss) var dismiss
    let onConnect: () -> Void

    var body: some View {
        NavigationStack {
            VStack(spacing: 24) {
                VStack(spacing: 12) {
                    Image(systemName: "person.circle.fill")
                        .font(.system(size: 48))
                        .foregroundColor(.neonCyan)

                    Text("Connect with Nostr")
                        .font(.title2.bold())
                        .foregroundColor(.textPrimary)

                    Text("Paste your public key (npub) to link your Nostr identity.")
                        .font(.subheadline)
                        .foregroundColor(.textMuted)
                        .multilineTextAlignment(.center)
                        .padding(.horizontal)
                }

                VStack(alignment: .leading, spacing: 8) {
                    Text("Public Key (npub)")
                        .font(.caption)
                        .foregroundColor(.textMuted)

                    TextField("npub1...", text: $npubInput)
                        .textFieldStyle(.roundedBorder)
                        .autocapitalization(.none)
                        .disableAutocorrection(true)
                }
                .padding(.horizontal)

                VStack(spacing: 8) {
                    Image(systemName: "info.circle.fill")
                        .foregroundColor(.neonCyan)
                    Text("Your npub is public and safe to share. Find it in your Nostr client's profile settings.")
                        .font(.caption)
                        .foregroundColor(.textMuted)
                        .multilineTextAlignment(.center)
                }
                .padding()
                .background(Color.neonCyan.opacity(0.1))
                .cornerRadius(8)
                .padding(.horizontal)

                Spacer()

                Button(action: onConnect) {
                    Text("Connect")
                        .font(.headline)
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(npubInput.lowercased().hasPrefix("npub1") ? Color.neonCyan : Color.gray)
                        .foregroundColor(.bgDark)
                        .cornerRadius(12)
                }
                .disabled(!npubInput.lowercased().hasPrefix("npub1"))
                .padding(.horizontal)
            }
            .padding(.vertical)
            .background(Color.bgDark)
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarLeading) {
                    Button("Cancel") { dismiss() }
                }
            }
        }
    }
}

// MARK: - Display Name Sheet

struct DisplayNameSheet: View {
    @Binding var displayName: String
    let currentName: String?
    @Environment(\.dismiss) var dismiss
    let onSave: () -> Void

    var body: some View {
        NavigationStack {
            VStack(spacing: 24) {
                VStack(alignment: .leading, spacing: 8) {
                    Text("Display Name")
                        .font(.caption)
                        .foregroundColor(.textMuted)

                    TextField("Enter display name", text: $displayName)
                        .textFieldStyle(.roundedBorder)
                }
                .padding(.horizontal)
                .padding(.top)

                Text("This name will appear on leaderboards instead of your npub.")
                    .font(.caption)
                    .foregroundColor(.textMuted)
                    .padding(.horizontal)

                Spacer()

                Button(action: onSave) {
                    Text("Save")
                        .font(.headline)
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(Color.neonCyan)
                        .foregroundColor(.bgDark)
                        .cornerRadius(12)
                }
                .padding(.horizontal)
            }
            .background(Color.bgDark)
            .navigationTitle("Edit Display Name")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarLeading) {
                    Button("Cancel") { dismiss() }
                }
            }
            .onAppear {
                displayName = currentName ?? ""
            }
        }
    }
}

#Preview {
    ContentView()
}
