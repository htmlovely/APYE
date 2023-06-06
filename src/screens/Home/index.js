import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import axios from 'axios';
import GifPlayer from 'react-native-gif';
import { styles } from './styles';



const App = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.kanye.rest');
      const randomQuote = response.data.quote;
      setQuote(randomQuote);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNewQuote = () => {
    fetchQuote();
  };

  return (
    <View style={styles.container}>
              <GifPlayer
        source={require('../../assets/kanye-west.gif')} // Replace with the actual path to your Kanye West GIF file
        style={styles.image}
      />
      <Text style={styles.quoteText}>{quote}</Text>
      <Button onPress={fetchNewQuote} title="Gerar Nova Frase" style={styles.button} />
    </View>
  );
};

export default App;
