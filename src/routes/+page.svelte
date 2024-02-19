<script lang="ts">
	import Excavator from '$lib/icons/excavator.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
		<div class="mb-12 flex w-full flex-col text-center">
			<div class="mx-auto mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center">
				<Excavator />
			</div>
			<h1
				class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 dark:text-neutral-200 md:text-5xl lg:max-w-7xl lg:text-6xl"
			>
				Welcome! <br class="hidden lg:block" />
				GEARHAUL
			</h1>

			<p
				class="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-neutral-500 dark:text-neutral-300"
			>
				An Equipment Analysis
			</p>

			<a
				class="mx-auto mt-8 text-sm font-semibold text-tertiary-600 hover:text-neutral-600"
				title="read more"
				href="/select"
			>
				Start now »
			</a>
		</div>
	</div>
</section>
