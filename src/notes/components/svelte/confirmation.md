<script setup>
	import GradientText from '/components/GradientText.vue'
</script>
<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">

<br /><center><img src='https://i.imgur.com/tLjkD58.png' /></center><br />

# <GradientText from='#f12711' to='#f5af19' font='Oswald'>Confirmation Prompt</GradientText>

## Explaination

This is a pretty simple Svelte component that allows you to prompt the user to either confirm or decline an operation. On confirm, the
callback function supplied will be executed, on decline nothing will be executed. Comes with optional progress bar / confirm timer. Feel free to use this component for free! Documentation below!

## Source

```html
<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { fly } from "svelte/transition";
	import { tweened, type Tweened } from "svelte/motion";
	import { cubicInOut } from "svelte/easing";
	type TimerOptions = {
		timer?: Tweened<number> | null;
		duration?: number;
		easing?: (t: number) => number;
		prompt?: string;
	};
	let itemId: string | null = null;
	let itemText: string | null = null;
	let open: boolean = false;
	export const toggle = (id: string, itemDesc?: string) => {
		open = !open;
		itemId = itemId ? null : id;
		itemText = itemDesc !== undefined ? itemDesc : null;
	};

	export let options: TimerOptions = {};
	options = {
		timer: options.timer ?? tweened(0),
		duration: options.duration ?? 1000,
		easing: options.easing ?? cubicInOut,
		prompt: options.prompt ?? "Please Confirm Your Choice...",
	};
	const { timer, easing, duration, prompt } = options;
	export function reset() {
		timer?.set(0, { duration: 0 });
		open = false;
		itemId = null;
	}
	const dispatch = createEventDispatcher<{
		confirmation: string;
		decline: null;
		error: string;
	}>();
	const confirm = () => {
		if (!itemId) dispatch("error", "No Item ID Set");
		if (timer) {
			timer.set(100, { duration, easing }).then(() => {
				dispatch("confirmation", itemId!);
				reset();
			});
		} else {
			dispatch("confirmation", itemId!);
			reset();
		}
	};
	const decline = () => {
		dispatch("decline");
		reset();
	};
</script>

{#if open && itemId} {#if $timer && $timer > 0}
<div class="p-4">
	<progress
		max="{100}"
		value="{$timer}"
	/>
</div>
{/if}
<div
	transition:fly
	class="alert variant-outline-warning"
>
	<div class="alert-message">
		{prompt}
		<b class="px-4 font-extrabold">{@html itemText ?? ''}</b>
	</div>
	<div class="alert-actions">
		<button
			on:click="{confirm}"
			class="btn variant-outline-tertiary"
		>
			Confirm
		</button>
		<button
			on:click="{decline}"
			class="btn variant-outline-error"
		>
			Decline
		</button>
	</div>
</div>
{/if}
```

## Usage

**1)** You must bind the confirmation component to access `toggle()` and `reset()`

**2)** The component will fire a `confirmation` event when the user clicks confirm, and a `decline` event if declined. There is also
an `error` event. For the `confirmation` event, the event object property `e.details` will be the `itemId` given in the `toggle()` method.

```html
<script lang="ts">
	import Confirmation from "./Confirmation";
	let confirmation: Confirmation;
	const handleConfirm = (e: CustomEvent<string>) => {
		console.log("Run your function to delete item with ID: e.details");
	};
	const handleDecline = () => {
		console.log("User pressed decline");
	};
</script>

<Confirmation
	bind:this="{confirmation}"
	on:confirmation="{handleConfirm}"
	on:decline="{handleDecline}"
/>

<!-- Imagine a List of Data from a Database -->
{#each items as i}
    <p>Object #{i.id} <button on:click={ () => confirmation.toggle(i.id, i.title) }>Delete</button></p>
{/each}
```

## Documentation

### Component Properties

`options`:

- `timer`: The `svelte/motion` function to use, defaults to `tweened(0)` can be set to `null` to disable the timer
- `duration`: The amount of time in MS for the timer, after this duration the callback is executed
- `easing`: Easing function from `svelte/easing` defaults to `cubicInOut()`
- `prompt`: The text prompt to display in the prompt

**Methods**:

- `toggle(id: string, itemDesc?:string)`:
  - `id`: The index being used for the prompt, i.e the item to delete, update etc, will be supplied to the `confirmation` event.
  - `itemDesc`: An optional item description to show in the prompt: i.e "Are you sure you want to delete (desc)"
- `reset()`: Resets the prompt clearing it, and hiding it.
