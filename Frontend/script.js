const chatbotBox = document.getElementById("chatbot-box");
const messages = document.getElementById("chatbot-messages");
const input = document.getElementById("chatbot-input");

const mentalHealthResponses = {
  sad: [
    "I'm here for you 💜 It's okay to feel sad sometimes. Would you like to talk about what's making you feel this way?",
    "I hear you, and your feelings are valid. Let's take this one step at a time together. Can you tell me more about what's going on?",
    "Sadness is a natural emotion, and it's brave of you to acknowledge it. I'm here to listen without judgment. 🌿"
  ],
  happy: [
    "That's wonderful! 🌈 I'm so glad you're feeling happy. What's bringing you joy today?",
    "Your happiness is contagious! Keep that positive energy flowing. Would you like to share what's making you smile? 😊",
    "Amazing! Celebrating the good moments is so important. Tell me more about what's making you feel great!"
  ],
  anxious: [
    "Anxiety can feel overwhelming, but you're not alone. Let's try a grounding exercise: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. 🌬️",
    "I understand anxiety is difficult. Try this: Breathe in slowly for 4 counts, hold for 4, exhale for 4. Repeat this a few times. I'm right here with you. 💙",
    "Let's work through this together. What's making you feel anxious? Sometimes talking about it can help lighten the burden. 🌟"
  ],
  stress: [
    "Stress is tough, but you're tougher. Try this breathing technique: Inhale for 4 seconds, hold for 4, exhale for 6. This activates your calm response. 🌬️",
    "I hear you. Let's tackle this stress together. Can you identify what's causing the most pressure right now? Sometimes breaking things down helps. 💪",
    "Remember: You don't have to handle everything at once. Let's prioritize. What's one small thing you could do right now to feel better? 🌿"
  ],
  depressed: [
    "I'm really glad you reached out. Depression is serious, and you deserve support. While I'm here to listen, please consider reaching out to a mental health professional. You're worth it. 💜",
    "You're taking a brave step by talking about this. Depression can make everything feel heavy, but you don't have to carry this alone. Have you spoken with a counselor or therapist? 🌸",
    "Your feelings matter, and so do you. If you're in crisis, please call 988 (Suicide & Crisis Lifeline). I'm here for support, but professionals can provide the help you deserve. 🆘"
  ],
  angry: [
    "It's okay to feel angry. Let's channel this energy safely. Try: Take 5 deep breaths, or do some physical activity if you can. Would you like to talk about what triggered this? 🔥",
    "Anger is a valid emotion. Let's explore what's beneath it - sometimes anger masks hurt, fear, or frustration. I'm listening. 💭",
    "I hear your frustration. Would a quick anger release help? Try: Squeeze ice cubes, punch a pillow, or write down your feelings and tear up the paper. 🌊"
  ],
  lonely: [
    "Loneliness can feel really heavy. You're not alone right now - I'm here with you. Would you like to talk about what's making you feel isolated? 🤗",
    "I understand feeling lonely is painful. Even small connections can help - maybe reach out to one person today, even just to say hi. You matter. 💜",
    "You deserve connection and companionship. Let's talk about ways to build meaningful relationships. What activities do you enjoy? 🌟"
  ],
  grateful: [
    "Gratitude is powerful! 🙏 Recognizing the good things is wonderful for your mental health. What are you grateful for today?",
    "That's beautiful! Practicing gratitude can really shift our perspective. Tell me more about what's filling your heart. ✨",
    "Love this energy! Gratitude is one of the best practices for wellbeing. Keep noticing those positive moments. 🌈"
  ],
  tired: [
    "Rest is not a luxury, it's a necessity. 🌙 Are you getting enough sleep? Let's talk about your sleep routine and energy levels.",
    "Being tired affects everything. Let's explore: Are you physically tired, mentally exhausted, or emotionally drained? Each needs different care. 💤",
    "Your body might be telling you something. Have you been able to take breaks? Even 5-minute rests can help recharge. 🔋"
  ],
  overwhelmed: [
    "Feeling overwhelmed is a sign you're carrying too much. Let's pause and breathe. What's the most urgent thing right now? We'll tackle one thing at a time. 🌊",
    "When everything feels like too much, we need to simplify. Can you delegate, postpone, or eliminate anything from your plate? You don't have to do it all. 🧘",
    "Let's break this down together. Make a list of everything, then we'll prioritize. Sometimes just organizing thoughts helps. 📝"
  ],
  confused: [
    "It’s okay to feel unsure. That’s how learning starts. 🌱",
    "Confusion is a sign of growth — you’re processing new things. 🧩",
    "Take your time. Clarity always comes, even if slowly. 💭"
  ],
  hopeless: [
    "It feels dark now, but the light will return — even if it’s dim. 💜",
    "You’re not alone. Sometimes hope hides, but it’s still there. 🌙",
    "Let’s talk about what’s been hardest lately. 🌅"
  ],
  motivated: [
    "That’s awesome! 🔥 What’s your next step?",
    "You’re in the zone — channel that energy! 🌟",
    "Keep going. Even small progress counts. 🚀"
  ],
  guilty: [
    "Guilt shows you care — but you don’t have to carry it forever. 💭",
    "Mistakes are part of being human. Learn and forgive yourself. 🌱",
    "You’re not defined by your past actions. 💜"
  ],
  excited: [
    "That’s amazing! 🎉 Tell me what’s happening!",
    "Your enthusiasm is contagious! 🌈",
    "Love this energy — what are you looking forward to most? 🌟"
  ],
  bored: [
    "Boredom is your mind asking for something new. 🎨",
    "Let’s get creative! Want some fun or relaxing ideas? 💡",
    "Even boredom can spark inspiration — what interests you lately? 🌿"
  ],
  reflective: [
    "It sounds like you’re in a thoughtful mood. What’s been on your mind? 🌙",
    "Reflection helps us understand ourselves better. 💭",
    "Would you like to talk through what you’ve been thinking about? 🌿"
  ],
  insecure: [
    "It’s okay to feel unsure — everyone does sometimes. 💜",
    "You are enough as you are. Truly. 🌼",
    "Let’s talk about what’s making you feel this way — you’re not alone. 💭"
  ],
  confident: [
    "Love that confidence! 🌟 Keep believing in yourself.",
    "You’ve got this — trust your skills and instincts. 💪",
    "Confidence looks great on you. Keep shining! ✨"
  ],
  relaxed: [
    "That’s great! 🌿 Take a deep breath and enjoy the calm.",
    "It’s nice to feel at ease. What’s helping you unwind today? 🌙",
    "Moments of peace are so precious — hold on to that feeling. ☁️"
  ],
  nervous: [
    "Nerves mean you care — it’s completely normal. 💙",
    "Let’s breathe together: In for 4, hold for 4, out for 6. 🌬️",
    "What’s making you nervous? Sometimes talking helps calm it. 🌱"
  ],
  curious: [
    "Curiosity is the start of all learning! 🌟 What are you wondering about?",
    "Love that you’re curious — let’s explore it together. 🔍",
    "Ask away! Curiosity keeps your mind alive. 💡"
  ],
  frustrated: [
    "That sounds really frustrating. 💭 Want to vent a bit?",
    "It’s okay to feel stuck — let’s find a way to ease that tension. 🌿",
    "You’re doing your best. Sometimes frustration means progress is near. 💪"
  ],
  ashamed: [
    "Shame can be painful — but it doesn’t define you. 💜",
    "You’re still worthy of love and forgiveness. 🌸",
    "Let’s talk through what’s making you feel this way, if you’d like. 🌿"
  ],
  proud: [
    "You should be proud — that’s an achievement worth celebrating! 🎉",
    "That’s amazing progress! How does it feel? 🌈",
    "Take a moment to acknowledge how far you’ve come. 🌟"
  ],
  relieved: [
    "That’s a relief! 🌬️ It must feel good to have that weight lifted.",
    "I’m glad things are easing up for you. 🌿",
    "Sometimes that sigh of relief says it all. 💭"
  ],
  hopeful: [
    "That’s beautiful — hope is a quiet kind of strength. 🌅",
    "Hold onto that light; it can guide you through anything. 💜",
    "Hope grows even in small moments. 🌱"
  ],
  hurt: [
    "I’m really sorry you’re hurting. 💔 Want to share what happened?",
    "Pain like that takes time to heal — I’m here for you. 🌿",
    "You don’t have to go through this alone. 🌙"
  ],
  content: [
    "That’s lovely! 🌸 Feeling content is such a peaceful state.",
    "It’s great to see you feeling balanced and calm. ☁️",
    "Enjoy this moment — you’ve earned it. 🌿"
  ],
  inspired: [
    "That’s wonderful! 🌈 What sparked your inspiration?",
    "Love that creative energy — what’s your next idea? 💡",
    "When inspiration hits, go for it! The world needs your spark. 🌟"
  ],
  jealous: [
    "Jealousy happens — it’s just an emotion, not your identity. 💭",
    "Try to see what this feeling is telling you about your own desires. 🌿",
    "You’re human — it’s okay. Let’s focus on your own growth. 🌱"
  ]
};

const breathingExercises = [
  "Try box breathing: Breathe in for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat 4 times. 🟦",
  "4-7-8 technique: Inhale for 4 seconds, hold for 7, exhale slowly for 8. Great for anxiety! 🌬️",
  "Deep belly breathing: Put your hand on your belly, breathe in deeply so your belly rises, then exhale slowly. Do this 5 times. 🫁"
];

const affirmations = [
  "You are stronger than you think. 💪",
  "Your feelings are valid and important. 💜",
  "You deserve peace and happiness. 🌈",
  "It's okay to not be okay sometimes. 🌿",
  "You are worthy of love and care. ✨",
  "This feeling is temporary. You will get through this. 🌅",
  "You're doing better than you think you are. 🌟",
  "Taking care of your mental health is brave, not weak. 🦋"
];

// Helper function to detect emotion in message
function detectEmotion(message) {
  const lowerMsg = message.toLowerCase();

  const emotions = {
    sad: [
      'sad', 'down', 'cry', 'crying', 'upset', 'miserable', 'heartbroken',
      'blue', 'depressed', 'low', 'disheartened', 'gloomy', 'tearful', 'broken', 'sorrowful'
    ],
    happy: [
      'happy', 'joy', 'joyful', 'excited', 'great', 'amazing', 'wonderful', 'fantastic',
      'glad', 'cheerful', 'delighted', 'thrilled', 'content', 'pleased', 'smiling', 'overjoyed'
    ],
    anxious: [
      'anxious', 'anxiety', 'nervous', 'worried', 'panic', 'fear', 'scared', 'afraid',
      'uneasy', 'tense', 'restless', 'shaky', 'jittery', 'stressed', 'freaking out', 'on edge'
    ],
    stress: [
      'stress', 'stressed', 'pressure', 'overwhelm', 'busy', 'exhausted', 'burned out',
      'tension', 'fatigued', 'drained', 'mental load', 'can’t cope', 'too much', 'loaded', 'burdened'
    ],
    depressed: [
      'depressed', 'depression', 'hopeless', 'worthless', 'suicidal', 'suicide', 'kill myself',
      'end it all', 'empty', 'numb', 'tired of life', 'dark thoughts', 'broken', 'giving up', 'no reason to live'
    ],
    angry: [
      'angry', 'mad', 'furious', 'rage', 'frustrated', 'annoyed', 'irritated', 'pissed',
      'upset', 'snapped', 'boiling', 'agitated', 'hate', 'resentful', 'infuriated', 'mad at'
    ],
    lonely: [
      'lonely', 'alone', 'isolated', 'nobody', 'no one', 'no friends', 'abandoned',
      'left out', 'ignored', 'unnoticed', 'unloved', 'by myself', 'friendless', 'empty', 'disconnected'
    ],
    grateful: [
      'grateful', 'thankful', 'blessed', 'appreciate', 'gratitude', 'thank', 'content',
      'satisfied', 'at peace', 'happy with', 'valuing', 'recognizing', 'appreciated', 'thank god', 'feeling lucky'
    ],
    tired: [
      'tired', 'exhausted', 'fatigue', 'drained', 'sleepy', 'weary', 'worn out',
      'burnt out', 'low energy', 'drowsy', 'fatigued', 'can’t move', 'dead tired',
      'need rest', 'done for the day'
    ],
    overwhelmed: [
      'overwhelmed', 'too much', 'can’t handle', 'drowning', 'overloaded', 'burning out',
      'mentally tired', 'exhausted', 'pressure', 'so much to do', 'stuck', 'lost control',
      'breaking down', 'chaotic', 'out of hand'
    ],
    confused: [
      'confused', 'unsure', 'lost', 'uncertain', 'puzzled', 'don’t know', 'not sure',
      'mixed up', 'foggy', 'doubtful', 'hesitant', 'unclear', 'perplexed', 'blurred', 'indecisive'
    ],
    hopeless: [
      'hopeless', 'helpless', 'empty', 'meaningless', 'defeated', 'giving up', 'pointless',
      'worthless', 'lost', 'broken', 'tired of life', 'no hope', 'drained', 'done', 'exhausted'
    ],
    motivated: [
      'motivated', 'driven', 'focused', 'determined', 'productive', 'energized', 'inspired',
      'goal-oriented', 'ambitious', 'disciplined', 'ready', 'pumped', 'enthusiastic', 'positive',
      'empowered'
    ],
    guilty: [
      'guilty', 'regret', 'ashamed', 'sorry', 'remorse', 'blame', 'fault', 'repent',
      'apologetic', 'embarrassed', 'responsible', 'culpable', 'self-blame', 'wrong', 'regretful'
    ],
    excited: [
      'excited', 'thrilled', 'ecstatic', 'pumped', 'hyped', 'eager', 'elated', 'overjoyed',
      'delighted', 'joyful', 'buzzing', 'can’t wait', 'thrill', 'energized', 'spirited'
    ],
    bored: [
      'bored', 'uninterested', 'tired', 'lazy', 'dull', 'restless', 'unmotivated', 'meh',
      'blank', 'lifeless', 'drained', 'weary', 'apathetic', 'disinterested', 'sluggish'
    ],
    reflective: [
      'reflective', 'thoughtful', 'thinking', 'pondering', 'contemplative', 'introspective',
      'evaluating', 'considering', 'wondering', 'nostalgic', 'remembering', 'philosophical',
      'analyzing', 'questioning', 'recalling'
    ],
    insecure: [
      'insecure', 'doubtful', 'uncertain', 'self-conscious', 'not enough', 'inferior',
      'worthless', 'jealous', 'awkward', 'unworthy', 'timid', 'unsure', 'afraid', 'weak',
      'self-doubt'
    ],
    confident: [
      'confident', 'self-assured', 'strong', 'capable', 'bold', 'ready', 'fearless',
      'certain', 'empowered', 'assertive', 'secure', 'determined', 'decisive', 'focused',
      'positive'
    ],
    relaxed: [
      'relaxed', 'calm', 'peaceful', 'chill', 'at ease', 'content', 'unbothered',
      'composed', 'serene', 'balanced', 'rested', 'tranquil', 'soothed', 'easygoing',
      'loose'
    ],
    nervous: [
      'nervous', 'anxious', 'worried', 'tense', 'on edge', 'scared', 'panicky', 'uneasy',
      'fidgety', 'restless', 'stressed', 'concerned', 'afraid', 'apprehensive',
      'unsettled'
    ],
    curious: [
      'curious', 'interested', 'wondering', 'questioning', 'inquisitive', 'want to know',
      'exploring', 'investigating', 'learning', 'fascinated', 'inquiring', 'searching',
      'observing', 'eager', 'thoughtful'
    ],
    frustrated: [
      'frustrated', 'annoyed', 'irritated', 'angry', 'upset', 'fed up', 'stuck', 'mad',
      'done', 'bothered', 'tense', 'exasperated', 'blocked', 'disappointed', 'agitated'
    ],
    ashamed: [
      'ashamed', 'embarrassed', 'humiliated', 'disgraced', 'regretful',
      'guilty',
      'awkward', 'mortified', 'flustered', 'insecure', 'uncomfortable', 'sorry',
      'self-conscious', 'shy', 'exposed'
    ],
    proud: [
      'proud', 'accomplished', 'satisfied', 'achieved', 'successful', 'fulfilled',
      'confident', 'happy', 'content', 'victorious', 'strong', 'recognized',
      'grateful', 'rewarded', 'empowered'
    ],
    relieved: [
      'relieved', 'thankful', 'grateful', 'unburdened', 'calmed', 'reassured',
      'free', 'safe', 'peaceful', 'okay now', 'released', 'better', 'lighter',
      'comforted', 'glad'
    ],
    hopeful: [
      'hopeful', 'optimistic', 'positive', 'faithful', 'looking forward', 'bright',
      'trusting', 'expecting', 'believe', 'confident', 'encouraged', 'inspired',
      'uplifted', 'reassured', 'motivated'
    ],
    hurt: [
      'hurt', 'pained', 'heartbroken', 'betrayed', 'wounded', 'ache', 'injured',
      'sad', 'ignored', 'offended', 'rejected', 'crushed', 'lonely', 'broken',
      'aching'
    ],
    content: [
      'content', 'satisfied', 'peaceful', 'happy', 'fine', 'good', 'okay',
      'balanced', 'relaxed', 'fulfilled', 'at ease', 'calm', 'stable',
      'pleasant', 'composed'
    ],
    inspired: [
      'inspired', 'creative', 'motivated', 'sparked', 'driven', 'uplifted',
      'imaginative', 'visionary', 'artistic', 'ambitious', 'passionate',
      'dreaming', 'energized', 'inventive', 'productive'
    ],
    jealous: [
      'jealous', 'envious', 'covetous', 'resentful', 'envy', 'insecure',
      'comparative', 'bitter', 'wishful', 'wanting', 'competitive',
      'possessive', 'inferior', 'unfair', 'left out'
    ]
  };

  for (const [emotion, keywords] of Object.entries(emotions)) {
    if (keywords.some(keyword => lowerMsg.includes(keyword))) {
      return emotion;
    }
  }
  return null;
}

// Helper function to generate contextual response
function generateResponse(message, emotion) {
  let response = "";

  if (emotion && mentalHealthResponses[emotion]) {
    const responses = mentalHealthResponses[emotion];
    response = responses[Math.floor(Math.random() * responses.length)];

    // Add breathing exercise for stress/anxiety
    if (emotion === 'stress' || emotion === 'anxious') {
      const exercise = breathingExercises[Math.floor(Math.random() * breathingExercises.length)];
      response += `\n\n${exercise}`;
    }

    // Add affirmation
    const affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    response += `\n\n${affirmation}`;

  } else {
    // Default empathetic responses
    const defaultResponses = [
      "I'm listening 👂 Tell me more about what's on your mind.",
      "Thank you for sharing that with me. How are you feeling right now? 💜",
      "I'm here for you. Would you like to explore this further? 🌿",
      "That sounds important. Can you tell me more about how this affects you? 🌟",
      "I hear you. Your thoughts and feelings matter. What would help you most right now? 💙"
    ];
    response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }

  return response;
}


function toggleChat() {
  chatbotBox.style.display = chatbotBox.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";
  const crisisKeywords = ['suicide', 'kill myself', 'end it all', 'want to die', 'better off dead'];
  const isCrisis = crisisKeywords.some(keyword => text.toLowerCase().includes(keyword));

  let reply;
  if (isCrisis) {
    reply = "🆘 I'm really concerned about you. Please reach out for immediate help:\n\n" +
      "• National Suicide Prevention Lifeline: 988 (24/7)\n" +
      "• Crisis Text Line: Text HOME to 741741\n" +
      "• Emergency Services: 911\n\n" +
      "Your life matters. Please talk to a professional. 💜";
  } else {
    const emotion = detectEmotion(text);
    reply = generateResponse(text, emotion);
  }
  setTimeout(() => {
    addMessage(reply, "bot");
  }, 600);
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});