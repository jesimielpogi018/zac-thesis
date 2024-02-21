<script lang="ts">
	import type { PageData } from './$types';
	import { equipments } from '$lib/equipments';
	import { superForm } from 'sveltekit-superforms/client';
	import { Checkbox, Label, Input, Helper } from 'flowbite-svelte';

	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form);

	let isDisabled: boolean;

	$: isDisabled = $form.equipments.length === 0;
</script>

<svelte:head>
	<title>Selection of Equipments</title>
</svelte:head>

<section>
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
						name="company"
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

					{#each equipments as equipment}
						<Checkbox
							type="checkbox"
							id={equipment}
							name="equipments"
							value={equipment}
							bind:group={$form.equipments}>{equipment.toLocaleUpperCase()}</Checkbox
						>
					{/each}
				</div>
			</div>

			<button
				type="submit"
				class="variant-filled-primary btn my-2 disabled:variant-filled-primary"
				disabled={isDisabled}>Continue</button
			>
		</form>
	</div>
</section>
