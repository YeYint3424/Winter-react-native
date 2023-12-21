/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { Session } from '@supabase/supabase-js';
import { supabase } from './api/supabase';
import Home from './screens/Home';

function App(): React.JSX.Element {

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <ImageBackground
    source={require('./imgs/bg.jpg')}
    >
      <View style={{minHeight: 900}}>
      {session && session.user ? (
        <Home key={session.user.id} session={session} />
      ) : (
        <Login />
      )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

export default App;
