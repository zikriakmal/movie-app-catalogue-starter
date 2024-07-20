import { ColorValue, ScrollView, Text, View } from "react-native";
import PembungkusContoh from "./src/components/PembungkusContoh";

const App = () => {
  return (
    <ScrollView>
      <PembungkusContoh />
      <PembungkusContohDua text={"SATU"} color={"black"} />
      <PembungkusContohDua text={"DUA"} color={"red"} />
      <PembungkusContohDua text={"TIGA"} color={"blue"} />
    </ScrollView>
  )
}

const PembungkusContohDua = ({ text, color }: { text?: String, color: ColorValue }) => {
  return (
    <View>
      <Text style={{ fontSize: 40, color: color }}>{text}</Text>
    </View>
  )
}

export default App;