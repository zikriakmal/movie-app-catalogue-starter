import { NavigationProp, ParamListBase } from "@react-navigation/native"
import { Alert, ScrollView, StatusBar, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AppBar from "../../components/AppBar"
import NowShowing from "../../components/NowShowing"
import Popular from "../../components/Popular"
import SectionHeader from "../../components/SectionHeader"
import { NowShowingList, PopularList } from "./dummyData"
import { NowShowingType, PopularType } from "./type"
import styles from "./style"


const HomeScreen = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar backgroundColor={'white'} />
            {/* App Bar */}
            <AppBar />
            <View>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* Now Showing Movie */}
                    <View>
                        <SectionHeader sectionName={"Now Showing"} action={() => Alert.alert("Under maintenance")} />
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}>
                            {NowShowingList.map((data: NowShowingType, i: number) =>
                                <NowShowing onPress={() => navigation.navigate('DetailScreen')}
                                    key={i}
                                    ratingText={data.ratingText}
                                    title={data.title}
                                    image={data.image}
                                />
                            )}
                        </ScrollView>
                    </View>
                    {/* Popular Movie */}
                    <View style={styles.popularMovieContainer}>
                        <SectionHeader sectionName={"Popular"} action={() => Alert.alert("Under maintenance")} />
                        {PopularList.map((data: PopularType) => (
                            <Popular
                                onPress={() => Alert.alert("Under Maintenance")}
                                title={data.title}
                                image={data.image}
                                ratingText={data.ratingText}
                                categories={data.categories}
                                durationText={data.durationText} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen