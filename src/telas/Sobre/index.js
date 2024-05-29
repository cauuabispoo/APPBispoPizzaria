import React from "react";
import { ScrollView, Image} from "react-native";

import Texto from '../../componentes/Texto';

import Styles from './estilos'

import Rodape from '../componente/Rodape';

export default function index({textos}){
    return <ScrollView style={Styles.sobre}>
        <Rodape></Rodape>
        <Texto style={Styles.textoSobre}>{textos.historia}</Texto>
        <Image source={textos.img_producao} style={Styles.fotoFitas} resizeMode="contain"/>
        <Texto style={Styles.textoSobre}>{textos.texto_imagem}</Texto>
    </ScrollView>
}