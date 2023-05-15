<script lang="ts">
	import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label, Row } from "sveltestrap";
	import { FormInputType, type FormInput } from "./types";
	import { formStore } from "./store";
	import FormInputItem from "./FormInputItem.svelte";

	function addFormItem(type: FormInputType) {
		formStore.update(form => {
			form.inputs.push( {
				type,
				name: '',
				label: '',
				additionalProperties: undefined,
			})
			return form;
		});
		console.log($formStore);
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
			<Col class="border rounded-3">
				{#each $formStore.inputs as formItem, index }
					<FormInputItem formInputIndex={index} />
				{/each}
			</Col>
		</Row>

		<Row class="mt-3">
			<Col>
				<Dropdown>
					<DropdownToggle color="primary">Add Input</DropdownToggle>
					<DropdownMenu>
						{#each Object.keys(FormInputType) as type }
							<DropdownItem on:click={() => addFormItem(FormInputType[type])}>
								{FormInputType[type]}
							</DropdownItem>
						{/each}
					</DropdownMenu>
				</Dropdown>
			</Col>
		</Row>
	</Container>

</Form>