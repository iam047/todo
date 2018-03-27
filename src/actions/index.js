export const addTodo = text => {
    return { type: "ADD_TODO", text: text }
};
export const dellTodo = id => {
    return { type: "DELL_TODO", id }
};
export const changeIsEditing =  id => {
    return { type: "CHANGE_IS_EDING", id }
};
export const submit = (text, id) => {
    return { type: "SUBMIT", text, id }
};
export const changeDone =id => {
    return { type: "CHANGE_TODO", id }
};
export const  filters = filter =>  {
   return { type: "SET_FILTER", filter }
};
export const dellAllDoneTodo = () => {
    return { type: "DELL_ALL_DONE" }
};
export const  changeSearch = value => {
    return { type: "CHANGE_SEARCH", value }
};
export const  valueSearch = value => {
    return { type: "VALUE_SEARCH", value }
};

export const fetchError = boolean => {
    return { type: "ERROR", boolean };
};

export const fetchRequest = Loading => {
    return { type: "REQUEST", Loading };
};

export  const fetchSuccess = data => {
    return { type: "FETCH_DATA_SUCCESS", data };
};

export const fetchData = url => {
    return (dispatch) => {
        dispatch(fetchRequest(true));
        setTimeout(() => fetch(url)
            .then((response) => response.json())
            .then((items) => dispatch(fetchSuccess(items)))
            .then(() => dispatch(fetchRequest(false)))
            .catch(() => dispatch(fetchError(true))), 2000);
    };
}