var express = require("express");
var inquirer = require("inquirer");
var mysql = require("mysql");
require("console.table");
var orm = require("./config/orm.js");


function startGame(){
    //Main Menu 
    console.log("Sempiternal RPG");
    console.log("---------------------------------------------------")
    inquirer.prompt([
        {
            type: "list",
            name: "Main-Menu",
            message: "Main Menu",
            choices: ["New Game", "Load Game", "Options", "Credits", "Exit"]
        }
    ]).then(function(err, choice){
        if (err) throw err;
        switch (choice.Main-Menu){
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

function createCharacter (){
    var attrPoints;
    inquirer.prompt([
        {
            type: "input",
            message: "Name: ",
            name: "name"
        }
    ]).then(function(ans){
        var player = new player(ans.name)
        console.log(player);
        connection.end()
    })
}
startGame();