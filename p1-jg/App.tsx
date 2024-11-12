import React from 'react';
import { View, Image, Text, TextInput, FlatList, ScrollView } from 'react-native';
import { styles } from './styles';
import { styles2 } from './style2';
import googleplay from './assets/google-play.png'
import { CiBellOn } from "react-icons/ci";
import { LuUserCircle2 } from "react-icons/lu";
import iconeSerratecG from './assets/iconeSerratecG.png'
import senai from './assets/senai.png'
import { CiMenuKebab } from "react-icons/ci";
import senaiP from './assets/senai1.png'
import serratecP from './assets/iconeSerratec1.png'
import rpg from './assets/rpg1.png'
import barda from './assets/barda.png'
import { FaStar } from "react-icons/fa";
import { Footer } from './src/components/Footer/Index';

export default function App() {
    const images = [
        { id: '1', source: iconeSerratecG },
        { id: '2', source: senai },
    ];
    const Jogos = [
        { id: '1', source: rpg, descricao: 'RPG React Native', avaliacao: '5.0', icone: <FaStar style={{fontSize:10, color: '#afafaf' }} /> },
        { id: '2', source: barda, descricao: 'O Caso de Corunas', avaliacao: '5.0', icone: <FaStar style={{fontSize:10, color: '#afafaf' }} /> },
        { id: '3', source: serratecP, descricao: 'Serratec: Residência em TIC', avaliacao: '5.0', icone: <FaStar style={{fontSize:10, color: '#afafaf' }} /> },
        { id: '4', source: senaiP, descricao: 'Senai: Cursos Técnicos', avaliacao: '5.0', icone: <FaStar style={{fontSize:10, color: '#afafaf' }} /> },
    ];
    const images2 = [
        { id: '1', source: senai },
        { id: '2', source: iconeSerratecG },
    ];
    return (
        <View style={styles2.containerTelaDois}>
            <ScrollView>
            <View style={styles2.headerTelaDois}>
                <Image style={{ width: 25, height: 25 }} source={googleplay} />
                <View style={styles2.headerTelaDoisFinal}>
                    <CiBellOn style={styles2.user2} />
                    <LuUserCircle2 style={styles2.user2} />
                </View>
            </View>
            <View style={styles2.headerDoisTelaDois}>
                <Text style={styles2.textTelaDois}>Para você</Text>
                <Text style={styles2.textTelaDois}>Em alta</Text>
                <Text style={styles2.textTelaDois}>Crianças</Text>
                <Text style={styles2.textTelaDois}>Categorias</Text>
            </View>
            <View style={{ marginBottom: 15, width: "100%", height: 300 }}>
                <FlatList
                    data={images}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles2.containerImage}>
                            <Image style={styles2.carouselImage} source={item.source} />
                        </View >
                    )}
                />
            </View>
            <View style={styles2.containerTextIcone2}>
                <View style={styles.containerText}>
                    <Text style={styles2.text1TelaDois}>Patrocinados</Text>
                    <Text style={styles.text2}>.</Text>
                    <Text style={styles.text3}>Sugestões para você</Text>
                </View>
                <CiMenuKebab style={{ color: '#afafaf', width: 50, height: 20 }} />
            </View>
            <View style={{marginBottom: 10, paddingLeft: 18, width: "100%", height: 190 }}>
                <FlatList
                    data={Jogos}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles2.containerListaJogos}>
                            <View style={styles2.cardJogos}>
                                <Image style={styles2.carouselJogos} source={item.source} />
                                <Text style={styles2.textJogos}>{item.descricao}</Text>
                                <View style={styles2.avaliacaoJogos}>
                                    <Text style={styles2.textJogos2}>{item.avaliacao}</Text>
                                    {item.icone}
                                </View>
                            </View>
                        </View >
                    )}
                />
            </View>
            <View style={{ marginBottom: 15, width: "100%", height: 300 }}>
                <FlatList
                    data={images2}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles2.containerImage}>
                            <Image style={styles2.carouselImage} source={item.source} />
                        </View >
                    )}
                />
            </View>
            </ScrollView>
            <Footer></Footer>
        </View>
    )
}
