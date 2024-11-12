import { StyleSheet } from "react-native";

export const styles2 = StyleSheet.create({
    containerTelaDois: {
        backgroundColor: '#131313',
        flex: 1,
        margin: 0,
        overflow: 'scroll',
    },
    headerTelaDois: {
        height: 50,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',
        paddingHorizontal: 18,
    },
    headerTelaDoisFinal: {
        flexDirection: 'row',
        gap: 10

    },
    user2: {
        color: '#FFF',
        width: 30,
        height: 30,
    },
    textTelaDois:{
        color: '#afafaf',
        fontSize: 14,
        paddingBottom: 15,
        paddingTop: 10,
    },
    headerDoisTelaDois: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        borderBottomColor: '#afafaf',
        borderBottomWidth: 1,
        marginBottom: 15
    },
    containerImage: {
        paddingHorizontal: 9,
        height: 0,
        // position: 'relative',
        // alignItems: 'center',
        

    },
    carouselImage: {
        width: 400,
        height: 300,
        marginHorizontal: 10,
        borderRadius: 30,
    },
    text1TelaDois: {
        color: '#afafaf',
        fontSize: 13,
        marginLeft: 18
    
    },
    containerListaJogos: {
        flexDirection: 'row',
        width: '100%',
        height: 190,
    },
    cardJogos: {
        flexDirection: 'column',
        width: 140,
        height: 190,
        gap: 10,
        fontSize: 30,
    },
    carouselJogos: {
        height: 100,
        width: 130,
        borderRadius: 20
    },
    avaliacaoJogos: {
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center'
    },
    textJogos: {
        color: '#afafaf',
        flexWrap: 'wrap',
        width: '80%',
    },
    textJogos2: {
        color: '#afafaf',
        flexWrap: 'wrap',
    },
    containerTextIcone2: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        gap: 5,
        paddingBottom: 8
    },
});