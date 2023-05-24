export enum FormInputType {
	text = 'text',
	number = 'number',
	submit = 'submit',
}

export interface FormInput {
	id: number,
	type: FormInputType,
	label: string,
	name: string,
	required: boolean,
	additionalProperties: string | undefined,
}

export interface FormObj {
	method: string,
	action: string,
	inputs: FormInput[],
}
