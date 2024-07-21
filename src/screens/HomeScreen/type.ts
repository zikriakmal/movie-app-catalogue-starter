import { ImageSourcePropType } from "react-native";

export type NowShowingType = {
    image?: ImageSourcePropType | undefined,
    title: String,
    ratingText: String
}

export type PopularType = {
    image?: ImageSourcePropType | undefined,
    title: String,
    ratingText: String,
    categories: Array<String>,
    durationText: String,
}