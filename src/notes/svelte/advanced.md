<script setup>
	import GradientText from '/components/GradientText.vue'
</script>
<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">

<center><img src='https://i.imgur.com/tLjkD58.png' /></center>

# <GradientText from='#f12711' to='#f5af19' font='Oswald'>Svelte II - Advanced</GradientText>

## Component Directives

### `on:eventname={handler}`

> **Create an Event**
>
> ```html
> <script>
> 	import { createEventDispatcher } from "svelte";
>
> 	const dispatch = createEventDispatcher();
> </script>
> ```

### `--style-props`

```html
<Slider
	bind:value
	min="{0}"
	--rail-color="black"
	--track-color="rgb(0, 0, 255)"
/>
```

```html
<div
	style="display: contents; --rail-color: black; --track-color: rgb(0, 0, 255)"
></div>
```

### `bind:property`

> While Svelte props are reactive without binding, that reactivity only flows downward into the component by default. Using `bind:property` allows changes to the property from within the component to flow back up out of the component.

### `bind:this`

```html
<ShoppingCart bind:this="{cart}" />
```

> Allows referencing to a component, like a ref in React.

## [Slots](https://svelte.dev/docs/special-elements#slot)

### `<slot />`

```html
<slot><!-- optional fallback --></slot>
<slot name="x"><!-- optional fallback --></slot>
<slot prop="{value}" />
```

### `<slot name='name'>`

```html
<!-- Widget.svelte -->
<div>
	<slot name="header">No header was provided</slot>
	<p>Some content between header and footer</p>
	<slot name="footer" />
</div>

<!-- App.svelte -->
<Widget>
	<h1 slot="header">Hello</h1>
	<p slot="footer">Copyright (c) 2019 Svelte Industries</p>
</Widget>
```

> Components can be placed in a named slot using the syntax `<Component slot="name" />`. In order to place content in a slot _without_ using a wrapper element, you can use the special element `<svelte:fragment>`.

### `$$slots`

`$$slots` is an object whose keys are the names of the slots passed into the component by the parent. If the parent does not pass in a slot with a particular name, that name will not be present in `$$slots`. This allows components to render a slot (and other elements, like wrappers for styling) only if the parent provides it.

Note that explicitly passing in an empty named slot will add that slot's name to `$$slots`. For example, if a parent passes `<div slot="title" />` to a child component, `$$slots.title` will be truthy within the child.

### `<slot key=value>`

Slots can be rendered zero or more times and can pass values _back_ to the parent using props. The parent exposes the values to the slot template using the `let:` directive.

```html
<!-- FancyList.svelte -->
<ul>
	{#each items as item}
	<li class="fancy">
		<slot prop="{item}" />
	</li>
	{/each}
</ul>

<!-- App.svelte -->
<FancyList
	{items}
	let:prop="{thing}"
>
	<div>{thing.text}</div>
</FancyList>
```

## Svelte Components

### [`<svelte:self>`](https://svelte.dev/docs/special-elements#svelte-self)

The `<svelte:self>` element allows a component to include itself, recursively.
It cannot appear at the top level of your markup; it must be inside an if or each block or passed to a component's slot to prevent an infinite loop.

```html
<script>
	/** @type {number} */
	export let count;
</script>
{#if count > 0}
<p>counting down... {count}</p>
<svelte:self
	count="{count"
	-
	1}
/>
{:else}
<p>lift-off!</p>
{/if}
```

### [`<svelte:component>`](https://svelte.dev/docs/special-elements#svelte-component)

The `<svelte:component>` element renders a **COMPONENT** dynamically, using the component constructor specified as the `this` property. When the property changes, the component is destroyed and recreated.

If `this` is falsy, no component is rendered.

### [`<svelte:element>`](https://svelte.dev/docs/special-elements#svelte-element)

The `<svelte:element>` element lets you render an **ELEMENT** of a **DYNAMICALLY SPECIFIED TYPE**. This is useful for example when displaying rich text content from a CMS. Any properties and event listeners present will be applied to the element.

### [`<svelte:window>`](https://svelte.dev/docs/special-elements#svelte-window)

```html
<svelte:window on:event="{handler}" /> <svelte:window bind:prop="{value}" />
```

The `<svelte:window>` element allows you to add event listeners to the `window` object without worrying about removing them when the component is destroyed, or checking for the existence of `window` when server-side rendering.

Unlike `<svelte:self>`, this element may only appear at the top level of your component and must never be inside a block or element.

### [`<svelte:document>`](https://svelte.dev/docs/special-elements#svelte-document)

```html
<svelte:document on:event="{handler}" /> <svelte:document bind:prop="{value}" />
```

Similarly to `<svelte:window>`, this element allows you to add listeners to events on `document`, such as `visibilitychange`, which don't fire on `window`. It also lets you use [actions](https://svelte.dev/docs/element-directives#use-action) on `document`.

As with `<svelte:window>`, this element may only appear the top level of your component and must never be inside a block or element.

### [`<svelte:body>`](https://svelte.dev/docs/special-elements#svelte-body)

```html
<svelte:body on:event="{handler}" />
```

Similarly to `<svelte:window>`, this element allows you to add listeners to events on `document.body`, such as `mouseenter` and `mouseleave`, which don't fire on `window`. It also lets you use [actions](https://svelte.dev/docs/element-directives#use-action) on the `<body>` element.

As with `<svelte:window>` and `<svelte:document>`, this element may only appear the top level of your component and must never be inside a block or element.

### [`<svelte:head>`](https://svelte.dev/docs/special-elements#svelte-head)

```html
<svelte:head
	>...</svelte:head
>
```

This element makes it possible to insert elements into `document.head`. During server-side rendering, `head` content is exposed separately to the main `html` content.

As with `<svelte:window>`, `<svelte:document>` and `<svelte:body>`, this element may only appear at the top level of your component and must never be inside a block or element.

```html
<svelte:head>
	<title>Hello world!</title>
	<meta
		name="description"
		content="This is where the description goes for SEO"
	/>
</svelte:head>
```

### [`<svelte:options>`](https://svelte.dev/docs/special-elements#svelte-options)

```html
<svelte:options option="{value}" />
```

The `<svelte:options>` element provides a place to specify per-component compiler options, which are detailed in the [compiler section](https://svelte.dev/docs/svelte-compiler#compile). The possible options are:

```html
<svelte:options customElement="my-custom-element" />
```

### [`<svelte:fragment>`](https://svelte.dev/docs/special-elements#svelte-fragment)

The `<svelte:fragment>` element allows you to place content in a [named slot](https://svelte.dev/docs/special-elements#slot-slot-name-name) without wrapping it in a container DOM element. This keeps the flow layout of your document intact.

```html
<!-- Widget.svelte -->
<div>
	<slot name="header">No header was provided</slot>
	<p>Some content between header and footer</p>
	<slot name="footer" />
</div>

<!-- App.svelte -->
<Widget>
	<h1 slot="header">Hello</h1>
	<svelte:fragment slot="footer">
		<p>All rights reserved.</p>
		<p>Copyright (c) 2019 Svelte Industries</p>
	</svelte:fragment>
</Widget>
```
