import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/constants";
import Button from "../Button";

const SectionHeader = ({ sectionName, action }: { sectionName?: String, action?: any }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20,paddingVertical:10 }}>
            <Text style={{ color: colors.primary, fontSize: 16, fontWeight: '700' }}>{sectionName}</Text>
            <Button title={"See more"} onPress={action} />
        </View>
    )
}

export default SectionHeader;