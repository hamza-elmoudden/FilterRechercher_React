import { configureStore } from '@reduxjs/toolkit'
import producte from "./Producte"

export const store = configureStore({
    reducer:{
        producte:producte,
    }
})