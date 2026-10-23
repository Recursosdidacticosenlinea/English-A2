window.UNIT = {
  slug: "the-one-who",
  number: 36,
  title: "The One Who…",
  level: "A2",
  minutes: 50,
  speakers: { "Brisa": "f", "Hugo": "m", "Police officer": "m", "Woman": "f", A: "f", B: "m" },
  focus: ["defining relative clauses: who, which, that, where", "describing people: appearance and personality", "What does she look like? / What's she like?", "the man who…, the café where…", "identifying people in a photo"],

  presentation: {
    scene: "🧑‍🤝‍🧑📸🔍👓",
    situation: "Brisa shows Hugo a photo from her cousin's wedding. Hugo wants to know who everyone is.",
    warmup: {
      prompt: "Which words can you use to describe people? Choose all.",
      options: ["tall", "curly hair", "a beard", "glasses", "friendly", "shy", "slim", "funny", "bald", "freckles"],
      response: "Good! In this unit you'll learn to describe and identify people with relative clauses."
    },
    dialogueTitle: "Who's who?",
    dialogue: [
      { who: "Hugo", line: "Who's *the man who*'s wearing the gray suit?" },
      { who: "Brisa", line: "That's my uncle Tomás. He's *the one who* paid for the party!" },
      { who: "Hugo", line: "And *the girl that* has long curly hair?" },
      { who: "Brisa", line: "That's Majo, my cousin. She's *the person who* organized everything. She's very creative." },
      { who: "Hugo", line: "*What's she like*?" },
      { who: "Brisa", line: "She's really funny, but a bit bossy. And *the guy with* glasses is her boyfriend, *who* is a chef." },
      { who: "Hugo", line: "Oh! Is that *the restaurant where* they had the party?" },
      { who: "Brisa", line: "Yes! It's *the place where* he works. And that's *the cake which* he made — it had five floors!" }
    ]
  },

  objectives: [
    "I can use *who, which, that* and *where* to identify people, things and places.",
    "I can describe people's appearance and personality.",
    "I can ask *What does he look like? / What's he like?*",
    "I can describe people in a photo."
  ],

  explanation: {
    vocabTitle: "Describing people",
    vocab: [
      { word: "tall / short", icon: "📏" }, { word: "slim / well-built", icon: "🧍" }, { word: "curly / straight hair", icon: "💇" },
      { word: "bald", icon: "👨‍🦲" }, { word: "a beard / mustache", icon: "🧔" }, { word: "freckles", icon: "🔸" },
      { word: "glasses", icon: "👓" }, { word: "in his twenties", icon: "🔢" }, { word: "good-looking", icon: "😎" },
      { word: "friendly", icon: "🤗" }, { word: "bossy", icon: "👆" }, { word: "creative", icon: "🎨" },
      { word: "generous", icon: "🎁" }, { word: "easygoing", icon: "😌" }, { word: "talkative", icon: "🗣️" }
    ],
    grammar: [
      {
        title: "Relative clauses",
        head: ["Pronoun", "Use", "Example"],
        rows: [
          ["*who / that*", "people", "He's the man *who* paid for the party."],
          ["*which / that*", "things", "That's the cake *which* he made."],
          ["*where*", "places", "It's the restaurant *where* he works."]
        ],
        note: "The relative clause tells us *which* person, thing or place. Don't repeat the subject: *the man who works here* — never *the man who he works here*."
      },
      {
        title: "Appearance or personality?",
        head: ["Question", "Answer"],
        rows: [
          ["*What does she look like?* (appearance)", "She's tall and she has long curly hair."],
          ["*What's she like?* (personality)", "She's funny and creative, but a bit bossy."],
          ["*How old is he?*", "He's *in his thirties*. / He's about 35."],
          ["*the one with* + feature", "She's *the one with* glasses."]
        ]
      }
    ],
    watchOut: [
      ["The man which is wearing a suit.", "The man who is wearing a suit."],
      ["The restaurant where they had the party there.", "The restaurant where they had the party."],
      ["The woman who she lives next door.", "The woman who lives next door."],
      ["How is she? (appearance)", "What does she look like?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *who, which* or *where*.",
      items: [
        "She's the teacher [[who|that]] helped me with my English.",
        "This is the café [[where]] we first met.",
        "That's the phone [[which|that]] I bought last week.",
        "He's the boy [[who|that]] won the race.",
        "Puebla is the city [[where]] I was born."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A woman's bag was stolen at a market. She describes the thief to a police officer. Listen.",
      title: "At the police station",
      script: [
        { who: "Police officer", line: "Can you describe the man who took your bag?" },
        { who: "Woman", line: "Yes. He was young, in his twenties. He was tall and slim, with short black hair." },
        { who: "Police officer", line: "Did he have a beard?" },
        { who: "Woman", line: "No, but he had a small mustache. And he was wearing a red cap and a black jacket." },
        { who: "Police officer", line: "Was there anybody with him?" },
        { who: "Woman", line: "Yes, a woman who was waiting on a motorcycle. She had long blond hair and sunglasses." },
        { who: "Police officer", line: "Where exactly were you?" },
        { who: "Woman", line: "Near the stall where they sell flowers, at the market entrance." }
      ],
      activities: [
        {
          type: "sort", title: "The man or the woman?",
          prompt: "Sort the descriptions.",
          bins: ["The man", "The woman"],
          items: [
            { text: "in his twenties", bin: 0 }, { text: "tall and slim", bin: 0 }, { text: "a small mustache", bin: 0 }, { text: "a red cap", bin: 0 },
            { text: "waiting on a motorcycle", bin: 1 }, { text: "long blond hair", bin: 1 }, { text: "sunglasses", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The man had a beard.", a: false },
            { s: "He was wearing a black jacket.", a: true },
            { s: "It happened near the stall where they sell fruit.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a magazine article about people who changed a neighborhood.",
      title: "Neighborhood heroes",
      text: [
        { author: "Doña Celia", body: "Doña Celia is the woman who started the community garden on Calle 5. She's in her seventies, she has short white hair and she always wears a straw hat. She's patient and very generous — she gives vegetables to everyone." },
        { author: "Marcos", body: "Marcos is the young man who painted the murals which you can see near the market. He's tall, with a long beard and lots of tattoos. He looks serious, but he's actually very funny and easygoing." },
        { author: "La Esquina", body: "La Esquina is the café where neighbors meet every Friday. The owners, Ana and Luis, are the couple who organize free English classes for kids." }
      ],
      activities: [
        {
          type: "match", title: "Who or what is it?",
          prompt: "Match the description with the answer.",
          pairs: [
            ["the woman who started the garden", "Doña Celia"],
            ["the man who painted the murals", "Marcos"],
            ["the place where neighbors meet", "La Esquina"],
            ["the couple who organize classes", "Ana and Luis"]
          ]
        },
        {
          type: "rewrite", title: "What are they like?",
          prompt: "Answer with information from the article.",
          items: [
            { q: "What does Doña Celia look like?", a: ["She has short white hair and she wears a straw hat.", "She's in her seventies and she has short white hair.", "She has short white hair."] },
            { q: "What's Doña Celia like?", a: ["She's patient and generous.", "She's patient and very generous.", "Patient and generous."] },
            { q: "What's Marcos like?", a: ["He's funny and easygoing.", "He's very funny and easygoing.", "Funny and easygoing."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice relative clauses, then describe people who are important to you.",
      activities: [
        {
          type: "rewrite", title: "Join the sentences",
          prompt: "Join the sentences with *who, which* or *where*.",
          items: [
            { q: "That's the woman. She lives next door.", a: ["That's the woman who lives next door.", "That's the woman that lives next door."] },
            { q: "This is the park. We play soccer there.", a: ["This is the park where we play soccer."] },
            { q: "I lost the book. You gave it to me.", a: ["I lost the book which you gave me.", "I lost the book that you gave me.", "I lost the book which you gave to me.", "I lost the book that you gave to me.", "I lost the book you gave me."] },
            { q: "He's the chef. He made the cake.", a: ["He's the chef who made the cake.", "He's the chef that made the cake."] }
          ]
        },
        {
          type: "sort", title: "Look like or be like?",
          prompt: "Is it appearance or personality?",
          bins: ["Appearance", "Personality"],
          items: [
            { text: "curly hair", bin: 0 }, { text: "a beard", bin: 0 }, { text: "slim", bin: 0 }, { text: "freckles", bin: 0 },
            { text: "bossy", bin: 1 }, { text: "easygoing", bin: 1 }, { text: "generous", bin: 1 }, { text: "talkative", bin: 1 }
          ]
        },
        {
          type: "write", title: "People in my photo",
          prompt: "Imagine a photo of your family or friends at a party. Describe at least three people: who they are (with *who / which / where*), what they look like and what they're like.",
          minWords: 60, maxWords: 110,
          model: "This is a photo from my grandma's 80th birthday. The woman who is sitting in the middle is my grandma. She has short gray hair and glasses, and she's very generous. The tall man with a beard is my uncle Raúl, who lives in Tijuana. He's funny and talkative. The girl who is holding the cake is my cousin Sofi. We had the party in the garden where we played as children.",
          bank: ["This is a photo from…", "The woman who is…", "The man with…", "He / She has…", "He / She is very…", "the place where…", "the cake which…"],
          checklist: [
            "I used *who, which* or *where* at least three times.",
            "I described appearance and personality.",
            "I didn't repeat the subject after *who*.",
            "I described at least three people."
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
            "Who's the man who's wearing the gray suit?",
            "She's the person who organized everything.",
            "That's the restaurant where he works.",
            "What does she look like?",
            "She's tall and she has long curly hair.",
            "He's the one with glasses."
          ]
        },
        {
          type: "speak", title: "A special person",
          prompt: "Record yourself describing a person who is important to you. Say who they are, what they look like, what they're like, and a place where you spend time together.",
          language: ["… is the person who…", "He / She has…", "He / She is quite / very…", "He / She is in his / her…", "… is the place where we…"],
          seconds: 75,
          checklist: ["use relative clauses?", "describe appearance?", "describe personality?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *who, which, that, where*.", review: "Explanation: relative clauses; Quick check" },
    { can: "I can join sentences with relative pronouns.", review: "Writing activity 1" },
    { can: "I can describe people's appearance.", review: "Explanation: vocabulary; Listening" },
    { can: "I can describe people's personality.", review: "Reading: neighborhood heroes" },
    { can: "I can ask *What does he look like? / What's he like?*", review: "Explanation: appearance or personality?" },
    { can: "I can describe people in a photo.", review: "Writing activity 3" }
  ]
};
