import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { eventListItemStyle as styles } from "../styles";
import { Event } from "../models";
import _ from "lodash";

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
                        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#ECEFF1" }}>
                            {this.props.event.comment}
                        </Text>
                        <Text style={{ fontSize: 18, color: "#ECEFF1" }}>
                            {this.props.event.datetime}
                        </Text>
                    </View>
                    <View style={styles.main}>
                        <View style={styles.info}>
                            <Text style={{ fontSize: 18, color: "#ECEFF1" }}>
                                Payer:
                                <Text
                                    style={{ fontSize: 18, fontWeight: "bold", color: "#ECEFF1" }}
                                >
                                    {` ${this.props.event.payer.name}`}
                                </Text>
                            </Text>
                            <Text style={{ fontSize: 18, color: "#ECEFF1" }}>
                                Participants:
                                {_.map(this.props.event.participants, participant => (
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: "bold",
                                            color: "#ECEFF1",
                                        }}
                                        key={participant.id}
                                    >
                                        {` ${participant.name},`}
                                    </Text>
                                ))}
                            </Text>
                        </View>
                        <View style={styles.sum}>
                            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fffb32" }}>
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
