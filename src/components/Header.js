import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import githubLogo from '../assets/github.png';
import SearchForm from '../containers/SearchForm';

export default function Header() {
    return (
        <div>
            <Jumbotron fluid className="jumbotron">
                <Container fluid>
                    <h1 className="display-3 font-weight-bold">Github Search <img src={githubLogo} alt="github logo" /></h1>
                    <SearchForm/>
                </Container>
            </Jumbotron>
        </div>
    )
}
