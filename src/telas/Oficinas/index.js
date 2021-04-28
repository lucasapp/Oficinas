import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, Text, StatusBar, ActivityIndicator, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

const getUrl = (codigoAssociacao = 0, cpfAssociado = "") => {
    return `http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/Api/Oficina?codigoAssociacao=${codigoAssociacao}&cpfAssociado=${cpfAssociado}`;
};

export default function Oficinas({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(getUrl(601))
            .then((response) => response.json())
            .then((json) => setData(json.ListaOficinas))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    function pressHandler(item) {
        navigation.navigate("Detalhes", { item });
    }

    return (
        <SafeAreaView style={styles.view}>
            <StatusBar backgroundColor="#007fff" />
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ Id }) => String(Id)}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item} onPress={() => pressHandler(item)}>
                            <Image
                                style={{
                                    width: 120,
                                    height: 60,
                                }}
                                resizeMode="contain"
                                source={{
                                    uri: `data:image/png;base64,${item.Foto}`,
                                }}
                            />
                            <Text style={styles.text}>{item.Nome}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </SafeAreaView>
    );
}


