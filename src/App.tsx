import React from 'react';
import './App.css';
import {Alert, Container,} from "reactstrap";

import {DynamicForm} from "./dynamic-forms/DynamicForm";
import {mockForm} from "./dynamic-forms/mockForm";

function App() {
    return (
        <Container>
            <header>
                <h1>Whitelabel form PoC</h1>
            </header>
            <p>
                This app showcases a PoC based heavily on <a
                href="https://medium.com/swlh/white-label-web-app-with-reactjs-and-webpack-bb3a94a83fe6">https://medium.com/swlh/white-label-web-app-with-reactjs-and-webpack-bb3a94a83fe6</a>.
            </p>
            <Alert>Everything below this is completely controlled by a mock API...</Alert>
            <DynamicForm form={mockForm}/>
        </Container>
    );
}

export default App;
