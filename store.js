import { reactive } from "vue";
import cardsJson from '/src/db.json'


export const store = reactive({
    products: cardsJson.products
})