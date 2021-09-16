import {IForm} from "./types";

export const mockForm: IForm = {
    label: "A dynamic form",
    description: "A form whereby the definition is provided to us via an API.",
    pages: [
        {
            label: "Page #1",
            description: "The first page of form fields.",
            sections: [
                {
                    label: "Section #1",
                    description: "",
                    fields: [
                        {
                            label: "A text field",
                            type: "text",
                            maxLength: 100,
                        },
                        {
                            label: "A select field",
                            type: "select",
                            options: [
                                {label: "one", key: "Option #1"},
                                {label: "two", key: "Option #2"},
                                {label: "three", key: "Option #3"},
                            ]
                        }
                    ]
                },
                {
                    label: "Section #2",
                    description: "",
                    fields: [
                        {
                            label: "Another text field",
                            type: "text",
                            maxLength: 100,
                        },
                    ]
                }
            ]

        },
        {
            label: "Page #2",
            description: "The second page.",
            sections: [
                {
                    label: "Section #3",
                    description: "",
                    fields: [
                        {
                            label: "A final select field",
                            type: "select",
                            options: [
                                {label: "a", key: "Option #A"},
                                {label: "b", key: "Option #B"},
                                {label: "c", key: "Option #C"},
                            ]
                        }
                    ]
                },
            ]

        }
    ]
}
