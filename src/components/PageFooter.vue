<script>
export default {
    data() {
        return {
            ciao: 'fragola'
        }
    }
}
</script>

<template>
    <div>
        <footer>
            <aside>
                <div class="container">
                    <div class="row justify">
                        <div class="col">

                            <h4>
                                Boolando s.r.l
                            </h4>

                            <ul>
                                <li>Informazioni sulla privacy</li>
                                <li>Informazioni legali</li>
                                <li>diritti di recesso</li>
                            </ul>

                        </div>
                        <div class="col">
                            <p>Trovaci su :</p>
                            <div class="social">
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
footer {
    background-color: rgb(36, 36, 36);
    min-height: 30px;
    padding: 10px;
    color: white;
}

.row {
    .col {
        padding: 10px;
    }
}
</style>