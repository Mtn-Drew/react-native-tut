import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.myMainScreen}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <TextInput placeholder="Course Goal!" style={styles.myInputContainer} />
        <Button title="Add" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  myMainScreen: {
    padding: 50,
  },
  myInputContainer: {
    borderColor: "red",
    borderWidth: 1,
    marginBottom: 5,
    width: "80%",
    paddingLeft: 10,
  },
});
