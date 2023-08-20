import * as model from './model.js';
import resultsView from './views/results.js';
import showRecipeView from './views/showRecipe.js';
import paginationView from './views/paginationView.js';

import bookmarksView from './views/bookmarksView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

console.log('hello');

async function controllResults(query) {
  try {
    // rendering spinner
    resultsView.renderSpinner();

    // getting search results
    await model.getSearchResults(query);

    // rendering results
    resultsView.render(model.state.pageResults);

    // rendering page buttons
    paginationView.render(model.state.page);
  } catch (err) {
    resultsView.renderError();
    console.log(err);
  }
}

async function controllShowRecipe() {
  try {
    // rendering spinner
    showRecipeView.renderSpinner();

    // getting id
    const id = window.location.hash.slice(1);

    // getting recipe data
    await model.showRecipe(id);

    // rendering recipe
    showRecipeView.render(model.state.recipe);

    showRecipeView.addHandlerServings(handlerServings);

    bookmarksView.render(model.state.bookmarks);

    // updating/rendering results
    if (model.state.pageResults.length > 0)
      resultsView.render(model.state.pageResults);
  } catch (err) {
    showRecipeView.renderError();
    console.log(err);
  }
}

// pagination handler
const handlerPagination = function () {
  resultsView.render(model.state.pageResults);
  paginationView.render(model.state.page);
};

const handlerBookmarks = function () {
  showRecipeView.render(model.state.recipe);
  bookmarksView.render(model.state.bookmarks);
};
// initializer
const init = function () {
  showRecipeView.addHandlerShowRecipe(controllShowRecipe);

  model.addHandlerSearch(controllResults);

  paginationView.addHandlerPagination(model.state.page, handlerPagination);

  bookmarksView.addHandlerBookmarks(handlerBookmarks);
  newFeature();
};
init();

// hash change

const handlerServings = function () {
  console.log('ok');
  showRecipeView.render(model.state.recipe);
};

const newFeature = function () {
  console.log('Welcome to the application!');
};

console.log('new-feature');

let task1 = 'task';
console.log('task');
