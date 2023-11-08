<script>
export default {
    props: {
        item: {
            type: Object,
        }
    },
    data() {
        return {
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href
        }
    }
}
</script>

<template>
    <div>

        <div class="col-4 ">
            <figure>
                <img class="web-1" :src="getImagePath(`/img/${item.frontImage}`)" alt="">
                <img class="web-2" :src="getImagePath(`/img/${item.backImage}`)" alt="">
            </figure>

            <p class="brand">{{ item.brand }}</p>
            <h4 class="product">{{ item.name }}</h4>

            <div class="price">
                <span class="new-price">{{ item.price }} &euro;</span>
            </div>

            <div class="entity-icon">
                <p class="red" v-for="(badge, index) in item.badges" :class="badge.type" :key="index">
                    <span v-show="badge.type === 'discount'">{{ badge.value }}</span>
                </p>
                <p class="green" v-for="(badge, index) in item.badges" :class="badge.type" :key="index">
                    <span v-show="badge.type === 'tag'"> {{ badge.value }}</span>
                </p>
                <p id="heart" class="heart">&hearts;</p>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.col-4 {
    width: 100%;
    padding: 5px;

    figure {
        position: relative;
    }

    p {
        width: max-content;
    }
}


.entity-icon {
    .discount {
        background-color: red;
        position: absolute;
        padding: 4px;
        bottom: 125px;
        left: 10px;
        color: white;
        z-index: 40;
    }

    .tag {
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