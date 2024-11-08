import React from "react";
import { View, ScrollView, Image } from "react-native";

import Texto from '../../componentes/Texto';

import Styles from './estilos'

import Rodape from '../componentegeral/Rodape';

import { Video, ResizeMode } from 'expo-av';


export default function index({ textos }) {
    const video = React.useRef(null);
    return <ScrollView style={Styles.sobre}>
        <Rodape></Rodape>
        <Texto style={Styles.textoSobre}>{textos.historia}</Texto>
        <Image source={textos.img_producao} style={Styles.fotoFitas} resizeMode="contain" />
        <Texto style={Styles.textoSobre}>{textos.texto_imagem}</Texto>
        <View>
            <Video
                ref={video}
                style={Styles.video}
                source={{
                    uri: 'https://cdn.pixabay.com/video/2022/09/25/132538-753956329_large.mp4',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
            />
        </View>

    </ScrollView>
}