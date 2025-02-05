document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = window.scrollY;

    const observer_img = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in-y-down");
                entry.target.classList.remove("opacity-0");
            }
        });
    }, { threshold: 0.5 });

    const observer_img_i = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const currentScrollY = window.scrollY;
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in-y-down");
                entry.target.classList.remove("opacity-0");
            }
        });
    }, { threshold: 0.3 });

    const observer_txt = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in-x");
                entry.target.classList.remove("opacity-0");
            }
        });
    }, { threshold: 0.5 });

    const observer_txt_i = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in-x");
                entry.target.classList.remove("opacity-0");
            }
        });
    }, { threshold: 0.4 });

    const observer_intro1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in-y");
                entry.target.classList.remove("opacity-0");
            }
            
        });
    }, { threshold: 0.2 });

    const observer_intro2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("animate-fade-in-y");
                    entry.target.classList.remove("opacity-0");
                }, 1000)
            
            }
        });
    }, { threshold: 0.2 });

    const observer_intro3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("write");
                    entry.target.classList.remove("opacity-0");
                }, 1700)
            
            }
        });
    }, { threshold: 0.2 });

    const observer_cursos = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in-y");
                console.log("entrou");
                entry.target.classList.remove("opacity-0");
            }
        });
    }, { threshold: 0.3 });

    const observer_title = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in-fast");
                console.log("entrou");
                entry.target.classList.remove("opacity-0");
            }
        });
    }, { threshold: 0.4 });

    const observer_init1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-fall");
                entry.target.classList.remove("opacity-0");
            }
        });
    }, { threshold: 0.4 });

    const observer_init2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("animate-fade-fall");
                entry.target.classList.remove("opacity-0");
            }, 1100)
            }
        });
    }, { threshold: 0.4 });

    const observer_init3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("animate-fade-fall");
                entry.target.classList.remove("opacity-0");
            }, 1400)
            }
        });
    }, { threshold: 0.4 });

    

    document.querySelectorAll('[id="img"]').forEach(el => observer_img.observe(el));
    document.querySelectorAll('[id="txt"]').forEach(el => observer_txt.observe(el));
    document.querySelectorAll('[id="img-i"]').forEach(el => observer_img_i.observe(el));
    document.querySelectorAll('[id="txt-i"]').forEach(el => observer_txt_i.observe(el));
    document.querySelectorAll('[id="intro1"]').forEach(el => observer_intro1.observe(el));
    document.querySelectorAll('[id="intro2"]').forEach(el => observer_intro2.observe(el));
    document.querySelectorAll('[id="intro3"]').forEach(el => observer_intro3.observe(el));
    document.querySelectorAll('[id="curso1"]').forEach(el => observer_cursos.observe(el));
    document.querySelectorAll('[id="curso2"]').forEach(el => observer_cursos.observe(el));
    document.querySelectorAll('[id="curso3"]').forEach(el => observer_cursos.observe(el));
    document.querySelectorAll('[id="curso4"]').forEach(el => observer_cursos.observe(el));
    document.querySelectorAll('[id="title"]').forEach(el => observer_title.observe(el));
    document.querySelectorAll('[id="init1"]').forEach(el => observer_init1.observe(el));
    document.querySelectorAll('[id="init2"]').forEach(el => observer_init2.observe(el));
    document.querySelectorAll('[id="init3"]').forEach(el => observer_init3.observe(el));
    
});