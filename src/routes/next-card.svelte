<script lang="ts">
	import { fade, crossfade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import defaultStacks from '$lib/defaultStacks.json';
	import { chosenStack } from "$lib/global";
	import { onMount } from 'svelte';

	let stack = Object.values(defaultStacks.mnemonica);

	onMount(() => {
		stack = Object.values(defaultStacks?.[$chosenStack])
	})

	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 500),
		easing: quintOut,

		fallback: scale
	});

	let position = 1;

	const pickRandomCards = (correct) => {
		let shuffled =  Object.values(stack)
										 		  .filter(c => c !== correct && c !== stack[position-2])
										 		  .sort(() => 0.5 - Math.random());

		console.log(shuffled);
		shuffled.length = 3;

		return [correct, ...shuffled].sort(() => 0.5 - Math.random())
	}

	let correct = []
	let guesses = pickRandomCards(stack[position-1]);

	const submitGuess = (guess, e) => {
		if(guess !== stack[position-1]) {
			e.target.setAttribute('disabled', '');
			shake = true; setTimeout(() => { shake = false }, 400)
			return;
		}

		guesses = []
		correct = [stack[position-1]]
		position++;
		
		setTimeout(() => {
			if(position <= 52) {
				guesses = pickRandomCards(stack[position-1]);
			}
		}, 550)
	}

	let restartDisabled = false;

	const restart = () => {
		restartDisabled = true;
		position = 1;
		correct = [];
		guesses = [];
		setTimeout(() => {
			guesses = pickRandomCards(stack[position-1]);
			restartDisabled = false;
		}, 550)
	}

	let shake = false;
</script>

<svelte:head>
	<title>Stack Tutor - Next Card</title>
</svelte:head>

<section in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration:300 }} class="text-center h-full">

	<div class="flex flex-col min-h-full">
		<div class="h-[35vh] grid place-items-center">
			{#each correct as correctItem (correctItem)}
			{@const crossfadeParameters = { key: correctItem }}
				<div in:receive|local={crossfadeParameters} out:send|local={crossfadeParameters} class="absolute bg-indigo-100 dark:bg-gray-700 text-black chip h-20 w-20 sm:w-24 sm:h-24 xl:h-32 xl:w-32 text-3xl sm:text-4xl xl:text-5xl dark:text-gray-300 font-semibold tracking-widest border dark:border-gray-700 rounded-3xl grid place-items-center">
					{correctItem}
				</div>
				
				{:else}

				<p transition:fade={{ duration: 150 }} class="absolute text-gray-800 dark:text-gray-300 text-xl font-semibold tracking-wide opacity-50">Click an answer choice below to start!</p>
			{/each}
		</div>
		{#if position <= 52}
			<div transition:fade={{ duration: 400 }}>
				<h2 class="text-gray-700 dark:text-gray-300 text-lg font-black tracking-wider uppercase pb-4 opacity-70 transition-opacity">Possible Choices</h2>
				<div class="mx-8">
					<div class:shake={shake} class="aspect-square grid place-items-center grid-cols-2 sm:grid-cols-4 w-max sm:w-full mx-auto px-4 sm:px-0 pb-[11.5rem] sm:pb-4 gap-2 h-48 border dark:border-gray-800 py-4 rounded-3xl">
						{#each guesses as guess (guess)}
							{@const crossfadeParameters = { key: guess }}
							<button in:receive|local={crossfadeParameters} out:send|local={crossfadeParameters} on:click={(e) => { submitGuess(guess, e) }} class="chip h-20 w-20 sm:h-32 sm:w-32 text-3xl sm:text-5xl dark:text-gray-300 font-semibold tracking-widest border dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-2 ring-indigo-600 dark:ring-indigo-400 ring-offset-[0.15rem] dark:ring-offset-gray-900 transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none disabled:border-0">
								{guess}
							</button>
						{/each}
					</div>
				</div>
			</div>
		{:else}
			<div in:fade={{ delay: 400, duration: 300 }} class="grid place-items-center">
				<p class="text-4xl font-black tracking-wider dark:text-white pb-8">Complete!</p>

				<button on:click={restart} class="bg-indigo-500 p-4 rounded-md text-white font-semibold tracking-wide uppercase flex items-center space-x-3 shadow-md dark:shadow-none focus:ring-2 ring-indigo-400 ring-offset-2 ring-offset-white dark:ring-offset-gray-900">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
					</svg>
					<span>Restart</span>
				</button>
			</div>
		{/if}
	</div>

	<div class="absolute inset-x-0 bottom-8 flex justify-center space-x-6">
		<p class="text-4xl font-bold tracking-wide dark:text-gray-200">Position: {position > 52 ? 52 : position}</p>
		<button on:click={restart} disabled={restartDisabled} class="disabled:opacity-25 disabled:rotate-[1.2turn] disabled:scale-75 transition-all duration-500">
			<svg aria-label="Restart" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-700 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
			</svg>
		</button>
	</div>

</section>

<style>
	.aspect-square {
		aspect-ratio: 1 / 1;
	}

	.shake {
		animation: shake 400ms linear;
		animation-iteration-count: 1;
	}

	@keyframes shake {
  0% {
    -webkit-transform: translateX(0);
  }

  20% {
    -webkit-transform: translateX(-10px);
  }

  40% {
    -webkit-transform: translateX(10px);
  }

  60% {
    -webkit-transform: translateX(-10px);
  }

  80% {
    -webkit-transform: translateX(10px);
  }

  100% {
    -webkit-transform: translateX(0);
  }
}
</style>