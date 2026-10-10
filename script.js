/**
 * LAKSHMI PRABHA ALAGASAMY - PORTFOLIO SCRIPT
 * Clean, lightweight, and maintainable interactivity.
 */

// ==========================================
// 1. PROJECT DATA (FOR PROJECT DETAILS MODAL)
// ==========================================
const projectsData = {
  'pancreas-segmentation': {
    title: 'Deep Learning-Based Pancreas Segmentation Using Real and Synthetic CT Scan Data',
    description: 'A PyTorch-based U-Net project for pancreas segmentation from CT scan images.',
    technologies: ['Python', 'PyTorch', 'U-Net', 'Flask', 'Medical Image Processing'],
    details: [
      'Developed a deep learning model utilizing the U-Net convolutional architecture to segment the pancreas region in abdominal CT scan images.',
      'Preprocessed CT scan data, implemented Hounsfield unit windowing, and handled slice normalization.',
      'Evaluated segmentation performance using Dice Similarity Coefficient and Intersection over Union (IoU) metrics.',
      'Explored training on real and synthetic CT data to improve segmentation robustness.'
    ]
  },

  'leave-ease': {
    title: 'LeaveEase – Leave Management System',
    description: 'A web application for managing leave requests and viewing approval statuses.',
    technologies: ['React.js', 'Java', 'Node.js', 'MySQL', 'HTML', 'CSS'],
    details: [
      'Built a web application for students to submit leave applications and administrators to review and approve them.',
      'Implemented real-time status tracking so applicants can view approval progress without manual follow-up.',
      'Integrated front-end forms with backend services to handle request validation and persistent record storage in MySQL.'
    ]
  },

  'sign2text': {
    title: 'Sign2Text – Sign Language Translator',
    description: 'A machine learning-based project that converts recognized sign language gestures into text, with speech output where implemented.',
    technologies: ['Python', 'Flask', 'Machine Learning', 'HTML', 'CSS', 'JavaScript'],
    details: [
      'Designed a machine learning pipeline to detect and classify hand-sign gestures from camera input.',
      'Converted recognized gesture classifications into corresponding text outputs in real time.',
      'Integrated text-to-speech functionality where implemented to enhance assistive communication.'
    ]
  }
};

// ==========================================
// 2. PROJECT DETAILS MODAL HANDLERS
// ==========================================
function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('project-modal-title');
  const modalBody = document.getElementById('project-modal-body');

  modalTitle.textContent = project.title;

  const techList = project.technologies
    .map(tech => `<span class="skill-tag">${tech}</span>`)
    .join(' ');

  const detailsList = project.details
    .map(item => `<li>${item}</li>`)
    .join('');

  modalBody.innerHTML = `
    <p style="margin-bottom: 14px; color: var(--text-secondary);">${project.description}</p>
    
    <div style="margin-bottom: 16px;">
      <strong style="display: block; margin-bottom: 8px; font-size: 0.95rem; color: var(--text-primary);">Technologies:</strong>
      <div style="display: flex; flex-wrap: wrap; gap: 6px;">
        ${techList}
      </div>
    </div>

    <div>
      <strong style="display: block; margin-bottom: 8px; font-size: 0.95rem; color: var(--text-primary);">Project Overview &amp; Features:</strong>
      <ul style="padding-left: 20px; line-height: 1.6; color: var(--text-secondary); font-size: 0.92rem; display: flex; flex-direction: column; gap: 6px;">
        ${detailsList}
      </ul>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modals when pressing the Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// ==========================================
// 3. THEME TOGGLE (LIGHT / DARK)
// ==========================================
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Default to light theme
  const savedTheme = localStorage.getItem('lakshmi_theme') || 'light';
  root.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('lakshmi_theme', newTheme);
    });
  }
}

// ==========================================
// 4. MOBILE NAVIGATION MENU
// ==========================================
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const closeBtn = document.getElementById('drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (drawer && backdrop) {
      drawer.classList.add('open');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (drawer && backdrop) {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// ==========================================
// 5. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNavigation();
});
