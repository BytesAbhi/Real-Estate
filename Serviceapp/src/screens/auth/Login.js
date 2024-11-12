import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const Login = () => {
  return (
    <View
      style={{
        height: height,
        backgroundColor: '#f8f8f8',
        position: 'absolute',
      }}>
      <Image
        source={require('../../assets/images/house.jpg')}
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={[
          'rgba(22, 20, 33, 0)',
          'rgba(22, 20, 33, 0.95)',
          'rgba(22, 20, 33, 1)',
          'rgba(22, 20, 33,1)',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        locations={[0, 0.1, 0.2, 1]}
        style={styles.overlay}>
        <Text style={styles.title}>Where Homes Find Vigilant Care!</Text>
        <Text style={styles.subtitle}>
          Entrust your property to our diligent care, ensuring you return to a
          haven unchanged by worry or stress.
        </Text>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <View style={styles.ButtView}>
            <View>
              <Image
                style={{height: 25, width: 25}}
                source={require('../../assets/images/facebook.png')}
              />
            </View>
            <Text style={styles.googleText}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <View style={styles.ButtView}>
            <View>
              <Image
                style={{height: 25, width: 25}}
                source={require('../../assets/images/search.png')}
              />
            </View>
            <Text style={styles.googleText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.NotHaveAcc}>
          <Text style={styles.signUpText}>Don’t have an account?</Text>
          <TouchableOpacity
            style={{
              height: 20,
              paddingHorizontal: 0,
            }}>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: height * 0.65,
    width: width,
    position: 'absolute',
    top: 0,
  },
  overlay: {
    width: width,
    flex: 1,
    position: 'absolute',
    bottom: 0,
    height: height * 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 42,
    lineHeight: 56,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    color: '#f8f8f8',
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: '300',
    lineHeight: 28,
  },
  signInButton: {
    width: width * 0.85,
    backgroundColor: '#7F56D9',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 50,
    marginBottom: 10,
  },
  signInText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    width: width * 0.85,
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginBottom: 10,
  },
  ButtView: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    gap: 15,
  },
  googleText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  NotHaveAcc: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 5,
    marginTop: 20,
  },
  signUpText: {
    color: '#ccc',
  },
  signUpLink: {
    color: '#7F56D9',
    fontWeight: 'bold',
  },
});

export default Login;
