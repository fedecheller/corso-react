import { createSlice } from '@reduxjs/toolkit'

export const citiesSlice = createSlice ({
    name: 'counter',
    initialState: {
        value: [
            { id: 0, name: 'Tokyo', description: 'aaaaaaaaa'},
            { id: 1, name: 'Rome', description: 'bbbbbbbb'},
            { id: 2, name: 'Paris', description: 'ccccccc'}
        ]
    },
    reducers:{
        add: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { add } = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer