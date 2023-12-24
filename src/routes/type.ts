import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamsList> = NativeStackScreenProps<RootStackParamsList, T>;