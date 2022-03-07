const previous = document.getElementById("previous");
const next = document.getElementById("next");
const login = document.getElementById('container-account');

const containerAccount = document.getElementById('container-account');
const containerAddress = document.getElementById('address-container');
const containerPayment = document.getElementById('payment-container');
const containerConfirmation = document.getElementById('confirmation-container');

activeStep = 1;

next.addEventListener('click', onNextClick);
previous.addEventListener('click', onPreviousClick);
hideOrShowTextDiv(1);

function onNextClick(){
    activeStep += 1;
    document.querySelector(`[data-step="${activeStep}"]`).classList.add('active');
    hideOrShowTextDiv(activeStep);
}

function onPreviousClick(){
    document.querySelector(`[data-step="${activeStep}"]`).classList.remove('active');
    activeStep -= 1;
    hideOrShowTextDiv(activeStep);
}

function hideOrShowTextDiv(activeStep){
    hideTextElements();
    if (activeStep === 1){
        containerAccount.style.display ='flex'
    }

    if (activeStep === 2){
        containerAddress.style.display ='flex'
    }

    if (activeStep === 3){
        containerPayment.style.display ='flex'
    }

    if (activeStep === 4){
        containerConfirmation.style.display ='flex'
    }
}

function hideTextElements(){
    containerAccount.style.display = 'none';
    containerAddress.style.display = 'none';
    containerPayment.style.display = 'none';
    containerConfirmation.style.display = 'none';
}
