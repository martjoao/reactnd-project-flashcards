import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'FLASHCARDS:decks'

export async function createDeck(deckTitle) {
  await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deckTitle]: {
      title: deckTitle,
      questions: [],
    }
  }));
};

export async function getDecks() {
  const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  if (!decks) {
    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({}))
    return await getDecks();
  }
  return JSON.parse(decks);
}

export async function getDeck(key) {
  const decks = await getDecks();
  return decks[key]
}

export async function addCardToDeck(title, card) {
  const decks = await getDecks();
  decks[title].questions.push(card);
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
}
