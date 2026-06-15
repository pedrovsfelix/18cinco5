/*==================== SHOW MENU ====================*/

/*==================================================================*/
/*==================== CHANGE BACKGROUND HEADER ====================*/
/*==================================================================*/
function scrollHeader() {
  const nav = document.querySelector("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("active-header");
  else nav.classList.remove("active-header");
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
const menu_links = Array.from(document.querySelectorAll(".menu-link"));
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

// bx.addEventListener('click', () => {
//   //point1.classList.toggle('point-1-active');
//   //point2.classList.toggle('point-2-active');
//   //point3.classList.toggle('point-3-active');
//   //point4.classList.toggle('point-4-active');

//   nav.classList.toggle('active-nav');
//   menu.classList.toggle('active-menu');
//   bx.classList.toggle('active-bx');

//   if(menu.classList.contains('active-menu')){
//     tl_menu.play();
//   }
//   else{
//     tl_menu.reverse(2);
//   }
// })

menu_links.forEach((item) => {
  // Quando clicar em algum link, o menu precisa recolher sempre, desativar.
  item.addEventListener("click", () => {
    nav.classList.remove("active-nav");
    bx.classList.remove("active-bx");

    tl_menu.reverse(2);
    menu.classList.remove("active-menu");

    //point1.classList.remove('point-1-active');
    //point2.classList.remove('point-2-active');
    //point3.classList.remove('point-3-active');
    //point4.classList.remove('point-4-active');
  });
});

menu_links_icon.forEach((item) => {
  // Quando clicar em algum link, o menu precisa recolher sempre, desativar.
  item.addEventListener("click", () => {
    nav.classList.remove("active-nav");
    bx.classList.remove("active-bx");

    tl_menu.reverse(2);
    menu.classList.remove("active-menu");

    //point1.classList.remove('point-1-active');
    //point2.classList.remove('point-2-active');
    //point3.classList.remove('point-3-active');
    //point4.classList.remove('point-4-active');
  });
});

/*==================== ANIMATION TEXT HERO ====================*/
// var textWrapper = document.querySelector('.ml1');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline()
//   .add({
//     targets: '.ml1 .letter',
//     translateX: [-200, 0],
//     translateY: [-80, 0],
//     translateZ: 0,
//     opacity: [0, 1],
//     filter: ['blur(18px)', 'blur(0px)'],
//     easing: "easeOutExpo",
//     duration: 2500,
//     delay: (el, i) => 500 + 200 * i
//   });

// var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span>$&</span>");

// var textWrapper = document.querySelector('.ml3');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span>$&</span>");

// var textWrapper = document.querySelector('.ml4');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span>$&</span>");

// var textWrapper = document.querySelector('.ml5');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span>$&</span>");

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.querySelector(".bg-header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) nav.classList.add("active-header");
  else nav.classList.remove("active-header");
}

window.addEventListener("scroll", scrollHeader);

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
  // var tl1 = gsap.timeline();
  // tl1
  //   .to(".screen-loading", {
  //     duration: 2,
  //     opacity: 0,
  //     delay: 4,
  //     ease: "power4.out",
  //   })
  //   .from(
  //     ".container-hero",
  //     {
  //       duration: 2,
  //       opacity: 0,
  //       x: -100,
  //       stagger: { each: 0.3 },
  //       ease: "power4.out",
  //     },
  //     "-=1.9",
  //   );

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

  /*--=========== ANIMATION TEXTS PRESENTATION ============- */
  gsap.from(".text-presentation-design", {
    x: 110,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".text-presentation-design",
      start: "top 70%",
      end: "bottom 30%",
      scrub: 3,
    },
  });

  gsap.from(".text-presentation-code", {
    x: -100,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".text-presentation-code",
      start: "top 70%",
      end: "bottom 30%",
      scrub: 3,
    },
  });

  gsap.from(".text-presentation-motion", {
    x: 100,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".text-presentation-motion",
      start: "top 70%",
      end: "bottom 30%",
      scrub: 3,
    },
  });

  gsap.from(".text-presentation-3d", {
    x: -100,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".text-presentation-3d",
      start: "top 70%",
      end: "bottom 30%",
      scrub: 3,
    },
  });

  /////////////////////////////////
  // TEXTS EXPERTISES
  /////////////////////////////////
  gsap.from(".expertise-motion", {
    x: 50,
    duration: 2,
    opacity: 0,
    filter: "blur(10px)",
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".expertise-motion",
      start: "top 80%",
      end: "bottom 00%",
      scrub: 3,
    },
  });

  gsap.from(".expertise-frontend", {
    x: -30,
    duration: 2,
    opacity: 0,
    filter: "blur(10px)",
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".expertise-frontend",
      start: "top 80%",
      end: "bottom 00%",
      scrub: 3,
    },
  });

  gsap.from(".expertise-ui", {
    x: 100,
    duration: 2,
    opacity: 0,
    filter: "blur(10px)",
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".expertise-ui",
      start: "top 80%",
      end: "bottom 00%",
      scrub: 3,
    },
  });

  gsap.from(".expertise-ux", {
    x: -100,
    duration: 2,
    opacity: 0,
    filter: "blur(10px)",
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".expertise-ux",
      start: "top 80%",
      end: "bottom 00%",
      scrub: 3,
    },
  });

  gsap.from(".expertise-experience", {
    x: 80,
    duration: 2,
    opacity: 0,
    filter: "blur(10px)",
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".expertise-experience",
      start: "top 80%",
      end: "bottom 00%",
      scrub: 3,
    },
  });

  gsap.from(".expertise-creativity", {
    x: -120,
    duration: 2,
    opacity: 0,
    filter: "blur(10px)",
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".expertise-creativity",
      start: "top 80%",
      end: "bottom 00%",
      scrub: 3,
    },
  });

  gsap.from(".expertise-filmmaker", {
    x: 40,
    duration: 2,
    opacity: 0,
    filter: "blur(10px)",
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".expertise-filmmaker",
      start: "top 80%",
      end: "bottom 00%",
      scrub: 3,
    },
  });

  /////////////////////////////////
  // SECTIONS
  /////////////////////////////////
  gsap.from("#section-iam blockquote", {
    opacity: 0,
    x: -50,
    duration: 2,
    ease: "power4.out",
    stagger: { each: 0.2 },
    scrollTrigger: {
      trigger: "#section-iam",
      start: "top 80%",
      end: "bottom 00%",
    },
  });

  /*
    gsap.from(".bb-gray",{
        opacity: 0,
        y: 200,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '.bb-gray',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });
*/

  gsap.from("#section-works figure", {
    opacity: 0,
    x: -50,
    duration: 2,
    ease: "power4.out",
    stagger: { each: 0.2 },
    scrollTrigger: {
      trigger: "#section-works",
      start: "top 80%",
      end: "bottom 00%",
    },
  });

  gsap.from("#section-sideworks article", {
    opacity: 0,
    x: -50,
    duration: 2,
    ease: "power4.out",
    stagger: { each: 0.15 },
    scrollTrigger: {
      trigger: "#section-sideworks",
      start: "top 80%",
      end: "bottom 00%",
    },
  });

  gsap.from("#section-text-works span", {
    opacity: 0,
    x: -100,
    duration: 3,
    ease: "power4.out",
    stagger: { each: 0.15 },
    scrollTrigger: {
      trigger: "#section-text-works",
      start: "top 80%",
      end: "bottom 00%",
    },
  });

  gsap.from("#section-training span", {
    opacity: 0,
    x: -100,
    duration: 3,
    ease: "power4.out",
    stagger: { each: 0.15 },
    scrollTrigger: {
      trigger: "#section-training",
      start: "top 80%",
      end: "bottom 00%",
    },
  });

  gsap.from("#section-text-sideworks span", {
    opacity: 0,
    x: -100,
    duration: 3,
    ease: "power4.out",
    stagger: { each: 0.15 },
    scrollTrigger: {
      trigger: "#section-text-sideworks",
      start: "top 80%",
      end: "bottom 00%",
    },
  });

  gsap.from("#section-text-about span", {
    opacity: 0,
    x: -100,
    duration: 3,
    ease: "power4.out",
    stagger: { each: 0.15 },
    scrollTrigger: {
      trigger: "#section-text-about",
      start: "top 80%",
      end: "bottom 00%",
    },
  });

  gsap.from("#section-sideworks figure", {
    opacity: 0,
    x: -50,
    duration: 2,
    ease: "power4.out",
    stagger: { each: 0.2 },
    scrollTrigger: {
      trigger: "#section-sideworks",
      start: "top 80%",
      end: "bottom 00%",
    },
  });

  gsap.from("#section-video video", {
    opacity: 0,
    x: -50,
    duration: 2,
    ease: "power4.out",
    stagger: { each: 0.2 },
    scrollTrigger: {
      trigger: "#section-video",
      start: "top 80%",
      end: "bottom 00%",
    },
  });

  gsap.from("#section-about blockquote", {
    opacity: 0,
    x: -50,
    duration: 2,
    ease: "power4.out",
    stagger: { each: 0.2 },
    scrollTrigger: {
      trigger: "#section-about",
      start: "top 80%",
      end: "bottom 00%",
    },
  });

  gsap.from("#section-div-training blockquote", {
    opacity: 0,
    x: -50,
    duration: 2,
    ease: "power4.out",
    stagger: { each: 0.2 },
    scrollTrigger: {
      trigger: "#section-div-training",
      start: "top 80%",
      end: "bottom 00%",
    },
  });

  gsap.from("#section-letsconnect div", {
    opacity: 0,
    y: -50,
    duration: 2,
    ease: "power4.out",
    stagger: { each: 0.2 },
    scrollTrigger: {
      trigger: "#section-letsconnect",
      start: "top+=2800 80%",
      end: "bottom 00%",
      //markers: true,
    },
  });

  gsap.from("#section-letsconnect span", {
    opacity: 0,
    x: -50,
    duration: 2,
    ease: "power4.out",
    stagger: { each: 0.2 },
    scrollTrigger: {
      trigger: "#section-letsconnect",
      start: "top+=2800 80%",
      end: "bottom 00%",
      //markers: true,
    },
  });

  gsap.from("#section-links div div", {
    opacity: 0,
    y: -50,
    duration: 2,
    ease: "power4.out",
    stagger: { each: 0.3 },
    scrollTrigger: {
      trigger: "#section-links",
      start: "top+=2800 80%",
      end: "bottom 00%",
      //markers: true,
    },
  });

  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////

  var tl_text_animation = gsap.timeline();

  tl_text_animation
    .from(".text1-3d", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".text1-3d",
        start: "center 50%",
        end: "center 00%",
        pin: true,
        scrub: true,
        //markers: true,
      },
      onStart: function () {
        gsap.to(".square-animation", {
          opacity: 1,
          rotate: 180,
          scrollTrigger: {
            trigger: ".text1-3d",
            start: "center 50%",
            end: "center 00%",
            pin: true,
            scrub: true,
            //markers: true,
          },
        });
      },
    })
    .from(".text2-3d", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".text2-3d",
        start: "center 50%",
        end: "center 00%",
        pin: true,
        scrub: true,
        //markers: true,
      },
      onStart: function () {
        gsap.to(".square-animation", {
          opacity: 1,
          rotate: 0,
          scrollTrigger: {
            trigger: ".text2-3d",
            start: "center 50%",
            end: "center 00%",
            pin: true,
            scrub: true,
            //markers: true,
          },
        });
      },
    })
    .from(".text3-3d", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".text3-3d",
        start: "center 50%",
        end: "center 00%",
        pin: true,
        scrub: true,
        //markers: true,
      },
      onStart: function () {
        gsap.to(".square-animation", {
          opacity: 1,
          x: -120,
          scale: 0.7,
          scrollTrigger: {
            trigger: ".text3-3d",
            start: "center 50%",
            end: "center 00%",
            pin: true,
            scrub: true,
            //markers: true,
          },
        });
      },
    })
    .from(".text4-3d", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".text4-3d",
        start: "center 50%",
        end: "center 00%",
        pin: true,
        scrub: true,
        //markers: true,
      },
      onStart: function () {
        gsap.to(".square-animation", {
          opacity: 1,
          x: 100,
          transform: "translate(-50%, -50%)",
          scrollTrigger: {
            trigger: ".text4-3d",
            start: "center 50%",
            end: "center 00%",
            pin: true,
            scrub: true,
            //markers: true,
          },
        });
      },
    })
    .from(".text5-3d", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".text5-3d",
        start: "center 50%",
        end: "center 00%",
        pin: true,
        scrub: true,
        //markers: true,
      },
      onStart: function () {
        gsap.to(".square-animation", {
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 120,
          transform: "translate(-50%, -50%) rotateX(0deg) rotateY(0deg)",
          scrollTrigger: {
            trigger: ".text5-3d",
            start: "center 50%",
            end: "center 00%",
            pin: true,
            scrub: true,
            //markers: true,
          },
        });
      },
    })
    .from(".text6-3d", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".text6-3d",
        start: "center 50%",
        end: "center 00%",
        pin: true,
        scrub: true,
        //markers: true,
      },
      onStart: function () {
        gsap.to(".square-animation", {
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          transform:
            "translate(-50%, -50%) rotateX(160deg) rotateY(30deg) rotateZ(5deg)",
          scrollTrigger: {
            trigger: ".text6-3d",
            start: "center 50%",
            end: "center 00%",
            pin: true,
            scrub: true,
            //markers: true,
          },
        });
      },
    })
    .from(".text7-3d", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".text7-3d",
        start: "center 50%",
        end: "center 00%",
        pin: true,
        scrub: true,
        //markers: true,
      },
      onStart: function () {
        gsap.to(".square-animation", {
          opacity: 0,
          x: 0,
          scale: 0,
          rotate: 0,
          transform:
            "translate(-50%, -50%) rotateX(240deg) rotateY(-60deg) rotateZ(20deg)",
          scrollTrigger: {
            trigger: ".text7-3d",
            start: "center 50%",
            end: "center 00%",
            pin: true,
            scrub: true,
            //markers: true,
          },
        });
      },
    });
});

//ScrollTrigger.addEventListener("scrollStart", () => ScrollTrigger.refresh() );
