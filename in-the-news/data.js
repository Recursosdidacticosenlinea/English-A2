window.UNIT = {
  slug: "in-the-news",
  number: 44,
  title: "In the News",
  level: "A2",
  minutes: 50,
  speakers: { "Newsreader": "f", "Reporter": "m", "Witness": "f", "Diego": "m", "Majo": "f", A: "f", B: "m" },
  focus: ["news stories: past simple and past continuous", "headlines", "while / when / during", "news vocabulary: accident, rescue, robbery, discover", "Did you hear about…? / Apparently…"],

  presentation: {
    scene: "📰📺🚒🐕",
    situation: "Diego and Majo are having breakfast. Diego is reading the news on his phone.",
    warmup: {
      prompt: "What kind of news do you read or watch? Choose all.",
      options: ["local news", "sports", "politics", "science", "celebrity news", "weather", "technology", "funny stories", "crime", "international news"],
      response: "Good! In this unit you'll learn to understand and tell short news stories."
    },
    dialogueTitle: "Breakfast news",
    dialogue: [
      { who: "Diego", line: "*Did you hear about* the dog in Cholula?" },
      { who: "Majo", line: "No, what happened?" },
      { who: "Diego", line: "*Apparently*, a family *was having* lunch in their garden *when* their dog *started* barking loudly." },
      { who: "Majo", line: "And?" },
      { who: "Diego", line: "There *was* a small fire in the kitchen! *While* they *were eating* outside, the gas *was leaking*." },
      { who: "Majo", line: "Oh no! Was anyone hurt?" },
      { who: "Diego", line: "No. The dad *called* the firefighters and they *arrived* in ten minutes. The dog *saved* the house!" },
      { who: "Majo", line: "What a hero! *That's amazing*." }
    ]
  },

  objectives: [
    "I can understand short news stories and headlines.",
    "I can use the past continuous for background and the past simple for main events.",
    "I can use *when, while* and *during*.",
    "I can tell someone about a news story."
  ],

  explanation: {
    vocabTitle: "News",
    vocab: [
      { word: "headline", icon: "📰" }, { word: "accident", icon: "🚗" }, { word: "fire", icon: "🔥" },
      { word: "firefighter", icon: "🚒" }, { word: "rescue", icon: "🛟" }, { word: "robbery / rob", icon: "💰" },
      { word: "thief", icon: "🦹" }, { word: "police", icon: "🚓" }, { word: "witness", icon: "👀" },
      { word: "injured / hurt", icon: "🩹" }, { word: "discover", icon: "🔍" }, { word: "win", icon: "🏆" },
      { word: "escape", icon: "🏃" }, { word: "apparently", icon: "🤷" }, { word: "breaking news", icon: "🚨" }
    ],
    grammar: [
      {
        title: "Past continuous and past simple in stories",
        head: ["Past continuous (background, in progress)", "Past simple (main event)"],
        rows: [
          ["A family *was having* lunch", "*when* the dog *started* barking."],
          ["*While* they *were eating* outside,", "a fire *started* in the kitchen."],
          ["It *was raining* and people *were waiting* for the bus", "*when* the bus *crashed*."]
        ],
        note: "*when* + past simple (short action). *while* + past continuous (long action)."
      },
      {
        title: "During, headlines and reporting",
        head: ["Form", "Example"],
        rows: [
          ["*during* + noun", "*During* the storm, a tree fell on a car."],
          ["headlines (present simple, short)", "DOG SAVES FAMILY FROM FIRE"],
          ["*Did you hear about…?*", "*Did you hear about* the robbery?"],
          ["*Apparently,…*", "*Apparently*, nobody was hurt."]
        ],
        note: "Headlines use the present simple and leave out small words, but the story is in the past."
      }
    ],
    watchOut: [
      ["While I walked home, I saw an accident.", "While I was walking home, I saw an accident."],
      ["When the fire was starting, they ate.", "When the fire started, they were eating."],
      ["During they were eating…", "While they were eating… / During lunch…"],
      ["Did you heard the news?", "Did you hear the news?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the past simple or past continuous.",
      items: [
        "They [[were having|were eating]] lunch when the dog started barking. (have)",
        "While I was walking to work, I [[saw]] an accident. (see)",
        "The thief [[was running]] away when the police caught him. (run)",
        "It [[was raining]] when the plane landed. (rain)",
        "[[During]] the concert, the lights went out."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a TV news report about a rescue in the mountains.",
      title: "TV news: Mountain rescue",
      script: [
        { who: "Newsreader", line: "And now, some good news. Two hikers were rescued yesterday on the Iztaccíhuatl volcano. Our reporter has the story." },
        { who: "Reporter", line: "Thank you. The two young men were climbing the volcano on Saturday morning when the weather suddenly changed. It started snowing and they couldn't see the path." },
        { who: "Reporter", line: "While they were trying to go down, one of them fell and hurt his leg. Luckily, they had a phone with some battery, and they called for help." },
        { who: "Reporter", line: "A rescue team found them five hours later. They were cold, but OK. I spoke to one of the rescuers." },
        { who: "Witness", line: "They were very lucky. We always tell people: check the weather before you go and never climb alone." }
      ],
      activities: [
        {
          type: "tiles", title: "Put the story in order",
          prompt: "Put the words in order to make each part of the story.",
          items: [
            { a: "Two men were climbing the volcano." },
            { a: "The weather suddenly changed." },
            { a: "One of them fell and hurt his leg." },
            { a: "They called for help." },
            { a: "A rescue team found them." }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The hikers were rescued on the Popocatépetl.", a: false },
            { s: "It started snowing while they were climbing.", a: true },
            { s: "Their phone had no battery.", a: false },
            { s: "The rescue team found them five hours later.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three short news stories from a local website.",
      title: "Puebla news today",
      text: [
        { author: "STUDENT FINDS 300-YEAR-OLD COINS", body: "A university student discovered 50 old coins while she was working on a garden in the historic center. The coins are from the 18th century. Experts from the museum are now studying them." },
        { author: "THIEF FALLS ASLEEP IN HOUSE", body: "A thief tried to rob a house in San Manuel on Tuesday night, but he fell asleep on the sofa while he was eating the family's food! The family found him in the morning and called the police." },
        { author: "LOCAL TEAM WINS NATIONAL CHAMPIONSHIP", body: "The BUAP women's basketball team won the national championship on Sunday. They were losing at half-time, but they played brilliantly in the second half and won 78–71." }
      ],
      activities: [
        {
          type: "match", title: "Headline and detail",
          prompt: "Match the headline with the detail.",
          pairs: [
            ["STUDENT FINDS 300-YEAR-OLD COINS", "She was working in a garden."],
            ["THIEF FALLS ASLEEP IN HOUSE", "He was eating the family's food."],
            ["LOCAL TEAM WINS NATIONAL CHAMPIONSHIP", "They were losing at half-time."]
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Write short answers.",
          items: [
            { q: "How many coins did the student find?", a: ["Fifty.", "50", "50 coins.", "Fifty coins."] },
            { q: "Where did the family find the thief?", a: ["On the sofa.", "on the sofa", "Asleep on the sofa."] },
            { q: "What was the final score?", a: ["78–71.", "78-71", "78 to 71.", "Seventy-eight to seventy-one."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice news language, then write your own news story.",
      activities: [
        {
          type: "rewrite", title: "Join the sentences",
          prompt: "Join the sentences with *when* or *while*.",
          items: [
            { q: "I was cooking. The lights went out. (when)", a: ["I was cooking when the lights went out."] },
            { q: "She was driving to work. She saw a strange light in the sky. (while)", a: ["While she was driving to work, she saw a strange light in the sky.", "She saw a strange light in the sky while she was driving to work."] },
            { q: "They were watching TV. A cat came in through the window. (when)", a: ["They were watching TV when a cat came in through the window."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Did you hear about the robbery?" },
            { a: "Apparently, nobody was hurt." },
            { a: "It was raining when the accident happened." },
            { a: "While they were sleeping, the thief escaped." },
            { a: "During the storm, a tree fell on a car." }
          ]
        },
        {
          type: "write", title: "My news story",
          prompt: "Write a short news story (true or invented) for a local website. Include a headline. Describe what was happening (past continuous) and what happened (past simple). Say how the story ended.",
          minWords: 60, maxWords: 110,
          model: "GRANDMA WINS DANCE COMPETITION. Last Saturday, 82-year-old Doña Lupe surprised everyone at the Atlixco fair. Young couples were dancing salsa on the stage when she joined the competition with her grandson. While the music was playing, the crowd started shouting her name. At the end, the judges gave her first prize. \"I was dancing salsa before they were born!\" she said.",
          bank: ["HEADLINE IN CAPITALS", "Last…,", "… were … when…", "While … was…, …", "During…,", "At the end,…", "Apparently,…"],
          checklist: [
            "I wrote a headline.",
            "I used the past continuous for the background.",
            "I used the past simple for the main events.",
            "I used *when* or *while*."
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
            "Did you hear about the dog in Cholula?",
            "They were having lunch when the dog started barking.",
            "While they were eating outside, there was a fire.",
            "Apparently, nobody was hurt.",
            "The firefighters arrived in ten minutes.",
            "What a hero! That's amazing."
          ]
        },
        {
          type: "speak", title: "News reporter",
          prompt: "Record yourself as a TV news reporter telling a short news story (true or invented). Describe the background, the main events and the end.",
          language: ["Good evening. Here's today's news.", "Yesterday, …", "… were … when…", "While…,", "Luckily / Unfortunately,…", "Apparently,…"],
          seconds: 75,
          checklist: ["use the past continuous and past simple?", "use *when / while*?", "use news vocabulary?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can understand headlines and short news stories.", review: "Reading: Puebla news today" },
    { can: "I can use the past continuous for background.", review: "Explanation; Quick check" },
    { can: "I can use *when, while, during*.", review: "Explanation; Writing activity 1" },
    { can: "I can understand a TV news report.", review: "Listening: mountain rescue" },
    { can: "I can tell someone about a news story.", review: "Presentation; Speaking activity 2" },
    { can: "I can write a short news story.", review: "Writing activity 3" }
  ]
};
