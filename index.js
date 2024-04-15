document.addEventListener('DOMContentLoaded', selectorData);

function selectorData() {
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php"
    fetch(url)
        .then(respuesta => {
            return respuesta.json()
        })
        .then(categorias => {
            createHTML(categorias.categories)
        })
}

function createHTML(categoriass) {
    const opcion = document.querySelector('#selector');

    categoriass.forEach((category) => {
        const { strCategory } = category
        const opcion = document.createElement('option');
        opcion.value = strCategory;
        opcion.textContent = strCategory;
        selector.appendChild(opcion);
    });

}

const selector = document.querySelector('#selector');
selector.addEventListener('input', foodData);

function foodData() {
    opcion = selector.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${opcion}`
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(food => {
            filterFood(food.meals)
        })
}

function filterFood(comidas) {
    const cards = document.querySelector('#cards');
    let html = ""
    comidas.forEach((comida) => {
        const { strMealThumb, strMeal } = comida;
        html += `
        <div class="card" style="width: 18rem;">
            <img src="${strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${strMeal}</p>
            </div>
        </div>`
    })
    cards.innerHTML = html
}
