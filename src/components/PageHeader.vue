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
                        <div>
                            <span>&#9825;</span>
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
</style>