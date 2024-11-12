import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdMicNone } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";
import { LiaHelicopterSolid } from "react-icons/lia";
import { ButtonCard } from './src/components/ButtonCard/Index';
import { LiaPuzzlePieceSolid } from "react-icons/lia";
import { BiSolidFlagCheckered } from "react-icons/bi";
import { MdGolfCourse } from "react-icons/md";
import { TbCards } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import { TbCardboards } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { LuSwords } from "react-icons/lu";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaRegChessRook } from "react-icons/fa6";
import { GiTBrick } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import iconeSerratec1 from './assets/iconeSerratec1.png'
import { FaStar } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { Footer } from './src/components/Footer/Index';

export default function App() {
  return <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.7} style={styles.buttonHeader}>
        <HiMiniMagnifyingGlass style={{ color: '#bcbebf', width: 30, height: 25 }} />
        <TextInput style={{ marginLeft: 25, color: '#bcbebf', width: 200, height: 25 }}
          placeholder='Pesquisar apps e jogos'
        />
        <MdMicNone style={{ color: '#bcbebf', width: 30, height: 25 }} />
      </TouchableOpacity>
      <LuUserCircle2 style={styles.user} />
    </View>
    <Text style={styles.title}>
      Explorar jogos
    </Text>
    <View key={'containerCard'} style={styles.containerCard}>
      <View key={'card1'} style={styles.card1}>
        <ButtonCard key={1} text='Ação' form={[<LiaHelicopterSolid style={{ transform: 'scaleX(-1)' }} />
        ]} />
        <ButtonCard key={2} text='Quebra-Cabeças' form={[<LiaPuzzlePieceSolid style={{ transform: 'scaleX(-1)' }} />
        ]} />
        <ButtonCard key={3} text='Corrida' form={[<BiSolidFlagCheckered />
        ]} />
        <ButtonCard key={4} text='Estratégia' form={[<MdGolfCourse style={{ transform: 'scaleX(-1)' }} />
        ]} />
        <ButtonCard key={5} text='Cartas' form={[<TbCards style={{ transform: 'rotate(180deg)' }} />
        ]} />
        <ButtonCard key={6} text='Educativos' form={[<LuGraduationCap />
        ]} />
      </View>
      <View key={'card2'} style={styles.card2}>
        <ButtonCard key={7} text='Simulador' form={[<TbCardboards />
        ]} />
        <ButtonCard key={8} text='Aventura' form={[<FaRegCompass />
        ]} />
        <ButtonCard key={9} text='RPG' form={[<LuSwords style={{ transform: 'scaleX(-1)' }} />
        ]} />
        <ButtonCard key={10} text='Esportes' form={[<MdOutlineSportsTennis />
        ]} />
        <ButtonCard key={11} text='Tabuleiro' form={[<FaRegChessRook />
        ]} />
        <ButtonCard key={12} text='Palavras' form={[<GiTBrick />
        ]} />
      </View>
    </View>
    <View style={styles.containerTextIcone}>
      <View style={styles.containerText}>
        <Text style={styles.text1}>Patrocinados</Text>
        <Text style={styles.text2}>.</Text>
        <Text style={styles.text3}>Sugestões para você</Text>
      </View>
      <CiMenuKebab style={{ color: '#afafaf', width: 50, height: 20 }} />
    </View>
    <View style={styles.patrocinio}>
      <View style={styles.image}>
        <Image style={{ marginLeft: -20,borderRadius: 10}}source={iconeSerratec1} />
      </View>
      <View style={styles.patrocinio1}>
        <Text style={styles.textPatrocinio}>Serratec: Residência em TIC</Text>
        <View style={styles.patrocinio2}>
          <Text style={styles.textPatrocinio1}>serratec</Text>
          <Text style={styles.textPatrocinio2}>.</Text>
          <Text style={styles.textPatrocinio1}>Cursos</Text>
        </View>
        <View style={styles.patrocinio3}>
          <Text style={{color: '#afafaf'}}>5,0 <FaStar style={{color: '##afafaf'}}/> 50 MB <GrDocumentDownload style={{color: '##afafaf'}}/> Mais de 100mi</Text> 
        </View>
      </View>
    </View>
    <Footer></Footer>
  </View>
}