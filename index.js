// const firstNAme = document.querySelector("#firstName");
// const lastNAme = document.querySelector("#lastName");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const phoneNumber = document.querySelector("#phone");
let f1 = document.forms[`form1`]
const button = document.querySelector('#submit');
const regName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']{1,20}$/g
const regMail = /[a-zA-Z']*@+[a-z]*/g
const regNumber = /^\d+\d{12}$/g
const regTel = /\+\d{3}\(\d{3}\)\-\d{2}\-\d{2}\-\d{3}/g
const regPassword = /\S{8,15}/g
let arrForm = [...f1.children]
arrForm.forEach(e => {

    button.addEventListener(`click`, e => {
        if (f1.InputFirstName.value) {

            if (regName.test(f1.InputFirstName.value)) {
                console.log(`Name is OK`);
                f1.InputFirstName.style.border = `4px solid green`;
            }
            else {
                f1.InputFirstName.style.border = `4px solid red`;
                console.log(`INCORRECT FIRST NAME`)
            }
            if (regName.test(f1.InputLastName.value)) {
                console.log('Last Name is Ok');
                f1.InputLastName.style.border = `4px solid green`;
            }
            else {
                f1.InputLastName.style.border = `4px solid red`;
            }
            if (regMail.test(f1.InputEmail.value)) {
                console.log(`EMAIL IS OK`)
                f1.InputEmail.style.border = `4px solid green`
            }
            else {
                console.log(`EMAIL IS WRONG`)
                f1.InputEmail.style.border = `4px solid red`;
            }
            if (regNumber.test(f1.InputNumber.value)) {
                console.log(`NUMBER IS OK`)
                f1.InputNumber.style.border = `4px solid green`;
            }
            else {
                console.log(`NUMBER IS WRONG`)
                f1.InputNumber.style.border = `4px solid red`
            }
            if (regPassword.test(f1.InputPassword.value)) {
                console.log(`PASSWORD IS OK`)
                f1.InputPassword.style.border = `4px solid green`;
            }
            else {
                console.log(`PASSWORD IS WRONG`)
                f1.InputPassword.style.border = `4px solid red`
            }
        }
    })
})

