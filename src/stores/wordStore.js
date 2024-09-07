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

  addWord(topic, newWord) {
    this.words[topic].push(newWord);
  }

  updateWord(topic, index, updatedWord) {
    this.words[topic][index] = updatedWord;
  }

  deleteWord(topic, index) {
    this.words[topic].splice(index, 1);
  }

  fetchWords(topic) {
    fetch(`/data/wordsData.json`)
      .then(response => response.json())
      .then(data => {
        this.words = data;
      })
      .catch(error => {
        console.error('Failed to fetch words', error);
      });
  }
}

const wordStore = new WordStore();
export default wordStore;
