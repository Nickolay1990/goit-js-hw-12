import { getRequest, showError } from './js/pixabay-api';
import { changeLoader, pastemarkUp } from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const searchData = this.elements['search-text'].value.trim();
  if (!searchData) {
    form.reset();
    showError('Enter correct data, please', 'f6f932');
    return;
  }
  pastemarkUp();
  changeLoader('block');
  getRequest(searchData);
}
