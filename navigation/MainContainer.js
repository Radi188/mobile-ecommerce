import * as react from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screen/HomeScreen'
import CategoryScreen from './screen/Category'
import DetailsScreen from './screen/Details'
import ContactScreen from './screen/Contact'
import SettingScreen from './screen/SettingScreen'
import ProductDetails from './screen/ProductDetails'
import BestSell from './screen/BestSell'
import Trending from './screen/Trending'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import CollectionDetails from './screen/CollectionDetails'

const homeName = 'Home';
const detailsName = 'Product';
const categoryName = 'ProductDetails';
const contactName = 'Contact';
const settingName = 'Setting'
const bestsell = 'BestSell'
const trending = 'Trending'
const collectionDetails = 'CollectionDetails'

const bottomTab = createBottomTabNavigator();
export default function MainContainer() {
    return (
        <NavigationContainer>
            <bottomTab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    header: () => null,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name
                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home';
                            color = focused ? '#2F58D2' : 'grey'
                        } else if (rn === detailsName) {
                            color = focused ? '#2F58D2' : 'grey'
                            iconName = focused ? 'list' : 'list';
                        } else if (rn === categoryName) {
                            color = focused ? '#2F58D2' : 'grey'
                            iconName = focused ? 'options' : 'options-outline';
                        } else if (rn === contactName) {
                            color = focused ? '#2F58D2' : 'grey'
                            iconName = focused ? 'comment' : 'comment'
                        }
                        return <FontAwesomeIcon name={iconName} size={size} color={color} />
                    }
                })}
            >
                <bottomTab.Screen name={homeName} component={HomeScreen} />
                <bottomTab.Screen name={detailsName} component={DetailsScreen} />
                <bottomTab.Screen name={categoryName} component={ProductDetails} options={() => ({
                    tabBarStyle: {
                        display: "none",
                    },
                    tabBarButton: () => null,
                })} />
                <bottomTab.Screen name={trending} component={Trending} options={() => ({
                    tabBarStyle: {
                        display: "none",
                    },
                    tabBarButton: () => null,
                })} />
                <bottomTab.Screen name={bestsell} component={BestSell} options={() => ({
                    tabBarStyle: {
                        display: "none",
                    },
                    tabBarButton: () => null,
                })} />
                <bottomTab.Screen name={collectionDetails} component={CollectionDetails} options={() => ({
                    tabBarStyle: {
                        display: "none",
                    },
                    tabBarButton: () => null,
                })} />
                <bottomTab.Screen name={contactName} component={ContactScreen} />
            </bottomTab.Navigator>
        </NavigationContainer>
    )

}