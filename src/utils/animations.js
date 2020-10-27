import gsap from 'gsap';

export const animateEnterCheckout = element => {
  const tl = gsap.timeline({paused: true, defaults: {ease: 'power4.out'}});
  const checkoutMessage = document.querySelector('.checkout');

  tl.set(element, {
    autoAlpha: 1,
  });
  return tl
    .to(element, {
      autoAlpha: 0,
      translateX: -500,
      duration: 0.8,
      display: 'none',
    })
    .to(checkoutMessage, {
      opacity: 1,
      display: 'block',
      duration: 1,
    })
    .to(
      checkoutMessage,
      {
        duration: 1,
        ease: 'none',
      },
      '-=0.5',
    )
    .play();
};

export const animateCheckout = element => {
  const [elements] = element.children;
  const lights = elements.getElementById('lights');

  gsap.set(lights, {opacity: 1});
  gsap
    .to(lights, {
      duration: 0.1,
      opacity: 0,
      repeat: -1,
      yoyo: true,
    })
    .play();
};
