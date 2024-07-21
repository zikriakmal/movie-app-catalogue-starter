import { Text, TouchableOpacity } from "react-native"
import { colors } from "../../constants/constants"

const Button = ({ title, onPress }: { title?: String, onPress?: any }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ borderWidth: 1, borderColor: colors.greyLight, padding: 5, paddingHorizontal: 10, borderRadius: 20 }}>
            <Text style={{ fontSize: 10 }}>{title}</Text>
        </TouchableOpacity >
    )
}

export default Button