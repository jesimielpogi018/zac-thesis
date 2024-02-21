<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Hr
	} from 'flowbite-svelte';
	import CheckboxRipple from '$lib/components/owned/CheckboxRipple.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	interface TableData {
		cost: number | undefined;
		mileage: number | undefined;
		lifespan: number | undefined;
		isUsed: boolean;
		yearsInOperation: number | undefined;
		salvageValue: number | undefined;
		depreciationRate: number | undefined;
	}

	let excavatorCost: number | undefined = undefined;
	let excavatorMileage: number | undefined = undefined;
	let excavatorLifespan: number | undefined = undefined;
	let excavatorIsUsed: boolean = false;
	let excavatorYearsInOperation: number | undefined = undefined;
	let excavatorSalvageValue: number | undefined = undefined;
	let excavatorDepreciationRate: number | undefined = undefined;

	let dumpCost: number | undefined = undefined;
	let dumpMileage: number | undefined = undefined;
	let dumpLifespan: number | undefined = undefined;
	let dumpIsUsed: boolean = false;
	let dumpYearsInOperation: number | undefined = undefined;
	let dumpSalvageValue: number | undefined = undefined;
	let dumpDepreciationRate: number | undefined = undefined;

	let rollerCost: number | undefined = undefined;
	let rollerMileage: number | undefined = undefined;
	let rollerLifespan: number | undefined = undefined;
	let rollerIsUsed: boolean = false;
	let rollerYearsInOperation: number | undefined = undefined;
	let rollerSalvageValue: number | undefined = undefined;
	let rollerDepreciationRate: number | undefined = undefined;

	let backhoeCost: number | undefined = undefined;
	let backhoeMileage: number | undefined = undefined;
	let backhoeLifespan: number | undefined = undefined;
	let backhoeIsUsed: boolean = false;
	let backhoeYearsInOperation: number | undefined = undefined;
	let backhoeSalvageValue: number | undefined = undefined;
	let backhoeDepreciationRate: number | undefined = undefined;

	let bulldozerCost: number | undefined = undefined;
	let bulldozerMileage: number | undefined = undefined;
	let bulldozerLifespan: number | undefined = undefined;
	let bulldozerIsUsed: boolean = false;
	let bulldozerYearsInOperation: number | undefined = undefined;
	let bulldozerSalvageValue: number | undefined = undefined;
	let bulldozerDepreciationRate: number | undefined = undefined;

	let graderCost: number | undefined = undefined;
	let graderMileage: number | undefined = undefined;
	let graderLifespan: number | undefined = undefined;
	let graderIsUsed: boolean = false;
	let graderYearsInOperation: number | undefined = undefined;
	let graderSalvageValue: number | undefined = undefined;
	let graderDepreciationRate: number | undefined = undefined;

	let previewData: { [key: string]: TableData } = {};

	$: {
		previewData = {
			excavator: {
				cost: excavatorCost,
				mileage: excavatorMileage,
				lifespan: excavatorLifespan,
				isUsed: excavatorIsUsed,
				yearsInOperation: excavatorYearsInOperation,
				salvageValue: excavatorSalvageValue,
				depreciationRate: excavatorDepreciationRate
			},
			dump: {
				cost: dumpCost,
				mileage: dumpMileage,
				lifespan: dumpLifespan,
				isUsed: dumpIsUsed,
				yearsInOperation: dumpYearsInOperation,
				salvageValue: dumpSalvageValue,
				depreciationRate: dumpDepreciationRate
			},
			roller: {
				cost: rollerCost,
				mileage: rollerMileage,
				lifespan: rollerLifespan,
				isUsed: rollerIsUsed,
				yearsInOperation: rollerYearsInOperation,
				salvageValue: rollerSalvageValue,
				depreciationRate: rollerDepreciationRate
			},
			backhoe: {
				cost: backhoeCost,
				mileage: backhoeMileage,
				lifespan: backhoeLifespan,
				isUsed: backhoeIsUsed,
				yearsInOperation: backhoeYearsInOperation,
				salvageValue: backhoeSalvageValue,
				depreciationRate: backhoeDepreciationRate
			},
			bulldozer: {
				cost: bulldozerCost,
				mileage: bulldozerMileage,
				lifespan: bulldozerLifespan,
				isUsed: bulldozerIsUsed,
				yearsInOperation: bulldozerYearsInOperation,
				salvageValue: bulldozerSalvageValue,
				depreciationRate: bulldozerDepreciationRate
			},
			grader: {
				cost: graderCost,
				mileage: graderMileage,
				lifespan: graderLifespan,
				isUsed: graderIsUsed,
				yearsInOperation: graderYearsInOperation,
				salvageValue: graderSalvageValue,
				depreciationRate: graderDepreciationRate
			}
		};
	}

	const inputContainer = 'flex w-48 flex-col gap-6';
	const inputHolder = 'relative h-11 w-full min-w-[200px]';
	const inputStyle =
		'form-input border-0 border-b-2 border-neutral-500 bg-inherit text-sm focus:border-black focus:ring-0 dark:type="number"  dark:placeholder:text-neutral-300  placeholder:text-neutral-600 dark:border-neutral-300 dark:focus:border-white';
	const radioInput =
		"before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border text-primary-500 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary-500 checked:before:bg-primary-500 hover:before:opacity-10";
</script>

<svelte:head>
	<title>Equipments Table</title>
</svelte:head>

<div class="mx-auto flex max-w-7xl flex-col items-center px-4 py-8 lg:py-16">
	<h2 class="mb-4 w-full pl-4 text-xl font-bold text-neutral-900 dark:text-neutral-100">
		Please complete the form.
	</h2>
	<h2 class="mb-4 w-full pl-4 text-lg font-bold text-neutral-600 dark:text-neutral-200">
		Username: {data.username}
	</h2>
	<h2 class="mb-4 w-full pl-4 text-lg font-bold text-neutral-600 dark:text-neutral-200">
		Company: {data.company}
	</h2>

	<Table divClass="rounded-sm relative overflow-x-auto w-full">
		<TableHead>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Equipment</TableHeadCell>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100"
				>Cost of Equipment</TableHeadCell
			>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Mileage</TableHeadCell>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Lifespan</TableHeadCell>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Is used?</TableHeadCell>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100"
				>Years in Operation</TableHeadCell
			>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Salvage Value</TableHeadCell>
			<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100"
				>Depreciation Rate</TableHeadCell
			>
		</TableHead>
		<TableBody tableBodyClass="divide-y">
			{#if data.equipments.includes('excavator')}
				<TableBodyRow>
					<TableBodyCell class="dark:bg-[#383838]">Excavator</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={excavatorCost}
									type="number"
									placeholder="Cost"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={excavatorMileage}
									type="number"
									placeholder="Mileage"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={excavatorLifespan}
									type="number"
									placeholder="Lifespan"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class="flex gap-2">
							<div class="inline-flex items-center">
								<label
									class="relative flex cursor-pointer items-center rounded-full p-3"
									for="on"
									data-ripple-dark="true"
								>
									<input
										value={true}
										bind:group={excavatorIsUsed}
										type="radio"
										class={radioInput}
										id="on"
									/>
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="on">
									Yes
								</label>
							</div>
							<div class="inline-flex items-center">
								<label class="relative flex cursor-pointer items-center rounded-full p-3" for="off">
									<input
										value={false}
										bind:group={excavatorIsUsed}
										type="radio"
										class={radioInput}
										id="off"
									/>
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="off">
									No
								</label>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={excavatorYearsInOperation}
									type="number"
									placeholder="Operation years"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={excavatorSalvageValue}
									type="number"
									placeholder="Salvage Value"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={excavatorDepreciationRate}
									type="number"
									placeholder="Depreciation Rate"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
				</TableBodyRow>
			{/if}

			{#if data.equipments.includes('dump')}
				<TableBodyRow>
					<TableBodyCell class="dark:bg-[#383838]">Dump Truck</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={dumpCost} type="number" placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={dumpMileage}
									type="number"
									placeholder="Mileage"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={dumpLifespan}
									type="number"
									placeholder="Lifespan"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class="flex gap-2">
							<div class="inline-flex items-center">
								<label
									class="relative flex cursor-pointer items-center rounded-full p-3"
									for="on"
									data-ripple-dark="true"
								>
									<input
										value={true}
										bind:group={dumpIsUsed}
										type="radio"
										class={radioInput}
										id="on"
									/>
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="on">
									Yes
								</label>
							</div>
							<div class="inline-flex items-center">
								<label class="relative flex cursor-pointer items-center rounded-full p-3" for="off">
									<input
										value={false}
										bind:group={dumpIsUsed}
										type="radio"
										class={radioInput}
										id="off"
									/>
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="off">
									No
								</label>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={dumpYearsInOperation}
									type="number"
									placeholder="Operation years"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={dumpSalvageValue}
									type="number"
									placeholder="Salvage Value"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={dumpDepreciationRate}
									type="number"
									placeholder="Depreciation Rate"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
				</TableBodyRow>
			{/if}

			{#if data.equipments.includes('roller')}
				<TableBodyRow>
					<TableBodyCell class="dark:bg-[#383838]">Roller/Compactor</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={rollerCost}
									type="number"
									placeholder="Cost"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={rollerMileage}
									type="number"
									placeholder="Mileage"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={rollerLifespan}
									type="number"
									placeholder="Lifespan"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class="flex gap-2">
							<div class="inline-flex items-center">
								<label
									class="relative flex cursor-pointer items-center rounded-full p-3"
									for="on"
									data-ripple-dark="true"
								>
									<input
										value={true}
										bind:group={rollerIsUsed}
										type="radio"
										class={radioInput}
										id="on"
									/>
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="on">
									Yes
								</label>
							</div>
							<div class="inline-flex items-center">
								<label class="relative flex cursor-pointer items-center rounded-full p-3" for="off">
									<input
										value={false}
										bind:group={rollerIsUsed}
										type="radio"
										class={radioInput}
										id="off"
									/>
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="off">
									No
								</label>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={rollerYearsInOperation}
									type="number"
									placeholder="Operation years"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={rollerSalvageValue}
									type="number"
									placeholder="Salvage Value"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={rollerDepreciationRate}
									type="number"
									placeholder="Depreciation Rate"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
				</TableBodyRow>
			{/if}

			{#if data.equipments.includes('backhoe')}
				<TableBodyRow>
					<TableBodyCell class="dark:bg-[#383838]">Backhoe</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={backhoeCost}
									type="number"
									placeholder="Cost"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={backhoeMileage}
									type="number"
									placeholder="Mileage"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={backhoeLifespan}
									type="number"
									placeholder="Lifespan"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class="flex gap-2">
							<div class="inline-flex items-center">
								<label
									class="relative flex cursor-pointer items-center rounded-full p-3"
									for="on"
									data-ripple-dark="true"
								>
									<input
										value={true}
										bind:group={backhoeIsUsed}
										type="radio"
										class={radioInput}
										id="on"
									/>
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="on">
									Yes
								</label>
							</div>
							<div class="inline-flex items-center">
								<label class="relative flex cursor-pointer items-center rounded-full p-3" for="off">
									<input
										value={false}
										bind:group={backhoeIsUsed}
										type="radio"
										class={radioInput}
										id="off"
									/>
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="off">
									No
								</label>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={backhoeYearsInOperation}
									type="number"
									placeholder="Operation years"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={backhoeSalvageValue}
									type="number"
									placeholder="Salvage Value"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={backhoeDepreciationRate}
									type="number"
									placeholder="Depreciation Rate"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
				</TableBodyRow>
			{/if}

			{#if data.equipments.includes('bulldozer')}
				<TableBodyRow>
					<TableBodyCell class="dark:bg-[#383838]">Bulldozer</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={bulldozerCost}
									type="number"
									placeholder="Cost"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={bulldozerMileage}
									type="number"
									placeholder="Mileage"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={bulldozerLifespan}
									type="number"
									placeholder="Lifespan"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class="flex gap-2">
							<div class="inline-flex items-center">
								<label
									class="relative flex cursor-pointer items-center rounded-full p-3"
									for="on"
									data-ripple-dark="true"
								>
									<input
										value={true}
										bind:group={bulldozerIsUsed}
										type="radio"
										class={radioInput}
										id="on"
									/>
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="on">
									Yes
								</label>
							</div>
							<div class="inline-flex items-center">
								<label class="relative flex cursor-pointer items-center rounded-full p-3" for="off">
									<input
										value={false}
										bind:group={bulldozerIsUsed}
										type="radio"
										class={radioInput}
										id="off"
									/>
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="off">
									No
								</label>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={bulldozerYearsInOperation}
									type="number"
									placeholder="Operation years"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={bulldozerSalvageValue}
									type="number"
									placeholder="Salvage Value"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={bulldozerDepreciationRate}
									type="number"
									placeholder="Depreciation Rate"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
				</TableBodyRow>
			{/if}

			{#if data.equipments.includes('grader')}
				<TableBodyRow>
					<TableBodyCell class="dark:bg-[#383838]">Grader</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={graderCost}
									type="number"
									placeholder="Cost"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={graderMileage}
									type="number"
									placeholder="Mileage"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={graderLifespan}
									type="number"
									placeholder="Lifespan"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class="flex gap-2">
							<div class="inline-flex items-center">
								<label
									class="relative flex cursor-pointer items-center rounded-full p-3"
									for="on"
									data-ripple-dark="true"
								>
									<input
										value={true}
										bind:group={graderIsUsed}
										type="radio"
										class={radioInput}
										id="on"
									/>
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="on">
									Yes
								</label>
							</div>
							<div class="inline-flex items-center">
								<label class="relative flex cursor-pointer items-center rounded-full p-3" for="off">
									<input
										value={false}
										bind:group={graderIsUsed}
										type="radio"
										class={radioInput}
										id="off"
									/>
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="off">
									No
								</label>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={graderYearsInOperation}
									type="number"
									placeholder="Operation years"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={graderSalvageValue}
									type="number"
									placeholder="Salvage Value"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input
									bind:value={graderDepreciationRate}
									type="number"
									placeholder="Depreciation Rate"
									class={inputStyle}
								/>
							</div>
						</div>
					</TableBodyCell>
				</TableBodyRow>
			{/if}
		</TableBody>
	</Table>

	<br />
</div>
<div class="container mx-auto px-5 py-24">
	<section class="body-font overflow-hidden text-gray-600">
		{#each data.equipments as equipment}
			<div class="-my-8 divide-y-2 divide-gray-100">
				<div class="flex flex-wrap gap-1 py-8 md:flex-nowrap">
					<div class="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
						<span class="title-font font-semibold text-gray-700 dark:text-neutral-100"
							>{equipment.toLocaleUpperCase()}</span
						>
					</div>
					<div class="md:flex-grow">
						<h2 class="title-font mb-2 text-2xl font-medium text-gray-900 dark:text-neutral-100">
							{equipment.toLocaleUpperCase()}'s Data
						</h2>
						<div class="grid grid-cols-1 gap-2 divide-y leading-relaxed dark:divide-neutral-100">
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Cost:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">
									{previewData[equipment].cost ?? 'No input yet!'}
								</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Mileage:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">
									{previewData[equipment].mileage ?? 'No Input yet!'}
								</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Lifespan:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">
									{previewData[equipment].lifespan ?? 'No Input yet!'}
								</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Is used?:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">{previewData[equipment].isUsed ? 'Yes' : 'No'}</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Operation years:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">
									{previewData[equipment].yearsInOperation ?? 'No input yet!'}
								</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Salvage Value:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">
									{previewData[equipment].salvageValue ?? 'No input yet!'}
								</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Depreciation Rate:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">
									{previewData[equipment].depreciationRate ?? 'No input yet!'}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</section>
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
