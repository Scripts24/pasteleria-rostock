/*window.sr = ScrollReveal();
sr.reveal(".box-1", {
    origin: 'left',
    duration: 3000,
    distance: '-150px',
    rotate: {
        x:1,
        y:180,
    }
});
sr.reveal(".box-2", {
    origin: 'bottom',
    duration: 3000,
    distance: '-150px',
    rotate: {
        x:1,
        y:180,
    },
    viewOffset: {
        top: 60
    }
});
sr.reveal(".box-3", {
    origin: 'right',
    duration: 3000,
    distance: '-150px',
    rotate: {
        x:1,
        y:180,
    }
});*/

function revealFunction() {
    window.sr = ScrollReveal({
        duration: 1350,
        distance: "250px",
        easing: "ease-out",
    });

    sr.reveal(".reveal-left", { origin: "left", reset: false });
    sr.reveal(".reveal-top", { origin: "top", reset: false });
    sr.reveal(".reveal-bottom", { origin: "bottom", reset: false });
    sr.reveal(".reveal-right", { origin: "right", reset: false });

    sr.reveal(".reveal-reset-true", { origin: "bottom", reset: true });
    sr.reveal(".reveal-rotate", {
        origin: "bottom",
        rotate: { x: 1000, z: 1000 },
        reset: true,
    });

    sr.reveal(".reveal-bottom-reset", { origin: "bottom", reset: true });
}

window.addEventListener("load", () => {
    revealFunction();
});
