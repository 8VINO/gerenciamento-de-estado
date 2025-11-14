import { StyleSheet, Text, View } from "react-native";
import Contador from '../src/screens/usestate/Contador';
import AppRedux from '../src/screens/reduxtoolkit/AppRedux'
import AppZustand from '../src/screens/zustand/AppZustand'
import AppContext from '../src/screens/contextapi/AppContext'
import ContadorReducer from '../src/screens/useReducer/ContadorReducer'
export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Contador/> */}
      {/* <AppContext/> */}
      {/* <AppRedux/> */}
      {/* <AppZustand /> */}
      <ContadorReducer/>
    </View>
  );
};