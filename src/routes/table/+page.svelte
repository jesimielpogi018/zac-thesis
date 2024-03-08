<script lang="ts">
	import { onMount } from 'svelte';
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
	import CheckboxRipple from '$lib/components/owned/CheckboxRipple.svelte';
	import type { TableData } from '$lib/interface/TableData';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	export let data: PageData;

	$: isDisabled = false;

	let previewData: { [key: string]: TableData<undefined> } = {};

	let formSubscriptionList: Function[] = [];
	let errorSubscriptionList: Function[] = [];

	for (const i in data.equipmentForms) {
		previewData[data.equipmentForms[i][0]] = {
			cost: undefined,
			mileage: undefined,
			expected: undefined,
			lifespan: undefined,
			isUsed: false,
			yearsInOperation: undefined,
			depreciationRate: undefined
		};
	}

	function handleOnInput() {
		for (const equipment of Object.keys(previewData)) {
			if (previewData[equipment].cost == null) {
				isDisabled = true;
				return;
			}

			if (previewData[equipment].mileage == null && previewData[equipment].lifespan == null) {
				isDisabled = true;
				return;
			}

			if (previewData[equipment].expected == null) {
				isDisabled = true;
				return;
			}

			if (previewData[equipment].yearsInOperation == null) {
				isDisabled = true;
				return;
			}

			if (previewData[equipment].depreciationRate == null) {
				isDisabled = true;
				return;
			}
			isDisabled = false;
		}
	}

	function handleFinalize() {
		fetch('/api/finalize', { method: 'POST', body: JSON.stringify(previewData) })
			.then((res) => res.json())
			.then((data) => goto('/final?' + data.url))
			.catch((error) => console.log(error));
	}

	onMount(() => {
		handleOnInput();

		return function cleanup() {
			formSubscriptionList.map((f) => f());
			errorSubscriptionList.map((f) => f());
		};
	});

	const inputContainer = 'flex w-48 flex-col gap-6';
	const inputHolder = 'relative h-11 w-full min-w-[200px]';
	const inputStyle = 'block w-full p-2 w-24 form-input border-0 border-b-2 border-neutral-500 bg-inherit text-sm focus:border-black focus:ring-0 dark:type="number"  dark:placeholder:text-neutral-300  placeholder:text-neutral-500 dark:border-neutral-300 dark:focus:border-white';
	const radioInput =
		"before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border text-primary-500 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary-500 checked:before:bg-primary-500 hover:before:opacity-10";
</script>

<svelte:head>
	<title>Equipments Table</title>
</svelte:head>

<div class="mx-auto flex max-w-7xl flex-col items-center px-4 py-8 lg:py-16">
	<h2 class="mb-4 w-full pl-4 text-xl font-bold text-neutral-900 dark:text-neutral-100">Please complete the form.</h2>
	<h2 class="mb-4 w-full pl-4 text-lg font-bold text-neutral-600 dark:text-neutral-200">
		Username: {data.username}
	</h2>
	<h2 class="mb-4 w-full pl-4 text-lg font-bold text-neutral-600 dark:text-neutral-200">
		Company: {data.company}
	</h2>

	<Table divClass="rounded-sm relative overflow-x-auto w-full">
		<TableHead>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Equipment</TableHeadCell>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Cost of Equipment</TableHeadCell>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Expected Output</TableHeadCell>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Mileage</TableHeadCell>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Lifespan</TableHeadCell>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Is used?</TableHeadCell>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Years in Operation</TableHeadCell>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Depreciation Rate</TableHeadCell>
		</TableHead>
		<TableBody tableBodyClass="divide-y">
			{#each data.equipmentForms as [equipment, form], index}
				<TableBodyRow>
					<TableBodyCell class="dark:bg-[#383838]">{equipment.toLocaleUpperCase()}</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={previewData[equipment].cost} on:input={handleOnInput} type="number" placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={previewData[equipment].expected} on:input={handleOnInput} type="number" placeholder="Expected Output" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={previewData[equipment].mileage} on:input={handleOnInput} type="number" placeholder="Mileage" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={previewData[equipment].lifespan} on:input={handleOnInput} type="number" placeholder="Lifespan" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class="flex gap-2">
							<div class="inline-flex items-center">
								<label class="relative flex cursor-pointer items-center rounded-full p-3" for="on" data-ripple-dark="true">
									<input value={true} bind:group={previewData[equipment].isUsed} type="radio" class={radioInput} id="on" />
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="on"> Yes </label>
							</div>
							<div class="inline-flex items-center">
								<label class="relative flex cursor-pointer items-center rounded-full p-3" for="off">
									<input value={false} bind:group={previewData[equipment].isUsed} type="radio" class={radioInput} id="off" />
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="off"> No </label>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={previewData[equipment].yearsInOperation} on:input={handleOnInput} type="number" placeholder="Operation years" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={previewData[equipment].depreciationRate} on:input={handleOnInput} type="number" placeholder="Depreciation Rate" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>

	<br />
	<div class="container mx-auto px-5 py-24">
		<section class="body-font overflow-hidden text-gray-600">
			{#each data.equipmentForms as [equipment, form]}
				<div class="-my-8 divide-y-2 divide-gray-100">
					<div class="flex flex-wrap gap-1 py-8 md:flex-nowrap">
						<div class="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
							<span class="title-font font-semibold text-gray-700 dark:text-neutral-100">{equipment.toLocaleUpperCase()}</span>
						</div>
						<div class="md:flex-grow">
							<h2 class="title-font mb-2 text-2xl font-medium text-gray-900 dark:text-neutral-100">
								{equipment.toLocaleUpperCase()}'s Data
							</h2>
							<div class="grid grid-cols-1 gap-2 divide-y leading-relaxed dark:divide-neutral-100">
								<div class="grid w-full grid-cols-2 gap-2">
									<p class="dark:text-neutral-100">Cost:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
									<p class="dark:text-neutral-100">
										{previewData[equipment].cost ?? 'No input or invalid!'}
									</p>
								</div>
								<div class="grid w-full grid-cols-2 gap-2">
									<p class="dark:text-neutral-100">Expected Output:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
									<p class="dark:text-neutral-100">
										{previewData[equipment].expected ?? 'No input or invalid!'}
									</p>
								</div>
								<div class="grid w-full grid-cols-2 gap-2">
									<p class="dark:text-neutral-100">Mileage:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
									<p class="dark:text-neutral-100">
										{previewData[equipment].mileage ?? 'No Input or invalid!'}
									</p>
								</div>
								<div class="grid w-full grid-cols-2 gap-2">
									<p class="dark:text-neutral-100">Lifespan:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
									<p class="dark:text-neutral-100">
										{previewData[equipment].lifespan ?? 'No Input or invalid!'}
									</p>
								</div>
								<div class="grid w-full grid-cols-2 gap-2">
									<p class="dark:text-neutral-100">Is used?:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
									<p class="dark:text-neutral-100">
										{previewData[equipment].isUsed ? 'Yes' : 'No'}
									</p>
								</div>
								<div class="grid w-full grid-cols-2 gap-2">
									<p class="dark:text-neutral-100">Operation years:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
									<p class="dark:text-neutral-100">
										{previewData[equipment].yearsInOperation ?? 'No input or invalid!'}
									</p>
								</div>

								<div class="grid w-full grid-cols-2 gap-2">
									<p class="dark:text-neutral-100">Depreciation Rate:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
									<p class="dark:text-neutral-100">
										{previewData[equipment].depreciationRate !== undefined ? `${previewData[equipment].depreciationRate}%` : 'No input or invalid!'}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</section>
	</div>

	<button disabled={isDisabled} on:click={handleFinalize} type="button" class="variant-filled-primary btn rounded">Finalize</button>
</div>

<style lang="postcss">
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
