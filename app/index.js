import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import deepFreeze from 'deep-freeze';
import { createStore, combineReducers } from 'redux';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action),
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

const store = createStore(todoApp);

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    return (
      <div>
        <input ref={node => {
          this.input = node
        }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId += 1,
            });
            this.input.value = '';
          }}
        >
          Add todo
        </button>
        <ul>
          {
            this.props.todos.map(t =>
              <li
                key={t.id}
                onClick={() => {
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: t.id,
                  });
                }}
                style={{
                  textDecoration: t.completed ?
                    'line-through' :
                    'none'
                }}
              >
                {t.text}
              </li>,
            )
          }
        </ul>
      </div>
    );
  }
}

const render = () => {
  ReactDom.render(
    <TodoApp
      todos={store.getState().todos}
    />,
    document.getElementById('root'),
  );
};

store.subscribe(render);
render();

const testAddTodos = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn redux',
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn redux',
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action),
  ).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false,
    },
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1,
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action),
  ).toEqual(stateAfter);
};

testAddTodos();
testToggleTodo();
console.error('All tests passed');
