import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';


function tasks(state = [], action) {
    switch(action.type) {
        case 'TASK_LIST':
            return [...action.task];
        case 'ADD_TASK':
            return [action.task, ...state];
        case 'DELETE_TASK':
            return remove_item(state, action.task);
        default:
            state;
    }
}

function users(state = [], action) {
    switch(action.type) {
        case 'USERS_LIST':
            return [...action.users];
        default:
            return state;
    }
}

let empty_form = {
    user: "",
    complete: false,
    descr: "",
    time_spent: 0,
    title: "",
};

function form(state = empty_form, action) {
    switch(action.type) {
        case'UPDATE_FORM':
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}

function root_reducer(state0, action) {
    console.log("reducer", action);
    console.log("state0", state0);
    let reducer = combineReducers({tasks, users, form});
    let state1 = reducer(state0, action);
    console.log("state1", state1);
    return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;
