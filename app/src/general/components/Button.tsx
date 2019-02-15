import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { roundButtonStyles as styles } from "../styles";

interface RoundButtonProps {
    onPress: () => void;
}

class RoundButton extends Component<RoundButtonProps> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.container}>
                    <Text style={styles.title}>{"+"}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export { RoundButton };
