window.UNIT = {
  slug: "best-friends",
  number: 37,
  title: "Best Friends",
  level: "A2",
  minutes: 50,
  speakers: { "Daniela": "f", "Ximena": "f", "Host": "m", "Iván": "m", "Omar": "m", A: "f", B: "m" },
  focus: ["both / neither / all / none of us", "each other", "get on well with / have a lot in common / fall out", "possessive pronouns: mine, yours, hers, ours", "friendship"],

  presentation: {
    scene: "👯‍♀️🤝💬🎂",
    situation: "Daniela and Ximena have been best friends since primary school. A student magazine interviews them.",
    warmup: {
      prompt: "What's important in a friendship? Choose all.",
      options: ["trust", "having fun", "having things in common", "honesty", "listening", "being there in bad times", "sharing secrets", "respect", "laughing together", "keeping in touch"],
      response: "Very true! In this unit you'll learn to talk about friendship and what you have in common."
    },
    dialogueTitle: "Friends forever",
    dialogue: [
      { who: "Daniela", line: "We met when we were six. We've known *each other* for fifteen years!" },
      { who: "Ximena", line: "*We get on really well* because *we have a lot in common*. *Both of us* love dancing." },
      { who: "Daniela", line: "But we're also different. *Neither of us* likes cooking, but my family loves it and *hers* doesn't." },
      { who: "Ximena", line: "Ha! True. And *none of our friends* can understand our jokes." },
      { who: "Daniela", line: "*Have you ever fallen out*?" },
      { who: "Ximena", line: "Once! I lost her favorite jacket. It was *hers*, not *mine*, and I lost it at a party." },
      { who: "Daniela", line: "I didn't speak to her for a week. But then we *made up*." },
      { who: "Ximena", line: "Now *all of us* — our families too — go on vacation together every summer!" }
    ]
  },

  objectives: [
    "I can talk about what friends have in common with *both, neither, all, none*.",
    "I can use *each other* correctly.",
    "I can use friendship expressions: *get on well, fall out, make up*.",
    "I can use possessive pronouns: *mine, yours, hers, ours, theirs*."
  ],

  explanation: {
    vocabTitle: "Friendship",
    vocab: [
      { word: "get on well with", icon: "😊" }, { word: "have a lot in common", icon: "🔗" }, { word: "fall out", icon: "😠" },
      { word: "make up", icon: "🤝" }, { word: "keep in touch", icon: "📱" }, { word: "lose touch", icon: "📵" },
      { word: "trust", icon: "🔒" }, { word: "support", icon: "🫂" }, { word: "share", icon: "🍕" },
      { word: "secret", icon: "🤫" }, { word: "childhood friend", icon: "🧒" }, { word: "close friend", icon: "💞" },
      { word: "classmate", icon: "🎒" }, { word: "each other", icon: "🔄" }, { word: "loyal", icon: "🐕" }
    ],
    grammar: [
      {
        title: "Both, neither, all, none",
        head: ["Word", "Meaning", "Example"],
        rows: [
          ["*both (of us)*", "the two people ✅", "*Both of us* love dancing. / We *both* love dancing."],
          ["*neither (of us)*", "the two people ❌", "*Neither of us* likes cooking."],
          ["*all (of us)*", "everyone in a group (3+) ✅", "*All of us* go on vacation together."],
          ["*none (of us)*", "nobody in a group (3+) ❌", "*None of our friends* understand our jokes."]
        ],
        note: "*Neither of us* takes a positive verb: *Neither of us likes…* — not *doesn't like*."
      },
      {
        title: "Each other and possessive pronouns",
        head: ["Form", "Example"],
        rows: [
          ["*each other* (reciprocal)", "We've known *each other* for years. They help *each other*."],
          ["*mine / yours*", "It was hers, not *mine*. Is this *yours*?"],
          ["*his / hers*", "That jacket is *hers*."],
          ["*ours / theirs*", "Their house is bigger than *ours*. This table is *theirs*."]
        ],
        note: "Possessive pronouns replace *adjective + noun*: *my jacket → mine*."
      }
    ],
    watchOut: [
      ["Neither of us doesn't like cooking.", "Neither of us likes cooking."],
      ["We know us since school.", "We've known each other since school."],
      ["This jacket is my.", "This jacket is mine."],
      ["Both of they love dancing.", "Both of them love dancing."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *both, neither, all, none, each other* or a possessive pronoun.",
      items: [
        "[[Both]] of us like rock music. We go to concerts together.",
        "[[Neither]] of us can swim. We're scared of water!",
        "We talk to [[each other]] every day.",
        "Is this pen yours or [[mine]]? I think it's my pen.",
        "There are five people in my group. [[All]] of us love pizza."
      ]
    }
  },

  skills: {
    listening: {
      intro: "On a radio show, two friends who met in an unusual way tell their story. Listen.",
      title: "Radio: How we met",
      script: [
        { who: "Host", line: "Iván and Omar, how did you meet?" },
        { who: "Iván", line: "It's a funny story. We both had the same suitcase at the airport in Cancún, and I took his by mistake!" },
        { who: "Omar", line: "Yes! I opened 'my' suitcase at the hotel and found a guitar and a lot of comics. They were his, not mine." },
        { who: "Host", line: "So what happened?" },
        { who: "Iván", line: "We found each other's phone numbers on the suitcases and met to exchange them. We started talking and discovered we have a lot in common." },
        { who: "Omar", line: "Both of us play the guitar and neither of us likes the beach! That was ten years ago." },
        { who: "Host", line: "Do you still see each other?" },
        { who: "Iván", line: "All the time. We have a band now. And we never fall out — well, almost never!" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "They met at a train station.", a: false },
            { s: "Iván took Omar's suitcase by mistake.", a: true },
            { s: "The guitar and comics were Omar's.", a: false },
            { s: "Both of them play the guitar.", a: true },
            { s: "They met ten years ago.", a: true }
          ]
        },
        {
          type: "gap", title: "Complete the sentences",
          prompt: "Write one word.",
          items: [
            "They found each [[other's]] phone numbers.",
            "They have a lot in [[common]].",
            "[[Neither]] of them likes the beach.",
            "Now they have a [[band]] together."
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short article about friendship in a psychology magazine.",
      title: "Why do we need friends?",
      text: [
        { author: "", body: "Scientists say that people with close friends live longer and feel less stressed. Good friends support each other in bad times and celebrate good times together." },
        { author: "", body: "Do friends have to have a lot in common? Not always. Studies show that friends often share values, like honesty and respect, but they don't need to like the same music or food. What's important is that both people trust each other." },
        { author: "", body: "Today many people keep in touch online. That's great, but experts say we also need to see each other in person. When friends lose touch, it's often because none of them makes the first call. So why not call an old friend today?" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "People with close friends feel more stressed.", a: false },
            { s: "Friends must like the same music.", a: false },
            { s: "Trust is very important in a friendship.", a: true },
            { s: "Experts say online contact is enough.", a: false }
          ]
        },
        {
          type: "match", title: "Find the meaning",
          prompt: "Match the expression with its meaning.",
          pairs: [
            ["support each other", "help each other"],
            ["keep in touch", "continue to communicate"],
            ["lose touch", "stop communicating"],
            ["in person", "face to face"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the new structures, then write about your best friend.",
      activities: [
        {
          type: "rewrite", title: "Use a possessive pronoun",
          prompt: "Rewrite with *mine, yours, his, hers, ours* or *theirs*.",
          items: [
            { q: "This is my phone.", a: ["This is mine.", "This phone is mine."] },
            { q: "Is this your bag?", a: ["Is this yours?", "Is this bag yours?"] },
            { q: "That car is their car.", a: ["That car is theirs."] },
            { q: "The jacket was her jacket.", a: ["The jacket was hers."] }
          ]
        },
        {
          type: "rewrite", title: "Both or neither?",
          prompt: "Rewrite with *Both of us* or *Neither of us*.",
          items: [
            { q: "I love tacos. My friend loves tacos.", a: ["Both of us love tacos."] },
            { q: "I don't like horror movies. My friend doesn't like horror movies.", a: ["Neither of us likes horror movies."] },
            { q: "I can't dance. My friend can't dance.", a: ["Neither of us can dance."] }
          ]
        },
        {
          type: "write", title: "My best friend and me",
          prompt: "Write about your best friend. How long have you known each other? What do you have in common (both / neither)? Have you ever fallen out? How do you keep in touch?",
          minWords: 60, maxWords: 110,
          model: "My best friend is Alan. We've known each other since secondary school, so for eight years. We get on really well because we have a lot in common: both of us love basketball and neither of us likes getting up early! We fell out once because of a girl, but we made up after a few days. Now he lives in Monterrey, but we keep in touch. We call each other every Sunday.",
          bank: ["We've known each other for / since…", "We get on well because…", "Both of us…", "Neither of us…", "We fell out once because…", "We made up…", "We keep in touch by…"],
          checklist: [
            "I used *both* and *neither* correctly.",
            "I used *each other*.",
            "I used at least two friendship expressions.",
            "I used the present perfect with *for / since*."
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
            "We've known each other for fifteen years.",
            "We get on really well.",
            "Both of us love dancing.",
            "Neither of us likes cooking.",
            "It was hers, not mine.",
            "We keep in touch every week."
          ]
        },
        {
          type: "speak", title: "A friendship story",
          prompt: "Record yourself telling the story of a friendship: how you met, what you have in common, a time you fell out (or had a problem) and how you keep in touch.",
          language: ["We met when…", "We've known each other for…", "Both of us… / Neither of us…", "Once we fell out because…", "We made up when…", "We keep in touch by…"],
          seconds: 90,
          checklist: ["use *both / neither*?", "use *each other*?", "use friendship expressions?", "speak for about a minute and a half?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *both, neither, all, none*.", review: "Explanation; Writing activity 2" },
    { can: "I can use *each other*.", review: "Explanation; Quick check" },
    { can: "I can use friendship expressions.", review: "Explanation: vocabulary; Reading activity 2" },
    { can: "I can use possessive pronouns.", review: "Writing activity 1" },
    { can: "I can understand a story about friendship.", review: "Listening: how we met" },
    { can: "I can write about my best friend.", review: "Writing activity 3" }
  ]
};
