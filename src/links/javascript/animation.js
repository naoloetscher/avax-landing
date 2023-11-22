gsap.registerPlugin(ScrollTrigger);

// Fade in after pageload

gsap.from('#menu li', 
	{
		duration: 1,
		y: '-40px',
		opacity: 0,
		stagger: 0.1,
		ease: 'back',
		filter:"blur(10px)",
		delay: 0.3,
	}
)

gsap.from('#logo', 
	{
		duration: 2,
		opacity: 0,
	}
)

gsap.from('.featured div, .f-img', 
	{
		duration: 2,
		opacity: 0,
		filter:"blur(10px)",
		stagger: 0.1,
		y: '-30px',
		delay: 0.3,
		ease: 'back',
	}
)

gsap.from('.title-sec', 
	{
		duration: 1,
		opacity: 0,
	}
)

// Fade in content after start scrolling (sct)

ScrollTrigger.matchMedia({
	"(min-width: 1000px)": function() {
		var sct1 = gsap.timeline({
			scrollTrigger: {
				trigger: "#start",
				start: "top 5px",
				markers: false,
			},
		});
		
		sct1.from('.hidden, .section', {
			duration: 1,
			opacity: 0,
		});
		
		var sct2 = gsap.timeline({
			scrollTrigger: {
				trigger: "footer",
				markers: false,
			},
		});
		
		sct2.to('.hidden, .section', {
			duration: 1,
			opacity: 1,
		});
	}
});	


// Feature Image Animation (fia)

var fia1 = gsap.timeline({
	scrollTrigger: {
		trigger: "#start",
		start: "top top",
		end: "bottom bottom",
		scrub: 0.5,
		markers: false,
	},
	defaults: { duration: 1 }
});

fia1.to('#top-left-element', {
	x: '-20px',
	y: '-20px',
},0);

fia1.to('#bottom-left-element', {
	x: '-20px',
	y: '20px',
},0.2);

fia1.to('#bottom-right-element', {
	x: '20px',
	y: '20px'
},0.4);

fia1.to('#top-right-element', {
	x: '20px',
	y: '-20px'
},0.6);

fia1.to('#middle-element', {
	rotation:"45_long",
	duration: 1.5
},0);