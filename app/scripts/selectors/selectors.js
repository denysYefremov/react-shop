export const getItems = state => state.items;

export const getBasketItems = state => state.basket;

export const getItemsCountInBasket = (state) => {
  let sumCount = 0;
  state.basket.forEach((p) => {
    if (p.count) { sumCount += p.count; }
  });

  return sumCount;
};

export default {};
