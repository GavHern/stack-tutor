<script lang="ts">
	import GameCard from '$lib/GameCard.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { chosenStack } from '$lib/global';

	let select;

	onMount(() => { select.value = $chosenStack})

	const updateSelect = () => {
		chosenStack.set(select.value)
	}
</script>

<svelte:head>
	<title>Stack Tutor - Home</title>
</svelte:head>

<div in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration:300 }}>
	<section>
		<h1 class="text-3xl font-semibold tracking-wide text-center pb-2 pt-4 dark:text-white">Stack Tutor</h1>
		<div class="flex justify-center py-2">
			<select on:change={updateSelect} bind:this={select} class="bg-indigo-50 py-3 pl-4 pr-10 rounded-lg border-indigo-400 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
				<option value="mnemonica">Mnemonica Stack</option>
				<option value="aronson">Aronson Stack</option>
				<option value="custom" disabled>Custom Stack (Coming Soon)</option>
			</select>
		</div>
	</section>
	
	<section class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 pb-20 gap-4">
		<GameCard href="/stack" name="Stack" id="stack" icon="list">See the full stack in groups of 13.</GameCard>
		<GameCard href="/flashcards" name="Flashcards" id="flashcards" icon="flashcards">Learn (or quiz yourself on) each card using flashcards.</GameCard>
		<GameCard href="/next-card" name="Next Card" id="nextcard" icon="next">Go through the whole stack, in order.</GameCard>
		<GameCard href="/quiz" name="Quiz" id="quiz" icon="quiz">Guess either the card to a corrosponding number or the number to a corrosponding card.</GameCard>
		<GameCard href="/listen" name="Listen" id="listen" icon="listen">A version of "Quiz" where you hear a named card or number rather than seeing it.</GameCard>
		<GameCard href="/neighbor" name="Neighbor" id="neighbor" icon="neighbor">With a given card, select either the preceeding or subesquent card in the stack.</GameCard>
	</section>

	<footer class="fixed p-4 inset-0 top-auto bg-gray-100 dark:bg-gray-800 text-center font-semibold dark:text-gray-300">
		Made by <a href="https://gavhern.com" class="text-indigo-500 dark:text-indigo-300 underline">Gav Hern</a> <span class="opacity-50 text-indigo-700 dark:text-indigo-300 px-2">|</span> <a href="https://github.com/GavHern/stack-tutor" class="text-indigo-500 dark:text-indigo-300 underline">Fork me on GitHub</a>!
	</footer>
</div>