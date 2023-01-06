import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { gql } from "@apollo/client";
import { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Ionicons, AntDesign } from "@expo/vector-icons/";
import { useNavigation } from "@react-navigation/native";

export default function TrendingRepos({ lang }) {
  const navigation = useNavigation();

  const GET_TRENDING_REPOS = gql`
    query GetTrendingRepos($query: String!) {
      search(query: $query, type: REPOSITORY, first: 15) {
        edges {
          node {
            ... on Repository {
              name
              owner {
                login
              }
              stargazers {
                totalCount
              }
              description
              forks {
                totalCount
              }
              createdAt
              defaultBranchRef {
                target {
                  ... on Commit {
                    history {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data, refetch } = useQuery(GET_TRENDING_REPOS, {
    variables: { query: `language:${lang} sort:stars-desc` },
  });

  useEffect(() => {
    refetch();
  }, [lang]);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate("Repository Details", { project: item });
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
        {item.node.name}
      </Text>
      <Text style={{ color: "white", fontSize: 14 }}>
        {item.node.description}
      </Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Ionicons name="star-outline" color="white" size={14} />
          <Text style={styles.repoDetails}>
            {item.node.stargazers.totalCount}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <AntDesign name="fork" size={14} color="white" />
          <Text style={styles.repoDetails}>{item.node.forks.totalCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.search.edges}
        renderItem={renderItem}
        keyExtractor={(item) => item.node.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 4,
    borderRadius: 5,
    backgroundColor: "black",
  },
  detailsContainer: {
    alignItems: "flex-start",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  detailRow: {
    flexDirection: "row",
    marginVertical: 3,
  },
  repoDetails: {
    color: "white",
    fontSize: 12,
    marginLeft: 4,
  },
});
