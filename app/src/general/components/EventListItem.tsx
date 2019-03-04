import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { eventListItemStyle as styles } from "../styles";
import { Event } from "../models";

interface EventListItemProps {
    event: Event;
    handler: () => void;
}

class EventListItem extends Component<EventListItemProps> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.handler}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                            {this.props.event.comment}
                        </Text>
                        <Text style={{ fontSize: 18 }}>{this.props.event.datetime}</Text>
                    </View>
                    <View style={styles.main}>
                        <View style={styles.info}>
                            <Text style={{ fontSize: 18 }}>
                                Payers:
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                    {" "}
                                    {this.props.event.payer}
                                </Text>
                            </Text>
                            <Text style={{ fontSize: 18 }}>
                                Participants:
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                    {this.props.event.participants}
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.sum}>
                            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                                {this.props.event.sum} RUB
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export { EventListItem };
