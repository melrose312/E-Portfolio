// template_aw1yusu
// service_saw0v4f
// AaCFYvWsCs-BVSTMo

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm (
        'service_saw0v4f',
        'template_aw1yusu',
        event.target,
        'AaCFYvWsCs-BVSTMo'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList +=  " modal__overlay--visible";
        console.log('this worked1')
    }).catch(() => {
       loading.classList.remove("modal__overlay--visible");
       alert(
        "The email service is temporarily unavailable. Please contact me directly at melrose312@gmail.com"
       ); 
    })
}