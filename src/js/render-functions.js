import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const DOM_NAVIGATION = {
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  showMoreButton: document.querySelector('[data-showMoreButton]'),
  form: document.querySelector('.form'),
};

const gallery = new SimpleLightbox('.gallery a', {
  navText: ['<', '>'],
  captionsData: 'alt',
  captionDelay: '250',
});

export function createGallery(images) {
  const markUp = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
                <li class="card">
                    <a href="${largeImageURL}">
                        <img src="${webformatURL}" alt="${tags}" class="card-pic"/>
                        <ul class="inner-list">
                            <li class="inner-item">
                                <span class="bold">Likes</span>${likes}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Views</span>${views}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Comments</span>${comments}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Downloads</span>${downloads}
                            </li>
                        </ul>
                    </a>
                </li>`;
      }
    )
    .join('');
  DOM_NAVIGATION.galleryList.insertAdjacentHTML('beforeend', markUp);
  gallery.refresh();
}

export function clearGallery() {
  DOM_NAVIGATION.galleryList.innerHTML = '';
}

export function showLoader() {
  DOM_NAVIGATION.loader.style.display = 'block';
}

export function hideLoader() {
  DOM_NAVIGATION.loader.style.display = 'none';
}

export function showLoadMoreButton() {
  DOM_NAVIGATION.showMoreButton.style.display = 'block';
}

export function hideLoadMoreButton() {
  DOM_NAVIGATION.showMoreButton.style.display = 'none';
}
