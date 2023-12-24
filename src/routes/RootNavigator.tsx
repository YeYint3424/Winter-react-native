// routes/RootNavigator.tsx

import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from './type';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import {Session} from '@supabase/supabase-js';
import {supabase} from '../api/supabase';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
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
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {session && session.user ? (
          <Stack.Screen name="Home">
            {(props) => <Home {...props} session={session} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    );
  };

export default RootNavigator;
