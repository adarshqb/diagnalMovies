import { ImageSourcePropType } from "react-native";
import { poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8, poster9 } from "../../assets/images";

// API BASE URL
export const APIBASE = 'https://api.jsonbin.io/v3/b/';

// API KEY
export const APIKEY = '$2a$10$Ay5kwAxqBEGQaGDL1Q9n..1PoEBcena7ptk8bXQIzfWvQ0ecg.Llu';

// PAGELIST
export const PAGEKEYS = ['6629f13cacd3cb34a83dec79', '6629f0e8ad19ca34f85f7586', '6629f113ad19ca34f85f7593']

//TypeScript Constants
export type MovieListType = {
    name: string,
    "poster-image": string
}

//ImageList to map with Json file
export const imageList: Record<string, ImageSourcePropType> = {
    'poster1.jpg': poster1,
    'poster2.jpg': poster2,
    'poster3.jpg': poster3,
    'poster4.jpg': poster4,
    'poster5.jpg': poster5,
    'poster6.jpg': poster6,
    'poster7.jpg': poster7,
    'poster8.jpg': poster8,
    'poster9.jpg': poster9,
}