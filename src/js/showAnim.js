import {gsap, Power4} from "gsap";

/**
 * @descroption マウスオーバー時の画像表示
 */
export default () => {
  const pickupContents = document.querySelectorAll('.js-pickupContent');
  if(pickupContents.length) {
    Array.from(pickupContents).forEach(function(content) {
      // let image = content.lastElementChild;
      content.addEventListener('mouseenter', e => {
        let image = e.currentTarget.querySelector('.js-pickupImage');
        image.classList.add('is-show');
        // console.log('mouseenter');
        gsap.to(image, {
          duration: .4,
          autoAlpha: 1,
          scale: 1,
          ease: Power4.out,
          overwrite: true,
        })
      }),
      content.addEventListener('mouseleave', e => {
        console.log('mouseleave');
        let image = e.currentTarget.querySelector('.js-pickupImage');
        image.classList.remove('is-show');
        gsap.to(image, {
          duration: .4,
          autoAlpha: 0,
          scale: 0,
          ease: Power4.out,
          // overwrite: true,
        })
      }),
      content.addEventListener('mousemove', e => {
        console.log('mosemove');
        let image = e.currentTarget.querySelector('.js-pickupImage');
        let posContentX = e.currentTarget.getBoundingClientRect().left;
        let posContentY = e.currentTarget.getBoundingClientRect().top;
        // let posImageX = image.getBoundingClientRect().left;
        let x =  e.clientX - posContentX - image.clientWidth / 2;
        let y =  e.clientY - posContentY - image.clientHeight / 2;
        // let 
        // if(e.clientY < posContentY) {
          // console.log('test');
        // if(e.clientX < posContentX - 10 && e.clientY < posContentY - 10) {
          gsap.to(image, {
            duration: .7,
            x: x,
            y: y,
            // overwrite: false,
          })
        // }
          // e.currentTarget.lastElementChild.style.transform = `translate(${x}px, ${y}px)`;
        // }
      });
    });
      
  }
}
// export default () => {
//   const pickupContents = document.querySelectorAll('.js-pickupContent');
//   if(pickupContents.length) {
//     Array.from(pickupContents).forEach(function(content) {
//       // let image = content.lastElementChild;
//       content.addEventListener('mouseenter', e => {
//         e.currentTarget.lastElementChild.classList.add('is-show');
//         console.log('mouseenter');
//         gsap.to(e.currentTarget.lastElementChild, {
//           duration: .4,
//           autoAlpha: 1,
//           scale: 1,
//           ease: Power4.out,
//           overwrite: true,
//         })
//       }),
//       content.addEventListener('mouseleave', e => {
//         console.log('mouseleave');
//         e.currentTarget.lastElementChild.classList.remove('is-show');
//         gsap.to(e.currentTarget.lastElementChild, {
//           duration: .4,
//           autoAlpha: 0,
//           scale: 0,
//           ease: Power4.out,
//           overwrite: true,
//         })
//       }),
//       content.addEventListener('mousemove', e => {
//         console.log('mosemove');
//         let posContentX = e.currentTarget.getBoundingClientRect().left;
//         let posContentY = e.currentTarget.getBoundingClientRect().top;
//         let posImageX = e.currentTarget.lastElementChild.getBoundingClientRect().left;
//         let imageHeight = e.currentTarget.lastElementChild.clientHeight;
//         let x =  e.clientX - posContentX - posImageX / 2;
//         let y =  e.clientY - (posContentY + imageHeight / 2);
//         // if(e.clientY < posContentY) {
//           // console.log('test');
//         gsap.to(e.currentTarget.lastElementChild, {
//           duration: .7,
//           x: x,
//           y: y,
//           overwrite: false,
//         })
//           // e.currentTarget.lastElementChild.style.transform = `translate(${x}px, ${y}px)`;
//         // }
//       });
//     });
      
//   }
// }

