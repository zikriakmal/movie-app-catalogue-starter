import { Image, Text, View } from "react-native";

const Duration = ({ durationText }: { durationText: String }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Image source={require('../../assets/Icon/ic_time.png')} style={{ height: 10, width: 10 }} />
            <Text style={{ fontSize: 12 }}>{durationText}</Text>
        </View>
    )
}

export default Duration;