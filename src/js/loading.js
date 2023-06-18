import {gsap} from "gsap";

/**
 * @descroption ローディングアニメーション
 */
export default () => {
  const loadingElm = document.getElementById("js-loadingText");
  const loadingStr = "Now Loading...";
  let loadingText = "";
  loadingStr.split('').forEach(e => {
    loadingText += `<span>${e}</span>`
  });
  loadingElm.innerHTML = loadingText;

  const loadingCont = document.querySelectorAll("#js-loadingText span");
  gsap.set(loadingCont, {
    opacity: 0,
    y: 30,
  })  

  gsap.timeline()
      .to(loadingCont, {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: 'linear',
        stagger: 0.2,
      })

  const loadingTitle = document.getElementById("js-loadingTitle");
  const loadingBackground = document.getElementById("js-loadingBackground");
  window.onload = function() {
    const loadingFinishClassAdd = (elm, time) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          elm.classList.add('is-done');
        }, time);
      });
    }
    async function loadingFinish() {
      await loadingFinishClassAdd(loadingElm, 2000);
      await loadingFinishClassAdd(loadingBackground, 4000);
      await loadingFinishClassAdd(loadingTitle, 6000);
    }
    loadingFinish();
  }
}

