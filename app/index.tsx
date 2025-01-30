import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0d1b1d" />

      <View style={styles.content}>
        <Text style={styles.title}>Mobile Task: Git-ting Started</Text>
        <Text style={styles.paragraph}>
          Explore the repository & discover opportunities through HNG's hiring
          platform
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() =>
            Linking.openURL("https://github.com/Pharm-ack/mobile-stage-0")
          }
        >
          <Text style={styles.buttonText}>📂 Visit GitHub Repository</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => Linking.openURL("https://hng.tech/hire")}
        >
          <Text style={styles.buttonText}>🔗 Explore HNG Hire</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Built with 💚 for HNG Internship</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0d1b1d",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    color: "#a3b5a9",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 24,
  },
  button: {
    width: "100%",
    backgroundColor: "#2d5540",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  footer: {
    textAlign: "center",
    color: "#5a6d66",
    fontSize: 12,
    marginBottom: 16,
  },
});
