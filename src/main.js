import * as render from './js/render-functions';
import { DOM_NAVIGATION } from './js/render-functions';
import { showError, params, getImagesByQuery } from './js/pixabay-api';

const fetchData = { page: 1, searchData: '' };

DOM_NAVIGATION.form.addEventListener('submit', submitHandler);
DOM_NAVIGATION.showMoreButton.addEventListener('click', showMoreHandler);

function submitHandler(event) {
  event.preventDefault();
  fetchData.searchData = this.elements['search-text'].value.trim();
  resetSearcher();
  if (!fetchData.searchData) {
    showError('Enter correct data, please', 'f6f932');
    return;
  }
  requestExecutor();
}

async function requestExecutor() {
  render.showLoader();
  try {
    const response = await getImagesByQuery(fetchData.searchData, fetchData.page);
    checkData(response.totalHits);
    render.createGallery(response.hits);
    checkMore(response);
  } catch (error) {
    if (error.message === 'no item') {
      return;
    }
    showError(`${error.message}`, 'e83b08');
  } finally {
    render.hideLoader();
  }
}

async function showMoreHandler() {
  render.hideLoadMoreButton();
  render.showLoader();
  fetchData.page++;
  try {
    const response = await getImagesByQuery(fetchData.searchData, fetchData.page);
    render.createGallery(response.hits);
    checkMore(response);
    scrollPage();
  } catch (error) {
    showError(`${error.message}`, 'e83b08');
  } finally {
    render.hideLoader();
  }
}

function scrollPage() {
  const height = DOM_NAVIGATION.galleryList.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

function resetSearcher() {
  render.hideLoadMoreButton();
  render.clearGallery();
  fetchData.page = 1;
  DOM_NAVIGATION.form.reset();
}

function checkData(data) {
  if (!data) {
    showError('Sorry, there are no images matching your search query. Please try again!', 'c08e2b');
    render.hideLoader();
    throw new Error('no item');
  }
}

function checkMore(response) {
  if (Math.ceil(response.totalHits / params.per_page) === fetchData.page) {
    showError("We're sorry, but you've reached the end of search results.", '0e9c79');
    return;
  }
  render.showLoadMoreButton();
}
