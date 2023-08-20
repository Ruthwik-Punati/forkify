const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
console.log("hello");
fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`).then((x)=>console.log(x));

//# sourceMappingURL=index.62406edb.js.map
