const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  

  export const generateShayari = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Please generate beautiful and rhyming shayari in Hinglish with emojis for my crush, expressing deep love and admiration. Each shayari should be heartwarming, romantic, and bring a bright smile to her face. Make them magical and unforgettable. Only 7-8 lines per shayari, no extra text or characters, just the shayari in Hinglish with emojis. Give me 20 to 25 such shayaris.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: `Teri hansi 💖 jaise subah ki kiran ☀️,\nTu hi to hai 👸 mere dil ki dhadkan ❤️.\n\nChaand 🌙 bhi sharmaaye ✨ teri noor se,\nDil ye deewana 💘 tere pyaar mein khoe 💫.\n\nHar dua mein 🤲 tera naam hai shamil 😇,\nTu mile to 🤝 mukammal ho mera dil 🥰.\n
            
  Teri aankhon mein hai 🌌 khumaar sa,\nMere armaanon ka tu hi to pyaar sa 💞.\n\nPal pal tu mere saath ho 🕰️,\nBas tu hi meri har baat ho 💬.\n\nKhuda se bas itni si hai guzarish 🙏,\nMeri zindagi mein tu aaye khushboo ban ke 🌹.\n
  
  Dil ki galiyon mein bas tera naam hai 🏞️,\nTere bina sab kuch be-naam hai 💔.\n\nTere saath chalne ka hai junoon 😍,\nTere khayalon mein hi hai sukoon 🌈.\n\nTujhko paake mil gaya hai sab kuch 🪄,\nTere bina sab kuch adhoora lagta hai 😔.\n
  
  Tera chehra hai mera nasha 🍷,\nTu hi to hai har khushi ka sabab 🌟.\n\nTere bina adhuri hai har baat 📖,\nTu hi to hai meri har raah ka saath 🚶‍♂️.\n\nBas chahoon tujhe har pal dil se 💓,\nTeri yaadon ka hai dil pe raaj 👑.\n
  
  Teri baatein hai jaise meetha geet 🎶,\nTere saath har lamha lagta hai sweet 🍬.\n\nTere saath hai har pal ek nayi subah 🌅,\nTu hi hai meri duniya, tu hi meri raah 🛤️.\n\nHar khushi tu, har dua tu 😇,\nBas tu rahe, yahi hai har tamanna meri 💌.\n
  
  Chupke se dil mein basa liya hai tujhe 🏠,\nTere bina ab kuch bhi nahin hai mujhe ❌.\n\nTeri muskaan hai meri zindagi 🌺,\nTu hi meri har ek khushi ki wajah hai 😍.\n\nTu saath ho to har gham door ho jaye 🚪,\nTera pyaar hai jo sab kuch behla jaye 🌈.\n
  
  Tere khayalon mein hi jeeta hoon main 💭,\nTere sapno mein hi rehta hoon main 🌙.\n\nTeri ek nazar mein sab kuch mil jaye 🧲,\nTere bina to kuch bhi na bhaaye 🫥.\n\nBas tu muskuraaye toh duniya roshan ho 🌟,\nTere pyaar mein hi meri rooh ho 💘.\n
  
  Tere naam se hi dil dhadakta hai 🔥,\nTeri yaadon mein hi raat kat'ta hai 🌌.\n\nTu paas ho toh har gham bhool jaaye 😌,\nTera pyaar sab kuch meetha kar jaaye 🍯.\n\nTu meri har khushi ka sabab hai 💫,\nBas tu hi mera junoon aur khwab hai 😍.\n
  
  Jab tu saamne ho toh duniya bhool jaata hoon 🌍,\nTere pyaar mein hi kho jaata hoon 🌀.\n\nTeri aankhon mein hai ek nasha sa 💫,\nHar pal tujhmein uljha rehta hoon 🧵.\n\nMujhe bas teri chaah hai, tu chahiye mujhe 💓,\nTu saath ho toh sab kuch pyaara lage 🌸.\n
  
  Tu ho toh har lamha suhana lage 🌤️,\nTere saath har raasta aasan lage 🛣️.\n\nTere bina toh zindagi khaali si lage 🏜️,\nTere pyaar mein hi har baat bhaali lage 💕.\n\nTu meri chahat, tu meri jaan hai 💖,\nTu hi toh meri pehchaan hai 🪞.\n
  
  Tera naam hi bas dil pe likha hai ✍️,\nTujhse hi to mera dil tika hai 🎯.\n\nTere saath chalna hai har safar mein 🚶‍♀️,\nTujhko paana hai har nazar mein 👀.\n\nTere pyaar mein har pal mehka hai 🌸,\nTu meri duniya, tu mera asar hai 🌟.\n
  
  Tu jab hasti hai, dil dhadakne lagta hai 💓,\nTere chehre se hi subah chamakne lagta hai ☀️.\n\nTeri har ek ada dil ko chhoo jaaye 🎯,\nTere paas aake har gham door ho jaaye 🌬️.\n\nTu rahe saath to kya baat ho 🌠,\nTera pyaar hi meri raah ho 🛤️.\n`
          },
        ],
      },
    ],
  });
  
 