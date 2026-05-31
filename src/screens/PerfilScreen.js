import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>
          Perfil
        </Text>
      </View>

      <View style={styles.cartao}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>L</Text>
        </View>

        <Text style={styles.nome}>
          Letícia Sanduchi
        </Text>

        <Text style={styles.email}>
          leticia@email.com
        </Text>

        <View style={styles.separador} />

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>
            Jogos salvos
          </Text>
          <Text style={styles.infoValor}>12</Text>
        </View>

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>
            Jogos concluídos
          </Text>
          <Text style={styles.infoValor}>8</Text>
        </View>

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>
            Membro desde
          </Text>
          <Text style={styles.infoValor}>2026</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>
          Editar Biblioteca
        </Text>
      </TouchableOpacity>
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
  cartao: {
    margin: 16,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarTexto: {
    fontSize: 36,
    fontWeight: "bold",
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
  },
  email: {
    color: "#777",
    marginBottom: 20,
  },
  separador: {
    width: "100%",
    height: 1,
    backgroundColor: "#EEE",
    marginBottom: 16,
  },
  infoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8,
  },
  infoLabel: {
    color: "#555",
  },
  infoValor: {
    fontWeight: "bold",
  },
  botao: {
    marginHorizontal: 16,
    backgroundColor: "#333333",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
