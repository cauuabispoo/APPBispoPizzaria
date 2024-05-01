import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children, style}){
    return <Text style={[style, estilos.texto]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'lilita300'
    }
})