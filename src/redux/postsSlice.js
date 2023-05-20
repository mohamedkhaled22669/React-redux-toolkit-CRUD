import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name:"items",
    initialState: {
        items: [],
    },
    reducers: {
        addPost: (state,action) => {
            state.items.push(action.payload)
        }, 
        deletePost: (state,action) =>  {
            state.items = state.items.filter(item => item.id !== action.payload) 
        },
        updatePost: (state,action) => {
            // eslint-disable-next-line
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title;
                    item.description = action.payload.description;
                };
            });
        }
    }
})

export const{ addPost , deletePost,updatePost} = postsSlice.actions

export default postsSlice.reducer