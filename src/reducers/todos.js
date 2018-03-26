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
                        : todo
                })
                ]
            };
        case 'SUBMIT':
            return{
                ...state, todos: [...state.todos.filter(todo => todo.id === action.id
                    ? todo.text = action.text : false)]
            };
        case "CHANGE_TODO":
            return {
                ...state, todos: [...state.todos.map(todo => {
                    return todo.id  ===  action.id
                        ? {...todo, done: !todo.done}
                        : todo
                })
                ]
            };
        case "SHOW_DONE":
            console.log('show_done');
            return {
              ...state, todos: [...state.todos.filter( todo => todo.done)]
            };
        case "SHOW_ACTIVE":
            console.log('show_Active');
            return {
                ...state, todos: [...state.todos.filter( todo => !todo.done)]
            };
        case "SHOW_ALL":
            console.log('show_all');
            return {
                ...state, todos: [...state.todos]
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