import { StyleSheet, Text, View } from "react-native";

export default function CardJogo({
  titulo,
  genero,
  plataforma,
  nota,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.texto}>
        🎮 {genero}
      </Text>

      <Text style={styles.texto}>
        💻 {plataforma}
      </Text>

      <Text style={styles.nota}>
        ⭐ {nota}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  texto: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  nota: {
    marginTop: 8,
    fontWeight: "bold",
    color: "#4CAF50",
  },
});
