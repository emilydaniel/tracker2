import store from './store';

class TheServer {
    request_tasks() {
        $.ajax("/api/v1/tasks", {
            method: "get",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            success: (resp) => {
                store.dispatch({
                    type: 'TASK_LIST',
                    task: resp.data,
                });
            },
        });
    }

    request_users() {
        $.ajax("api/v1/users", {
            method: "get",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            success: (resp) => {
                store.dispatch({
                    type: 'USERS_LIST',
                    users: resp.data,
                });
            },
        });
    }

    submit_task(data) {
        $.ajax("api/v1/tasks", {
            method: "post",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify({ task: data , token: data.token}),
            succes: (resp) => {
                store.dispatch({
                    type: 'ADD_TASK',
                    task: resp.data,
                });
            },
        });
    }

    submit_login(data) {
        $.ajax("/api/v1/token", {
            methon: "post",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify(data),
            success: (resp) => {
                store.dispatch({
                    type: 'SET_TOKEN',
                    token: resp,
                });
            },
        });
    }
}

export default new TheServer();

