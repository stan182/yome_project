import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
});

const homeScreenStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F5FCFF",
    },
    container: {
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});

const eventListItemStyle = StyleSheet.create({
    container: {
        backgroundColor: "#935ff14a",
        padding: 5,
        margin: 5,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: 24,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "white"
    },
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    info: {
        width: "75%",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 5,
    },
    sum: {
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    }
});

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
    },
});

const mock = StyleSheet.create({
    text: {
        fontSize: 36,
        color: "red",
        fontWeight: "bold",
    },
});

export { roundButtonStyles, eventListItemStyle, commonStyles, homeScreenStyles, mock };
