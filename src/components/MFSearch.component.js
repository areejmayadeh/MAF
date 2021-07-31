import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
import { Ic_Search } from '../assets/Ic_Search';

export const MFSearch = (props) => {
    const [search, setSearch] = useState('');
    return (
        <View style={styles.searchSection}>
            <Ic_Search width={16} height={16}/>
            <TextInput
                style={styles.input}
                placeholder={'Search'}
                placeholderTextColor={'#6D7688'}
                onChangeText={(searchString) => {
                    setSearch(searchString)
                }}
                value={search}
                spellCheck={false}
                autoCorrect={false}
                autoCompleteType={'off'}
                underlineColorAndroid="transparent"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E7E7FA',
        borderRadius: 27,
        height: 48,
        paddingHorizontal: 12.5,
        marginHorizontal: 20,
        paddingLeft: 25,
    },
    input: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        color: '#9586A8',
        fontSize: 17,
        textAlign: 'left',
        textDecorationColor: 'transparent',
        marginLeft: 21,
    },
    inputLabel: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        color: '#253B69',
        fontSize: 14,
        textAlign: 'left',
        textDecorationColor: 'transparent',
        marginRight: 12,
    },
});