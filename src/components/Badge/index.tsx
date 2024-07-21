import { Text, View } from "react-native"
import { colors } from "../../constants/constants"

const Badge = ({ title }: { title: String }) => {
    return (
        < View style={{ flexDirection: 'row', gap: 5 }
        }>
            <View style={{ width: 60, paddingVertical: 4, backgroundColor: colors.secondaryLight, borderRadius: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 8, fontWeight: 'bold', color: colors.secondary }}>
                    {title}
                </Text>
            </View>
        </View >
    )
}

export default Badge;