import React from "react";
import {StyleSheet, View, } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Rodape from './componentes/Rodape';

export default function index({topo, detalhes}) {
    return (
        <View style={styles.geral}>
            <Rodape></Rodape>
            <View style={styles.corpo}>
                <Topo {...topo}></Topo>
                <Detalhes {...detalhes}></Detalhes>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    geral: {
        flex: 1,
        backgroundColor: '#A20F0F', 
    },
    corpo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',   
    },

});