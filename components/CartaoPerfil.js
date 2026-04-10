// Aluno: Victor Ruis Marques 3°B TI

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function CartaoPerfil(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{props.nome}</Text>
      <Text style={styles.profissao}>{props.profissao}</Text>
      <Text style={styles.cidade}>{props.cidade}</Text>
      <Text style={styles.email}>{props.email}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          Alert.alert("E-mail enviado para: " + props.email)
        }
      >
        <Text style={styles.textoBotao}>Enviar E-mail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
    width: 250,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
  },

  profissao: {
    fontSize: 16,
    color: "#555",
  },

  cidade: {
    fontSize: 14,
    color: "#777",
  },

  email: {
    fontSize: 14,
    color: "#999",
    marginBottom: 15,
  },

  botao: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});