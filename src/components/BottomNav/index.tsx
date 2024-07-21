import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import HomeScreen from "../../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <Image
                        style={{ height: 24, width: 24 }}
                        source={require('../../assets/Icon/ic_movie_active.png')} /> :
                        <Image
                            style={{ height: 24, width: 24 }}
                            source={require('../../assets/Icon/ic_movie.png')} />
                )
            }}
                name="HomeScreen" component={HomeScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? <Image
                            style={{ height: 24, width: 18 }}
                            source={require('../../assets/Icon/ic_bookmark_active.png')} /> :
                            <Image
                                style={{ height: 24, width: 24 }}
                                source={require('../../assets/Icon/ic_bookmark.png')} />
                    )
                }}
                name="TicketScreen" component={HomeScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? <Image
                            style={{ height: 24, width: 18 }}
                            source={require('../../assets/Icon/ic_ticket_active.png')} /> :
                            <Image
                                style={{ height: 24, width: 24 }}
                                source={require('../../assets/Icon/ic_ticket.png')} />
                    )
                }}
                name="SavedScreen" component={HomeScreen} />
        </Tab.Navigator>

    )
}

export default BottomNav;