import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/constants";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerCover: {
        height: 300
    },
    imageCover: {
        position: 'absolute',
        top: 0,
        height: 300,
        width: Dimensions.get('screen').width
    },
    container: {
        padding: 20,
        gap: 5,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -40
    },
    scrollContainer: { gap: 16 }

});


export default styles;