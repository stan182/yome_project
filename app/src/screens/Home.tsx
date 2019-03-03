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
const generateComment = () => {
    return "asdf";
}

// TODO: hardcode friends
const generateUserId = () => ` User${Math.floor(Math.random()*100)}`;

const generateSum = () => Math.floor(Math.random() * 1000);

// generateEvent :: Unit -> Eff (random :: RANDOM) Event
const generateEvent = () => {
    return {
        datetime: Date.now(),
        comment: generateComment(),
        payer: generateUserId(),
        sum: generateSum(),
        participants: _.fill(Array(Math.floor(Math.random() * 10)+1), 1).map(() => generateUserId())
    };
}
const events: Event[] = _.fill(Array(Math.floor(Math.random() * 100)+1), 1).map(() => generateEvent());

type TapHandler = () => void;


const eventToString = (event: Event): string => `${event.comment} ${event.datetime} ${event.sum} ${event.payer} ${event.participants}`

// :: TapHandler -> Event -> UI
const showEvent = (event: Event, handler: TapHandler): ? => (
    <TouchableOpacity onPress={handler}>
        <View style={styles.eventContainer} >
            <Text >{eventToString(event)}</Text>
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
