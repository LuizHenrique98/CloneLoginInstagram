import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
  },
  input: {
    backgroundColor: '#F4F3F3',
    width: '90%',
    height: 42,
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#399FFF',
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#399FFF',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
    fontSize: 17,
  },
  facebookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%',
  },
  facebookText: {
    color: '#399fff',
    paddingLeft: 8,
    fontSize: 15,
  },
  divisor: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divisorLine: {
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5,
  },
  sigUpContainer: {
    flexDirection: 'row',
    marginTop: '10%',
  },
  sigUpText: {
    color: '#c4c4c4',
    paddingRight: 5,
  },
  sigUpButton: {
    color: '#399fff',
    fontWeight: 'bold',
  },
  boxPassword: {
    flexDirection: 'row',
    width: '90%',
    height: 42,
    backgroundColor: '#F4F3F3',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
  },
  inputPassword: {
    width: '85%',
    height: 42,
    padding: 8,
  },
  buttonPassword: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    padding: 8,
  },
});
