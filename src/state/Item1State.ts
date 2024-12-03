import { defineStore } from "pinia";
import { ref } from "vue";
import { CheckItem } from "../model/CheckItem";

export const useItem1Store = defineStore('item1', () => {
    const data = ref<CheckItem[]>([]);
    const item1 = {
        name: 'item1',
        amount: 1,
        unit: 'unit',
        is_complete: false,
        found: 0,
        reason: ''
    }

    const item2 = {
        name: 'item2',
        amount: 2,
        unit: 'unit',
        is_complete: false,
        found: 0,
        reason: ''
    }

    data.value = [item1, item2];

    return {
        data
    }

});