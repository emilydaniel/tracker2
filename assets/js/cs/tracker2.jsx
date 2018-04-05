import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRoute as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import Nav from './nav';
import Tasklist from './tasklist';
import Users from './users';
import Taskform from './task-form';

export default function tracker2_init(store) {
    let root = document.getElementById('root');
    ReactDOM.render(
        <Provider store={ store }>
            <Tracker2 />
        </Provider>,
        root,
    );
}

let Tracker2 = connect((state) => state)((props) => {
    console.log("PROPS", props);
    return (
        <Router>
            <div>
                <Nav />
                <Route path="/" exact={true} render={() => 
                    <div>
                        <PostForm users={props.state.users} />
                        <Tasklist posts={props.state.tasks} />
                    </div>
                } />
                <Route path="/users" exact={true} render={() =>
                    <Users users={props.state.users} />
                } />
            </div>
        </Router>
    );
});
