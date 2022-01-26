<script lang="ts">
	import GameCard from '$lib/GameCard.svelte';
	import { fade } from 'svelte/transition';

	let selectedStack = 'mnemonica';
	//$: localStorage.stack = selectedStack;
</script>

<svelte:head>
	<title>Stack Tutor - Home</title>
</svelte:head>

<div in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration:300 }}>
	<section>
		<h1 class="text-3xl font-semibold tracking-wide text-center pb-2 pt-4 dark:text-white">Stack Tutor</h1>
		<div class="flex justify-center py-2">
			<select bind:value={selectedStack} class="bg-indigo-50 py-3 pl-4 pr-10 rounded-lg border-indigo-400 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
				<option value="mnemonica">Mnemonica Stack</option>
				<option value="aronson" disabled>Aronson Stack</option>
				<option value="custom" disabled>Custom Stack (Coming Soon)</option>
			</select>
		</div>
	</section>
	
	<section class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
		<GameCard href="/stack" name="Stack" id="stack" icon="list">See the full stack in groups of 13.</GameCard>
		<GameCard href="/flashcards" name="Flashcards" id="flashcards" icon="flashcards">Learn (or quiz yourself on) each card using flashcards.</GameCard>
		<GameCard href="/next-card" name="Next Card" id="nextcard" icon="next">Go through the whole stack, in order.</GameCard>
		<GameCard href="/guess" name="Guess" id="guess" icon="guess">Guess either the card to a corrosponding number or the number to a corrosponding card.</GameCard>
	</section>
</div>