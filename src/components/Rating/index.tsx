import { Image, Text, View } from "react-native"

const Rating = ({ ratingText }: { ratingText?: String }) => {
    return (
        <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
            <Image source={require('../../assets/Icon/ic_star.png')} style={{ height: 11, width: 10 }} />
            <Text style={{ fontSize: 12 }}>{ratingText}</Text>
        </View>
    )
}

export default Rating;