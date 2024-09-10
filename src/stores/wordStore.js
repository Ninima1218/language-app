import { makeAutoObservable } from 'mobx';

class WordStore {
  words = {
    family: [],
    city: [],
    food: [],
    people: []
  };

  constructor() {
    makeAutoObservable(this);
  }

  setWordsForTopic(topic, newWords) {
    this.words[topic] = newWords;  // Устанавливаем новые слова для указанной темы
  }
  
  addWord(topic, newWord) {
    if (this.words[topic]) {
      this.words[topic].push(newWord);
    }
  }

  updateWord(topic, index, updatedWord) {
    if (this.words[topic] && this.words[topic][index]) {
      this.words[topic][index] = updatedWord;
    }
  }

  deleteWord(topic, index) {
    if (this.words[topic]) {
      this.words[topic].splice(index, 1);
    }
  }

  fetchWords(topic) {
    fetch('/data/wordsData.json')
      .then(response => response.json())
      .then(data => {
        if (data[topic]) {
          this.words[topic] = data[topic];  // Update only the relevant topic
        }
      })
      .catch(error => {
        console.error('Failed to fetch words', error);
      });
  }
}

const wordStore = new WordStore();
export default wordStore;
