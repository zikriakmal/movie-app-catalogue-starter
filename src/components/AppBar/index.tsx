import { Image, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../constants/constants"

const AppBar = ({ isHomeScreen = true, leftButtonAction }: { isHomeScreen?: boolean, leftButtonAction?: any }) => {
    return (
        isHomeScreen ?
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <Image source={require('../../assets/Icon/Menu-1.png')} style={{ height: 24, width: 24 }} />
                <Text style={{ color: colors.primary, fontSize: 16, fontWeight: '700' }}>FilmKu</Text>
                <Image source={require('../../assets/Icon/Notif.png')} style={{ height: 24, width: 24 }} />
            </View> :
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginTop: 50 }}>
                <TouchableOpacity onPress={leftButtonAction}>
                    <Image source={require('../../assets/Icon/Back.png')} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
                <Image source={require('../../assets/Icon/Menu.png')} style={{ height: 24, width: 24 }} />
            </View>
    )
}

export default AppBar;