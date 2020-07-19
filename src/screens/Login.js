import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('email: ', email);
  console.log('password: ', password);

  return (
    <ScrollView style={styles.container}>
      <View>
        <View
          style={{
            marginTop: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={require('../../assets/logo.png')}></Image>
          <Text
            style={[
              styles.text,
              { marginTop: 10, fontSize: 22, fontWeight: '500' },
            ]}
          >
            Alaverga
          </Text>
        </View>
        <View
          style={{
            marginTop: 48,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image
                source={require('../../assets/facebook.png')}
                style={styles.socialLogo}
              ></Image>
              <Text style={styles.text}>Feisbuk</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image
                source={require('../../assets/google.png')}
                style={styles.socialLogo}
              ></Image>
              <Text style={styles.text}>Gugol</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.text,
            {
              color: '#ABB48D',
              fontSize: 15,
              textAlign: 'center',
              marginVertical: 20,
            },
          ]}
        >
          Or
        </Text>

        {/* text field email */}
        <View>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            onChangeText={(value) => {
              setEmail(value);
            }}
            style={styles.input}
            placeholder='e.g: estebandido@habbo.com'
            secureTextEntry={false}
          ></TextInput>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: '#D8D8D8' }}
          ></View>
        </View>

        {/* text field password */}
        <View style={{ marginTop: 25, marginBottom: 8 }}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            onChangeText={(value) => {
              setPassword(value);
            }}
            style={styles.input}
            placeholder='e.g: estebandido@habbo.com'
            secureTextEntry={true}
          ></TextInput>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: '#D8D8D8' }}
          ></View>
        </View>

        <Text style={[styles.text, styles.link, { textAlign: 'right' }]}>
          Forgot Password?
        </Text>

        <TouchableOpacity
          style={styles.submitContainer}
          onPress={() => {
            navigation.navigate('Feed', {
              email: email,
              password: password,
            });
          }}
        >
          <Text
            style={[
              styles.text,
              { color: '#fff', fontWeight: '700', fontSize: 16 },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.text,
            {
              fontSize: 14,
              color: '#ABB4BD',
              textAlign: 'center',
              marginTop: 24,
            },
          ]}
        >
          Dont have an account?{' '}
          <Text style={[styles.text, styles.link]}>Register Now</Text>
        </Text>
      </View>
    </ScrollView>
  );

  // return (
  //   <View style={styles.center}>
  //     <Text style={styles.title}>Login component</Text>
  //     <Button
  //       title='Go to feed main page'
  //       onPress={() => {
  //         navigation.navigate('Feed', {
  //           titleName: 'Wenas tardes',
  //         });
  //       }}
  //     />
  //   </View>
  // );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  text: {
    color: '#1D2029',
  },
  socialButton: {
    flexDirection: 'row',
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(171, 180, 189, 0.65)',
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: 'rgba(171, 180, 189, 0.35)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  socialLogo: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  link: {
    color: '#FF1654',
    fontSize: 14,
    fontWeight: 'bold',
  },
  submitContainer: {
    backgroundColor: '#FF1654',
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255,22,84,0.25)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 4,
  },
  inputTitle: {
    color: '#ABB4BD',
    fontSize: 14,
  },
  input: {
    paddingVertical: 12,
    color: '#1D2029',
    fontSize: 14,
  },
});
