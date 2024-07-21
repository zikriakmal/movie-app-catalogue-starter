import { GestureResponderEvent, Image, ImageSourcePropType, Text, TouchableOpacity } from "react-native"
import { colors } from "../../constants/constants"
import Rating from "../Rating"

const NowShowing = ({ image, title, ratingText, onPress }: {
    image?: ImageSourcePropType | undefined,
    title?: String,
    ratingText?: String,
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ width: 140, gap: 5 }}>
            <Image source={image} style={{ height: 210, width: 140 }} />
            <Text style={{ fontWeight: '600', color: colors.black }}>{title}</Text>
            <Rating ratingText={ratingText} />
        </TouchableOpacity>
    )
}

export default NowShowing;