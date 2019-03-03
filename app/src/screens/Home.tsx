import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { NavigationInjectedProps, NavigationScreenProps } from "react-navigation";
import { homeScreenStyles as styles } from "../general/styles";
import _ from "lodash";

interface HomeScreenProps {
    navigation: NavigationScreenProps<any, any>;
}

type HomeProps = HomeScreenProps & NavigationInjectedProps;

type UserId = string;
type Money = number;
interface Event  {
    datetime: number,
    comment: string,
    payer: UserId,
    sum: Money,
    participants: UserId[]
}
const events: Event[] = [{ datetime: Date.now(), comment: 'asdf', payer: 'DK', sum: 1000, participants: ['DK', 'SE'] }];

// :: TapHandler -> Event -> UI
type TapHandler = () => void;

const showEvent = (event: Event, handler: TapHandler): ? => (
    <TouchableOpacity onPress={handler}>
        <View style={styles.eventContainer} >
            <Text style={{fontSize: 24}}>{event.comment}</Text>
        </View>
    </TouchableOpacity>
)

export default class Home extends Component<HomeProps> {
    render() {
        return (
                <View style={styles.mainContainer}>
                    <ScrollView>
                         <View style={styles.container}>
                            {_.map(events, event => showEvent(event, this.handler))}
                         </View>
                    </ScrollView>
                </View>
        );
    }

    handler = () => {
        console.log("CLICK")
    }
}



// type Event = { datetime: DateTime, comment: Text, payer: UserId, sum: Money, participants: f UserId }

// type Event = { datetime: DateTime, comment: Text, participants: { [UserId]: { cheque: Money, paid: Money } } }

// History
// :: f Event
// :: f Event -> f (UI (Event'))

// Summary
// ?
