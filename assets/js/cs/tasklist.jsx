import React from 'react';
import Task from './task';

export default function Tasklist(params) {
    let tasks = _.map(params.task, (atask) => {
        <Task assigned_user={ atask.assigned_user }
              title={ atask.title }
              descr={ atask.descr }
              complete={ atask.complete }
              time_spent= { atask.time_spent } />
        });
    return (
        <div>
            { tasks }
        </div>
    );
}

