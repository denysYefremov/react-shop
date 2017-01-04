export const getItems = state => state.items;

export const getBasketItems = state => state.basket;

export const getItemsCountInBasket = (products) => {
  let sumCount = 0;
  products.forEach((p) => {
    if (p.count) { sumCount += p.count; }
  });

  return sumCount;
};

export default {};
