<script lang="ts">
	import { Col, Container, FormGroup, Input, Row } from "sveltestrap";
	import { FormInputType, type FormInput } from "./types";
    import { capitalize } from "./helpers";
	import editIcon from "../assets/editIcon.svg";
	import checkmarkIcon from "../assets/checkmarkIcon.svg";

	export let formInput: FormInput;

	let editTypeVisible = false;

	function enterToSubmit(event: any) {
		if (event.code == 'Enter') editTypeVisible = false;
	}
</script>

<Container class="my-3 px-4 py-3 border rounded-3" style="width: initial;">
	<Row>
		<Col>
			{#if editTypeVisible}
				<Row class="pb-3">
					<Col>
						<Input list="inputTypes" bind:value={formInput.type} on:keypress={enterToSubmit} />
						<datalist id="inputTypes">
							{#each Object.keys(FormInputType) as type }
								<option>{type}</option>
							{/each}
						</datalist>
					</Col>
					<Col xs="auto" class="d-flex align-items-center">
						<button class="icon-btn" on:click={() => editTypeVisible = false}>
							<img src={checkmarkIcon} class="darkreader-invert" alt="save" height="18">
						</button>
					</Col>
				</Row>
			{:else}
				<h3 class="pb-2">
					{capitalize(formInput.type)}
					<button class="icon-btn" on:click={() => editTypeVisible = true}>
						<img src={editIcon} class="darkreader-invert" alt="edit" height="18">
					</button>
				</h3>
			{/if}
		</Col>
	</Row>
	<Row>
		<Col>
			<FormGroup floating label="Label">
				<Input bind:value={formInput.label}/>
			</FormGroup>
		</Col>
		<Col>
			<FormGroup floating label="Name">
				<Input bind:value={formInput.name}/>
			</FormGroup>
		</Col>
	</Row>
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
	<Row>
		<Col>
			<FormGroup floating label="Additional properties">
				<Input bind:value={formInput.additionalProperties}/>
			</FormGroup>
		</Col>
	</Row>
</Container>

<style>
	.icon-btn {
		border: none;
		background: none;
	}
	.icon-btn > img {
		vertical-align: initial;
	}
</style>
