<script lang="ts">
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";
  import ChipPlatter from "$lib/NeighborChipPlatter.svelte";

  let max: number = 52;

  const hint = writable("Loading...");
</script>

<svelte:head>
  <title>Stack Tutor - Quiz</title>
</svelte:head>

<section
  in:fade={{ duration: 300, delay: 300 }}
  out:fade={{ duration: 300 }}
  style="height: calc(100vh - 4rem)"
  class="flex flex-col justify-center items-center space-y-16"
>
  <div class="h-1/2 grid place-items-center">
    <div
      class="scale-[0.6] sm:scale-[0.8] md:scale-100 flex space-x-12 items-center dark:text-white font-semibold tracking-widest"
    >
      <div class="text-4xl opacity-50">{$hint?.cards?.[0] ?? ""}</div>
      <div class="text-6xl opacity-75">{$hint?.cards?.[1] ?? ""}</div>
      <h1 class="text-[8rem] px-6 text-indigo-600 dark:text-indigo-400">?</h1>
      <div class="text-6xl opacity-75">{$hint?.cards?.[3] ?? ""}</div>
      <div class="text-4xl opacity-50">{$hint?.cards?.[4] ?? ""}</div>
    </div>
  </div>
  <div class="h-full">
    <ChipPlatter {max} hintStore={hint} />

    <div class="flex justify-center items-center space-x-4 pt-8">
      <label for="maximum" class="text-gray-600 dark:text-gray-400">Max</label>
      <input
        id="maxiumum"
        type="number"
        bind:value={max}
        min="1"
        max="52"
        class="bg-indigo-50 py-3 px-1 text-center rounded-lg border-indigo-400 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
      />
    </div>
  </div>
</section>
