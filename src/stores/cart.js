import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusCart: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const{productId, quantity, selectedVariant} = action.payload;
            const indexProductId = (state.items).findIndex(item =>
                item.productId === productId  && JSON.stringify(item.selectedVariant) === JSON.stringify(selectedVariant)
            );
            if(indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            }else{
                state.items.push({ productId, quantity, selectedVariant });
            }
             localStorage.setItem("carts", JSON.stringify(state.items))
        },
        changeQuantity(state, action){
            const{ productId, quantity, selectedVariant } = action.payload;
            const indexProductId = (state.items).findIndex(item =>
                item.productId === productId && JSON.stringify(item.selectedVariant) === JSON.stringify(selectedVariant)
            );
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity;
            } else {
                state.items = state.items.filter(item => item.productId !== productId || 
                    JSON.stringify(item.selectedVariant) !== JSON.stringify(selectedVariant));
            }
            localStorage.setItem("carts", JSON.stringify(state.items))
        },
        toggleStatusCart(state){
            state.statusCart = !state.statusCart
        },
        clearCart(state) {
            state.items = []; 
            localStorage.setItem("carts", JSON.stringify([])); 
        }
       
    }

})

export const {addToCart, changeQuantity, toggleStatusCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer