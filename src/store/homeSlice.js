import {createSlice} from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name:'home',
    initialState:{
        url: {},
        generes: {}
    },
    reducers: {
        getApiConfiguration: (state,action) => {
            state.url = action.payload;
        },
        getGeners:(state,action) => {
            state.generes = action.payload
        }
    },
})

export const {getApiConfiguration,getGeners} = homeSlice.actions;

export default homeSlice.reducer; 