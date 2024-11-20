import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import css from "./cssProd"; // Certifique-se de que a estilização esteja correta
import Icon from 'react-native-vector-icons/AntDesign';
import Rodape from '../componentegeral/Rodape';
import { useNavigation } from '@react-navigation/native'; // Importando para manipular o foco

// Pizzas para exibição
const pizzas = {
    pizzaCalabresa: {
        name: "Pizza de Calabresa",
        image: 'https://th.bing.com/th/id/OIP.5Cxd5vFN90NEVU6ri6ZI7QHaHa?rs=1&pid=ImgDetMain'
    },
    pizzaMussarela: {
        name: "Pizza de Mussarela",
        image: 'https://th.bing.com/th/id/OIP.pA_-yx03ro9iby8pf7-ZOAHaHa?rs=1&pid=ImgDetMain'
    },
    pizzaDoisQueijos: {
        name: "Pizza de Dois Queijos",
        image: 'https://th.bing.com/th/id/OIP.QagKAbbW_hv96VwJu4FSSQHaE8?rs=1&pid=ImgDetMain'
    },
    pizzaFrango: {
        name: "Pizza de Frango",
        image: "https://www.pizzarianotadez.com.br/wp-content/uploads/2020/01/4.png"
    },
    pizzaRomeuJulieta: {
        name: "Pizza Romeu e Julieta",
        image: "https://mrteddypizza.com.br/wp-content/uploads/2024/03/Design-sem-nome-2024-03-21T021135.418.png"
    },
    pizzaChocolateMorango: {
        name: "Pizza de Chocolate com Morango",
        image: 'https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/png-pizza-doce-morango-chocolate.png?fit=1123%2C422&ssl=1'
    },
};

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState({});
    const navigation = useNavigation(); // Para manipular a navegação

    // Função para carregar os favoritos do AsyncStorage
    const carregarFavoritos = async () => {
        try {
            const favoritosSalvos = await AsyncStorage.getItem('favoritos');
            if (favoritosSalvos) {
                setFavoritos(JSON.parse(favoritosSalvos)); // Atualiza os favoritos no estado
            }
        } catch (error) {
            console.error("Erro ao carregar favoritos:", error);
        }
    };

    // Adicionando um listener para recarregar os favoritos sempre que a tela for focada
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            carregarFavoritos(); // Chama a função para recarregar os favoritos
        });

        return unsubscribe; // Cleanup do listener
    }, [navigation]);

    // Função para alternar (favoritar/desfavoritar) a pizza
    const alternarFavorito = async (pizzaKey) => {
        try {
            const novosFavoritos = { ...favoritos };

            // Se a pizza já está favoritada, removemos ela
            if (novosFavoritos[pizzaKey]) {
                delete novosFavoritos[pizzaKey];
            } else {
                // Caso contrário, adicionamos a pizza aos favoritos
                novosFavoritos[pizzaKey] = true;
            }

            // Atualiza o AsyncStorage com a nova lista de favoritos
            await AsyncStorage.setItem('favoritos', JSON.stringify(novosFavoritos));

            // Atualiza o estado com os favoritos restantes
            setFavoritos(novosFavoritos);
        } catch (error) {
            console.error("Erro ao alternar favorito:", error);
        }
    };

    return (
        <ScrollView style={css.container}>
            <Rodape />
            <View style={css.linha}>
                {Object.keys(favoritos).length === 0 ? (
                    <Text style={css.vazioText}>Você ainda não tem favoritos.</Text>
                ) : (
                    Object.keys(favoritos).map((pizzaKey) => {
                        if (favoritos[pizzaKey]) {
                            const pizza = pizzas[pizzaKey]; // Pega os dados da pizza

                            return (
                                <View key={pizzaKey} style={css.produto}>
                                    <Image source={{ uri: pizza.image }} style={css.produtoImagem} />
                                    <Text style={css.nomePizza}>{pizza.name}</Text>
                                    <TouchableOpacity onPress={() => alternarFavorito(pizzaKey)} style={css.favoritoBotao}>
                                        <Icon
                                            name={favoritos[pizzaKey] ? "heart" : "hearto"} // Alterna entre "favorito" e "não favorito"
                                            size={30}
                                            color={favoritos[pizzaKey] ? "red" : "gray"} // Cor vermelha se favorito, cinza se não
                                        />
                                    </TouchableOpacity>
                                </View>
                            );
                        }
                        return null;
                    })
                )}
            </View>
        </ScrollView>
    );
}
