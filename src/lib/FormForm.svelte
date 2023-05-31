<script lang="ts">
	import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label, Row } from "sveltestrap";
	import { dndzone } from "svelte-dnd-action";
	import { flip } from "svelte/animate";

	import { FormInputType, type FormInput } from "./types";
	import { formStore } from "./store";
	import FormInputItem from "./FormInputItem.svelte";
    import { capitalize } from "./helpers";

	function genNewInputIndex(): number {
		let highestValue = 0;
		$formStore.inputs.forEach(element => {
			if (element.id > highestValue) highestValue = element.id;
		});
		return highestValue + 1;
	}

	function addFormItem(type: FormInputType) {
		formStore.update(form => {
			form.inputs.push( {
				id: genNewInputIndex(),
				type,
				name: '',
				label: '',
				required: false,
				additionalProperties: undefined,
			});
			return form;
		});
		console.log($formStore);
	}

	function handleSort(e: any) {
		$formStore.inputs = e.detail.items;
	}
</script>

<Form>
	<Container>
		<Row>
			<Col>
				<FormGroup>
					<Label for="method">Method</Label>
					<Input type="select" id="method" bind:value={$formStore.method}>
						<option selected>GET</option>
						<option>POST</option>
					</Input>
				</FormGroup>
			</Col>
			<Col>
				<FormGroup>
					<Label for="action">Action</Label>
					<Input id="action" bind:value={$formStore.action}/>
				</FormGroup>
			</Col>
		</Row>

		<Row>
			<section class="col border rounded-3" use:dndzone={{items: $formStore.inputs, flipDurationMs: 200}} on:consider={handleSort} on:finalize={handleSort}>
				{#each $formStore.inputs as formInput (formInput.id) }
					<div animate:flip={{duration: 200}}>
						<FormInputItem bind:formInput={formInput} />
					</div>
				{/each}
			</section>
		</Row>

		<Row class="mt-3">
			<Col>
				<Dropdown>
					<DropdownToggle color="primary">Add Input</DropdownToggle>
					<DropdownMenu>
						{#each Object.keys(FormInputType) as type }
							<DropdownItem on:click={() => addFormItem(FormInputType[type])}>
								{capitalize(FormInputType[type])}
							</DropdownItem>
						{/each}
					</DropdownMenu>
				</Dropdown>
			</Col>
		</Row>
	</Container>

</Form>
