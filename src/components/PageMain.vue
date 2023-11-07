<script>
import Card from './Card.vue';
import cardsJson from '/src/db.json'



export default {
    components: {
        Card,
    },
    data() {
        return {
            products: cardsJson.products

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
                        <div v-for="(product, id) in products" :key="id" class="col-4">
                            <Card :item="product" />
                        </div>

                        <!--fine-prima-img-->
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