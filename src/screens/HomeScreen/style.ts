import { StyleSheet } from "react-native";
import { colors } from "../../constants/constants";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.white, flex: 1
    },
    scrollContainer: {
        paddingBottom: 50
    },
    popularMovieContainer: {
        marginTop:24,
        gap: 10
    }
})

export default styles;