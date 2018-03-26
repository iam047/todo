const todoReducer = (state = {todos:[]}, action) => {
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
                    isEditing: false,
                    change_text: ''
                },
            ],
            currentFilter:  'all',
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
        default:
        return state;
    }
};
export default todoReducer;