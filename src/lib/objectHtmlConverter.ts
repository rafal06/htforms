import { type FormObj } from "./types";

export function convertToHtml(form: FormObj) {
    let formHtml = `<form method="${form.method}"${ form.action ? ` action="${form.action}"` : ''}>\n`;

    form.inputs.forEach(inputObj => {
        formHtml += inputObj.stringify();
    });

    formHtml += '</form>\n';
    return formHtml;
}