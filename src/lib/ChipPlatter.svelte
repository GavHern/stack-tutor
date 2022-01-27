<script lang="ts">
	import defaultStacks from '$lib/defaultStacks.json';
	import { chosenStack } from "$lib/global";
	import { onMount, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let type: "card" | "number";
	export let hintStore: any;
	export let max: number;

	let stack = defaultStacks.mnemonica;

	onMount(() => {
		stack = defaultStacks?.[$chosenStack];
	})

	let render = true;

	$: reset(max);
	$: reset(type);

	const reset = (_) => {
		correctAnswer = chooseRandom()
		options = generateList();

		render = false;
		setTimeout(() => render = true, 1);
	}

	const chooseRandom = () => {
		const index = Math.floor(Math.random() * max) + 1;
		const card = stack[index];

		dispatch('updated');

		if(type === "card") {
			hintStore.set(index);
			return card;
		} else {
			hintStore.set(card);
			return index;
		}
	}

	let correctAnswer = chooseRandom();

	const generateList = () => {
		let deck = (type === "card") ? Object.values(stack) : Object.keys(stack).slice(0, max); // Get either all the cards in the stack or all the numbers (1-52 but flexible for shorter or longer stacks)
		let filteredDeck = deck.filter(item => item != correctAnswer); // Remove the correct answer as a possibility
		let shuffledDeck = filteredDeck.sort(() => 0.5 - Math.random()); // Shuffle the list
		let selected = shuffledDeck.slice(0, 5); // Get the first 5 items of the shuffled list
		let options = selected.map(i => ({ value: i, correct: false, status: 'indeterminate' })); // Label all items as incorrect
		let randomIndex = Math.floor(Math.random() * (5 - 0 + 1)); // Generate a random index to insert the correct item
		options.splice(randomIndex, 0, { value: correctAnswer, correct: true, status: 'indeterminate' }); // Insert the correct item into the list

		return options;
	}

	let options = generateList();
	
	const submitAnswer = (answer) => {
		// Regenerate list after 2 seconds
		setTimeout(reset, 1000);

		const idx = options.findIndex(obj => obj.value === answer)
		if(options[idx].correct) return options[idx].status = 'correct';
		
		options[idx].status = 'incorrect';
		const correctIdx = options.findIndex(obj => obj.correct);
		options[correctIdx].status = 'correct';
	}
</script>

{#if render}
	<div class="grid grid-rows-2 grid-cols-3 gap-4 sm:gap-8">
		{#each options as option}
			<button on:click={e => { submitAnswer(option.value) }} data-status={option.status} class="chip h-20 w-20 sm:w-24 sm:h-24 xl:h-32 xl:w-32 text-3xl sm:text-4xl xl:text-5xl dark:text-gray-300 font-semibold tracking-widest border dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-2 ring-indigo-600 dark:ring-indigo-400 ring-offset-[0.15rem] dark:ring-offset-gray-900 transition-colors duration-300">
				{option.value}
			</button>
		{/each}
	</div>
{/if}

<style>
	[data-status="correct"] {
		background-color: #34D399 !important;
		color: #000000 !important;
	}

	[data-status="incorrect"] {
		background-color: #F87171 !important;
		color: #000000 !important;
	}
</style>