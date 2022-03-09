# Stack Tutor

Stack Tutor is a web app built using [SvelteKit](https://github.com/sveltejs/kit) and [TailwindCSS](https://github.com/tailwindlabs/tailwindcss) that helps magicians learn deck stacks such as [mnemonica](https://www.conjuringarchive.com/list/book/2498) or [aronson](https://www.conjuringarchive.com/list/book/1634).

This app is currently hosted at: **[https://stacktutor.gavhern.com](https://stacktutor.gavhern.com)**

If you notice a bug or have feedback, feel free to add an issue on the issues panel.

### Notes for contributors

Thank for for your interest in contributing! Here are some organizational practices this repository adheres to:

- Each "game" is its own route in the `src/routes` directory, as a svelte component.
- If you're adding a new game, create a new route for your game and write it as a svelte component. Each route should be wrapped in a `<section>` with the `in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration:300 }}` animation directives.
- Write your component in **TypeScript** and use **Tailwind** to do most/all of your styling (sticking to the design patterns that the rest of the repo follows).
- Make sure you add your game to the `src/routes/index.svelte` file before committing your pull request so it appears on the home page. You will also need to find an SVG icon for the card component, which should be added in `src/lib/GameCard.svelte` in the `icons` object. This application uses the [Hero Icons](https://heroicons.com/) library, so its best to first look there. If you can't find a good match, feel free to look elsewhere, as long as the icon you find fits in. The object value should be the draw property on the SVG's path (`d` attribute in the XML).

If you would like to add a new default stack, that can simply be done in the `src/lib/defaultStacks.json` file, where you can create a new JSON object that maps out each card to a number (1-52). You can then add a new `<option>` to the `<select>` menu in `src/routes/index.svelte` that contains the name of the stack, giving it a value that matches the key name in the JSON file.

If you have any further questions about the codebase, feel free to contact me!
