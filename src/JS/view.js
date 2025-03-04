function view(id, fixed){
    const element = document.getElementById(fixed);
    const header = document.getElementById('header');
    // Posso usar classList.toogle here
    if (document.getElementById(id).style.display == ""){
        document.getElementById(id).style.display = "none";
        document.body.style.overflow = 'auto';
        header.classList.remove("hidden");
    }
    else{
        document.getElementById(id).style.display = "";
        element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola até o elemento e o alinha no topo
        document.body.style.overflow = 'hidden';
        header.classList.add("hidden");
      
    }
}

function view2(id,){
    // Posso usar classList.toogle here
    if (document.getElementById(id).style.display == ""){
        document.getElementById(id).style.display = "none";
        document.body.style.overflow = 'auto';
    }
    else{
        document.getElementById(id).style.display = "";
        document.body.style.overflow = 'hidden';
      
    }
}



function view_tab(tab1, tab2, tab3, local){
    const element = document.getElementById(local);
    const header = document.getElementById('header');
    // ordem: tab1 > tab3 > tab2
    if (document.getElementById(tab1).style.display == ""){
        // element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola até o elemento e o alinha no topo
        document.body.style.overflow = 'hidden';


        if (document.getElementById(tab2).style.display == ""){
            // Desativa o tab2 e ativa o tab3
            document.getElementById(tab2).style.display = "none";  
            console.log('teste3'); 
            document.getElementById(tab3).style.display = "";
            // element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola até o elemento e o alinha no topo
            document.body.style.overflow = 'hidden';
        }
        
        else{
            // Desativa o tab1
            document.getElementById(tab1).style.display = "none";
            console.log('teste4');
            document.body.style.overflow = 'auto';
            header.classList.remove("hidden");
        }
       
        
    }
    else{
        // Ativa o display do tab1
        document.getElementById(tab1).style.display = "";
        // element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola até o elemento e o alinha no topo
        document.body.style.overflow = 'hidden';
        header.classList.add("hidden");

      
    }
}



function view_certificate(id) {
    const div = document.getElementById("certificados");
    const view = document.getElementById('view');
    const selected = document.getElementById(id);
    
    document.getElementById('certificados_list').style.display = "none";
    document.getElementById('view_container').style.display = ""; // ou ""

    view.src = selected.src;

    return id;
}


let touchStartX = 0; // Posição inicial do toque
let touchEndX = 0; // Posição final do toque
function change_certificate(id){
    const div = document.getElementById("certificados_list");
    const certificados = div.querySelectorAll('[id]');
    const array_cert = Array.from(certificados).map(cert => cert.id);
    const currentSrc = document.getElementById("view").src;
    const currentCert = array_cert.find(cert => document.getElementById(cert).src === currentSrc);
    const index = array_cert.indexOf(currentCert);
    

    if(id === 'left' && index > 0 ){
        view_certificate(array_cert[index - 1]);
    }

    if((id === 'right') && index < array_cert.length - 1){
        view_certificate(array_cert[index + 1]);
    }

}

function card_skill(id1, id2, div){
    const front = document.getElementById(id1);
    const back = document.getElementById(id2);
    const _div = document.getElementById(div);

    if(front.style.display != 'none'){
        _div.classList.add("animate-card-skill-out");
        setTimeout(() =>{
            _div.classList.remove("animate-card-skill-out");
            front.style.display = 'none';
            _div.classList.add("animate-card-skill-in");
            back.style.display = '';
            setTimeout(() =>{
                _div.classList.remove("animate-card-skill-in");
            }, 600)
        }, 400) 
               
    }
    else if(back.style.display != 'none'){
        _div.classList.add("animate-card-skill-out");
        setTimeout(() =>{
            _div.classList.remove("animate-card-skill-out");

            front.style.display = '';
            _div.classList.add("animate-card-skill-in");
            back.style.display = 'none';
            setTimeout(() =>{
                _div.classList.remove("animate-card-skill-in");
            }, 600)
        }, 400)      

    }
}

function card_all(){
    const cards = document.querySelectorAll('[id*="skill"]');
    console.log(cards);
}

function view_certificate2(id, tab, div, imgTab){
    console.log('chamou a função');
    const element = document.getElementById(div);
    const tab_div = document.getElementById(tab);
    const img_tab = document.getElementById(imgTab);
    const course = document.getElementById(id);
    const header = document.getElementById('header');

    if (tab_div.style.display == ""){
        img_tab.src = "";
        tab_div.classList.remove('fixed');
        tab_div.style.display = "none";
        document.body.style.overflow = 'auto';
        header.classList.remove("hidden");
    }
    else{
        tab_div.classList.add('fixed');
        tab_div.style.display = "";
        img_tab.src = course.src;
        console.log(img_tab.src);
        // element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola até o elemento e o alinha no topo
        document.body.style.overflow = 'hidden';
        header.classList.add("hidden");
      
    }
}

function menu_mobile(){
    view2("menu_mobile");
    const button = document.getElementById("menu_button");

    if(button.src.includes("/src/media/menu.png")){
        button.src = "/src/media/x.png";
        button.classList.replace("h-8", "h-7");
        button.classList.replace("w-8", "w-7");
    }
    else {
        button.src = "/src/media/menu.png";
        button.classList.replace("h-7", "h-8");
        button.classList.replace("w-7", "w-8");
    }
    console.log(button + "2");

}