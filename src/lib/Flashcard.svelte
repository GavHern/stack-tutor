<script lang="ts">
	export let ariaHidden: "true" | "false" = "false";
	export let style: string = "";
</script>

<div style={style} class="absolute grid place-items-center w-full h-full">
	<div class="bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-none w-4/5 h-4/5 grid place-items-center rounded-2xl">
		<strong class="text-7xl xl:text-8xl font-semibold tracking-widest text-indigo-600 dark:text-indigo-400" aria-hidden={ariaHidden}><slot></slot></strong>
	</div>
</div>