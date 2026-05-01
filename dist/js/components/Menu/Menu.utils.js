function menuToHTML(menuData) {
    return menuData
        .map(({ id, emoji, name, ingredients, price }) => `
         <li class="menu__item">
              <p class="menu__item-emoji">${emoji}</p>
              <div class="menu__item-details">
                <h3 class="menu__item-title">${name}</h3>
                <p class="menu__item-description">${ingredients}</p>
                <p class="menu__item-price">$${price}</p>
              </div>
              <button class="menu__item-add-button" aria-label="Add to order" data-add="${id}">
                +
              </button>
            </li>
            `)
        .join("");
}
export { menuToHTML };
