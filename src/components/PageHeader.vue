<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<template>
    <div>
        <header>
            <nav>
                <div class="container">
                    <div class="row justify">
                        <div class="col-">
                            <span>Donna &nbsp </span>
                            <span>Uomo &nbsp </span>
                            <span>Bambini &nbsp </span>
                        </div>

                        <div class="col-icon">
                            <img src="/img/boolean-logo.png" alt="">
                        </div>
                        <div class="entity-icon">
                            <div><awesome-icon icon="bag-shopping" /></div>
                            <div><awesome-icon icon="user" /></div>
                            <div><awesome-icon icon="heart" /></div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<style lang="scss" scoped>
header {
    padding: 15px;
    background-color: orangered;
    margin-bottom: 20px;
    color: white;
}

.justify {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.col-icon {
    img {
        max-height: 20px;
        text-align: center;

    }

}

.entity-icon {
    display: flex;

    div {
        padding: 0px 5px;
    }
}
</style>
