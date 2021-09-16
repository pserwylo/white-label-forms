export interface IForm {
    label: string
    description: string
    pages: IFormPage[]
}

export interface IFormPage {
    label: string
    description: string
    sections: IFormSection[]
}

export interface IFormSection {
    label: string
    description: string
    fields: IFormField[]
}

export type IFormField = ITextFormField | ISelectFormField

interface IBaseFormField {
    label: string
    type: 'text' | 'select'
}

interface ITextFormField extends IBaseFormField {
    type: 'text'
    maxLength: 100
}

interface ISelectFormField extends IBaseFormField {
    type: 'select'
    options: IOption[]
}

interface IOption {
    label: string
    key: string
}
