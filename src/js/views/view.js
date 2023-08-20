import icons from '../../img/icons.svg';

export default class View {
  render(data) {
    console.log(data);
    if (!data || data.length === 0) throw Error();

    let markUp = 'nothing';
    if (typeof data === 'number') {
      markUp = this._generateMarkUp();
    } else {
      markUp = data.map(data => this._generateMarkUp(data)).join('');
    }
    this.clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }

  update(data) {
    if (!data) return;
    const newmarkUp = this._generateMarkUp(data);
    const newDOM = document.createRange().createContextualFragment(newmarkUp);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const currElements = Array.from(this._parentEl.querySelectorAll('*'));

    // updates changed text
    newElements.forEach((newEl, i) => {
      let curEl = currElements[i];

      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // updates changed attributes
      if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim()) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }
  clear() {
    this._parentEl.innerHTML = '';
  }

  renderSpinner() {
    const markUp = `<div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div> `;
    this.clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }

  renderError() {
    const markUp = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${this._message}</p>
  </div>`;
    this.clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }
}
