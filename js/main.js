let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


//Пишите здесь

let arrayNews = [];

let form = document.forms.add;
let nameInput = form.elements.name;
let descriptionInput = form.elements.description;

form.addEventListener('submit', addNews);

let flag = true;

function addNews(event){
    event.preventDefault();
    nameError.innerHTML = '';
    descriptionError.innerHTML = '';
    flag = true;

    if(nameInput.classList.contains('error_input')){
        nameInput.classList.remove('error_input');
    }
    if(descriptionInput.classList.contains('error_input')){
        descriptionInput.classList.remove('error_input');
    }
    if(!nameInput.value){
        nameError.innerHTML = 'Введите название';
        nameInput.classList.add('error_input');
        flag = false;
    }
    if(!descriptionInput.value){
        descriptionError.innerHTML = 'Введите описание';
        descriptionInput.classList.add('error_input');
        flag = false;
    }
    if(nameInput.value.length < 8){
        nameError.innerHTML = 'Название должно содержать минимум 8 символов';
        nameInput.classList.add('error_input');
        flag = false;
    }
    if(descriptionInput.value.length > 300){
        descriptionError.innerHTML = 'Текст должен содержать не более 300 символов';
        flag = false;
    }

    if(flag){
        arrayNews.push({
            title: nameInput.value,
            description: descriptionInput.value
        });
        nameInput.value = '';
        descriptionInput.value = '';
        modal.classList.remove('modal_active');
        displayNews();
    }
}

function displayNews(){
    let New = document.getElementById('new');
    New.innerHTML = '';
    arrayNews.forEach(news =>{
        let newItem = document.createElement('div');
        newItem.classList.add('new_item');
        newItem.innerHTML = `<div class="news-item"><h3 class="h3">${news.title}</h3> <p class="news-item__p">${news.description}</p></div>`;
        New.appendChild(newItem);
    });
}

document.addEventListener('keydown', (event) =>{
    switch(event.code){
        case 'KeyB':
            document.body.style.backgroundColor = 'rgb(78, 73, 72)';
            break;
        case 'KeyW':
            document.body.style.backgroundColor = 'white';
            break;
    }
})