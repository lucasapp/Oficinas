import React from "react";
import { SafeAreaView, TextInput, Button, Text, StyleSheet, View, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { withFormik } from 'formik';

import styles from "./styles";

const Form = (props) => (
    <SafeAreaView style={styles.conteudo}>
        <View>
            <Text style={styles.descricao}>Codigo da Associacao: </Text>
            <TextInput
                style={styles.valor}
                value={props.values.CodigoAssociacao}
                onChangeText={text => props.setFieldValue('CodigoAssociacao', text)}
            />
            <Text style={styles.descricao}>CPF do Associado: </Text>
            <TextInput
                style={styles.valor}
                value={props.values.CpfAssociado}
                onChangeText={text => props.setFieldValue('CpfAssociado', text)}
            />
            <Text style={styles.descricao}>Nome do Associado: </Text>
            <TextInput
                style={styles.valor}
                value={props.values.NomeAssociado}
                onChangeText={text => props.setFieldValue('NomeAssociado', text)}
            />
            <Text style={styles.descricao}>TelefoneAssociado: </Text>
            <TextInput
                style={styles.valor}
                value={props.values.TelefoneAssociado}
                onChangeText={text => props.setFieldValue('TelefoneAssociado', text)}
            />
            <Text style={styles.descricao}>Email do Associado: </Text>
            <TextInput
                style={styles.valor}
                value={props.values.EmailAssociado}
                onChangeText={text => props.setFieldValue('EmailAssociado', text)}
            />
            <Text style={styles.descricao}>Placa do Veiculo do Associado: </Text>
            <TextInput
                style={styles.valor}
                value={props.values.PlacaVeiculoAssociado}
                onChangeText={text => props.setFieldValue('PlacaVeiculoAssociado', text)}
            />
            <Text style={styles.descricao}>Nome do Amigo: </Text>
            <TextInput
                style={styles.valor}
                value={props.values.NomeAmigo}
                onChangeText={text => props.setFieldValue('NomeAmigo', text)}
            />
            <Text style={styles.descricao}>Telefone do Amigo: </Text>
            <TextInput
                style={styles.valor}
                value={props.values.TelefoneAmigo}
                onChangeText={text => props.setFieldValue('TelefoneAmigo', text)}
            />
            <Text style={styles.descricao}>Email do Amigo: </Text>
            <TextInput
                style={styles.valor}
                value={props.values.EmailAmigo}
                onChangeText={text => props.setFieldValue('EmailAmigo', text)}
            />
            <Button
                onPress={props.handleSubmit}
                title="Enviar"
            />
        </View>
    </SafeAreaView>
);

export default withFormik({
    mapPropsToValues: () => ({
        CodigoAssociacao: "",
        CpfAssociado: "",
        EmailAssociado: "",
        NomeAssociado: "",
        TelefoneAssociado: "",
        PlacaVeiculoAssociado: "",
        NomeAmigo: "",
        TelefoneAmigo: "",
        EmailAmigo: ""
    }),

    handleSubmit: ({ CodigoAssociacao, CpfAssociado, EmailAssociado, NomeAssociado, TelefoneAssociado, PlacaVeiculoAssociado, NomeAmigo, TelefoneAmigo, EmailAmigo }) => {
        const dados = {
            Indicacao: {
                CodigoAssociacao,
                DataCriacao: new Date(),
                CpfAssociado,
                EmailAssociado,
                NomeAssociado,
                TelefoneAssociado,
                PlacaVeiculoAssociado,
                NomeAmigo,
                TelefoneAmigo,
                EmailAmigo,
            },
            Remetente: "lucaslapp9@gmail.com",
            Copias: []
        }
        console.log(dados);
        fetch('http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/Api/Indicacao', {
            method: 'post',
            body: JSON.stringify(dados),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));
    }
})(Form);