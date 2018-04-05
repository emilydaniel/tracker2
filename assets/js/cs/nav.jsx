//adapted from SPA microblog by Nat Tuck

import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem, Form, FormGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import api from '../api';

let LoginForm = connect(({login}) => {return {login};})((props) => {
    function update(ev) {
        let tgt = $(ev.target);
        let data = {};
        data[tgt.attr('name')] = tgt.val();
        props.dispatch({
            type: 'UPDATE_LOGIN_FORM',
            data: data,
        });
    }

    function create_token(ev) {
        api.submit_login(props.login);
    }

    return (
        <div className="navbar-text">
            <Form inline>
                <FormGroup>
                    <Input type="text" name="name" placeholder="name"
                           value={props.login.name} onChange={update} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="pass" placeholder="pass"
                           value={props.login.pass} onChange={update} />
                </FormGroup>
                <Button onClick={create_token}>Log In</Button>
            </Form>
        </div>
    );
});

let Session = connect(({token}) => {return {token};})((props) => {
    return (
        <div className="navbar-text">
            <p>Hello: {props.token.user}</p>
        </div>
    );
});


function Nav(props) {
    let session_info;

    if (props.token) {
        session_info = <Session token={props.token} />;
    }
    else {
        session_info = <LoginForm />;
    }


    return  (
        <nav className="navbar navbar-dark bg-dark navbar-expand">
            <span className="navbar-brand">
                Task Tracker
            </span>
            <ul className="navbar navbar-dark bg-dark navbar-expand">
                <NavItem>
                    <NavLink to="/" exact={true} activeClassName="active" className="nav-link">
                        Tasks
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/users" href="#" className="nav-link">
                        Users
                    </NavLink>
                </NavItem>
            </ul>
            <span className="navbar-text">
                { session_info }
            </span>
        </nav>
    );
}

function state2props(state) {
    return {
        token: state.token,
    };
}

export default connect(state2props)(Nav);
