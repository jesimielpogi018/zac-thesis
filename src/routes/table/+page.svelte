<script lang="ts">
	import {
		Button,
		Radio,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
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

	let excavatorCostElement: HTMLInputElement;
	let excavatorMileageElement: HTMLInputElement;
	let excavatorLifespanElement: HTMLInputElement;
	let excavatorIsUsedElement: HTMLInputElement;
	let excavatorYearsInOperationElement: HTMLInputElement;
	let excavatorSalvageValueElement: HTMLInputElement;
	let excavatorDepreciationRateElement: HTMLInputElement;
	let excavatorBtn: HTMLInputElement;
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
			<TableHeadCell>Action</TableHeadCell>
		</TableHead>
		<TableBody tableBodyClass="divide-y">
			{#if data.equipments.includes('excavator')}
				<TableBodyRow>
					<TableBodyCell>Excavator</TableBodyCell>
					<TableBodyCell>
						<input bind:this={excavatorCostElement} class="input border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input bind:this={excavatorMileageElement} class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input bind:this={excavatorLifespanElement} class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<Radio name="example">No</Radio>
						<Radio name="example" checked={true}>Yes</Radio>
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<Button>Save</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/if}

			{#if data.equipments.includes('dump')}
				<TableBodyRow>
					<TableBodyCell>Dump Truck</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<Radio name="example">No</Radio>
						<Radio name="example" checked={true}>Yes</Radio>
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<Button>Save</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/if}

			{#if data.equipments.includes('roller')}
				<TableBodyRow>
					<TableBodyCell>Roller/Compactor</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<Radio name="example">No</Radio>
						<Radio name="example" checked={true}>Yes</Radio>
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<Button>Save</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/if}

			{#if data.equipments.includes('backhoe')}
				<TableBodyRow>
					<TableBodyCell>Backhoe</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<Radio name="example">No</Radio>
						<Radio name="example" checked={true}>Yes</Radio>
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<Button>Save</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/if}

			{#if data.equipments.includes('bulldozer')}
				<TableBodyRow>
					<TableBodyCell>Bulldozer</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<Radio name="example">No</Radio>
						<Radio name="example" checked={true}>Yes</Radio>
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<Button>Save</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/if}

			{#if data.equipments.includes('grader')}
				<TableBodyRow>
					<TableBodyCell>Grader</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<Radio name="example">No</Radio>
						<Radio name="example" checked={true}>Yes</Radio>
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<input class="border-inherit bg-inherit" />
					</TableBodyCell>
					<TableBodyCell>
						<Button>Save</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/if}
		</TableBody>
	</Table>
</div>
