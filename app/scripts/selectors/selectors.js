import { createSelector } from 'reselect';

export const getItems = state => state.items;

export const getBasketItems = state => state.basket;

export const getSearchText = state => state.search;

export const getItemsCountInBasket = createSelector(
  getBasketItems,
  (products) => {
    let sumCount = 0;
    products.forEach((p) => {
      if (p.count) { sumCount += p.count; }
    });

    return sumCount;
  },
);

export const getItemById = (products, id) => products.filter(p => p.id === id)[0];

export const searchItems = (products, nameInput) =>
  products.filter(p => p.name.toLowerCase().includes(nameInput.toLowerCase()));

export default {};
