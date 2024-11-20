// app/(tabs)/posts.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const PostsScreen = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  // Fetch posts from the API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  // Navigate to the Post Detail screen
  const navigateToDetail = (postId: number) => {
    router.push(`/post-detail?id=${postId}`);
  };

  const renderPost = ({ item }: { item: { id: number; title: string; body: string } }) => (
    <TouchableOpacity style={styles.post} onPress={() => navigateToDetail(item.id)}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body.slice(0, 100)}...</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  post: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postBody: {
    fontSize: 14,
    color: '#555',
  },
});

export default PostsScreen;
