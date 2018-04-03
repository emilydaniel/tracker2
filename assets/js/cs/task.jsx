import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function Task(params) {
    let task = params.task;
    return (
        <Card>
            <CardBody>
                <div>
                    <h5 className="card-title"><span><strong>
                        task.title
                    </strong></span></h5>
                    <table className="table">
                        <tr>
                            <th>Description:</th>
                            <td className="col-md-1">{ task.descr }</td>
                        </tr>
                        <tr>
                            <th>Assigned to:</th>
                            <td className="col-md-1">{ task.assigned_user }</td>
                        </tr>
                        <tr>
                            <th>Working Time:</th>
                            <td className="col-md-1">{ task.time_spent }</td>
                        </tr>
                        <tr>
                            <th>Task Complete?</th>
                            <td className="col-md-1">{ task.complete }</td>
                        </tr>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
