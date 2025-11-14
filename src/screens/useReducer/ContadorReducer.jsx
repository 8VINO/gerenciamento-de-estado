import { View, Text, Button } from "react-native";
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export default function ContadorReducer() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  function incrementar() {
    dispatch({ type: 'increment' });
  }

  function decrementar() {
    dispatch({ type: 'decrement' });
  }

  function resetar() {
    dispatch({ type: 'reset' });
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontSize: 22 }}>
          Contador: {state.count}
        </Text>
      </View>

      <View style={{ marginTop: 20, gap: 10, width: '60%' }}>
        <Button title="Incrementar" onPress={incrementar} />
        <Button title="Decrementar" onPress={decrementar} color="orange" />
        <Button title="Resetar" onPress={resetar} color="red" />
      </View>
    </View>
  );
}