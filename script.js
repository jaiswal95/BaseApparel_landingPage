const form =document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const email=form['email'].value;
   

    if(email === ''){
        addErrorTo('email','Email is Required.');
    }else if(!isValid(email)){
        addErrorTo('email','Email is Not Valid.');
    }else{
        removeErrorForm('email')
    }

});

function addErrorTo(field,message){
    const formControl=form[field].parentNode;
    formControl.classList.add('error');


    const small =formControl.querySelector('small');
    small.innerText=message;
    small.style.opacity='1';
}

function removeErrorForm(field){
    const formControl=form[field].parentNode;
    formControl.classList.remove('error');

    const small =formControl.querySelector('small');
    small.style.opacity='0';

}

function isValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}