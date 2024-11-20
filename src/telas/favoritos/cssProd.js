import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    // Novo fundo para a tela inteira
    container: {
        flex: 1, // Preenche toda a tela
        backgroundColor: '#A20F0F', // Cor de fundo vermelha
    },
    linha: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: 20,
        paddingTop: 20, // Para garantir que o conteúdo não fique colado no topo
    },
    produto: {
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#f5f5f5', // Fundo claro para os cards
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,  // Para dar efeito de sombra no Android
        width: '40%',
    },
    produtoImagem: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    nomePizza: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    favoritoBotao: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    vazioText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: 'white', // Cor branca para o texto de favoritos vazios
    },
});

export default css;
