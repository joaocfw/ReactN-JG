import { StyleSheet, Platform } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#131313',
        paddingTop: 10,
        overflow: "scroll",
    },
    title: {
        color: '#afafaf',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 13
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttonHeader: {
        backgroundColor: '#292a2c',
        padding: 15,
        borderRadius: 50,
        justifyContent: 'space-between',
        flexDirection: "row",
        width: 280,
    },
    user: {
        color: '#FFF',
        width: 50,
        height: 50,
        marginLeft: 5
    },
    buttonSkill: {
        backgroundColor: '#1e1f21',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: "row",
    },
	image: {
        marginLeft: 10,
        color: '#afafaf',
        fontSize: 18,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    input: {
        backgroundColor:'#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    containerCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 0,
        padding: 20,
        gap: 30,
        alignItems: 'center',
        alignContent: 'center'
    },
    card1: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    card2: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        gap: 5
    },
    text1: {
        color: '#afafaf',
        fontSize: 13,
        marginLeft: 13
    
    },
    text2: {
        color: '#afafaf',
        fontSize: 25,
        marginBottom: 16,
        fontWeight: 600
    
    },
    text3: {
        color: '#afafaf',
        fontSize: 18,
    
    },
    containerTextIcone: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        gap: 5,
    },
    patrocinio: {
        backgroundColor: '#1e1f21',
        borderRadius: 13,
        width: 375,
        height: 100,
        marginLeft: 13,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        gap: 10,
    },
    patrocinio1: {
        alignItems:'center',
        flexDirection: 'column',
        margin: 0,

    },
    patrocinio2: {
        display: 'flex',
        flexDirection:'row',
        width: '100%',
        alignItems: 'center',
        gap: 8,
        marginTop: -15,
    },
    patrocinio3: {
        display: 'flex',
        flexDirection:'row',
        width: '100%',
        alignItems: 'center',
        marginTop: -10,

    },
    textPatrocinio: {
        color: '#afafaf',
        fontSize: 18,
        margin: 0,
    },
    textPatrocinio1: {
        color: '#afafaf',
        fontSize: 13,
        margin: 0,
        textAlign: 'left',
        display: 'flex',
    },
    textPatrocinio2: {
        color: '#afafaf',
        fontSize: 25,
        fontWeight: 600,
        margin: 0,
        marginBottom: 20,
    },
});