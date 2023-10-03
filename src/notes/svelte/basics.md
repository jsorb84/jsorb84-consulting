---
title: Svelte I - Basics
---

<script setup>
	import GradientText from '/components/GradientText.vue'
</script>
<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">

<center><img src='https://i.imgur.com/tLjkD58.png' /></center><br />

# <GradientText from='#f12711' to='#f5af19' font='Oswald'>Svelte I - Basics</GradientText>

## Declarations

**Definition**: `An element that changes in response to a SEPERATE variable changing`

```js
let count = 0;
$: doubled = count * 2;
// doubled will change when count changes.
```

## Component Props

**Nested.svelte**:

```js
export let myProp;
```

**App.svelte**:

```jsx
<Nested myProp={123} />
```

### Spread Props

```jsx
<Nested name={pkg.name} speed={pkg.speed} />
// Can be written as
<Nested {...pkg} />
```

## If/Else Blocks

**Start**: `#`
**Middle**: `:`
**End**: `/`

```jsx
{#if count > 10}
	<p>11+</p>
{:else} // also (:else if)
	<p>Else</p>
{/if}
```

### Each Blocks

```jsx
{#each colors as color}
	....
{/each}

// GET The Index
{#each colors as color, i}
	...
{/each}

// DEFINE The Key
{#each colors as color (color.someId)}
	...
{/each}
```

### Await Blocks

```jsx
{#await promise}
	<p>...Waiting</p>
{:then number}
	<p>The Number is {number}</p>
{:catch error}
	...
{/await}

// Can also write
{#await promise then number}
	...
{/await}
```

## Events & Event Modifiers

### Events

`on:event`

```jsx
<button on:click={() => console.log("Clicked")}>...</button>
```

### Event Modifiers

`on:click|once|self...`

- `preventDefault` — calls `event.preventDefault()` before running the handler. Useful for client-side form handling, for example.
- `stopPropagation` — calls `event.stopPropagation()`, preventing the event reaching the next element
- `passive` — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)
- `nonpassive` — explicitly set `passive: false`
- `capture` — fires the handler during the [_capture_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_capture) phase instead of the [_bubbling_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling) phase
- `once` — remove the handler after the first time it runs
- `self` — only trigger handler if event.target is the element itself
- `trusted` — only trigger handler if `event.isTrusted` is `true`, meaning the event was triggered by a user action rather than because some JavaScript called `element.dispatchEvent(...)`

You can chain modifiers together, e.g. `on:click|once|capture={...}`.

## Component Events

`createEventDispatcher()`
`dispatch("eventName", "message / payload")`

> `createEventDispatcher` must be called when the component is first instantiated — you can't do it later inside e.g. a `setTimeout` callback. This links `dispatch` to the component instance.

**Component.svelte**

```html
<script lang="ts">
	import { createEventDispatcher, type EventDispatcher } from "svelte";
	const dispatch: EventDispatcher<any> = createEventDispatcher();
	function sayHello() {
		dispatch("message", "Wassup World!");
	}
</script>
<button on:click="{sayHello}">Say Hello</button>
```

**App.svelte**

```html
<Component on:message={(msg) => console.log(msg)} />
```

### Event Forwarding

If you want to listen to an event on some deeply nested component, the intermediate components must _forward_ the event.

`on:message` event directive without a value means 'forward all `message` events'.

`<Component on:message />`

## Bindings

### Text Inputs

`bind:value={variable}`

```html
<script lang="ts">
	let name = "Josh";
</script>
<input bind:value="{name}" />
```

> Types are resolved for you by binding, i.e you can make a text input return a numeric value instead of string "4" vs 4
>
> ```html
> <input
> 	type="number"
> 	bind:value="{a}"
> />
> // Returns a not "a"
> ```

### Checkbox Inputs

```html
<input
	type="checkbox"
	bind:checked="{yes}"
/>
```

### Group Binding

```html
<input
	type="checkbox"
	name="flavours"
	bind:group="{flavours}"
/>
```

## Lifecycle

> Every component has a _lifecycle_ that starts when it is created, and ends when it is destroyed. There are a handful of functions that allow you to run code at key moments during that lifecycle. The one you'll use most frequently is `onMount`, which runs after the component is first rendered to the DOM.

```html
<script lang="ts">
	import { onMount } from 'svelte;

	onMount(() => {
		....
	});
</script>
```

`beforeUpdate` = Runs BEFORE DOM Updated
`afterUpdate` = Runs AFTER DOM Updated

> The `beforeUpdate` function schedules work to happen immediately before the DOM is updated. `afterUpdate` is its counterpart, used for running code once the DOM is in sync with your data.
> Together, they're useful for doing things imperatively that are difficult to achieve in a purely state-driven way, like updating the scroll position of an element.

The `tick` function is unlike other lifecycle functions in that you can call it any time, not just when the component first initialises. It returns a promise that resolves as soon as any pending state changes have been applied to the DOM (or immediately, if there are no pending state changes).

When you update component state in Svelte, it doesn't update the DOM immediately. Instead, it waits until the next _microtask_ to see if there are any other changes that need to be applied, including in other components. Doing so avoids unnecessary work and allows the browser to batch things more effectively.
