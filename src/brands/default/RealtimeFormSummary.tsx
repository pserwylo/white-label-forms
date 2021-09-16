import React from "react";
import {Alert} from "reactstrap";

export const RealtimeFormSummary = (formData: any) => {
    return (
        <Alert>
            <p>
                This app showcases a PoC based heavily on
                <a href="https://medium.com/swlh/white-label-web-app-with-reactjs-and-webpack-bb3a94a83fe6.">https://medium.com/swlh/white-label-web-app-with-reactjs-and-webpack-bb3a94a83fe6.</a>
            </p>
            <p>
                To compile a different version of this app for a separate brand, specify the <code>APP_BRAND</code> env variable,
                and make sure it corresponds to a valid subdirectory of <code>src/brands/</code>.
                For example: <code>APP_BRAND=coles yarn start</code>
            </p>
            <ul>
                <li>CSS can be overridden in the <code>src/brands/APP_BRAND/whitelabel-styles.css</code> (for example, background, fonts, etc).</li>
                <li>This react component itself can be overridden in the <code>src/brands/APP_BRAND/RealtimeFormSummary.tsx</code> component (for example, provide a running summary of the data entered into the form in realtime).</li>
                <li>The title and description can be overridden in <code>src/brands/APP_BRAND/whitelabel-config.ts</code>.</li>
            </ul>
            <p>
                The form below is completely controlled by a (currently mock) API.
            </p>
        </Alert>
    )
}