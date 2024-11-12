import { StyleSheet } from "react-native";
import { Footer } from "./Index";

export const styles = StyleSheet.create({
footer: {
    flexDirection: 'row',
    display:'flex',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#1e1f21',
    alignItems: 'center',
    height: 70,
    padding: 15,

},
footerIcon:{
    color: '#afafaf',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
},
})