import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { productListReducer, productDeatilsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer,
    userDetailsReducer,
    userUpdateProfileReducer,userRegisterReducer  } from './reducers/userReducers'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducers/orderReducers'
const rootReducer=combineReducers({
    productList:productListReducer,
    productDetails:productDeatilsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate : orderCreateReducer,
    orderDetails: orderCreateReducer,
    orderPay: orderPayReducer
})
const cartItemsFromStorage = localStorage.getItem('cartItems') 
? JSON.parse(localStorage.getItem('cartItems')) 
: []

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
? JSON.parse(localStorage.getItem('paymentMethod')): {}

const shippingAddressFromStorage =localStorage.getItem('shippingAddress')
? JSON.parse(localStorage.getItem('shippinAddress')):{}

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    :null

const initialState = {
    cart:{cartItems: cartItemsFromStorage,
          paymentMethod:paymentMethodFromStorage,
          shippingAddress:shippingAddressFromStorage
        },
    userLogin:{userInfo : userInfoFromStorage},
    
}



const store= configureStore({
    reducer:rootReducer,
    preloadedState:initialState
    
})
export default store