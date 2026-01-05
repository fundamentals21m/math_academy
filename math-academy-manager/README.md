# Math Academy Project Manager

A local web application for managing your Math Academy project with automatic file system backups.

## Features

- ✅ Track tasks across 5 categories (Testing, Content, Features, Design, Monetization)
- 👥 Manage team members and collaborators
- 💳 Track paid subscriptions and services
- ✏️ Edit any entry
- 💾 Automatic file system backups (keeps last 50)
- 🔄 Auto-save on every change
- 📁 View and download backup files

## Setup Instructions

### 1. Install Node.js
If you don't have Node.js installed, download it from: https://nodejs.org/

### 2. Navigate to the project folder
```bash
cd /path/to/math-academy-manager
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the server
```bash
npm start
```

The server will start on http://localhost:3000

## Usage

1. Open your browser and go to: **http://localhost:3000**
2. Start adding tasks, team members, and subscriptions
3. All changes are automatically saved to `data/project-data.json`
4. Backup files are created in `backups/` folder (last 50 kept)
5. Click "View Backups" to see and download previous versions

## File Structure

```
math-academy-manager/
├── server.js              # Node.js Express server
├── package.json           # Project dependencies
├── public/
│   ├── index.html         # Main interface
│   ├── styles.css         # Styling
│   └── app.js            # Client-side logic
├── data/
│   └── project-data.json  # Your actual data file
└── backups/               # Timestamped backup files
```

## Data Location

Your data is saved in two places:
1. **Primary**: `data/project-data.json` - this is your main data file
2. **Backups**: `backups/` folder - automatic timestamped backups on every save

## Stopping the Server

Press `Ctrl+C` in the terminal where the server is running.

## Development Mode (with auto-reload)

```bash
npm run dev
```

This uses nodemon to automatically restart the server when you make changes to the code.

## Troubleshooting

**Server won't start:**
- Make sure port 3000 is not already in use
- Check that Node.js is installed: `node --version`

**Changes not saving:**
- Check the terminal for error messages
- Ensure you have write permissions in the project folder

**Lost data:**
- Check the `backups/` folder for recent backup files
- Restore by copying a backup file to `data/project-data.json`
