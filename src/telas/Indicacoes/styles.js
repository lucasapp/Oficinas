import { StyleSheet } from "react-native";

export default StyleSheet.create({
    conteudo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 10,
    },
    descricao: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    valor: {
        fontSize: 15,
        marginVertical: 3,
        borderStyle: 'solid',
        borderColor: "blue",
        backgroundColor: "white",
        borderRadius: 5,
    },
});