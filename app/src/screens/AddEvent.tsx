import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { NavigationInjectedProps, NavigationScreenProps } from "react-navigation";
import { homeScreenStyles as styles, mock } from "../general/styles";
import { RoundButton } from "../general/components/Button";

interface AddEventScreenProps {
    navigation: NavigationScreenProps<any, any>;
}

type AddEventProps = AddEventScreenProps & NavigationInjectedProps;

export default class AddEvent extends Component<AddEventProps> {
    render() {
        return (
                <View style={styles.mainContainer}>
                    <ScrollView>
                         <View style={styles.container}>
                             <Text style={mock.text}>ADD EVENT</Text>
                         </View>
                    </ScrollView>
                </View>
        );
    }
}
