import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    scrollView: {
        flex: 1,
    }
})

const homeScreenStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F5FCFF",
    },
    container: {
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    eventContainer: {
           backgroundColor: "#935ff14a",
           borderWidth: 1,
           padding: 5,
           margin: 10,
           borderRadius: 10,
           width: 300,
           height: 50,
    }
})

const roundButtonStyles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 10,
        right: 10,
        margin: 10,
        width: 64,
        height: 64,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        backgroundColor: "#935ff1",
        borderRadius: 64,
    },
    title: {
        color: "white",
        fontSize: 32,
        alignSelf: "center",
        lineHeight: 32,
    }
})

export { styles, roundButtonStyles, commonStyles, homeScreenStyles };
