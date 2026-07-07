/*==================================================================*/
/*============================ SHOW MENU ===========================*/
/*==================================================================*/
const showMenu = (bxId, menuId) => {
  const bx = document.getElementById(bxId);
  const menu = document.getElementById(menuId);

  if (bx && menu) {
    bx.addEventListener("click", () => {

      menu.classList.toggle("active-menu");
      bx.classList.toggle("active-bx");
    });
  }
};

showMenu("bx", "menu");

/*==================================================================*/
/*==================== CHANGE BACKGROUND OBJECTS ===================*/
/*==================================================================*/
function scrollHeader() {
  const header = document.querySelector("header");
  const bx = document.querySelector(".bx");
  const social = document.querySelector(".social");
  const scrollPosition = window.scrollY;

  social.classList.toggle("active-social", scrollPosition >= 50);

  if (bx.classList.contains("active-bx")) {
    header.classList.remove("active-header");
    return;
  }

  header.classList.toggle("active-header", scrollPosition >= 400);

}

window.addEventListener("scroll", scrollHeader);

/*======================================================*/
/*==================== ANIMATION BX ====================*/
/*======================================================*/
const bx = document.querySelector(".bx");
const point1 = document.querySelector(".point-1");
const point2 = document.querySelector(".point-2");
const point3 = document.querySelector(".point-3");
const point4 = document.querySelector(".point-4");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const menu_links = Array.from(document.querySelectorAll(".menu a"));
const menu_links_icon = Array.from(
  document.querySelectorAll(".menu-link-icon"),
);

/*============================================*/
/*============= ANIMATION MENU ============== */
/*============================================*/
// const tl_menu = gsap.timeline({ paused: true });
// tl_menu.from(
//   ".menu blockquote",
//   {
//     opacity: 0,
//     y: -100,
//     x: -100,
//     filter: "blur(32px)",
//     duration: 2,
//     stagger: { each: 0.2 },
//     ease: "power4.out",
//   },
//   "+=0.3",
// );

// menu_links.forEach((item) => {
//   item.addEventListener("click", () => {
//     nav.classList.remove("active-nav");
//     bx.classList.remove("active-bx");

//     tl_menu.reverse(2);
//     menu.classList.remove("active-menu");
//   });
// });

// menu_links_icon.forEach((item) => {
//   item.addEventListener("click", () => {
//     nav.classList.remove("active-nav");
//     bx.classList.remove("active-bx");

//     tl_menu.reverse(2);
//     menu.classList.remove("active-menu");
//   });
// });

/*==============================================*/
/*==================== GSAP ====================*/
/*==============================================*/
document.addEventListener("DOMContentLoaded", () => {
  /*--=========== GSAP SCROLLTRIGGER ============- */
  gsap.registerPlugin(ScrollTrigger);

  /*--=========== LENIS SCROLL ============- */
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  /*================================================*/
  /*=========== TIMELINE LOADING E HERO ============*/
  /*================================================*/
  var tl1 = gsap.timeline();
  tl1
    .to(".screen-loading", {
      duration: 1,
      opacity: 0,
      delay: 4,
      ease: "power4.out",
    })
    .from(
      ".container-hero",
      {
        duration: 4,
        opacity: 0,
        x: -300,
        stagger: { each: 0.3 },
        ease: "power4.out",
      },
      "-=1.9",
    );

  /*==================================================*/
  /*=========== ANIMAÇÃO TEXTO INTRODUÇÃO ============*/
  /*==================================================*/
  const targets = document.querySelectorAll(".js-fill > span");

  targets.forEach((target) => {
    gsap.to(target, {
      backgroundSize: "200% 200%",
      ease: "none",
      scrollTrigger: {
        trigger: target.closest(".js-fill"),
        start: "top 80%",
        end: "bottom 35%",
        scrub: 2,
      },
    });
  });

  /*==================================================*/
  /*=========== BOTÃO FLUTUANTE DE SCROLL ============*/
  /*==================================================*/
  const scrollBtn = document.querySelector(".social");
  const footer = document.querySelector("footer");
  const FOOTER_THRESHOLD = 80;
  const SECTION_OFFSET = 2;

  const getMaxScroll = () =>
    document.documentElement.scrollHeight - window.innerHeight;

  const getSections = () =>
    Array.from(document.querySelectorAll("main section, footer"));

  const getSectionTops = () =>
    getSections()
      .map((el) => Math.round(el.getBoundingClientRect().top + lenis.scroll))
      .filter((top) => top >= 0)
      .sort((a, b) => a - b);

  const isNearFooter = () => {
    const maxScroll = getMaxScroll();
    if (lenis.scroll >= maxScroll - FOOTER_THRESHOLD) return true;
    if (!footer) return false;
    return footer.getBoundingClientRect().top <= window.innerHeight - FOOTER_THRESHOLD;
  };

  const updateScrollBtn = () => {
    if (!scrollBtn) return;

    if (isNearFooter()) {
      scrollBtn.classList.add("social--top");
      scrollBtn.setAttribute("aria-label", "Voltar ao topo");
    } else {
      scrollBtn.classList.remove("social--top");
      scrollBtn.setAttribute("aria-label", "Rolar para a próxima seção");
    }
  };

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      if (isNearFooter()) {
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      }

      const current = lenis.scroll;
      const nextTop = getSectionTops().find((top) => top > current + SECTION_OFFSET);

      lenis.scrollTo(nextTop ?? getMaxScroll(), { duration: 1 });
    });

    lenis.on("scroll", updateScrollBtn);
    updateScrollBtn();
  }
});

/*=======================================*/
/*=========== CAROUSEL LOGOS ============*/
/*=======================================*/
const brandsSwiper = new Swiper(".carousel__swiper", {
  slidesPerView: 2.9,
  spaceBetween: 16,
  watchOverflow: true,
  loop: true,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    620: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    960: {
      slidesPerView: 5,
      spaceBetween: 28,
    },
    1240: {
      slidesPerView: 7,
      spaceBetween: 32,
    },
  },
});

// CAROUSEL NOVO AINDA A DESENVOLVER
// document.addEventListener("DOMContentLoaded", () => {
//     const MIN_WIDTH = 768;
//     let swiperReady = false;

//     // Verifica se a tela é desktop
//     function isDesktop() {
//         return window.matchMedia(`(min-width: ${MIN_WIDTH}px)`).matches;
//     }

//     // Função responsável pela animação dos slides com GSAP
//     function animateSlides(swiper) {
//         const slides = swiper.slides;
//         const total = slides.length;

//         // Garante que o valor de slides per view seja numérico (útil se estiver usando 'auto')
//         const visible = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 3;

//         const centerOffset = Math.floor(visible / 2);
//         let centerIndex = swiper.activeIndex + centerOffset;
//         if (centerIndex >= total) centerIndex -= total;

//         slides.forEach((slide, i) => {
//             const isCenter = i === centerIndex;

//             if (isCenter) {
//                 gsap.to(slide, {
//                     scale: 1,
//                     opacity: 1,
//                     filter: "blur(0px) saturate(1) brightness(1) contrast(1.15)",
//                     zIndex: 3,
//                     duration: 0.45,
//                     ease: "power3.out"
//                 });
//             } else {
//                 gsap.to(slide, {
//                     scale: 0.75,
//                     opacity: 0.5,
//                     filter: "blur(4px) saturate(0.1) brightness(1) contrast(1)",
//                     zIndex: 1,
//                     duration: 0.45,
//                     ease: "power3.out"
//                 });
//             }
//         });
//     }

//     // Função de inicialização e monitoramento
//     function init() {
//         if (!isDesktop() || swiperReady) return;

//         // Atualizado para a nova classe da sua estrutura HTML
//         const swiperEl = document.querySelector(".carousel__swiper");
//         if (!swiperEl) return;

//         function checkSwiper() {
//             // Verifica se a instância do Swiper já foi atrelada ao elemento
//             const swiper = swiperEl.swiper;
//             if (!swiper) {
//                 setTimeout(checkSwiper, 150);
//                 return;
//             }

//             swiperReady = true;

//             // Atrela os eventos de mudança de slide à animação
//             swiper.on("slideChange", () => animateSlides(swiper));
//             swiper.on("slideChangeTransitionEnd", () => animateSlides(swiper));

//             // Execução inicial
//             animateSlides(swiper);
//         }

//         checkSwiper();
//     }

//     init();

//     // Reavalia caso a janela seja redimensionada
//     window.addEventListener("resize", () => {
//         if (isDesktop() && !swiperReady) init();
//     });
// });
