let searchQuery = '';
const APP_ID = '0f5b4339';
const APP_key = 'dfcf713f4a4549605870fe306678d7a7';

window.addEventListener("load", () => {
    document.querySelector('form.recipe-search').addEventListener('submit', (event) => {
        event.preventDefault();
        searchQuery = document.getElementById('recipe-input').value;
        console.log(searchQuery);
        fetchAPI();
    });
});

async function fetchAPI(){
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=24`;
    const response = await fetch(baseURL);
    const data = await response.json();
    addInfo(data.hits);
    console.log(data);
}

function addInfo(results){
    let addedInfo = '';
    results.map(result => {
        addedInfo +=
        `
        <div class="recipe-item">
            <img src="${result.recipe.image}" alt="">
            <div class="flex-container">
                <h1 class="title">${result.recipe.label}</h1>
                <a class="recipe-button" href="${result.recipe.url}" target="_blank">View Recipe</a>
                 <a class="recipe-button" href="ingredients/compare" target="_blank">Compare</a>
            </div>
            <p class="recipe-info">Serving Size: ${result.recipe.yield}</p>
            <p class="recipe-info">Calories: ${result.recipe.calories.toFixed(0)}</p>
            <p class="recipe-info">Cuisine Type: ${result.recipe.cuisineType}</p>
            <p class="recipe-info">Ingredients: ${result.recipe.ingredientLines}</p>
        </div>
        `
    });
    let receiptResultDiv = document.getElementById('recipe-result');
    receiptResultDiv.innerHTML = addedInfo;
}