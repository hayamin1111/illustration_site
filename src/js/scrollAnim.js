import {gsap, Power4} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * @descroption スクロールアニメーション
 */
export default () => {
  const titles = document.querySelectorAll('.js-title');
  titles.forEach((title) => {
    gsap.set(title, {
      opacity: 0,
      filter: "blur(8px)",
      translateY: "20%",
    })
    gsap.to(title, {
      opacity: 1,
      filter: "blur(0)",
      translateY: "0",
      ease: Power4.out,
      duration: .4,
      scrollTrigger: {
        trigger: title,
        start: "top 90%",
      },
    })
  })
  gsap.from('.js-handdrawnImage', {
    opacity: 0,
    y:  "20%",
    filter: "blur(10px)",
    ease: Power4.out,
    duration: .7,
    scrollTrigger: {
      trigger: ".js-handdrawnImage",
      start: "top 80%",
    },
    stagger: {
      from: "start", 
      amount: 0.7,
    },
  })
  gsap.set('.js-pickupSubtitle', {
    opacity: 0,
    filter: "blur(8px)",
    rotateY: "45deg",
  })
  gsap.to('.js-pickupSubtitle', {
    opacity: 1,
    filter: "blur(0)",
    rotateY: "0deg",
    ease: Power4.out,
    duration: .9,
    scrollTrigger: {
      trigger: "#js-pickup",
      start: "top 80%",
    },
    stagger: {
      from: "start", 
      amount: 0.8,
    },
  })
  gsap.set('.js-pickupDesc', {
    opacity: 0,
    filter: "blur(8px)",
    translateY: "20%",
  })
  gsap.to('.js-pickupDesc', {
    opacity: 1,
    filter: "blur(0)",
    translateY: "0px",
    ease: Power4.out,
    duration: .9,
    scrollTrigger: {
      trigger: "#js-pickup",
      start: "top 80%",
    },
    stagger: {
      from: "start", 
      amount: 0.8,
    },
  })
  gsap.set('.js-funartLead', {
    opacity: 0,
    filter: "blur(8px)",
    translateY: "20%",
  })
  gsap.to('.js-funartLead', {
    opacity: 1,
    filter: "blur(0)",
    translateY: "0",
    ease: Power4.out,
    duration: .5,
    scrollTrigger: {
      trigger: "#js-funart",
      start: "top 80%",
    },
  })
  gsap.from('.js-flowersImages li', {
    opacity: 0,
    filter: "blur(10px)",
    translateY: "30px",
    ease: Power4.out,
    duration: .5,
    scrollTrigger: {
      trigger: ".js-flowersImages li",
      start: "top 80%",
    },
    stagger: {
      from: "start", 
      amount: 0.6,
    },
  })
  gsap.set('.js-footer', {
    background: "#0D001A",
  })
  gsap.to('.js-footer', {
    background: "none",
    ease: "linear",
    duration: 1,
    scrollTrigger: {
      trigger: ".js-footer",
    },
  })
}

