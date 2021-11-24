<script lang="ts">
	export let card: string | undefined;
	export let ariaHidden: "true" | "false" = "false";
	export let style: string = "";
	export let showAdditional: boolean;
</script>

<div style={style} class="absolute grid place-items-center w-full h-full" class:invisible={card === undefined}>
	<div class="bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-none w-4/5 h-4/5 grid place-items-center rounded-2xl">
		<strong class="{!showAdditional ? 'text-7xl xl:text-8xl':'text-5xl xl:text-6xl'} font-semibold tracking-widest text-indigo-600 dark:text-indigo-400" aria-hidden={ariaHidden}>{card}</strong>
	</div>
</div>