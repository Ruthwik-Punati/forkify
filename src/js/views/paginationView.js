import View from './view';
import icons from '../../img/icons.svg';
import * as model from '../model.js';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  _generateMarkUp(page = model.state.page) {
    const noOfPages = Math.ceil(model.state.results.length / 10);
    console.log(noOfPages);

    if (noOfPages === 1) {
      return '';
    }

    if (page === 1) {
      return `<button class="btn--inline pagination__btn--next">
        <span>Page ${page + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }

    if (page === noOfPages) {
      return ` <button class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${page - 1}</span>
  </button>
 `;
    }
    if (page > 1 && page < noOfPages) {
      return ` <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${page - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next">
        <span>Page ${page + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button> `;
    }
  }

  addHandlerPagination(page, handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (btn.classList.contains('pagination__btn--prev')) {
        model.state.page = model.state.page - 1;
      }
      if (btn.classList.contains('pagination__btn--next')) {
        model.state.page = model.state.page + 1;
      }

      model.paginationResults(model.state.page);
      handler();
    });
  }
}

export default new PaginationView();
