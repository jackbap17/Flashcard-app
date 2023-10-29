import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import FlipCard from 'react-native-flip-card';

const CardInputScreen = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [cards, setCards] = useState([]);

  const saveCard = () => {
    // Create a new card object with the question and answer.
    const newCard = { question, answer };

    // Add the new card to the existing array of cards.
    setCards([...cards, newCard]);

    // Clear the input fields after saving.
    setQuestion('');
    setAnswer('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Question:</Text>
      <TextInput
        value={question}
        onChangeText={setQuestion}
        placeholder="Enter your question"
      />
      <Text>Answer:</Text>
      <TextInput
        value={answer}
        onChangeText={setAnswer}
        placeholder="Enter your answer"
      />
      <Button title="Save" onPress={saveCard} />

      <Text>Saved Cards:</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {cards.map((card, index) => (
          <View key={index}>
            <FlipCard
              friction={6}
              perspective={1000}
              flipHorizontal={true}
              flipVertical={false}
            >
              {/* Front of the card */}
              <View style={styles.card}>
                <Text>Question: {card.question}</Text>
              </View>
              {/* Back of the card */}
              <View style={styles.card}>
                <Text>Answer: {card.answer}</Text>
              </View>
            </FlipCard>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    width: 200,
    height: 100,
    marginBottom: 10, // Adjust this value to control the vertical spacing between cards
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 6,
    borderRadius: 20,
    backgroundColor: 'lightblue',
    padding: 3,
  },
};

export default CardInputScreen;