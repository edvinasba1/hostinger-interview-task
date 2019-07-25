<template>
    <section class="segment__title">
        <h3>
            <slot />
        </h3>
    </section>
</template>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.segment__title {
    height: $segment-title-height;
    line-height: $segment-title-height;
    background: $purple;
    color: $white;
    user-select: none;

    h3 {
        margin: $zero-rem;
        padding: $zero-rem $rem;
        font-size: $font-size-big-screen;
    }
}
</style>
