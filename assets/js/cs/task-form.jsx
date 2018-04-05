import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function TaskForm(props) {
    function update(ev) {
        let lgt = $(ev.target);

        let data = {};
        data[tgt.attr('name')] = tgt.val();
        let action = {
            type: 'UPDATE_FORM',
            data: data,
        };
        console.log("ACTION", action);
        params.dispatch(action);
    }

    function submit(ev) {
        api.submit_task(props.form);
        console.log(props.form);
    }


    let users = _.map(props.users, (user) => {
            <option key={user.name} value={user.name}>
                {user.name}
            </option>
        }
    );

    return (
        <div style={ {padding: "4ex"} }>
            <h2>New Task</h2>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="textarea" name="title"
                       value={props.task.title} onChange={update} />
            </FormGroup>
            <FormGroup>
                <Label for="assigned_user">User</Label>
                <Input type="select" name="assigned_user" 
                       value={props.task.user} onChange={update}>
                    { users }
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="complete">Complete?</Label>
                <Input type="checkbox" name="complete" 
                       checked={props.task.complete} onChange={update} />
            </FormGroup>
            <FormGroup>
                <Label for="descr">Description</Label>
                <Input type="textarea" name="descr"
                       value={props.task.descr} onChange={update} />
            </FormGroup>
            <FormGroup>
                <Label for="time_spent">Time Spent</Label>
                <Input type="number" name="time_spent"
                       vale={props.task.time_spent} onChange={update} />
            </FormGroup>
            <Button onClick={submit} color="primary">Create</Button>
        </div>
    );
}

function state2props(state) {
    return { task: state.task };
}

export default connect(state2props)(TaskForm);
