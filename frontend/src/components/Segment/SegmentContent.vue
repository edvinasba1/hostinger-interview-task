<template>
<section class="segment__content">
    <slot />
</section>
</template>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.segment__content {
    padding: $rem;
}
</style>
