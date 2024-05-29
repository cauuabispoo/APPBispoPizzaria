import React from "react";
import {TouchableOpacity, StyleSheet} from "react-native";

export default function Botao({children, style, onPress}){
    return <>
        <TouchableOpacity style={[style, estilos.botao]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 10,
        padding: 15
    }
})