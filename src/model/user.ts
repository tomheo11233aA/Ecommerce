import { ImageSourcePropType } from "react-native";

export interface IUSerSlice {
    isLogin: boolean;
    language: ILanguage;
    theme: 'dark' | 'light';
    globalLoading: boolean; 
    recentSearches: any[];
}

export interface ILanguage {
    title?: string,
    value: string,
    image?: ImageSourcePropType,
}