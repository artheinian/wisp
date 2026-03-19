export const SUGGESTIONS = {
  food: [
    { e: '🍜', n: 'Ramen',            r: 'A warm bowl perfect for cold or rainy days.',            tags: ['warm','comfort'],   weather: ['cold','rainy'],        mood: ['tired','bored'],     energy: ['low','medium'],  health: ['healthy','recovering'], people: ['solo','duo'],          time: ['medium','long']  },
    { e: '🍕', n: 'Pizza',            r: 'Easy, shareable, always a crowd-pleaser.',               tags: ['easy','sharing'],   weather: ['any'],                 mood: ['happy','bored'],     energy: ['low','medium'],  health: ['healthy'],              people: ['group','duo','solo'],  time: ['medium','quick'] },
    { e: '🌮', n: 'Tacos',            r: 'Quick, flavourful, and endlessly customisable.',          tags: ['quick','flavour'],  weather: ['sunny','hot'],         mood: ['happy','energetic'], energy: ['medium','high'], health: ['healthy'],              people: ['group','duo','solo'],  time: ['quick','medium'] },
    { e: '🍣', n: 'Sushi',            r: 'Light and fresh — ideal when energy is high.',            tags: ['fresh','light'],    weather: ['any'],                 mood: ['happy','energetic'], energy: ['medium','high'], health: ['healthy'],              people: ['duo','solo'],          time: ['medium','long']  },
    { e: '🥪', n: 'Sandwich & Soup',  r: 'Comforting and low-effort for tired days.',              tags: ['comfort','easy'],   weather: ['cold','rainy','snowy'],mood: ['tired','stressed'],  energy: ['low'],           health: ['recovering','sick'],    people: ['solo'],                time: ['quick','medium'] },
    { e: '🍝', n: 'Pasta',            r: 'Hearty and satisfying — great for any group.',            tags: ['hearty','filling'], weather: ['cold','rainy'],        mood: ['any'],               energy: ['low','medium'],  health: ['healthy','recovering'], people: ['solo','duo','group'],  time: ['medium']         },
    { e: '🍚', n: 'Porridge & Oats',  r: 'Gentle and nourishing when you need to take it easy.',   tags: ['gentle','healthy'], weather: ['cold'],                mood: ['tired'],             energy: ['low'],           health: ['sick','recovering'],    people: ['solo'],                time: ['quick']          },
    { e: '🍔', n: 'Burgers',          r: 'Bold and fun — perfect for a hungry group.',              tags: ['bold','fun'],       weather: ['sunny','hot'],         mood: ['happy','energetic'], energy: ['medium','high'], health: ['healthy'],              people: ['group','duo','solo'],  time: ['medium']         },
    { e: '🍲', n: 'Hot Pot',          r: 'Interactive dining at its best for groups.',              tags: ['social','warm'],    weather: ['cold','snowy','rainy'],mood: ['happy','bored'],     energy: ['medium'],        health: ['healthy'],              people: ['group','duo'],         time: ['long']           },
    { e: '🥝', n: 'Smoothie Bowl',    r: 'Light, vibrant, and perfect for warm sunny days.',        tags: ['fresh','light'],    weather: ['sunny','hot'],         mood: ['happy','energetic'], energy: ['medium','high'], health: ['healthy'],              people: ['solo'],                time: ['quick']          },
    { e: '🧆', n: 'Falafel Wrap',     r: 'Quick, filling, and great for on-the-go energy.',        tags: ['quick','filling'],  weather: ['any'],                 mood: ['any'],               energy: ['medium'],        health: ['healthy'],              people: ['solo','duo'],          time: ['quick']          },
    { e: '🍱', n: 'Bento Box',        r: 'Balanced and neat — lovely for a focused solo day.',     tags: ['balanced','neat'],  weather: ['any'],                 mood: ['any'],               energy: ['medium'],        health: ['healthy','recovering'], people: ['solo'],                time: ['quick','medium'] },
  ],
  activity: [
    { e: '🏋️', n: 'Gym Workout',     r: 'Burn off energy and stress with a solid session.',        tags: ['fitness','active'], weather: ['any'],                 mood: ['stressed','energetic'],energy: ['high','medium'],health: ['healthy'],              people: ['solo','duo'],          time: ['medium','long']  },
    { e: '🚴', n: 'Cycling',          r: 'Fresh air and movement — great on sunny days.',           tags: ['outdoor','active'], weather: ['sunny','hot'],         mood: ['energetic','happy'], energy: ['high'],          health: ['healthy'],              people: ['solo','duo'],          time: ['medium','long']  },
    { e: '🧘', n: 'Yoga & Stretch',   r: 'Gentle, restorative — perfect for tired or stressed.',   tags: ['calm','restore'],   weather: ['any'],                 mood: ['tired','stressed'],  energy: ['low'],           health: ['recovering','healthy'], people: ['solo'],                time: ['quick','medium'] },
    { e: '🎮', n: 'Video Games',      r: 'Immersive and fun — ideal for indoor low-energy days.',  tags: ['indoor','fun'],     weather: ['rainy','cold','snowy'],mood: ['bored','tired'],     energy: ['low'],           health: ['sick','recovering','healthy'],people: ['solo','duo'],   time: ['medium','long']  },
    { e: '📚', n: 'Read a Book',       r: 'Peaceful and enriching for a quiet day in.',             tags: ['calm','cozy'],      weather: ['rainy','cold','snowy'],mood: ['tired','bored'],     energy: ['low'],           health: ['sick','recovering','healthy'],people: ['solo'],         time: ['medium','long']  },
    { e: '🤿', n: 'Swimming',         r: 'Refreshing and great for hot sunny days.',                tags: ['active','refresh'], weather: ['sunny','hot'],         mood: ['energetic','happy'], energy: ['high','medium'], health: ['healthy'],              people: ['solo','duo','group'],  time: ['medium']         },
    { e: '🎨', n: 'Draw or Paint',    r: 'Creative outlet — wonderful for bored or stressed.',     tags: ['creative','calm'],  weather: ['any'],                 mood: ['bored','stressed'],  energy: ['low','medium'],  health: ['any'],                  people: ['solo'],                time: ['medium','long']  },
    { e: '🧹', n: 'Deep Clean',       r: 'Productive and satisfying — transforms your space.',      tags: ['productive'],       weather: ['rainy','any'],         mood: ['stressed','bored'],  energy: ['medium'],        health: ['healthy'],              people: ['solo'],                time: ['medium','long']  },
    { e: '🧁', n: 'Baking',           r: 'Cozy and rewarding for cold or rainy days.',              tags: ['cozy','creative'],  weather: ['cold','rainy','snowy'],mood: ['bored','happy'],     energy: ['medium'],        health: ['healthy','recovering'], people: ['solo','duo'],          time: ['medium','long']  },
    { e: '🧭', n: 'Nature Walk',      r: 'Clear your head with a gentle stroll outside.',           tags: ['outdoor','calm'],   weather: ['sunny'],               mood: ['tired','stressed','bored'],energy: ['low','medium'],health: ['healthy'],            people: ['solo','duo'],          time: ['medium']         },
    { e: '🏹', n: 'Rock Climbing',    r: 'Thrilling and physical — perfect when energy is high.',  tags: ['active','thrill'],  weather: ['any'],                 mood: ['energetic','happy'], energy: ['high'],          health: ['healthy'],              people: ['solo','duo','group'],  time: ['long','medium']  },
    { e: '🎵', n: 'Learn an Instrument',r:'Satisfying progress on a rainy quiet afternoon.',       tags: ['creative','learn'], weather: ['rainy','cold'],        mood: ['bored'],             energy: ['low','medium'],  health: ['healthy','recovering'], people: ['solo'],                time: ['medium','long']  },
  ],
  social: [
    { e: '🍻', n: 'Board Game Night', r: 'Classic fun for a group, any weather.',                   tags: ['fun','indoor'],     weather: ['any'],                 mood: ['happy','bored'],     energy: ['medium'],        health: ['healthy'],              people: ['group','duo'],         time: ['long','medium']  },
    { e: '🍿', n: 'Movie Night',      r: 'Cozy and low-effort — great for any group size.',         tags: ['cozy','easy'],      weather: ['rainy','cold','any'],  mood: ['tired','happy','bored'],energy: ['low'],          health: ['sick','recovering','healthy'],people: ['solo','duo','group'],time: ['long']           },
    { e: '🥦', n: 'Cook Together',    r: 'Fun, collaborative, and you end up with food.',           tags: ['fun','food'],       weather: ['any'],                 mood: ['happy','bored'],     energy: ['medium'],        health: ['healthy'],              people: ['duo','group'],         time: ['long']           },
    { e: '🎲', n: 'Games at a Bar',   r: 'Lively outing for an energetic group.',                   tags: ['lively','social'],  weather: ['any'],                 mood: ['happy','energetic'], energy: ['medium','high'], health: ['healthy'],              people: ['group','duo'],         time: ['long','medium']  },
    { e: '🧺', n: 'Picnic in the Park',r:'Laid-back outdoor gathering on sunny days.',              tags: ['outdoor','relaxed'],weather: ['sunny','hot'],         mood: ['happy','relaxed'],   energy: ['low','medium'],  health: ['healthy'],              people: ['duo','group'],         time: ['long','medium']  },
    { e: '🎤', n: 'Karaoke Night',    r: 'Ridiculous, memorable fun for a big group.',              tags: ['fun','bold'],       weather: ['any'],                 mood: ['happy','energetic'], energy: ['high','medium'], health: ['healthy'],              people: ['group'],               time: ['long']           },
    { e: '☕', n: 'Cafe Hangout',     r: 'Easy, chatty, and works for any group size.',             tags: ['chill','easy'],     weather: ['rainy','cold','any'],  mood: ['any'],               energy: ['low','medium'],  health: ['healthy','recovering'], people: ['solo','duo','group'],  time: ['medium','quick'] },
    { e: '🍹', n: 'Cocktail Making',  r: 'Creative and interactive — great date or group idea.',   tags: ['creative','fun'],   weather: ['any'],                 mood: ['happy','bored'],     energy: ['medium'],        health: ['healthy'],              people: ['duo','group'],         time: ['medium','long']  },
    { e: '🧩', n: 'Escape Room',      r: 'Intense team challenge — perfect for energetic groups.',  tags: ['challenge','team'], weather: ['any'],                 mood: ['energetic','happy'], energy: ['high','medium'], health: ['healthy'],              people: ['group','duo'],         time: ['medium','long']  },
    { e: '🎥', n: 'DIY Film Night',   r: 'Curated cinema at home — cozy and personal.',            tags: ['cozy','film'],      weather: ['rainy','cold'],        mood: ['tired','happy'],     energy: ['low'],           health: ['any'],                  people: ['duo','group'],         time: ['long']           },
  ],
  bored: [
    { e: '🌍', n: 'Explore a Neighbourhood',r:'Curiosity-driven walk with no agenda.',             tags: ['explore','outdoor'],weather: ['sunny'],               mood: ['bored','happy'],     energy: ['medium','high'], health: ['healthy'],              people: ['solo','duo'],          time: ['medium','long']  },
    { e: '📕', n: 'Start a Journal',  r: 'Reflect and get thoughts out of your head.',              tags: ['reflective','calm'],weather: ['any'],                 mood: ['bored','stressed'],  energy: ['low'],           health: ['any'],                  people: ['solo'],                time: ['quick','medium'] },
    { e: '🧠', n: 'Learn Something',  r: 'Pick a topic and go deep — YouTube, podcast, book.',     tags: ['learn','curious'],  weather: ['any'],                 mood: ['bored'],             energy: ['low','medium'],  health: ['any'],                  people: ['solo'],                time: ['medium','long']  },
    { e: '🌊', n: 'Cold Shower Then Walk',r:'Reset your state and get outside.',                   tags: ['refresh','active'], weather: ['any'],                 mood: ['tired','bored'],     energy: ['low','medium'],  health: ['healthy'],              people: ['solo'],                time: ['quick','medium'] },
    { e: '🧵', n: 'DIY Project',      r: 'Make or fix something around the house.',                 tags: ['creative','hands'], weather: ['any'],                 mood: ['bored'],             energy: ['medium'],        health: ['healthy'],              people: ['solo'],                time: ['long','medium']  },
    { e: '🎧', n: 'Podcast Deep-dive',r: 'Queue up a great series and zone out comfortably.',      tags: ['chill','passive'],  weather: ['rainy','cold'],        mood: ['tired','bored'],     energy: ['low'],           health: ['sick','recovering','healthy'],people: ['solo'],         time: ['long','medium']  },
    { e: '📸', n: 'Photography Walk', r: 'See your surroundings fresh through a lens.',             tags: ['creative','outdoor'],weather: ['sunny'],              mood: ['bored','happy'],     energy: ['medium'],        health: ['healthy'],              people: ['solo','duo'],          time: ['medium']         },
    { e: '🧴', n: 'Rearrange a Room', r: 'Small change, big payoff for your mood.',                 tags: ['productive','home'],weather: ['any'],                 mood: ['bored','stressed'],  energy: ['medium'],        health: ['healthy'],              people: ['solo'],                time: ['medium','long']  },
    { e: '🎲', n: 'Solo Board Game',  r: 'Puzzle-style solo games are surprisingly satisfying.',    tags: ['focus','indoor'],   weather: ['rainy','cold'],        mood: ['bored'],             energy: ['low','medium'],  health: ['any'],                  people: ['solo'],                time: ['medium','long']  },
    { e: '🌌', n: 'Stargazing',       r: 'Simple, free, and oddly moving on clear nights.',         tags: ['outdoor','calm'],   weather: ['sunny'],               mood: ['bored','happy'],     energy: ['low'],           health: ['healthy'],              people: ['solo','duo','group'],  time: ['medium','long']  },
  ],
}

export const CATEGORIES = [
  { id: 'food',     label: 'Food',         emoji: '🍜' },
  { id: 'activity', label: 'Activity',     emoji: '⚡' },
  { id: 'social',   label: 'Social Plans', emoji: '🎉' },
  { id: 'bored',    label: "I'm Bored",    emoji: '💤' },
]

export const CONTEXT_FIELDS = [
  {
    key: 'weather', label: 'Weather', emoji: '🌤',
    options: [
      { value: 'sunny',  label: '☀️ Sunny' },
      { value: 'cold',   label: '❄️ Cold'  },
      { value: 'rainy',  label: '🌧 Rainy' },
      { value: 'snowy',  label: '🌨 Snowy' },
      { value: 'hot',    label: '🔥 Hot'   },
    ],
  },
  {
    key: 'mood', label: 'Mood', emoji: '😌',
    options: [
      { value: 'bored',     label: '😑 Bored'     },
      { value: 'tired',     label: '😴 Tired'     },
      { value: 'energetic', label: '⚡ Energetic' },
      { value: 'stressed',  label: '😤 Stressed'  },
      { value: 'happy',     label: '😊 Happy'     },
    ],
  },
  {
    key: 'people', label: "Who's joining?", emoji: '👥',
    options: [
      { value: 'solo',  label: '🙋 Solo'        },
      { value: 'duo',   label: '👫 Two of us'   },
      { value: 'group', label: '👨‍👩‍👧‍👦 Group' },
    ],
  },
  {
    key: 'time', label: 'Time available', emoji: '⏱',
    options: [
      { value: 'quick',  label: '⚡ <30 min' },
      { value: 'medium', label: '🕐 1–2 hrs' },
      { value: 'long',   label: '🌙 All day'  },
    ],
  },
  {
    key: 'energy', label: 'Energy', emoji: '💪',
    options: [
      { value: 'low',    label: '🐢 Low'    },
      { value: 'medium', label: '🚶 Medium' },
      { value: 'high',   label: '🏃 High'   },
    ],
  },
  {
    key: 'health', label: 'Health', emoji: '❤️',
    options: [
      { value: 'sick',       label: '🤒 Sick'       },
      { value: 'recovering', label: '🤧 Recovering' },
      { value: 'healthy',    label: '💪 Healthy'    },
    ],
  },
]

export const WHEEL_COLORS = [
  '#7dd8f0','#5ee8da','#a0e8f5','#3cc8e0',
  '#80f0e8','#50d0f0','#90ead8','#60d8f0',
]
