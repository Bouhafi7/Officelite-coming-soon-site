let nameInput = document.querySelector('.name-input');
let emailInput = document.querySelector('.email-input');
let phoneInput = document.querySelector('.phone-input');
let companyInput = document.querySelector('.company-input');
let sendBtn = document.querySelector('.send-btn');
let allInputs = document.querySelectorAll('input');

let theForm = document.forms[0];
let nameErr = document.querySelector('.nameErr');
let emailErr = document.querySelector('.emailErr');
let phoneErr = document.querySelector('.phoneErr');
let companyErr = document.querySelector('.companyErr');

const signUp = () => {
    let nameCompanyRegex = /[a-z]/ig;
    let emailRegex = /\S+@\S+\.\S+/;
    let phoneRegex = /\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/;

    if (!nameInput.value || !nameCompanyRegex.test(nameInput.value)) {
        notValid(nameInput, nameErr);
    } else {
        valid(nameInput, nameErr);
    }
    
    if (!emailInput.value || !emailRegex.test(emailInput.value)) {
        notValid(emailInput, emailErr);
    } else {
        valid(emailInput, emailErr);
    }

    if (!phoneInput.value || !phoneRegex.test(phoneInput.value)) {
        notValid(phoneInput, phoneErr);
    } else {
        valid(phoneInput, phoneErr);
    }

    if (!companyInput.value || !nameCompanyRegex.test(companyInput.value)) {
        notValid(companyInput, companyErr);
    } else {
        valid(companyInput, companyErr);
    }

    let arrRegex = [nameCompanyRegex.test(nameInput.value), emailRegex.test(emailInput.value), phoneRegex.test(phoneInput.value), nameCompanyRegex.test(companyInput.value)];
    if (arrRegex.every((el) => el == true)) {
        let sentEl = document.createElement('div');
        sentEl.className = 'sent';
        sentEl.innerText = 'Information sent';
        theForm.appendChild(sentEl);
        setTimeout(() => {
            sentEl.remove();
            emptyFields();
        }, 3000);
    } else {
        return false;
    }
}


sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signUp();
});

const notValid = (input, err) => {
    err.style.display = 'block';
    input.style.borderColor = 'tomato';
    input.style.color = 'tomato';
}

const valid = (input, err) => {
    err.style.display = 'none';
    input.style.borderColor = '#0000004d';
    input.style.color = 'black';
}

let checkIcon = document.createElement('i');
checkIcon.className = 'fa-solid fa-check';

const emptyFields = () => {
    nameInput.value = '';
    emailInput.value = '';
    dropListLis.forEach(li => {
        listText.innerHTML = dropListLis[0].children[0].innerHTML;
        if (li.classList.contains('active')) {
            if (li.children[1]) {
                li.children[1].remove();
            }
            dropListLis[0].classList.add('active');
            dropListLis[0].appendChild(checkIcon);
        }
    });
    phoneInput.value = '';
    companyInput.value = '';
}

allInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '#5275ff';
    });
    input.addEventListener('blur', () => {
        input.style.borderColor = '#0000004d';
    });
});





let dropListLis = document.querySelectorAll('ul li');
let list = document.querySelector('details');
let listIcon = document.querySelector('details summary i');
let listText = document.querySelector('details summary p');

dropListLis.forEach(li => {
    li.addEventListener('click', (e) => {
        dropListLis.forEach(li => {
            li.classList.remove('active');
            if (li.children[1]) {
                li.children[1].remove();
            }
        });
        if (e.target.tagName == 'P' || e.target.tagName == 'I') {
            e.target.parentElement.classList.add('active');
            e.target.parentElement.appendChild(checkIcon);
            list.removeAttribute('open');
        } else if (e.target.tagName == 'SPAN') {
            e.target.parentElement.parentElement.classList.add('active');
            e.target.parentElement.parentElement.appendChild(checkIcon);
            list.removeAttribute('open');
        } else {
            e.target.classList.add('active');
            e.target.appendChild(checkIcon);
            list.removeAttribute('open');
        }

        if (li.classList.contains('active')) {
            li.appendChild(checkIcon);
            listText.innerHTML = li.children[0].innerHTML;
        };
    });

    if (li.classList.contains('active')) {
        li.appendChild(checkIcon);
        listText.innerHTML = li.children[0].innerHTML;
    }
});

list.addEventListener('click', () => {
    listIcon.classList.toggle('rotate');
});