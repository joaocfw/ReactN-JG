import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";
import { styles } from "../../components/ButtonCard/styles";

interface CardForm {
    containerStyle?: ViewStyle;
    form: any[];
    text: string
}
export function ButtonCard({containerStyle, form, text}: CardForm) {
    return(
        <TouchableOpacity style={[styles.CardForm, containerStyle]}>
            <Text style={styles.textCard}>{text}</Text>
            <Text style={{color: "#acc3ed",fontSize: 25}}>
            {form}
            </Text>
        </TouchableOpacity>
    )
}