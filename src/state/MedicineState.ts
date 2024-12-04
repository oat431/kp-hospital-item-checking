import { defineStore } from "pinia";
import { ref } from "vue";
import { CheckItem } from "../model/CheckItem";

export const useItem1Store = defineStore('item1', () => {
    const data = ref<CheckItem[]>([]);
    return {
        data
    }

});