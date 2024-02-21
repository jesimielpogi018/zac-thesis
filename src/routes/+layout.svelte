<script lang="ts">
	import { AppShell, LightSwitch } from '@skeletonlabs/skeleton';

	import 'flowbite';
	import '../app.pcss';

	import { Navbar, NavBrand } from 'flowbite-svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar class="dark:bg-[#181818]">
			<NavBrand href="/" class="">
				<div class="flex flex-row items-center justify-center gap-2">
					<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
						>CM06402</span
					>
				</div>
			</NavBrand>
			<div class="flex md:order-2">
				<LightSwitch />
			</div>
		</Navbar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer"></svelte:fragment>
</AppShell>
