var phoneNumber = document.querySelector('.phone-number-container')

phoneNumber.addEventListener('click', function(){
    window.open('tel:' + phoneNumber.innerHTML)
})