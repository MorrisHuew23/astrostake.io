document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            backToTopButton.classList.remove('active');
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // APY Calculator
    const amountInput = document.getElementById('amount');
    const amountValue = document.getElementById('amountValue');
    const coinSelect = document.getElementById('coin');
    const resultElement = document.getElementById('result');

    const apyRates = {
        usdt: 8,
        eth: 4.5,
        sol: 6
    };

    function calculateProfit() {
        const amount = parseFloat(amountInput.value);
        const coin = coinSelect.value;
        const apy = apyRates[coin];
        const profit = (amount * apy) / 10;
        
        amountValue.textContent = '$' + amount.toLocaleString();
        resultElement.textContent = '$' + profit.toFixed(2);
    }

    amountInput.addEventListener('input', calculateProfit);
    coinSelect.addEventListener('change', calculateProfit);

    // Initialize calculation
    calculateProfit();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

// Отслеживание прокрутки
window.addEventListener('scroll', function() {
    const stakeElement = document.querySelector('.stake-text');
    const scrollPosition = window.scrollY;
    
    // Изменяем цвет после прокрутки на 100px
    if (scrollPosition > 100) {
      stakeElement.classList.add('scrolled');
    } else {
      stakeElement.classList.remove('scrolled');
    }
  });

// JavaScript
function generateProfitTicker() {
  const ticker = document.getElementById('profit-ticker');
  const tickerTrack = document.querySelector('.ticker-track');
  const domains = ['gmail.com', 'yahoo.com', 'proton.me', 'outlook.com', 'icloud.com'];
  
  // Генерация 50 уникальных строк
  for (let i = 0; i < 50; i++) {
    const profit = (Math.random() * 500 + 50).toFixed(2);
    const nameStart = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const nameEnd = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const domain = domains[Math.floor(Math.random() * domains.length)];
    const email = `n.${nameStart}${'x'.repeat(3)}${nameEnd}@${domain}`;
    
    const item = document.createElement('div');
    item.className = 'ticker-item';
    item.innerHTML = `
      <span class="profit-amount">+$${profit}</span>
      <span class="profit-email">by ${email}</span>
    `;
    tickerTrack.appendChild(item);
  }

  // Активируем анимацию появления при загрузке
  setTimeout(() => {
    ticker.classList.add('visible');
  }, 300);
}

// Запуск при загрузке и при появлении в viewport
document.addEventListener('DOMContentLoaded', function() {
  generateProfitTicker();
  
  // Альтернативный вариант с IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.1});
  
  const ticker = document.getElementById('profit-ticker');
  if (ticker) {
    observer.observe(ticker);
  }
});














// Добавьте в script.js
function initAuthPages() {
    // Анимация полей ввода
    const inputs = document.querySelectorAll('.auth-card input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // Плавное появление формы
    if (document.querySelector('.auth-card')) {
        setTimeout(() => {
            document.querySelector('.auth-card').style.opacity = '1';
            document.querySelector('.auth-card').style.transform = 'translateY(0)';
        }, 100);
    }
}

// Вызовите эту функцию в DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // ... остальной код ...
    initAuthPages();
});