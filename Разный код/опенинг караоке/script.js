var songtext;
songtext = [ // [text, duration]
        ["",10500],
        ["I ", 500],
        ["Don't ", 100],  //I don't want nobody to get killed 
        ["want ", 400],
        ["no", 400],
        ["body ", 1000],
        ["to ", 550],
        ["get ", 500],
        ["killed ", 1000],
    ];
var newText = function() {
    var text="";
    $.each(songtext, function(a, b) {
        text += "<span id='p"+a+"' style='color:blue'>" + b[0] + "</span>";
    });
    
    $('#div').html(text);
    
    cc=0;
    
    nextWord();
    /*setTimeout(function(){
        $("#div").empty();
        songtext = [ // [text, duration]
            ["32", 500],
            ["Don't ", 100],  //I don't want nobody to get killed 
            ["want ", 400],
            ["no", 400],
            ["body ", 1000],
            ["to ", 550],
            ["get ", 500],
            ["killed ", 1000],
        ];
        var text = "";
        $.each(songtext, function(a, b) {
        text += "<span id='p"+a+"' style='color:blue'>" + b[0] + "</span>";
        });
        $('#div').html(text);
        cc = 0;
        nextWord();
    }, 18000);*/
};

var cc = 0;
function nextWord() {
    $('#p'+cc).css("color", "green");
    cc++;
    if(cc> songtext.length-1) return;
    window.setTimeout(nextWord, songtext[cc-1][1]);
}

newText();
setTimeout(function(){
    $("#div").empty();
}, 15000);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["I'll ", 500],
        ["come ", 100],  //I don't want nobody to get killed 
        ["and ", 100],
        ["get ", 200],
        ["you, ", 200],
        ["I ", 200],
        ["am ", 1000],
        ["always ", 400],
        ["ready ", 500],
        ["to ", 300],
        ["fight ", 400],
    ];
    newText();
}, 18000);

setTimeout(function(){
    $("#div").empty();
}, 22500);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["So ", 400],
        ["don't ", 200],  //So don't take all of the blame we were all swept away.
        ["take ", 200],
        ["all ", 200],
        ["of, ", 200],
        ["the ", 200],
        ["blame ", 300],
        ["we ", 700],
        ["were ", 300],
        ["all ", 300],
        ["swept ", 200],
        ["away ", 200],
    ];
    newText();
}, 24650);

setTimeout(function(){
    $("#div").empty();
}, 28500);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["Don't ", 400],
        ["take ", 200],  //Don't take all of the weight. You always do.
        ["all ", 200],
        ["of ", 200],
        ["the ", 200],
        ["weight. ", 900],
        ["You ", 300],
        ["always ", 500],
        ["do.", 300],
    ];
    newText();
}, 28600);

setTimeout(function(){
    $("#div").empty();
}, 32300);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["There ", 400],
        ["will ", 300],  //There will always be something you cannot control .
        ["always ", 200],
        ["be ", 400],
        ["something ", 200],
        ["you ", 500],
        ["can", 125],
        ["not ", 400],
        ["control ", 0],
    ];
    newText();
}, 32500);

setTimeout(function(){
    $("#div").empty();
}, 35500);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["We ", 200],
        ["will ", 400],  //We will overcome. Your salvation has begun .
        ["overcome ", 550],
        ["Your ", 950],
        ["sal", 200],
        ["vation ", 300],
        ["has ", 400],
        ["beg", 150],
        ["u", 100],
        ["n", 0]
    ];
    newText();
}, 36000);

setTimeout(function(){
    $("#div").empty();
}, 40500);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["No ", 250],
        ["signs ", 1000],  //No signs No lights.
        ["No ", 250],
        ["lights. ", 800],
        ["such ", 250],
        ["a ", 100],  //such a mess all over.
        ["mess ", 300],
        ["all ", 900],
        ["over. ", 0]
    ];
    newText();
}, 40900);

setTimeout(function(){
    $("#div").empty();
}, 46000);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["Don't ", 400],
        ["kill ", 325],  //Don't kill your hopes You make me realize who I need 
        ["your ", 400],
        ["hopes ", 1200],
        ["You ", 250],
        ["make ", 200],  
        ["me ", 450],
        ["realize ", 1800],
        ["who ", 400],
        ["I ", 800],
        ["need ", 400]
    ];
    newText();
}, 46300);

setTimeout(function(){
    $("#div").empty();
}, 53500);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["I'll ", 400],
        ["be ", 325],  //I'll be there hold on They'll change you somehow
        ["there ", 1100],
        ["hold ", 300],
        ["on ", 600],
        ["They'll ", 200],  
        ["change ", 450],
        ["you ", 600],
        ["somehow ", 400]
    ];
    newText();
}, 54300);

setTimeout(function(){
    $("#div").empty();
}, 58799);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["So ", 400],
        ["where ", 325],  //So where are you now? I'll reach you by dawn 
        ["are ", 250],
        ["you ", 300],
        ["now? ", 2200],
        ["I'll ", 200],  
        ["reach ", 450],
        ["you ", 700],
        ["by ", 400],
        ["dawn  ", 400]
    ];
    newText();
}, 58800);

setTimeout(function(){
    $("#div").empty();
}, 64600);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["Before ", 300],
        ["you ", 325],  //Before you can be turned Illusions are torn 
        ["can ", 250],
        ["be ", 300],
        ["turned ", 1000],
        ["Illusions ", 200],  
        ["are ", 450],
        ["torn ", 700]
    ];
    newText();
}, 64700);

setTimeout(function(){
    $("#div").empty();
}, 70000);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["The ", 300],
        ["fallen ", 325],  //The fallen angels you run with don't know
        ["angels ", 300],
        ["you ", 1000],
        ["run ", 200],  
        ["with ", 450],
        ["don't ", 300],
        ["know ", 400]
    ];
    newText();
}, 70500);

setTimeout(function(){
    $("#div").empty();
}, 73800);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["It is", 300],
        ["our ", 325],  //It is our pain that makes us all human after all 
        ["pain ", 300],
        ["that ", 400],
        ["makes ", 300],  
        ["us ", 350],
        ["all ", 300],
        ["human ", 300],
        ["after ", 300],
        ["all ", 300]
    ];
    newText();
}, 73900);

setTimeout(function(){
    $("#div").empty();
}, 77800);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["Warm ", 400],
        ["old ", 600],  //Warm old sepia photographs show, Our fragile precious world 
        ["sepia ", 400],
        ["photographs ", 400],
        ["show, ", 1000],  
        ["Our ", 300],
        ["fragile ", 300],
        ["precious ", 300],
        ["world  ", 250]
    ];
    newText();
}, 78500);

setTimeout(function(){
    $("#div").empty();
}, 83000);

setTimeout(function(){
    songtext = [ // [text, duration]
        ["Must ", 400],
        ["protect ", 500],  //Must protect it, respond to the call
        ["it, ", 300],
        ["respond ", 400],
        ["to ", 300],  
        ["the ", 300],
        ["call ", 300]
    ];
    newText();
}, 83200);