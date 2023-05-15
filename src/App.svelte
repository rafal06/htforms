<script lang="ts">
	import { Col, Container, Row } from "sveltestrap";
	import Navbar from "./lib/Navbar.svelte";
	import FormForm from "./lib/FormForm.svelte";
	import FormOutputView from "./lib/FormOutputView.svelte";
</script>

<Navbar/>

<Container>
	<Row>
		<Col>
			<FormForm/>
		</Col>
		<Col>
			<FormOutputView/>
		</Col>
	</Row>
</Container>