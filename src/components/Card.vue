<script>
export default {
    data() {
        return {
            message: 'ciao'
        }
    }
}
</script>

<template>
    <div>

        <div class="col-4 first-image">

            <figure>
                <img class="web-1" src="/img/1.webp" alt="">
                <img class="web-2" src="/img/1b.webp" alt="">
            </figure>


            <p class="brand">Levis</p>
            <h4 class="product">RELAXED FIT TEE UNISEX</h4>

            <div class="price">
                <span class="new-price">14,99 &euro;</span>
                <span class="old-price">29,99 &euro;</span>
            </div>

            <div class="absolute">
                <p class="red">-50%</p>
                <p class="green">Sostenibilità</p>
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