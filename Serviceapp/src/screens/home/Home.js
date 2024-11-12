import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Let’s Discover Home</Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/bell.png')}
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}>
        {['Dates', 'House', 'Apartment', 'Durations'].map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Near You Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Near You</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../../assets/images/housea.jpg')}
            style={styles.cardImage}
          />
          <View style={styles.petsBadge}>
            <Text style={styles.petsText}>3 Pets</Text>
          </View>
          <Text style={styles.cardTitle}>
            Charming house with Adorable Dog!
          </Text>
          <Text style={styles.locationText}>
            Christianssted, U.S. Cikaret Islands
          </Text>
          <Text style={styles.dateText}>9 Apr 24 to 30 Apr 24</Text>
          <Image
            source={require('../../assets/images/housea.jpg')}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Flexible Dates Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Flexible Dates</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../../assets/images/housea.jpg')}
            style={styles.cardImage}
          />
          <View style={styles.petsBadge}>
            <Text style={styles.petsText}>6 Pets</Text>
          </View>
          <Text style={styles.cardTitle}>
            Charming house with Adorable Dog!
          </Text>
          <Text style={styles.locationText}>Location goes here</Text>
          <Text style={styles.dateText}>Date range hereokay</Text>
          <Image
            source={require('../../assets/images/housea.jpg')}
            style={styles.avatar}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 0, backgroundColor: '#F5F5F5'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {fontSize: 24, fontWeight: 'bold'},
  notificationIcon: {width: 24, height: 24},
  categoryContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  categoryButton: {
    marginRight: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  categoryText: {color: '#4A4A4A'},
  sectionContainer: {paddingHorizontal: 16, marginTop: 20},
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {fontSize: 18, fontWeight: '600'},
  viewAll: {color: '#4A90E2'},
  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
  },
  cardImage: {width: '100%', height: 200, borderRadius: 10},
  petsBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#4A90E2',
    padding: 5,
    borderRadius: 5,
  },
  petsText: {color: 'white', fontSize: 12},
  cardTitle: {fontSize: 16, fontWeight: '600', marginTop: 10},
  locationText: {color: '#808080', fontSize: 14, marginTop: 5},
  dateText: {color: '#808080', fontSize: 14, marginTop: 5},
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navButton: {alignItems: 'center'},
  navText: {fontSize: 12, color: '#4A4A4A'},
});

export default Home;
