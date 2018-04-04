import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRoute as Router, Route } from 'react-router-dom';

import Nav from './nav';
import Tasklist from './tasklist';
import Users from './users';
import Taskfrom from './task-form';

export default function tracker2_init() {
    let root = document.getElementById('root');
    ReactDom.render(<Tracker2 />, root);
}

class Tracker2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            users: [],
        };

        this.request_tasks();
        this.request_users();
    }

    reqest_posts() {
        $.ajax("/api/v1/tasks", {
            method: "get",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            success: (resp) => {
                this.setState(_.extend(this.state, { tasks: resp.data }));
            },
        });
    }

    request_users() {
        $.ajax("api/v1/users", {
            method: "get",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            success: (resp) => {
                this.setState(_.extend(this.state, { users: resp.data }));
            },
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <p>Hello</p>
                </div>
            </Router>
        );
    }
}
