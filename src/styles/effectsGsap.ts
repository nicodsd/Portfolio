import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const efecto_section_proyectos_cards = () => [
    () => gsap.from(".menu-navbar",
        {
            y: -50,
            opacity: 1,
            stagger: 0.25
        }
    ),
    () => gsap.fromTo('.seccion-principal', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.seccion-principal',
            start: 'top 70%',
            end: 'top 50%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.primer-plano', {
        opacity: 1,
        y: 60
    }, {
        opacity: 1,
        y: -30,
        duration: 2,
        scrollTrigger: {
            trigger: '.primer-plano',
            start: 'top 20%',
            end: 'top -60%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.seccion', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.seccion',
            start: 'top 70%',
            end: 'top 50%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.seccion-2', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.seccion',
            start: 'top 60%',
            end: 'top 0%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.card', {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
            trigger: '.card',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.seccion-mobile', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.seccion-mobile',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.cel', {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
            trigger: '.cel',
            start: 'top 100%',
            end: 'top 50%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.seccion-tecno', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.seccion-tecno',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.title-tecno', {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
            trigger: '.title-tecno',
            start: 'top 100%',
            end: 'top 50%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.img-tecno', {
        opacity: 1,
        y: 150
    }, {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
            trigger: '.img-tecno',
            start: 'top 100%',
            end: 'top 50%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.img-tecno2', {
        opacity: 1,
        y: 250
    }, {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
            trigger: '.img-tecno2',
            start: 'top 100%',
            end: 'top 30%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.img-tecno3', {
        opacity: 1,
        y: 200
    }, {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
            trigger: '.img-tecno3',
            start: 'top 100%',
            end: 'top 30%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.tecno', {
        opacity: 1,
        y: 250
    }, {
        opacity: 1,
        duration: 2.5,
        ease: "circ.out",
        y: 0,
        scrollTrigger: {
            trigger: '.tecno',
            start: 'top 100%',
            end: 'top 30%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.seccion-contact', {
        opacity: 1,
        y: 100
    }, {
        opacity: 1,
        duration: 2.5,
        ease: "circ.out",
        y: 0,
        scrollTrigger: {
            trigger: '.seccion-contact',
            start: 'top 100%',
            end: 'top 30%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.title-contact', {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
            trigger: '.title-contact',
            start: 'top 100%',
            end: 'top 50%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo('.input-contact', {
        opacity: 1,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
            trigger: '.title-contact',
            start: 'top 70%',
            end: 'top 60%',
            scrub: 1,
        }
    }),
    () => gsap.fromTo(".carrousel-sec",
        {
            y: -150,
            opacity: 1,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.logoloop-seccion',
                start: 'top 100%',
                end: 'top 20%',
                scrub: 1,
            }
        }
    ),
    () => gsap.from('.seccion-footer', {
        opacity: 1,
        y: 200,
        scrollTrigger: {
            trigger: '.button-contact',
            start: 'top 100%',
            end: 'top 70%',
            scrub: 1,
        }
    }),
]