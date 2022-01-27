<script lang="ts">
	import { fade } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import ChipPlatter from '$lib/ChipPlatter.svelte';

	let max: number = 52;
	let type: "number" | "card" = "card";

	const hint = writable('Loading...')

	const playHint = () => {
		let text = $hint;

		if(type === "number") {
			const suitUnicode = /(♠|♥|♣|♦)/g.exec($hint)[1];
			let suit: string;

			switch(suitUnicode) {
				case "♠":
					suit = "Spades";
					break;
				case "♥":
					suit = "Hearts";
					break;
				case "♣":
					suit = "Clubs";
					break;
				case "♦":
					suit = "Diamonds";
					break;
			}

			const indexAbreviated = $hint.replace(/(♠|♥|♣|♦)/g, '');
			let index: string;

			switch(indexAbreviated) {
				case "A":
					index = "Ace";
					break;
				case "J":
					index = "Jack";
					break;
				case "Q":
					index = "Queen";
					break;
				case "K":
					index = "King";
					break;
				default:
					index = indexAbreviated;
					break;
			}

			text = `${index} of ${suit}`
		}

		let utterance = new SpeechSynthesisUtterance(text);
		speechSynthesis.speak(utterance);
	}

	const updatedHint = () => {
		// Autoplay was not reliable due to excessive firing.
	}
</script>

<svelte:head>
	<title>Stack Tutor - Quiz</title>
</svelte:head>

<section in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration:300 }} style="height: calc(100vh - 4rem)" class="flex flex-col justify-center items-center space-y-16">
	<div class="h-1/2 grid place-items-center">
		<button class="p-6 rounded-xl" on:click={playHint}>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
			</svg>
		</button>
	</div>
	<div class="h-full">
		<ChipPlatter type={type} max={max} hintStore={hint} on:updated={updatedHint} />
		
		<div class="flex justify-center items-center space-x-4 pt-8">
			<label for="maximum" class="text-gray-600 dark:text-gray-400">Max</label>
			<input id="maxiumum" type="number" bind:value={max} min="1" max="52" class="bg-indigo-50 py-3 px-1 text-center rounded-lg border-indigo-400 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">

			<label for="type" class="text-gray-600 dark:text-gray-400 pl-4">Type</label>
			<select id="type" bind:value={type} min="1" max="52" class="bg-indigo-50 py-3 px-3 text-center rounded-lg border-indigo-400 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">\
				<option value="card">Number to Card</option>
				<option value="number">Card to Number</option>
			</select>
		</div>
	</div>
</section>