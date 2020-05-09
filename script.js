var coasters = [
    "Aethon",
    "Anubis",
    "Bakasura",
    "Barghest",
    "Basilisk",
    "Black Falcon",
    "Boa",
    "Bolt",
    "Canyon Runner",
    "Cascade",
    "Cloud Runner",
    "Copperhead Strike",
    "De-Gen",
    "Dragon",
    "Enigma",
    "Equalizer",
    "F25",
    "Gold Fever",
    "In-decent",
    "Infinite",
    "Interceptor",
    "Interdimensional",
    "Invincible",
    "Jixxer",
    "Loony Turns",
    "Manic Mouse",
    "Mind Melt",
    "Pioneer",
    "Power Up",
    "Rage",
    "Rival",
    "RollerGhoster",
    "S.L.V.",
    "Spiral",
    "Sprint 500",
    "Steel Hydra",
    "Stingray",
    "Test Pilot",
    "The American Arrow",
    "Tiamat",
    "Torque",
    "Trident",
    "Vector",
    "Viper One",
    "Wendigo",
    "Werewolf",
    "Zenith",
    "Iron Fury",
    "Malice Unchained",
    "Steel Vengeance",
    "Aces Sky",
    "Gnarler",
    "Hop The Gaps",
    "Mouse Hunt",
    "The Monster",
    "Zephyrus"
];

var themes = [
    "White and Blue modern",
    "Fantasy Medieval",
    "Western",
    "Pirate",
    "Spooky",
    "Adventure",
    "Vintage",
    "Asian",
    "South American",
    "German/Bavarian",
    "Festive/Snowy",
    "Steampunk",
    "Viking",
    "Atlantis",
    "Greek/Roman",
    "Sci-fi",
    "Videogame Themed"
]

var wors = [
    "wooden", "steel", "hybrid", "both"
]

var coasterMaterial;

function checkOptions() {
    if (document.getElementById(wors[0]).checked === true) {
       coasterMaterial = Math.floor(Math.random() * 6) + 50;
        console.log(coasters[coasterMaterial]);
    }
    if (document.getElementById(wors[1]).checked === true) {
        coasterMaterial = Math.floor(Math.random() * 46);
        console.log(coasters[coasterMaterial]);
    }
    if (document.getElementById(wors[2]).checked === true) {
        coasterMaterial = Math.floor(Math.random() * 3) + 47;
        console.log(coasters[coasterMaterial]);
    }
    if (document.getElementById(wors[3]).checked === true) {
        coasterMaterial = Math.floor(Math.random() * 56);
        console.log(coasters[coasterMaterial]);
    }

    //Run it to display coaster info
    coasterInfo()
}

function coasterInfo() {
    document.getElementById("coaster-type").innerHTML = coasters[coasterMaterial];
    randomTheme = Math.floor(Math.random() * 17);
    document.getElementById("theme").innerHTML = themes[randomTheme];
}

function openNav() {
    document.getElementById("settings-container").style.width = "250px";
}

function closeNav() {
    document.getElementById("settings-container").style.width = "0";
}