import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from "./Products.style";
import Config from 'react-native-config';
import { FlatList } from 'react-native';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

const Products = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(Config.API_URL)
            setData(responseData)
        } catch (e) {

        }
    }

    const renderProduct = ({ item }) => <ProductCard product={item} />
    return (
        <View>
            <FlatList data={data} renderItem={renderProduct} />
        </View>
    )
}

export default Products;