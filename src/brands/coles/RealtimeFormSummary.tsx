import React from "react";
import {Alert} from "reactstrap";

export const RealtimeFormSummary = (formData: any) => {
    return (
        <Alert color="warning">
            <strong>TODO:</strong> Hook up the form data being entered by the user to this component in realtime
            so that we can show a meaningful realtime summary for the users Coles Insurance application
            (e.g. quotes, errors, suggestions, etc).
        </Alert>
    )
}