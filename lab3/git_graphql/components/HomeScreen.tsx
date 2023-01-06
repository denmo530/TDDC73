import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import TrendingRepos from "./TrendingRepos";
import { GITHUB_API_KEY } from "@env";
import DropDownPicker from "react-native-dropdown-picker";
// Initialize apollo client
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${GITHUB_API_KEY}`,
  },
});

export default function HomeScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "JavaScript", value: "javascript" },
    { label: "TypeScript", value: "typescript" },
    { label: "Python", value: "python" },
    { label: "C#", value: "c#" },
    { label: "CSS", value: "css" },
    { label: "Ruby", value: "ruby" },
    { label: "Java", value: "java" },
  ]);

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <StatusBar />
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <TrendingRepos lang={value} />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#252B35",
  },
});
