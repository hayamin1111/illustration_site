import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * @descroption スクロールアニメーション
 */
export default () => {
  gsap.to('.js-handdrawnImage', {
    filter: "blur(0)",
    ease: 'linear',
    duration: 5,
    scrollTrigger: {
      trigger: "#js-handdrawn",
      start: "top center",
      markers: true,
    },
    stagger: {
      from: "start", 
      amount: 0.4,
    },
  })
}

