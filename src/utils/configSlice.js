import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
        showIcons: false,
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        toggleIcons: (state) => {
            state.showIcons = !state.showIcons;
        }
    },
});

export const { changeLanguage,toggleIcons } = configSlice.actions;

export default configSlice.reducer;