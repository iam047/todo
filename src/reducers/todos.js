import initialState from '../initialState';

function parseTodos (data) {
  return data.map( item => {
      return {
          ...item,
          done: false,
          isEditing: false
      }
  });
}

const todoReducer = (state=initialState.todoReducer, action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return {
            ...state,
            todos: [
                ...state.todos,
                {
                    id: Date.now().toString(),
                    text: action.text,
                    done: false,
                    isEditing: false
                },
            ],
            currentFilter:  'all',
            searchTodo: 'input',
            searchValue: ''
        };
        case 'DELL_TODO':
            return {
                ...state, todos: [...state.todos.filter(todo =>
                    todo.id !== action.id
                )]
            };
        case 'CHANGE_IS_EDING':
            return{
                ...state, todos: [...state.todos.map(todo => {
                    return todo.id  ===  action.id
                        ? {...todo, isEditing: !todo.isEditing}
                        : todo })]
            };
        case 'SUBMIT':
            return{
                ...state, todos: [...state.todos.map(todo => todo.id === action.id
                    ? {...todo, text: action.text} : todo)]
            };
        case "CHANGE_TODO":
            return {
                ...state, todos: [...state.todos.map(todo => {
                    return todo.id  ===  action.id ? {...todo, done: !todo.done} : todo })]
            };
        case "SET_FILTER":
            return {
                ...state, todos: [...state.todos], currentFilter: action.filter
            };
        case "DELL_ALL_DONE":
            return {
                ...state, todos: [...state.todos.filter( todo => !todo.done)]
            };
        case "CHANGE_SEARCH":
            return {
                ...state, todos: [...state.todos], searchTodo: action.value
            };
        case "VALUE_SEARCH":
            return {
                ...state, todos: [...state.todos], searchValue: action.value
            };
        case "ERROR":
            return console.log(action.boolean);

        case "REQUEST":
            return {
                ...state, todos: [...state.todos], Loading: action.Loading
            };

        case 'FETCH_DATA_SUCCESS':
            return {
                ...state, todos: [...state.todos, ...parseTodos(action.data)]
            };
        default:
        return state;
    }
};
export default todoReducer;