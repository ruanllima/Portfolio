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
                }, 400)
            
            }
        });
    }, { threshold: 0.2 });

    const observer_intro3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("sm:write");
                    entry.target.classList.add("max-sm:animate-fade-in-y");
                    entry.target.classList.remove("opacity-0");
                }, 900)
            
            }
        });
    }, { threshold: 0.2 });

    const observer_cursos = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in-y");
                
                entry.target.classList.remove("opacity-0");
            }
        });
    }, { threshold: 0.3 });

    const observer_title = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in-fast");
                
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

    const observer_fadeiny = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in-y");
                
                
                entry.target.classList.remove("opacity-0");
            }
        });
    }, { threshold: 0.3 });

    const observer_fadein_skill = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !var_skill) {
                var_skill = true;
                let time = 150;
                const ids = ['mysql_skill', 'tailwind_skill', 'php_skill', 'git_skill', 'javascript_skill', 'csharp_skill', 'resolucao_skill', 'unity_skill', 'html_skill', 'english_skill', 'css_skill'];
                ids.forEach(id => {
                    setTimeout(() => {
                    const skill = document.getElementById(id);
                    skill.classList.add("animate-fade-in-scale");
                    setTimeout(() => {skill.classList.remove("animate-fade-in-scale")},999)
                    skill.classList.remove("opacity-0");
                    console.log(skill.classList);

                    }, time);
                    time += 150;
                })
                entry.target.classList.add("animate-fade-in-scale");
                setTimeout(() => {entry.target.classList.remove("animate-fade-in-scale")},999)
                
                entry.target.classList.remove("opacity-0");
            }
        });
    }, { threshold: 0.4 });

    const observer_fade_in_scale_big = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in-scale-big");
                entry.target.classList.remove("opacity-0");
            }
        });
    }, { threshold: 0.3 });

    const observer_fade_in_certificates = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let time = 100;
                const div = document.getElementById('certificados_list');
                const certificados = Array.from(div.children).map(child => child.id);
                certificados.forEach(id => {
                    setTimeout(() => {
                        const cert = document.getElementById(id);
                        cert.classList.add("animate-fade-in-y");
                        cert.classList.remove("opacity-0");
                        console.log(cert.classList);
                    }, time);
                    time += 100;
                })


                entry.target.classList.add("animate-fade-in-y");
                entry.target.classList.remove("opacity-0");
            }
            else {
                const div = document.getElementById('certificados_list');
                const certificados = Array.from(div.children).map(child => child.id);
                certificados.forEach(id => {
                    const cert = document.getElementById(id);
                    cert.classList.remove("animate-fade-in-y");
                    cert.classList.add("opacity-0");
                })
            }
        });
    }, { threshold: 0.3 });

    const observer_fade_in = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in");
                entry.target.classList.remove("opacity-0");
            }
        });
    }, { threshold: 0.6 });

    

    document.querySelectorAll('[id *="img_about"]').forEach(el => observer_fadeiny.observe(el));
    document.querySelectorAll('[id *="txt_about"]').forEach(el => observer_fadeiny.observe(el));
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
    document.querySelectorAll('#data_projects > *').forEach(el => observer_fadeiny.observe(el));
    document.querySelectorAll('[id="cta1"]').forEach(el => observer_fadeiny.observe(el));
    document.querySelectorAll('[id="cta2"]').forEach(el => observer_fadeiny.observe(el));
    document.querySelectorAll('[id="cta3"]').forEach(el => observer_fadeiny.observe(el));
    document.querySelectorAll('#contact > *').forEach(el => observer_fadeiny.observe(el));
    // Variable to control the visibility of the skill cards (alowing viewing the cards once)
    let var_skill = false;
    document.querySelectorAll('[id="python_skill"]').forEach(el => observer_fadein_skill.observe(el));
    document.querySelectorAll('[id="img_tab"]').forEach(el => observer_fade_in_scale_big.observe(el));
    document.querySelectorAll('[id="certificados_list"]').forEach(el => observer_fade_in_certificates.observe(el));
    document.querySelectorAll('[id="view_all_certificates"]').forEach(el => observer_fadeiny.observe(el));










    
});