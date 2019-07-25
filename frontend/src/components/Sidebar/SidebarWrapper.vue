<template>
<nav :class="{'sidebar sidebar--light': true, 'open': isActive }">
    <slot />
</nav>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.sidebar {
    position: fixed;
    top: $zero-rem;
    right: $zero-rem;
    height: calc(var(--vh) * 100);
    width: $sidebar-width;
    user-select: none;
    z-index: 100;
    transform: translateX($sidebar-width);
    transition: all .3s ease-in-out;

    @include for-bigger-screens {
        display: none;
    }

    &.sidebar--light {
        background-color: $white;

        &.open {
            box-shadow: $default-shadow;
        }
    }

    &.open {
        transform: translateX(0px);
    }
}
</style>
