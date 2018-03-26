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
export const filters = (filter) => ({
    type: "SET_FILTER",
    filter
});
export function dellAllDoneTodo() {
    return {
        type: "DELL_ALL_DONE"
    }
}