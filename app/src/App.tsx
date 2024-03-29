import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Home from "./screens/Home";
import AddEvent from "./screens/AddEvent";
import Profile from "./screens/Profile";
import { NavigationRoutes } from "./general/models";
// @ts-ignore
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const Navigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ tintColor}: any) => {
                    return (
                        <Icon
                            size={25}
                            name={"md-home"}
                            style={{ color: tintColor}}
                        />
                    );
                },
            },
        },
        Add: {
            screen: AddEvent,
            navigationOptions: {
                tabBarIcon: ({ tintColor }: any) => {
                    return (
                        <Icon
                            size={25}
                            name={"md-add"}
                            style={{ color: tintColor}}
                        />
                    );
                },
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({ tintColor }: any) => {
                    return (
                        <Icon
                            size={25}
                            name={"md-person"}
                            style={{ color: tintColor}}
                        />
                    );
                },
            },
        },
    },
    {
        initialRouteName: NavigationRoutes.Home,
        shifting: true,
        barStyle: { backgroundColor: "#263238" },
    }
);

const NavApp = createAppContainer(Navigator);

export default NavApp;
