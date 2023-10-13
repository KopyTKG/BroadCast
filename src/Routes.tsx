/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import MainLayout from './layouts/loggedIn.layout';
import LoginLayout from './layouts/login.layout';
function Routes() {
  const [loggedIn, setLoggin] = useState<boolean>();
  const [token, setToken] = useState<string>();
  const {
    authorize,
    clearSession,
    getCredentials,
    user,
    isLoading,
    hasValidCredentials,
  } = useAuth0();

  const onLogin = async () => {
    await authorize({}, {});
    Check();
  };

  const onLogout = async () => {
    await clearSession({}, {});
    Check();
  };

  function Check() {
    hasValidCredentials()
      .catch(e => {
        console.log(e);
        setLoggin(false);
      })
      .then(credentials => {
        if (credentials) {
          setLoggin(true);
        } else {
          setLoggin(false);
        }
      });
  }
  useEffect(() => {
    hasValidCredentials()
      .catch(e => {
        console.log(e);
        setLoggin(false);
      })
      .then(credentials => {
        if (credentials) {
          setLoggin(true);
          getCredentials().then(credential => {
            if (credential) {
              setToken(credential.idToken);
            } else {
              setLoggin(false);
            }
          });
        } else {
          setLoggin(false);
        }
      });
  }, [loggedIn, hasValidCredentials, getCredentials]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <>
      {!loggedIn ? (
        <LoginLayout login={onLogin} />
      ) : (
        <MainLayout
          logout={onLogout}
          user={user ? user : {name: '', picture: ''}}
          token={token}
        />
      )}
    </>
  );
}

export default Routes;
