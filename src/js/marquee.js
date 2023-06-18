/**
 * @descroption 円周上を回る画像
 */
export default () => {
  const marqueeText = document.getElementById("js-marquee");
  const marqueeElm = marqueeText.textContent.split('');
  marqueeText.innerHTML = '';
  for(let i = 0; i < marqueeElm.length; i++) {
    let span = null;
    let degree = (360 / marqueeElm.length) * i;
    span = document.createElement('span');
    span.innerHTML = marqueeElm[i];
    span.style.position = 'absolute';
    span.style.height = '50%';
    span.style.transformOrigin = 'bottom center';
    span.style.top = '0';
    span.style.left = '50%';
    span.style.transform = `rotate(${degree}deg)`;
    marqueeText.appendChild(span);
  }
}

