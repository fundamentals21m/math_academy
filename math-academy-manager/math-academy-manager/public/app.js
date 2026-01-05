// Initialize data structure
let projectData = {
    testing: [],
    content: [],
    features: [],
    design: [],
    monetization: [],
    team: [],
    subscriptions: []
};

// Load data from server on page load
window.addEventListener('DOMContentLoaded', async () => {
    await loadData();
});

// Load data from server
async function loadData() {
    try {
        const response = await fetch('/api/data');
        if (response.ok) {
            projectData = await response.json();
            renderAll();
        }
    } catch (error) {
        console.error('Error loading data:', error);
        showSaveStatus('error', 'Failed to load data');
    }
}

// Save data to server
async function saveData() {
    try {
        showSaveStatus('saving', 'Saving...');
        
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData)
        });
        
        if (response.ok) {
            showSaveStatus('saved', 'Saved ✓');
        } else {
            showSaveStatus('error', 'Save failed');
        }
    } catch (error) {
        console.error('Error saving data:', error);
        showSaveStatus('error', 'Save failed');
    }
}

// Show save status indicator
function showSaveStatus(status, message) {
    const statusEl = document.getElementById('save-status');
    const indicatorEl = document.getElementById('save-indicator');
    
    statusEl.className = `save-status show ${status}`;
    indicatorEl.textContent = message;
    
    setTimeout(() => {
        statusEl.classList.remove('show');
    }, 2000);
}

// Add new item
function addItem(category) {
    const input = document.getElementById(`${category}-input`);
    const text = input.value.trim();
    
    if (!text) return;

    const priority = document.querySelector(`input[name="${category}-priority"]:checked`).value;

    const item = {
        id: Date.now(),
        text: text,
        completed: false,
        priority: priority,
        timestamp: new Date().toLocaleString()
    };

    projectData[category].push(item);
    input.value = '';
    saveData();
    renderCategory(category);
}

// Toggle item completion
function toggleItem(category, id) {
    const item = projectData[category].find(i => i.id === id);
    if (item) {
        item.completed = !item.completed;
        saveData();
        renderCategory(category);
    }
}

// Delete item
function deleteItem(category, id) {
    if (!confirm('Delete this item?')) return;
    projectData[category] = projectData[category].filter(i => i.id !== id);
    saveData();
    renderCategory(category);
}

// Render a single category
function renderCategory(category) {
    const list = document.getElementById(`${category}-list`);
    const count = document.getElementById(`${category}-count`);
    const items = projectData[category];

    count.textContent = items.length;

    if (items.length === 0) {
        list.innerHTML = '<div class="empty-state">No items yet. Add one above!</div>';
        return;
    }

    list.innerHTML = items.map(item => `
        <div class="item ${item.completed ? 'completed' : ''}">
            <input type="checkbox" class="checkbox" 
                   ${item.completed ? 'checked' : ''} 
                   onchange="toggleItem('${category}', ${item.id})">
            <div class="item-content">
                <div class="item-text">${item.text}</div>
                <div class="item-meta">
                    <span class="priority ${item.priority}">${item.priority.toUpperCase()}</span>
                    <span class="timestamp">${item.timestamp}</span>
                </div>
            </div>
            <div class="item-actions">
                <button class="edit-btn" onclick="editItem('${category}', ${item.id})">✏️</button>
                <button class="delete-btn" onclick="deleteItem('${category}', ${item.id})">🗑️</button>
            </div>
        </div>
    `).join('');
}

// Render all categories
function renderAll() {
    ['testing', 'content', 'features', 'design', 'monetization'].forEach(renderCategory);
    renderTeam();
    renderSubscriptions();
}

// Add team member
function addTeamMember() {
    const name = document.getElementById('team-name').value.trim();
    const role = document.getElementById('team-role').value.trim();
    const email = document.getElementById('team-email').value.trim();
    const phone = document.getElementById('team-phone').value.trim();
    const notes = document.getElementById('team-notes').value.trim();

    if (!name || !role) {
        alert('Please enter at least a name and role');
        return;
    }

    const member = {
        id: Date.now(),
        name: name,
        role: role,
        email: email,
        phone: phone,
        notes: notes,
        timestamp: new Date().toLocaleString()
    };

    projectData.team.push(member);
    
    // Clear form
    document.getElementById('team-name').value = '';
    document.getElementById('team-role').value = '';
    document.getElementById('team-email').value = '';
    document.getElementById('team-phone').value = '';
    document.getElementById('team-notes').value = '';

    saveData();
    renderTeam();
}

// Delete team member
function deleteTeamMember(id) {
    if (!confirm('Remove this team member?')) return;
    projectData.team = projectData.team.filter(m => m.id !== id);
    saveData();
    renderTeam();
}

// Render team members
function renderTeam() {
    const list = document.getElementById('team-list');
    const count = document.getElementById('team-count');
    const members = projectData.team;

    count.textContent = members.length;

    if (members.length === 0) {
        list.innerHTML = '<div class="empty-state">No team members yet. Add collaborators above!</div>';
        return;
    }

    list.innerHTML = members.map(member => `
        <div class="team-item">
            <div class="team-header">
                <div>
                    <div class="team-name">${member.name}</div>
                    <div class="team-role">${member.role}</div>
                </div>
                <div class="item-actions">
                    <button class="edit-btn" onclick="editTeamMember(${member.id})">✏️ Edit</button>
                    <button class="team-delete" onclick="deleteTeamMember(${member.id})">🗑️ Remove</button>
                </div>
            </div>
            ${member.email || member.phone ? `
                <div class="team-contact">
                    ${member.email ? `<span>📧 ${member.email}</span>` : ''}
                    ${member.phone ? `<span>📱 ${member.phone}</span>` : ''}
                </div>
            ` : ''}
            ${member.notes ? `
                <div class="team-notes">${member.notes}</div>
            ` : ''}
        </div>
    `).join('');
}

// Add subscription
function addSubscription() {
    const name = document.getElementById('sub-name').value.trim();
    const cost = parseFloat(document.getElementById('sub-cost').value);
    const frequency = document.getElementById('sub-frequency').value;
    const renewal = document.getElementById('sub-renewal').value;
    const purpose = document.getElementById('sub-purpose').value.trim();

    if (!name || isNaN(cost) || cost <= 0) {
        alert('Please enter a service name and valid cost');
        return;
    }

    const subscription = {
        id: Date.now(),
        name: name,
        cost: cost,
        frequency: frequency,
        renewal: renewal,
        purpose: purpose,
        timestamp: new Date().toLocaleString()
    };

    projectData.subscriptions.push(subscription);
    
    // Clear form
    document.getElementById('sub-name').value = '';
    document.getElementById('sub-cost').value = '';
    document.getElementById('sub-frequency').value = 'monthly';
    document.getElementById('sub-renewal').value = '';
    document.getElementById('sub-purpose').value = '';

    saveData();
    renderSubscriptions();
}

// Delete subscription
function deleteSubscription(id) {
    if (!confirm('Remove this subscription?')) return;
    projectData.subscriptions = projectData.subscriptions.filter(s => s.id !== id);
    saveData();
    renderSubscriptions();
}

// Calculate monthly total
function calculateMonthlyTotal() {
    return projectData.subscriptions.reduce((total, sub) => {
        if (sub.frequency === 'monthly') {
            return total + sub.cost;
        } else if (sub.frequency === 'yearly') {
            return total + (sub.cost / 12);
        }
        return total;
    }, 0);
}

// Check if renewal is soon (within 7 days)
function isRenewalSoon(renewalDate) {
    if (!renewalDate) return false;
    const renewal = new Date(renewalDate);
    const today = new Date();
    const daysUntil = Math.ceil((renewal - today) / (1000 * 60 * 60 * 24));
    return daysUntil >= 0 && daysUntil <= 7;
}

// Render subscriptions
function renderSubscriptions() {
    const list = document.getElementById('subscriptions-list');
    const count = document.getElementById('subscriptions-count');
    const totalDisplay = document.getElementById('subscription-total-display');
    const subscriptions = projectData.subscriptions;

    count.textContent = subscriptions.length;

    // Show monthly total
    const monthlyTotal = calculateMonthlyTotal();
    const yearlyTotal = monthlyTotal * 12;
    
    totalDisplay.innerHTML = subscriptions.length > 0 ? `
        <div class="subscription-total">
            <div class="subscription-total-label">Estimated Monthly Cost</div>
            <div class="subscription-total-amount">$${monthlyTotal.toFixed(2)}</div>
            <div class="subscription-total-label" style="margin-top: 5px;">
                ~$${yearlyTotal.toFixed(2)} per year
            </div>
        </div>
    ` : '';

    if (subscriptions.length === 0) {
        list.innerHTML = '<div class="empty-state">No subscriptions tracked yet. Add your paid services above!</div>';
        return;
    }

    list.innerHTML = subscriptions.map(sub => {
        const renewalWarning = isRenewalSoon(sub.renewal);
        const renewalDate = sub.renewal ? new Date(sub.renewal).toLocaleDateString() : 'Not set';
        
        return `
        <div class="subscription-item">
            <div class="subscription-header">
                <div>
                    <div class="subscription-name">${sub.name}</div>
                    ${renewalWarning ? '<div class="renewal-warning">⚠️ Renewal coming soon!</div>' : ''}
                </div>
                <div style="text-align: right;">
                    <div class="subscription-cost">$${sub.cost.toFixed(2)}</div>
                    <div class="item-actions" style="justify-content: flex-end; margin-top: 8px;">
                        <button class="edit-btn" onclick="editSubscription(${sub.id})">✏️</button>
                        <button class="subscription-delete" onclick="deleteSubscription(${sub.id})">🗑️</button>
                    </div>
                </div>
            </div>
            <div class="subscription-details">
                <div class="subscription-detail">
                    <div class="subscription-detail-label">Frequency</div>
                    <div class="subscription-detail-value">${sub.frequency.charAt(0).toUpperCase() + sub.frequency.slice(1)}</div>
                </div>
                <div class="subscription-detail">
                    <div class="subscription-detail-label">Next Renewal</div>
                    <div class="subscription-detail-value">${renewalDate}</div>
                </div>
                ${sub.frequency === 'yearly' ? `
                <div class="subscription-detail">
                    <div class="subscription-detail-label">Monthly Equivalent</div>
                    <div class="subscription-detail-value">$${(sub.cost / 12).toFixed(2)}/mo</div>
                </div>
                ` : ''}
            </div>
            ${sub.purpose ? `
                <div class="subscription-purpose"><strong>Purpose:</strong> ${sub.purpose}</div>
            ` : ''}
        </div>
    `}).join('');
}

// Modal functions
function closeEditModal() {
    document.getElementById('editModal').classList.remove('show');
}

// Close modal when clicking outside
document.getElementById('editModal').addEventListener('click', (e) => {
    if (e.target.id === 'editModal') {
        closeEditModal();
    }
});

// Edit regular item
function editItem(category, id) {
    const item = projectData[category].find(i => i.id === id);
    if (!item) return;

    const modal = document.getElementById('editModal');
    const modalBody = document.getElementById('modalBody');
    
    document.getElementById('modalTitle').textContent = 'Edit Item';
    
    modalBody.innerHTML = `
        <div class="modal-form">
            <div>
                <label>Task Description</label>
                <input type="text" id="edit-text" value="${item.text}">
            </div>
            <div>
                <label>Priority</label>
                <select id="edit-priority">
                    <option value="high" ${item.priority === 'high' ? 'selected' : ''}>High</option>
                    <option value="medium" ${item.priority === 'medium' ? 'selected' : ''}>Medium</option>
                    <option value="low" ${item.priority === 'low' ? 'selected' : ''}>Low</option>
                </select>
            </div>
            <div class="modal-buttons">
                <button class="modal-save" onclick="saveItemEdit('${category}', ${id})">Save Changes</button>
                <button class="modal-cancel" onclick="closeEditModal()">Cancel</button>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

function saveItemEdit(category, id) {
    const item = projectData[category].find(i => i.id === id);
    if (!item) return;

    const text = document.getElementById('edit-text').value.trim();
    const priority = document.getElementById('edit-priority').value;

    if (!text) {
        alert('Please enter a description');
        return;
    }

    item.text = text;
    item.priority = priority;
    
    saveData();
    renderCategory(category);
    closeEditModal();
}

// Edit team member
function editTeamMember(id) {
    const member = projectData.team.find(m => m.id === id);
    if (!member) return;

    const modal = document.getElementById('editModal');
    const modalBody = document.getElementById('modalBody');
    
    document.getElementById('modalTitle').textContent = 'Edit Team Member';
    
    modalBody.innerHTML = `
        <div class="modal-form">
            <div>
                <label>Name</label>
                <input type="text" id="edit-name" value="${member.name}">
            </div>
            <div>
                <label>Role</label>
                <input type="text" id="edit-role" value="${member.role}">
            </div>
            <div>
                <label>Email</label>
                <input type="email" id="edit-email" value="${member.email || ''}">
            </div>
            <div>
                <label>Phone</label>
                <input type="text" id="edit-phone" value="${member.phone || ''}">
            </div>
            <div>
                <label>Notes</label>
                <textarea id="edit-notes">${member.notes || ''}</textarea>
            </div>
            <div class="modal-buttons">
                <button class="modal-save" onclick="saveTeamEdit(${id})">Save Changes</button>
                <button class="modal-cancel" onclick="closeEditModal()">Cancel</button>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

function saveTeamEdit(id) {
    const member = projectData.team.find(m => m.id === id);
    if (!member) return;

    const name = document.getElementById('edit-name').value.trim();
    const role = document.getElementById('edit-role').value.trim();
    const email = document.getElementById('edit-email').value.trim();
    const phone = document.getElementById('edit-phone').value.trim();
    const notes = document.getElementById('edit-notes').value.trim();

    if (!name || !role) {
        alert('Please enter at least a name and role');
        return;
    }

    member.name = name;
    member.role = role;
    member.email = email;
    member.phone = phone;
    member.notes = notes;
    
    saveData();
    renderTeam();
    closeEditModal();
}

// Edit subscription
function editSubscription(id) {
    const sub = projectData.subscriptions.find(s => s.id === id);
    if (!sub) return;

    const modal = document.getElementById('editModal');
    const modalBody = document.getElementById('modalBody');
    
    document.getElementById('modalTitle').textContent = 'Edit Subscription';
    
    modalBody.innerHTML = `
        <div class="modal-form">
            <div>
                <label>Service Name</label>
                <input type="text" id="edit-sub-name" value="${sub.name}">
            </div>
            <div>
                <label>Cost</label>
                <input type="number" id="edit-sub-cost" value="${sub.cost}" step="0.01">
            </div>
            <div>
                <label>Frequency</label>
                <select id="edit-sub-frequency">
                    <option value="monthly" ${sub.frequency === 'monthly' ? 'selected' : ''}>Monthly</option>
                    <option value="yearly" ${sub.frequency === 'yearly' ? 'selected' : ''}>Yearly</option>
                    <option value="one-time" ${sub.frequency === 'one-time' ? 'selected' : ''}>One-time</option>
                </select>
            </div>
            <div>
                <label>Next Renewal Date</label>
                <input type="date" id="edit-sub-renewal" value="${sub.renewal || ''}">
            </div>
            <div>
                <label>Purpose</label>
                <input type="text" id="edit-sub-purpose" value="${sub.purpose || ''}">
            </div>
            <div class="modal-buttons">
                <button class="modal-save" onclick="saveSubscriptionEdit(${id})">Save Changes</button>
                <button class="modal-cancel" onclick="closeEditModal()">Cancel</button>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

function saveSubscriptionEdit(id) {
    const sub = projectData.subscriptions.find(s => s.id === id);
    if (!sub) return;

    const name = document.getElementById('edit-sub-name').value.trim();
    const cost = parseFloat(document.getElementById('edit-sub-cost').value);
    const frequency = document.getElementById('edit-sub-frequency').value;
    const renewal = document.getElementById('edit-sub-renewal').value;
    const purpose = document.getElementById('edit-sub-purpose').value.trim();

    if (!name || isNaN(cost) || cost <= 0) {
        alert('Please enter a valid service name and cost');
        return;
    }

    sub.name = name;
    sub.cost = cost;
    sub.frequency = frequency;
    sub.renewal = renewal;
    sub.purpose = purpose;
    
    saveData();
    renderSubscriptions();
    closeEditModal();
}

// Backups modal
async function showBackups() {
    try {
        const response = await fetch('/api/backups');
        const backups = await response.json();
        
        const modal = document.getElementById('backupsModal');
        const body = document.getElementById('backupsBody');
        
        if (backups.length === 0) {
            body.innerHTML = '<div class="empty-state">No backups found</div>';
        } else {
            body.innerHTML = backups.map(backup => `
                <div class="backup-file">
                    <div>
                        <div class="backup-file-name">${backup.name}</div>
                        <div class="backup-file-date">${new Date(backup.date).toLocaleString()}</div>
                    </div>
                    <a href="${backup.path}" download>
                        <button class="backup-download-btn">Download</button>
                    </a>
                </div>
            `).join('');
        }
        
        modal.classList.add('show');
    } catch (error) {
        console.error('Error loading backups:', error);
        alert('Failed to load backups');
    }
}

function closeBackupsModal() {
    document.getElementById('backupsModal').classList.remove('show');
}

// Close backups modal when clicking outside
document.getElementById('backupsModal').addEventListener('click', (e) => {
    if (e.target.id === 'backupsModal') {
        closeBackupsModal();
    }
});

// Allow adding items with Enter key
['testing', 'content', 'features', 'design', 'monetization'].forEach(category => {
    document.getElementById(`${category}-input`).addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItem(category);
        }
    });
});
