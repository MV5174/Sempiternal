var express = require("express");
var inquirer = require("inquirer");
var mysql = require("mysql");
require("console.table");
var connection = require("./config/connection.js");
var orm = require("./config/orm.js");


function startGame(){
    //Main Menu 
    console.log("Sempiternal RPG");
    console.log("---------------------------------------------------")
    inquirer.prompt([
        {
            type: "list",
            name: "mainMenu",
            message: "Main Menu",
            choices: ["New Game", "Load Game", "Options", "Credits", "Exit"]
        }
    ]).then(function(ans){
        switch (ans.mainMenu){
            case "New Game":
                createCharacter();
                break;
            case "Load Game":
                viewGames();
                break;
            case "Options":
                viewOptions();
                break;
            case "Credits":
                viewCredits();
                break;
            case "Exit":
                connection.end();
                break;
        }
    })
    .catch(function(error) {
        console.error(error)})
}
//Create Character function that executes when we choose New Game
function createCharacter (){
    var attrPoints = 20;
    inquirer.prompt([
        {
            type: "input",
            message: "Name: ",
            name: "name"
        }
    ]).then(function(ans){
        var player = new Player(ans.name)
        console.log(player);
        connection.end()
    })
}
startGame();