import React from 'react';
import { Spinner } from 'reactstrap';
export default function Spinners() {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card p-2">
                <div>
                <Spinner type="grow" color="success" />
                <Spinner type="grow" color="danger" />
                <Spinner type="grow" color="warning" />
                <Spinner type="grow" color="info" />
                </div>
            </div>
        </div>
    )
}
