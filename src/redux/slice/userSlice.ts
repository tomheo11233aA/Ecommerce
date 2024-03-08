import { ILanguage, IUSerSlice } from "src/model/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IUSerSlice = {
    isLogin: false,
    language: {
        title: "English",
        value: "en",
        image: require('@images/unAuth/america.png'),
    },
    theme: 'light',
    globalLoading: false,
    recentSearches: [
        "React Native",
    ],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<ILanguage>) => {
            state.language = action.payload;
        },
        setLogin: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload;
        },
        setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
            state.theme = action.payload;
        },
        setGlobalLoading: (state, action: PayloadAction<boolean>) => {
            state.globalLoading = action.payload;
        },
        addRecentSearch: (state, action: PayloadAction<string>) => {
            if (!state.recentSearches) {
                state.recentSearches = [];
            }
            const filteredSearches = state.recentSearches.filter(item => item !== action.payload);
            state.recentSearches = [action.payload, ...filteredSearches].slice(0, 10);
        },
        removeRecentSearch: (state, action: PayloadAction<string>) => {
            state.recentSearches = state.recentSearches.filter((item) => item !== action.payload);
        },
        clearAllRecentSearch: (state) => {
            state.recentSearches = [];
        },
    },
});

export const {
    setLanguage,
    setLogin,
    setTheme,
    setGlobalLoading,
    addRecentSearch,
    removeRecentSearch,
    clearAllRecentSearch,
} = userSlice.actions;

export default userSlice