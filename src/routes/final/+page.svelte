<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Final</title>
</svelte:head>

<div class="container mx-auto px-5 py-24">
	<section class="body-font overflow-hidden text-gray-600">
		{#each Object.entries(data.data) as [equipment, values]}
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
									DDB:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">
									{values.DDB}
								</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Book Value:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">
									{values.BOOK_VALUE}
								</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Accumulated Depreciation:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">
									{values.ACCUMULATED_DEPRECIATION}
								</p>
							</div>
							<div class="grid w-full grid-cols-2 gap-2">
								<p class="dark:text-neutral-100">
									Output Depreciation Rate:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								</p>
								<p class="dark:text-neutral-100">
									{values.OUTPUT_DEPRECIATION_RATE}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</section>
</div>
