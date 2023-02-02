import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from "./ProductCard.style";

const ProductCard = ({ product, onSelect }) => {
    return (
        <Pressable onPress={onSelect} style={styles.container}>
            <Image style={styles.image} source={{ uri: product.image }} />
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
            </View>
        </Pressable>
    )
}

export default ProductCard;