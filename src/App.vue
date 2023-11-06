<script>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import PageMain from './components/PageMain.vue';

export default {
  components: {
    PageHeader,
    PageFooter,
    PageMain,
  },
  data() {
    return {
      message: 'ciao'
    }
  }
}
</script>

<template>
  <div>
    <PageHeader />
    <PageMain />
    <PageFooter />

  </div>
</template>

<style lang="sass">
@use './style/general.scss'
</style>
