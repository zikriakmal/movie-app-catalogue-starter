import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../constants/constants"
import Rating from "../Rating"
import Badge from "../Badge"
import Duration from "../Duration"

const Popular = ({ onPress,image, title, ratingText, categories, durationText }: {
    onPress: any,
    image?: ImageSourcePropType | undefined,
    title: String,
    ratingText: String,
    categories: Array<String>,
    durationText: String
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 20, flexDirection: 'row', gap: 15 }}>
            <Image source={image} style={{ height: 120, width: 85 }} />
            <View style={{ gap: 8 }}>
                <Text style={{ maxWidth: 120, fontWeight: 'bold' }}>{title}</Text>
                <Rating ratingText={ratingText} />
                {categories.map((dt: String, i: number) => <Badge key={i} title={dt} />)}
                <Duration durationText={durationText} />
            </View>
        </TouchableOpacity>
    )
}

export default Popular;