import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from "./Detail.style";

const Detail = ({ route }) => {
    const { data } = route.params
    return (
        <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.bodyContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desc}>{data.description}</Text>
            <Text style={styles.price}>{data.price}₺</Text>
            </View>
        </View>
    )
}

export default Detail;