// import aquaSprite from './assets/aquaSprite.png';
// import crystalOwlSprite from './assets/crystalOwl.png';
// import ironTurtleSprite from './assets/ironTurtle.png';
// import shadowBatSprite from './assets/shadowBat.png';
// import stormRavenSprite from './assets/stormRaven.png';
// import emberFox from './assets/emberFox.png';
// const familiarData = [
  

//   {
//   name: "Aqua",
//   hp: 70,
//   maxHp: 70,
//   attack: 60,
//   sprite: aquaSprite,
//   type: "Water",
//   attacks: [
//     { name: "Aqua Jet", damage: 8, accuracy: 0.85, uses: 10 },
//     { name: "Tidal Crush", damage: 12, accuracy: 0.75, uses: 5 },
//   ],
// },
// {
//   name: "Ember Fox",
//   hp: 65,
//   maxHp: 65,
//   attack: 85,
//   sprite: emberFox,
//   type: "Fire",
//   attacks: [
//     { name: "Flame Dash", damage: 9, accuracy: 0.85, uses: 10 },
//     { name: "Blazing Howl", damage: 13, accuracy: 0.75, uses: 5 },
//   ],
// },

// {
//   name: "Crystal Owl",
//   hp: 60,
//   maxHp: 60,
//   attack: 65,
//   sprite: crystalOwlSprite,
//   type: "Psychic/Flying",
//   attacks: [
//     { name: "Mind Peck", damage: 7, accuracy: 0.9, uses: 10 },
//     { name: "Crystal Gaze", damage: 10, accuracy: 0.8, uses: 5 },
//   ],
// },
// {
//   name: "Iron Turtle",
//   hp: 120,
//   maxHp: 120,
//   attack: 70,
//   sprite: ironTurtleSprite,
//   type: "Steel",
//   attacks: [
//     { name: "Shell Bash", damage: 9, accuracy: 0.9, uses: 10 },
//     { name: "Iron Defense", damage: 0, accuracy: 1.0, uses: 5 },
//   ],
// },
// {
//   name: "Shadow Bat",
//   hp: 55,
//   maxHp: 55,
//   attack: 90,
//   sprite: shadowBatSprite,
//   type: "Dark/Flying",
//   attacks: [
//     { name: "Shadow Bite", damage: 10, accuracy: 0.85, uses: 10 },
//     { name: "Night Flurry", damage: 12, accuracy: 0.75, uses: 5 },
//   ],
// },
// {
//   name: "Storm Raven",
//   hp: 75,
//   maxHp: 75,
//   attack: 95,
//   sprite: stormRavenSprite,
//   type: "Electric/Flying",
//   attacks: [
//     { name: "Storm Peck", damage: 9, accuracy: 0.9, uses: 10 },
//     { name: "Thunder Dive", damage: 14, accuracy: 0.7, uses: 5 },
//   ],
// },


// ];

// export default familiarData;



import aquaSprite from './assets/aquaSprite.png';
import crystalOwlSprite from './assets/crystalOwl.png';
import ironTurtleSprite from './assets/ironTurtle.png';
import shadowBatSprite from './assets/shadowBat.png';
import stormRavenSprite from './assets/stormRaven.png';
import emberFox from './assets/emberFox.png';

import destructiveDodoSprite from './assets/destructiveDodo.png';
import anubisJackalSprite from './assets/anubisJackal.png';
import atlasKingLionSprite from './assets/atlasKing.png';
import kestrelSprite from './assets/kestrel.png';
import solitaireSprite from './assets/solitaire.png';
import shujaaPantherSprite from './assets/shujaaPanther.png';

const familiarData = [
  {
    name: "Aqua",
    hp: 70,
    maxHp: 70,
    attack: 60,
    sprite: aquaSprite,
    type: "Water",
    attacks: [
      { name: "Aqua Jet", damage: 8, accuracy: 0.85, uses: 20 },
      { name: "Tidal Crush", damage: 12, accuracy: 0.75, uses: 15 },
    ],
  },
  {
    name: "Ember Fox",
    hp: 65,
    maxHp: 65,
    attack: 85,
    sprite: emberFox,
    type: "Fire",
    attacks: [
      { name: "Flame Dash", damage: 9, accuracy: 0.85, uses: 20 },
      { name: "Blazing Howl", damage: 13, accuracy: 0.75, uses: 15 },
    ],
  },
  {
    name: "Crystal Owl",
    hp: 60,
    maxHp: 60,
    attack: 65,
    sprite: crystalOwlSprite,
    type: "Psychic/Flying",
    attacks: [
      { name: "Mind Peck", damage: 7, accuracy: 0.9, uses: 30 },
      { name: "Crystal Gaze", damage: 10, accuracy: 0.8, uses: 25 },
    ],
  },
  {
    name: "Iron Turtle",
    hp: 120,
    maxHp: 120,
    attack: 70,
    sprite: ironTurtleSprite,
    type: "Steel",
    attacks: [
      { name: "Shell Bash", damage: 9, accuracy: 0.9, uses: 20 },
      { name: "Iron Defense", damage: 0, accuracy: 1.0, uses: 25 },
    ],
  },
  {
    name: "Shadow Bat",
    hp: 55,
    maxHp: 55,
    attack: 90,
    sprite: shadowBatSprite,
    type: "Dark/Flying",
    attacks: [
      { name: "Shadow Bite", damage: 10, accuracy: 0.85, uses: 20 },
      { name: "Night Flurry", damage: 12, accuracy: 0.75, uses: 15 },
    ],
  },
  {
    name: "Storm Raven",
    hp: 75,
    maxHp: 75,
    attack: 95,
    sprite: stormRavenSprite,
    type: "Electric/Flying",
    attacks: [
      { name: "Storm Peck", damage: 9, accuracy: 0.9, uses: 20 },
      { name: "Thunder Dive", damage: 14, accuracy: 0.7, uses: 15 },
    ],
  },
  {
    name: "Destructive Dodo",
    hp: 150,
    maxHp: 150,
    attack: 120,
    sprite: destructiveDodoSprite,
    type: "Legendary/Fire",
    attacks: [
      { name: "Ashen Wings", damage: 15, accuracy: 0.85, uses: 20 },
      { name: "Extinction Burst", damage: 24, accuracy: 0.9, uses: 10 },
    ],
  },
  {
    name: "Anubis Jackal",
    hp: 70,
    maxHp: 70,
    attack: 80,
    sprite: anubisJackalSprite,
    type: "Dark",
    attacks: [
      { name: "Soul Rend", damage: 11, accuracy: 0.8, uses: 30 },
      { name: "Eternal Judgement", damage: 28, accuracy: 0.7, uses: 3 },
    ],
  },
  {
    name: "Atlas King",
    hp: 125,
    maxHp: 125,
    attack: 100,
    sprite: atlasKingLionSprite,
    type: "Fighting",
    attacks: [
      { name: "Royal Claw", damage: 15, accuracy: 0.85, uses: 20 },
      { name: "Conquerers Roar", damage: 28, accuracy: 0.75, uses: 3 },
    ],
  },
  {
    name: "Kestrel",
    hp: 100,
    maxHp: 100,
    attack: 70,
    sprite: kestrelSprite,
    type: "Flying",
    attacks: [
      { name: "Wing Flick", damage: 15, accuracy: 0.9, uses: 30 },
      { name: "Hunting Dive", damage: 32, accuracy: 0.8, uses: 5 },
    ],
  },
  {
    name: "Solitaire",
    hp: 125,
    maxHp: 125,
    attack: 75,
    sprite: solitaireSprite,
    type: "Normal",
    attacks: [
      { name: "Stone Beak", damage: 15, accuracy: 0.9, uses: 30 },
      { name: "Rodrigues Charge", damage: 32, accuracy: 0.75, uses: 5 },
    ],
  },
  {
    name: "Shujaa Panther",
    hp: 100,
    maxHp: 100,
    attack: 88,
    sprite: shujaaPantherSprite,
    type: "Dark/Grass",
    attacks: [
      { name: "Jungle Claw", damage: 10, accuracy: 0.85, uses: 30 },
      { name: "Shadow Leap", damage: 24, accuracy: 0.7, uses: 4 },
    ],
  },
];

export default familiarData;
