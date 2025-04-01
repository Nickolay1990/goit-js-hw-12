import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createMarkup(array) {
  const markUp = array
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
  pastemarkUp(markUp);
}

export function pastemarkUp(string = '') {
  const list = document.querySelector('.gallery');
  list.innerHTML = string;
  if (string) {
    setLightbox();
  }
}

function setLightbox() {
  const gallery = new SimpleLightbox('.gallery a', {
    navText: ['<', '>'],
    captionsData: 'alt',
    captionDelay: '250',
  });
  gallery.refresh();
}

export function changeLoader(style) {
  const loader = document.querySelector('.loader');
  loader.style.display = style;
}
