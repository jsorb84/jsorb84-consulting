---
title: Svelte III - Motion
head:
  - - meta
    - name: description
      content: Notes on the svelte/motion.
    - name: keywords
      content: svelte animation motion sveltekit webui learning free project tutorial notes learnsvelte learnsveltekit
---

<script setup>
	import GradientText from '/components/GradientText.vue'
</script>
<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">

<center><img src='https://i.imgur.com/tLjkD58.png' /></center><br />

# <GradientText from='#f12711' to='#f5af19' font='Oswald'>Svelte III - Motion</GradientText>

Svelte comes with great tools for animation, motion, transitions, and a handful of easing functions to numerically transition between values with mathematical techniques that help to add "animation" to any Svelte project. This is a very simple recap and tutorial.

## [`svelte/easing`](https://svelte.dev/docs/svelte-easing)

Easing functions are provided and are used by `svelte/motion` to mathematically express motion using various functional computations. A list of all the easing functions is below provided directly from the [**Svelte Docs**](https://svelte.dev/docs)

**All easing functions have three variations**

- In
- Out
- InOut

Ex. `sineIn()` `sineOut()` `sineInOut()`

| Ease    | Function                |
| ------- | ----------------------- |
| back    | `back(In/Out/InOut)`    |
| bounce  | `bounce(In/Out/InOut)`  |
| circ    | `circ(In/Out/InOut)`    |
| cubic   | `cubic(In/Out/InOut)`   |
| elastic | `elastic(In/Out/InOut)` |
| expo    | `expo(In/Out/InOut)`    |
| quad    | `quad(In/Out/InOut)`    |
| quart   | `quart(In/Out/InOut)`   |
| quint   | `quint(In/Out/InOut)`   |
| sine    | `sine(In/Out/InOut)`    |

### Example

```ts
import { tweened } from "svelte/motion";
import { cubicInOut } from "svelte/easing";

const tween = tweened(0, {
	duration: 1000,
	easing: cubicInOut,
});
// $tween == 0
$tween += 1; // Increase it by 1
/* 	
	Using the easing function cubicInOut,
	tween will begin at 0, and increase by one,
	this will take precisely 1000 ms (1 second)
	as specified. 
*/
```

## [`svelte/motion`](https://svelte.dev/docs/svelte-motion)

> The `svelte/motion` module exports two functions, `tweened` and `spring`, for creating writable stores whose values change over time after `set` and `update`, rather than immediately.

The two primary functions from the motion module are

### [`tweened`](https://svelte.dev/docs/svelte-motion#tweened)

```ts
function tweened<T>(
	value?: T | undefined,
	defaults?: TweenedOptions<T> | undefined
): Tweened<T>;
```

Where `Tweened<T>` will be a Svelte Store.
**Example Usage**

```ts
const val = tweened(0, {
	duration: 2000,
	easing: cubicInOut,
});
```

### Options

- **`duration`:** # of ms that it takes to mutate the value
- **`easing`:** The easing function to use (gives a style of animation)
- **`delay`:** The amount of ms to delay the execution or wait.
- **[`interpolate`](https://svelte.dev/docs/svelte-motion)**: See Svelte Docs

### [`spring`](https://svelte.dev/docs/svelte-motion#spring)

> A `spring` store gradually changes to its target value based on its `stiffness` and `damping` parameters. Whereas `tweened` stores change their values over a fixed duration, `spring` stores change over a duration that is determined by their existing velocity, allowing for more natural-seeming motion in many situations. The following options are available:

### Options

- `stiffness` (`number`, default `0.15`) — a value between 0 and 1 where higher means a 'tighter' spring
- `damping` (`number`, default `0.8`) — a value between 0 and 1 where lower means a 'springier' spring
- `precision` (`number`, default `0.01`) — determines the threshold at which the spring is considered to have 'settled', where lower means more precise

**All of the options above can be changed while the spring is in motion, and will take immediate effect.**

> Both `set` and `update` can take a second argument — an object with `hard` or `soft` properties. `{ hard: true }` sets the target value immediately; `{ soft: n }` preserves existing momentum for `n` seconds before settling. `{ soft: true }` is equivalent to `{ soft: 0.5 }`

```html
<script>
	import { spring } from 'svelte/motion';

	const coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);

	coords.update((prev) => {
		return {x: prev.x++ , y: prev.y++};
	},
	{ soft: true // 0.5 });
</script>
```

## Live Example

<iframe src="https://codesandbox.io/embed/basic-svelte-motion-lphxfz?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
     title="basic-svelte-motion"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Links, Resources and References

::: info
Information referenced from the [Svelte Docs](https://svelte.dev/docs)
:::
