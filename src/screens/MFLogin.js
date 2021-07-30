import React,  { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";


import { Ic_Background, Ic_Login } from '../assets';
import { MFTextInput } from '../components/MFTextInput.component';
import { loginUser } from '../redux/actions';

export const MFLogin = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState({ valid: null, errorMsg: null });
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState({ valid: null, errorMsg: null });

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        })
    });

    const validate = () => {
        let isValid = true;
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (email == '') {
            setValidEmail({ valid: false, errorMsg: 'Mandatory Field'});
            isValid = false;
        } else if (email.length > 0 && !regEmail.test(email)) {
            setValidEmail({ valid: false, errorMsg: 'Not vaild email' });
            isValid = false;
        } else if (password == '') {
            setValidPassword({ valid: false, errorMsg: 'Mandatory Field' });
            isValid = false;
        }
        return isValid
    }

    const submitLogin = () => {
        if (validate()) {
            dispatch(loginUser({
                'password': password,
                'email': email || '',
            }, (msg) => handleResponse(msg)));
        }
    }


    const handleResponse = (msg) => {
        if (msg == 'success') {
            navigation.push('Tabs')
        } else {
            //In case of failure, not covered at this time
        }
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1, backgroundColor: '#A259FF'}}>
                <Ic_Background/>
            </View>
            <View style={styles.iconContainer}>
                <Ic_Login/>
            </View>
      
        <ScrollView style={styles.footerContainer} bounces={false}>
           <Text style={styles.title}>Local Garden</Text>
           <Text style={styles.subtitle}>Because you deserve to eat fresh</Text>

           <MFTextInput
                label={'Email'}
                placeHolderTextColor={'#44476D'}
                style={{ marginBottom: 23 }}
                onChange={(txt) => {
                    setEmail(txt);
                    setValidEmail({ valid: null, errorMsg: null });
                }}
                value={email}
                valid={validEmail}
            />

            <MFTextInput
                label={'Password'}
                placeHolderTextColor={'#44476D'}
                style={{ marginBottom: 23 }}
                onChange={(txt) => {
                    setPassword(txt);
                    setValidPassword({ valid: null, errorMsg: null });
                }}
                secureTextEntry={true}
                value={password}
                valid={validPassword}
            /> 

            <TouchableOpacity style={styles.primaryBtn} onPress={() => submitLogin()}>
                <Text style={styles.primaryTxt}>LOGIN</Text>    
            </TouchableOpacity>     
        </ScrollView>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    iconContainer: {
        position: 'absolute',
        top: Dimensions.get('screen').height/ 6,
        left: Dimensions.get('screen').width / 2 - 30,
        width: 86,
        height: 86,
        backgroundColor: '#FFFFFF',
        borderRadius: 86,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 35,
        paddingBottom: 120,
        bottom: 0,
        position: 'absolute',
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        height: Dimensions.get('screen').height - 320,
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
        textAlign: 'center',
        color: '#2D0C57',
        marginBottom: 8,
        marginTop: 60
    },
    subtitle: {
        fontSize: 17,
        fontWeight: '400',
        textAlign: 'center',
        color: '#9586A8',
        marginBottom: 38
    },
    primaryBtn: {
        height: 56,
        paddingHorizontal: 29,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        borderColor: '#0BCE83',
        backgroundColor: '#0BCE83',
        marginTop: 25,
        marginBottom: 100
    },
    primaryTxt: {
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
        color: '#FFF', 
    }
})