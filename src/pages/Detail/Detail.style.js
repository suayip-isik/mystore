import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    bodyContainer: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    desc: {
        fontStyle: 'italic',
        marginVertical: 5,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'right',
    },
})