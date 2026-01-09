/**
 * Admin Renderer for Course Management GUI
 * Handles authentication, data loading, drag & drop, and Firebase operations
 */

// State
let state = {
  isAdmin: false,
  currentNpub: null,
  sections: [],
  courses: [],
  admins: [],
  originalSections: [],
  originalCourses: [],
  hasUnsavedChanges: false,
  draggedItem: null,
  draggedType: null, // 'section' or 'course'
  editingCategoryId: null, // For edit vs add mode
};

// Wait for Firebase Auth to be ready and get current user
async function waitForAuth() {
  // Wait for Firebase to be initialized
  await waitForFirebase();
  
  return new Promise(async (resolve) => {
    try {
      const { getAuth, onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
      const auth = getAuth(window.firebaseApp);
      
      // Check current state first
      if (auth.currentUser) {
        resolve({ getNpub: () => auth.currentUser.uid });
        return;
      }
      
      // Wait for auth state to settle
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve({ getNpub: () => user?.uid || null });
      });
      
      // Timeout after 3 seconds
      setTimeout(() => {
        resolve({ getNpub: () => null });
      }, 3000);
    } catch (error) {
      console.error('Error waiting for auth:', error);
      resolve({ getNpub: () => null });
    }
  });
}

// Wait for Firebase to be ready
function waitForFirebase() {
  return new Promise((resolve) => {
    const checkFirebase = () => {
      if (window.callFunction) {
        resolve();
      } else {
        setTimeout(checkFirebase, 100);
      }
    };
    checkFirebase();
  });
}

/**
 * Initialize the admin page
 */
async function init() {
  await waitForFirebase();
  const nostrAuth = await waitForAuth();

  // Check if user is logged in
  const npub = nostrAuth.getNpub();
  if (!npub) {
    showAccessDenied();
    // Listen for Firebase auth state changes
    setupAuthListener();
    return;
  }

  // Check if user is admin
  await checkAdminAndLoad(npub);
}

/**
 * Setup Firebase auth state listener for login detection
 */
async function setupAuthListener() {
  try {
    const { getAuth, onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
    const auth = getAuth(window.firebaseApp);
    
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User just logged in
        await checkAdminAndLoad(user.uid);
      }
    });
  } catch (error) {
    console.error('Error setting up auth listener:', error);
  }
}

// Auth listener is setup in setupAuthListener() function above

/**
 * Check admin status and load data
 */
async function checkAdminAndLoad(npub) {
  try {
    showLoading('Checking admin access...');
    
    const result = await window.callFunction('isCourseAdmin');
    
    if (!result.isAdmin) {
      showAccessDenied();
      return;
    }

    state.isAdmin = true;
    state.currentNpub = npub;

    // Load the data
    await loadData();

    // Show admin content
    showAdminContent();

    // Set up event listeners
    setupEventListeners();
  } catch (error) {
    console.error('Error checking admin status:', error);
    showAccessDenied();
  }
}

/**
 * Load course configuration data
 */
async function loadData() {
  showLoading('Loading course configuration...');
  
  try {
    const config = await window.callFunction('getCourseConfig');
    
    state.sections = config.sections || [];
    state.courses = config.courses || [];
    state.admins = config.admins || [];
    
    // Store original state for change detection
    state.originalSections = JSON.parse(JSON.stringify(state.sections));
    state.originalCourses = JSON.parse(JSON.stringify(state.courses));
    
    renderAll();
  } catch (error) {
    console.error('Error loading data:', error);
    showToast('Failed to load configuration', 'error');
  }
}

/**
 * Render all panels
 */
function renderAll() {
  renderCategories();
  renderCourses();
  renderAdmins();
  updateCategoryFilter();
}

/**
 * Render categories list
 */
function renderCategories() {
  const container = document.getElementById('category-list');
  if (!container) return;

  if (state.sections.length === 0) {
    container.innerHTML = '<p style="color: #64748b; text-align: center; padding: 2rem;">No categories yet</p>';
    return;
  }

  container.innerHTML = state.sections.map((section, index) => `
    <div class="category-item" 
         draggable="true" 
         data-section-id="${section.id}"
         data-index="${index}">
      <span class="drag-handle">&#9776;</span>
      <div class="category-info">
        <div class="category-title">${escapeHtml(section.title)}</div>
        <div class="category-subtitle">${escapeHtml(section.subtitle || '')}</div>
      </div>
      <span class="category-badge ${section.style}">${section.style}</span>
      <div class="category-actions">
        <button class="btn-secondary btn-small" onclick="editCategory('${section.id}')">Edit</button>
        ${section.id !== 'featured' ? `<button class="btn-danger" onclick="confirmDeleteCategory('${section.id}')">Delete</button>` : ''}
      </div>
    </div>
  `).join('');

  // Setup drag handlers for categories
  setupCategoryDragHandlers();
}

/**
 * Render courses list
 */
function renderCourses() {
  const container = document.getElementById('course-list');
  const filterSelect = document.getElementById('category-filter');
  const searchInput = document.getElementById('course-search');
  
  if (!container) return;

  let filteredCourses = [...state.courses];
  const selectedCategory = filterSelect?.value;

  // Apply search filter
  const searchTerm = searchInput?.value?.toLowerCase();
  if (searchTerm) {
    filteredCourses = filteredCourses.filter(c => 
      c.title?.toLowerCase().includes(searchTerm) ||
      c.description?.toLowerCase().includes(searchTerm) ||
      c.id?.toLowerCase().includes(searchTerm)
    );
  }

  // If a category is selected, filter to show only courses in that category OR not in it (for adding)
  // Actually show all but sort with selected category courses first
  if (selectedCategory) {
    filteredCourses.sort((a, b) => {
      const aInCategory = a.sections?.includes(selectedCategory) ? 0 : 1;
      const bInCategory = b.sections?.includes(selectedCategory) ? 0 : 1;
      return aInCategory - bInCategory;
    });
  }

  if (filteredCourses.length === 0) {
    container.innerHTML = '<p style="color: #64748b; text-align: center; padding: 2rem;">No courses found</p>';
    return;
  }

  container.innerHTML = filteredCourses.map((course, index) => {
    const isChanged = hasCourseChanged(course);
    const isInSelectedCategory = selectedCategory && course.sections?.includes(selectedCategory);
    
    return `
      <div class="course-item ${isChanged ? 'changed' : ''} ${isInSelectedCategory ? 'in-category' : ''}" 
           draggable="true"
           data-course-id="${course.id}"
           data-index="${index}">
        <div class="course-item-header">
          <span class="drag-handle">&#9776;</span>
          <span class="course-icon">${course.icon || ''}</span>
          <span class="course-title">${escapeHtml(course.title)}</span>
        </div>
        <div class="course-categories-grid">
          ${state.sections.map(section => {
            const isInThisCategory = course.sections?.includes(section.id);
            return `
              <div class="category-toggle ${isInThisCategory ? 'active' : ''}" 
                   onclick="toggleCourseCategory('${course.id}', '${section.id}', ${!isInThisCategory})">
                <span class="category-toggle-icon">${isInThisCategory ? '✓' : '+'}</span>
                <span class="category-toggle-name">${escapeHtml(section.title)}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Setup drag handlers for courses
  setupCourseDragHandlers();
}

/**
 * Render admins list
 */
function renderAdmins() {
  const container = document.getElementById('admin-list');
  if (!container) return;

  if (state.admins.length === 0) {
    container.innerHTML = '<p style="color: #64748b; text-align: center; padding: 2rem;">No admins found</p>';
    return;
  }

  container.innerHTML = state.admins.map(admin => {
    const isSelf = admin.npub === state.currentNpub;
    const displayName = admin.displayName || 'Unknown';
    const shortNpub = admin.npub ? `${admin.npub.slice(0, 12)}...${admin.npub.slice(-6)}` : '';
    
    return `
      <div class="admin-item">
        <div style="flex: 1;">
          <div style="color: #f1f5f9; font-weight: 500;">${escapeHtml(displayName)}</div>
          <div class="admin-npub">${shortNpub}</div>
        </div>
        ${isSelf ? '<span class="admin-label">You</span>' : ''}
        ${!isSelf ? `<button class="btn-danger" onclick="confirmRemoveAdmin('${admin.npub}')">Remove</button>` : ''}
      </div>
    `;
  }).join('');
}

/**
 * Update category filter dropdown
 */
function updateCategoryFilter() {
  const select = document.getElementById('category-filter');
  if (!select) return;

  const currentValue = select.value;
  
  select.innerHTML = '<option value="">All Courses (no category focus)</option>' +
    state.sections.map(s => {
      const courseCount = state.courses.filter(c => c.sections?.includes(s.id)).length;
      return `<option value="${s.id}">Manage: ${escapeHtml(s.title)} (${courseCount} courses)</option>`;
    }).join('');
  
  // Restore selection if still valid
  if (currentValue && state.sections.some(s => s.id === currentValue)) {
    select.value = currentValue;
  }
  
  updateCategoryHint();
}

/**
 * Update the category hint text
 */
function updateCategoryHint() {
  const select = document.getElementById('category-filter');
  const hint = document.getElementById('category-hint');
  if (!hint || !select) return;
  
  const selectedCategory = select.value;
  hint.style.display = selectedCategory ? 'block' : 'none';
  
  if (selectedCategory) {
    const section = state.sections.find(s => s.id === selectedCategory);
    const courseCount = state.courses.filter(c => c.sections?.includes(selectedCategory)).length;
    hint.textContent = `Managing "${section?.title}" - ${courseCount} courses currently in this category. Green = in category. Click button to add/remove.`;
  }
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Category filter - update hint and re-render
  document.getElementById('category-filter')?.addEventListener('change', () => {
    updateCategoryHint();
    renderCourses();
  });
  
  // Course search
  document.getElementById('course-search')?.addEventListener('input', debounce(renderCourses, 300));
  
  // Add category button
  document.getElementById('add-category-btn')?.addEventListener('click', () => openCategoryModal());
  
  // Add admin button
  document.getElementById('add-admin-btn')?.addEventListener('click', openAdminModal);
  
  // Category modal
  document.getElementById('close-category-modal')?.addEventListener('click', closeCategoryModal);
  document.getElementById('cancel-category-btn')?.addEventListener('click', closeCategoryModal);
  document.getElementById('save-category-btn')?.addEventListener('click', saveCategory);
  
  // Admin modal
  document.getElementById('close-admin-modal')?.addEventListener('click', closeAdminModal);
  document.getElementById('cancel-admin-btn')?.addEventListener('click', closeAdminModal);
  document.getElementById('save-admin-btn')?.addEventListener('click', saveAdmin);
  
  // Confirm modal
  document.getElementById('close-confirm-modal')?.addEventListener('click', closeConfirmModal);
  document.getElementById('cancel-confirm-btn')?.addEventListener('click', closeConfirmModal);
  
  // Save/discard buttons
  document.getElementById('save-changes-btn')?.addEventListener('click', saveAllChanges);
  document.getElementById('discard-changes-btn')?.addEventListener('click', discardChanges);
  
  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
      }
    });
  });

  // Warn before leaving with unsaved changes
  window.addEventListener('beforeunload', (e) => {
    if (state.hasUnsavedChanges) {
      e.preventDefault();
      e.returnValue = '';
    }
  });
}

/**
 * Setup drag handlers for categories
 */
function setupCategoryDragHandlers() {
  const items = document.querySelectorAll('.category-item[draggable="true"]');
  const container = document.getElementById('category-list');
  
  items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
      state.draggedItem = item;
      state.draggedType = 'section';
      item.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      state.draggedItem = null;
      state.draggedType = null;
      removePlaceholders();
    });
    
    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (state.draggedType !== 'section') return;
      
      const afterElement = getDragAfterElement(container, e.clientY);
      removePlaceholders();
      
      const placeholder = document.createElement('div');
      placeholder.className = 'drop-placeholder';
      
      if (afterElement) {
        container.insertBefore(placeholder, afterElement);
      } else {
        container.appendChild(placeholder);
      }
    });
    
    item.addEventListener('drop', (e) => {
      e.preventDefault();
      if (state.draggedType !== 'section' || !state.draggedItem) return;
      
      const afterElement = getDragAfterElement(container, e.clientY);
      removePlaceholders();
      
      if (afterElement) {
        container.insertBefore(state.draggedItem, afterElement);
      } else {
        container.appendChild(state.draggedItem);
      }
      
      // Update state order
      updateSectionOrder();
    });
  });
}

/**
 * Setup drag handlers for courses
 */
function setupCourseDragHandlers() {
  const items = document.querySelectorAll('.course-item[draggable="true"]');
  const container = document.getElementById('course-list');
  
  items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
      state.draggedItem = item;
      state.draggedType = 'course';
      item.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      state.draggedItem = null;
      state.draggedType = null;
      removePlaceholders();
    });
    
    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (state.draggedType !== 'course') return;
      
      const afterElement = getDragAfterElement(container, e.clientY);
      removePlaceholders();
      
      const placeholder = document.createElement('div');
      placeholder.className = 'drop-placeholder';
      
      if (afterElement) {
        container.insertBefore(placeholder, afterElement);
      } else {
        container.appendChild(placeholder);
      }
    });
    
    item.addEventListener('drop', (e) => {
      e.preventDefault();
      if (state.draggedType !== 'course' || !state.draggedItem) return;
      
      const afterElement = getDragAfterElement(container, e.clientY);
      removePlaceholders();
      
      if (afterElement) {
        container.insertBefore(state.draggedItem, afterElement);
      } else {
        container.appendChild(state.draggedItem);
      }
      
      // Update state order
      updateCourseOrder();
    });
  });
}

/**
 * Get the element after which to insert during drag
 */
function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('[draggable="true"]:not(.dragging)')];
  
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

/**
 * Remove all drag placeholders
 */
function removePlaceholders() {
  document.querySelectorAll('.drop-placeholder').forEach(p => p.remove());
}

/**
 * Update section order after drag
 */
function updateSectionOrder() {
  const items = document.querySelectorAll('.category-item[data-section-id]');
  const newOrder = [...items].map(item => item.dataset.sectionId);
  
  // Reorder state.sections based on DOM order
  const orderedSections = newOrder.map(id => state.sections.find(s => s.id === id)).filter(Boolean);
  state.sections = orderedSections;
  
  checkForChanges();
}

/**
 * Update course order after drag
 */
function updateCourseOrder() {
  const items = document.querySelectorAll('.course-item[data-course-id]');
  const newOrder = [...items].map(item => item.dataset.courseId);
  
  // Reorder state.courses based on DOM order
  const orderedCourses = newOrder.map(id => state.courses.find(c => c.id === id)).filter(Boolean);
  
  // Update order property
  orderedCourses.forEach((course, index) => {
    course.order = index;
  });
  
  state.courses = orderedCourses;
  checkForChanges();
}

/**
 * Toggle course category assignment
 */
window.toggleCourseCategory = function(courseId, sectionId, isChecked) {
  const course = state.courses.find(c => c.id === courseId);
  if (!course) return;
  
  if (!course.sections) course.sections = [];
  
  if (isChecked) {
    if (!course.sections.includes(sectionId)) {
      course.sections.push(sectionId);
    }
  } else {
    course.sections = course.sections.filter(s => s !== sectionId);
  }
  
  checkForChanges();
  renderCourses();
};

/**
 * Check if a course has changed from original
 */
function hasCourseChanged(course) {
  const original = state.originalCourses.find(c => c.id === course.id);
  if (!original) return true;
  
  return JSON.stringify(course.sections?.sort()) !== JSON.stringify(original.sections?.sort());
}

/**
 * Check for unsaved changes
 */
function checkForChanges() {
  const sectionsChanged = JSON.stringify(state.sections.map(s => s.id)) !== 
                          JSON.stringify(state.originalSections.map(s => s.id));
  
  const coursesChanged = state.courses.some(hasCourseChanged);
  
  state.hasUnsavedChanges = sectionsChanged || coursesChanged;
  
  const banner = document.getElementById('unsaved-banner');
  if (banner) {
    banner.style.display = state.hasUnsavedChanges ? 'flex' : 'none';
  }
}

/**
 * Save all changes
 */
async function saveAllChanges() {
  try {
    showLoading('Saving changes...');
    
    // Save section order if changed
    const sectionOrderChanged = JSON.stringify(state.sections.map(s => s.id)) !== 
                                JSON.stringify(state.originalSections.map(s => s.id));
    
    if (sectionOrderChanged) {
      await window.callFunction('reorderSections', {
        sectionIds: state.sections.map(s => s.id)
      });
    }
    
    // Save course changes
    for (const course of state.courses) {
      if (hasCourseChanged(course)) {
        await window.callFunction('updateCourse', {
          courseId: course.id,
          updates: { sections: course.sections }
        });
      }
    }
    
    // Save course order
    await window.callFunction('reorderCourses', {
      courseIds: state.courses.map(c => c.id)
    });
    
    // Update original state
    state.originalSections = JSON.parse(JSON.stringify(state.sections));
    state.originalCourses = JSON.parse(JSON.stringify(state.courses));
    state.hasUnsavedChanges = false;
    
    document.getElementById('unsaved-banner').style.display = 'none';
    showToast('Changes saved successfully', 'success');
    showAdminContent();
  } catch (error) {
    console.error('Error saving changes:', error);
    showToast('Failed to save changes: ' + error.message, 'error');
    showAdminContent();
  }
}

/**
 * Discard changes
 */
function discardChanges() {
  state.sections = JSON.parse(JSON.stringify(state.originalSections));
  state.courses = JSON.parse(JSON.stringify(state.originalCourses));
  state.hasUnsavedChanges = false;
  
  document.getElementById('unsaved-banner').style.display = 'none';
  renderAll();
  showToast('Changes discarded', 'info');
}

// ===================
// Category Operations
// ===================

/**
 * Open category modal for add or edit
 */
window.openCategoryModal = function(sectionId = null) {
  state.editingCategoryId = sectionId;
  
  const modal = document.getElementById('category-modal');
  const title = document.getElementById('category-modal-title');
  const titleInput = document.getElementById('category-title');
  const subtitleInput = document.getElementById('category-subtitle');
  const styleSelect = document.getElementById('category-style');
  
  if (sectionId) {
    const section = state.sections.find(s => s.id === sectionId);
    if (section) {
      title.textContent = 'Edit Category';
      titleInput.value = section.title;
      subtitleInput.value = section.subtitle || '';
      styleSelect.value = section.style;
    }
  } else {
    title.textContent = 'Add Category';
    titleInput.value = '';
    subtitleInput.value = '';
    styleSelect.value = 'subject';
  }
  
  modal.style.display = 'flex';
  titleInput.focus();
};

window.editCategory = function(sectionId) {
  openCategoryModal(sectionId);
};

function closeCategoryModal() {
  document.getElementById('category-modal').style.display = 'none';
  state.editingCategoryId = null;
}

/**
 * Save category (create or update)
 */
async function saveCategory() {
  const titleInput = document.getElementById('category-title');
  const subtitleInput = document.getElementById('category-subtitle');
  const styleSelect = document.getElementById('category-style');
  
  const title = titleInput.value.trim();
  const subtitle = subtitleInput.value.trim();
  const style = styleSelect.value;
  
  if (!title) {
    showToast('Title is required', 'error');
    return;
  }
  
  try {
    if (state.editingCategoryId) {
      // Update existing
      await window.callFunction('updateSection', {
        sectionId: state.editingCategoryId,
        updates: { title, subtitle, style }
      });
      showToast('Category updated', 'success');
    } else {
      // Create new
      await window.callFunction('createSection', {
        title,
        subtitle,
        style
      });
      showToast('Category created', 'success');
    }
    
    closeCategoryModal();
    await loadData();
  } catch (error) {
    console.error('Error saving category:', error);
    showToast('Failed to save: ' + error.message, 'error');
  }
}

/**
 * Confirm category deletion
 */
window.confirmDeleteCategory = function(sectionId) {
  const section = state.sections.find(s => s.id === sectionId);
  if (!section) return;
  
  const modal = document.getElementById('confirm-modal');
  const title = document.getElementById('confirm-modal-title');
  const message = document.getElementById('confirm-modal-message');
  const confirmBtn = document.getElementById('confirm-delete-btn');
  
  title.textContent = 'Delete Category';
  message.textContent = `Are you sure you want to delete "${section.title}"? This cannot be undone.`;
  
  confirmBtn.onclick = async () => {
    try {
      await window.callFunction('deleteSection', { sectionId });
      closeConfirmModal();
      showToast('Category deleted', 'success');
      await loadData();
    } catch (error) {
      console.error('Error deleting category:', error);
      showToast('Failed to delete: ' + error.message, 'error');
    }
  };
  
  modal.style.display = 'flex';
};

function closeConfirmModal() {
  document.getElementById('confirm-modal').style.display = 'none';
}

// =================
// Admin Operations
// =================

function openAdminModal() {
  document.getElementById('admin-modal').style.display = 'flex';
  document.getElementById('admin-npub').value = '';
  document.getElementById('admin-display-name').value = '';
  document.getElementById('admin-npub').focus();
}

function closeAdminModal() {
  document.getElementById('admin-modal').style.display = 'none';
}

/**
 * Save new admin
 */
async function saveAdmin() {
  const npubInput = document.getElementById('admin-npub');
  const displayNameInput = document.getElementById('admin-display-name');
  
  const npub = npubInput.value.trim();
  const displayName = displayNameInput.value.trim();
  
  if (!npub || !npub.startsWith('npub1')) {
    showToast('Valid npub is required', 'error');
    return;
  }
  
  try {
    await window.callFunction('addCourseAdmin', { npub, displayName });
    closeAdminModal();
    showToast('Admin added', 'success');
    await loadData();
  } catch (error) {
    console.error('Error adding admin:', error);
    showToast('Failed to add admin: ' + error.message, 'error');
  }
}

/**
 * Confirm admin removal
 */
window.confirmRemoveAdmin = function(npub) {
  const admin = state.admins.find(a => a.npub === npub);
  if (!admin) return;
  
  const modal = document.getElementById('confirm-modal');
  const title = document.getElementById('confirm-modal-title');
  const message = document.getElementById('confirm-modal-message');
  const confirmBtn = document.getElementById('confirm-delete-btn');
  
  const displayName = admin.displayName || 'this admin';
  title.textContent = 'Remove Admin';
  message.textContent = `Are you sure you want to remove ${displayName}?`;
  
  confirmBtn.onclick = async () => {
    try {
      await window.callFunction('removeCourseAdmin', { npub });
      closeConfirmModal();
      showToast('Admin removed', 'success');
      await loadData();
    } catch (error) {
      console.error('Error removing admin:', error);
      showToast('Failed to remove admin: ' + error.message, 'error');
    }
  };
  
  modal.style.display = 'flex';
};

// =================
// UI Helpers
// =================

function showLoading(message) {
  document.getElementById('loading-state').style.display = 'flex';
  document.getElementById('loading-state').querySelector('.loading-text').textContent = message;
  document.getElementById('access-denied').style.display = 'none';
  document.getElementById('admin-content').style.display = 'none';
}

function showAccessDenied() {
  document.getElementById('loading-state').style.display = 'none';
  document.getElementById('access-denied').style.display = 'block';
  document.getElementById('admin-content').style.display = 'none';
}

function showAdminContent() {
  document.getElementById('loading-state').style.display = 'none';
  document.getElementById('access-denied').style.display = 'none';
  document.getElementById('admin-content').style.display = 'block';
}

/**
 * Show toast notification
 */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '&#10003;' : type === 'error' ? '&#10007;' : 'i'}</span>
    ${escapeHtml(message)}
  `;
  
  container.appendChild(toast);
  
  // Remove after 4 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Debounce helper
 */
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
