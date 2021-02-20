import React from 'react';
import { View,StyleSheet,TextInput, Button, Text, Image } from 'react-native';
/*import { NavigationContainer } from '@react-navigation/native';*/

const Login = ({ navigation }) => {
    return (
            <View style={styles.container}>
                <Image  style={styles.logo} source={require('../img/logo1.jpeg')}/>

                <View style={styles.frm}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={styles.input} placeholder="Email" />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.input} placeholder="Senha" />
                    
                    <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Login"
                    />
                </View>
            </View>
    );
};

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ff5100e3",
        textAlign:'center',
    },
    frm:{
        textAlign:'center',
        backgroundColor:"",
        width:'70%',
        height:250,
        padding:20,
        paddingTop:'auto', 
        paddingBottom:'auto',  
        borderStyle:'solid',
        borderColor:'white',
        borderRadius:5,
        borderWidth:1,
        marginTop:15,
    },
    label: {
        fontSize:20,
        color:'#dark',
        fontWeight:'bold',
    },
    input:{
        color: 'dark',
        height:50,
        backgroundColor:'#ccc'
    },
    logo: {
        width: 160,
        height: 100,
        }
})