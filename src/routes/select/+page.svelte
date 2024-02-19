<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { Checkbox, Label, Input, Helper } from 'flowbite-svelte';

	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form);
</script>

<svelte:head>
	<title>Selection of Equipments</title>
</svelte:head>

<section class="">
	<div class="mx-auto max-w-2xl px-4 py-8 lg:py-16">
		<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
			Welcome! Please fill up the form.
		</h2>
		<form method="POST" use:enhance>
			<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
				<div class="w-full">
					<Label for="username" class="mb-2 block" color={$errors.username ? 'red' : 'gray'}
						>Username</Label
					>
					<Input
						type="text"
						id="username"
						name="username"
						placeholder="Your username..."
						bind:value={$form.username}
						aria-invalid={$errors.username ? 'true' : undefined}
						color={$errors.username ? 'red' : 'base'}
					/>
					{#if $errors.username}
						<Helper class="mt-2" color="red"
							><span class="font-medium">Invalid!</span> {$errors.username}</Helper
						>
					{/if}
				</div>
				<div class="w-full">
					<Label for="company" class="mb-2 block" color={$errors.company ? 'red' : 'gray'}
						>Company</Label
					>
					<Input
						type="text"
						id="company"
						name="company	"
						placeholder="Your company name..."
						bind:value={$form.company}
						aria-invalid={$errors.company ? 'true' : undefined}
						color={$errors.company ? 'red' : 'base'}
					/>
					{#if $errors.company}
						<Helper class="mt-2" color="red"
							><span class="font-medium">Invalid!</span> {$errors.company}</Helper
						>
					{/if}
				</div>
				<div class="w-full">
					<Label class="mb-2 block">List of Equipments</Label>
					<Checkbox
						type="checkbox"
						id="excavator"
						name="excavator"
						bind:checked={$form.excavator}
						aria-invalid={$errors.excavator ? 'true' : undefined}>Excavator</Checkbox
					>
					<Checkbox
						type="checkbox"
						id="dump"
						name="dump"
						bind:checked={$form.dump}
						aria-invalid={$errors.dump ? 'true' : undefined}>Dump Truck</Checkbox
					>
					<Checkbox
						type="checkbox"
						id="roller"
						name="roller"
						bind:checked={$form.roller}
						aria-invalid={$errors.roller ? 'true' : undefined}>Roller/Compactor</Checkbox
					>
					<Checkbox
						type="checkbox"
						id="backhoe"
						name="backhoe"
						bind:checked={$form.backhoe}
						aria-invalid={$errors.backhoe ? 'true' : undefined}>Backhoe</Checkbox
					>
					<Checkbox
						type="checkbox"
						id="bulldozer"
						name="bulldozer"
						bind:checked={$form.bulldozer}
						aria-invalid={$errors.bulldozer ? 'true' : undefined}>Bulldozer</Checkbox
					>
					<Checkbox
						type="checkbox"
						id="grader"
						name="grader"
						bind:checked={$form.grader}
						aria-invalid={$errors.grader ? 'true' : undefined}>Grader</Checkbox
					>
				</div>
			</div>

			<button
				type="submit"
				class="mt-4 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 sm:mt-6"
			>
				Continue
			</button>
		</form>
	</div>
</section>
