import View from './view.js';
import icons from '../../img/icons.svg';
import * as model from '../model.js';

class showRecipe extends View {
  _parentEl = document.querySelector('.recipe');
  _message = 'Something went wrong! Please try again!';
  _generateMarkUp(recipe) {
    return ` <figure class="recipe__fig">
    <img src=${recipe.image_url} alt=${recipe.title} class="recipe__img" />
    <h1 class="recipe__title">
      <span>${recipe.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        recipe.cooking_time
      }</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href=${icons}></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${
        recipe.servings
      }</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--decrease-servings">
          <svg>
            <use href="${icons}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${icons}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${icons}#icon-bookmark${
      recipe.bookmarked ? '-fill' : ''
    }"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
   ${this._generateIngredientsMarkUp(recipe)}
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`;
  }

  _generateIngredientsMarkUp(recipe) {
    return recipe.ingredients
      .map(ing => {
        return ` <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${ing.quantity}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
       ${ing.description}
      </div>
    </li>`;
      })
      .join('');
  }

  addHandlerShowRecipe(handler) {
    ['hashchange', 'load'].forEach(ev =>
      window.addEventListener(ev, function (e) {
        console.log(e);

        handler();
      })
    );
  }

  addHandlerServings(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--tiny');
      if (!btn) return;
      if (btn.classList.contains('btn--increase-servings')) {
        const newServings = model.state.recipe[0].servings + 1;
        if (newServings < 1) return;
        model.changeServings(newServings);
      }

      if (btn.classList.contains('btn--decrease-servings')) {
        const newServings = model.state.recipe[0].servings - 1;
        if (newServings < 1) return;
        model.changeServings(newServings);
      }
      handler();
    });
  }
}

export default new showRecipe();
