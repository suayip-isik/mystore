import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#64b5f6',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    bodyContainer: {
        flex: 1,
    },
    logo: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: 'white',
    },
})