import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import * as S from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconPassword from 'react-native-vector-icons/Ionicons';

export default function Home() {
  const [hidePass, setHidePass] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={S.styles.container}>
          <Image
            style={S.styles.logo}
            source={require('../../assets/logo.png')}
          />

          <TextInput
            style={S.styles.input}
            placeholder="Celular, username ou email"
          />

          <View style={S.styles.boxPassword}>
            <TextInput
              style={S.styles.inputPassword}
              placeholder="Sua senha"
              secureTextEntry={hidePass}
            />
            <TouchableOpacity
              onPress={() => setHidePass(!hidePass)}
              style={S.styles.buttonPassword}>
              {hidePass ? (
                <IconPassword name="eye" color="#000" size={25} />
              ) : (
                <IconPassword name="eye-off" color="#000" size={25} />
              )}
            </TouchableOpacity>
          </View>

          <View style={S.styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={S.styles.forgotText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={S.styles.loginButton}>
            <Text style={S.styles.loginText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={S.styles.facebookContainer}>
            <Icon name="facebook" size={25} color="#399fff" />
            <Text>Continue como LuLu</Text>
          </TouchableOpacity>

          <View style={S.styles.divisor}>
            <View style={S.styles.divisorLine}></View>
            <Text style={{marginHorizontal: '3%'}}>OU</Text>
            <View style={S.styles.divisorLine}></View>
          </View>

          <View style={S.styles.sigUpContainer}>
            <Text style={S.styles.sigUpText}>Não possui uma conta? </Text>
            <TouchableOpacity>
              <Text style={S.styles.sigUpButton}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
