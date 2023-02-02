import { View, Text } from 'react-native'
import React from 'react'
import styles from "./Products.style";
import Config from 'react-native-config';

const Products = () => {
    return (
        <View>
            <Text>Products {Config.API_URL}</Text>
        </View>
    )
}

export default Products;