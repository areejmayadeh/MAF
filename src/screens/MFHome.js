import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    Image
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { 
    Ic_Home,
    Ic_Fav,
    Ic_Cart,
    Ic_Tick
} from '../assets'
import { MFSearch } from '../components/MFSearch.component';
import {
    fetchCategories,
    fetchProducts
} from '../redux/actions';

export const MFHome = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {
        categories,
        products,
        productsLoading
    } = useSelector(state => state.Categories);
    const [selectedCategory, setSelectedCategory] = useState(null)


    useEffect(() => {
        navigation.setOptions({
            header: () => null
        })
        dispatch(fetchCategories());
        dispatch(fetchProducts());
    }, [])

    const renderCategories = () => {
        return (
            <FlatList
                contentContainerStyle={{ alignSelf: 'flex-start' }}
                horizontal
                removeClippedSubviews={true}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                style={{ flexWrap: 'wrap', marginTop: 40, marginLeft: 20, }}
                data={Object.keys(categories) || []}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={[styles.categoryContainer, selectedCategory==item ? {backgroundColor: '#E2CBFF'} : {}]}
                            onPress={() => {
                                dispatch(fetchProducts(item));
                                setSelectedCategory(item);
                            }}
                        >
                            {selectedCategory == item ? 
                                <View style={{marginRight: 8}}>
                                    <Ic_Tick width={16} height={12}/> 
                                </View>
                                
                            : null}
                            <Text 
                            style={[styles.categoryName, selectedCategory==item ? {color: '#6C0EE4'} : {}]}
                            >{`${item} (${categories[item]})`}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#F6F5F5', }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.title}>Vegetables</Text>
                <Ic_Home />
            </View>
            <MFSearch />
            {renderCategories()}
            {productsLoading ?
                <ActivityIndicator size={'large'} color={'#0BCE83'} />
                :
                (products || []).length > 0 ?
                    <View style={{ flex: 14, }}>
                        <FlatList
                            data={products}
                            keyExtractor={(_, index) => index}
                            bounces={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity 
                                        style={styles.productContainer}
                                        onPress={() => navigation.push('MFGardenDetails', { id: item.id})}
                                    >
                                        <Image
                                            source={{ uri: item.image }}
                                            style={styles.productImage}
                                        />
                                        <View style={{ marginHorizontal: 20, flexShrink: 1 }}>
                                            <Text style={styles.productName}>{item.name}</Text>
                                            <View style={styles.priceContainer}>
                                                <Text style={styles.productPriceBold}>{item.price}</Text>
                                                <Text style={styles.productPrice}>{'  € / piece'}</Text>
                                            </View>
                                            <View style={styles.actionContainer}>
                                                <TouchableOpacity
                                                    style={styles.secondaryBtn}
                                                >
                                                    <Ic_Fav />
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={styles.primaryBtn}
                                                >
                                                    <Ic_Cart />
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                    :
                    // empty view
                    null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        alignSelf: 'center',
        marginHorizontal: 20,
        fontWeight: '700',
        fontSize: 30,
        top: 27
    },
    categoryContainer: {
        height: 34,
        paddingHorizontal: 15,
        paddingVertical: 4,
        borderWidth: 1,
        borderRadius: 24,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    categoryName: {
        fontWeight: '400',
        fontSize: 14,
        color: '#9586A8'
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 40
    },
    productImage: {
        width: 177,
        height: 128,
        borderRadius: 8,
        marginLeft: 20,
        marginTop: 16
    },
    productName: {
        fontWeight: '600',
        fontSize: 18,
        flexShrink: 1,
        color: '#2D0C57'
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 15
    },
    productPriceBold: {
        fontWeight: '700',
        fontSize: 22,
        color: '#2D0C57'
    },
    productPrice: {
        fontWeight: '400',
        fontSize: 16,
        color: '#9586A8'
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    secondaryBtn: {
        height: 40,
        width: 70,
        paddingHorizontal: 29,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        marginRight: 20
    },
    primaryBtn: {
        height: 40,
        width: 70,
        paddingHorizontal: 29,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderColor: '#0BCE83',
        backgroundColor: '#0BCE83'
    }
});