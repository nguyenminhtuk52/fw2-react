import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
const cartSilce = createSlice({
    name: "cart",
    initialState: {
        items: [],
        total: 0
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existItem = state.items.find((item) => item.id === newItem.id);
            if (!existItem) {
                state.items.push(newItem);
            } else {
                existItem.quantity += action.payload.quantity;
            }
        },
        getTotalItems : (state,action) => {
            let total = 0;
            for (let i= 0 ;i<state.items.length;i++ ) {
                total +=state.items[i].price * state.items[i].quantity
            };
            state.total = total;
        },
        removeItem: (state, action: PayloadAction) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            message.success("Đã xóa")
        },
        increaseQuantity: (state, action: PayloadAction) => {
            state.items.find((item) => item.id == action.payload).quantity++;
        },
        decreaseQuantity: (state, action: PayloadAction) => {
            state.items.find((item) => item.id == action.payload).quantity--;
        }
    },
})
export const { addItem, removeItem, increaseQuantity, decreaseQuantity ,getTotalItems} = cartSilce.actions
export default cartSilce.reducer