import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native';

export const MFTextInput = (props) => {
    let {
        label,
        onChange,
        placeHolderTextColor,
        keyboardType,
        valid,
        style = {},
        secureTextEntry = false,
        value = '',
        labelStyle = {}
    } = props;
    const [active, setActive] = useState(value.length > 0 ? true : false);
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputContainer, style, valid && valid.valid == false ? styles.errorInput : {}]}>
                <TextInput
                    style={[styles.input, active ? labelStyle : styles.input]}
                    placeholder={label}
                    placeholderTextColor={placeHolderTextColor ? placeHolderTextColor : '#6D7688'}
                    onChangeText={(txt) => {
                        onChange(txt);
                        if (txt.length == 0) {
                            setActive(false)
                        } else setActive(true)
                    }}
                    value={value}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    underlineColorAndroid="transparent"
                    secureTextEntry={secureTextEntry}
                />
            </View>
            {valid && valid.valid == false && valid.errorMsg ?
                <Text style={styles.errorText}>{valid.errorMsg}</Text>
                :
                null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D9D0E3',
        borderRadius: 8,
        height: 48,
        paddingHorizontal: 12.5
    },
    errorInput: {
        borderColor: '#B32D2D',
        marginBottom: 0,
    },
    label: {
        color: '#9586A8',
        fontSize: 14,
        textAlign: 'left',
        fontWeight: '400',
        marginLeft: 15,
        lineHeight: 22,
        letterSpacing: -0.41
    },
    input: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        color: '#2D0C57',
        fontWeight: '400',
        fontSize: 17,
        textAlign: 'left',
        fontWeight: 'normal'
    },
    errorText: {
        color: '#B32D2D',
        fontSize: 14,
        textAlign: 'left',
        lineHeight: 24,
        letterSpacing: 0,
        marginBottom: 14
    }
});