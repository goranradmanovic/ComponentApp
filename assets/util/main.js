import { listData } from '../data/listItems.js';

document.addEventListener('DOMContentLoaded', () => {
  createListsItems(listData);
});

// Create HTML el. and populate unorderd list
const createListsItems = (listItems) => {
  const ul = document.querySelector('.card__body__list');

  listItems.forEach(item => {
    let li = document.createElement('li'),
        button = document.createElement('button'),
        img = document.createElement('img'),
        span = document.createElement('span');

    li.setAttribute("class", "card__body__list_item");
    img.src = `./assets/images/icons/${item.image.name}`;
    img.alt = item.image.alt;
    img.setAttribute("class", "card__body__list_item_img");
    span.setAttribute("class", "card__body__list_item_title");
    span.innerText = item.title;
    button.setAttribute("class", "card__body__list_item_btn");
    button.innerText = '+ Add';

    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
  });
};
