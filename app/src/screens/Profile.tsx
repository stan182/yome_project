import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { NavigationInjectedProps, NavigationScreenProps } from "react-navigation";
import { homeScreenStyles as styles, mock } from "../general/styles";

interface ProfileScreenProps {
    navigation: NavigationScreenProps<any, any>;
}

type ProfileProps = ProfileScreenProps & NavigationInjectedProps;

export default class Profile extends Component<ProfileProps> {
    render() {
        return (
                <View style={styles.mainContainer}>
                    <ScrollView>
                         <View style={styles.container}>
                             <Text style={mock.text}>PROFILE SCREEN</Text>
                         </View>
                    </ScrollView>
                </View>
        );
    }
}
