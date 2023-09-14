export const initialState = [
  {
    id: 1,
    title: "Earth Changes and Journey",
    color: "#A7F0F9",
    showOptions: false,
    posts: [
      {
        id: 1,
        title: "A Beautiful Scenery",
        date: new Date().toISOString(),
        image:
          "https://www.travelandleisure.com/thmb/WzL019sDotA4SIo4bacRrE4j_N0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/galapagos-islands-ecuador-GALAPA1104-d013219debf14369ab5039a4eafb496e.jpg",
        imageName: "Ecuador",
        description:
          "Lorem Ipsum is simply dummy text.  but also the leap into electronic typesetting.",
        likes: 1,
        isLiked: true,
        isBookMarked: true,
      },
      {
        id: 2,
        title: "Eiffel Tower,  Paris, France",
        date: new Date().toISOString(),
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrowMZojaOHH8Sl1S9Nzz56A_cvfSEesSnw&usqp=CAU",
        imageName: "Eiffel Tower",
        description:
          'Lost in the City of Lights ✨🗼 Captivated by the timeless beauty of the Eiffel Tower. Every intricate detail of this iconic landmark tells a story of art, history, and romance. Feeling grateful for the chance to witness its grandeur in person. #EiffelEnchantment #ParisDiaries #Wanderlust".',
        likes: 4,
        isLiked: false,
        isBookMarked: false,
      },
      {
        id: 3,
        title: "Nature's Palette",
        date: new Date().toISOString(),
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjq-Hg65hQOXapW3sLjKGj1px5dW0QAcoUBy1OdEtDL5Npy3yi1cvVB8mC9Me49Db-Wg&usqp=CAU",
        imageName: "Flower",
        description:
          " A stroll through the vibrant meadows, where every flower seems to have borrowed its hue from the rainbow. Nature truly is the world's most beautiful artist. 🌸🌼 #NatureColors #PaletteOfLife",
        likes: 10,
        isLiked: true,
        isBookMarked: false,
      },
      {
        id: 4,
        title: "Culinary Adventures",
        date: new Date().toISOString(),
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoyjtt7Gsab7ov500MHQU-rXBbRVp7AdPBw&usqp=CAU",
        imageName: "selfie",
        description:
          " Embarking on a gastronomic journey, one dish at a time. Exploring flavors, cultures, and the delightful artistry of food that brings us all together. 🍔🌮 #FoodieAdventures #TasteTheWorld",
        likes: 1,
        isLiked: false,
        isBookMarked: true,
      },
      {
        id: 5,
        title: "Lens of Gratitude",
        date: new Date().toISOString(),
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJPgVBUuL96CtJQhHLG1UePkC8VA5qPwGCA&usqp=CAU",
        imageName: "farming",
        description:
          "Framing life's small wonders, reminding us that there's beauty in the everyday. Gratitude turns ordinary moments into extraordinary blessings. 📸🙏 #GratefulHeart #EverydayMagic",
        likes: 2,
        isLiked: false,
        isBookMarked: false,
      },
    ],
  },
  {
    id: 2,
    title: "Eating Right",
    color: "#FFCC66",
    showOptions: false,
    posts: [
      {
        id: 1,
        title: "Savoring Every Bite",
        date: new Date().toISOString(),
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKVSb4CHkO5FFvvfwhIwG_UpIl7s2NvAIyg&usqp=CAU",
        imageName: "pizza",
        description:
          " A symphony of flavors on my plate, each bite telling a story of culinary craftsmanship. From sweet to savory, every taste sensation is a journey worth savoring. 🍽️👨‍🍳 #FoodJourney #TasteSymphony",
        likes: 5,
        isLiked: false,
        isBookMarked: false,
      },
      {
        id: 2,
        title: "Global Gastronomy",
        date: new Date().toISOString(),
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyWcjo6ELN6cnxtx_zx8a1ltOHsU6p6Fb8w&usqp=CAU",
        imageName: "egg",
        description:
          "Exploring the world one dish at a time. Today, it's a tantalizing Thai curry that transports me to the vibrant streets of Bangkok. Food is the passport to cultures far and wide. 🌍🍛 #GlobalFlavors #CulinaryExploration",
        likes: 3,
        isLiked: true,
        isBookMarked: false,
      },
      {
        id: 3,
        title: "Sunday Brunch Bliss",
        date: new Date().toISOString(),
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmXrmb3IAc4dA_4wOsvTaLK7rRT0A03GRZw&usqp=CAU",
        imageName: "weekend lunch",
        description:
          "Embracing the lazy Sunday vibes with a brunch spread that's both comforting and indulgent. A perfect blend of relaxation and deliciousness. 🥞☕ #SundayBrunch #LazyVibes",
        likes: 1,
        isLiked: false,
        isBookMarked: true,
      },
    ],
  },
  {
    id: 3,
    title: "Personal Life",
    color: "#FFAEC0",
    showOptions: false,
    posts: [
      {
        id: 1,
        title: "Daily Hangout",
        date: new Date().toISOString(),
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmXrmb3IAc4dA_4wOsvTaLK7rRT0A03GRZw&usqp=CAU",
        imageName: "weekend lunch",
        description: "Never feels like leaving that place, #Workaholic",
        likes: 1,
        isLiked: true,
        isBookMarked: true,
      },
    ],
  },
  {
    id: 4,
    title: "Sports and Workout",
    color: "#C5C5FC",
    showOptions: false,
    posts: [],
  },
];
