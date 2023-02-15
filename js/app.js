let tl = gsap.timeline();

tl.from(".conic", {
	x: -700,
	duration: 2,
	opacity: 0,
	ease: "elastic.out(1, 0.5)",
});
tl.from(".header__block-title", {
	duration: 3,
	opacity: 0,
});




AOS.init();