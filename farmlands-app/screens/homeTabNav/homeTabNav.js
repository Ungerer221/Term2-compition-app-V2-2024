import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../homeScreen';
import ProfileScreen from '../profileScreen';
import GameScreen from '../gameScreen';
import NewsScreen from '../newsScreen';
import SignUpScreen from '../signUpScreen';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: '#F65774',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: '#F65774',
                }}
            />
            <Tab.Screen
                name="Game"
                component={GameScreen}
                options={{
                    tabBarLabel: 'Game',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="controller-classic-outline" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: '#F65774',
                }}
            />
            <Tab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    tabBarLabel: 'News',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: '#F65774',
                }}
            />
            <Tab.Screen
                name="Signup"
                component={SignUpScreen}
                options={{
                    tabBarLabel: 'Signup',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: '#F65774',
                }}
            />
        </Tab.Navigator>
    );
}