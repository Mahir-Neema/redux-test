import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toppings:[''],
    gluten: true
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers:{
        toogleGluten:(state) => {
            state.gluten = !state.gluten
        },
        addTopping:(state,action) => {
            state.toppings = [...state.toppings,action.payload]
        }
    },
})

export const {toogleGluten,addTopping} = pizzaSlice.actions;
export default pizzaSlice.reducer