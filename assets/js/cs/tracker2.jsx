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

        //this.request_tasks();
        //this.request_users();
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
