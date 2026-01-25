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
  editingCourseId: null, // For course editing
  deploymentStatus: null, // Deployment status from Firebase
  selectedBackupId: null, // Selected backup for revert
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
    // Always load from staging environment for admin
    const config = await window.callFunction('getCourseConfig', { environment: 'staging' });

    state.sections = config.sections || [];
    state.courses = config.courses || [];
    state.admins = config.admins || [];

    // Store original state for change detection
    state.originalSections = JSON.parse(JSON.stringify(state.sections));
    state.originalCourses = JSON.parse(JSON.stringify(state.courses));

    renderAll();

    // Load deployment status in background
    loadDeploymentStatus();
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
         data-section-id="${escapeHtml(section.id)}"
         data-index="${index}">
      <span class="drag-handle">&#9776;</span>
      <div class="category-info">
        <div class="category-title">${escapeHtml(section.title)}</div>
        <div class="category-subtitle">${escapeHtml(section.subtitle || '')}</div>
      </div>
      <span class="category-badge ${escapeHtml(section.style)}">${escapeHtml(section.style)}</span>
      <div class="category-actions">
        <button class="btn-secondary btn-small edit-category-btn" data-section-id="${escapeHtml(section.id)}">Edit</button>
        ${section.id !== 'featured' ? `<button class="btn-danger delete-category-btn" data-section-id="${escapeHtml(section.id)}">Delete</button>` : ''}
      </div>
    </div>
  `).join('');

  // Setup drag handlers for categories
  setupCategoryDragHandlers();

  // Setup click handlers for category buttons (security: avoid inline onclick)
  container.querySelectorAll('.edit-category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const sectionId = e.currentTarget.dataset.sectionId;
      if (sectionId) editCategory(sectionId);
    });
  });
  container.querySelectorAll('.delete-category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const sectionId = e.currentTarget.dataset.sectionId;
      if (sectionId) confirmDeleteCategory(sectionId);
    });
  });
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
           data-course-id="${escapeHtml(course.id)}"
           data-index="${index}">
        <div class="course-item-header">
          <span class="drag-handle">&#9776;</span>
          <span class="course-icon">${escapeHtml(course.icon || '')}</span>
          <span class="course-title">${escapeHtml(course.title)}</span>
          <button class="btn-secondary btn-small edit-course-btn" data-course-id="${escapeHtml(course.id)}" style="margin-left: auto;">Edit</button>
        </div>
        <div class="course-categories-grid">
          ${state.sections.map(section => {
            const isInThisCategory = course.sections?.includes(section.id);
            return `
              <div class="category-toggle ${isInThisCategory ? 'active' : ''}"
                   data-course-id="${escapeHtml(course.id)}"
                   data-section-id="${escapeHtml(section.id)}"
                   data-add="${!isInThisCategory}">
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

  // Setup click handlers for course buttons (security: avoid inline onclick)
  container.querySelectorAll('.edit-course-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const courseId = e.currentTarget.dataset.courseId;
      if (courseId) editCourse(courseId);
    });
  });
  container.querySelectorAll('.category-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const el = e.currentTarget;
      const courseId = el.dataset.courseId;
      const sectionId = el.dataset.sectionId;
      const shouldAdd = el.dataset.add === 'true';
      if (courseId && sectionId) toggleCourseCategory(courseId, sectionId, shouldAdd);
    });
  });
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
          <div class="admin-npub">${escapeHtml(shortNpub)}</div>
        </div>
        ${isSelf ? '<span class="admin-label">You</span>' : ''}
        ${!isSelf ? `<button class="btn-danger remove-admin-btn" data-npub="${escapeHtml(admin.npub)}">Remove</button>` : ''}
      </div>
    `;
  }).join('');

  // Setup click handlers for admin buttons (security: avoid inline onclick)
  container.querySelectorAll('.remove-admin-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const npub = e.currentTarget.dataset.npub;
      if (npub) confirmRemoveAdmin(npub);
    });
  });
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
      return `<option value="${escapeHtml(s.id)}">Manage: ${escapeHtml(s.title)} (${courseCount} courses)</option>`;
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

  // Course modal
  document.getElementById('close-course-modal')?.addEventListener('click', closeCourseModal);
  document.getElementById('cancel-course-btn')?.addEventListener('click', closeCourseModal);
  document.getElementById('save-course-btn')?.addEventListener('click', saveCourseDetails);

  // Save/discard buttons
  document.getElementById('save-changes-btn')?.addEventListener('click', saveAllChanges);
  document.getElementById('discard-changes-btn')?.addEventListener('click', discardChanges);

  // Deployment buttons
  document.getElementById('promote-firebase-btn')?.addEventListener('click', showPromoteModal);
  document.getElementById('revert-firebase-btn')?.addEventListener('click', showRevertModal);

  // Deployment modal
  document.getElementById('close-deployment-modal')?.addEventListener('click', closeDeploymentModal);
  document.getElementById('cancel-deployment-btn')?.addEventListener('click', closeDeploymentModal);

  // Revert modal
  document.getElementById('close-revert-modal')?.addEventListener('click', closeRevertModal);
  document.getElementById('cancel-revert-btn')?.addEventListener('click', closeRevertModal);
  document.getElementById('confirm-revert-btn')?.addEventListener('click', handleRevertFirebase);
  
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

    // Refresh deployment status to show changes pending
    await loadDeploymentStatus();
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
      // Update local state directly
      const section = state.sections.find(s => s.id === state.editingCategoryId);
      if (section) {
        section.title = title;
        section.subtitle = subtitle;
        section.style = style;
      }
      const originalSection = state.originalSections.find(s => s.id === state.editingCategoryId);
      if (originalSection) {
        originalSection.title = title;
        originalSection.subtitle = subtitle;
        originalSection.style = style;
      }
      showToast('Category updated', 'success');
    } else {
      // Create new
      const result = await window.callFunction('createSection', {
        title,
        subtitle,
        style
      });
      // Add to local state
      const newSection = {
        id: result.sectionId,
        title,
        subtitle,
        style,
        order: state.sections.length,
        courses: []
      };
      state.sections.push(newSection);
      state.originalSections.push({ ...newSection });
      showToast('Category created', 'success');
    }

    closeCategoryModal();
    renderCategories();
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
      // Update local state directly
      state.sections = state.sections.filter(s => s.id !== sectionId);
      state.originalSections = state.originalSections.filter(s => s.id !== sectionId);
      closeConfirmModal();
      showToast('Category deleted', 'success');
      renderCategories();
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
    // Update local state directly
    const newAdmin = { npub, displayName: displayName || null, addedAt: new Date().toISOString() };
    state.admins.push(newAdmin);
    closeAdminModal();
    showToast('Admin added', 'success');
    renderAdmins();
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
      // Update local state directly
      state.admins = state.admins.filter(a => a.npub !== npub);
      closeConfirmModal();
      showToast('Admin removed', 'success');
      renderAdmins();
    } catch (error) {
      console.error('Error removing admin:', error);
      showToast('Failed to remove admin: ' + error.message, 'error');
    }
  };
  
  modal.style.display = 'flex';
};

// =================
// Course Operations
// =================

/**
 * Open course edit modal
 */
window.editCourse = function(courseId) {
  const course = state.courses.find(c => c.id === courseId);
  if (!course) return;

  state.editingCourseId = courseId;

  document.getElementById('course-title-input').value = course.title || '';
  document.getElementById('course-description-input').value = course.description || '';
  document.getElementById('course-icon-input').value = course.icon || '';

  document.getElementById('course-modal').style.display = 'flex';
  document.getElementById('course-title-input').focus();
};

function closeCourseModal() {
  document.getElementById('course-modal').style.display = 'none';
  state.editingCourseId = null;
}

/**
 * Save course details
 */
async function saveCourseDetails() {
  const courseId = state.editingCourseId;
  if (!courseId) return;

  const title = document.getElementById('course-title-input').value.trim();
  const description = document.getElementById('course-description-input').value.trim();
  const icon = document.getElementById('course-icon-input').value.trim();

  if (!title) {
    showToast('Title is required', 'error');
    return;
  }

  try {
    await window.callFunction('updateCourse', {
      courseId,
      updates: { title, description, icon }
    });

    // Update local state directly instead of reloading
    const course = state.courses.find(c => c.id === courseId);
    if (course) {
      course.title = title;
      course.description = description;
      course.icon = icon;
    }

    // Also update original state so it's not marked as "changed"
    const originalCourse = state.originalCourses.find(c => c.id === courseId);
    if (originalCourse) {
      originalCourse.title = title;
      originalCourse.description = description;
      originalCourse.icon = icon;
    }

    closeCourseModal();
    showToast('Course updated', 'success');
    renderCourses();
  } catch (error) {
    console.error('Error updating course:', error);
    showToast('Failed to update course: ' + error.message, 'error');
  }
}

// ======================
// Deployment Operations
// ======================

/**
 * Load deployment status
 */
async function loadDeploymentStatus() {
  try {
    const status = await window.callFunction('getDeploymentStatus');
    state.deploymentStatus = status;
    renderDeploymentStatus();
  } catch (error) {
    console.error('Error loading deployment status:', error);
    // Show error state in sync indicator
    const indicator = document.getElementById('sync-indicator');
    if (indicator) {
      indicator.className = 'sync-indicator error';
      indicator.title = 'Failed to load status';
      indicator.querySelector('.sync-text').textContent = 'Error';
    }
  }
}

/**
 * Render deployment status (inline sync indicator)
 */
function renderDeploymentStatus() {
  const indicator = document.getElementById('sync-indicator');
  if (!indicator || !state.deploymentStatus) return;

  const status = state.deploymentStatus;

  // Update sync indicator
  if (status.hasChanges) {
    indicator.className = 'sync-indicator pending';
    indicator.title = 'Staging has unpromoted changes';
    indicator.querySelector('.sync-text').textContent = 'Changes pending';
  } else {
    indicator.className = 'sync-indicator synced';
    indicator.title = 'Staging and production are in sync';
    indicator.querySelector('.sync-text').textContent = 'In sync';
  }

  // Enable/disable buttons based on status
  const promoteBtn = document.getElementById('promote-firebase-btn');
  const revertBtn = document.getElementById('revert-firebase-btn');

  if (promoteBtn) {
    promoteBtn.disabled = !status.hasChanges;
  }
  if (revertBtn) {
    revertBtn.disabled = !status.backups || status.backups.length === 0;
  }
}

/**
 * Show promote confirmation modal
 */
function showPromoteModal() {
  const modal = document.getElementById('deployment-modal');
  const title = document.getElementById('deployment-modal-title');
  const message = document.getElementById('deployment-modal-message');
  const details = document.getElementById('deployment-modal-details');
  const confirmBtn = document.getElementById('confirm-deployment-btn');

  title.textContent = 'Promote to Production';
  message.textContent = 'This will copy all staging changes to production. A backup of the current production will be created automatically.';
  details.innerHTML = `
    <p><strong>Action:</strong> Copy staging to production</p>
    <p><strong>Backup:</strong> Current production will be saved</p>
    <p><strong>Impact:</strong> Changes will be live immediately</p>
  `;

  confirmBtn.onclick = handlePromoteFirebase;
  confirmBtn.className = 'btn-primary';
  confirmBtn.textContent = 'Promote';

  modal.style.display = 'flex';
}

/**
 * Handle promote to production
 */
async function handlePromoteFirebase() {
  closeDeploymentModal();
  showLoading('Promoting to production...');

  try {
    const result = await window.callFunction('promoteToProduction');

    if (result.success) {
      showToast('Successfully promoted to production', 'success');
      await loadDeploymentStatus();
    } else {
      showToast('Failed to promote to production', 'error');
    }
  } catch (error) {
    console.error('Error promoting to production:', error);
    showToast('Error: ' + error.message, 'error');
  }

  showAdminContent();
}

/**
 * Show revert modal with backup selection
 */
function showRevertModal() {
  const modal = document.getElementById('revert-modal');
  const backupList = document.getElementById('backup-list');
  const confirmBtn = document.getElementById('confirm-revert-btn');

  state.selectedBackupId = null;
  confirmBtn.disabled = true;

  if (!state.deploymentStatus?.backups || state.deploymentStatus.backups.length === 0) {
    backupList.innerHTML = '<div class="no-backups">No backups available</div>';
  } else {
    backupList.innerHTML = state.deploymentStatus.backups.map((backup, index) => {
      const date = backup.timestamp.toDate ? backup.timestamp.toDate() : new Date(backup.timestamp._seconds * 1000);
      const timeAgo = formatTimeAgo(date);
      const npubShort = backup.createdBy ? `${backup.createdBy.slice(0, 8)}...` : 'Unknown';

      return `
        <div class="backup-item" data-backup-id="${escapeHtml(backup.id)}">
          <input type="radio" name="backup" value="${escapeHtml(backup.id)}">
          <div class="backup-item-info">
            <div class="backup-item-time">${date.toLocaleString()} (${timeAgo})</div>
            <div class="backup-item-by">Created by ${npubShort}</div>
          </div>
        </div>
      `;
    }).join('');

    // Add click handlers
    backupList.querySelectorAll('.backup-item').forEach(item => {
      item.addEventListener('click', () => {
        // Deselect all
        backupList.querySelectorAll('.backup-item').forEach(i => i.classList.remove('selected'));
        backupList.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);

        // Select this one
        item.classList.add('selected');
        item.querySelector('input[type="radio"]').checked = true;
        state.selectedBackupId = item.dataset.backupId;
        confirmBtn.disabled = false;
      });
    });
  }

  modal.style.display = 'flex';
}

/**
 * Handle revert production
 */
async function handleRevertFirebase() {
  if (!state.selectedBackupId) {
    showToast('Please select a backup to revert to', 'error');
    return;
  }

  closeRevertModal();
  showLoading('Reverting production...');

  try {
    const result = await window.callFunction('revertProduction', {
      backupId: state.selectedBackupId
    });

    if (result.success) {
      showToast(`Successfully reverted to backup: ${result.revertedTo}`, 'success');
      await loadDeploymentStatus();
    } else {
      showToast('Failed to revert production', 'error');
    }
  } catch (error) {
    console.error('Error reverting production:', error);
    showToast('Error: ' + error.message, 'error');
  }

  showAdminContent();
}

/**
 * Handle Vercel promote
 */
async function handlePromoteVercel() {
  showLoading('Promoting Vercel deployment...');

  try {
    const result = await window.callFunction('promoteVercelDeployment');

    if (result.success) {
      showToast(`Vercel deployment promoted: ${result.deploymentUrl}`, 'success');
    } else {
      showToast(result.message || 'Failed to promote Vercel deployment', 'error');
    }
  } catch (error) {
    console.error('Error promoting Vercel:', error);
    showToast('Error: ' + error.message, 'error');
  }

  showAdminContent();
}

/**
 * Handle Vercel revert
 */
async function handleRevertVercel() {
  showLoading('Reverting Vercel deployment...');

  try {
    const result = await window.callFunction('revertVercelDeployment');

    if (result.success) {
      showToast(`Vercel deployment reverted: ${result.deploymentUrl}`, 'success');
    } else {
      showToast(result.message || 'Failed to revert Vercel deployment', 'error');
    }
  } catch (error) {
    console.error('Error reverting Vercel:', error);
    showToast('Error: ' + error.message, 'error');
  }

  showAdminContent();
}

function closeDeploymentModal() {
  document.getElementById('deployment-modal').style.display = 'none';
}

function closeRevertModal() {
  document.getElementById('revert-modal').style.display = 'none';
  state.selectedBackupId = null;
}

/**
 * Format time ago (e.g., "2 hours ago")
 */
function formatTimeAgo(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  return date.toLocaleDateString();
}

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
