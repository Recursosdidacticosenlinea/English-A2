window.UNIT = {
  slug: "lets-get-cooking",
  number: 26,
  title: "Let's Get Cooking!",
  level: "A2",
  minutes: 55,
  focus: ["cooking verbs: chop, boil, fry, mix…", "imperatives: Add the salt. Don't burn it!", "sequencers: first, next, then, finally", "kitchen tools", "How long…? For ten minutes."],

  presentation: {
    scene: "🍳🔪🥕🍲",
    situation: "Chef Leo has a cooking channel for teenagers. Today his guest is Majo, a BUAP student who can't cook at all. They're making guacamole and quesadillas!",
    warmup: {
      prompt: "What can you do in the kitchen? Choose everything that is true.",
      options: ["make a sandwich", "boil an egg", "fry an egg", "make rice", "cut vegetables", "make coffee", "make a cake", "wash the dishes", "make quesadillas", "make juice", "use the microwave", "nothing!"],
      response: "Great! In this unit you'll learn to give and follow instructions in the kitchen."
    },
    dialogueTitle: "Chef Leo's kitchen",
    dialogue: [
      { who: "Chef Leo", line: "Welcome, Majo! Today we're making guacamole. *First*, *wash* your hands." },
      { who: "Majo", line: "OK, done! What's next?" },
      { who: "Chef Leo", line: "*Cut* the avocados in half and *take out* the seed. *Be careful* with the knife!" },
      { who: "Majo", line: "Now what?" },
      { who: "Chef Leo", line: "*Next*, *mash* the avocados with a fork. *Then* *chop* an onion, a tomato and some cilantro." },
      { who: "Majo", line: "My eyes! The onion is making me cry!" },
      { who: "Chef Leo", line: "Ha ha! *Don't touch* your eyes. *Mix* everything together and *add* salt and lime juice." },
      { who: "Majo", line: "And *finally*?" },
      { who: "Chef Leo", line: "*Finally*, *taste* it… and *enjoy* it with tortilla chips!" }
    ]
  },

  objectives: [
    "I can name cooking verbs, ingredients and kitchen tools.",
    "I can give instructions with affirmative and negative imperatives.",
    "I can put the steps of a recipe in order with *first, next, then, finally*.",
    "I can understand and explain a simple recipe."
  ],

  explanation: {
    vocabTitle: "In the kitchen",
    vocab: [
      { word: "chop", icon: "🔪" }, { word: "slice", icon: "🍅" }, { word: "peel", icon: "🍌" },
      { word: "mix", icon: "🥣" }, { word: "boil", icon: "♨️" }, { word: "fry", icon: "🍳" },
      { word: "bake", icon: "🎂" }, { word: "pour", icon: "🫗" }, { word: "add", icon: "➕" },
      { word: "heat", icon: "🔥" }, { word: "frying pan", icon: "🍳" }, { word: "pot", icon: "🍲" },
      { word: "oven", icon: "🧱" }, { word: "bowl", icon: "🥣" }, { word: "spoon", icon: "🥄" }
    ],
    grammar: [
      {
        title: "Imperatives",
        head: ["Form", "Example"],
        rows: [
          ["affirmative: verb", "*Chop* the onion. *Add* some salt."],
          ["negative: *don't* + verb", "*Don't touch* the hot pan. *Don't add* sugar."],
          ["polite: *please*", "*Please wash* your hands first."],
          ["with *always / never*", "*Always wash* the vegetables. *Never leave* the stove on."]
        ],
        note: "Imperatives have no subject: *Mix the eggs.* (not *You mix the eggs.*). They're the same for one or many people."
      },
      {
        title: "Sequencers",
        head: ["Word", "Example"],
        rows: [
          ["*First,*", "*First,* wash the tomatoes."],
          ["*Next,* / *Then,*", "*Next,* chop them. *Then,* put them in a bowl."],
          ["*After that,*", "*After that,* add salt and lime."],
          ["*Finally,*", "*Finally,* serve it with tortillas."]
        ],
        note: "Put a comma after *First, Next, After that* and *Finally*."
      },
      {
        title: "Time and quantity",
        head: ["Question", "Answer"],
        rows: [
          ["*How long* do I boil the eggs?", "Boil them *for ten minutes*."],
          ["*How much* salt do I add?", "Add *a little* salt. / Add *a teaspoon* of salt."],
          ["*How many* tomatoes do I need?", "You need *two* tomatoes."],
          ["*When* do I add the cheese?", "Add it *when* the tortilla is hot."]
        ]
      }
    ],
    watchOut: [
      ["You cut the onion.", "Cut the onion."],
      ["No touch the pan!", "Don't touch the pan!"],
      ["Boil the eggs during ten minutes.", "Boil the eggs for ten minutes."],
      ["Don't adding sugar.", "Don't add sugar."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the instructions with one word.",
      items: [
        "[[Don't|Do not]] put metal in the microwave!",
        "[[First]], wash your hands.",
        "Boil the pasta [[for]] eight minutes.",
        "[[Finally]], serve the soup hot."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Chef Leo and Majo are making quesadillas now. Listen and follow the recipe.",
      title: "Quick quesadillas",
      script: [
        { who: "Chef Leo", line: "OK, Majo, now let's make quesadillas. For four quesadillas, you need four corn tortillas, some Oaxaca cheese, and one tomato for the salsa." },
        { who: "Majo", line: "That's easy. What do I do first?" },
        { who: "Chef Leo", line: "First, heat the comal or a frying pan. Don't use oil. We don't need it." },
        { who: "Majo", line: "OK. Now?" },
        { who: "Chef Leo", line: "Next, put a tortilla on the comal. Heat it for thirty seconds and then turn it over." },
        { who: "Chef Leo", line: "Then, add some cheese on one half of the tortilla, and fold it. Cook it for two minutes, until the cheese melts." },
        { who: "Majo", line: "It smells so good! Can I add some mushrooms?" },
        { who: "Chef Leo", line: "Of course! Add mushrooms, squash blossoms, whatever you like. But don't burn it! Turn it over again." },
        { who: "Chef Leo", line: "Finally, put it on a plate and add some salsa. And that's it!" },
        { who: "Majo", line: "Wow, I can cook!" }
      ],
      activities: [
        {
          type: "sort", title: "Order the steps",
          prompt: "Listen. Put each step in the right part of the recipe.",
          bins: ["1 · First", "2 · Next", "3 · Then", "4 · Finally"],
          items: [
            { text: "Heat the comal or a frying pan.", bin: 0 }, { text: "Don't use oil.", bin: 0 },
            { text: "Put a tortilla on the comal.", bin: 1 }, { text: "Heat it for 30 seconds and turn it over.", bin: 1 },
            { text: "Add cheese and fold the tortilla.", bin: 2 }, { text: "Cook it until the cheese melts.", bin: 2 },
            { text: "Put it on a plate.", bin: 3 }, { text: "Add some salsa.", bin: 3 }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete with one or two words.",
          items: [
            "For four quesadillas, you need four [[corn]] tortillas.",
            "You need [[Oaxaca]] cheese.",
            "Heat the tortilla for thirty [[seconds]].",
            "Cook it for [[two|2]] minutes.",
            "Majo wants to add [[mushrooms]].",
            "Don't [[burn]] it!"
          ]
        }
      ]
    },

    reading: {
      intro: "Read a recipe from a website for students who live alone.",
      title: "Student recipe: French toast (pan francés)",
      text: [
        { body: "**You need:** 4 slices of bread, 2 eggs, 1/2 cup of milk, 1 teaspoon of cinnamon, 1 tablespoon of butter, honey or fruit." },
        { body: "**Time:** 15 minutes · **Difficulty:** easy" },
        { body: "First, break the eggs into a bowl. Add the milk and the cinnamon, and mix everything with a fork." },
        { body: "Next, put each slice of bread in the egg mixture. Leave it for a few seconds on each side. Don't leave it too long, or the bread will break!" },
        { body: "Then, heat the butter in a frying pan. Use medium heat, not high heat." },
        { body: "After that, fry the bread for about two minutes on each side, until it's golden brown." },
        { body: "Finally, put the French toast on a plate and add honey or fresh fruit. Eat it hot!" },
        { body: "**Tip:** Old bread is better than fresh bread for this recipe. Don't throw away your old bread!" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read the recipe. Are these sentences true or false?",
          items: [
            { s: "The recipe takes about fifteen minutes.", a: true },
            { s: "You mix the eggs, the milk and the cinnamon.", a: true },
            { s: "You leave the bread in the egg mixture for five minutes.", a: false },
            { s: "You fry the bread with oil.", a: false },
            { s: "You should use high heat.", a: false },
            { s: "Old bread is good for this recipe.", a: true }
          ]
        },
        {
          type: "match", title: "Match the verbs",
          prompt: "Match each verb from the recipe with what you do it to.",
          pairs: [
            ["break", "the eggs"],
            ["mix", "everything with a fork"],
            ["heat", "the butter in a pan"],
            ["fry", "the bread for two minutes"],
            ["add", "honey or fresh fruit"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice instructions first, then write your own recipe.",
      activities: [
        {
          type: "rewrite", title: "Give the instruction",
          prompt: "Rewrite each sentence as an imperative.",
          items: [
            { q: "You need to wash the vegetables.", a: ["Wash the vegetables."] },
            { q: "You shouldn't touch the hot pot.", a: ["Don't touch the hot pot.", "Do not touch the hot pot."] },
            { q: "You have to boil the water first.", a: ["Boil the water first.", "First, boil the water.", "First boil the water."] },
            { q: "It's a good idea to add a little salt.", a: ["Add a little salt."] },
            { q: "Please don't forget to turn off the stove.", a: ["Don't forget to turn off the stove.", "Please don't forget to turn off the stove.", "Turn off the stove."] }
          ]
        },
        {
          type: "tiles", title: "Kitchen instructions",
          items: [
            { a: "Chop the onion into small pieces." },
            { a: "Don't put the knife in the sink." },
            { a: "Boil the eggs for ten minutes." },
            { a: "Then, pour the milk into a bowl." },
            { a: "Finally, serve it with fresh bread." }
          ]
        },
        {
          type: "write", title: "My favorite recipe",
          prompt: "Write a simple recipe you know (a family dish, a snack, a drink). Include a list of ingredients and at least five steps with sequencers. Add one warning with *Don't…*",
          minWords: 60, maxWords: 100,
          model: "Agua de jamaica. You need: one cup of dried jamaica flowers, two liters of water, half a cup of sugar and ice. First, boil one liter of water in a pot. Next, add the flowers and boil them for five minutes. Then, turn off the stove and leave it for twenty minutes. After that, pour the water into a jar and add the sugar and the rest of the water. Don't add too much sugar! Finally, add ice and enjoy.",
          bank: ["You need:", "First,", "Next,", "Then,", "After that,", "Finally,", "for … minutes", "Don't…", "Enjoy!"],
          checklist: [
            "I wrote a list of **ingredients**.",
            "I wrote at least **five** steps with *first, next, then, after that, finally*.",
            "I used imperatives without a subject.",
            "I included one *Don't…* warning."
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
            "First, chop the onions.",
            "Then fry them in a little oil.",
            "Add the tomatoes and the salt.",
            "Don't burn the garlic!",
            "Mix everything for two minutes.",
            "Finally, serve it hot."
          ]
        },
        {
          type: "speak", title: "My recipe video",
          prompt: "Record yourself (about one minute) explaining how to make a simple dish or drink. If you can, record it in your kitchen while you cook!",
          language: ["Hi! Today I'm going to show you how to make…", "You need…", "First,…", "Next,…", "Don't…", "Finally,…", "Enjoy!"],
          seconds: 90,
          checklist: ["say the ingredients?", "give at least five steps?", "use imperatives without *you*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 10 cooking verbs.", review: "Explanation: the vocabulary cards; Reading activity 2" },
    { can: "I can name kitchen tools and ingredients.", review: "Explanation: the vocabulary cards" },
    { can: "I can give instructions with affirmative and negative imperatives.", review: "Explanation: imperatives; Writing activity 1" },
    { can: "I can order steps with *first, next, then, after that, finally*.", review: "Explanation: sequencers; Listening activity 1" },
    { can: "I can understand a simple recipe.", review: "Reading: French toast" },
    { can: "I can explain a recipe in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
