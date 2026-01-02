import SwiftUI
import WebKit

struct CourseWebView: View {
    let course: Course
    @State private var isLoading = true
    @State private var loadError: String?
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        ZStack {
            Color.bgDark.ignoresSafeArea()

            if let error = loadError {
                // Error state
                VStack(spacing: 16) {
                    Image(systemName: "wifi.slash")
                        .font(.system(size: 48))
                        .foregroundColor(.error)

                    Text("Failed to load course")
                        .font(.headline)
                        .foregroundColor(.textPrimary)

                    Text(error)
                        .font(.caption)
                        .foregroundColor(.textMuted)
                        .multilineTextAlignment(.center)
                        .padding(.horizontal)

                    Button("Try Again") {
                        loadError = nil
                        isLoading = true
                    }
                    .buttonStyle(.borderedProminent)
                    .tint(.neonCyan)
                }
            } else {
                // WebView
                WebViewRepresentable(
                    url: course.fullURL!,
                    isLoading: $isLoading,
                    loadError: $loadError
                )

                // Loading overlay
                if isLoading {
                    VStack(spacing: 16) {
                        ProgressView()
                            .progressViewStyle(CircularProgressViewStyle(tint: .neonCyan))
                            .scaleEffect(1.5)

                        Text("Loading \(course.title)...")
                            .font(.subheadline)
                            .foregroundColor(.textMuted)
                    }
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
                    .background(Color.bgDark.opacity(0.9))
                }
            }
        }
        .navigationTitle(course.title)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                if let leaderboardUrl = course.leaderboardUrl,
                   let url = URL(string: Course.baseURL + leaderboardUrl) {
                    Link(destination: url) {
                        Image(systemName: "trophy.fill")
                            .foregroundColor(.featuredGold)
                    }
                }
            }
        }
    }
}

// MARK: - WebView Representable

struct WebViewRepresentable: UIViewRepresentable {
    let url: URL
    @Binding var isLoading: Bool
    @Binding var loadError: String?

    func makeUIView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()

        // Enable JavaScript
        configuration.defaultWebpagePreferences.allowsContentJavaScript = true

        // Enable localStorage persistence
        configuration.websiteDataStore = .default()

        // Add message handler for progress sync (future use)
        configuration.userContentController.add(context.coordinator, name: "progressHandler")

        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.navigationDelegate = context.coordinator
        webView.scrollView.contentInsetAdjustmentBehavior = .automatic
        webView.isOpaque = false
        webView.backgroundColor = UIColor(Color.bgDark)
        webView.scrollView.backgroundColor = UIColor(Color.bgDark)

        // Allow back/forward gestures
        webView.allowsBackForwardNavigationGestures = true

        return webView
    }

    func updateUIView(_ webView: WKWebView, context: Context) {
        // Only load if not already loading
        if webView.url == nil {
            let request = URLRequest(url: url)
            webView.load(request)
        }
    }

    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }

    class Coordinator: NSObject, WKNavigationDelegate, WKScriptMessageHandler {
        var parent: WebViewRepresentable

        init(_ parent: WebViewRepresentable) {
            self.parent = parent
        }

        // MARK: - WKNavigationDelegate

        func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
            parent.isLoading = true
            parent.loadError = nil
        }

        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            parent.isLoading = false
        }

        func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
            parent.isLoading = false
            parent.loadError = error.localizedDescription
        }

        func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
            parent.isLoading = false
            parent.loadError = error.localizedDescription
        }

        // MARK: - WKScriptMessageHandler

        func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
            // Handle messages from JavaScript (for progress sync)
            guard let body = message.body as? [String: Any],
                  let type = body["type"] as? String else { return }

            switch type {
            case "sectionCompleted":
                if let sectionId = body["sectionId"] as? String,
                   let courseId = body["courseId"] as? String {
                    // Update iOS progress service
                    ProgressService.shared.markSectionCompleted(
                        sectionId,
                        courseId: courseId,
                        totalSections: 12  // Default, actual value varies by course
                    )
                    print("iOS Progress: Section completed - \(sectionId)")
                }
            case "quizCompleted":
                if let sectionId = body["sectionId"] as? String,
                   let courseId = body["courseId"] as? String,
                   let score = body["score"] as? Int {
                    // Quiz completions also count as section progress
                    ProgressService.shared.markSectionCompleted(
                        "\(sectionId):quiz",
                        courseId: courseId,
                        totalSections: 12
                    )
                    print("iOS Progress: Quiz completed - \(sectionId) score: \(score)")
                }
            default:
                break
            }
        }
    }
}

#Preview {
    NavigationStack {
        CourseWebView(course: .sample)
    }
}
