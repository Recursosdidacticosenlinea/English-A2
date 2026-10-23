window.UNIT = {
  slug: "getting-around-town",
  number: 19,
  title: "Getting Around Town",
  level: "A2",
  minutes: 50,
  speakers: { "Kenji": "m", "Lupita": "f", "Driver": "m", "Tourist": "f", "Guide": "m", A: "f", B: "m" },
  focus: ["prepositions of movement: along, across, through, past, into, out of", "directions with landmarks", "public transport: get on / get off / change", "How do I get to…? / Which bus goes to…?", "You can't miss it."],

  presentation: {
    scene: "🗺️🚌🌉🏛️",
    situation: "Kenji is visiting Puebla for the first time. He calls his friend Lupita because he's lost.",
    warmup: {
      prompt: "What landmarks help you give directions in your city? Choose all.",
      options: ["the cathedral", "a big park", "a bridge", "a statue", "a shopping mall", "a gas station", "a famous restaurant", "a market", "a church", "a stadium"],
      response: "Great! In this unit you'll learn to give clear directions with landmarks and prepositions of movement."
    },
    dialogueTitle: "Lost downtown",
    dialogue: [
      { who: "Kenji", line: "Lupita, I'm lost! I'm in front of a big yellow church." },
      { who: "Lupita", line: "OK, that's San Francisco church. *Walk along* the boulevard *towards* the bridge." },
      { who: "Kenji", line: "OK, I can see a bridge." },
      { who: "Lupita", line: "*Go across* the bridge and *walk past* the Artists' Quarter. It's full of paintings — *you can't miss it*." },
      { who: "Kenji", line: "Then?" },
      { who: "Lupita", line: "*Go through* the small square and *turn right into* 5 de Mayo Street. The café is *at the end of* the street." },
      { who: "Kenji", line: "Is it far? Can I take a bus?" },
      { who: "Lupita", line: "It's only ten minutes on foot. If you take the bus, *get off* at the zócalo." }
    ]
  },

  objectives: [
    "I can use prepositions of movement in directions.",
    "I can give and follow directions using landmarks.",
    "I can ask about public transport.",
    "I can describe a route through my city."
  ],

  explanation: {
    vocabTitle: "Moving around",
    vocab: [
      { word: "along", icon: "➡️" }, { word: "across", icon: "↔️" }, { word: "through", icon: "🚇" },
      { word: "past", icon: "🚶" }, { word: "towards", icon: "🎯" }, { word: "into", icon: "🚪" },
      { word: "out of", icon: "🏃" }, { word: "up / down", icon: "↕️" }, { word: "around", icon: "🔄" },
      { word: "landmark", icon: "🗿" }, { word: "bridge", icon: "🌉" }, { word: "square", icon: "⛲" },
      { word: "get on / get off", icon: "🚌" }, { word: "change buses", icon: "🔁" }, { word: "on foot", icon: "👣" }
    ],
    grammar: [
      {
        title: "Prepositions of movement",
        head: ["Preposition", "Example"],
        rows: [
          ["*along* (following a line)", "Walk *along* the boulevard."],
          ["*across* (from one side to the other)", "Go *across* the bridge / the street."],
          ["*through* (inside, from one end to the other)", "Go *through* the park / the tunnel."],
          ["*past* (next to, without stopping)", "Walk *past* the market."],
          ["*towards* (in the direction of)", "Walk *towards* the cathedral."],
          ["*into / out of*", "Turn *into* 5 de Mayo Street. Come *out of* the station."],
          ["*up / down*", "Go *up* the hill / *down* the stairs."]
        ]
      },
      {
        title: "Public transport",
        head: ["Question", "Answer"],
        rows: [
          ["*Which bus goes to* the zócalo?", "Number 32."],
          ["*Where do I get off?*", "*Get off* at the third stop."],
          ["*Do I need to change?*", "Yes, *change* at the Terminal."],
          ["*How long does it take?*", "About twenty minutes."]
        ],
        note: "We *get on / get off* a bus, train or plane, but we *get into / get out of* a car or taxi."
      }
    ],
    watchOut: [
      ["Go across the park. (inside, with trees)", "Go through the park."],
      ["Walk by the street until the end.", "Walk along the street to the end."],
      ["Get down of the bus.", "Get off the bus."],
      ["Turn to the right in 5 de Mayo.", "Turn right into 5 de Mayo Street."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *along, across, through, past* or *off*.",
      items: [
        "Walk [[along]] the river until you see a bridge.",
        "Go [[across]] the bridge to the other side.",
        "Walk [[through]] the park. It's beautiful inside.",
        "Go [[past]] the bank. Don't stop there.",
        "Get [[off]] the bus at the third stop."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A tourist asks a bus driver and then a guide for help. Listen.",
      title: "Which bus?",
      script: [
        { who: "Tourist", line: "Excuse me, which bus goes to the Amparo Museum?" },
        { who: "Driver", line: "This one, the 45. But you need to get off at the cathedral and walk." },
        { who: "Tourist", line: "How many stops is it?" },
        { who: "Driver", line: "Five stops. It takes about fifteen minutes." },
        { who: "Tourist", line: "Excuse me, I'm looking for the Amparo Museum." },
        { who: "Guide", line: "Sure. Walk past the cathedral and go along 2 Sur Street. Go across the next street and walk two blocks. The museum is on your left, opposite a small hotel." },
        { who: "Tourist", line: "Is it far?" },
        { who: "Guide", line: "No, about five minutes. You can't miss it — there's a big blue door." }
      ],
      activities: [
        {
          type: "gap", title: "Complete the directions",
          prompt: "Write one word or a number.",
          items: [
            "Take bus number [[45|forty-five]].",
            "Get off at the [[cathedral]], after [[5|five]] stops.",
            "Walk [[past]] the cathedral.",
            "Go [[along]] 2 Sur Street.",
            "The museum is opposite a small [[hotel]]."
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The bus goes directly to the museum door.", a: false },
            { s: "The bus trip takes about fifteen minutes.", a: true },
            { s: "The museum is on the right.", a: false },
            { s: "The museum has a big blue door.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the instructions for a walking tour of Puebla.",
      title: "Self-guided walking tour",
      text: [
        { author: "Stop 1 → 2", body: "Start at the zócalo. Walk out of the square towards the cathedral and go into the cathedral to see the beautiful altar. Then come out of the main door." },
        { author: "Stop 2 → 3", body: "Turn left and walk along 5 de Mayo Street for three blocks. You'll walk past many shops and cafés. At the end of the street is the Santo Domingo church with the famous Rosary Chapel." },
        { author: "Stop 3 → 4", body: "From the church, walk towards the Parián market. Go through the market — try a sweet camote! Then go across the boulevard carefully and you'll arrive at the Artists' Quarter." }
      ],
      activities: [
        {
          type: "tiles", title: "Put the tour in order",
          prompt: "Put the words in order to make the steps of the tour.",
          items: [
            { a: "Start at the zócalo." },
            { a: "Go into the cathedral." },
            { a: "Walk along 5 de Mayo Street." },
            { a: "Go through the Parián market." },
            { a: "Go across the boulevard." }
          ]
        },
        {
          type: "match", title: "Find the information",
          prompt: "Match the place with what you do there.",
          pairs: [
            ["the cathedral", "see a beautiful altar"],
            ["5 de Mayo Street", "walk past shops and cafés"],
            ["Santo Domingo church", "see the Rosary Chapel"],
            ["the Parián market", "try a sweet camote"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice prepositions of movement, then write directions to a place in your city.",
      activities: [
        {
          type: "match", title: "Which preposition?",
          prompt: "Match the place with the best preposition.",
          pairs: [
            ["a bridge", "across"],
            ["a tunnel", "through"],
            ["a long avenue", "along"],
            ["a bus", "get off"],
            ["a building (to enter)", "into"]
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Walk along the river to the bridge." },
            { a: "Which bus goes to the stadium?" },
            { a: "Go through the park and turn left." },
            { a: "Get off at the next stop." },
            { a: "The café is at the end of the street." }
          ]
        },
        {
          type: "write", title: "Directions with landmarks",
          prompt: "A tourist wants to go from the main square of your city to your favorite place. Write directions with at least four prepositions of movement and two landmarks. Include a bus option if you can.",
          minWords: 50, maxWords: 100,
          model: "From the zócalo, walk past the cathedral and go along 16 de Septiembre for three blocks. Go across the boulevard — be careful, there's a lot of traffic. Then go through the small park with the fountain and turn right into 11 Sur. My favorite taco place is next to a pharmacy. You can't miss it! If you're tired, take the 20 bus and get off at the third stop.",
          bank: ["From the…, walk past…", "Go along … for … blocks.", "Go across…", "Go through…", "Turn right / left into…", "You can't miss it!", "Take the … bus and get off at…"],
          checklist: [
            "I used at least **four** prepositions of movement.",
            "I used two landmarks.",
            "I used imperatives: *walk, go, turn*.",
            "I said where the place is at the end."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence from this unit. Then say it and check your pronunciation.",
          items: [
            "Walk along the boulevard towards the bridge.",
            "Go across the bridge.",
            "Go through the small square.",
            "Walk past the market.",
            "Which bus goes to the museum?",
            "Get off at the third stop."
          ]
        },
        {
          type: "speak", title: "My route",
          prompt: "Record yourself describing the route from your home to your school or work. Mention landmarks, prepositions of movement and transport.",
          language: ["I leave my house and walk along…", "I go past…", "I take the … bus.", "I get off at…", "Then I go across / through…", "It takes about…"],
          seconds: 75,
          checklist: ["use four prepositions of movement?", "mention landmarks?", "talk about transport?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use prepositions of movement.", review: "Explanation; Quick check" },
    { can: "I can give directions with landmarks.", review: "Presentation; Writing activity 3" },
    { can: "I can ask which bus to take and where to get off.", review: "Explanation: public transport" },
    { can: "I can follow spoken directions.", review: "Listening: which bus?" },
    { can: "I can follow written instructions for a route.", review: "Reading: walking tour" },
    { can: "I can describe my route to school or work.", review: "Speaking activity 2" }
  ]
};
