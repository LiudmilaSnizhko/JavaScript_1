// task 1

// Реалізувати пошук товарів по частковій або повній назві.
// Зробити так, щоб частота виконання функції обробника події була 500ms.
// При рендері списку знайдених товарів додати кнопку "Додати у кошик",
// при натисканні на яку товари будуть рендеритись в <ul id="cartItemsContainer"></ul>
// Реалізувати можливість видалення цих товарів з кошика.

const products = [
    'телевізор_Samsung',
    'телевізор_LG',
    'телевізор_Xiaomi',
    'телефон_Samsung',
    'телефон_Apple',
    'телефон_Xiaomi',
    'планшет_Samsung',
    'планшет_Apple',
    'планшет_Xiaomi',
    'ноутбук_ASUS',
    'ноутбук_Apple',
    'ноутбук_Lenovo'
  ];

//   мій варіант
// const input = document.querySelector('#searchInput')
// const itemsContainer = document.querySelector('#itemsContainer')
// const cartItemsContainer = document.querySelector('#cartItemsContainer')

// input.addEventListener('input', _.throttle(onSearchInputProduct, 500))

// function onSearchInputProduct(){
//     const inputValue = input.value.toLowerCase
   
//     const filterArrProduct = products.filter(elem =>elem.toLowerCase().includes(inputValue))
//     if (!filterArrProduct.length){
// alert("ваш товар не знайдено")
// itemsContainer.innerHTML = ""
// return
//     }
//     itemsContainer.innerHTML = ""
//         filterArrProduct.map(elem=>{
//         const li = document.createElement('li')
//         li.textContent = elem
//         const addButton = document.createElement('button')
//         addButton.textContent = 'Додати у кошик'
        
//         li.appendChild(addButton)
//         itemsContainer.appendChild(li)
//         addButton.addEventListener('click', () => {
//             addToCart(elem)
//         })
//     })
// }
// function addToCart(elem) {
    
//     const li = document.createElement('li')
//     li.textContent = elem
//     cartItemsContainer.textContent = elem
//     const removeButton = document.createElement('button')
//     removeButton.textContent = 'Видалити'
//     li.appendChild(removeButton)
//     cartItemsContainer.appendChild(li) 
//     removeButton.addEventListener('click', ()=> {
//         cartItemsContainer.removeChild(li)
//     })
// }


// студент
// const input = document.querySelector('#searchInput')
// const itemsContainer = document.querySelector('#itemsContainer')
// const cartItemsContainer = document.querySelector('#cartItemsContainer')

// input.addEventListener('input', _.throttle(onSearchInputProduct, 500))
// function onSearchInputProduct() {
//   const inputValue = input.value.toLowerCase()
// if (!inputValue){
//     itemsContainer.innerHTML = ""
//   return
// }
  // console.log(inputValue);
//   const filterArrProduct = products.filter(elem => elem.toLowerCase().includes(inputValue))
//   if (!filterArrProduct.length) {
//     alert("Ваш товар не знайдено")
//     itemsContainer.innerHTML = ""
//   return
//   }
//   itemsContainer.innerHTML = ""
//   filterArrProduct.map(elem => {
//     const li = document.createElement('li')
//     li.textContent = elem
//     const addButton = document.createElement('button')
//     addButton.textContent = 'Додати у кошик'
//     li.appendChild(addButton)
//     itemsContainer.appendChild(li)
//     addButton.addEventListener('click', () => {
//       addToCart(elem)
//     })
//   })
// }
// function addToCart(elem) {
//     console.log(elem)
//     const li = document.createElement('li')
//     li.textContent = elem
//     const removeButton = document.createElement('button')
//     removeButton.textContent = 'Видалити'
//     li.appendChild(removeButton)
//     cartItemsContainer.appendChild(li)
//     removeButton.addEventListener('click',() => {
//       cartItemsContainer.removeChild(li)
//     })
//   }



  // task 2
  // Додай функціонал зміни теми при натисканні(подія change) на чекбокс
// #theme-switch-toggle у тулбарі.

// За замовчуванням тема світла.
// При зміні теми необхідно додавати на елемент body клас light-theme або dark-theme.
// Вибрана тема повинна зберігатись між перезавантаженнями сторінки. 
// Для зберігання теми використовуй localStorage.
// Якщо при завантаженні сторінки тема темна, не забудь поставити властивість checked 
// у чекбоксу #theme -switch-toggle у true, щоб повзунок зрушив у правильне положення.

// Для зручності зберігання списку використовуй такий перелік.

// моя
// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// const input = document.querySelector('.theme-switch__toggle');
// const body = document.querySelector('body');
// input.addEventListener('change', changeTheme)

// function changeTheme(evt){
//     console.dir(evt.currentTarget.checked);
//     if(!evt.evt.currentTarget.checked){
//         body.classList.add(Theme.LIGHT)
//     body.classList.remove(Theme.DARK)
//     localStorage.setItem('saveTheme', Theme.LIGHT)
//     }
    
//     else {
//         body.classList.add(Theme.DARK)
//     body.classList.remove(Theme.LIGHT) 
//     localStorage.setItem('saveTheme', Theme.DARK)
//     }
// }

// const myTheme = localStorage.getItem('saveTheme');
// if(myTheme){
//     body.classList.add(myTheme);
// }else{
//     body.classList.add(Theme.LIGHT);
// }


// студент

// const Theme = {
//     LIGHT: 'light-theme',
//     DARK: 'dark-theme',
//   };
  
//   const input = document.querySelector('.theme-switch__toggle');
//   const body = document.querySelector('body');
  
//   input.addEventListener('change', changeTheme);
  
//   function changeTheme(evt) {
//     console.dir(evt.currentTarget.checked);
//     if (!evt.currentTarget.checked) {
//       body.classList.add(Theme.LIGHT);
//       body.classList.remove(Theme.DARK);
//       localStorage.setItem('saveTheme', Theme.LIGHT);
//     } else {
//       body.classList.add(Theme.DARK);
//       body.classList.remove(Theme.LIGHT);
//       localStorage.setItem('saveTheme', Theme.DARK);
//     }
//   }
//   const myTheme = localStorage.getItem('saveTheme');
//   if (myTheme) {
//     body.classList.add(myTheme);
//   } else {
//     body.classList.add(Theme.LIGHT);
//   }
//   if (myTheme === Theme.DARK) {
//     input.checked = true;
//   }


 // task 3

 // * Якщо імейл і пароль користувача збігаються, при сабміті зберігай дані з форми
// * у локальне сховище і змінюй кнопку login на logout і роби поля введення
// * Недоступними для зміни.
// * При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку
// * та недоступні для зміни поля з даними користувача.
// * Клік по кнопці logout повертає все в початковий вигляд і видаляє дані користувача
// * З локального сховища.
// *
// * Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// * повідомляти про помилку.


// my variant


const login = {
    email: 'user@email.com',
    password: '123456'
}
const form = document.querySelector('#login-form')
form.addEventListener('submit', onFormSubmit)

const getData = JSON.parse(localStorage.getItem('dataKey'));
if(getData){
    form.elements.email.value = getData.email;
    form.elements.password.value = getData.password;
    form.elements.email.disabled = true;
form.elements.password.disabled = true;
form.elements.button.textContent = 'logout'
}


function onFormSubmit(event){
event.preventDefault()
if (JSON.parse(localStorage.getItem('dataKey'))){
    form.elements.button.textContent = 'login';
    form.elements.email.disabled = false;
    form.elements.password.disabled = false;
    localStorage.removeItem('dataKey');
    form.reset()
    return
}


    if(form.elements.email.value !== login.email || form.elements.password.value !== login.password){

        alert('Error! Дані не коректні')
    }

    const data = {
    email: form.elements.email.value,
    password: form.elements.password.value
}
localStorage.setItem('dataKey', JSON.stringify(data))
form.elements.email.disabled = true;
form.elements.password.disabled = true;
form.elements.button.textContent = 'logout'

}




// student

// const login = {
//     email: 'user@meil.com',
//     password: '123456'
// };

// const form = document.querySelector('#login-form');

// form.addEventListener('submit', onFormSubmit)

// const getData = JSON.parse(localStorage.getItem('dataKey'));
// console.log(getData)
// if (getData) {
//     form.elements.email.value = getData.email;
//     form.elements.password.value = getData.password
//      form.elements.email.disabled = true;
//     form.elements.password.disabled = true;
//     form.elements.button.textContent = 'logout'
// }
// function onFormSubmit(event) {
//     event.preventDefault()
//     if (JSON.parse(localStorage.getItem('dataKey'))) {
//         console.log(getData)
//         form.elements.button.textContent = 'login';
//          form.elements.email.disabled = false;
//         form.elements.password.disabled = false;
//         localStorage.removeItem('dataKey');
//         form.reset()

//         return
        
//     }
//     if (form.elements.email.value !== login.email || form.elements.password.value !== login.password) {
//         alert ('Error! Дані не коректні')
//     }

//     const data = {
//         email: form.elements.email.value,
//         password: form.elements.password.value
        
//     }
//     localStorage.setItem('dataKey',JSON.stringify(data))

//     form.elements.email.disabled = true;
//     form.elements.password.disabled = true;
//     form.elements.button.textContent = 'logout'

// }