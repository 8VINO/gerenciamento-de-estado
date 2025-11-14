import { View, Text, Button } from "react-native";
import { useState, useEffect } from "react";
export default function Contador() {
//   let click = 0;
 const [click, setClick] = useState(0)
  console.log("renderizou");

  function incrementar() {
    setClick(click + 1)

    // click += 1;

    console.log("Cliques:" + click);
  }

     // useEffect(() => {
    //     console.log("Cliques:", click);
    // }, [click]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <View>
        <Text style={{ fontSize: 22 }}>Contador de cliques: {click}</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Clique aqui" onPress={incrementar} />
      </View>
    </View>
  );
}
