import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { NavigationInjectedProps, NavigationScreenProps } from "react-navigation";
import { homeScreenStyles as styles } from "../general/styles";
import _ from "lodash";
import { EventListItem } from "../general/components/EventListItem";
import { randomEvents as events } from "../utils/random";

// @ts-ignore
interface HomeScreenProps {}

type HomeProps = HomeScreenProps & NavigationInjectedProps;

export default class Home extends Component<HomeProps> {
    render() {
        return (
            <View style={styles.mainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        {_.map(events, event => <EventListItem key={event.id} event={event} handler={this.handler} />)}
                    </View>
                </ScrollView>
            </View>
        );
    }

    handler = () => {
        console.log("CLICK");
    };
}