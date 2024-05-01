import React from "react";
import {StyleSheet, View, StatusBar, Image} from 'react-native';

import icone from '../../../../assets/icone.png';

export default function Topo() {
    return (
    <View style={styles.geral}>
        <StatusBar />
        <Image style={styles.icone} source={icone}/>
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
        width: 350,
        height: 150,
    },
});