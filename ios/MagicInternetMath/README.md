# Magic Internet Math iOS App

Native SwiftUI iOS app for Magic Internet Math.

## Setup Instructions

### Option 1: Using XcodeGen (Recommended)

1. Install XcodeGen:
   ```bash
   brew install xcodegen
   ```

2. Generate the Xcode project:
   ```bash
   cd ios/MagicInternetMath
   xcodegen generate
   ```

3. Open the project:
   ```bash
   open MagicInternetMath.xcodeproj
   ```

### Option 2: Manual Xcode Project

1. Open Xcode
2. Create new project: File → New → Project
3. Choose "App" template, SwiftUI interface
4. Name it "MagicInternetMath"
5. Save to this directory
6. Delete the auto-generated ContentView.swift
7. Add all files from `MagicInternetMath/` folder to the project
8. Configure Info.plist path in Build Settings

## Project Structure

```
MagicInternetMath/
├── App/
│   └── MagicInternetMathApp.swift    # App entry point
├── Models/
│   ├── Course.swift                   # Course data model
│   └── Section.swift                  # Section data model
├── Views/
│   ├── CourseListView.swift           # Main HUB view
│   ├── CourseCardView.swift           # Course cards
│   └── CourseWebView.swift            # WebView wrapper
├── Services/
│   ├── CourseDataService.swift        # Course data provider
│   └── ProgressService.swift          # Local progress storage
├── Theme/
│   └── Theme.swift                    # Colors and styles
└── Resources/
    ├── Assets.xcassets/               # App icons
    ├── courses.json                   # Course data
    ├── Info.plist                     # App configuration
    └── LaunchScreen.storyboard        # Launch screen
```

## Adding App Icon

1. Create a 1024x1024 PNG image
2. Add it to `Resources/Assets.xcassets/AppIcon.appiconset/` as `AppIcon.png`

## TestFlight Deployment

1. In Xcode: Product → Archive
2. Window → Organizer → Distribute App
3. Choose TestFlight distribution
4. Upload to App Store Connect

## Features

- Course catalog matching web HUB
- WebView navigation to course content
- Local progress tracking (UserDefaults)
- Dark cyberpunk theme
- Nostr auth placeholder (coming in v2)

## Requirements

- iOS 16.0+
- Xcode 15.0+
- Swift 5.9+
