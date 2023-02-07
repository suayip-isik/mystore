import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from "./Login.style";
import { Formik } from 'formik';

const Login = () => {

    const handleLogin = (values) => {
        console.log(values);
    }

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
                                placeholder="Kullanıcı adınızı giriniz..."
                                value={values.username}
                                onChangeText={handleChange("username")} />

                            <Input
                                placeholder="Şifrenizi giriniz..."
                                value={values.password}
                                onChangeText={handleChange("password")} />

                            <Button text={"Giriş yap"} onPress={handleSubmit} />
                        </View>
                    )
                }
            </Formik>
            {/* <View style={styles.bodyContainer}>
                <Input placeholder="Kullanıcı adınızı giriniz..." />
                <Input placeholder="Şifrenizi giriniz..." />
                <Button text={"Giriş yap"} />
            </View> */}
        </SafeAreaView>
    )
}

export default Login