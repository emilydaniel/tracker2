import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';

export default function TaskForm(params) {
    let users = _.map(params.users, (users) => {
        <option key={ user.name } value={ user.name }>
            { user.name }
        </option>
        }
    );

    return (
        <div style={{ padding: "4ex" }}>
            <h2>New Task</h2>
            <FormGroup>
                <Label for="user_name">User</Label>
                <Input type="select" name="user_name">
                    { users }
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="title">User</Label>
                <Input type="textarea" name="title" />
            </FormGroup>
            <FormGroup>
                <Label for="descr">User</Label>
                <Input type="textarea" name="descr" />
            </FormGroup>
            <FormGroup>
                <Label for="time_spent">User</Label>
                <Input type="textarea" name="time_spent" />
            </FormGroup>
            <FormGroup>
                <Label for="complete">User</Label>
                <Input type="textarea" name="complete" />
            </FormGroup>
            <Button onClick={() => alert("TODO: Manage State")}>Submit</Button>
        </div>
    );
}
