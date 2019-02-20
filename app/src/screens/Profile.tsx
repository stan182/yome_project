import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { NavigationInjectedProps, NavigationScreenProps } from "react-navigation";
import { homeScreenStyles as styles, mock } from "../general/styles";
import { Images } from "../general/styles/images";

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
                         <View style={{flexDirection: 'row', jusifyContent: "center", backgroundColor: "#935ff1", height: 150}}>
                                 <Image source={Images.avatar} resizeMode="contain" style={{width: 128, height: 128, margin: 10}}/>
                             <View style={{flex: 1, justifyContent: "center"}}>
                                 <Text style={{fontSize: 32, color: "white"}}>Surprised Cat</Text>
                             </View>
                         </View>
                             <Text style={mock.text}>PROFILE SCREEN</Text>
                         </View>
                    </ScrollView>
                </View>
        );
    }
}
