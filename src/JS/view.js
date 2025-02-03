function view(id){
    const element = document.getElementById("session3");

    if (document.getElementById(id).style.display == "block"){
        document.getElementById(id).style.display = "none";
        document.body.style.overflow = 'auto';
    }
    else{
        document.getElementById(id).style.display = "block";
        element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola até o elemento e o alinha no topo
        document.body.style.overflow = 'hidden';
      
    }
}