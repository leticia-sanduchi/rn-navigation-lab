import { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const jogos = [
  {
    id: "1",
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura / Mundo Aberto",
    plataforma: "Nintendo Switch",
    nota: "10/10",
    sinopse:
      "Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.",
  },
  {
    id: "2",
    titulo: "Red Dead Redemption 2",
    genero: "Acao / Mundo Aberto",
    plataforma: "PS4 / Xbox / PC",
    nota: "10/10",
    sinopse:
      "Uma epica historia sobre a vida fora da lei no coracao da America.",
  },
  {
    id: "3",
    titulo: "God of War",
    genero: "Acao / Aventura",
    plataforma: "PS4 / PC",
    nota: "10/10",
    sinopse:
      "Kratos e Atreus embarcam em uma jornada pelos Nove Reinos.",
  },
  {
    id: "4",
    titulo: "Hollow Knight",
    genero: "Metroidvania",
    plataforma: "PC / Switch / PS4",
    nota: "9/10",
    sinopse:
      "Explore um reino subterraneo cheio de desafios.",
  },
  {
    id: "5",
    titulo: "Celeste",
    genero: "Plataforma",
    plataforma: "PC / Switch / PS4",
    nota: "9/10",
    sinopse:
      "Uma emocionante jornada de superacao.",
  },
];

export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState("");
  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  useEffect(() => {
    const resultado = jogos.filter((jogo) =>
      jogo.titulo.toLowerCase().includes(busca.toLowerCase())
    );

    setJogosFiltrados(resultado);
  }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Detalhe", { ...item })}
      >
        <View style={styles.cardIcone}>
          <Text style={styles.cardIconeTexto}>
            {item.titulo[0]}
          </Text>
        </View>

        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>
            {item.titulo}
          </Text>

          <Text style={styles.cardSubtitulo}>
            {item.genero}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>
          Catálogo de Games
        </Text>

        <Text style={styles.headerSubtitulo}>
          Escolha um jogo para ver os detalhes
        </Text>
      </View>

      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buscaContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buscaInput: {
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#333333",
    padding: 20,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  headerSubtitulo: {
    color: "#CCCCCC",
  },
  lista: {
    padding: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  cardIcone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  cardIconeTexto: {
    fontWeight: "bold",
    fontSize: 18,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: "600",
  },
  cardSubtitulo: {
    color: "#888",
  },
});
