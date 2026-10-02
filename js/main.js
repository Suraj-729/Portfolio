/**
 * main.js - Core UI Interactions, Telemetry Streamer & Portfolio Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initSkillsFilter();
  initClipboardActions();
  initResumeModal();
  initHeroTelemetryFeed();
});

// Sticky Header & Active Navigation
function initHeader() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobileToggle');
  const navList = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('mobile-open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      mobileToggle.innerHTML = isOpen
        ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('mobile-open');
        document.body.style.overflow = '';
        mobileToggle.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }
}

// Skills Filter System
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (target === 'all' || cat === target) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Clipboard Toast Actions
function initClipboardActions() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  const toast = document.getElementById('toastMsg');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const val = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(val).then(() => {
        showToast(`Copied to clipboard: ${val}`);
      }).catch(() => {
        showToast(`Selected: ${val}`);
      });
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

// Resume PDF Viewer Modal
function initResumeModal() {
  const openModalBtn = document.getElementById('viewResumeBtn');
  const modal = document.getElementById('resumeModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

// Hero Telemetry Live Background Streamer
function initHeroTelemetryFeed() {
  const feed = document.getElementById('terminalLiveFeed');
  if (!feed) return;

  const mockLogs = [
    { tag: 'gRPC', type: 'grpc', msg: 'Stream channel established with Analytics Agent (:50059) [proto3]' },
    { tag: 'MEM', type: 'success', msg: 'agentic_vector_memory hit: hash 0x7f4a... (recall: 6.8ms, 0 tokens)' },
    { tag: 'OTEL', type: 'info', msg: 'Exporting trace span ID: 09d3b2a1 to Jaeger collector' },
    { tag: 'MCP', type: 'info', msg: 'MongoMCP tool schema validated: execute_aggregation (status: 200 OK)' },
    { tag: 'AST', type: 'success', msg: 'QueryPlanValidator AST verified: 0 prohibited pipeline operators' },
    { tag: 'QDRANT', type: 'info', msg: 'india_geomaster vector lookup: Odisha/Cuttack -> ID 312' },
    { tag: 'SSE', type: 'success', msg: 'FastAPI streaming token chunks to Web Portal via SSE (24 t/s)' }
  ];

  let index = 0;
  setInterval(() => {
    const item = mockLogs[index % mockLogs.length];
    index++;

    const div = document.createElement('div');
    div.className = 'log-line';
    const now = new Date().toTimeString().split(' ')[0];

    div.innerHTML = `<span class="log-time">${now}</span> <span class="log-tag ${item.type}">[${item.tag}]</span> <span>${item.msg}</span>`;
    
    feed.appendChild(div);
    if (feed.children.length > 7) {
      feed.removeChild(feed.children[0]);
    }
  }, 3200);
}
