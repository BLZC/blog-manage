<template>
    <transition name="fade" mode="out-in" appear @after-enter="transitionComplete">
        <div v-if="ok">toggled content</div>
    </transition>
</template>
<script>
export default {
  data () {
    return {
      ok: true
    };
  },
  methods: {
    transitionComplete () {
      console.log('transitionComplete');
    }
  }
};
</script>
<style lang="scss">
  [v-cloak] {
    display: none;
  }
</style>
