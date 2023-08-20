import View from './view.js';
import icons from '../../img/icons.svg';
import * as model from '../model.js';

class Bookmarks extends View {
  _parentEl = document.querySelector('.bookmarks__list');

  addHandlerBookmarks(handler) {
    document.querySelector('.recipe').addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--round');
      if (!btn) return;
      if (!model.state.recipe[0].bookmarked) {
        model.addBookmark();
      } else {
        model.deleteBookmark();
      }
      model.persistBookmarks();
      handler();
    });
  }

  _generateMarkUp(bookmark) {
    const id = window.location.hash.slice(1);
    const result = bookmark[0];
    console.log(result);
    return ` <li class="preview">
    <a class="preview__link ${
      id === result.id ? 'preview__link--active' : ''
    }" href=#${result.id}>
      <figure class="preview__fig">
        <img src=${result.image_url} alt=${result.title} />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
        <div class="preview__user-generated">
          <svg>
          <use href="${icons}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`;
  }
}

export default new Bookmarks();
