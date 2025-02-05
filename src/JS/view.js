function view(id){
    const element = document.getElementById("session3");

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

function view_tab(tab1, tab2, tab3){
    const element = document.getElementById("session3");

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

