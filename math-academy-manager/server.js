const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Paths
const DATA_DIR = path.join(__dirname, 'data');
const BACKUP_DIR = path.join(__dirname, 'backups');
const DATA_FILE = path.join(DATA_DIR, 'project-data.json');

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
    const initialData = {
        testing: [],
        content: [],
        features: [],
        design: [],
        monetization: [],
        team: [],
        subscriptions: []
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
}

// GET - Load project data
app.get('/api/data', (req, res) => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error('Error reading data:', error);
        res.status(500).json({ error: 'Failed to load data' });
    }
});

// POST - Save project data
app.post('/api/data', (req, res) => {
    try {
        const data = req.body;
        
        // Save current data
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        
        // Create timestamped backup every save
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const backupFile = path.join(BACKUP_DIR, `backup-${timestamp}.json`);
        fs.writeFileSync(backupFile, JSON.stringify(data, null, 2));
        
        // Clean old backups (keep last 50)
        cleanOldBackups();
        
        res.json({ success: true, message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// GET - List backups
app.get('/api/backups', (req, res) => {
    try {
        const files = fs.readdirSync(BACKUP_DIR)
            .filter(f => f.endsWith('.json'))
            .map(f => ({
                name: f,
                path: `/api/backups/${f}`,
                date: fs.statSync(path.join(BACKUP_DIR, f)).mtime
            }))
            .sort((a, b) => b.date - a.date);
        
        res.json(files);
    } catch (error) {
        console.error('Error listing backups:', error);
        res.status(500).json({ error: 'Failed to list backups' });
    }
});

// GET - Download specific backup
app.get('/api/backups/:filename', (req, res) => {
    try {
        const filePath = path.join(BACKUP_DIR, req.params.filename);
        if (fs.existsSync(filePath)) {
            res.download(filePath);
        } else {
            res.status(404).json({ error: 'Backup not found' });
        }
    } catch (error) {
        console.error('Error downloading backup:', error);
        res.status(500).json({ error: 'Failed to download backup' });
    }
});

// Clean old backups (keep last 50)
function cleanOldBackups() {
    try {
        const files = fs.readdirSync(BACKUP_DIR)
            .filter(f => f.endsWith('.json'))
            .map(f => ({
                name: f,
                path: path.join(BACKUP_DIR, f),
                time: fs.statSync(path.join(BACKUP_DIR, f)).mtime.getTime()
            }))
            .sort((a, b) => b.time - a.time);
        
        // Delete files beyond the 50th
        files.slice(50).forEach(file => {
            fs.unlinkSync(file.path);
        });
    } catch (error) {
        console.error('Error cleaning backups:', error);
    }
}

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════╗
║   Math Academy Project Manager Server      ║
╚════════════════════════════════════════════╝

✓ Server running at: http://localhost:${PORT}
✓ Data file: ${DATA_FILE}
✓ Backups folder: ${BACKUP_DIR}

Press Ctrl+C to stop the server
    `);
});
