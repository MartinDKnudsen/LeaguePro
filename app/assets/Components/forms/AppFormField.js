import React from "react";
import { StyleSheet, Text, View } from "react-native";


import AppTextInput from "../AppTextInput"
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'


export default function AppFormField( {name, ...otherProps} ) {
   const{setFieldTouched, handleChange, errors, touched} = useFormikContext()

  return (
    <>
      <AppTextInput
        keyboardType="email-address"
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
