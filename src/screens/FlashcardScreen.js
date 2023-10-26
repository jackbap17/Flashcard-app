import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FlipCard from 'react-native-flip-card';

class FlashcardScreen extends Component {
  state = {
    isFlipped: false,
    flashcards: [
      { question: "Question 1", answer: "Answer 1" },
      { question: "Question 2", answer: "Answer 2" },
      // Add more flashcards here
    ],
    currentCardIndex: 0, // Initialize with the first card
  };

  flipCard = () => {
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  nextCard = () => {
    this.setState((prevState) => ({
      currentCardIndex: (prevState.currentCardIndex + 1) % prevState.flashcards.length,
      isFlipped: false, // Reset flip state when changing cards
    }));
  };

  render() {
    const { isFlipped, flashcards, currentCardIndex } = this.state;
    const currentCard = flashcards[currentCardIndex];

    return (
      <View style={styles.container}>
                <TouchableOpacity onPress={this.nextCard} style={styles.button}>
          <Text>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.flipCard}>
          <FlipCard
            style={styles.cardContainer}
            friction={6}
            height = {100}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={true}
            flip={isFlipped}
          >
            <View style={styles.card}>
              <Text style={styles.cardText}>
                {currentCard.question}
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardText}>
                {currentCard.answer}
              </Text>
            </View>
          </FlipCard>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: 300,
    height: 200,
  },
  card: {
     flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  cardText: {
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});

export default FlashcardScreen;

