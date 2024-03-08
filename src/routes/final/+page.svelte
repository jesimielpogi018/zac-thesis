<script lang="ts">
	import type { PageData } from './$types';
	import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from 'flowbite-svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Final</title>
</svelte:head>

<div class="container mx-auto px-5 py-24">
	<section class="body-font overflow-hidden text-gray-600">
		<h1 class="title-font mb-5 text-3xl font-medium dark:text-neutral-200">Finalize Output</h1>

		<Table divClass="rounded-sm relative overflow-x-auto w-full">
			<TableHead>
				<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Equipment</TableHeadCell>
				<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">DDB</TableHeadCell>
				<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Book values</TableHeadCell>
				<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Accumulated Depreciation</TableHeadCell>
				<TableHeadCell class="dark:bg-[#212121] dark:text-neutral-100">Output Depreciation Rate</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				{#each Object.entries(data.data) as [equipment, values]}
					<TableBodyRow>
						<TableBodyCell class="dark:bg-[#383838]">{equipment.toLocaleUpperCase()}</TableBodyCell>
						<TableBodyCell class="dark:bg-[#383838]">{values.DDB}</TableBodyCell>
						<TableBodyCell class="dark:bg-[#383838]">{values.BOOK_VALUE}</TableBodyCell>
						<TableBodyCell class="dark:bg-[#383838]">{values.ACCUMULATED_DEPRECIATION}</TableBodyCell>
						<TableBodyCell class="dark:bg-[#383838]">{values.OUTPUT_DEPRECIATION_RATE}</TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</section>
</div>
