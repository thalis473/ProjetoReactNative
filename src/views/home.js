import React from 'react';
import { View,StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = (props) => {
    return (
            <View style={styles.container}>
               
                    <Image  style={styles.logo} source={require('../img/logo1.jpeg')}/>
                    
                    {"\n"}
                <View style={styles.content}>
                    <Text  style={styles.titulo}>Seja bem vindo</Text>
                    <Text style={styles.paragrafo}>aproveite as PROMOÇÕES </Text>
                   
                </View>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/?hl=pt-br')}>
                    <Text style={styles.instagram}> Clique aqui e siga nosso Instagram </Text> 
                    <MaterialCommunityIcons name="instagram" color='white' size={50} />    
                </TouchableOpacity>
            </View>
        );
};

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ff5100e3",
        textAlign:'center',
    },
    paragrafo:{
        textAlign:'center',
        color:'#fff',
    },
    logo: {
        width: 160,
        height: 100,
    },
    titulo:{
        fontSize:20,
        color: '#000',
        fontWeight:'bold',
    },
    instagram:{
        fontWeight:'bold',
        color: 'white',
        fontSize:25,
        textAlign:'center',
        borderWidth:3,
        borderStyle:'fff',
        borderColor:'#000',
        marginTop:5,
    },
    content:{
        backgroundColor:'#ff5100e3',
        padding: 20,
    }
})