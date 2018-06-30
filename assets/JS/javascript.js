var player = 0;

var enemy = 0;

var zann = {
    "hp":150,
    "attackPower":20,
}

var thrawn = {
    "hp":150,
    "attackPower":30,
}

var ackbar = {
    "hp":200,
    "attackPower":20,
}

var leaderArray = [zann, thrawn, ackbar];


// var reset = function(){
//     enemy=0;
//     player=0;
//     $("#battleEnemy").empty();
//     $("#battlePlayer").empty();
//     $('#zannChoice').prop('disabled',false);
//     $('#thrawnChoice').prop('disabled',false);
//     $('#ackbarChoice').prop('disabled',false);
    
// }

// reset button causes an issue where when u click it will 


var zannPlayer = function(){
    $("#zannChoice").on("click", function(){
        if(player===0){
            player=zann;
            $("#zannNoBtn").clone().appendTo("#battlePlayer")
            $('#zannChoice').prop('disabled',true);
            $('#battlePlayer').append("<p id='playerHp'>150</p>")
        }
    })
}
var thrawnPlayer = function(){
    $("#thrawnChoice").on("click", function(){
        if(player===0){
            player=thrawn;
            $("#thrawnNoBtn").clone().appendTo("#battlePlayer")
            $('#thrawnChoice').prop('disabled',true);
            $('#battlePlayer').append("<p id='playerHp'>150</p>")
        }
    })
}
var ackbarPlayer = function(){
    $("#ackbarChoice").on("click", function(){
        if(player===0){
            player=ackbar;
            $("#ackbarNoBtn").clone().appendTo("#battlePlayer")
            $('#ackbarChoice').prop('disabled',true);
            $('#battlePlayer').append("<p id='playerHp'>150</p>")
        }
        
    })
}


var zannEnemy = function(){
    $("#zannChoice").on("click", function(){
        if(enemy===0 && enemy!==zann){
            enemy=zann;
            $("#zannNoBtn").clone().appendTo("#battleEnemy")
            $('#zannChoice').prop('disabled',true);
            $('#battleEnemy').append("<p id='enemyHp'>150</p>")
        }
    })
}
var thrawnEnemy = function(){
    $("#thrawnChoice").on("click", function(){
        if(enemy===0){
            enemy=thrawn;
            $("#thrawnNoBtn").clone().appendTo("#battleEnemy")
            $('#thrawnChoice').prop('disabled',true);
            $('#battleEnemy').append("<p id='enemyHp'>150</p>")
        }
        
    })
}
var ackbarEnemy = function(){
    $("#ackbarChoice").on("click", function(){
        if(enemy===0){
            enemy=ackbar;
            $("#ackbarNoBtn").clone().appendTo("#battleEnemy")
            $('#ackbarChoice').prop('disabled',true);
            $('#battleEnemy').append("<p id='enemyHp'>150</p>")
        }
    })
}


var attackPlayer = function(){
    if(player===0){
        alert("Please select a Commander first")
    }
    else if(enemy===0){
        alert("Please select an Opponent first")
    }
    else{
        enemy.hp = enemy.hp - player.attackPower
        player.attackPower=player.attackPower+20    
        $("#enemyHp").text(enemy.hp);
        if(enemy.hp<1){
            enemy=0;
            $("#battleEnemy").empty();
            alert('You Win!')
        }
        
    }
}
var attackEnemy = function(){
    if (player===0){
        alert("Please select a Commander first")
    }
    else if (enemy===0){
        alert("Please select an Opponent first")
    }
    else{
        player.hp = player.hp - enemy.attackPower
        $("#playerHp").text(player.hp);
        if(player.hp<1){
            alert('You Lose')
        }
    }
}

var combat = function(){

        attackPlayer();
        attackEnemy();
}

$("#leaderChoice").on('click', function(){
    
    zannPlayer();
    ackbarPlayer();
    thrawnPlayer();
    
});


$("#enemyChoice").on('click', function(){

    ackbarEnemy();
    thrawnEnemy();
    zannEnemy();

});


$("#attack").on('click', function(){
   combat();
})
$('#reset').on('click', function(){
    reset();
})