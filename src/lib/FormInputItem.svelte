<script lang="ts">
	import { Col, FormGroup, Input, Row } from "sveltestrap";
	import { InputMap, type InputInterface } from "./types";
    import { capitalize } from "./helpers";
	import { formStore } from "./store";
	
	import editIcon from "../assets/editIcon.svg";
	import checkmarkIcon from "../assets/checkmarkIcon.svg";
	import deleteIcon from "../assets/deleteIcon.svg";

	export let formInput: InputInterface;

	let editTypeVisible = false;

	function enterToSubmit(event: any) {
		if (event.code == 'Enter') editTypeVisible = false;
	}

	function deleteInput() {
		$formStore.inputs = $formStore.inputs.filter(storeInput => storeInput !== formInput);
	}
</script>

<div class="container my-3 px-4 py-3 border rounded-3" style="width: initial;">
	<Row>
		<Col>
			<Row class="pb-2">
				{#if editTypeVisible}
					<Col class="pb-1">
						<!-- TODO: Figure out how to reimplement it with the classes aproach -->
						<!-- <Input list="inputTypes" bind:value={formInput.type} on:keypress={enterToSubmit} /> -->
						<datalist id="inputTypes">
							{#each Object.keys(InputMap) as type }
								<option>{capitalize(type)}</option>
							{/each}
						</datalist>
					</Col>
					<Col xs="auto" class="pb-0 d-flex align-items-center">
						<button class="icon-btn" on:click={() => editTypeVisible = false}>
							<img src={checkmarkIcon} class="darkreader-invert" alt="save" height="18">
						</button>
					</Col>
				{:else}
					<Col>
						<h3 class="pb-0">
							{formInput.constructor.name.replace('Input', '')}
							<button class="icon-btn" on:click={() => editTypeVisible = true}>
								<img src={editIcon} class="darkreader-invert" alt="edit" height="18">
							</button>
						</h3>
					</Col>
				{/if}

				<Col xs="auto" class="d-flex align-items-center">
					<button class="icon-btn delete-btn" on:click={deleteInput}>
						<img src={deleteIcon} alt="delete">
					</button>
				</Col>
			</Row>
		</Col>
	</Row>
	<Row>
		{#if 'label' in formInput}  <!-- TODO: Do it in a better way -->
			<Col>
				<FormGroup floating label="Label">
					<Input bind:value={formInput.label}/>
				</FormGroup>
			</Col>
		{/if}
		{#if 'name' in formInput}
			<Col>
				<FormGroup floating label="Name">
					<Input bind:value={formInput.name}/>
				</FormGroup>
			</Col>
		{/if}
	</Row>
	{#if 'required' in formInput}
		<Row>
			<Col>
				<FormGroup>
					<Input
						type="checkbox"
						label="Required"
						id={`required-checkbox-${formInput.id}`}
						bind:checked={formInput.required}
					/>
				</FormGroup>
			</Col>
		</Row>
	{/if}
	<Row>
		<Col>
			<FormGroup floating label="Additional properties">
				<Input bind:value={formInput.additionalProperties}/>
			</FormGroup>
		</Col>
	</Row>
</div>

<style>
	.icon-btn {
		border: none;
		background: none;
	}
	.icon-btn > img {
		vertical-align: initial;
	}


	.delete-btn {
		opacity: 0;
		transition: opacity 100ms;
	}
	.container:hover .delete-btn {
		opacity: 1;
	}
</style>
