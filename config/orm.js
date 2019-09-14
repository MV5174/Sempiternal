//orm stuff
var connection = require("../config/connection.js");

function Player (name) {
    this.name = name,
    this.hp= 0,
    this.armor = 0,
    this.mana= 0,
    this.strength= 0,
    this.intelligence= 0,
    this.dexterity= 0,
    this.agility= 0,
    this.constitution= 0,
    this.wisdom= 0,
    this.charisma= 0
}

module.exports = Player;