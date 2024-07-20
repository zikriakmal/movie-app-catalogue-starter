import { Button, Text, View } from "react-native";
import styles from "../../Styles";
import { useState } from "react";

const PembungkusContoh = () => {
    const [text, setText] = useState("");
    return (
        <View style={styles.pembungkusSatu}>
            <Text style={styles.typographySatu} >Hello World!</Text>
            <Text style={{ fontSize: 32, color: 'black', fontWeight: '900' }} >{text}</Text>
            <Button color={'red'} onPress={() => setText("halo")} title="klik saya" />
        </View>
    )
}

export default PembungkusContoh;