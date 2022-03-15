const previous = document.getElementById("previous");
const next = document.getElementById("next");
const login = document.getElementById('container-account');
const creditCard = document.getElementById('credit-card');
const boleto = document.getElementById('boleto-payment');
const paypal = document.getElementById('paypal-payment');


const containerAccount = document.getElementById('container-account');
const containerAddress = document.getElementById('address-container');
const containerPayment = document.getElementById('payment-container');
const containerConfirmation = document.getElementById('confirmation-container');
const containerCreditCard = document.getElementById('option-creditCard');
const containerBoleto = document.getElementById('option-boleto');



activeStep = 1;

next.addEventListener('click', onNextClick);
previous.addEventListener('click', onPreviousClick);
boleto.addEventListener('click', onBoletoClick);
creditCard.addEventListener('click', onCreditCardClick);
paypal.addEventListener('click', onPayPalClick);
containerBoleto.style.display = 'none';
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

function onBoletoClick(){
    boleto.classList.add('active');
    creditCard.classList.remove('active');
    paypal.classList.remove('active');
    containerCreditCard.style.display = 'none';
    containerBoleto.style.display = 'block';
}

function onCreditCardClick(){
    creditCard.classList.add('active');
    boleto.classList.remove('active');
    paypal.classList.remove('active');
    containerCreditCard.style.display = 'flex';
    containerBoleto.style.display = 'none';
}

function onPayPalClick(){
    creditCard.classList.remove('active');
    boleto.classList.remove('active');
    paypal.classList.add('active');
    containerCreditCard.style.display = 'none';
    containerBoleto.style.display = 'none';
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
        containerPayment.style.display ='flex';
        
        //onBoletoClick();
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
