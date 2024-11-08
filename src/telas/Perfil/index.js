
import styles from './estilos'

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, PixelRatio, Button, Image } from 'react-native';

import { Camera, CameraType } from 'expo-camera/legacy';
import Ionicos from 'react-native-vector-icons/Ionicons'

import { Card } from 'react-native-paper';

import Texto from '../../componentes/Texto.js';
import Botao from '../../componentes/Botao.js';

export default function index() {
  const [nomeuser, mudaNome] = React.useState('');
  const [sobrenomeuser, mudaSobrenome] = React.useState('');
  const [cidadeuser, mudaCidade] = React.useState('');
  const [profiuser, mudaProfi] = React.useState('');


  const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const [capturedImage, setCapturedImage] = useState(null);
    const cameraRef = useRef(null);

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
    
    async function tirarFoto() {
        //verifica se a foto foi tirada
        if(cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            console.log("A foto foi tirada");
            setCapturedImage(photo.uri);
        }
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.fundouser}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cameraVirarBotao} onPress={toggleCameraType}>
                        <Ionicos name='reload' size={30} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cameraBotao} onPress={tirarFoto}>
                        <Ionicos name='camera' size={30} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </Camera>
      </TouchableOpacity>

      <View style={styles.input}>
        <View>
          <Texto>Nome</Texto>
          <TextInput
            onChangeText={mudaNome}
            value={nomeuser}
            placeholder="Insira o seu nome"
          />
        </View>

        <View>
          <Texto>Sobrenome</Texto>
          <TextInput
            onChangeText={mudaSobrenome}
            value={sobrenomeuser}
            placeholder="Insira o seu sobrenome"
          />
        </View>
      </View>

      <View style={styles.input2}>
        <View>
          <Texto>Cidade</Texto>
          <TextInput
            onChangeText={mudaCidade}
            value={cidadeuser}
            placeholder="Insira a sua cidade"
          />
        </View>

        <View>
          <Texto>Profissão</Texto>
          <TextInput
            onChangeText={mudaProfi}
            value={profiuser}
            placeholder="Insira a sua profissão"
          />
        </View>
      </View>

      <Botao>
        <Texto style={styles.btsalvar}>SALVAR INFORMAÇÕES</Texto>
      </Botao>
    </View>
  );
}
