import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from "./Detail.style";

const Detail = ({ route }) => {
    const { item } = route.params
    console.log(item);
    return (
        <View style={styles.container}>
            <Image style={styles.image} />
            <Text style={styles.title}>Title</Text>
            <Text style={styles.desc}>desc</Text>
            <Text style={styles.price}>price</Text>
        </View>
    )
}

export default Detail;