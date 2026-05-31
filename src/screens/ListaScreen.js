import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CardJogo } from "../components";

const jogosMock = [
  {
    id: "1",
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura / Mundo Aberto",
    plataforma: "Nintendo Switch",
    nota: "10/10",
  },
  {
    id: "3",
    titulo: "God of War",
    genero: "Acao / Aventura",
    plataforma: "PS4 / PC",
    nota: "10/10",
  },
];

export default function ListaScreen() {
  const [itensSalvos] = useState(jogosMock);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>
          Minha Lista
        </Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardJogo
            titulo={item.titulo}
            genero={item.genero}
            plataforma={item.plataforma}
            nota={item.nota}
          />
        )}
        ListEmptyComponent={
          <View style={styles.conteudo}>
            <View style={styles.iconeContainer}>
              <Text style={styles.icone}>G</Text>
            </View>

            <Text style={styles.titulo}>
              Nenhum jogo salvo
            </Text>

            <Text style={styles.descricao}>
              Sua lista aparecerá aqui
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#333333",
    padding: 20,
  },
  headerTitulo: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "bold",
  },
  conteudo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconeContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
  },
  icone: {
    fontSize: 40,
    fontWeight: "bold",
  },
  titulo: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  descricao: {
    color: "#666",
    marginTop: 8,
  },
});
