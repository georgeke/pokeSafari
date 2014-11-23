var save = {
    pokeballLvl: 10,
    strengthLvl: 10,
    trainerLvl: 10,
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
    strength: "img/strength/",
    trainer: "img/trainer/",
    gymLeader: "img/trainer/gyms/",
    misc: "img/misc/"
}

var map = {
    pokemon: {
        1: {
            dexNum: 1,
            name: "Bulbasaur",
            img: roots.pokemon+"bulbasaur.png"
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