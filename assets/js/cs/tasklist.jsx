import React from 'react';
import Task from './task';

export default function Tasklist(params) {
    let tasks = _.map(params.tasks, (task) => {
        <Task assigned_user={ task.assigned_user }
              title={ task.title }
              descr={ task.descr }
              complete={ task.complete }
              time_spent= { task.time_spent } />
        }
    );
    return (
        <div>
            { tasks }
        </div>
    );
}

