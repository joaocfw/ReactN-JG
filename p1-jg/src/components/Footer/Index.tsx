import React from "react";
import { TouchableOpacity, Image, Text, ViewStyle, View } from "react-native";
import { styles } from "../../components/Footer/styles";
import { IoGameControllerOutline } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { BsJournalBookmark } from "react-icons/bs";

export function Footer() {
    return(
        <View style={styles.footer}>
             <TouchableOpacity> <View style={styles.footerIcon}> <IoGameControllerOutline /> <Text style={{color: '#afafaf'}} >Jogos</Text> </View></TouchableOpacity>
             <TouchableOpacity> <View style={styles.footerIcon}><GrAppsRounded /> <Text style={{color: '#afafaf'}}>Apps</Text> </View></TouchableOpacity>
             <TouchableOpacity> <View style={styles.footerIcon}> <IoIosSearch /> <Text style={{color: '#afafaf'}}>Pesquisa</Text> </View></TouchableOpacity>
             <TouchableOpacity> <View style={styles.footerIcon}> <BsJournalBookmark /> <Text style={{color: '#afafaf'}}>Livros</Text> </View></TouchableOpacity>
        </View>
    )
}