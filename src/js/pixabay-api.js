import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const params = {
  key: '49539312-1d6717d33bfa63c1c4ab44e48',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
};

export async function getImagesByQuery(query, page) {
  params.q = query;
  params.page = page;

  const response = await axios({
    url: `https://pixabay.com/api/?${new URLSearchParams(params)}`,
  });
  return response.data;
}

export function showError(message, color) {
  iziToast.show({
    message: `${message}`,
    messageColor: '#ffffff',
    messageSize: '16px',
    backgroundColor: `#${color}`,
    iconUrl: './Group.png',
    position: 'topRight',
    width: '300px',
  });
}
