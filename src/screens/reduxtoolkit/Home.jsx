import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./features/carrinho/carrinho-slice";

export default function Home() {
  const [quantidade, setQuantidade] = useState(0);

  const carrinho = useSelector((state) => state.carrinho);
  const dispatch = useDispatch();

  const handleAddProduto = () => {
    dispatch(addItem({ quantidade: quantidade, valorItem: quantidade * 60 }));
  };

  return (
    <View style={styles.container}>
      {/* Produto */}
      <View style={styles.card}>
        <Text style={styles.title}>Mouse Z3</Text>
        <Text>Preço - R$60</Text>

        <Text style={{ marginTop: 8 }}>
          Quantidade:
        </Text>

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(value) => setQuantidade(Number(value))}
          placeholder="0"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddProduto}>
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>

      {/* Carrinho */}
      <View style={styles.card}>
        <Text style={styles.title}>Carrinho</Text>
        <Text>Valor Total - R${carrinho.valorTotal}</Text>
        <Text>Quantidade - {carrinho.quantidade}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
  },
  card: {
    borderWidth: 2,
    borderColor: "#fef3c7",
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 12,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    width: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 6,
    marginTop: 4,
  },
  button: {
    marginTop: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#fef3c7",
    borderRadius: 10,
    backgroundColor: "#111",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});