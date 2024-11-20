// app/profile.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function ProfileScreen() {

  // Function to open the portfolio website
  const openPortfolio = () => {
    const url = 'https://addinseptyan.my.id';  // Replace with your portfolio URL
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://www.addinseptyan.my.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-picture.d554da32.jpg&w=1080&q=75' }}  // Replace with a real image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Addin Septyan</Text>
        <Text style={styles.profileBio}>Software Developer | Tech Enthusiast</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>About Me</Text>
        <Text style={styles.detailsText}>
          I am a passionate software developer with experience in building mobile and web applications. I enjoy learning about new technologies and building projects that solve real-world problems.
        </Text>
      </View>

      {/* Link to portfolio website */}
      <View style={styles.portfolioContainer}>
        <Text style={styles.detailsTitle}>Check Out My Portfolio</Text>
        <TouchableOpacity onPress={openPortfolio}>
          <Text style={styles.portfolioLink}>Visit Portfolio</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileBio: {
    fontSize: 16,
    color: 'gray',
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    color: 'black',
  },
  portfolioContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  portfolioLink: {
    fontSize: 16,
    color: '#007AFF',  // iOS-style blue link color
    textDecorationLine: 'underline',
  },
});
