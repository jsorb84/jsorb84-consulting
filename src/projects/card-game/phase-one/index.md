# 🃏♦️ Card Component

## Component Properties

\* = Optional

- `_id` The unique ID (key) of the card
- `_status` The status (FACEUP | FACEDOWN) of the card
- `_value*` The card value
- `_image*` The card image (face)
- `_cover*` The card cover or design (back)
- `classes*` Allows you to specify classes for sections of the card.
  - `card` Classes for the entire card
  - `values` Classes for the text value of the card
  - `facedown` Classes for the card while face down

## Creating the Component

### 1) Enable Getters & Setters

```html
<!-- Allow Getters/Setters -->
<svelte:options accessors="{true}" />
```

### 2) Component Properties

::: info
Component types can be found in the `Type Definitions` page. Click [Here](./types) to see them.
:::

```html
<script lang="ts">
	// A static image for the default card face. This will be handled later.
	import NotPictured from "$lib/assets/not-pictured.png";
	/**
	 * @props Playing Card State
	 * @param _id - The unique ID (key) of the card
	 * @param _status - The status (FACEUP | FACEDOWN) of the card
	 * @param _value - The card value
	 * @param _cover - The card cover or design (back)
	 * @param _image - The card image (face)
	 */
	export let _id: number;
	export let _status: Status = "FACEDOWN";
	export let _value: number;
	export let _cover: string = `${base}/playing-card-235x331.png`;
	export let _image: string = NotPictured;

	/* Just formatting for easy use */
	const state: PlayingCard = { _id, _status, _value, _image };

	/**
	 * @param CardSlotClasses
	 * @property card - The classes applied to the body of the card
	 * @property values - The classes applied to the numerical values of the card
	 * @property facedown - The classes applied to the card while facedown
	 */
	export let classes: CardSlotClasses = {
		card: "",
		values: "",
		facedown: "",
	};
</script>
```

## Card Component

All cards must flip, and Svelte provides a couple amazing tools that will allow us to take care of
all of our card animations. The goal is to make our card clickable, so when the player clicks the card
it will flip and reveal itself. Here is the end design.

::: info
Please refer to the notes on `svelte/motion` as it will be needed for this part of the tutorial.
[Click Here for the Notes](../../../notes/svelte/motion)
:::

<center><img src='/card-flip.gif' /></center>

### Plan

To achieve the effect, what we'll do is we'll use a `svelte/action` to animate our card. We will
flip the card by rotating the HTML Element 360 degrees, at the 1/2 way mark (180 degrees) we will use
the element's `opacity` to give the illusion that the card is flipping. Behind the scenes we are using a simple
if statement to check the rotation of the card.

### Rotation and Fade Tweens

> We start rotation at 0 , 0 -> 360 degrees
> We start the fade at -1 as we can use a quadratic function (x^2) as -1 -> 1 to fade perfectly
> from 100% opacity -> 0% opacity (front ton back transition at 180 degrees or 500ms) -> 100% opacity

`card.svelte`

```ts
import { tweened, type Tweened } from "svelte/motion";

const transition: { rotation: Tweened<number>; fade: Tweened<number> } = {
	rotation: tweened(0, { duration: 1000 }),
	fade: tweened(-1, { duration: 1000 }),
};

const { rotation, fade } = transition;
```

We can use Svelte's awesome reactivity to take care of the `rotation` and the `fade`
This will set the rotation and fade whenever the property `_status` changes.

`card.svelte`

```ts
/* Reactively Check for Status Changes and Rotate / Fade Card Accordingly */
$: if (_status === "FACEDOWN") {
	// We will revisit this for events later.
	rotation.set(360); // 0 -> 360
	fade.set(1); // -1 -> 1
} else if (_status === "FACEUP") {
	rotation.set(0); // 360 -> 0
	fade.set(-1); // 1 -> -1
}
```

`card.svelte`

```html
<div
	role="button"
	on:click
	on:keypress
	tabindex="{_id}"
	class="w-[250px]
	h-[350px]
	relative
	text-black
	playing-card
	p-3"
>
	{#if $rotation > 180}
	<div class="">
		<img
			class="rounded-xl"
			src="{_image}"
			alt="card"
		/>
		<span class="bottom-0.5 p-6 absolute font-extrabold">ID: {_id}</span>
		<span
			class="{`top-0"
			left-0
			absolute
			p-6
			text-3xl
			text-red-600
			font-extrabold
			${classes.values}`}
			>{_value}</span
		>
		<span
			class="{`top-0"
			right-0
			absolute
			p-6
			text-3xl
			text-red-600
			font-extrabold
			${classes.values}`}
			>{_value}</span
		>
		<span class="right-0 bottom-0 p-6 absolute font-extrabold">{_status}</span>
	</div>
	{:else if $rotation <= 180}
	<img
		class="{`rounded-xl"
		object-contain
		${classes.facedown}`}
		src="{_cover}"
		alt="{`Card${_id}`}"
	/>
	{/if}
</div>
```

## Card Action (Animations)

Svelte gives us awesome tools to hook onto an element, and apply changes to that element reactively.
A Svelte Action is a function that takes the node, and any optional parameters, the action can return an object
containing a `destroy()` and an `update(...props)` The update function will run anytime our optional parameters change.

Please read the [`svelte/action`](https://svelte.dev/docs/svelte-action) documentation before proceeding.

`card.ts`

```ts
/**
 * @action cardflip - Handles the animation of the card via Svelte Actions
 * @param node The node of the card
 */
export default function cardflip(
	node: HTMLElement,
	{ rotation, fade }: CardTransition
) {
	// The default styles applied on mount.
	const styles = `opacity: ${
		fade * fade * 100
	}%; transform: rotate3d(0,1,0,${rotation}deg);`;
	node.setAttribute("style", styles);

	return {
		/* This function runs ANYTIME that rotation or fade change. */
		/* We are using transform: rotate3d(0, 1, 0, ${rotation}deg); to rotate 360deg */
		/* We are using opacity: (fade^2)*100; to fade in and out at the half way mark. */
		update({ rotation, fade }: CardTransition) {
			const styles = `opacity: ${
				fade * fade * 100
			}%; transform: rotate3d(0,1,0,${rotation}deg);`;
			node.setAttribute("style", styles);
		},
	};
}
```

> We are using `transform: rotate3d(0, 1, 0, ${rotation}deg);` to rotate 360deg
> We are using `opacity: (fade^2)*100;` to fade in and out at the half way mark.

### Using the Action

Now we can use the action on our card component
`card.svelte`

```html
<script lang='ts'>
    import cardflip from './card.ts';
    import { tweened, type Tweened } from "svelte/motion";

    const transition: { rotation: Tweened<number>; fade: Tweened<number> } = {
        rotation: tweened(0, { duration: 1000 }),
        fade: tweened(-1, { duration: 1000 }),
    };

    const { rotation, fade } = transition;
    /* I have cleaned up this code for readability, this is the same card.svelte from above.
    /* ........ */
    /* ........ */
    /* ........ */
    /* ........ */
</script>

<div ...... use:cardflip={{ rotation: $rotation, fade: $fade }}>
    .....
</div>
```

## Summary

We have created the component, and we have created a basic animation that will help transition the card from
front to back. This is done with a simple if-statement and reactivity which will automatically rotate and fade-in-out
the card when the `_status` is changed. In the next parts, we will create our custom store and display our
deck of cards. Here is a preview of the finished project.

<center><img src='/card-svelte.gif' /></center>
