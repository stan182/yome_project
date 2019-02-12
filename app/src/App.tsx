import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./screens/Home";

const Navigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: { title: "HOME" },

        },
    },
    {
        initialRouteName: "Home",
    }
);

const NavApp = createAppContainer(Navigator);

export default NavApp;
