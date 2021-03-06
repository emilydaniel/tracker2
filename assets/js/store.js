//adapted from SPA Microblog examples in class

import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';


function task(state = [], action) {
    switch(action.type) {
        case 'TASK_LIST':
            return [...action.task];
        case 'ADD_TASK':
            return [action.task, ...state];
        case 'DELETE_TASK':
            return remove_item(state, action.task);
        default:
            return state;
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
    user_id: "",
    token: "",
};

function form(state = empty_form, action) {
    switch(action.type) {
        case 'UPDATE_FORM':
            return Object.assign({}, state, action.data);
        case 'SET_TOKEN':
            return objec.assign({}, state, action.token);
        default:
            return state;
    }
}

function token(state = null, action) {
    switch(action.type) {
        case 'SET_TOKEN':
            return action.token;
        default:
            return state;
    }
}

let empty_login = {
    name: "",
    pass: "",
}

function login(state = empty_login, action) {
    switch(action.type) {
        case 'UPDATE_LOGIN_FORM':
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}

function root_reducer(state0, action) {
    let reducer = combineReducers({task, users, form, token, login});
    let state1 = reducer(state0, action);
    console.log("state1", state1);
    return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;
