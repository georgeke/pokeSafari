var save = {
    pokeballLvl: 1,
    strengthLvl: 7,
    trainerLvl: 1,
    pokedollars: 0,
    pEarned: 0,
    pPerSecond: 0,
    ballsThrownManually: 0,
    ballsThrownTotal: 0,
    shinyCaught: 0,
    totalCaught: 0,
    uniqueCaught: 0,
    pokemonCaught: new Array(152),
    shinyCaught: new Array(152)
}

var roots = {
    pokeball: "img/pokeball/",
    pokemon: "img/pokemon/",
    pokemonShiny: "img/pokemon/shiny/",
    strength: "img/strength/",
    trainer: "img/trainer/",
    bosses: "img/trainer/bosses/",
    stage: "img/stage/",
    misc: "img/misc/"
}

var map = {
    pokemon: ["null", "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"],
    pokeball: ["null", "Pokeball", "PremierBall", "SafariBall", "CherishBall", "GreatBall", "QuickBall", "SportBall", "HeavyBall", "UltraBall", "MasterBall"],
    strength: ["null", "Tyroque", "Geodude", "Machop", "Virogoth", "Hitmonchan", "Poliwrath", "Ursaring", "Primeape", "Machoke", "Machamp"],
    trainer: ["null", "Youngster", "Lass", "Swimmer", "Hiker", "PokemonRanger", "Biker", "RichBoy", "RocketGrunt", "AceTrainer", "Red"],
    stages: {
        1: {
            name: "Pallet Town",
            bossLvl: 0, /* Boss level 0 means it's not a boss. */
            commonIds: [1, 4, 7],
            rareIds: [],
            sRareIds: [],
            bgImg: "",
            rightPlatformImg: "",
            leftPlatformImg: ""
        }
    },
    bosses: ["Gym Leader Brock", "Gym Leader Misty", "Gym Leader Surge", "Gym Leader Erika", "Gym Leader Sabrina", "Gym Leader Koga", "Gym Leader Blaine", "Gym Leader Giovanni"]
}