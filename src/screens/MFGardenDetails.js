import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { SliderBox } from "react-native-image-slider-box";

import { Ic_back, Ic_Fav, Ic_Cart } from '../assets';
import * as Data from '../helpers/Data';

export const MFGardenDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [details, setDetails] = useState();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        })
        getData()
    });

    const getData = () => {
        let id = route.params?.id || null;
        let dataFiltered = id ? Data?.data.filter((item) => item.id == id) || [] : []
        if (dataFiltered.length > 0) {
            setDetails(dataFiltered[0])
        } else navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <SliderBox
                images={details ? details.thumbImages : []}
                sliderBoxHeight={365}
                dotStyle={styles.dot}
            />
            <TouchableOpacity
                style={styles.backContainer}
                onPress={() => navigation.goBack()}
            >
                <Ic_back width={6} height={12} />
            </TouchableOpacity>
            <ScrollView style={styles.footerContainer} bounces={false}>
                <Text style={styles.title}>{details?.name}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.productPriceBold}>{details?.price}</Text>
                    <Text style={styles.productPrice}>{'  € / piece'}</Text>
                </View>
                <Text style={styles.hintLabel}>~ 150 gr / piece</Text>

                {/* Description */}
                <Text style={styles.descriptionLabel}>Description</Text>
                <Text style={styles.description}>{details?.description}</Text>

                {/* Actions */}
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
                        <Text style={styles.primaryTxt}>ADD TO CART</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#F6F5F5',
    },
    backContainer: {
        position: 'absolute',
        top: 50,
        left: 19,
        width: 37,
        height: 37,
        backgroundColor: 'rgba(196, 196, 196, 0.52)',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        marginBottom: 110
    },
    footerContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 35,
        paddingBottom: 120,
        marginBottom: 60,
        bottom: 0,
        position: 'absolute',
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        height: Dimensions.get('screen').height - 340,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        opacity: 6,
        shadowOpacity: 0.06,
        shadowRadius: 16,
        elevation: 5,
        backgroundColor: '#F6F5F5',
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'left',
        color: '#2D0C57'
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 16
    },
    productPriceBold: {
        fontWeight: '700',
        fontSize: 32,
        color: '#2D0C57'
    },
    productPrice: {
        fontWeight: '400',
        fontSize: 24,
        color: '#9586A8'
    },
    hintLabel: {
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'left',
        color: '#06BE77'
    },
    descriptionLabel: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'left',
        color: '#2D0C57',
        marginTop: 32,
        marginBottom: 16
    },
    description: {
        fontWeight: '400',
        fontSize: 17,
        color: '#9586A8',
        letterSpacing: -0.41,
        lineHeight: 25.5
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 40,
    },
    secondaryBtn: {
        height: 56,
        flex: 1,
        paddingHorizontal: 29,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        marginRight: 20
    },
    primaryBtn: {
        height: 56,
        flex: 3,
        paddingHorizontal: 29,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        borderColor: '#0BCE83',
        backgroundColor: '#0BCE83'
    },
    primaryTxt: {
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
        color: '#FFF',
        marginLeft: 15
    }
})