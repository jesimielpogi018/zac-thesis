<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { Checkbox, Label, Input, Helper } from 'flowbite-svelte';

	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form);

	let isDisabled: boolean;

	let excavator = $form.excavator;
	let backhoe = $form.backhoe;
	let dump = $form.dump;
	let bulldozer = $form.bulldozer;
	let roller = $form.roller;
	let grader = $form.grader;

	$: isDisabled = false;

	function handleDisable() {
		if (!excavator && !backhoe && !dump && !bulldozer && !roller && !grader) {
			isDisabled = true;
		} else {
			isDisabled = false;
		}
	}

	function handleExcavator() {
		excavator = !excavator;
		handleDisable();
	}

	function handleBackhoe() {
		backhoe = !backhoe;
		handleDisable();
	}

	function handleDump() {
		dump = !dump;
		handleDisable();
	}

	function handleBulldozer() {
		bulldozer = !bulldozer;
		handleDisable();
	}

	function handleRoller() {
		roller = !roller;
		handleDisable();
	}

	function handleGrader() {
		grader = !grader;
		handleDisable();
	}
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
					<Checkbox
						type="checkbox"
						id="excavator"
						name="excavator"
						on:click={handleExcavator}
						bind:checked={$form.excavator}
						aria-invalid={$errors.excavator ? 'true' : undefined}>Excavator</Checkbox
					>
					<Checkbox
						type="checkbox"
						id="dump"
						name="dump"
						on:click={handleDump}
						bind:checked={$form.dump}
						aria-invalid={$errors.dump ? 'true' : undefined}>Dump Truck</Checkbox
					>
					<Checkbox
						type="checkbox"
						id="roller"
						name="roller"
						on:click={handleRoller}
						bind:checked={$form.roller}
						aria-invalid={$errors.roller ? 'true' : undefined}>Roller/Compactor</Checkbox
					>
					<Checkbox
						type="checkbox"
						id="backhoe"
						name="backhoe"
						on:click={handleBackhoe}
						bind:checked={$form.backhoe}
						aria-invalid={$errors.backhoe ? 'true' : undefined}>Backhoe</Checkbox
					>
					<Checkbox
						type="checkbox"
						id="bulldozer"
						name="bulldozer"
						on:click={handleBulldozer}
						bind:checked={$form.bulldozer}
						aria-invalid={$errors.bulldozer ? 'true' : undefined}>Bulldozer</Checkbox
					>
					<Checkbox
						type="checkbox"
						id="grader"
						name="grader"
						on:click={handleGrader}
						bind:checked={$form.grader}
						aria-invalid={$errors.grader ? 'true' : undefined}>Grader</Checkbox
					>
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
