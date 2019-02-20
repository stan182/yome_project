import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { NavigationInjectedProps, NavigationScreenProps } from "react-navigation";
import { homeScreenStyles as styles } from "../general/styles";

interface HomeScreenProps {
    navigation: NavigationScreenProps<any, any>;
}

type HomeProps = HomeScreenProps & NavigationInjectedProps;

export default class Home extends Component<HomeProps> {
    render() {
        return (
                <View style={styles.mainContainer}>
                    <ScrollView>
                         <View style={styles.container}>
                             <TouchableOpacity onPress={this.handler}>
                                <View style={styles.eventContainer} >
                                    <Text style={{fontSize: 24}}>EVENT</Text>
                                </View>
                             </TouchableOpacity>
                             <TouchableOpacity onPress={this.handler}>
                                <View style={styles.eventContainer}>
                                    <Text style={{fontSize: 24}}>EVENT</Text>
                                </View>
                             </TouchableOpacity>
                             <TouchableOpacity onPress={this.handler}>
                                <View style={styles.eventContainer}>
                                    <Text style={{fontSize: 24}}>EVENT</Text>
                                </View>
                             </TouchableOpacity>
                             <TouchableOpacity onPress={this.handler}>
                                <View style={styles.eventContainer}>
                                    <Text style={{fontSize: 24}}>EVENT</Text>
                                </View>
                             </TouchableOpacity>
                             <TouchableOpacity onPress={this.handler}>
                                <View style={styles.eventContainer}>
                                    <Text style={{fontSize: 24}}>EVENT</Text>
                                </View>
                             </TouchableOpacity>
                             <TouchableOpacity onPress={this.handler}>
                                <View style={styles.eventContainer}>
                                    <Text style={{fontSize: 24}}>EVENT</Text>
                                </View>
                             </TouchableOpacity>
                         </View>
                    </ScrollView>
                </View>
        );
    }

    handler = () => {
        console.log("CLICK")
    }
}
