import React from "react";
import {StyleSheet, View, StatusBar, Image} from 'react-native';

import pizzaCala from '../../../../assets/calabresa.png';
import Texto from '../../../componentes/Texto.js';
import icone from '../../../../assets/icone.png';

export default function Topo({titulo}) {
    return (
    <View style={styles.geral}>
        <StatusBar />
        <Image style={styles.pizza} source={pizzaCala}/>
        <Texto style={styles.detalhes}>{titulo}</Texto>
    </View>
    );
}

const styles = StyleSheet.create({
    geral: {
        backgroundColor: '#A20F0F',
        alignItems: 'center',
        justifyContent: 'center',   
    },
    icone: {
        width: 250,
        height: 100,
    },
    pizza: {
        width: 400,
        height: 250,
    },
    detalhes: {
        position: 'absolute',
        paddingBottom: 150,
        fontSize: 20,
        textAlign: 'right',
        width: "100%",
    },
});