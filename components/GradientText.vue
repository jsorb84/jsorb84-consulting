<script setup>
const props = defineProps({
	fontWeight: String,
	from: String,
	to: String,
	size: String,
});
const gradientStyle = {
	fontSize: `${props.size ?? "72px"}`,
	background: `-webkit-linear-gradient(${props.from ?? "#006aff"}, ${
		props.to ?? "#ea00ff"
	})`,
	"-webkit-background-clip": "text",
	"-webkit-text-fill-color": "transparent",
	"font-weight": `${props.fontWeight ?? 600}`,
};
</script>

<template>
	<span :style="gradientStyle"><slot /></span>
</template>

<style>
.gradient {
	font-size: 72px;
	background: -webkit-linear-gradient(#006aff, #ea00ff);
	background-clip: text;

	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
