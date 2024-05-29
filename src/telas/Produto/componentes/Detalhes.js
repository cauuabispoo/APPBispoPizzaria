import React from "react";
import {StyleSheet, View, Alert} from 'react-native';

import Texto from '../../../componentes/Texto.js';
import Botao from '../../../componentes/Botao.js';


export default function Detalhes({nome, detalhes, preco, botao}) {
    return (
    <View style={styles.geral}>
        <View style={styles.container}>
            <Texto style={styles.titulo}>{nome}</Texto>
            <Texto style={styles.corpo}>{detalhes}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
        </View>
            <Botao onPress={() => {Alert.alert("Carrinho de compras!", 
            "Em breve teremos mais funcionalidades para você!!!")}} style={styles.botao} >
                <Texto style={styles.tbotao}>{botao}</Texto>
            </Botao>
    </View>
    );
}

const styles = StyleSheet.create({
    geral: {
        alignItems: 'center',
    },

    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    titulo: {
        fontSize:30,
        textAlign: 'center',
        color: 'white',
    },
    corpo: {
        paddingTop: 5,
        fontSize: 15,
        color: 'white',
    },
    preco: {
        paddingTop: 10,
        fontSize: 25,
        //color: 'green',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    botao: {
    },
    tbotao: {
        color: 'white',
        fontSize: 20,
        lineHeight: 30,
    }
});