import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    // list: [],
    list: [],
    price: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, item) => {
            console.log(state)
            const {image, price, name} = item.payload
            const index = state.list.findIndex(entry => entry.name === name)
            state.price += price
            if(index === -1){
                state.list = [...state.list, {
                    image: image,
                    price: price,
                    name: name,
                    count: 1
                }]
            }
            else {
                let copy = [...state.list]
                copy[index].count ++
                state.list = [...copy]
            }

        },
        removeItem: (state, item) => {
            const {name} = item.payload
            const index = state.list.findIndex(entry => entry.name === name)
            state.price -= state.list[index].price
            if(state.list[index].count  === 1) {
                let copy = state.list.filter((item) => {
                    return item.name !== name
                })
                state.list = [...copy]
            }
            else {
                let copy = [...state.list]
                copy[index].count --
                state.list = [...copy]
            }
        },
        clear: (state) => {
            state.price = 0
            state.list = []
        }
    }
})

export const {addItem, removeItem, clear} = cartSlice.actions
export default cartSlice.reducer