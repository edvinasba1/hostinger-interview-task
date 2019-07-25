<template>
    <ul>
        <slot />
    </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

ul {
    display: block;
    padding: $zero-rem;
    margin: $zero-rem;
    height: $appbar-height;
    list-style: none;
}
</style>
