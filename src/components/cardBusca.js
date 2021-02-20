import React from 'react';
import { Text, View, StyleSheet, Image} from "react-native";

const CardProdutos = (props) =>{
    return (
            <View style={styles.cardbusca}>
              
                <Text>Nome: {props.data.categoria}</Text>                
                <Text>Descrição: {props.data.descricao}</Text>
                <Text>Preço:{props.data.preco}</Text>
                <Text>Preço:{props.data.precoFinal}</Text>  
                 
                       
            </View>
        );
}

export default CardProdutos;


const styles = StyleSheet.create({
    cardbusca: {
        backgroundColor:'white',
        margin:5,
        borderRadius:10,
        padding:15,

    },
    paragrafo:{
        textAlign:'center',
        color:'green',
    },
    logo: {
        width: 160,
        height: 100,
    },
    titulo:{
        fontSize:20,
        color: 'dark',
        fontWeight:'bold',
    },
    instagram:{
        fontWeight:'bold',
        color: 'green',
        fontSize:25,
        textAlign:'center',
    }
});