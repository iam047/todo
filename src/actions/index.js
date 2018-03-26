export function addTodo(text) {
    return {
        type: "ADD_TODO",
        text: text
    }
}
export function dellTodo(id) {
    return {
        type: "DELL_TODO",
        id
    }
}
export function changeIsEding(id) {
    return {
        type: "CHANGE_IS_EDING",
        id
    }
}
export function submit(text, id) {
    return {
        type: "SUBMIT",
        text,
        id
    }
}
export function changeDone(id) {
    return {
        type: "CHANGE_TODO",
        id
    }
}
export function  filters  (filter)  {
   return { type: "SET_FILTER",
    filter
   }
};
export function dellAllDoneTodo() {
    return {
        type: "DELL_ALL_DONE"
    }
}
export function changeSearch(value) {
    return {
        type: "CHANGE_SEARCH",
        value
    }
}
export function valueSearch(value) {
    return {
        type: "VALUE_SEARCH",
        value
    }
}