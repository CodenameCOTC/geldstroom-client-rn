import React from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import {
  NavigationScreenProps,
  NavigationScreenOptions,
} from 'react-navigation';
import { TextInput, Button } from '../common';
import { styles } from './styles';
import { colors } from '../../utils';

interface LoginProps extends NavigationScreenProps {}

interface LoginState {
  emailInput: string;
  passwordInput: string;
}

export class Login extends React.PureComponent<LoginProps, LoginState> {
  static navigationOptions: NavigationScreenOptions = {
    header: null,
  };

  passwordInputRef: any = React.createRef();

  constructor(props: LoginProps) {
    super(props);

    this.state = {
      emailInput: '',
      passwordInput: '',
    };
  }

  handleOnChange = (name: string, value: string) => {
    this.setState(current => ({ ...current, [name]: value }));
  };

  onPressLogin = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    const { emailInput, passwordInput } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={colors.primaryLight}
          barStyle="light-content"
        />
        <View style={styles.titleContainer}>
          <Text style={[styles.text, styles.title]}>Geldstroom</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={emailInput}
            label="Email"
            placeholder="Enter email"
            onChangeText={v => this.handleOnChange('emailInput', v)}
            onSubmitEditing={() => this.passwordInputRef.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"
          />
          <TextInput
            value={passwordInput}
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={v => this.handleOnChange('passwordInput', v)}
            ref={this.passwordInputRef}
          />
          <Button
            text="Login"
            loadingText="Loging In..."
            onPress={this.onPressLogin}
            isLoading={false}
            containerStyle={{ marginTop: 35 }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
