<script lang="ts">
	import { Col, Container, Row } from "sveltestrap";
	import Navbar from "./lib/Navbar.svelte";
	import FormForm from "./lib/FormForm.svelte";
	import FormOutputView from "./lib/FormOutputView.svelte";
</script>

<Navbar/>

<div class="container-lg mb-4">
	<Row>
		<div class="col-md-6">
			<FormForm/>
		</div>
		<div class="col-md-6 mt-4 mt-md-0">
			<FormOutputView/>
		</div>
	</Row>
</div>