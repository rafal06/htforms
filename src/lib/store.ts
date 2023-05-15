import { writable } from 'svelte/store';
import { FormInputType, type FormInput, type FormObj } from './types';

export let formStore = writable<FormObj>(
	JSON.parse(localStorage.getItem('userFormData')) || { method: 'GET', inputs: [] }
);

formStore.subscribe(value => {
	localStorage.setItem('userFormData', JSON.stringify(value));
});
