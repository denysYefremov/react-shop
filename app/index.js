import { createStore } from 'redux';


const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 2;
    case 'DECREMENT':
      return state - 2;
    default:
      return state;
  }
};

const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

document.addEventListener('contextmenu', () => {
  store.dispatch({ type: 'DECREMENT' });
});
