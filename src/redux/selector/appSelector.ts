import { RootState } from "@redux/store/store";

export const isLoginUserSelector = (state: RootState) => state.user.isLogin

export const languageUserSelector = (state: RootState) => state.user.language 

export const themeUserSelector = (state: RootState) => state.user.theme

export const globalLoadingUserSelector = (state: RootState) => state.user.globalLoading