import React from 'react'
import { View, SafeAreaView, Image } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from "./Login.style";
import { Formik } from 'formik';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';

const Login = () => {
    const { data, loading, error, post } = usePost();

    /*
    username:johnd
    password:m38rmF$
    */

    const handleLogin = (values) => {
        post(Config.API_AUTH_URL + '/login', values)
        console.log(data);
    }

    // if (data) {
    //     console.log(data);
    // }

    // if (error) {
    //     console.log(error);
    // }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/login-logo.png')} style={styles.logo} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}>
                {
                    ({ handleChange, handleSubmit, values }) => (
                        <View style={styles.bodyContainer}>
                            <Input
                                iconName={'account'}
                                placeholder="Kullanıcı adınızı giriniz..."
                                value={values.username}
                                onChangeText={handleChange("username")} />

                            <Input
                                iconName={'key'}
                                placeholder="Şifrenizi giriniz..."
                                value={values.password}
                                onChangeText={handleChange("password")}
                                isSecure
                            />

                            <Button text={"Giriş yap"} onPress={handleSubmit} loading={loading} />
                        </View>
                    )
                }
            </Formik>
        </SafeAreaView>
    )
}

export default Login