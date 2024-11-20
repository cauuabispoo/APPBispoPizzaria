import React, { useState, useEffect } from "react";
import { View, ScrollView, TouchableOpacity, Modal, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useFocusEffect } from '@react-navigation/native'; 
import css from "./cssProd";
import Rodape from '../../componentegeral/Rodape';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Detalhes() {
    
    const [favoritos, setFavoritos] = useState({
        pizzaCalabresa: false,
        pizzaMussarela: false,
        pizzaDoisQueijos: false,
        pizzaFrango: false,
        pizzaRomeuJulieta: false,
        pizzaChocolateMorango: false,
    });

    // Estado para controlar o modal
    const [modalVisible, setModalVisible] = useState(false);
    const [pizzaSelecionada, setPizzaSelecionada] = useState(null);  // Armazena a pizza selecionada para exibir no modal

    // Função para carregar os favoritos do AsyncStorage
    const carregarFavoritos = async () => {
        try {
            const favoritosSalvos = await AsyncStorage.getItem('favoritos');
            if (favoritosSalvos) {
                const favoritosParsed = JSON.parse(favoritosSalvos);
                setFavoritos(favoritosParsed);
            }
        } catch (error) {
            console.error("Erro ao carregar favoritos:", error);
        }
    };

    // Função para alternar o estado de favorito e salvar no AsyncStorage
    const toggleFavorito = async (pizza) => {
        const novoEstado = !favoritos[pizza];
        const novosFavoritos = { ...favoritos, [pizza]: novoEstado };

        setFavoritos(novosFavoritos);

        try {
            await AsyncStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
        } catch (error) {
            console.error("Erro ao salvar favoritos:", error);
        }
    };

    // Função para abrir o modal com mais detalhes da pizza
    const abrirModal = (pizza) => {
        setPizzaSelecionada(pizza);  // Definir a pizza que foi clicada
        setModalVisible(true);  // Abrir o modal
    };

    // Fechar o modal
    const fecharModal = () => {
        setModalVisible(false);
        setPizzaSelecionada(null);
    };

    // Carregar os favoritos sempre que a tela de detalhes for acessada
    useFocusEffect(
        React.useCallback(() => {
            carregarFavoritos();  
        }, [])
    );

    // Informações das pizzas (para exibir no modal)
    const pizzasDetalhadas = {
        pizzaCalabresa: {
            nome: "Pizza de Calabresa",
            descricao: "Deliciosa pizza de calabresa com cebolas e molho especial.",
            preco: "R$44,90",
            imagem: "https://th.bing.com/th/id/OIP.5Cxd5vFN90NEVU6ri6ZI7QHaHa?rs=1&pid=ImgDetMain"
        },
        pizzaMussarela: {
            nome: "Pizza de Mussarela",
            descricao: "Pizza de mussarela com um toque de orégano e molho de tomate.",
            preco: "R$44,90",
            imagem: "https://th.bing.com/th/id/OIP.pA_-yx03ro9iby8pf7-ZOAHaHa?rs=1&pid=ImgDetMain"
        },
        pizzaDoisQueijos: {
            nome: "Pizza de Dois Queijos",
            descricao: "Combinação de queijos mussarela e parmesão com molho de tomate.",
            preco: "R$44,90",
            imagem: "https://th.bing.com/th/id/OIP.QagKAbbW_hv96VwJu4FSSQHaE8?rs=1&pid=ImgDetMain"
        },
        pizzaFrango: {
            nome: "Pizza de Frango",
            descricao: "Frango desfiado com catupiry e milho, no ponto certo.",
            preco: "R$44,90",
            imagem: "https://www.pizzarianotadez.com.br/wp-content/uploads/2020/01/4.png"
        },
        pizzaRomeuJulieta: {
            nome: "Pizza Romeu e Julieta",
            descricao: "Pizza doce com goiabada e queijo minas, uma combinação irresistível.",
            preco: "R$44,90",
            imagem: "https://mrteddypizza.com.br/wp-content/uploads/2024/03/Design-sem-nome-2024-03-21T021135.418.png"
        },
        pizzaChocolateMorango: {
            nome: "Pizza de Chocolate com Morango",
            descricao: "Pizza doce com cobertura de chocolate e morangos frescos.",
            preco: "R$44,90",
            imagem: "https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/png-pizza-doce-morango-chocolate.png?fit=1123%2C422&ssl=1"
        }
    };

    return (
        <>
            <ScrollView  style={css.container}>
                <Rodape />
                <View style={css.linha}>
                    {/* Cards de Pizza */}
                    {Object.keys(pizzasDetalhadas).map((pizzaKey) => {
                        const pizza = pizzasDetalhadas[pizzaKey];
                        return (
                            <View key={pizzaKey} style={css.produto}>
                                <Card>
                                    <TouchableOpacity onPress={() => abrirModal(pizzaKey)}>
                                        <Card.Title title={pizza.nome} subtitle={pizza.preco} />
                                        <Card.Cover source={{ uri: pizza.imagem }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => toggleFavorito(pizzaKey)} style={css.favoritoBotao}>
                                        <Icon
                                            name={favoritos[pizzaKey] ? 'heart' : 'hearto'}
                                            size={30}
                                            color={favoritos[pizzaKey] ? 'red' : 'gray'}
                                        />
                                    </TouchableOpacity>
                                </Card>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>

            {/* Modal de Detalhes da Pizza */}
            <Modal
                visible={modalVisible}
                onRequestClose={fecharModal}
                animationType="slide"
                transparent={true}
            >
                <View style={css.modalContainer}>
                    <View style={css.modalContent}>
                    <TouchableOpacity onPress={fecharModal} style={css.closeButton}>
                        <Icon name="close" style={css.closeIcon} />
                    </TouchableOpacity>
                        {pizzaSelecionada && (
                            <>
                                <Text style={css.pizzaName}>{pizzasDetalhadas[pizzaSelecionada].nome}</Text>
                                <Image source={{ uri: pizzasDetalhadas[pizzaSelecionada].imagem }} style={css.pizzaImage} />
                                <Text style={css.pizzaDescription}>{pizzasDetalhadas[pizzaSelecionada].descricao}</Text>
                                <Text style={css.pizzaPrice}>{pizzasDetalhadas[pizzaSelecionada].preco}</Text>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </>
    );
}