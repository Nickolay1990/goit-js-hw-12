import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup, changeLoader } from './render-functions';

export function getRequest(searchData) {
  axios({
    url: `https://pixabay.com/api/`,
    params: {
      key: '49539312-1d6717d33bfa63c1c4ab44e48',
      q: `${searchData}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => checkData(response.data.hits))
    .catch(error => {
      showError(error.message, 'ef4040');
    })
    .finally(() => {
      changeLoader('none');
    });
}

function checkData(data) {
  if (!data.length) {
    showError(
      'Sorry, there are no images matching your search query. Please try again!',
      'c08e2b'
    );
    return;
  }
  createMarkup(data);
}

export function showError(message, color) {
  iziToast.show({
    title: `${message}`,
    titleColor: '#ffffff',
    titleSize: '16px',
    backgroundColor: `#${color}`,
    iconUrl: './Group.png',
    position: 'topRight',
    width: '300px',
  });
}
