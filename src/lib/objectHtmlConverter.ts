import { type FormInput, FormInputType, type FormObj } from "./types";

export function convertToHtml(form: FormObj) {
    let formHtml = `<form method="${form.method}"${ form.action ? ` action="${form.action}"` : ''}>\n`;

    form.inputs.forEach(inputObj => {
        formHtml += '    <div>\n' +
                    (inputObj.label ? `        <label for="${inputObj.name}">${inputObj.label}</label>\n` : '') +
                    `        <input type="${inputObj.type.toLowerCase()}" name="${inputObj.name}" id="${inputObj.name}" ${inputObj.required ? 'required ' : ''}${inputObj.additionalProperties ? inputObj.additionalProperties + ' ' : ''}/>\n` +
                    '    </div>\n'
    });

    formHtml += '</form>\n';
    return formHtml;
}