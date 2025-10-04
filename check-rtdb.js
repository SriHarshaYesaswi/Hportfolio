// quick check script to verify RTDB initialization
import { getDB } from './src/firebase.js';

const db = getDB();
if (db) {
  console.log('Realtime Database initialized successfully.');
} else {
  console.log('Realtime Database not initialized (no databaseURL or error).');
}
