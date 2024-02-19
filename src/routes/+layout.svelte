<script lang="ts">
	import { AppShell, LightSwitch } from '@skeletonlabs/skeleton';

	import 'flowbite';
	import '../app.pcss';

	import { Navbar, NavBrand } from 'flowbite-svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar>
			<NavBrand href="/">
				<img src="/favicon.png" class="me-3 h-6 sm:h-9" alt="Svelte" />
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
					>Svelte</span
				>
			</NavBrand>
			<div class="flex md:order-2">
				<LightSwitch />
			</div>
		</Navbar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer"></svelte:fragment>
</AppShell>
