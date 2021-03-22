import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

export default function Header() {
    return (
        <div>
            <Jumbotron fluid className="jumbotron">
                <Container fluid>
                    <h1 className="display-3 font-weight-bold">Github Search</h1>
                    <p className="lead">Find your github repositories here.</p>
                </Container>
            </Jumbotron>
        </div>
    )
}
