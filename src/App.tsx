import React from 'react';
import './App.css';
import {Container,} from "reactstrap";

import {DynamicForm} from "./dynamic-forms/DynamicForm";
import {mockForm} from "./dynamic-forms/mockForm";
import {IWhitelabelConfig} from "whitelabel-config";
import {RealtimeFormSummary} from "RealtimeFormSummary";

interface IProps {
    config: IWhitelabelConfig;
}

function App(props: IProps) {
    const { config } = props
    return (
        <Container className="app">
            <header>
                <h1>{config.title}</h1>
                <p>{config.description}</p>
            </header>

            <RealtimeFormSummary />

            <DynamicForm form={mockForm}/>

        </Container>
    );
}

export default App;
