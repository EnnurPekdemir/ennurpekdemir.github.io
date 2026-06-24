/**
 * Ennur Pekdemir Portfolio - Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // ----------------------------------------------------
  // Page Loader
  // ----------------------------------------------------
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('fade-out');
      }, 500); // smooth 500ms delay for premium feel
    });
  }

  // ----------------------------------------------------
  // Sticky Header on Scroll
  // ----------------------------------------------------
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ----------------------------------------------------
  // Mobile Hamburger Menu
  // ----------------------------------------------------
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('nav-links');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('toggle');
      navLinksContainer.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('toggle');
        navLinksContainer.classList.remove('open');
      });
    });
  }

  // ----------------------------------------------------
  // Scroll Spy / Active Menu Link Indicator
  // ----------------------------------------------------
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies the middle portion
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // ----------------------------------------------------
  // Projects Data & Details Modal
  // ----------------------------------------------------
  const projectsData = {
    'floradoc': {
      title: 'FloraDoc - AI Domates Yaprak Hastalığı Tespit Sistemi',
      image: 'assets/images/floradoc.png',
      desc: 'FloraDoc, tarımsal üretimde karşılaşılan en büyük problemlerden biri olan mahsul hastalıklarını tespit etmek amacıyla geliştirilmiş yapay zeka destekli bir platformdur. Kullanıcılar (örneğin çiftçiler) domates yapraklarının fotoğraflarını sisteme yüklediğinde, derin öğrenme tabanlı Convolutional Neural Network (CNN) modelimiz görüntüyü saniyeler içinde analiz eder. Model, yapraktaki hastalık türünü (erken yanıklık, geç yanıklık, yaprak küfü vb.) veya sağlıklı olma durumunu yüksek doğruluk oranıyla tespit eder. Teşhisin ardından, hastalığın yayılmasını önleyecek biyolojik ve kimyasal tedavi yöntemleri ile alınabilecek kültürel önlemler detaylı bir şekilde raporlanır.',
      tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'OpenCV', 'Streamlit', 'Bitki Patolojisi'],
      github: 'https://github.com'
    },
    'credit-risk': {
      title: 'Credit Risk Analysis Platform',
      image: 'assets/images/credit-risk.png',
      desc: 'Bankacılık ve finans sektörü için geliştirilmiş yapay zeka tabanlı bu kredi risk değerlendirme platformu, kredi başvurusunda bulunan müşterilerin risk durumlarını analiz eder. Sistem; müşterinin geçmiş kredi ödeme alışkanlıkları, gelir-gider dengesi, varlıkları, borçluluk oranı ve demografik bilgileri gibi onlarca parametreyi makine öğrenmesi modelleriyle analiz ederek bir "Risk Skoru" üretir. Spring Boot ile tasarlanan yüksek performanslı backend servisleri, makine öğrenmesi API\'si ile entegre çalışarak karar destek sistemini besler. Yönetim paneli üzerinden detaylı veri görselleştirmeleri, risk dağılım grafikleri ve otomatik onay/red mekanizmaları sunulur.',
      tech: ['Java', 'Spring Boot', 'SQL', 'Scikit-Learn', 'Python API', 'RESTful Services', 'JPA / Hibernate'],
      github: 'https://github.com'
    },
    'recipe-sharing': {
      title: 'Recipe Sharing Platform',
      image: 'assets/images/recipe-sharing.png',
      desc: 'Lezzetli tariflerin paylaşıldığı ve yemek tutkunlarını bir araya getiren sosyal etkileşimli bir web platformudur. Spring Boot ve MySQL mimarisi üzerinde yükselen backend yapısı; kullanıcı kaydı ve güvenliği, dinamik tarif ekleme/düzenleme, resim yükleme ve gelişmiş arama filtreleme özelliklerini destekler. Kullanıcılar diğer tarifleri puanlayabilir, yorum yapabilir ve kendi tarif defterlerini oluşturabilirler. REST API yapısı sayesinde gelecekte mobil uygulamalarla entegre olmaya tamamen hazır, modüler ve güvenli bir altyapıya sahiptir.',
      tech: ['Spring Boot', 'Spring Security', 'MySQL', 'REST API', 'Thymeleaf', 'Bootstrap', 'Maven'],
      github: 'https://github.com'
    }
  };

  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-desc');
  const modalTechList = document.getElementById('modal-tech-list');
  const modalGithubLink = document.getElementById('modal-github-link');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalOkBtn = document.getElementById('modal-ok-btn');

  // Open modal event
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const triggerBtn = card.querySelector('.details-btn');
    const overlayTrigger = card.querySelector('.project-img-overlay');
    const projectId = card.getAttribute('data-project-id');

    const openModal = () => {
      const data = projectsData[projectId];
      if (data && modal) {
        modalTitle.textContent = data.title;
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalDesc.innerHTML = data.desc;
        
        // Clear previous tags
        modalTechList.innerHTML = '';
        data.tech.forEach(t => {
          const span = document.createElement('span');
          span.className = 'project-tag';
          span.textContent = t;
          modalTechList.appendChild(span);
        });

        modalGithubLink.href = data.github;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent scrolling behind modal
      }
    };

    if (triggerBtn) {
      triggerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal();
      });
    }

    if (overlayTrigger) {
      overlayTrigger.addEventListener('click', openModal);
    }
  });

  // Close modal event
  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // restore scrolling
    }
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close modal on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // ----------------------------------------------------
  // Contact Form Submission (Mock Simulation)
  // ----------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const originalBtnText = submitBtn.innerHTML;
      
      // Disable inputs and show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        Gönderiliyor...
        <span style="display:inline-block; width:12px; height:12px; border:2px solid #ffffff; border-top-color:transparent; border-radius:50%; animation: spinner 0.6s linear infinite; margin-left: 5px;"></span>
      `;
      formFeedback.style.display = 'none';

      // Simulate network request delay (1.5 seconds)
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // Simple validation check
        if (nameInput.value.trim() && emailInput.value.trim() && messageInput.value.trim()) {
          // Success
          formFeedback.className = 'form-feedback success';
          formFeedback.textContent = `Teşekkürler Sayın ${nameInput.value.trim()}, mesajınız başarıyla iletildi!`;
          formFeedback.style.display = 'block';

          // Reset Form
          contactForm.reset();
        } else {
          // Error
          formFeedback.className = 'form-feedback error';
          formFeedback.textContent = 'Lütfen form alanlarını eksiksiz doldurunuz.';
          formFeedback.style.display = 'block';
        }

        // Restore button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        // Auto-hide feedback after 5 seconds
        setTimeout(() => {
          formFeedback.style.display = 'none';
        }, 5000);

      }, 1500);
    });
  }
});
