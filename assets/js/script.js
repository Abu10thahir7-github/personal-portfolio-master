'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

// sidebar variables
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener('click', function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

// modal variable
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle('active');
  overlay.classList.toggle('active');
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener('click', function () {
    modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
    modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
    modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
    modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

// custom select variables
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === 'all') {
      filterItems[i].classList.add('active');
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener('input', function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute('disabled');
    } else {
      formBtn.setAttribute('disabled', '');
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add('active');
        navigationLinks[i].classList.add('active');
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove('active');
        navigationLinks[i].classList.remove('active');
      }
    }
  });
}

// project modal variables
const projectModalContainer = document.querySelector('[data-project-modal-container]');
const projectOverlay = document.querySelector('[data-project-overlay]');
const projectModalCloseBtn = document.querySelector('[data-project-modal-close-btn]');
const projectModalImg = document.querySelector('[data-project-modal-img]');
const projectModalTitle = document.querySelector('[data-project-modal-title]');
const projectModalCategory = document.querySelector('[data-project-modal-category]');
const projectModalDescription = document.querySelector('[data-project-modal-description]');
const projectModalTech = document.querySelector('[data-project-modal-tech]');
const projectLiveLink = document.querySelector('[data-project-live-link]');
const projectGithubLink = document.querySelector('[data-project-github-link]');

// project data
const projectData = {
  'velonto-food-delivery': {
    title: 'Velonto Food Delivery',
    category: 'Web Development',
    image: './assets/images/velonto design.jpg',
    description:
      'A comprehensive food delivery web application built with modern web technologies. Features include user authentication, restaurant listings, menu browsing, cart management, order tracking, and payment integration.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'JWT', 'CSS3'],
    liveLink: '#',
    githubLink: '#',
  },
  fundo: {
    title: 'Fundo',
    category: 'Web Design',
    image: './assets/images/project-3.jpg',
    description:
      'A modern and responsive web design for a financial services platform. The design focuses on user experience with clean layouts, intuitive navigation, and mobile-first approach.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Responsive Design'],
    liveLink: '#',
    githubLink: '#',
  },
  'trendzio-shop': {
    title: 'Trendzio Shop',
    category: 'Web Design',
    image: './assets/images/TRENDZIODESGIN.jpg',
    description:
      'An e-commerce website design for a trendy fashion store. Features modern UI/UX design with product showcases, shopping cart functionality, and seamless user experience.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'UI/UX Design'],
    liveLink: '#',
    githubLink: '#',
  },
  'bismi-events': {
    title: 'Bismi Events',
    category: 'Web Development & Design',
    image: './assets/images/BISMI EVENT.jpg',
    description:
      'A complete event management platform with booking system, event listings, and admin dashboard. Built with full-stack technologies for seamless event planning and management.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material-UI', 'Redux'],
    liveLink: '#',
    githubLink: '#',
  },
  brawlhalla: {
    title: 'Brawlhalla',
    category: 'Applications',
    image: './assets/images/project-4.png',
    description:
      'A gaming application with interactive features and real-time multiplayer functionality. Built for optimal performance and engaging user experience.',
    technologies: ['JavaScript', 'WebSocket', 'Canvas API', 'HTML5', 'CSS3'],
    liveLink: '#',
    githubLink: '#',
  },
  dsm: {
    title: 'DSM.',
    category: 'Web Design',
    image: './assets/images/project-5.png',
    description:
      'A minimalist web design for a digital agency. Features clean aesthetics, smooth animations, and professional presentation of services and portfolio.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Responsive Design'],
    liveLink: '#',
    githubLink: '#',
  },
  metaspark: {
    title: 'MetaSpark',
    category: 'Web Design',
    image: './assets/images/project-6.png',
    description:
      'A futuristic web design for a tech startup. Features modern UI elements, interactive components, and cutting-edge design aesthetics.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Three.js', 'WebGL'],
    liveLink: '#',
    githubLink: '#',
  },
  summary: {
    title: 'Summary',
    category: 'Web Development',
    image: './assets/images/project-7.png',
    description:
      'A web application for generating and managing document summaries. Features AI-powered text processing, user management, and export functionality.',
    technologies: ['React.js', 'Node.js', 'Python', 'OpenAI API', 'MongoDB', 'Express.js'],
    liveLink: '#',
    githubLink: '#',
  },
  'task-manager': {
    title: 'Task Manager',
    category: 'Applications',
    image: './assets/images/project-8.jpg',
    description:
      'A comprehensive task management application with drag-and-drop functionality, team collaboration features, and project tracking capabilities.',
    technologies: ['React.js', 'Redux', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
    liveLink: '#',
    githubLink: '#',
  },
  arrival: {
    title: 'Arrival',
    category: 'Web Development',
    image: './assets/images/project-9.png',
    description:
      'A travel and booking platform with real-time availability, payment processing, and user reviews. Features responsive design and seamless booking experience.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Stripe API', 'Mapbox API'],
    liveLink: '#',
    githubLink: '#',
  },
};

// project modal toggle function
const projectModalFunc = function () {
  projectModalContainer.classList.toggle('active');
  projectOverlay.classList.toggle('active');
};

// function to populate project modal
const populateProjectModal = function (projectKey) {
  const project = projectData[projectKey];
  if (!project) return;

  projectModalImg.src = project.image;
  projectModalImg.alt = project.title;
  projectModalTitle.textContent = project.title;
  projectModalCategory.textContent = project.category;
  projectModalDescription.innerHTML = `<p>${project.description}</p>`;

  // Clear and populate technologies
  const techList = projectModalTech.querySelector('.tech-list');
  techList.innerHTML = '';
  project.technologies.forEach(tech => {
    const li = document.createElement('li');
    li.textContent = tech;
    techList.appendChild(li);
  });

  // Set links
  projectLiveLink.href = project.liveLink;
  projectGithubLink.href = project.githubLink;
};

// function to get project key from project title
const getProjectKey = function (projectTitle) {
  switch (projectTitle) {
    case 'velonto food delivery':
      return 'velonto-food-delivery';
    case 'fundo':
      return 'fundo';
    case 'terndzio shop':
      return 'trendzio-shop';
    case 'bismi events':
      return 'bismi-events';
    case 'brawlhalla':
      return 'brawlhalla';
    case 'dsm.':
      return 'dsm';
    case 'metaspark':
      return 'metaspark';
    case 'summary':
      return 'summary';
    case 'task manager':
      return 'task-manager';
    case 'arrival':
      return 'arrival';
    default:
      return null;
  }
};

// function to open project modal
const openProjectModal = function (projectItem) {
  const projectTitle = projectItem.querySelector('.project-title').textContent.toLowerCase();
  const projectKey = getProjectKey(projectTitle);

  if (projectKey) {
    populateProjectModal(projectKey);
    projectModalFunc();
  }
};

// add click event to all project eye icons
document.addEventListener('click', function (e) {
  // Check if clicked element is an eye icon or its parent
  const eyeIcon = e.target.closest('ion-icon[name="eye-outline"]');
  if (eyeIcon) {
    e.preventDefault();
    e.stopPropagation();

    // Find the project item
    const projectItem = eyeIcon.closest('.project-item');
    if (projectItem) {
      openProjectModal(projectItem);
    }
  }
});

// add click event to project images
document.addEventListener('click', function (e) {
  // Check if clicked element is a project image
  const projectImg = e.target.closest('.project-img');
  if (projectImg) {
    e.preventDefault();
    e.stopPropagation();

    // Find the project item
    const projectItem = projectImg.closest('.project-item');
    if (projectItem) {
      openProjectModal(projectItem);
    }
  }
});

// add click event to modal close button and overlay
projectModalCloseBtn.addEventListener('click', projectModalFunc);
projectOverlay.addEventListener('click', projectModalFunc);

// close modal on escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && projectModalContainer.classList.contains('active')) {
    projectModalFunc();
  }
});

// Skills animation functionality
const skillProgressBars = document.querySelectorAll('.skill-progress');
const skillCards = document.querySelectorAll('.skill-card');

// Function to animate skill progress bars
const animateSkillBars = function () {
  skillProgressBars.forEach((bar, index) => {
    const width = bar.getAttribute('data-width');
    const percentage = width.replace('%', '');

    // Add a small delay for each bar to create a staggered effect
    setTimeout(() => {
      bar.style.width = width;
      bar.style.setProperty('--progress-width', width);
    }, index * 100);
  });
};

// Function to reset skill progress bars
const resetSkillBars = function () {
  skillProgressBars.forEach(bar => {
    bar.style.width = '0%';
  });
};

// Intersection Observer for skills animation
const skillsObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animate class to skill cards
        skillCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate');
          }, index * 50);
        });

        // Animate progress bars
        animateSkillBars();

        // Unobserve after animation to prevent re-triggering
        skillsObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
  },
);

// Observe the skills container
const skillsContainer = document.querySelector('.skills-container');
if (skillsContainer) {
  skillsObserver.observe(skillsContainer);
}

// Add hover effects for skill cards
skillCards.forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-3px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add click effect for skill cards
skillCards.forEach(card => {
  card.addEventListener('click', function () {
    this.style.transform = 'translateY(-1px) scale(0.98)';
    setTimeout(() => {
      this.style.transform = 'translateY(-3px) scale(1.02)';
    }, 150);
  });
});

// Dynamic Particle Generation
function createDynamicParticles() {
  const particlesContainer = document.querySelector('.floating-particles');

  for (let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = Math.random() * 5 + 5 + 's';
    particlesContainer.appendChild(particle);
  }
}

// Mouse Follower Effect
 

// Scroll-triggered animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.service-item, .project-item, .skill-card').forEach(el => {
    observer.observe(el);
  });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
  createDynamicParticles();
  createMouseFollower();
  initScrollAnimations();

  // Add some sparkle effects on page load
  setTimeout(() => {
    document.body.style.animation = 'fadeIn 1s ease-in-out';
  }, 100);
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-in {
    animation: slideInUp 0.6s ease-out forwards;
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
