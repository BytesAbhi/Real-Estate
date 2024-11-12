import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');

const SignUp = () => {
  const [image, setImage] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChooseImage = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: 'photo', includeBase64: false },
      response => {
        if (response.didCancel) {
          Alert.alert('Cancelled image selection');
        } else if (response.errorMessage) {
          Alert.alert('Error: ' + response.errorMessage);
        } else {
          setImage(response.assets[0]);
        }
      },
    );
  };

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleSignUp = () => {
    // Basic validation example
    if (!name || !username || !email || !password) {
      Alert.alert('Please fill in all fields');
      return;
    }
    if (password.length < 8) {
      Alert.alert('Password must be at least 8 characters');
      return;
    }
    Alert.alert('Sign up successful!');
    // Further sign-up logic goes here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account ✨</Text>
      <Text style={styles.subtitle}>Welcome! Please enter your details.</Text>

      <TouchableOpacity style={styles.imagePicker} onPress={handleChooseImage}>
        {image ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Image source={{ uri: image.uri }} style={styles.imagePre} />
            <Text style={styles.imagePickerText}>Change Profile Picture</Text>
          </View>
        ) : (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Image
              source={require('../../assets/images/icosnds.png')}
              style={styles.imagePre}
            />
            <Text style={styles.imagePickerText}>Select Profile Picture</Text>
          </View>
        )}
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/images/card.png')}
          style={{ width: 22.5, height: 17 }}
        />
        <TextInput
          placeholder="Enter your name"
          placeholderTextColor={'#808080'}
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={{ width: 16.45, height: 20 }}
        />
        <TextInput
          placeholder="Enter your Username"
          placeholderTextColor={'#808080'}
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/images/mails.png')}
          style={{ width: 22.5, height: 17.5 }}
        />
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor={'#808080'}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={[styles.inputContainer, { paddingRight: 15 }]}>
        <Image
          source={require('../../assets/images/lock.png')}
          style={{ width: 22.5, aspectRatio: 1 }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '92.5%',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="******"
            placeholderTextColor={'#808080'}
            secureTextEntry={!isPasswordVisible}
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
            maxLength={45}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeButton}>
            <Image
              source={
                isPasswordVisible
                  ? require('../../assets/images/eye.png')
                  : require('../../assets/images/eye-off.png')
              }
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleCheckboxToggle} style={styles.checkbox}>
          <View style={isChecked ? styles.checkedBox : styles.uncheckedBox} />
        </TouchableOpacity>
        <Text style={{ color: '#808080', fontWeight: '400' }}>
          Must be at least 8 characters
        </Text>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign up with</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/images/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/images/search.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/images/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: height,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '400',
    textAlign: 'left',
    marginBottom: 20,
  },

  imagePicker: {alignItems: 'center', marginBottom: 15},
  imagePickerText: {fontSize: 16, color: 'rgba(126,88,199,1)'},
  imagePre: {width: 75, height: 75, borderRadius: 50},
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  input: {
    padding: 15,
    fontSize: 16,
    color: '#808080',
    width: '92.5%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#666',
  },
  signUpButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  socialButton: {
    padding: 17.5,
    borderRadius: 15,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#666',
  },
  loginLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default SignUp;
