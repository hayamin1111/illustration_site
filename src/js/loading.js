import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

/**
 * @descroption ローディングアニメーション
 */
export default () => {
  const body = document.querySelector('body');
  const loadingTitle = document.getElementById("js-loadingTitle");
  const loadingElm = document.getElementById("js-loadingText");
  const loadingStr = "Now Loading...";
  let loadingText = "";
  loadingStr.split('').forEach(e => {
    loadingText += `<span>${e}</span>`;
  });
  loadingElm.innerHTML = loadingText;

  const loadingCont = document.querySelectorAll("#js-loadingText span");
  gsap.set(loadingCont, {
    opacity: 0,
    y: 30,
  })  
  gsap.to(loadingCont, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'linear',
    stagger: 0.1,
  })

  const bubble = document.getElementById('js-bubble01');
  gsap.timeline({
        scrollTrigger: {
          trigger: "#js-mainvisualLead",
          start: "bottom 60%",
        }
      })
      .from(bubble, {xPercent: 100})
      .to(bubble, {
        ease: 'linear',
        duration: 6,
        motionPath: {
          path: '#bubblepath',
          align: '#bubblepath',
          autoRotate: true,
          start: 0,
          end: 1,
        },
      })
      .to(bubble, {
        xPercent: -100,
        opacity: 0,
        duration: 'back',
      })

  const mainvisualLead = document.getElementById('js-mainvisualLead');
  const loadingBackground = document.getElementById("js-loadingBackground");
  const marquee = document.getElementById("js-marquee");
  window.onload = function() {
    const loadingFinishClassAdd = (elm, time) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          elm.classList.add('is-done');
          resolve();
        }, time);
      });
    }
    async function loadingFinish() {
      await loadingFinishClassAdd(loadingElm, 2000);
      await loadingFinishClassAdd(loadingBackground, 1000);
      await loadingFinishClassAdd(body, 100);
      await loadingFinishClassAdd(loadingTitle, 300);
      await loadingFinishClassAdd(mainvisualLead, 800);
      await loadingFinishClassAdd(marquee, 300);
    }
    loadingFinish();
  }
}

