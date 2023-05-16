<script lang="ts">
	import { Col, Container, FormGroup, Input, Row } from "sveltestrap";
	import { FormInputType, type FormInput } from "./types";
	import { formStore } from "./store";

	export let formInput: FormInput;
</script>

<Container class="my-3 px-4 py-3 border rounded-3" style="width: initial;">
	<Row>
		<Col>
			<h3>{formInput.type}</h3>
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
			<FormGroup floating label="Additional properties">
				<Input bind:value={formInput.additionalProperties}/>
			</FormGroup>
		</Col>
	</Row>
</Container>
