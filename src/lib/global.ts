import { writable } from "svelte/store";
import { writable as lsWritable } from 'svelte-local-storage-store';

export const theme = lsWritable('dark', false);
export const chosenStack = lsWritable('stack', "mnemonica");

export const page = writable("home");