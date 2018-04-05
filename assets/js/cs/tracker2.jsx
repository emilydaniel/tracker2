import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import Nav from './nav';
import Tasklist from './tasklist';
import Users from './users';
import TaskForm from './task-form';

let Tracker2 = connect((state) => state)((props) => {
    
    return (
        <Router>
            <div>
                <Nav />
                <Route path="/" exact={true} render={() => 
                    <div>
                        <TaskForm task={props.task} users={props.users}/>
                        <Tasklist task={props.task} />
                    </div>
                } />
                <Route path="/users" exact={true} render={() =>
                    <Users users={props.users} />
                } />
            </div>
        </Router>
    );
});

export default function tracker2_init(store) {
    ReactDOM.render(
        <Provider store={ store }>
            <Tracker2 />
        </Provider>,
        document.getElementById('root'),
    );
}
