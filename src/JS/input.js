function input_focus(){
    const inputs = document.querySelectorAll('input.box_code');

    for(let i = 0; i < inputs.length; i++){
        
        inputs[i].addEventListener('keydown', function(event){
            
            // if user presses backspace delete the value on atual input and go back to the anterior input
            if(event.keyCode === 8){
                inputs[i].value = '';
                if(i!==0)
                    inputs[i-1].focus();
                    event.preventDefault();
            }

            else{
                if(i == inputs.length -1 && inputs[i].value !== ''){
                    return true;
                }

                // if user presses a number or a letter on the keyboard, go to the next input
                else if ((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 64 && event.keyCode < 91)){
                    inputs[i].value = event.key;
                    if(i!== inputs.length-1)
                        inputs[i+1].focus();
                        event.preventDefault();
        
                }

                
            }
        })
    }
}

input_focus();