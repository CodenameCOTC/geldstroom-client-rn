import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { Login, Register, Home, Records, Setting } from '../components';
import { store } from '../store/store';

const screens: { name: string; component: any }[] = [
  { name: 'Login', component: Login },
  { name: 'Register', component: Register },
  { name: 'Home', component: Home },
  { name: 'Records', component: Records },
  { name: 'Setting', component: Setting },
];

export function registerScreen() {
  screens.map(screen =>
    Navigation.registerComponentWithRedux(
      screen.name,
      () => screen.component,
      Provider,
      store,
    ),
  );
}
