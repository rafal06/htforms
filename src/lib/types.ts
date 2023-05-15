export enum FormInputType {
	text = 'Text',
	number = 'Number',
	submit = 'Submit',
}

export interface FormInput {
	type: FormInputType,
	label: string,
	name: string,
	additionalProperties: string | undefined,
}

export interface FormObj {
	method: string,
	action: string,
	inputs: FormInput[],
}
