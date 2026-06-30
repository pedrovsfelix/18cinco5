/*==================================================================*/
/*==================== SHOW MENU ====================*/
/*==================================================================*/
const showMenu = (bxId, menuId) => {
  const bx = document.getElementById(bxId);
  const menu = document.getElementById(menuId);

  // Validate that variables exist
  if (bx && menu) {
    bx.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class

      menu.classList.toggle("active-menu");
      bx.classList.toggle("active-bx");
    });
  }
};

showMenu("bx", "menu");

/*==================================================================*/
/*==================== CHANGE BACKGROUND HEADER ====================*/
/*==================================================================*/
function scrollHeader() {
  const header = document.querySelector("header");
  const bx = document.querySelector(".bx");
  const scrollPosition = window.scrollY;

  if (bx.classList.contains("active-bx")) {
    header.classList.remove("active-header");
    return;
  }

  if (scrollPosition >= 400) {
    header.classList.add("active-header");
  } else {
    header.classList.remove("active-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/*==================== ANIMATION BX ====================*/
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

/*--=========== ANIMATION MENU ============- */
const tl_menu = gsap.timeline({ paused: true });
tl_menu.from(
  ".menu blockquote",
  {
    opacity: 0,
    y: -100,
    x: -100,
    filter: "blur(32px)",
    duration: 2,
    stagger: { each: 0.2 },
    ease: "power4.out",
  },
  "+=0.3",
);

menu_links.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("active-nav");
    bx.classList.remove("active-bx");

    tl_menu.reverse(2);
    menu.classList.remove("active-menu");
  });
});

menu_links_icon.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("active-nav");
    bx.classList.remove("active-bx");

    tl_menu.reverse(2);
    menu.classList.remove("active-menu");
  });
});

/*==================== GSAP ====================*/
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

  /*--=========== TIMELINE LOADING E HERO ============- */
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

  /*--=========== ANIMAÇÃO TEXTO INTRODUÇÃO ============- */
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
});
