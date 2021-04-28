import React from "react";
import { Text, Image, View } from "react-native";

import styles from "./styles";

export default function OficinasDetalhe({ route }) {
    const { item } = route.params;

    return (
        <View style={styles.conteudo}> 
            <Text>Nome: {item.Nome}</Text>
            <Text>Endereço: {item.Endereco}</Text>
            <Text>Telefone1: {item.Telefone1}</Text>
            <Text>Telefone2: {item.Telefone2}</Text>
            <Text>Email: {item.Email}</Text>
            <Text>Descrição: {item.Descricao}</Text>
            <Image
                style={{
                    width: 300,
                    height: 120,
                }}
                source={{
                    uri: `data:image/png;base64,${item.Foto}`,
                }}
            />
        </View>
    )
}