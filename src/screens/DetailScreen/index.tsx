import { Dimensions, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "../../constants/constants"
import { NavigationProp, ParamListBase } from "@react-navigation/native"
import AppBar from "../../components/AppBar"
import styles from "./styles"


const DetailScreen = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {
    return (
        <SafeAreaView style={styles.mainContainer} edges={['bottom', 'left', 'right']}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            {/* Cover Image Area */}
            <View style={styles.headerCover}>
                <Image style={styles.imageCover}
                    source={require('../../assets/detail_movie/spiderman.png')} />
                <AppBar isHomeScreen={false} leftButtonAction={() => navigation.goBack()} />
            </View>

            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* Title And Rating */}
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20, fontWeight: '600', maxWidth: 200, color: colors.black }}>Spiderman: No Way Home</Text>
                            <Image source={require('../../assets/Icon/ic_bookmark.png')} style={{ height: 24, width: 24 }} />
                        </View>
                        <View style={{ flexDirection: 'row', gap: 2, marginTop: 8, alignItems: 'center' }}>
                            <Image source={require('../../assets/Icon/ic_star.png')} style={{ height: 11, width: 10 }} />
                            <Text style={{ fontSize: 12, fontWeight: '300' }}>9.1/10 IMDb</Text>
                        </View>
                    </View>
                    {/* category badges */}
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <View style={{ width: 60, paddingVertical: 4, backgroundColor: colors.secondaryLight, borderRadius: 10, alignItems: 'center' }}>
                            <Text style={{ fontSize: 8, fontWeight: 'bold', color: colors.secondary }}>HORROR</Text>
                        </View>
                    </View>
                    {/* detail movie */}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '300' }}>Length</Text>
                            <Text style={{ fontWeight: '600', color: colors.black }}>2h 28min</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '300' }}>Language</Text>
                            <Text style={{ fontWeight: '600', color: colors.black }}>English</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '300' }}>Rating</Text>
                            <Text style={{ fontWeight: '600', color: colors.black }}>PG-13</Text>
                        </View>
                    </View>
                    {/* Description */}
                    <View style={{ gap: 8 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.black }}>Description</Text>
                        <Text style={{ lineHeight: 22, fontSize: 12 }}>
                            With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.
                        </Text>
                    </View>
                    <View style={{ gap: 16 }}>
                        {/* Section Header */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: colors.primary, fontSize: 16, fontWeight: '700' }}>Cast</Text>
                            {/* Button Component */}
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: colors.greyLight, padding: 5, paddingHorizontal: 10, borderRadius: 20 }}>
                                <Text style={{ fontSize: 10 }}>See more</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Section Header */}
                        {/* Cast List */}
                        <ScrollView horizontal={true} contentContainerStyle={{ gap: 10 }}>
                            <View style={{ gap: 5 }}>
                                <Image source={require('../../assets/cast/cast_1.png')} style={{ height: 70, width: 70 }} />
                                <Text style={{ fontSize: 12 }}>Tom Holland</Text>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default DetailScreen 