import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styles from "./Products.style";
import Config from 'react-native-config';
import { FlatList } from 'react-native';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = () => {

    const { error, loading, data } = useFetch(Config.API_URL);

    const renderProduct = ({ item }) => <ProductCard product={item} />

    if (loading) {
        return <ActivityIndicator size={"large"} />;
    }

    if (error) {
        return <Text>Bir hata oluştu...</Text>
    }

    return (
        <View>
            <FlatList data={data} renderItem={renderProduct} />
        </View>
    )
}

export default Products;