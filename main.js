 const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      burger.classList.remove('active');
      menu.classList.remove('active');
    }
  });
  ///////////////////////////////////////////////////////
 document.querySelector('.phone-btn').addEventListener('click', function() {
  this.classList.toggle('active');
});
//////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-content");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // зупиняє спостереження після появи
      }
    });
  }, { threshold: 0.2 }); // 20% елемента в полі зору

  cards.forEach(card => observer.observe(card));
});
///////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  const cards = document.querySelectorAll(".review-card");

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = dot.dataset.index;
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      cards.forEach(c => c.classList.remove("active"));
      cards[index].classList.add("active");
    });
  });
});
////////////////////////////////////////////////////////////////
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 2500, // картки самі змінюються
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
//////////////////////////////////////////////////////
// Усі елементи, які мають реагувати як hover
const hoverItems = document.querySelectorAll('btn-social, .social-card, .blog-card, .btn-blog, .review-card, .item-card, .link-article::after, .card-btn, .card-bg, .btn-gradient, header .nav-link, .mobile-menu a, .phone-btn, .link-bottom, .bi-bottom, .card-item, .box-border, .btn-active, .photo-card, .btn-btn');

hoverItems.forEach(item => {
  // Додати "hover" при торканні
  item.addEventListener('touchstart', () => {
    item.classList.add('active');
  });

  // При завершенні торкання — забрати
  item.addEventListener('touchend', () => {
    item.classList.remove('active');
  });
});
///////////////////////////////////////////////////////////
