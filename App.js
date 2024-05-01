import {View } from 'react-native';

import ProdutoItem from './src/telas/Produto/';

import {useFonts, LilitaOne_400Regular} from "@expo-google-fonts/lilita-one";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import mock from './src/mocks/produto';

function MenuKit(){
  return<ProdutoItem {...mock} />
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

        return <Ionicons name={iconName} size={size} color={"#A20F0F"}/>
      },

    tabBarActiveTintColor: '#A20F0F',
    tabBarInactiveTintColor: 'grey',
    tabBarHideOnKeyboard: true,
    headerShow: true,

    })}>
      <tab.Screen name="Produtos" component={MenuKit} />
      <tab.Screen name="Carrinho" component={MenuKit} />
      <tab.Screen name="Favoritos" component={MenuKit} />
      <tab.Screen name="Sobre nós" component={MenuKit} />
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
  </NavigationContainer>
}