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
		cost: number;
		mileage: number;
		lifespan: number;
		isUsed: boolean;
		yearsInOperation: number;
		salvageValue: number;
		depreciationRate: number;
	}

	const previewData: { [key: string]: TableData } = {};

	let excavatorCost: number;
	let excavatorMileage: number;
	let excavatorLifespan: number;
	let excavatorIsUsed: boolean = false;
	let excavatorYearsInOperation: number;
	let excavatorSalvageValue: number;
	let excavatorDepreciationRate: number;

	let dumpCost: number;
	let dumpMileage: number;
	let dumpLifespan: number;
	let dumpIsUsed: boolean = false;
	let dumpYearsInOperation: number;
	let dumpSalvageValue: number;
	let dumpDepreciationRate: number;

	let rollerCost: number;
	let rollerMileage: number;
	let rollerLifespan: number;
	let rollerIsUsed: boolean = false;
	let rollerYearsInOperation: number;
	let rollerSalvageValue: number;
	let rollerDepreciationRate: number;

	let backhoeCost: number;
	let backhoeMileage: number;
	let backhoeLifespan: number;
	let backhoeIsUsed: boolean = false;
	let backhoeYearsInOperation: number;
	let backhoeSalvageValue: number;
	let backhoeDepreciationRate: number;

	let bulldozerCost: number;
	let bulldozerMileage: number;
	let bulldozerLifespan: number;
	let bulldozerIsUsed: boolean = false;
	let bulldozerYearsInOperation: number;
	let bulldozerSalvageValue: number;
	let bulldozerDepreciationRate: number;

	let graderCost: number;
	let graderMileage: number;
	let graderLifespan: number;
	let graderIsUsed: boolean = false;
	let graderYearsInOperation: number;
	let graderSalvageValue: number;
	let graderDepreciationRate: number;

	class Equipment {}

	// let timerID: NodeJS.Timeout | undefined;

	// function throttle(cb: Function, delay: number) {
	// 	if (timerID) return;

	// 	timerID = setTimeout(() => {
	// 		cb();
	// 		timerID = undefined;
	// 	}, delay);
	// }

	// function debounce(cb: Function, delay: number) {
	// 	clearTimeout(timerID);

	// 	timerID = setTimeout(() => cb(), delay);
	// }

	const inputContainer = 'flex w-48 flex-col gap-6';
	const inputHolder = 'relative h-11 w-full min-w-[200px]';
	const inputStyle =
		'form-input border-0 border-b-2 border-neutral-500 bg-inherit text-sm focus:border-black focus:ring-0 dark:placeholder:text-neutral-300 dark:border-neutral-300 dark:focus:border-white';
	const radioInput =
		"before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border text-primary-500 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary-500 checked:before:bg-primary-500 hover:before:opacity-10";
</script>

<svelte:head>
	<title>Equipments Table</title>
</svelte:head>

<div class="mx-auto flex max-w-7xl flex-col items-center px-4 py-8 lg:py-16">
	<h2 class="mb-4 w-full pl-4 text-xl font-bold text-neutral-900">Please complete the form.</h2>
	<h2 class="mb-4 w-full pl-4 text-lg font-bold text-neutral-600">Username: {data.username}</h2>
	<h2 class="mb-4 w-full pl-4 text-lg font-bold text-neutral-600">Company: {data.company}</h2>

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
								<input bind:value={excavatorCost} placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={excavatorMileage} placeholder="Mileage" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={excavatorLifespan} placeholder="Lifespan" class={inputStyle} />
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
								<input bind:value={dumpCost} placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={dumpMileage} placeholder="Mileage" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={dumpLifespan} placeholder="Lifespan" class={inputStyle} />
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
								<input bind:value={rollerCost} placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={rollerMileage} placeholder="Mileage" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={rollerLifespan} placeholder="Lifespan" class={inputStyle} />
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
								<input bind:value={backhoeCost} placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={backhoeMileage} placeholder="Mileage" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={backhoeLifespan} placeholder="Lifespan" class={inputStyle} />
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
								<input bind:value={bulldozerCost} placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={bulldozerMileage} placeholder="Mileage" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={bulldozerLifespan} placeholder="Lifespan" class={inputStyle} />
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
								<input type="text" bind:value={graderCost} placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={graderMileage} placeholder="Mileage" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="dark:bg-[#383838]">
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={graderLifespan} placeholder="Lifespan" class={inputStyle} />
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

	<section class="body-font overflow-hidden text-gray-600">
		<div class="container mx-auto px-5 py-24">
			<div class="-my-8 divide-y-2 divide-gray-100">
				<div class="flex flex-wrap py-8 md:flex-nowrap">
					<div class="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
						<span class="title-font font-semibold text-gray-700">Excavator</span>
					</div>
					<div class="md:flex-grow">
						<h2 class="title-font mb-2 text-2xl font-medium text-gray-900">Excavator's Data</h2>
						<div class="grid grid-cols-1 gap-2 divide-y leading-relaxed dark:divide-neutral-100">
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Cost:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">{excavatorCost ?? 'No input yet!'}</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Mileage:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">{excavatorCost}</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Lifespan:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">{excavatorCost}</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Is used?:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">{excavatorCost}</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Operation years:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">{excavatorCost}</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Salvage Value:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">{excavatorCost}</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Depreciation Rate:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">{excavatorCost}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
