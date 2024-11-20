// app/(tabs)/post-detail.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter  } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const PostDetailScreen = () => {
  const [post, setPost] = useState<any>(null);
  const { id } = useLocalSearchParams();
  
  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((error) => console.error('Error fetching post detail:', error));
    }
  }, [id]);

  if (!post) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postBody}>{post.body}</Text>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  postBody: {
    fontSize: 16,
    color: '#333',
  },
});

export default PostDetailScreen;
