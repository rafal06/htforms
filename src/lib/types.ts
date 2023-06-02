// Input classes

export interface InputInterface {
	id: number;
	additionalProperties: string | null;
	stringify(): string;
}

class InputInput implements InputInterface {
	public label = '';
	public name = '';
	public required = false;
	public additionalProperties: string | null = null;

	constructor(
		public id: number,
		public readonly type: string,
	) {}

	stringify(): string {
		const required = this.required ? 'required ' : '';
		const additionalProperties = this.additionalProperties ? this.additionalProperties + ' ' : '';

		return '    <div>\n' +
        	   (this.label ? `        <label for="${this.name}">${this.label}</label>\n` : '') +
        	   `        <input type="${this.type}" name="${this.name}" id="${this.name}" ${required}${additionalProperties}/>\n` +
        	   '    </div>\n';
	}
}

export class InputText extends InputInput {
	constructor(id) {
		super(id, 'text');
	}
}

export class InputNumber extends InputInput {
	constructor(id) {
		super(id, 'number');
	}
}

class InputSubmit implements InputInterface {
	public value: string | null;
	public additionalProperties: string | null = null;

	constructor(
		public id: number,
	) {}

	stringify(): string {
		const value = this.value ? `value="${this.value}" ` : '';
		const additionalProperties = this.additionalProperties ? this.additionalProperties + ' ' : '';

		return '    <div>\n' +
			   `        <input type="submit" ${value}${additionalProperties}/>\n` +
			   '    </div>\n';
	}
}

export const InputMap = {
	text: InputText,
	number: InputNumber,
	submit: InputSubmit,
}
