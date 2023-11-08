<script>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import PageMain from './components/PageMain.vue';
import Card from './components/Card.vue';

import axios from 'axios';
import { store } from '../store';


export default {
  components: {
    PageHeader,
    PageFooter,
    PageMain,
    Card,
  },
  data() {
    return {
      store: store,
      message: 'ccod',
    }
  },
  created() {
    axios
      .get('http://localhost:3000/products')
      .then(reply => {
        const products = reply.data

        store.products = products
      })
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
