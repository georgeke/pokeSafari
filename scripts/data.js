var save = {
    pokeballLvl: 1,
    strengthLvl: 1,
    trainerLvl: 1,
    pInWallet: 0,
    pEarned: 0,
    pPerSecond: 0,
    ballsThrownManually: 0,
    ballsThrownTotal: 0,
    shinyCaught: 0,
    totalCaught: 0,
    uniqueCaught: 0
}

var roots = {
    pokeball: "img/pokeball/",
    pokemon: "img/pokemon/",
    pokemonShiny: "img/pokemon/shiny/",
    strength: "img/strength/",
    trainer: "img/trainer/",
    gymLeader: "img/trainer/gyms/",
    stage: "img/stage/",
    misc: "img/misc/"
}

var map = {
    pokemon: {
        1: {
            dexNum: 1,
            name: "Bulbasaur",
            img: roots.pokemon+"1.png"
        },
        2: {
            dexNum: 2,
            name: "Ivysaur",
            img: roots.pokemon+"2.png"
        },
        3: {
            dexNum: 3,
            name: "Venusaur",
            img: roots.pokemon+"3.png"
        },
        4: {
            dexNum: 4,
            name: "Charmander",
            img: roots.pokemon+"4.png"
        },
        5: {
            dexNum: 5,
            name: "Charmeleon",
            img: roots.pokemon+"5.png"
        },
        6: {
            dexNum: 6,
            name: "Charizard",
            img: roots.pokemon+"6.png"
        },
        7: {
            dexNum: 7,
            name: "Squirtle",
            img: roots.pokemon+"7.png"
        },
        8: {
            dexNum: 8,
            name: "Wartortle",
            img: roots.pokemon+"8.png"
        },
        9: {
            dexNum: 9,
            name: "Blastoise",
            img: roots.pokemon+"9.png"
        },
        10: {
            dexNum: 10,
            name: "Caterpie",
            img: roots.pokemon+"10.png"
        },
        11: {
            dexNum: 11,
            name: "Metapod",
            img: roots.pokemon+"11.png"
        },
        12: {
            dexNum: 12,
            name: "Butterfree",
            img: roots.pokemon+"12.png"
        },
        13: {
            dexNum: 13,
            name: "Weedle",
            img: roots.pokemon+"13.png"
        },
        14: {
            dexNum: 14,
            name: "Kakuna",
            img: roots.pokemon+"14.png"
        },
        15: {
            dexNum: 15,
            name: "Beedrill",
            img: roots.pokemon+"15.png"
        },
        16: {
            dexNum: 16,
            name: "Pidgey",
            img: roots.pokemon+"16.png"
        },
        17: {
            dexNum: 17,
            name: "Pidgeotto",
            img: roots.pokemon+"17.png"
        },
        18: {
            dexNum: 18,
            name: "Pidgeot",
            img: roots.pokemon+"18.png"
        },
        19: {
            dexNum: 19,
            name: "Rattata",
            img: roots.pokemon+"19.png"
        },
        20: {
            dexNum: 20,
            name: "Raticate",
            img: roots.pokemon+"20.png"
        },
        21: {
            dexNum: 21,
            name: "Spearow",
            img: roots.pokemon+"21.png"
        },
        22: {
            dexNum: 22,
            name: "Fearow",
            img: roots.pokemon+"22.png"
        },
        23: {
            dexNum: 23,
            name: "Ekans",
            img: roots.pokemon+"23.png"
        },
        24: {
            dexNum: 24,
            name: "Arbok",
            img: roots.pokemon+"24.png"
        },
        25: {
            dexNum: 25,
            name: "Pikachu",
            img: roots.pokemon+"25.png"
        },
        26: {
            dexNum: 26,
            name: "Raichu",
            img: roots.pokemon+"26.png"
        },
        27: {
            dexNum: 27,
            name: "Sandshrew",
            img: roots.pokemon+"27.png"
        },
        28: {
            dexNum: 28,
            name: "Sandslash",
            img: roots.pokemon+"28.png"
        },
        29: {
            dexNum: 29,
            name: "Nidoran",
            img: roots.pokemon+"29.png"
        },
        30: {
            dexNum: 30,
            name: "Nidorina",
            img: roots.pokemon+"30.png"
        },
        31: {
            dexNum: 31,
            name: "Nidoqueen",
            img: roots.pokemon+"31.png"
        },
        32: {
            dexNum: 32,
            name: "Nidoran",
            img: roots.pokemon+"32.png"
        },
        33: {
            dexNum: 33,
            name: "Nidorino",
            img: roots.pokemon+"33.png"
        },
        34: {
            dexNum: 34,
            name: "Nidoking",
            img: roots.pokemon+"34.png"
        },
        35: {
            dexNum: 35,
            name: "Clefairy",
            img: roots.pokemon+"35.png"
        },
        36: {
            dexNum: 36,
            name: "Clefable",
            img: roots.pokemon+"36.png"
        },
        37: {
            dexNum: 37,
            name: "Vulpix",
            img: roots.pokemon+"37.png"
        },
        38: {
            dexNum: 38,
            name: "Ninetales",
            img: roots.pokemon+"38.png"
        },
        39: {
            dexNum: 39,
            name: "Jigglypuff",
            img: roots.pokemon+"39.png"
        },
        40: {
            dexNum: 40,
            name: "Wigglytuff",
            img: roots.pokemon+"40.png"
        },
        41: {
            dexNum: 41,
            name: "Zubat",
            img: roots.pokemon+"41.png"
        },
        42: {
            dexNum: 42,
            name: "Golbat",
            img: roots.pokemon+"42.png"
        },
        43: {
            dexNum: 43,
            name: "Oddish",
            img: roots.pokemon+"43.png"
        },
        44: {
            dexNum: 44,
            name: "Gloom",
            img: roots.pokemon+"44.png"
        },
        45: {
            dexNum: 45,
            name: "Vileplume",
            img: roots.pokemon+"45.png"
        },
        46: {
            dexNum: 46,
            name: "Paras",
            img: roots.pokemon+"46.png"
        },
        47: {
            dexNum: 47,
            name: "Parasect",
            img: roots.pokemon+"47.png"
        },
        48: {
            dexNum: 48,
            name: "Venonat",
            img: roots.pokemon+"48.png"
        },
        49: {
            dexNum: 49,
            name: "Venomoth",
            img: roots.pokemon+"49.png"
        },
        50: {
            dexNum: 50,
            name: "Diglett",
            img: roots.pokemon+"50.png"
        },
        51: {
            dexNum: 51,
            name: "Dugtrio",
            img: roots.pokemon+"51.png"
        },
        52: {
            dexNum: 52,
            name: "Meowth",
            img: roots.pokemon+"52.png"
        },
        53: {
            dexNum: 53,
            name: "Persian",
            img: roots.pokemon+"53.png"
        },
        54: {
            dexNum: 54,
            name: "Psyduck",
            img: roots.pokemon+"54.png"
        },
        55: {
            dexNum: 55,
            name: "Golduck",
            img: roots.pokemon+"55.png"
        },
        56: {
            dexNum: 56,
            name: "Mankey",
            img: roots.pokemon+"56.png"
        },
        57: {
            dexNum: 57,
            name: "Primeape",
            img: roots.pokemon+"57.png"
        },
        58: {
            dexNum: 58,
            name: "Growlithe",
            img: roots.pokemon+"58.png"
        },
        59: {
            dexNum: 59,
            name: "Arcanine",
            img: roots.pokemon+"59.png"
        },
        60: {
            dexNum: 60,
            name: "Poliwag",
            img: roots.pokemon+"60.png"
        },
        61: {
            dexNum: 61,
            name: "Poliwhirl",
            img: roots.pokemon+"61.png"
        },
        62: {
            dexNum: 62,
            name: "Poliwrath",
            img: roots.pokemon+"62.png"
        },
        63: {
            dexNum: 63,
            name: "Abra",
            img: roots.pokemon+"63.png"
        },
        64: {
            dexNum: 64,
            name: "Kadabra",
            img: roots.pokemon+"64.png"
        },
        65: {
            dexNum: 65,
            name: "Alakazam",
            img: roots.pokemon+"65.png"
        },
        66: {
            dexNum: 66,
            name: "Machop",
            img: roots.pokemon+"66.png"
        },
        67: {
            dexNum: 67,
            name: "Machoke",
            img: roots.pokemon+"67.png"
        },
        68: {
            dexNum: 68,
            name: "Machamp",
            img: roots.pokemon+"68.png"
        },
        69: {
            dexNum: 69,
            name: "Bellsprout",
            img: roots.pokemon+"69.png"
        },
        70: {
            dexNum: 70,
            name: "Weepinbell",
            img: roots.pokemon+"70.png"
        },
        71: {
            dexNum: 71,
            name: "Victreebel",
            img: roots.pokemon+"71.png"
        },
        72: {
            dexNum: 72,
            name: "Tentacool",
            img: roots.pokemon+"72.png"
        },
        73: {
            dexNum: 73,
            name: "Tentacruel",
            img: roots.pokemon+"73.png"
        },
        74: {
            dexNum: 74,
            name: "Geodude",
            img: roots.pokemon+"74.png"
        },
        75: {
            dexNum: 75,
            name: "Graveler",
            img: roots.pokemon+"75.png"
        },
        76: {
            dexNum: 76,
            name: "Golem",
            img: roots.pokemon+"76.png"
        },
        77: {
            dexNum: 77,
            name: "Ponyta",
            img: roots.pokemon+"77.png"
        },
        78: {
            dexNum: 78,
            name: "Rapidash",
            img: roots.pokemon+"78.png"
        },
        79: {
            dexNum: 79,
            name: "Slowpoke",
            img: roots.pokemon+"79.png"
        },
        80: {
            dexNum: 80,
            name: "Slowbro",
            img: roots.pokemon+"80.png"
        },
        81: {
            dexNum: 81,
            name: "Magnemite",
            img: roots.pokemon+"81.png"
        },
        82: {
            dexNum: 82,
            name: "Magneton",
            img: roots.pokemon+"82.png"
        },
        83: {
            dexNum: 83,
            name: "Farfetch'd",
            img: roots.pokemon+"83.png"
        },
        84: {
            dexNum: 84,
            name: "Doduo",
            img: roots.pokemon+"84.png"
        },
        85: {
            dexNum: 85,
            name: "Dodrio",
            img: roots.pokemon+"85.png"
        },
        86: {
            dexNum: 86,
            name: "Seel",
            img: roots.pokemon+"86.png"
        },
        87: {
            dexNum: 87,
            name: "Dewgong",
            img: roots.pokemon+"87.png"
        },
        88: {
            dexNum: 88,
            name: "Grimer",
            img: roots.pokemon+"88.png"
        },
        89: {
            dexNum: 89,
            name: "Muk",
            img: roots.pokemon+"89.png"
        },
        90: {
            dexNum: 90,
            name: "Shellder",
            img: roots.pokemon+"90.png"
        },
        91: {
            dexNum: 91,
            name: "Cloyster",
            img: roots.pokemon+"91.png"
        },
        92: {
            dexNum: 92,
            name: "Gastly",
            img: roots.pokemon+"92.png"
        },
        93: {
            dexNum: 93,
            name: "Haunter",
            img: roots.pokemon+"93.png"
        },
        94: {
            dexNum: 94,
            name: "Gengar",
            img: roots.pokemon+"94.png"
        },
        95: {
            dexNum: 95,
            name: "Onix",
            img: roots.pokemon+"95.png"
        },
        96: {
            dexNum: 96,
            name: "Drowzee",
            img: roots.pokemon+"96.png"
        },
        97: {
            dexNum: 97,
            name: "Hypno",
            img: roots.pokemon+"97.png"
        },
        98: {
            dexNum: 98,
            name: "Krabby",
            img: roots.pokemon+"98.png"
        },
        99: {
            dexNum: 99,
            name: "Kingler",
            img: roots.pokemon+"99.png"
        },
        100: {
            dexNum: 100,
            name: "Voltorb",
            img: roots.pokemon+"100.png"
        },
        101: {
            dexNum: 101,
            name: "Electrode",
            img: roots.pokemon+"101.png"
        },
        102: {
            dexNum: 102,
            name: "Exeggcute",
            img: roots.pokemon+"102.png"
        },
        103: {
            dexNum: 103,
            name: "Exeggutor",
            img: roots.pokemon+"103.png"
        },
        104: {
            dexNum: 104,
            name: "Cubone",
            img: roots.pokemon+"104.png"
        },
        105: {
            dexNum: 105,
            name: "Marowak",
            img: roots.pokemon+"105.png"
        },
        106: {
            dexNum: 106,
            name: "Hitmonlee",
            img: roots.pokemon+"106.png"
        },
        107: {
            dexNum: 107,
            name: "Hitmonchan",
            img: roots.pokemon+"107.png"
        },
        108: {
            dexNum: 108,
            name: "Lickitung",
            img: roots.pokemon+"108.png"
        },
        109: {
            dexNum: 109,
            name: "Koffing",
            img: roots.pokemon+"109.png"
        },
        110: {
            dexNum: 110,
            name: "Weezing",
            img: roots.pokemon+"110.png"
        },
        111: {
            dexNum: 111,
            name: "Rhyhorn",
            img: roots.pokemon+"111.png"
        },
        112: {
            dexNum: 112,
            name: "Rhydon",
            img: roots.pokemon+"112.png"
        },
        113: {
            dexNum: 113,
            name: "Chansey",
            img: roots.pokemon+"113.png"
        },
        114: {
            dexNum: 114,
            name: "Tangela",
            img: roots.pokemon+"114.png"
        },
        115: {
            dexNum: 115,
            name: "Kangaskhan",
            img: roots.pokemon+"115.png"
        },
        116: {
            dexNum: 116,
            name: "Horsea",
            img: roots.pokemon+"116.png"
        },
        117: {
            dexNum: 117,
            name: "Seadra",
            img: roots.pokemon+"117.png"
        },
        118: {
            dexNum: 118,
            name: "Goldeen",
            img: roots.pokemon+"118.png"
        },
        119: {
            dexNum: 119,
            name: "Seaking",
            img: roots.pokemon+"119.png"
        },
        120: {
            dexNum: 120,
            name: "Staryu",
            img: roots.pokemon+"120.png"
        },
        121: {
            dexNum: 121,
            name: "Starmie",
            img: roots.pokemon+"121.png"
        },
        122: {
            dexNum: 122,
            name: "Mr.",
            img: roots.pokemon+"122.png"
        },
        123: {
            dexNum: 123,
            name: "Scyther",
            img: roots.pokemon+"123.png"
        },
        124: {
            dexNum: 124,
            name: "Jynx",
            img: roots.pokemon+"124.png"
        },
        125: {
            dexNum: 125,
            name: "Electabuzz",
            img: roots.pokemon+"125.png"
        },
        126: {
            dexNum: 126,
            name: "Magmar",
            img: roots.pokemon+"126.png"
        },
        127: {
            dexNum: 127,
            name: "Pinsir",
            img: roots.pokemon+"127.png"
        },
        128: {
            dexNum: 128,
            name: "Tauros",
            img: roots.pokemon+"128.png"
        },
        129: {
            dexNum: 129,
            name: "Magikarp",
            img: roots.pokemon+"129.png"
        },
        130: {
            dexNum: 130,
            name: "Gyarados",
            img: roots.pokemon+"130.png"
        },
        131: {
            dexNum: 131,
            name: "Lapras",
            img: roots.pokemon+"131.png"
        },
        132: {
            dexNum: 132,
            name: "Ditto",
            img: roots.pokemon+"132.png"
        },
        133: {
            dexNum: 133,
            name: "Eevee",
            img: roots.pokemon+"133.png"
        },
        134: {
            dexNum: 134,
            name: "Vaporeon",
            img: roots.pokemon+"134.png"
        },
        135: {
            dexNum: 135,
            name: "Jolteon",
            img: roots.pokemon+"135.png"
        },
        136: {
            dexNum: 136,
            name: "Flareon",
            img: roots.pokemon+"136.png"
        },
        137: {
            dexNum: 137,
            name: "Porygon",
            img: roots.pokemon+"137.png"
        },
        138: {
            dexNum: 138,
            name: "Omanyte",
            img: roots.pokemon+"138.png"
        },
        139: {
            dexNum: 139,
            name: "Omastar",
            img: roots.pokemon+"139.png"
        },
        140: {
            dexNum: 140,
            name: "Kabuto",
            img: roots.pokemon+"140.png"
        },
        141: {
            dexNum: 141,
            name: "Kabutops",
            img: roots.pokemon+"141.png"
        },
        142: {
            dexNum: 142,
            name: "Aerodactyl",
            img: roots.pokemon+"142.png"
        },
        143: {
            dexNum: 143,
            name: "Snorlax",
            img: roots.pokemon+"143.png"
        },
        144: {
            dexNum: 144,
            name: "Articuno",
            img: roots.pokemon+"144.png"
        },
        145: {
            dexNum: 145,
            name: "Zapdos",
            img: roots.pokemon+"145.png"
        },
        146: {
            dexNum: 146,
            name: "Moltres",
            img: roots.pokemon+"146.png"
        },
        147: {
            dexNum: 147,
            name: "Dratini",
            img: roots.pokemon+"147.png"
        },
        148: {
            dexNum: 148,
            name: "Dragonair",
            img: roots.pokemon+"148.png"
        },
        149: {
            dexNum: 149,
            name: "Dragonite",
            img: roots.pokemon+"149.png"
        },
        150: {
            dexNum: 150,
            name: "Mewtwo",
            img: roots.pokemon+"150.png"
        },
        151: {
            dexNum: 151,
            name: "Mew",
            img: roots.pokemon+"151.png"
        }
    },
    pokeball: {
        1: {
            lvl: 1,
            name: "Pokeball",
            img: roots.pokeball+"1-Pokeball.png"
        },
        2: {
            lvl: 2,
            name: "PremierBall",
            img: roots.pokeball+"2-PremierBall.png"
        },
        3: {
            lvl: 3,
            name: "SafariBall",
            img: roots.pokeball+"3-SafariBall.png"
        },
        4: {
            lvl: 4,
            name: "CherishBall",
            img: roots.pokeball+"4-CherishBall.png"
        },
        5: {
            lvl: 5,
            name: "SportBall",
            img: roots.pokeball+"5-SportBall.png"
        },
        6: {
            lvl: 6,
            name: "GreatBall",
            img: roots.pokeball+"6-GreatBall.png"
        },
        7: {
            lvl: 7,
            name: "QuickBall",
            img: roots.pokeball+"7-QuickBall.png"
        },
        8: {
            lvl: 8,
            name: "HeavyBall",
            img: roots.pokeball+"8-HeavyBall.png"
        },
        9: {
            lvl: 9,
            name: "UltraBall",
            img: roots.pokeball+"9-UltraBall.png"
        },
        10: {
            lvl: 10,
            name: "MasterBall",
            img: roots.pokeball+"10-MasterBall.png"
        }
    },
    strength: {
        1: {
            lvl: 1,
            name: "Tyrogue",
            img: roots.strength+"1-Tyrogue.png"
        },
        2: {
            lvl: 2,
            name: "Geodude",
            img: roots.strength+"2-Geodude.png"
        },
        3: {
            lvl: 3,
            name: "Machop",
            img: roots.strength+"3-Machop.png"
        },
        4: {
            lvl: 4,
            name: "Virogoth",
            img: roots.strength+"4-Virogoth.png"
        },
        5: {
            lvl: 5,
            name: "Hitmonchan",
            img: roots.strength+"5-Hitmonchan.png"
        },
        6: {
            lvl: 6,
            name: "Poliwrath",
            img: roots.strength+"6-Poliwrath.png"
        },
        7: {
            lvl: 7,
            name: "Ursaring",
            img: roots.strength+"7-Ursaring.png"
        },
        8: {
            lvl: 8,
            name: "Primeape",
            img: roots.strength+"8-Primeape.png"
        },
        9: {
            lvl: 9,
            name: "Machoke",
            img: roots.strength+"9-Machoke.png"
        },
        10: {
            lvl: 10,
            name: "Machamp",
            img: roots.strength+"10-Machamp.png"
        }
    },
    trainer: {
        1: {
            lvl: 1,
            name: "Youngster",
            img: roots.trainer+"1-Trainer_Youngster.png"
        },
        2: {
            lvl: 2,
            name: "Lass",
            img: roots.trainer+"2-Trainer_Lass.png"
        },
        3: {
            lvl: 3,
            name: "Swimmer",
            img: roots.trainer+"3-Trainer_Swimmer.png"
        },
        4: {
            lvl: 4,
            name: "Hiker",
            img: roots.trainer+"4-Trainer_Hiker.png"
        },
        5: {
            lvl: 5,
            name: "PokemonRanger",
            img: roots.trainer+"5-Trainer_PokemonRanger.png"
        },
        6: {
            lvl: 6,
            name: "Biker",
            img: roots.trainer+"6-Trainer_Biker.png"
        },
        7: {
            lvl: 7,
            name: "RichBoy",
            img: roots.trainer+"7-Trainer_RichBoy.png"
        },
        8: {
            lvl: 8,
            name: "RocketGrunt",
            img: roots.trainer+"8-Trainer_RocketGrunt.png"
        },
        9: {
            lvl: 9,
            name: "AceTrainer",
            img: roots.trainer+"9-Trainer_AceTrainer.png"
        },
        10: {
            lvl: 10,
            name: "Red",
            img: roots.trainer+"10-Trainer_Red.png"
        }
    },
    stages: {
        1: {
            lvl: 1,
            commonIds: [1, 4, 7],
            rareIds: [],
            sRareIds: [],
            name: "Pallet Town",
            bgImg: "",
            platformImg: "",
            distance: 30
        }
    }
}