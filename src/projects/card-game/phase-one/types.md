---
title: "Chapter I - Type Definitions"
head:
  - - meta
    - name: description
      content: The type definitions for chapter I of the card game project.
  - - meta
    - name: keywords
      content: svelte sveltekit typescript webui learning free project cardgame game cards tutorial notes learnsvelte learnsveltekit
---

# Chapter I - Type Definitions

::: warning
These are the complete typings for the project, you may want to refer back to these along the way. Most of these
will be explained fully in the project's documentation.
:::

```ts
/**
 * @typedef Status
 */
export type Status = "FACEDOWN" | "FACEUP";

/**
 * @typedef CardEvents
 * @event faceup - Event fired when the card COMPLETELY transitions to faceup
 * @event facedown - Event fired when the card COMPLETELY transitions to facedown
 * @event flipstart - Event fired when the flip is initiated
 */
export type CardEvents = {
	faceup: CardState;
	facedown: CardState;
	flipstart: CardState;
};
export type CardTransition = { rotation: number; fade: number };
/**
 * @typedef CardSlotClasses
 * @property card - The classes applied to the body of the card
 * @property values - The classes applied to the numerical values of the card
 * @property facedown - The classes applied to the card while facedown
 */
export type CardSlotClasses = {
	card?: string; // The primary card class for both sides
	values?: string; // The classes for the values of the card in the corners
	facedown?: string; // Classes for the face down side
};
/**
 * @typedef PlayingCard
 * @param _id - The unique ID (key) of the card
 * @param _status - The status (FACEUP | FACEDOWN) of the card
 * @param _value - The card value
 * @param _cover - The card cover or design (back)
 * @param _image - The card image (face)
 */
export type PlayingCard = {
	_id: number;
	_image?: string;
	_value: number;
	_status?: Status;
	_cover?: string;
	_image?: string;
};
```
