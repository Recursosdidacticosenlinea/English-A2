window.UNIT = {
  slug: "wild-weather",
  number: 41,
  title: "Wild Weather",
  level: "A2",
  minutes: 50,
  speakers: { "Weather reporter": "f", "Toño": "m", "Majo": "f", "Reporter": "m", "Woman": "f", A: "f", B: "m" },
  focus: ["going to for predictions with evidence: Look at the clouds! It's going to rain.", "will for predictions without evidence: I think it will be sunny tomorrow.", "extreme weather: storm, hurricane, flood, heatwave", "weather forecasts", "Be careful! / Stay at home!"],

  presentation: {
    scene: "⛈️🌀🌊🔥",
    situation: "Toño and Majo are at the beach in Veracruz. The sky is changing very quickly.",
    warmup: {
      prompt: "Which types of extreme weather do you know? Choose all.",
      options: ["storm", "hurricane", "flood", "heatwave", "drought", "snowstorm", "tornado", "hail", "strong wind", "lightning"],
      response: "Wild weather! In this unit you'll learn to talk about extreme weather and make predictions."
    },
    dialogueTitle: "A storm is coming",
    dialogue: [
      { who: "Majo", line: "Toño, look at those black clouds! *It's going to rain*." },
      { who: "Toño", line: "And listen to that thunder! *There's going to be* a big storm." },
      { who: "Majo", line: "The waves are getting bigger too. Let's get out of the water." },
      { who: "Toño", line: "Good idea. *I'll get* our things. You call a taxi." },
      { who: "Majo", line: "The weather app says the storm *will last* all night." },
      { who: "Toño", line: "Oh no. Do you think it *will be* sunny tomorrow?" },
      { who: "Majo", line: "*I think it will*. The forecast says sun for the rest of the week." },
      { who: "Toño", line: "Quick! The rain is starting. *We're going to get* wet!" }
    ]
  },

  objectives: [
    "I can make predictions with *going to* when I see evidence.",
    "I can make predictions with *will* for opinions and forecasts.",
    "I can talk about extreme weather.",
    "I can understand a weather forecast and warnings."
  ],

  explanation: {
    vocabTitle: "Extreme weather",
    vocab: [
      { word: "storm", icon: "⛈️" }, { word: "thunder", icon: "🔊" }, { word: "lightning", icon: "⚡" },
      { word: "hurricane", icon: "🌀" }, { word: "flood", icon: "🌊" }, { word: "heatwave", icon: "🥵" },
      { word: "drought", icon: "🏜️" }, { word: "hail", icon: "🧊" }, { word: "strong wind", icon: "💨" },
      { word: "fog", icon: "🌫️" }, { word: "forecast", icon: "📺" }, { word: "warning", icon: "⚠️" },
      { word: "temperature", icon: "🌡️" }, { word: "degrees", icon: "°" }, { word: "shelter", icon: "🏠" }
    ],
    grammar: [
      {
        title: "Going to or will for predictions?",
        head: ["going to (evidence now)", "will (opinion / forecast / no evidence)"],
        rows: [
          ["Look at the clouds! *It's going to rain*.", "*I think* it *will be* sunny tomorrow."],
          ["The waves are huge. *We're going to get* wet!", "The storm *will last* all night. (forecast)"],
          ["He's running too fast. *He's going to fall*!", "*I don't think* it *will snow* this year."]
        ],
        note: "If you can *see* or *hear* the evidence now, use *going to*. For general predictions and with *I think / probably*, use *will*."
      },
      {
        title: "Warnings and advice",
        head: ["Structure", "Example"],
        rows: [
          ["*Be careful!*", "*Be careful!* The road is wet."],
          ["imperative", "*Stay* at home. *Don't go* near the river."],
          ["*There's going to be…*", "*There's going to be* a hurricane."],
          ["*will* for offers", "*I'll close* the windows."]
        ]
      }
    ],
    watchOut: [
      ["Look at the sky! It will rain.", "Look at the sky! It's going to rain."],
      ["I think tomorrow is going to be sunny. (no evidence)", "I think tomorrow will be sunny."],
      ["There will a storm.", "There will be a storm."],
      ["It's going to raining.", "It's going to rain."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write *going to* or *will* + the verb.",
      items: [
        "Look at those dark clouds! It's [[going to rain]]. (rain)",
        "I think it [[will be]] hot next summer. (be)",
        "Be careful! You're [[going to fall]]! (fall)",
        "The forecast says it [[will snow]] in the mountains. (snow)",
        "I don't think it [[will rain]] tomorrow. (rain)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to the weather forecast and a hurricane warning on the radio.",
      title: "Radio: Weather alert",
      script: [
        { who: "Weather reporter", line: "Good evening. Here is the weather for the next three days." },
        { who: "Weather reporter", line: "In Mexico City, it will be cloudy tomorrow, with rain in the afternoon. Temperatures will be between 12 and 22 degrees." },
        { who: "Weather reporter", line: "In the north, there's going to be a heatwave. Monterrey will reach 42 degrees on Thursday. Drink lots of water and stay inside at midday." },
        { who: "Weather reporter", line: "And now an important warning. Hurricane Olga is getting stronger in the Pacific. It's going to hit the coast of Guerrero on Friday morning." },
        { who: "Weather reporter", line: "There will be strong winds and floods. People near the coast must go to the shelters. Don't go near the beach and don't drive unless it's necessary." }
      ],
      activities: [
        {
          type: "match", title: "Where and what?",
          prompt: "Match the place with the weather.",
          pairs: [
            ["Mexico City", "cloudy with rain in the afternoon"],
            ["Monterrey", "a heatwave, 42 degrees"],
            ["the coast of Guerrero", "a hurricane on Friday"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Mexico City will be between 12 and 22 degrees.", a: true },
            { s: "People in Monterrey should go out at midday.", a: false },
            { s: "Hurricane Olga is in the Gulf of Mexico.", a: false },
            { s: "People near the coast must go to the shelters.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short article about how to prepare for a hurricane.",
      title: "Is a hurricane coming? Be prepared!",
      text: [
        { author: "Before", body: "Listen to the official forecast every day. Buy water, food in cans, batteries and a flashlight. Put important documents in a plastic bag. Find out where your nearest shelter is." },
        { author: "During", body: "Stay inside, away from windows. Don't go outside when the wind stops — often it's only the 'eye' of the hurricane, and the strong winds will come back." },
        { author: "After", body: "Don't walk or drive through flood water. It can be deeper than you think. Check on your neighbors, especially older people. Only drink bottled water until the authorities say it's safe." }
      ],
      activities: [
        {
          type: "sort", title: "Before, during or after?",
          prompt: "When should you do it?",
          bins: ["Before", "During", "After"],
          items: [
            { text: "buy batteries and water", bin: 0 }, { text: "find your nearest shelter", bin: 0 },
            { text: "stay away from windows", bin: 1 }, { text: "don't go outside when the wind stops", bin: 1 },
            { text: "don't drive through flood water", bin: 2 }, { text: "check on your neighbors", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "When the wind stops, the hurricane is always finished.", a: false },
            { s: "Flood water can be deeper than you think.", a: true },
            { s: "You can drink tap water immediately after a hurricane.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice predictions, then write a weather report.",
      activities: [
        {
          type: "match", title: "What's going to happen?",
          prompt: "Match the evidence with the prediction.",
          pairs: [
            ["The sky is black and there's thunder.", "It's going to rain."],
            ["The river is very high.", "There's going to be a flood."],
            ["It's 38 degrees at 8 a.m.", "It's going to be a very hot day."],
            ["The wind is very strong.", "That tree is going to fall."]
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Look at the clouds, it's going to rain." },
            { a: "I think it will be sunny tomorrow." },
            { a: "There's going to be a big storm." },
            { a: "Don't go near the river." },
            { a: "The forecast says it will be cold." }
          ]
        },
        {
          type: "write", title: "Weather report",
          prompt: "Write a weather report for your city for the next three days. Include one day with extreme weather. Use *will* for the forecast, *going to* for something you can see now, and give advice with imperatives.",
          minWords: 60, maxWords: 110,
          model: "Good morning, Puebla! Look outside: the sky is very dark, so it's going to rain this morning. This afternoon there will be a big storm with thunder and hail. Be careful on the roads and don't park under trees. Tomorrow will be cooler, about 18 degrees, with some sun in the afternoon. On Sunday I think it will be sunny and warm — perfect for a walk in the park!",
          bank: ["Look outside: …, so it's going to…", "This afternoon there will be…", "Tomorrow will be…", "I think it will…", "Be careful!", "Don't…", "Stay…"],
          checklist: [
            "I used *going to* for evidence now.",
            "I used *will* for the forecast.",
            "I used extreme weather vocabulary.",
            "I gave advice with imperatives."
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
            "Look at those black clouds!",
            "It's going to rain.",
            "There's going to be a big storm.",
            "The storm will last all night.",
            "I think it will be sunny tomorrow.",
            "Be careful! Don't go near the river."
          ]
        },
        {
          type: "speak", title: "TV weather report",
          prompt: "Be a TV weather reporter. Record a report with a warning about extreme weather in one region and the normal forecast for two other cities.",
          language: ["Good evening. Here's the weather.", "Tomorrow it will be…", "There's going to be…", "Temperatures will reach…", "Be careful!", "Stay inside / Don't…"],
          seconds: 75,
          checklist: ["use *will* and *going to* correctly?", "use extreme weather words?", "give a warning?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *going to* for predictions with evidence.", review: "Explanation; Writing activity 1" },
    { can: "I can use *will* for forecasts and opinions.", review: "Explanation; Quick check" },
    { can: "I can talk about extreme weather.", review: "Explanation: vocabulary" },
    { can: "I can understand a weather forecast and warning.", review: "Listening: weather alert" },
    { can: "I can understand safety instructions.", review: "Reading: be prepared!" },
    { can: "I can write a weather report.", review: "Writing activity 3" }
  ]
};
