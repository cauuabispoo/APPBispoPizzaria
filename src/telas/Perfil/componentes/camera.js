import { Camera, CameraType } from 'expo-camera/legacy';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Ionicos from 'react-native-vector-icons/Ionicons'

import { Card, TextInput } from 'react-native-paper';
import Texto from '../../../componentes/Texto';
import Botao from '../../../componentes/Botao.js';


export default function App() {
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
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            console.log("A foto foi tirada");
            setCapturedImage(photo.uri);
        }
    }

    return (
        <View style={styles.container}>
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

            <Card>
                <Card.Content>
                    {//verifica se a foto foi tirada
                        capturedImage &&
                        <View style={styles.fotoTiradaContainer}>
                            <Image source={{ uri: capturedImage }} style={{ flex: 1 }} />
                        </View>
                    }
                    <Texto>Nome completo</Texto>
                    <TextInput value='Seu nome completo'></TextInput>
                    <Texto>E-mail</Texto>
                    <TextInput value='Seu e-mail contato'></TextInput>
                    <Texto>Whatsapp</Texto>
                    <TextInput keyboardType='numeric' value='(11) 1234-56789'></TextInput>
                    <Botao>
                        <Texto style={styles.btsalvar}>SALVAR INFORMAÇÕES</Texto>
                    </Botao>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#A20F0F'
    },
    camera: {
        width: '75%',
        height: '50%',
        alignSelf: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    cameraVirarBotao: {
        position: 'absolute',
        bottom: 10,
        left: 20,
    },
    cameraBotao: {
        position: 'absolute',
        bottom: 10,
        right: 20,
    },
    fotoTiradaContainer: {
        width: '50%',
        height: '25%',
        alignSelf: 'center',
        borderRadius: '10',
    },
    btsalvar: {
        color: "white",
      }
});
