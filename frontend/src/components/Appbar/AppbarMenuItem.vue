<template>
<li class="appbar__menu-item" @click="() => !isActive? setSidebarActive(!isActive) : null">
    <a class="appbar__menu-item__icon">
        <font-awesome-icon icon="bars" />
    </a>
</li>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            required: true,
        },
        setSidebarActive: {
            type: Function,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.appbar__menu-item {
    padding: $zero-rem;
    margin: $zero-rem;
    float: $align-right;
    color: $light-gray;
    transition: all .3s ease-in-out;
    cursor: pointer;
    display: none;

    @include for-smaller-screens {
        display: inherit;
    }

    @include hover {
        color: $white;
    }

    .appbar__menu-item__icon {
        line-height: $appbar-height;
        height: $appbar-height;
        vertical-align: middle;
        padding: $zero-rem $rem;
    }
}
</style>
