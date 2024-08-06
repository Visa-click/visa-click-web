<script lang="ts">
	import Router, { push } from "svelte-spa-router";

	import Agreement from "../components/Agreement.svelte";
	import Home from "../components/Home.svelte";

	const routes = {
		"/": Home,
		"/agreement": Agreement,
	};

	let location = "";

	const handleRoute = async (event: any) => {
		location = event.detail.route;
	};

	let authChecked = false;
	let authOk = false;

	$: if (
		authChecked &&
		!authOk &&
		location !== "/agreement" &&
		location !== "/"
	) {
		push("/agreement");
	} else if (authChecked && authOk && location === "/agreement") {
		push("/");
	}
</script>

<svelte:head>
	<title>Visa Click</title>
</svelte:head>

<Router {routes} on:routeLoaded={handleRoute} />