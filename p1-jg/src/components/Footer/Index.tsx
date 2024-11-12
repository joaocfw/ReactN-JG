import React, { useState } from "react";
import { TouchableOpacity, Image, Text, View, StyleSheet } from "react-native";
import { IoGameControllerOutline } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { BsJournalBookmark } from "react-icons/bs";
import { styles } from "./styles";


export function Footer() {
    const [selected, setSelected] = useState<number | null>(null);
    const handlePress = (index: number) => {
        setSelected(index);
    };

    return (
        <View style={styles.footer}>
            {[
                { icon: <IoGameControllerOutline />, label: "Jogos" },
                { icon: <GrAppsRounded />, label: "Apps" },
                { icon: <IoIosSearch />, label: "Pesquisa" },
                { icon: <BsJournalBookmark />, label: "Livros" },
            ].map((item, index) => (
                <TouchableOpacity
                key={index}
                onPress={() => handlePress(index)}
                style={styles.footerIcon}
            >
                    <Text style={[{ fontSize:20, color: selected === index ? '#5f95b8' : '#afafaf', backgroundColor: selected === index ? '#004b76' : '#1e1f21', borderRadius:20, width:50, textAlign: 'center', justifyContent: 'center' }]}>{item.icon}</Text>
                    <Text  style={[{ color: selected === index ? '#5f95b8' : '#afafaf' }]}>{item.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
