import { getJson } from './helper.js';

export const state = {
  results: [],
  recipe: [],
  query: '',
  page: 1,
  pageResults: [],
  bookmarks: [],
  getItem() {
    const bookmarks = localStorage.getItem('bookmarks2');

    this.bookmarks = JSON.parse(bookmarks);
    this.bookmarks || (this.bookmarks = []);
  },
};

state.getItem();

export const addHandlerSearch = function (handler) {
  document.querySelector('.search').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = getQuery();
    handler(query);
  });
};

export function getQuery() {
  const query = document.querySelector('.search__field').value;
  document.querySelector('.search__field').value = '';
  return query;
}

export const getSearchResults = async function (query) {
  const data = await getJson(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
  );
  const { recipes } = data.data;

  state.results = recipes.map(recipe => {
    const { publisher, image_url, title, id } = recipe;

    return { publisher, image_url, title, id };
  });

  paginationResults(state.page);

  console.log(state.pageResults);
};

export const showRecipe = async function (idNo) {
  const data = await getJson(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${idNo}`
  );
  console.log(data);

  const { recipe } = data.data;
  console.log(recipe);
  state.recipe = [recipe];
  console.log(state.bookmarks);
  if (state.bookmarks.some(b => b[0].id === state.recipe[0].id)) {
    state.recipe[0].bookmarked = true;
  } else {
    state.recipe[0].bookmarked = false;
  }
};

export function paginationResults(page) {
  const start = (page - 1) * 10;
  const end = page * 10;
  state.pageResults = state.results.slice(start, end);
}

export const changeServings = function (servings) {
  state.recipe[0].ingredients.forEach(
    ing => (ing.quantity = (ing.quantity * servings) / state.recipe[0].servings)
  );
  console.log(state.recipe);
  state.recipe[0].servings = servings;
};

export const addBookmark = function () {
  state.recipe[0].bookmarked = true;
  state.bookmarks.push(state.recipe);
  console.log(state.recipe[0].bookmarked);
  console.log(state.bookmarks);
};

export const deleteBookmark = function () {
  const index = state.bookmarks.findIndex(b => b[0].id === state.recipe[0].id);
  state.recipe[0].bookmarked = false;

  console.log(state.recipe[0].bookmarked);

  state.bookmarks.splice(index, 1);
  console.log(state.bookmarks);
};

export const persistBookmarks = function () {
  localStorage.setItem('bookmarks2', JSON.stringify(state.bookmarks));
};
