<script>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import PageMain from './components/PageMain.vue';
import Card from './components/Card.vue';



export default {
  components: {
    PageHeader,
    PageFooter,
    PageMain,
    Card,
  },
  data() {
    return {
      message: 'ciao',
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

<style lang="scss">
@use './style/general.scss' as *;
</style>
