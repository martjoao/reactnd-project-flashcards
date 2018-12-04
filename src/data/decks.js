import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'FLASHCARDS:decks'

export async function clearDecks() {
  await AsyncStorage.removeItem(DECKS_STORAGE_KEY);
};

export async function createDeck(deckTitle) {
  if (deckTitle === '') return;
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

export async function getDecksArray() {
  const decks = await getDecks()
  return Object.keys(decks).map(key => decks[key]);
}

export async function getDeck(key) {
  const decks = await getDecks();
  return decks[key];
}

export async function addCardToDeck(title, card) {
  const decks = await getDecks();
  decks[title].questions.push(card);
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
}
