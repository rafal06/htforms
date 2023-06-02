import { writable } from 'svelte/store';
import { type FormObj } from './types';

export let formStore = writable<FormObj>(
	/* JSON.parse(localStorage.getItem('userFormData')) || */ { method: 'GET', action: '', inputs: [] }
	// TODO: Reimplement saving to localStorage
);

// formStore.subscribe(value => {
// 	localStorage.setItem('userFormData', JSON.stringify(value));
// });
