<template>
  <main class="grid">
    <slot />
  </main>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      let vh = window.innerHeight * 0.01;

      window.addEventListener("load", () => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      });

      window.addEventListener("resize", () => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      });

      window.addEventListener("orientationchange", () => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.grid {
  height: calc(var(--vh) * 100 - #{$appbar-height});
  width: 100vw;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px !important;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff !important;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000 !important;
    height: 30px;
  }
}
</style>
