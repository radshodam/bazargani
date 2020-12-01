// const timeline = gsap.timeline({ defaults: { duration: 1, delay: 1 } })
// timeline
//     .from('.fixed-top ', { y: '-100%', ease: 'bounce' })
// start gsap for lazyloading  by every class masalan .color-block
gsap.registerPlugin(ScrollTrigger);

// Color blocks
ScrollTrigger.batch(".color-block", {
    // interval: 0.1, // time window (in seconds) for batching to occur
    onEnter: (batch) =>
        gsap.from(batch, {
            opacity: 0,
            y: 100,
            stagger: { each: 0.15 },
            overwrite: true
        }),
    onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
    end: "35% center"
});
// end avali
// gsap.from('.fixed-top', { duration: 2, y: '-100%', ease: 'bounce', delay: 1 })
// gsap.from('.headerTOPS', { duration: 2, ease: 'back.out(1.7)', y: -500, delay: 0.5 });
// gsap.from('header', { duration: 2, ease: 'back.out(1.7)', y: -500, delay: 1 });
gsap.from('.rightGSP', { duration: 2, ease: 'back.out(1.7)', x: 900, delay: 1 });
gsap.from('.leftGSP', { duration: 2, ease: 'back.out(1)', x: -900, delay: 1});
// gsap.from('.one', { duration: 1, ease: 'back.out(1)', y: -5000, delay:0.5});
// first work by me gsap