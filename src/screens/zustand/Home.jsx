import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useCarrinhoStore } from "./useCarrinhoStore";

export default function HomeZustand() {
    const [quantidade, setQuantidade] = useState(0);

    const { quantidade: q, valorTotal, addItem } = useCarrinhoStore();

    const handleAddProduto = () => {
        addItem({ quantidade, valorItem: quantidade * 60 });
    };

    return (
        <View style={styles.container}>
            {/* Produto */}
            <View style={styles.card}>
                <Text style={styles.title}>Mouse Z3</Text>
                <Text>Preço - R$60</Text>

                <Text style={{ marginTop: 8 }}>Quantidade:</Text>

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
                <Text>Valor Total - {valorTotal}</Text>
                <Text>Quantidade - {q}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        borderWidth: 2,
        borderColor: "#fef3c7",
        padding: 16,
        borderRadius: 12,
        marginHorizontal: 12
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 8
    },
    input: {
        width: 60,
        borderWidth: 1,
        borderRadius: 8,
        padding: 6,
        marginTop: 4
    },
    button: {
        backgroundColor: "#111",
        padding: 10,
        borderRadius: 10,
        marginTop: 12
    },
    buttonText: { color: "white" },
});
