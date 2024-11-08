import {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';

import ProdutoItem from './src/telas/Produto/';
import mock from './src/mocks/produto';

import Sobre from './src/telas/Sobre/';
import mock_sobre from './src/mocks/sobre';

import Produtos from './src/telas/produtos/';
import mock_produtos from './src/mocks/produtos';

import Perfil from './src/telas/Perfil/';
import mock_perfil from './src/mocks/perfil';

import camera from './src/telas/Perfil/componentes/camera';


import {useFonts, LilitaOne_400Regular} from "@expo-google-fonts/lilita-one";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Texto from './src/componentes/Texto';
import {Audio} from 'expo-av';

function MenuProduto(){
  return<ProdutoItem {...mock} />
}

function MenuSobre(){
  return<Sobre {...mock_sobre} />
}

function MenuProdutos(){
  return<Produtos {...mock_produtos} />
}

function MenuPerfil(){
  return<Perfil {...mock_perfil} />
}

function MenuAudio(){
  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      console.log('status', audioStatus);
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/AC_DC_-_Thunderstruck.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return <TouchableOpacity onPress={()=>{if(!loading){setAudioStatus(!audioStatus);}}}>
    <Texto>On/Off</Texto>
  </TouchableOpacity>
}

const tab = createBottomTabNavigator();

function TabMenu(){
  return <tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === "Produtos"){
          iconName = focused
          ? 'list'
          : 'list-outline';
        }else if(route.name === "Carrinho"){
          iconName = focused
          ? 'bag'
          : 'bag-outline';
        }else  if (route.name === "Favoritos"){
          iconName = focused
          ? 'bookmark'
          : 'bookmark-outline';
        }
        else if (route.name === "Sobre nós"){
          iconName = focused
          ? 'information-circle'
          : 'information-circle-outline';
        }
        else if (route.name === "Perfil"){
          iconName = focused
          ? 'person-circle'
          : 'person-circle-outline';
        }

        return <Ionicons name={iconName} size={size} color={"#A20F0F"}/>
      },

    tabBarActiveTintColor: '#A20F0F',
    tabBarInactiveTintColor: 'grey',
    tabBarHideOnKeyboard: true,
    headerShown: false, 

    })}>
      <tab.Screen name="Produtos" component={MenuProdutos} />
      <tab.Screen name="Carrinho" component={MenuProduto} />
      <tab.Screen name="Favoritos" component={MenuProduto} />
      <tab.Screen name="Sobre nós" component={MenuSobre} />
      <tab.Screen name="Perfil" component={camera} />
    </tab.Navigator>
}


export default function App() {
  const [ fonteCarregada ] = useFonts({"lilita300" : LilitaOne_400Regular}); 

  //Verifica se a fonte já foi carregada
  if(!fonteCarregada){
    return<View></View>
  }
  return <NavigationContainer>
    <TabMenu/>
    <MenuAudio/>
  </NavigationContainer>

  
}