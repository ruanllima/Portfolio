function view(id, fixed){
    const element = document.getElementById(fixed);

    if (document.getElementById(id).style.display == ""){
        document.getElementById(id).style.display = "none";
        document.body.style.overflow = 'auto';
    }
    else{
        document.getElementById(id).style.display = "";
        element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola até o elemento e o alinha no topo
        document.body.style.overflow = 'hidden';
      
    }
}

function view_tab(tab1, tab2, tab3, local){
    const element = document.getElementById(local);

    if (document.getElementById(tab1).style.display == ""){
        element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola até o elemento e o alinha no topo
        document.body.style.overflow = 'hidden';


        if (document.getElementById(tab2).style.display == ""){
            document.getElementById(tab2).style.display = "none";  
            console.log('teste3'); 
            document.getElementById(tab3).style.display = "";
            element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola até o elemento e o alinha no topo
            document.body.style.overflow = 'hidden';
        }
        
        else{
            document.getElementById(tab1).style.display = "none";
            console.log('teste4');
            document.body.style.overflow = 'auto';
        }
       
        
    }
    else{
        console.log('teste5');
        document.getElementById(tab1).style.display = "";
        element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola até o elemento e o alinha no topo
        document.body.style.overflow = 'hidden';
      
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

function change_certificate(id){
    const div = document.getElementById("certificados_list");
    const certificados = div.querySelectorAll('[id]');
    const array_cert = Array.from(certificados).map(cert => cert.id);
    const currentSrc = document.getElementById("view").src;
    const currentCert = array_cert.find(cert => document.getElementById(cert).src === currentSrc);
    const index = array_cert.indexOf(currentCert);
    

    if(id === 'left' && index > 0){
        view_certificate(array_cert[index - 1]);
    }

    if(id === 'right' && index < array_cert.length - 1){
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

