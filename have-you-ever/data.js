window.UNIT = {
  slug: "have-you-ever",
  number: 11,
  title: "Have You Ever…?",
  level: "A2",
  minutes: 55,
  speakers: { "Abril": "f", "Leo": "m", "Host": "f", "Mauricio": "m", "Daniela": "f", A: "f", B: "m" },
  focus: ["present perfect for experiences", "have / has + past participle", "Have you ever…? I've never…", "present perfect vs. past simple", "irregular participles: been, eaten, seen…"],

  presentation: {
    scene: "🌋🪂🌶️✈️",
    situation: "Abril and Leo are on a long bus trip to a hiking weekend. To pass the time, they play a game: *Have you ever…?*",
    warmup: {
      prompt: "Which of these things have you done in your life? Choose everything that is true.",
      options: ["traveled by plane", "seen the ocean", "climbed a volcano", "eaten chapulines", "been to a concert", "met a famous person", "broken a bone", "lost a phone", "ridden a horse", "cooked for my family", "sung karaoke", "won a prize"],
      response: "Great! In this unit you'll learn to talk about your life experiences."
    },
    dialogueTitle: "The 'Have you ever…?' game",
    dialogue: [
      { who: "Abril", line: "OK, my turn. *Have you ever climbed* a volcano?" },
      { who: "Leo", line: "Yes, *I have*! *I've climbed* La Malinche three times." },
      { who: "Abril", line: "Wow! When *did* you *go* the last time?" },
      { who: "Leo", line: "I *went* last March with my cousins. It *was* freezing at the top! And you? *Have you ever eaten* chapulines?" },
      { who: "Abril", line: "No, *I've never eaten* them, and I don't want to!" },
      { who: "Leo", line: "Ha ha! They're delicious with lime. *Have you ever been* on a plane?" },
      { who: "Abril", line: "Yes, *I have*. *I've been* to Cancún and to Tijuana. *I flew* to Tijuana last year to visit my aunt." },
      { who: "Leo", line: "Lucky you. *I've never been* on a plane." }
    ]
  },

  objectives: [
    "I can talk about life experiences with the present perfect.",
    "I can form the present perfect with *have / has* + past participle.",
    "I can ask *Have you ever…?* and answer with *I have / I've never…*",
    "I can give details about an experience with the past simple."
  ],

  explanation: {
    vocabTitle: "Experiences (past participles)",
    vocab: [
      { word: "been", icon: "📍", say: "be, was, been" }, { word: "gone", icon: "🚶", say: "go, went, gone" }, { word: "seen", icon: "👀", say: "see, saw, seen" },
      { word: "eaten", icon: "🌮", say: "eat, ate, eaten" }, { word: "drunk", icon: "🥤", say: "drink, drank, drunk" }, { word: "done", icon: "✅", say: "do, did, done" },
      { word: "met", icon: "🤝", say: "meet, met, met" }, { word: "won", icon: "🏆", say: "win, won, won" }, { word: "lost", icon: "🔍", say: "lose, lost, lost" },
      { word: "broken", icon: "🩼", say: "break, broke, broken" }, { word: "ridden", icon: "🐎", say: "ride, rode, ridden" }, { word: "flown", icon: "✈️", say: "fly, flew, flown" },
      { word: "sung", icon: "🎤", say: "sing, sang, sung" }, { word: "swum", icon: "🏊", say: "swim, swam, swum" }, { word: "climbed", icon: "🧗", say: "climb, climbed, climbed" }
    ],
    grammar: [
      {
        title: "Present perfect: form",
        head: ["", "Example"],
        rows: [
          ["I / you / we / they", "*I've (have) seen* the ocean."],
          ["he / she / it", "*She's (has) been* to Canada."],
          ["negative", "*I haven't tried* sushi. / *He's never flown*."],
          ["question", "*Have* you *ever eaten* chapulines? – Yes, I *have*. / No, I *haven't*."]
        ],
        note: "Regular participles = past form: *visited, climbed*. Irregular participles: learn them! *be → been, eat → eaten, see → seen*."
      },
      {
        title: "Ever and never",
        head: ["Word", "Use", "Example"],
        rows: [
          ["*ever*", "in questions = at any time in your life", "*Have* you *ever* won a prize?"],
          ["*never*", "= not at any time (no *not*!)", "*I've never* broken a bone."],
          ["*before*", "at the end", "*Have* you been here *before*?"]
        ],
        note: "Don't use two negatives: *I've never been* (not *I haven't never been*)."
      },
      {
        title: "Present perfect vs. past simple",
        head: ["Present perfect: the experience (no time)", "Past simple: the details (when, where, how)"],
        rows: [
          ["*Have you ever been* to Oaxaca?", "*When did you go*? – *I went* in 2023."],
          ["*I've met* a famous singer.", "*I met* him at a concert. *He was* very nice."]
        ],
        note: "If you say **when** (yesterday, last year, in 2020), use the past simple: *I saw it last week.* (not *I've seen it last week*)."
      }
    ],
    watchOut: [
      ["Have you ever eat sushi?", "Have you ever eaten sushi?"],
      ["I have been to Mexico City last year.", "I went to Mexico City last year."],
      ["She have never flown.", "She has never flown."],
      ["I haven't never seen snow.", "I've never seen snow. / I haven't ever seen snow."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the present perfect or past simple of the verbs in parentheses.",
      items: [
        "I [[have been|'ve been]] to Veracruz three times. (be)",
        "[[Has]] your brother ever [[ridden]] a horse? (ride)",
        "We [[have never seen|'ve never seen]] snow. (never see)",
        "I [[went]] to a concert last Saturday. (go)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio program, *Unusual Lives*. Two guests talk about their experiences.",
      title: "Unusual lives",
      script: [
        { who: "Host", line: "Welcome to Unusual Lives. My first guest is Mauricio, a firefighter. Mauricio, have you ever been in danger?" },
        { who: "Mauricio", line: "Yes, many times. I've worked in big fires, and I've rescued people from earthquakes. In 2017, I helped after the earthquake in Puebla. It was very hard." },
        { who: "Host", line: "Have you ever been injured?" },
        { who: "Mauricio", line: "Yes, I have. I've broken my arm twice. But I've never thought about changing jobs. I love it." },
        { who: "Host", line: "Thank you, Mauricio. My second guest is Daniela. She's a travel blogger. Daniela, how many countries have you visited?" },
        { who: "Daniela", line: "I've been to thirty-two countries! My favorite was Japan. I went there in 2022 and I ate amazing food." },
        { who: "Host", line: "Have you ever had a bad experience on a trip?" },
        { who: "Daniela", line: "Oh, yes. I've lost my passport, I've missed flights… and once, in Peru, a llama ate my sandwich!" },
        { who: "Host", line: "Ha ha! Is there anything you've never done?" },
        { who: "Daniela", line: "I've never been to Antarctica. That's my next dream!" }
      ],
      activities: [
        {
          type: "sort", title: "Who has done it?",
          prompt: "Listen. Put each experience under the right person.",
          bins: ["Mauricio", "Daniela"],
          items: [
            { text: "has worked in big fires", bin: 0 }, { text: "has rescued people", bin: 0 }, { text: "has broken his arm", bin: 0 }, { text: "has never thought about changing jobs", bin: 0 },
            { text: "has been to 32 countries", bin: 1 }, { text: "has lost a passport", bin: 1 }, { text: "has missed flights", bin: 1 }, { text: "has never been to Antarctica", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete with one word or number.",
          items: [
            "Mauricio helped after the earthquake in [[2017]].",
            "He has broken his arm [[twice|two times]].",
            "Daniela's favorite country was [[Japan]].",
            "In Peru, a [[llama]] ate her sandwich.",
            "Her next dream is to go to [[Antarctica]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read three posts from a forum: *What's the most interesting thing you've ever done?*",
      title: "The most interesting thing I've ever done",
      text: [
        { author: "Ramiro, 21", body: "I've done a lot of crazy things, but the best was paragliding in Valle de Bravo. I did it last summer for my birthday. I was scared at first, but the view was incredible. I've never felt so free!" },
        { author: "Itzel, 19", body: "I've never traveled outside Mexico, but I've volunteered in a sea turtle camp in Oaxaca. I went there in 2023 for two weeks. We protected the eggs and helped baby turtles go to the sea. It's the best thing I've ever done." },
        { author: "Owen, 23", body: "I'm from Canada and I've lived in Puebla for one year. I've tried a lot of new food here: mole, chalupas, cemitas… I've even eaten chapulines! But I haven't learned to eat really spicy food yet." }
      ],
      activities: [
        {
          type: "match", title: "Match the details",
          prompt: "Match the experience with the detail.",
          pairs: [
            ["Ramiro went paragliding", "last summer, for his birthday."],
            ["Itzel volunteered in a turtle camp", "in 2023, for two weeks."],
            ["Owen has lived in Puebla", "for one year."],
            ["Itzel has never", "traveled outside Mexico."],
            ["Owen hasn't learned", "to eat really spicy food yet."]
          ]
        },
        {
          type: "rewrite", title: "Ask the questions",
          prompt: "Write the *Have you ever…?* question for each answer.",
          items: [
            { q: "Yes, I have. I went paragliding last summer.", a: ["Have you ever been paragliding?", "Have you ever gone paragliding?"] },
            { q: "No, I haven't. I've never traveled outside Mexico.", a: ["Have you ever traveled outside Mexico?", "Have you ever travelled outside Mexico?"] },
            { q: "Yes, I have. I've eaten chapulines.", a: ["Have you ever eaten chapulines?"] },
            { q: "Yes, I have. I volunteered in a turtle camp.", a: ["Have you ever volunteered?", "Have you ever volunteered in a turtle camp?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the participles, then write about your experiences.",
      activities: [
        {
          type: "gap", title: "Past participles",
          prompt: "Write the past participle.",
          items: [
            "go → went → [[gone|been]]",
            "eat → ate → [[eaten]]",
            "see → saw → [[seen]]",
            "fly → flew → [[flown]]",
            "break → broke → [[broken]]",
            "win → won → [[won]]"
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Have you ever met a famous person?" },
            { a: "I've never been to the beach." },
            { a: "She has climbed Popocatépetl." },
            { a: "When did you go there?" },
            { a: "We haven't seen that movie." }
          ]
        },
        {
          type: "write", title: "The most interesting thing I've ever done",
          prompt: "Write a post for the forum. Describe two or three experiences with the present perfect, then give details about one of them with the past simple. Add one thing you've never done but want to do.",
          minWords: 70, maxWords: 100,
          model: "I haven't traveled a lot, but I've had some great experiences. I've been to a big reggaeton concert in Mexico City, I've ridden a horse in Zacatlán and I've won a dance contest! The best was the concert. I went with my sister in 2023. We waited for five hours, but it was amazing. We sang every song. I've never been to the beach, so that's my next dream.",
          bank: ["I've been to", "I've never", "I've … twice", "The best was", "I went … in / last", "It was amazing / scary", "My next dream is"],
          checklist: [
            "I used the present perfect for **experiences**.",
            "I used the past simple for **details** (when, where).",
            "I used *never* correctly.",
            "I checked my irregular participles."
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
            "Have you ever been to Mexico City?",
            "Yes, I have. I went there last year.",
            "I've never eaten insects.",
            "Has she ever seen snow?",
            "I've been to Cancún twice.",
            "No, I haven't. Have you?"
          ]
        },
        {
          type: "speak", title: "My bucket list",
          prompt: "Record yourself for about one minute. Talk about three interesting things you've done (and when), and three things you've never done but want to do.",
          language: ["I've…", "I did it in / last…", "It was…", "I've never…", "I'd love to…", "One day, I want to…"],
          seconds: 90,
          checklist: ["talk about three experiences?", "give one detail with the past simple?", "say three things you've never done?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form the present perfect with *have / has* + participle.", review: "Explanation: present perfect form" },
    { can: "I can use at least 15 irregular past participles.", review: "Explanation: the vocabulary cards; Writing activity 1" },
    { can: "I can ask *Have you ever…?* and give short answers.", review: "Explanation: ever and never; Reading activity 2" },
    { can: "I can use *never* correctly.", review: "Explanation: ever and never" },
    { can: "I can choose between the present perfect and the past simple.", review: "Explanation: present perfect vs. past simple" },
    { can: "I can talk or write about my life experiences.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
