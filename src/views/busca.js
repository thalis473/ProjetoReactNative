import React from 'react';
import { View,StyleSheet, Text, Image,FlatList,TextInput } from 'react-native';
import CardProdutos from '../components/cardBusca';


const Busca = (props) => {
    
    const dados = [
        {
            categoria: "fogao",
            imagem: "/produtos_img/fogao.jpg",
            descricao: "Fogão 5 Bocas Mueller Decorato Acendimento",
            preco: 1559.99,
            precoFinal: 1424.91
        },
        {
            categoria: "geladeira",
            imagem: "/produtos_img/geladeira.jpg",
            descricao: "Geladeira/Refrigerador Brastemp Frost Free Du",
            preco: 2799,
            precoFinal: 2399.1
        },
        {
            categoria: "liquidificador",
            imagem: "/produtos_img/liquidificador.jpg",
            descricao: "Liquidificador Philco PH900 2L Preto com Filt",
            preco: 199,
            precoFinal: 109
        },
        {
            
            categoria: "maquina de lavar",
            imagem: "/produtos_img/maquina_de_lavar.jpg",
            descricao: "Lavadora de Roupas Electrolux 8.5KG",
            preco:1907.12,
            precoFinal: 1.273
        },
        {
            
            categoria: "cafeteira",
            imagem: "/produtos_img/cafeteira.jpg",
            descricao: "Cafeteira Elétrica Britânia CP15 Xícaras",
            preco: 170.00,
            precoFinal: 97.00
        },
        {
            
            categoria: "ventilador",
            imagem: "/produtos_img/ventilador.jpg",
            descricao: "Ventilador de Mesa Arno Silence Repelente Líq",
            preco: 389.00,
            precoFinal: 270.00
        },
        {
            
            categoria: "torradeira",
            imagem: "/produtos_img/torradeira.jpg",
            descricao: "Torradeira Lenoxx PTR 203 2 Fatias",
            preco: 109.00,
            precoFinal: 69.00
        },
        {
        
            categoria: "tv",
            imagem: "/produtos_img/televisao.jpg",
            descricao: "Smart TV LED PRO 43''Full HD LG 43LM 631 3",
            preco: 1875.9,
            precoFinal: 2199.4
        },
        {
        
            categoria: "microondas",
            imagem: "/produtos_img/microondas.webp",
            descricao: "Electrolux MT30S 20",
            preco: 430.00,
            precoFinal: 270.00
        },
        {
            
            categoria: "impressora",
            imagem: "/produtos_img/impressora.webp",
            descricao: "Impressora Tanque de Tinta Epson",
            preco: 799.00,
            precoFinal: 478.00
        },
        {
        
            categoria: "radio",
            imagem: "/produtos_img/radio.webp",
            descricao: "Radio Britania",
            preco: 789.00,
            precoFinal: 469.00
        },
        {
        
            categoria: "arcondicionado",
            imagem: "/produtos_img/microondas.webp",
            descricao: "Ar-Condicionado Split Samsung Digital",
            preco: 2499.4,
            precoFinal: 2100.9
        }
    ]
    return (
        <View style={styles.container}>
            <Image  style={styles.logo} source={require('../img/logo1.jpeg')}/>
 
                <Text style={styles.label}>Buscar</Text>
                <TextInput style={styles.input} placeholder="buscar" />
                    
                 <FlatList 
                    data={dados}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item}) => (
                        <CardProdutos data={item} />
                    )}
                    />
                
        </View>
    );
};

export default Busca

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ff5100e3",
        textAlign:'center',
    },
    logo: {
        width: 160,
        height: 100,
        marginTop:60,
    },
    label: {
        fontSize:20,
        color:'#c3c634',
        fontWeight:'bold',
        textAlign:'left'
    },
    input:{
        color: 'green',
        height:50,
        backgroundColor:'#ffffff',
        width:'90%',
        padding:4,
    },
    content:{
        backgroundColor:'#e4ec7b',
        padding: 20,
    },
      map: {
        flex: 1
      }
})