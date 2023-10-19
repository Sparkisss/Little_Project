function posts() {
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Loading',
        success: 'We will call you.',
        failure: 'Something went wrong...',
    };

    forms.forEach(item => {
        postData(item);  
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('btn');
            statusMessage.textContent = message.loading;
            form.appendChild(statusMessage);    

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value,key) {
                object[key] = value;
            });

            fetch('server.php', {
                method: "POST",
                headers: {
                    'Content-tupe': 'application/json'
                },
            body: JSON.stringify(object)
            })
            .then(data => {
            console.log(data);
            showThanksModal(message.success);
            statusMessage.remove();
            }).catch(() => {
            showThanksModal(message.failure);
            }).finally(() => {
            form.reset();
            });    
            
        });
    }
    function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hidden');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
        <div class="modal__close" data-close>x</div>
        <div class="modal__title">${message}</div>
        </div>      
    `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hidden');
        closeModal();
        }, 4000);
    }
}
module.exports = posts;