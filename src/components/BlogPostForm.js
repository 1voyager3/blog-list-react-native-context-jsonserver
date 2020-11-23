import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';


const BlogPostForm = ( { onSubmit, initialValue } ) => {

  const [title, setTitle] = useState( initialValue.title );
  const [content, setContent] = useState( initialValue.content );

  return (
      <View>
        <Text style={ styles.label }
        >
          Enter Title
        </Text>
        <TextInput
            value={ title }
            onChangeText={ text => setTitle( text ) }
            style={ styles.input }
        />
        <Text style={ styles.label }
        >
          Enter Content</Text>
        <TextInput
            multiline={ true }
            numberOfLines={ 4 }
            value={ content }
            onChangeText={ text => setContent( text ) }
            style={ styles.input }
        />
        <Button
            title="Save Blog Post"
            onPress={ () => onSubmit( title, content ) }
        />
      </View>
  );
};

BlogPostForm.defaultProps = {
  initialValue: {
    title: '',
    content: ''
  }
};

const styles = StyleSheet.create( {
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
} );

export default BlogPostForm;