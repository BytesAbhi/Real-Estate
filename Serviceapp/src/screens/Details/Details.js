import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const PropertyDetails = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Main Image */}
      <View style={styles.imageContainer}>
        {/* Replace this Image with your main image */}
        <Image
          source={require('./path/to/main-image.jpg')}
          style={styles.mainImage}
        />
        <View style={styles.topIcons}>
          <TouchableOpacity style={styles.iconButton}>
            {/* Replace with your back icon */}
            <Image
              source={require('./path/to/back-icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.iconButton}>
              {/* Replace with your share icon */}
              <Image
                source={require('./path/to/share-icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              {/* Replace with your heart/favorite icon */}
              <Image
                source={require('./path/to/favorite-icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Property Title and Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.propertyTitle}>
          Charming house with Adorable Dog!
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>4.9 (1,900)</Text>
          <Text style={styles.dateText}>• 9 Apr 24 to 30 Apr 24</Text>
        </View>
        <Text style={styles.locationText}>
          Christianssted, U.S. Cikaret Islands
        </Text>
      </View>

      {/* About Home Section */}
      <View style={styles.aboutContainer}>
        <Text style={styles.sectionTitle}>About Home</Text>
        <Text style={styles.aboutText}>
          Step into cozy comfort in our charming flat, where an adorable Dog
          awaits to greet you with wagging tail and boundless joy. Experience
          the warmth.
          <Text style={styles.viewAllText}> View All...</Text>
        </Text>
      </View>

      {/* Home Highlights Section */}
      <View style={styles.highlightsContainer}>
        <Text style={styles.sectionTitle}>Home Highlights</Text>
        <View style={styles.highlightItems}>
          <View style={styles.highlightItem}>
            {/* Replace with pet icon */}
            <Image
              source={require('./path/to/pet-icon.png')}
              style={styles.highlightIcon}
            />
            <Text style={styles.highlightText}>2 dogs, 1 cat</Text>
          </View>
          <View style={styles.highlightItem}>
            {/* Replace with bed icon */}
            <Image
              source={require('./path/to/bed-icon.png')}
              style={styles.highlightIcon}
            />
            <Text style={styles.highlightText}>3 Bedrooms</Text>
          </View>
          <View style={styles.highlightItem}>
            {/* Replace with WiFi icon */}
            <Image
              source={require('./path/to/wifi-icon.png')}
              style={styles.highlightIcon}
            />
            <Text style={styles.highlightText}>free Wifi area</Text>
          </View>
        </View>
      </View>

      {/* Contact Button */}
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact home owner</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F5F5'},
  imageContainer: {position: 'relative'},
  mainImage: {width: '100%', height: 250},
  topIcons: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
  },
  icon: {width: 20, height: 20},
  rightIcons: {flexDirection: 'row'},

  detailsContainer: {padding: 16},
  propertyTitle: {fontSize: 20, fontWeight: 'bold', marginBottom: 8},
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {color: '#808080', marginRight: 10},
  dateText: {color: '#808080'},
  locationText: {color: '#808080', marginTop: 4},

  aboutContainer: {padding: 16, paddingTop: 0},
  sectionTitle: {fontSize: 16, fontWeight: 'bold', marginBottom: 8},
  aboutText: {color: '#808080'},
  viewAllText: {color: '#4A90E2'},

  highlightsContainer: {padding: 16, paddingTop: 0},
  highlightItems: {flexDirection: 'row', justifyContent: 'space-between'},
  highlightItem: {alignItems: 'center'},
  highlightIcon: {width: 24, height: 24, marginBottom: 4},
  highlightText: {color: '#808080', fontSize: 14},

  contactButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 16,
    alignItems: 'center',
    margin: 16,
    borderRadius: 8,
  },
  contactButtonText: {color: 'white', fontSize: 16, fontWeight: 'bold'},
});

export default PropertyDetails;
