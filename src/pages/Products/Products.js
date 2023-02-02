import React from 'react'
import { View } from 'react-native'
import styles from "./Products.style";
import Config from 'react-native-config';
import { FlatList } from 'react-native';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = ({ navigation }) => {

    const { error, loading, data } = useFetch(Config.API_URL);

    const handleProductSelect = (item) => navigation.navigate("DetailPage", { item })

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item)} />

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View>
            <FlatList data={data} renderItem={renderProduct} />
        </View>
    )
}

export default Products;