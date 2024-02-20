<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
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
	let bulldozerIsUsedYes: boolean;
	let bulldozerYearsInOperation: number;
	let bulldozerSalvageValue: number;
	let bulldozerDepreciationRate: number;

	let graderCost: number;
	let graderMileage: number;
	let graderLifespan: number;
	let graderIsUsedYes: boolean;
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
		'border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full border-b bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline outline-0 transition-all focus:border-gray-900 focus:outline-0 disabled:border-0';
	const radioInput =
		"before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border text-primary-500 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary-500 checked:before:bg-primary-500 hover:before:opacity-10";
</script>

<svelte:head>
	<title>Equipments Table</title>
</svelte:head>

<div class="mx-auto flex max-w-7xl flex-col items-center px-4 py-8 lg:py-16">
	<h2 class="mb-4 text-xl font-bold text-neutral-900">Please complete the form.</h2>
	<h2 class="mb-4 text-lg font-bold text-neutral-600">Username: {data.username}</h2>
	<h2 class="mb-4 text-lg font-bold text-neutral-600">Company: {data.company}</h2>

	<Table divClass="relative overflow-x-auto w-full">
		<TableHead>
			<TableHeadCell>Equipment</TableHeadCell>
			<TableHeadCell>Cost of Equipment</TableHeadCell>
			<TableHeadCell>Mileage</TableHeadCell>
			<TableHeadCell>Lifespan</TableHeadCell>
			<TableHeadCell>Is used?</TableHeadCell>
			<TableHeadCell>Years in Operation</TableHeadCell>
			<TableHeadCell>Salvage Value</TableHeadCell>
			<TableHeadCell>Depreciation Rate</TableHeadCell>
		</TableHead>
		<TableBody tableBodyClass="divide-y">
			{#if data.equipments.includes('excavator')}
				<TableBodyRow>
					<TableBodyCell>Excavator</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={excavatorCost} placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={excavatorMileage} placeholder="Mileage" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={excavatorLifespan} placeholder="Lifespan" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
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
					<TableBodyCell>
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
					<TableBodyCell>
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
					<TableBodyCell>
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
					<TableBodyCell>Dump Truck</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={dumpCost} placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={dumpMileage} placeholder="Mileage" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={dumpLifespan} placeholder="Lifespan" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
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
					<TableBodyCell>
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
					<TableBodyCell>
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
					<TableBodyCell>
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
					<TableBodyCell>Roller/Compactor</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={rollerCost} placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={rollerMileage} placeholder="Mileage" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={rollerLifespan} placeholder="Lifespan" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
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
					<TableBodyCell>
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
					<TableBodyCell>
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
					<TableBodyCell>
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
					<TableBodyCell>Backhoe</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={backhoeCost} placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={backhoeMileage} placeholder="Mileage" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input bind:value={backhoeLifespan} placeholder="Lifespan" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
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
					<TableBodyCell>
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
					<TableBodyCell>
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
					<TableBodyCell>
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
					<TableBodyCell>
						<button type="button" class="variant-filled-primary btn">Save</button>
					</TableBodyCell>
				</TableBodyRow>
			{/if}

			{#if data.equipments.includes('bulldozer')}
				<TableBodyRow>
					<TableBodyCell>Bulldozer</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class="flex gap-2">
							<div class="inline-flex items-center">
								<label
									class="relative flex cursor-pointer items-center rounded-full p-3"
									for="on"
									data-ripple-dark="true"
								>
									<input type="radio" class={radioInput} id="on" />
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="on">
									Yes
								</label>
							</div>
							<div class="inline-flex items-center">
								<label class="relative flex cursor-pointer items-center rounded-full p-3" for="off">
									<input type="radio" class={radioInput} id="off" />
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="off">
									No
								</label>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<button type="button" class="variant-filled-primary btn">Save</button>
					</TableBodyCell>
				</TableBodyRow>
			{/if}

			{#if data.equipments.includes('grader')}
				<TableBodyRow>
					<TableBodyCell>Grader</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class="flex gap-2">
							<div class="inline-flex items-center">
								<label
									class="relative flex cursor-pointer items-center rounded-full p-3"
									for="on"
									data-ripple-dark="true"
								>
									<input type="radio" class={radioInput} id="on" />
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="on">
									Yes
								</label>
							</div>
							<div class="inline-flex items-center">
								<label class="relative flex cursor-pointer items-center rounded-full p-3" for="off">
									<input type="radio" class={radioInput} id="off" />
									<CheckboxRipple />
								</label>
								<label class="mt-px cursor-pointer select-none font-light text-gray-700" for="off">
									No
								</label>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div class={inputContainer}>
							<div class={inputHolder}>
								<input placeholder="Cost" class={inputStyle} />
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<button type="button" class="variant-filled-primary btn">Save</button>
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
						<span class="title-font font-semibold text-gray-700">CATEGORY</span>
						<span class="mt-1 text-sm text-gray-500">12 Jun 2019</span>
					</div>
					<div class="md:flex-grow">
						<h2 class="title-font mb-2 text-2xl font-medium text-gray-900">
							Bitters hashtag waistcoat fashion axe chia unicorn
						</h2>
						<p class="leading-relaxed">
							Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave
							ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha
							lumbersexual pork belly polaroid hoodie portland craft beer.
						</p>
						<a class="mt-4 inline-flex items-center text-indigo-500"
							>Learn More
							<svg
								class="ml-2 h-4 w-4"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M5 12h14"></path>
								<path d="M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
				<div class="flex flex-wrap py-8 md:flex-nowrap">
					<div class="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
						<span class="title-font font-semibold text-gray-700">CATEGORY</span>
						<span class="mt-1 text-sm text-gray-500">12 Jun 2019</span>
					</div>
					<div class="md:flex-grow">
						<h2 class="title-font mb-2 text-2xl font-medium text-gray-900">
							Meditation bushwick direct trade taxidermy shaman
						</h2>
						<p class="leading-relaxed">
							Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave
							ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha
							lumbersexual pork belly polaroid hoodie portland craft beer.
						</p>
						<a class="mt-4 inline-flex items-center text-indigo-500"
							>Learn More
							<svg
								class="ml-2 h-4 w-4"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M5 12h14"></path>
								<path d="M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
				<div class="flex flex-wrap py-8 md:flex-nowrap">
					<div class="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
						<span class="title-font font-semibold text-gray-700">CATEGORY</span>
						<span class="text-sm text-gray-500">12 Jun 2019</span>
					</div>
					<div class="md:flex-grow">
						<h2 class="title-font mb-2 text-2xl font-medium text-gray-900">
							Woke master cleanse drinking vinegar salvia
						</h2>
						<p class="leading-relaxed">
							Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave
							ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha
							lumbersexual pork belly polaroid hoodie portland craft beer.
						</p>
						<a class="mt-4 inline-flex items-center text-indigo-500"
							>Learn More
							<svg
								class="ml-2 h-4 w-4"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M5 12h14"></path>
								<path d="M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
