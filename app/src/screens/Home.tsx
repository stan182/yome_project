import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { NavigationInjectedProps, NavigationScreenProps } from "react-navigation";
import { styles } from "../general/styles";

interface HomeScreenProps {
    navigation: NavigationScreenProps<any, any>;
}

type HomeProps = HomeScreenProps & NavigationInjectedProps;

export default class Home extends Component<HomeProps> {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Add Event" onPress={this.handler} />
            </View>
        );
    }

    handler = () => {
        console.log("CLICK")
    }
}
