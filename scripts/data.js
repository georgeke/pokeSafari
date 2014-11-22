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
    strength: "img/strength/",
    trainer: "img/trainer/",
    gymLeader: "img/trainer/gyms/"
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
            name: "PokeBall",
            img: roots.pokeball+"1-PokeBall.png"
        }
    },
    strength: {
        1: {
            lvl: 1,
            name: "Tyrogue",
            img: roots.strength+"1-Tyrogue.png"
        }
    },
    trainer: {
        1: {
            lvl: 1,
            name: "Youngster",
            img: roots.trainer+"1-Trainer_Youngster.png"
        }
    },
    stages: {
        1: {
            lvl: 1,
            pkmnIds: [],
            name: "Route 1",
            bgImg: "",
            platformImg: "",
            distance: 30
        }
    }
}