//B1
function createCharacters (){
    const characters = [
        { name: "Mario", level: 10, health: 400 },
        { name: "Luigi", level: 15, health: 300 },
        { name: "Peach", level: 20, health: 600 },
    ];

    const charactersPowerUp = characters.map((characters)=> {
        return{
            name: characters.name.toUpperCase(),
            level: characters.level*2,
            health: characters.health*3,
        }
    });

    const possibleWinners = charactersPowerUp.filter((character) => {
        return character.health>1000;
    });

    console.log(charactersPowerUp);
    console.log(possibleWinners);
}

createCharacters();

//B2
function printLeaderbroard(players){
    players.sort((a, b) => b.score - a.score);
    
    for(let i = 0; i<players.length; i++){
        let medal = "";
        if(i === 0){
            medal = "🥇";
        }else if(i === 1){
            medal = "🥈";
        }else if(i ===2){
            medal = "🥉";
        }
        console.log(`${medal} ${i + 1}. ${players[i].name} - ${players[i].score} pts`); 
    }      
}

const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 500 }
];

printLeaderbroard(players);
