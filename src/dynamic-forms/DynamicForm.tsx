import React, {useState} from "react";
import {Button, ButtonGroup, Card, CardBody, CardText, CardTitle, Container, FormGroup, Input, Label} from "reactstrap";
import {IForm, IFormField, IFormPage, IFormSection} from "./types";

interface IDynamicFormProps {
    form: IForm
}

export const DynamicForm = (props: IDynamicFormProps) => {
    const [page, setPage] = useState(0)
    return (
        <Container style={{position: 'relative'}}>
            <FormPage page={props.form.pages[page]} />

            <ButtonGroup>
                {page > 0 &&
                <Button onClick={() => setPage(page - 1)}>
                    Previous
                </Button>}

                {props.form.pages.length > 1 && page < props.form.pages.length - 1 &&
                <Button onClick={() => setPage(page + 1)}>
                    Next
                </Button>}
            </ButtonGroup>
        </Container>
    )
}

interface IFormPageProps {
    page: IFormPage
}

const FormPage = (props: IFormPageProps) => {
    const { page } = props
    return <article className="form-page">
        {page.label.length > 0 && <h3>{page.label}</h3>}
        {page.description.length > 0 && <p>{page.description}</p>}
        {page.sections.map(section => <FormSection key={section.label} section={section} />)}
    </article>
}

interface IFormSectionProps {
    section: IFormSection
}

const FormSection = (props: IFormSectionProps) => {
    const { section } = props
    return (
        <section className="form-section">
            <Card>
                <CardBody>
                    {section.label.length > 0 && <CardTitle tag="h4">{section.label}</CardTitle>}
                    {section.description.length > 0 && <CardText tag="h5">{section.description}</CardText>}
                    {section.fields.map(field => <FormField key={field.label} field={field} />)}
                </CardBody>
            </Card>
        </section>
    )
}

interface IFormFieldProps {
    field: IFormField
}

const FormField = (props: IFormFieldProps) => {
    const { field } = props
    switch (field.type) {

        case "text":
            return (
                <FormGroup>
                    <Label>{field.label}</Label>
                    <Input type="text" />
                </FormGroup>
            )

        case "select":
            return (
                <FormGroup>
                    <Label>{field.label}</Label>
                    <Input type="select">
                        {field.options.map(o => <option key={o.key} value={o.key}>{o.label}</option>)}
                    </Input>
                </FormGroup>
            )

    }

}
