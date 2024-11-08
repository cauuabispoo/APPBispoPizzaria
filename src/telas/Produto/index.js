import React from "react";
import {StyleSheet, View, } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Rodape from '../componentegeral/Rodape';

import styles from './estilos'

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