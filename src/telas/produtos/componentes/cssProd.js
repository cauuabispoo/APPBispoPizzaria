import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Contêiner principal
    container: {
        flex: 1,
        backgroundColor: '#A20F0F', // Cor de fundo de toda a página
        padding: 10,
    },
    linha: {
        flex: 1,
        flexDirection: "row", // Organiza os cards em linha
        flexWrap: "wrap", // Permite que os cards que não couberem na linha, quebrem para a linha seguinte
        justifyContent: "space-between", // Alinha os cards de forma que fiquem com um pequeno espaço entre eles
    },
    produto: {
        backgroundColor: '#A20F0F',
        width: '48%', // Define que o card vai ocupar 48% da largura
        marginBottom: 10, // Espaço entre as linhas de cards
        padding: 10,
        borderRadius: 10, // Bordas arredondadas
        position: 'relative', // Necessário para posicionar o botão de favoritos
    },
    favoritoBotao: {
        position: 'absolute', // Coloca o botão dentro do card
        bottom: 10, // Distância da parte inferior do card
        left: '50%', // Alinha horizontalmente no meio
        transform: [{ translateX: -15 }], // Ajuste para centralizar o ícone no meio
        zIndex: 1, // Garante que o ícone fique sobre outros elementos do card
    },
    // Estilos para o modal
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo transparente com escurecimento
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute', // Coloca o botão no topo à direita
        top: 10,
        right: 10,
        zIndex: 1, // Garante que o botão fique acima de outros elementos
    },
    closeIcon: {
        fontSize: 30,
        color: '#A20F0F', // Cor vermelha para o X
    },
    pizzaName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    pizzaImage: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    pizzaDescription: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    pizzaPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#A20F0F',
    }
});

export default styles;
