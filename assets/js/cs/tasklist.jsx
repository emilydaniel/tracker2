import React from 'react';
import Task from './task';

export default function Tasklist(params) {

    let tasks = _.map(params.task, (atask) => <Task id={atask.id} task={ atask } /> );

    return (
        <div>
            { tasks }
        </div>
    );
}

