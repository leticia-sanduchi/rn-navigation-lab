import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const jogoMock = {
  titulo: "The Legend of Zelda: Breath of the Wild",
  genero: "Aventura / Mundo Aberto",
  plataforma: "Nintendo Switch",
  nota: "10/10",
  sinopse:
    "Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.",
};

export default function DetalheScreen({ route }) {
  const {
    titulo,
    genero,
    plataforma,
    nota,
    sinopse,
  } = route?.params ?? jogoMock;

  const [isSalvo, setIsSalvo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.heroIcone}>
            <Text style={styles.heroIconeTexto}>
              {titulo[0]}
            </Text>
          </View>

          <Text style={styles.heroTitulo}>
            {titulo}
          </Text>

          <Text style={styles.heroSubtitulo}>
            {genero}
          </Text>

          <View style={styles.heroMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Plataforma</Text>
              <Text style={styles.metaValor}>{plataforma}</Text>
            </View>

            <View style={styles.metaSeparador} />

            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Nota</Text>
              <Text style={styles.metaValor}>{nota}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>
            Sinopse
          </Text>

          <Text style={styles.detalheTexto}>
            {sinopse}
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.botao, isSalvo && styles.botaoAtivo]}
          onPress={() => setIsSalvo((prev) => !prev)}
        >
          <Text style={styles.botaoTexto}>
            {isSalvo
              ? "Remover da Lista"
              : "Adicionar à Lista"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  hero: {
    backgroundColor: "#333333",
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 20,
  },
  heroIcone: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#555555",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  heroIconeTexto: {
    color: "#FFF",
    fontSize: 36,
    fontWeight: "bold",
  },
  heroTitulo: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  heroSubtitulo: {
    color: "#CCC",
    marginTop: 4,
    marginBottom: 16,
  },
  heroMeta: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaItem: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  metaLabel: {
    color: "#AAA",
    fontSize: 11,
  },
  metaValor: {
    color: "#FFF",
    fontWeight: "bold",
  },
  metaSeparador: {
    width: 1,
    height: 30,
    backgroundColor: "#888",
  },
  secao: {
    margin: 16,
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detalheTexto: {
    lineHeight: 22,
    color: "#555",
  },
  botao: {
    backgroundColor: "#333333",
    margin: 16,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  botaoAtivo: {
    backgroundColor: "#4CAF50",
  },
  botaoTexto: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
