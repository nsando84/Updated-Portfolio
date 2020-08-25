let portbtn = $("#portfolioBtn")
let contbtn = $("#contactBtn")
let whoabtn = $("#whoamiBtn")
let currbtn = $("#currentBtn")


function hideOthers(hider) {
    if (hider === "port") {
        $("#portfolio").css("display", "block")
        $("#contact, #whoami, #current").css("display", "none")
    }
    if (hider === "cont") {
        $("#contact").css("display", "block")
        $("#portfolio, #whoami, #current").css("display", "none")
    }
    if (hider === "whoa") {
        $("#whoami").css("display", "block")
        $("#contact, #portfolio, #current").css("display", "none")
    }
    if (hider === "curr") {
        $("#current").css("display", "block")
        $("#contact, #whoami, #portfolio").css("display", "none")
    }
}


$(portbtn).click(function(){
    hideOthers("port")
})

$(contbtn).click(function(){
    hideOthers("cont")
    $("#contact").css("display", "block")
})

$(whoabtn).click(function(){
    hideOthers("whoa")
    $("#whoami").css("display", "block")
})

$(currbtn).click(function(){
    hideOthers("curr")
    $("#current").css("display", "block")
})

