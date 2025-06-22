import aquaSprite from './assets/aquaSprite.png';
import crystalOwlSprite from './assets/crystalOwl.png';
import ironTurtleSprite from './assets/ironTurtle.png';
import shadowBatSprite from './assets/shadowBat.png';
import stormRavenSprite from './assets/stormRaven.png';
import emberFox from './assets/emberFox.png';
const familiarData = [
  

  {
  name: "Aqua",
  hp: 70,
  maxHp: 70,
  attack: 60,
  sprite: aquaSprite,
  type: "Water",
  attacks: [
    { name: "Aqua Jet", damage: 8, accuracy: 0.85, uses: 10 },
    { name: "Tidal Crush", damage: 12, accuracy: 0.75, uses: 5 },
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
    { name: "Flame Dash", damage: 9, accuracy: 0.85, uses: 10 },
    { name: "Blazing Howl", damage: 13, accuracy: 0.75, uses: 5 },
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
    { name: "Mind Peck", damage: 7, accuracy: 0.9, uses: 10 },
    { name: "Crystal Gaze", damage: 10, accuracy: 0.8, uses: 5 },
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
    { name: "Shell Bash", damage: 9, accuracy: 0.9, uses: 10 },
    { name: "Iron Defense", damage: 0, accuracy: 1.0, uses: 5 },
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
    { name: "Shadow Bite", damage: 10, accuracy: 0.85, uses: 10 },
    { name: "Night Flurry", damage: 12, accuracy: 0.75, uses: 5 },
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
    { name: "Storm Peck", damage: 9, accuracy: 0.9, uses: 10 },
    { name: "Thunder Dive", damage: 14, accuracy: 0.7, uses: 5 },
  ],
},


];

export default familiarData;