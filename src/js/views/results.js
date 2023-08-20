import View from './view.js';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  constructor() {
    super();
  }
  _parentEl = document.querySelector('.results');
  _message = 'no recipes for this query!';
  _generateMarkUp(result) {
    const id = window.location.hash.slice(1);

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

export default new ResultsView();
