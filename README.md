
# Exploding Kitten
This is an online single-player card game that consists of 4 different types of cards

- Cat card 😼
- Defuse card 🙅‍♂️
- Shuffle card 🔀
- Exploding kitten card 💣

**Rules** 

- If the card drawn from the deck is a cat card, then the card is removed from the deck.
- If the card is exploding kitten (bomb) then the player loses the game.
- If the card is a defusing card, then the card is removed from the deck. This card can be used to defuse one bomb that may come in subsequent cards drawn from the deck.
- If the card is a shuffle card, then the game is restarted and the deck is filled with 5 cards again.




## Features

- Users can create a username to enter the game and leaderboard is there to show how many games they won
- Automatically saves the game for a user at every stage so the user can continue from where he left off last time.
-  Website created using redux for state management which allows a player to draw a random card from the deck once the game is started.
- MongoDb is used to store all the user data and game data.
- REST APIs created using express.


## Run Locally

Clone the project

```bash
  git clone https://github.com/jignyasamishra/explodingkitten
```

Go to the project directory

```bash
  cd exploding-kitten 
  cd client (frontend)
  cd backend (backend)
  
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

**Video Demo**


https://github.com/jignyasamishra/explodingkitten/assets/85229187/e9f6d9ac-29dd-4520-a6c2-e023a4ccf4db

