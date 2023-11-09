<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Card from './Card.vue';
import { store } from '/store.js'

export default {
    components: {
        Card,
        FontAwesomeIcon
    },
    data() {
        return {
            message: 'ciao',
            store: store,
            show: false,
            dataModal: {}
        }
    },
    methods: {
        showModal(item) {
            this.show = true
            this.dataModal = item
            console.log('ciao sono un $emit', this.show)
        },
        removeModal() {
            this.show = false
            console.log('sono un event e chiudo l $emit', this.show)
        }
    }
}
</script>

<template>
    <div>
        <main>


            <!--inizio prima section-->
            <section>
                <div class="container">
                    <div class="row">
                        <!--inizio-prima-img-->
                        <div v-for="(product, id) in store.products" :key="id" class="col-4">
                            <Card @prodotto="showModal" :item="product" />
                        </div>
                    </div>
                </div>
                <div v-if="show" class="modal">
                    <div class="product__modal">
                        <p>{{ dataModal.name }}</p>
                        <p @click="removeModal">
                            <awesome-icon icon=circle-xmark />
                        </p>
                        <div class="brand__product">
                            <div>{{ dataModal.brand }}</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.col-4 {
    padding: 5px;

    figure {
        position: relative;
    }

    p {
        width: max-content;
    }
}

.modal {
    width: 100%;
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
    background-color: rgba(0, 0, 0, 0.5);

    .product__modal {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: white;
        position: fixed;
        width: 100%;
        max-width: 300px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 15px;
        z-index: 901;

        p {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
        }
    }
}


.absolute {
    .red {
        background-color: red;
        position: absolute;
        padding: 4px;
        bottom: 125px;
        left: 10px;
        color: white;
        z-index: 40;
    }

    .green {
        background-color: green;
        color: white;
        padding: 4px;
        position: absolute;
        bottom: 125px;
        left: 60px;
        z-index: 44;
    }

    .heart {
        position: absolute;
        top: 10px;
        right: 0;
        background: white;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        z-index: 32;

        &:hover {
            color: red;
        }
    }
}

.price {
    .new-price {
        color: red;
        padding: 0 5px;
    }

    .old-price {
        text-decoration: line-through;
    }
}

.web-1 {
    z-index: 10;
    position: relative;

    &:hover {
        z-index: 2;
    }
}

.web-2 {
    position: relative;
    z-index: 9;
    position: absolute;
    left: 0;

    &:hover {
        z-index: 20;
    }
}
</style>