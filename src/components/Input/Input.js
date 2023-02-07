import React from 'react'
import { View, TextInput } from 'react-native'
import styles from "./Input.style";

const Input = ({ placeholder, onChangeText, value }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} />
        </View>
    )
}

export default Input;