import {gsap, Power4} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * @descroption スクロールアニメーション
 */
export default () => {
  gsap.set('.js-handdrawnImage',  {
    opacity: 0,
    y: "20%",
    filter: "blur(10px)",
  });
  gsap.to('.js-handdrawnImage', {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    ease: Power4.out,
    duration: .7,
    scrollTrigger: {
      trigger: "#js-handdrawn",
      start: "top 80%",
      markers: true,
    },
    stagger: {
      from: "start", 
      amount: 0.7,
    },
  })
  gsap.to('.js-pickupSubtitle', {
    opacity: 1,
    filter: "blur(0)",
    rotateY: "0deg",
    ease: Power4.out,
    duration: .5,
    scrollTrigger: {
      trigger: "#js-pickup",
      start: "top 80%",
      markers: true,
    },
    stagger: {
      from: "start", 
      amount: 0.3,
    },
  })
}

