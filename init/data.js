const sampleListings = [
  // ==========================================
  // YOUR ORIGINAL DATA (With Higher Prices & Uncommented Categories)
  // ==========================================
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Malibu",
    country: "United States",
    category: "beachfront"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "New York City",
    country: "United States",
    category: "iconic-cities"
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Aspen",
    country: "United States",
    category: "mountains"
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Florence",
    country: "Italy",
    category: "trending"
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Portland",
    country: "United States",
    category: "camping"
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Cancun",
    country: "Mexico",
    category: "beachfront"
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Lake Tahoe",
    country: "United States",
    category: "mountains"
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Los Angeles",
    country: "United States",
    category: "trending"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Verbier",
    country: "Switzerland",
    category: "mountains"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "trending"
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Amsterdam",
    country: "Netherlands",
    category: "iconic-cities"
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Fiji",
    country: "Fiji",
    category: "beachfront"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWYjYXRpb25xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "trending"
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Boston",
    country: "United States",
    category: "iconic-cities"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Bali",
    country: "Indonesia",
    category: "beachfront"
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Banff",
    country: "Canada",
    category: "mountains"
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Miami",
    country: "United States",
    category: "trending"
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Phuket",
    country: "Thailand",
    category: "beachfront"
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "castles"
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 8500,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "trending"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Montana",
    country: "United States",
    category: "mountains"
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Mykonos",
    country: "Greece",
    category: "beachfront"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "camping"
  },
  {
    title: "Historic Cottage in Charleston",
    description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Charleston",
    country: "United States",
    category: "trending"
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Tokyo",
    country: "Japan",
    category: "iconic-cities"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "New Hampshire",
    country: "United States",
    category: "camping"
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 9500,
    location: "Maldives",
    country: "Maldives",
    category: "beachfront"
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Aspen",
    country: "United States",
    category: "mountains"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "beachfront"
  },

  // ==========================================
  // NEW ADDITIONS (With Increased Prices & Uncommented Categories)
  // ==========================================

  // --- BEACHFRONT ---
  {
    title: "Santorini Sunset Villa",
    description: "Perched on volcanic cliffs, this white-washed villa offers a private pool with direct vistas of Aegean tides.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=60" },
    price: 4500, location: "Santorini", country: "Greece", category: "beachfront"
  },
  {
    title: "Bora Bora Overwater Bungalow",
    description: "Direct ladder access into a crystal-clear turquoise lagoon. Gaze at marine life through your glass floor panel.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60" },
    price: 7500, location: "Bora Bora", country: "French Polynesia", category: "beachfront"
  },
  {
    title: "Maui Panoramic Ocean Penthouse",
    description: "Floor-to-ceiling glass doors open to sweeping sights of Pacific whale migration paths. Steps from black sands.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=60" },
    price: 4200, location: "Maui", country: "United States", category: "beachfront"
  },
  {
    title: "Amalfi Coast Cliffside Suite",
    description: "Dine on fresh seafood on your private terrace while looking down upon pastel colored shores and vintage speedboats.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60" },
    price: 4800, location: "Positano", country: "Italy", category: "beachfront"
  },
  {
    title: "Copacabana Vibrant Apartment",
    description: "Immerse your senses in samba rhythms right outside your window. Overlooks the world's most famous wave pattern boardwalk.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1483450388369-9ed95738483c?auto=format&fit=crop&w=800&q=60" },
    price: 2400, location: "Rio de Janeiro", country: "Brazil", category: "beachfront"
  },
  {
    title: "Zanzibar Spice Coast Villa",
    description: "An open-air architectural marvel featuring traditional Makuti thatched roofs and view of untamed Indian Ocean breaks.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=60" },
    price: 3100, location: "Matemwe", country: "Tanzania", category: "beachfront"
  },
  {
    title: "Phuket Hidden Cove Cabana",
    description: "Tucked behind a barrier of limestone rock structures, enjoy unmatched isolation along a strip of powder-soft white sand.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1589394815804-964ed7be2eb9?auto=format&fit=crop&w=800&q=60" },
    price: 3300, location: "Phuket", country: "Thailand", category: "beachfront"
  },
  {
    title: "Gold Coast Surfers Paradise Deck",
    description: "A premium modern skyscraper unit standing right on the edge of rolling Australian barrel waves.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=60" },
    price: 2800, location: "Queensland", country: "Australia", category: "beachfront"
  },
  {
    title: "Seychelles Granite Rock Estate",
    description: "Flanked by signature smooth boulders and pristine jungle paths leading straight into warm azure waves.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1473116763269-255410775467?auto=format&fit=crop&w=800&q=60" },
    price: 6800, location: "La Digue", country: "Seychelles", category: "beachfront"
  },
  {
    title: "Tulum Bohemian Eco-Palapa",
    description: "Fall asleep to crashing waves in a sustainable design space built completely using local timber and woven structures.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504150559411-2ef4fd934d9a?auto=format&fit=crop&w=800&q=60" },
    price: 2200, location: "Quintana Roo", country: "Mexico", category: "beachfront"
  },
  {
    title: "Ibiza Minimalist Beach Front",
    description: "Clean geometric modernism looking over a tranquil cove, perfect to watch spectacular Balearic sunsets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=800&q=60" },
    price: 4500, location: "Ibiza", country: "Spain", category: "beachfront"
  },
  {
    title: "Cape Town Atlantic Seaboard Villa",
    description: "Where dramatic mountain ridges meet cold deep blue ocean breaks. Heated pool ensures year-round comfort.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=60" },
    price: 3900, location: "Camps Bay", country: "South Africa", category: "beachfront"
  },

  // --- TRENDING ---
  {
    title: "Kyoto Machiya Bamboo Courtyard",
    description: "A meticulously updated historical town house blending classic tatami rooms with premium Western comforts.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=60" },
    price: 3400, location: "Kyoto", country: "Japan", category: "trending"
  },
  {
    title: "Reykjavik Glass Dome for Northern Lights",
    description: "Lie completely flat in a luxury bed while watching green aurora ribbons dance across the Arctic winter sky.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=800&q=60" },
    price: 5200, location: "Selfoss", country: "Iceland", category: "trending"
  },
  {
    title: "Marrakesh Luxury Riad Oasis",
    description: "Intricately hand-tiled mosaic plunge pool courtyards hidden safely away from the energetic souk market streets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=60" },
    price: 2850, location: "Marrakesh", country: "Morocco", category: "trending"
  },
  {
    title: "Cappadocia Cave Chamber with Balcony",
    description: "Wake up early to witness hundreds of colorful hot air balloons float directly past your stone window archway.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=60" },
    price: 3600, location: "Goreme", country: "Turkey", category: "trending"
  },
  {
    title: "Chefchaouen Dream Blue Outpost",
    description: "A gorgeous multi-level dwelling completely painted in signature rich shades of deep indigo and striking cerulean.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1549918838-750729526784?auto=format&fit=crop&w=800&q=60" },
    price: 1900, location: "Chefchaouen", country: "Morocco", category: "trending"
  },
  {
    title: "Lisbon Pastel Street Studio",
    description: "Classic building with beautiful vintage tiles located on the exact route of the famous yellow Tram 28.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=60" },
    price: 2100, location: "Alfama", country: "Portugal", category: "trending"
  },
  {
    title: "Oaxaca Artisan Cultural House",
    description: "Adorned with local handwoven textiles and red clay pottery accents, complete with a private mezcal bar room.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1465256410760-10485d5be681?auto=format&fit=crop&w=800&q=60" },
    price: 2150, location: "Oaxaca City", country: "Mexico", category: "trending"
  },
  {
    title: "Seoul Sleek Cyberpunk Highrise",
    description: "An ultra-modern automated smart apartment putting bright neon signs and bustling urban food markets at your fingertips.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=60" },
    price: 3200, location: "Gangnam", country: "South Korea", category: "trending"
  },
  {
    title: "Banff Glacial Edge Cabin",
    description: "Experience massive internet popularity firsthand in this cabin facing turquoise waters and towering peaks.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=60" },
    price: 3900, location: "Alberta", country: "Canada", category: "trending"
  },
  {
    title: "Havana Retro Colonial Mansion",
    description: "High ceilings, Spanish columns, and brightly painted mid-century classic cars passing by below.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505051508008-923feaf90180?auto=format&fit=crop&w=800&q=60" },
    price: 2400, location: "Old Havana", country: "Cuba", category: "trending"
  },
  {
    title: "Sydney Harbour Panorama Loft",
    description: "Watch iconic architectural shapes catch the morning sun over deep blue sailing lanes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=60" },
    price: 4800, location: "Sydney", country: "Australia", category: "trending"
  },
  {
    title: "Berlin Industrial Tech Loft",
    description: "Raw concrete finishes and massive steel framed windows inside a converted printing warehouse district.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=60" },
    price: 2450, location: "Kreuzberg", country: "Germany", category: "trending"
  },

  // --- MOUNTAINS ---
  {
    title: "Swiss Alps Pinnacle Chalet",
    description: "Perched high above timber limits, offering unhindered, massive views of the iconic Matterhorn rock peak.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=800&q=60" },
    price: 5800, location: "Zermatt", country: "Switzerland", category: "mountains"
  },
  {
    title: "Dolomites A-Frame Glass Retreat",
    description: "Dramatically steep, soaring timber design mirrors the jagged, pale stone cliffs towering right above it.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=800&q=60" },
    price: 3600, location: "Cortina", country: "Italy", category: "mountains"
  },
  {
    title: "Queenstown Fjord View Lodge",
    description: "Gaze deep into pristine, winding glacial valley systems carved right into the Southern Alpine spine.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508873696983-2df5198e4009?auto=format&fit=crop&w=800&q=60" },
    price: 3900, location: "Otago", country: "New Zealand", category: "mountains"
  },
  {
    title: "Patagonia Granite Wall Outpost",
    description: "The ultimate edge-of-the-world lodging cabin located steps away from legendary wind-swept trail paths.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=60" },
    price: 4300, location: "El Chalten", country: "Argentina", category: "mountains"
  },
  {
    title: "Mount Fuji Timber Sanctuary",
    description: "Soak in a traditional hinoki wood bath smelling of pine while a snow-capped symmetrical volcano looms behind.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=60" },
    price: 4100, location: "Shizuoka", country: "Japan", category: "mountains"
  },
  {
    title: "Chamonix Glacier Edge Chalet",
    description: "Watch blue ice formations crawl slowly down valley gaps from your steaming hot outdoor cedar tub.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&w=800&q=60" },
    price: 4600, location: "Chamonix", country: "France", category: "mountains"
  },
  {
    title: "Andes Skyhigh Cloud Residence",
    description: "Perched above the standard fog blankets, watch early morning sun break over massive ancient rock slopes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60" },
    price: 2800, location: "Cusco Region", country: "Peru", category: "mountains"
  },
  {
    title: "Whistler Timber Peak Mansion",
    description: "Massive rustic stone fireplaces and heavy exposed log supports provide ultimate ski lifestyle living space.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=60" },
    price: 4900, location: "British Columbia", country: "Canada", category: "mountains"
  },
  {
    title: "Colorado Aspen Forest Escape",
    description: "Watch thin white tree trunks shimmer gold in autumn right outside a beautiful mountain cabin.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=800&q=60" },
    price: 3200, location: "Telluride", country: "United States", category: "mountains"
  },
  {
    title: "Himalayan Ridge Stone Retreat",
    description: "Unparalleled scale where deep valleys plunge out of sight beneath the highest snow walls on earth.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60" },
    price: 2200, location: "Manali", country: "India", category: "mountains"
  },
  {
    title: "Norwegian Fjord Cliff Lookout",
    description: "A dark steel-and-glass cabin looking out over sheer vertical drops into deep green glacier water lanes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=60" },
    price: 3800, location: "Geiranger", country: "Norway", category: "mountains"
  },
  {
    title: "Icelandic Volcanic Ridge Outpost",
    description: "Surrounded completely by black volcanic ash fields and jagged craters under shifting stormy skies.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
    price: 3400, location: "Kerlingarfjoll", country: "Iceland", category: "mountains"
  },

  // --- ICONIC CITIES ---
  {
    title: "Paris Eiffel Tower View Studio",
    description: "Open your classic wrought-iron balcony doors to find the majestic iron lattice structure towering directly in front of you.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60" },
    price: 4100, location: "Paris", country: "France", category: "iconic-cities"
  },
  {
    title: "London Historic Thames Flat",
    description: "Watch the iconic red double-decker buses crawl across Tower Bridge from your spacious living room windows.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?auto=format&fit=crop&w=800&q=60" },
    price: 3800, location: "London", country: "United Kingdom", category: "iconic-cities"
  },
  {
    title: "Manhattan Glass Cloud Skyscraper",
    description: "A massive central park views spread like a green velvet rug beneath your sky-high bedroom glass floor.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=60" },
    price: 6500, location: "New York City", country: "United States", category: "iconic-cities"
  },
  {
    title: "Rome Piazza Navona Duplex",
    description: "Step out onto ancient brick pathways directly next to marble fountains and incredible Italian cafes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60" },
    price: 3100, location: "Rome", country: "Italy", category: "iconic-cities"
  },
  {
    title: "Barcelona Gaudi District Flat",
    description: "Features gorgeous hand-carved stone balconies mirroring the flowing organic lines of nearby architecture masterpieces.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=60" },
    price: 2750, location: "Barcelona", country: "Spain", category: "iconic-cities"
  },
  {
    title: "Venice Grand Canal Palazzo Grand Suite",
    description: "Watch sleek black gondolas slide down historic waterways directly underneath your decorated palace window arch.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=60" },
    price: 4500, location: "Venice", country: "Italy", category: "iconic-cities"
  },
  {
    title: "Singapore Marina Skypool Apartment",
    description: "Swim right along the edge of a massive architectural rooftop pool structure looking down over a futuristic city.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=60" },
    price: 5200, location: "Marina Bay", country: "Singapore", category: "iconic-cities"
  },
  {
    title: "Istanbul Bosphorus View Mansion",
    description: "Watch international ships sail between two entirely different continents right from your breakfast table window.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=60" },
    price: 3200, location: "Istanbul", country: "Turkey", category: "iconic-cities"
  },
  {
    title: "Hong Kong Neon Harbour Highrise",
    description: "Watch a dazzling night laser show cross over deep water ports from your high altitude smart apartment.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=60" },
    price: 4300, location: "Kowloon", country: "Hong Kong", category: "iconic-cities"
  },
  {
    title: "San Francisco Golden Gate Vista",
    description: "Watch rolling white fog banks cascade down over iconic international orange suspension cable bridges.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60" },
    price: 3950, location: "San Francisco", country: "United States", category: "iconic-cities"
  },
  {
    title: "Cape Town Table Mountain Vista",
    description: "Look straight up at the massive flat sandstone plateau dominating the skyline behind a gorgeous modern loft.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=60" },
    price: 2800, location: "Cape Town", country: "South Africa", category: "iconic-cities"
  },
  {
    title: "Rio de Janeiro Christ Lookout",
    description: "High altitude glass home oriented perfectly toward iconic monument mountains and glittering coastal cities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516306580629-3332463fe80f?auto=format&fit=crop&w=800&q=60" },
    price: 3400, location: "Rio de Janeiro", country: "Brazil", category: "iconic-cities"
  },
  {
    title: "Prague Old Town Clock Square",
    description: "Listen to medieval chimes call across cobblestone roads lined with gothic towers and cozy hidden basement pubs.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1541343072874-3ef321dd676f?auto=format&fit=crop&w=800&q=60" },
    price: 2350, location: "Prague", country: "Czech Republic", category: "iconic-cities"
  },

  // --- CAMPING ---
  {
    title: "Yosemite Redwood Glamping Dome",
    description: "Luxury geometric structure hiding safely away inside a forest of ancient towering trees.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=60" },
    price: 1150, location: "California", country: "United States", category: "camping"
  },
  {
    title: "Sahara Desert Luxury Tent Camp",
    description: "Ride beautiful camels out into colossal orange wind sand dunes to discover premium rug-lined desert camps.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=60" },
    price: 1850, location: "Merzouga", country: "Morocco", category: "camping"
  },
  {
    title: "Wadi Rum Martian Dome Outpost",
    description: "Live on another world entirely inside clear glass structures sitting on vast expanses of red sandstone desert floors.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=60" },
    price: 2200, location: "Wadi Rum", country: "Jordan", category: "camping"
  },
  {
    title: "Serengeti Starbed Canvas Pavilion",
    description: "Sleep safely under crisp mosquito netting elevated on timber structures to watch wild predators move beneath stars.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=60" },
    price: 2900, location: "Serengeti", country: "Tanzania", category: "camping"
  },
  {
    title: "Swedish Lapland Arctic Tree Canopy",
    description: "Suspended safely off the cold forest floor, watch thick snowflakes stack quietly over wild dark pine thickets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60" },
    price: 1650, location: "Norrbotten", country: "Sweden", category: "camping"
  },
  {
    title: "Australian Outback Red Ridge Safari",
    description: "Wake to the unique calls of local birds in an expansive isolated luxury canvas station house.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=60" },
    price: 1400, location: "Northern Territory", country: "Australia", category: "camping"
  },
  {
    title: "Patagonia Windbreaker Dome Basecamp",
    description: "Engineered specifically to handle fierce southern mountain winds while providing warm wood stove comforts.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
    price: 1950, location: "Torres del Paine", country: "Chile", category: "camping"
  },
  {
    title: "Bali Jungle Rice Terrace Nest",
    description: "An incredible woven bamboo sphere hanging directly over emerald green cascading river valley dropoffs.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60" },
    price: 1250, location: "Ubud", country: "Indonesia", category: "camping"
  },
  {
    title: "Zion Canyon Red Wall Outlook",
    description: "A gorgeous luxury canvas site nestled tight against 2,000 foot high blazing orange Navajo sandstone columns.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=60" },
    price: 1580, location: "Utah", country: "United States", category: "camping"
  },
  {
    title: "Vancouver Island Rainforest Canopy",
    description: "Giant cedar tree frames hold clear hanging spheres that sway gently to the rhythm of coastal storm patterns.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=60" },
    price: 1390, location: "British Columbia", country: "Canada", category: "camping"
  },
  {
    title: "Andean Sacred Valley Tents",
    description: "Look up at crisp clean thin mountain air paths from inside heavily insulated custom canvas shelters.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60" },
    price: 1620, location: "Urumbamba", country: "Peru", category: "camping"
  },
  {
    title: "Costa Rica Volcano Edge Ecocamp",
    description: "Watch smoke plumes trace the sky over towering ash vents from safety inside a luxury platform tent.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=60" },
    price: 1300, location: "Arenal", country: "Costa Rica", category: "camping"
  },
  {
    title: "Scottish Highlands Moorland Hideaway",
    description: "Surrounded by rich purple heather hills and grazing highland cattle under misty mountain backdrops.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
    price: 1100, location: "Isle of Skye", country: "United Kingdom", category: "camping"
  },
  {
    title: "Mongolian Steppe Nomadic Ger",
    description: "Authentic felt-wrapped round structures offering genuine open-fire hospitality across infinite grassland expanses.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=60" },
    price: 1050, location: "Karakorum", country: "Mongolia", category: "camping"
  },
  {
    title: "Amazon River Floating Eco-Raft",
    description: "Fall asleep to a rich symphony of rain-forest insect calls right on a completely secure river channel raft structure.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60" },
    price: 1420, location: "Iquitos", country: "Peru", category: "camping"
  },

  // --- CASTLES ---
  {
    title: "Loire Valley Renaissance Estate",
    description: "Incredible classical French architecture complete with pristine geometric hedges and a massive stone ballroom.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=800&q=60" },
    price: 6500, location: "Amboise", country: "France", category: "castles"
  },
  {
    title: "Neuschwanstein Alpine Fairytale Fortress",
    description: "Soaring white limestone spires look out over dramatic mountain gaps and dense deep pine forests.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60" },
    price: 7800, location: "Bavaria", country: "Germany", category: "castles"
  },
  {
    title: "Irish Gothic Waterfront Moat Castle",
    description: "Thick ivy-covered gray stone defensive towers flanking a deep black mountain water moat network.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1546811754-a6b72c5c0094?auto=format&fit=crop&w=800&q=60" },
    price: 5900, location: "Galway", country: "Ireland", category: "castles"
  },
  {
    title: "Tuscan Watchtower Citadel",
    description: "A defensive hill stronghold boasting 360 degree panoramic views over dusty green olive orchards.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 4500, location: "Siena", country: "Italy", category: "castles"
  },
  {
    title: "English Tudor Rose Manor",
    description: "Beautiful exposed oak interior beams and sprawling colorful rose gardens showcase timeless historical style.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=60" },
    price: 5100, location: "Cotswolds", country: "United Kingdom", category: "castles"
  },
  {
    title: "Japanese Samurai Hillside Shiro",
    description: "Beautiful curved sweeping multi-tiered dark tile roofs standing proudly above rows of bright cherry blossoms.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=60" },
    price: 5600, location: "Himeji Region", country: "Japan", category: "castles"
  },
  {
    title: "Spanish Moorish Alcazar Palace",
    description: "Incredible intricate keyhole stone arches frame gorgeous reflecting pools inside private brick courtyards.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=60" },
    price: 6200, location: "Andalusia", country: "Spain", category: "castles"
  },
  {
    title: "Austrian Lakefront Keep",
    description: "Towering ancient stone walls rise straight up out of dark glacial water mountain lake basins.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=800&q=60" },
    price: 5300, location: "Hallstatt Region", country: "Austria", category: "castles"
  },
  {
    title: "Portuguese Romanticist Pastel Palace",
    description: "Bright yellow and striking pink dome structures rising out of high mountain cloud forest systems.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=60" },
    price: 5900, location: "Sintra", country: "Portugal", category: "castles"
  },
  {
    title: "Transylvanian Gothic Cliff Citadel",
    description: "Thick ominous stone towers sitting high on dramatic narrow peaks surrounded by dense dark forests.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60" },
    price: 4200, location: "Brasov", country: "Romania", category: "castles"
  },
  {
    title: "Czech Baroque Royal Chateau",
    description: "Breathtaking gold-leaf ceiling frescos mirror formal symmetry manicured gardens out front.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1541343072874-3ef321dd676f?auto=format&fit=crop&w=800&q=60" },
    price: 4800, location: "Bohemia", country: "Czech Republic", category: "castles"
  },
  {
    title: "Belgian Water Moat Palace",
    description: "Stately red-brick towers beautifully reflected in a perfectly still mirror-like canal entry ring.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
    price: 4450, location: "Flanders", country: "Belgium", category: "castles"
  },
  {
    title: "Scottish Coastal Crag Ruin-Suite",
    description: "An incredibly restored living wing built directly into a historic fortress facing North Sea breakers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
    price: 4100, location: "Aberdeenshire", country: "United Kingdom", category: "castles"
  },
  {
    title: "Danish Renaissance Island Fortress",
    description: "Imposing green copper roofs highlight this magnificent sandstone structure surrounded completely by sea lanes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60" },
    price: 5400, location: "Hillerod", country: "Denmark", category: "castles"
  },
  {
    title: "Italian Lakes Fortified Island",
    description: "An exclusive defensive stone compound taking up an entire miniature island in the middle of alpine waters.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=60" },
    price: 8500, location: "Lake Maggiore", country: "Italy", category: "castles"
  },
  {
    title: "Swiss Lakeside Chillon Bastion",
    description: "Look across pristine open water horizons right from thick stone windows inside structural mountain keeps.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=800&q=60" },
    price: 5100, location: "Veytaux", country: "Switzerland", category: "castles"
  },
  {
    title: "Swedish Imperial Lakeside Estate",
    description: "Stately golden facades accented by classical white trim columns overlook pristine Baltic waterways.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60" },
    price: 4900, location: "Drottningholm", country: "Sweden", category: "castles"
  },


// ==========================================
  // ROAMIO EXPLORER CUSTOM CATEGORIES (80 LISTINGS)
  // ==========================================

  // --- TEA TRAILS & ESTATES (20 Listings) ---
  {
    title: "Munnar Misty Leaf Bungalow",
    description: "Wake up above active terraced mountain rows. Package includes sunrise picking walks and custom tasting pots.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=800&q=60" },
    price: 3200, location: "Munnar", country: "India", category: "tea-trails"
  },
  {
    title: "Darjeeling Heritage Planter Retreat",
    description: "A meticulously restored British colonial estate featuring grand wood fireplaces and direct Himalayan panoramas.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=60" },
    price: 4500, location: "Darjeeling", country: "India", category: "tea-trails"
  },
  {
    title: "Assam Velvet Valley Manor",
    description: "Deep in the heritage lowlands, this luxury manor boasts heavy teak floors and private riverbank tea sessions.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=60" },
    price: 3900, location: "Jorhat", country: "India", category: "tea-trails"
  },
  {
    title: "Shizuoka Emerald Slope Eco-Hut",
    description: "Clean minimalist design nestled right against vibrant bright green geometric Japanese tea fields facing Mt. Fuji.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=60" },
    price: 4200, location: "Shizuoka", country: "Japan", category: "tea-trails"
  },
  {
    title: "Ceylon High-Grown Vista Chalet",
    description: "Perched high in the mists of the Sri Lankan central crags. Features wrap-around decks facing sweeping green tea valleys.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=60" },
    price: 3600, location: "Nuwara Eliya", country: "Sri Lanka", category: "tea-trails"
  },
  {
    title: "Uji Traditional Matcha Sanctuary",
    description: "Classic sliding shoji panels opening directly to a historic bamboo garden and stone tea brewing pavilion.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=60" },
    price: 5200, location: "Uji", country: "Japan", category: "tea-trails"
  },
  {
    title: "Cameron Highlands Mossy Ridge Lodge",
    description: "Charming brick bungalow enveloped by cool equatorial mountain air and massive undulating picking hills.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=60" },
    price: 2800, location: "Pahang", country: "Malaysia", category: "tea-trails"
  },
  {
    title: "Kangra Valley Snowpeak Estate",
    description: "Watch the dramatic white Dhauladhar rock walls tower behind miles of peaceful mountain tea plots.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=60" },
    price: 3100, location: "Palampur", country: "India", category: "tea-trails"
  },
  {
    title: "Hangzhou Dragon Well Pavilions",
    description: "Dine on fresh tea-infused culinary delicacies right on the edge of the iconic historical Longjing fields.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=60" },
    price: 4800, location: "Hangzhou", country: "China", category: "tea-trails"
  },
  {
    title: "Wuyi Mountain Rock Tea Cabin",
    description: "Tucked inside dramatic vertical river gaps, perfect for explorers tracing ancient rare oolong varieties.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60" },
    price: 4300, location: "Fujian", country: "China", category: "tea-trails"
  },
  {
    title: "Wayanad Forest Border Plantation House",
    description: "Where thick Western Ghats jungle ecosystems smoothly transition into neat, sweet-smelling tea shrub fields.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1546955121-d0ba64961933?auto=format&fit=crop&w=800&q=60" },
    price: 2900, location: "Kerala", country: "India", category: "tea-trails"
  },
  {
    title: "Azores Volcanic Slope Estate",
    description: "One of Europe’s oldest active coastal fields, looking straight out over deep blue Atlantic tides.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=60" },
    price: 3800, location: "Sao Miguel", country: "Portugal", category: "tea-trails"
  },
  {
    title: "Nandi Hills Crimson Sunrise Outpost",
    description: "High Kenyan elevations produce bold golden tones. Enjoy modern container architectures with rich wooden decks.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
    price: 2700, location: "Highlands", country: "Kenya", category: "tea-trails"
  },
  {
    title: "Ooty Terraced Horizon Retreat",
    description: "Classic stone cottage structured at the apex of vast stepping fields. Features antique cast iron bed frames.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60" },
    price: 2500, location: "Ooty", country: "India", category: "tea-trails"
  },
  {
    title: "Boseong Green Arc Eco-Lodge",
    description: "Immersive curved wooden architectural pod sitting safely inside South Korea’s most stunning green landscape tunnels.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=60" },
    price: 3400, location: "Boseong", country: "South Korea", category: "tea-trails"
  },
  {
    title: "Alishan Cloud Mist Sanctuary",
    description: "High mountain oolong paradise where dense white alpine fog blankets the crops perfectly every afternoon.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
    price: 4100, location: "Chiayi County", country: "Taiwan", category: "tea-trails"
  },
  {
    title: "Rize Black Sea Coastal Plantation",
    description: "Perched dramatically above Turkish alpine waters, offering strong brews served in classic delicate glass tulips.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=60" },
    price: 2300, location: "Rize", country: "Turkey", category: "tea-trails"
  },
  {
    title: "Sylhet Rain-Fed Green Basin",
    description: "Rich tropical flats covered in ancient premium tea trees, accompanied by private guided harvesting safaris.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=60" },
    price: 2100, location: "Sylhet", country: "Bangladesh", category: "tea-trails"
  },
  {
    title: "Malawi Thyolo Mountain Homestead",
    description: "A gorgeous, deep vintage tin-roofed plantation house tracking decades of dark African tea processing history.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=60" },
    price: 3300, location: "Thyolo", country: "Malawi", category: "tea-trails"
  },
  {
    title: "Idukki Gorge Side Shrub Cabana",
    description: "Watch rushing mountain rivers plunge beneath massive fields of aromatic, high-density green picking bushes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60" },
    price: 2950, location: "Kerala", country: "India", category: "tea-trails"
  },

  // --- SCHOLAR'S RETREATS (20 Listings) ---
  {
    title: "Oxford Old Brick Library Chamber",
    description: "Surround yourself with floor-to-ceiling vintage leather books, massive oak tables, and classic green glass lamps.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=60" },
    price: 3800, location: "Oxford", country: "United Kingdom", category: "scholars-retreats"
  },
  {
    title: "Kyoto Philosophical Slate Studio",
    description: "A dark wood architectural masterpiece providing extreme quietness, built-in study desks, and ink stone supplies.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=60" },
    price: 3400, location: "Kyoto", country: "Japan", category: "scholars-retreats"
  },
  {
    title: "Boston Literary Brick Loft",
    description: "Exposed beams, huge industrial desks, typewriter rentals, and ultra high-speed enterprise fiber connections.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60" },
    price: 3100, location: "Cambridge", country: "United States", category: "scholars-retreats"
  },
  {
    title: "Edinburgh Gothic Archive Suite",
    description: "Moody, dark scholarly tones looking over ancient dark stone architecture. Includes a private record player corner.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60" },
    price: 2900, location: "Midlothian", country: "United Kingdom", category: "scholars-retreats"
  },
  {
    title: "Heidelberg Riverside Think-Tank",
    description: "A classic academic refuge along the Neckar river featuring maps, stellar Wi-Fi, and deep comfortable armchairs.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60" },
    price: 2600, location: "Heidelberg", country: "Germany", category: "scholars-retreats"
  },
  {
    title: "New England Forest Writing Cocoon",
    description: "A completely silent black architectural cabin featuring massive windows to stare out into empty birch tree stands.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60" },
    price: 2200, location: "Vermont", country: "United States", category: "scholars-retreats"
  },
  {
    title: "Prague Alchemist Stone Chamber",
    description: "Heavy dark wood support columns and iron fixtures preserve ultimate authentic old-world intellectual aesthetics.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1541343072874-3ef321dd676f?auto=format&fit=crop&w=800&q=60" },
    price: 2400, location: "Old Town", country: "Czech Republic", category: "scholars-retreats"
  },
  {
    title: "Sorbonne Academic Quarter Den",
    description: "Classic high Parisian ceilings paired with deep ink-stained workspace elements and massive windows.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60" },
    price: 3500, location: "Paris", country: "France", category: "scholars-retreats"
  },
  {
    title: "Bologna Portico Scholar Duplex",
    description: "Live right inside Europe's oldest university hub, featuring terracotta tiled balconies and reference book walls.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60" },
    price: 2700, location: "Bologna", country: "Italy", category: "scholars-retreats"
  },
  {
    title: "Salamanca Sandstone Cloister Loft",
    description: "Beautiful geometric stone accents provide cooling interior environments perfect for deep focus logic design.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=60" },
    price: 2550, location: "Castile and Leon", country: "Spain", category: "scholars-retreats"
  },
  {
    title: "Dublin Trinity Quarter Studio",
    description: "Rich green velvet upholstery matches heavy hardwood desks situated steps from world-famous legal libraries.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1546811754-a6b72c5c0094?auto=format&fit=crop&w=800&q=60" },
    price: 2800, location: "Dublin", country: "Ireland", category: "scholars-retreats"
  },
  {
    title: "Coimbra River-View Study Keep",
    description: "Perched high on steep historic university hills, offering endless horizons for creative writers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=60" },
    price: 2100, location: "Coimbra", country: "Portugal", category: "scholars-retreats"
  },
  {
    title: "Cape Town Coastline Mind Studio",
    description: "Floor-to-ceiling glass desks allow creators to look out over stormy oceans to spark big conceptual breakthroughs.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=60" },
    price: 2650, location: "Sea Point", country: "South Africa", category: "scholars-retreats"
  },
  {
    title: "Vienna Ringstrasse Grand Cabinet",
    description: "Stately classical lines, high arched plaster moldings, and an elegant grand piano for study breaks.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=800&q=60" },
    price: 3900, location: "Vienna", country: "Austria", category: "scholars-retreats"
  },
  {
    title: "Melbourne Laneway Creative Hideout",
    description: "Industrial steel fixtures keep things grounded while top-tier coffee makers feed long nighttime debugging grinds.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=60" },
    price: 2300, location: "Victoria", country: "Australia", category: "scholars-retreats"
  },
  {
    title: "Stockholm Nordic Silence Villa",
    description: "Clean ash timber surfaces and massive ergonomic seating options keep your posture fresh through marathon sessions.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60" },
    price: 3200, location: "Stockholm Archipelago", country: "Sweden", category: "scholars-retreats"
  },
  {
    title: "Chicago Architecture Quad Loft",
    description: "Massive drawing boards and triple monitor workstations cater perfectly to technical digital nomads.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=60" },
    price: 2950, location: "Chicago", country: "United States", category: "scholars-retreats"
  },
  {
    title: "Montreal Old Quarter Stone Nest",
    description: "Charming thick French colonial stone walls completely shut out street sounds for absolute deep focus.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60" },
    price: 2450, location: "Old Montreal", country: "Canada", category: "scholars-retreats"
  },
  {
    title: "San Francisco Pacific Heights Den",
    description: "A gorgeous bay-windowed workspace overlooking technical valley coastlines and rolling white mist sheets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60" },
    price: 4400, location: "San Francisco", country: "United States", category: "scholars-retreats"
  },
  {
    title: "Georgetown Historic Brick Haven",
    description: "Classic Ivy League charm boasting heavy brass lighting systems, premium stationery kits, and deep quietude.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=60" },
    price: 3300, location: "Washington DC", country: "United States", category: "scholars-retreats"
  },

  // --- WILD & OUTPOST STAYS (20 Listings) ---
  {
    title: "Serengeti Ridge Safari Pavilion",
    description: "Luxury canvas roof system standing high on timber poles over a vital active wildlife watering path.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=60" },
    price: 5500, location: "Serengeti", country: "Tanzania", category: "wild-outposts"
  },
  {
    title: "Kruger Elevated Predator Watchtower",
    description: "Sleep safely twenty feet in the air while elephants and lions pass openly beneath your steel support grid.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=60" },
    price: 6200, location: "Mpumalanga", country: "South Africa", category: "wild-outposts"
  },
  {
    title: "Ranthambore Tiger Border Outpost",
    description: "Rugged stone fortress styling meets luxury glamping tents on the absolute edge of ancient hunting grounds.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=60" },
    price: 4800, location: "Rajasthan", country: "India", category: "wild-outposts"
  },
  {
    title: "Amazon Canopy Suspended Sphere",
    description: "Live inside the primary deep jungle network surrounded completely by macaws and dense green river loops.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60" },
    price: 3600, location: "Loreto Region", country: "Peru", category: "wild-outposts"
  },
  {
    title: "Outback Isolated Crimson Station",
    description: "Miles of raw red dust plains circle this modern corrugated steel outpost under unmatched starlight paths.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=60" },
    price: 2900, location: "Red Centre", country: "Australia", category: "wild-outposts"
  },
  {
    title: "Costa Rica Jungle Volcano Palapa",
    description: "Listen to geothermal vents hiss and exotic frogs call out from your deep open timber eco-station house.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=60" },
    price: 3100, location: "Arenal National Park", country: "Costa Rica", category: "wild-outposts"
  },
  {
    title: "Patagonia Extreme Wind Shelter",
    description: "Geodesic high-tensile structures designed specifically to face massive freezing sub-polar storm fronts safely.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
    price: 4300, location: "Magallanes", country: "Chile", category: "wild-outposts"
  },
  {
    title: "Wadi Rum Red Sand Fortress",
    description: "Incredible geometric glass blocks anchoring deep out in a vast lunar landscape of sandstone towers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=60" },
    price: 3900, location: "Aqaba Governorate", country: "Jordan", category: "wild-outposts"
  },
  {
    title: "Alaskan Tundra Grizzly Station",
    description: "Heavy triple-insulated timber walls look out safely over massive open glacial river valley crossing paths.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=800&q=60" },
    price: 5100, location: "Denali Den", country: "United States", category: "wild-outposts"
  },
  {
    title: "Sahara Nomadic Dune Pavilion",
    description: "Premium camel-hair tents lined with massive woven rugs sitting deep inside active golden sand structures.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=60" },
    price: 3400, location: "Erg Chebbi", country: "Morocco", category: "wild-outposts"
  },
  {
    title: "Finnish Taiga Wolf Cabin",
    description: "Equipped with specialized sound-amplification recording systems to capture haunting night predator packs safely.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60" },
    price: 4600, location: "Kainuu Region", country: "Finland", category: "wild-outposts"
  },
  {
    title: "Kaziranga Elevated Wetland Deck",
    description: "Look straight down into rich marshes holding giant prehistoric rhinos from your high bamboo porch.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=60" },
    price: 3800, location: "Assam", country: "India", category: "wild-outposts"
  },
  {
    title: "Borneo Primitive River Station",
    description: "Deep, raw jungle wilderness setting matching basic high-grade solar infrastructure for serious pathfinders.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=60" },
    price: 2750, location: "Sarawak", country: "Malaysia", category: "wild-outposts"
  },
  {
    title: "Galapagos Volcanic Beach Outpost",
    description: "Step over ancient black marine iguanas directly out of your rugged sustainable driftwood cabin entry.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60" },
    price: 5800, location: "Isabela Island", country: "Ecuador", category: "wild-outposts"
  },
  {
    title: "Namib Desert Starbed Platform",
    description: "An incredible roofless structural block built specifically for counting deep galaxy paths over dead trees.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=60" },
    price: 4900, location: "Sossusvlei", country: "Namibia", category: "wild-outposts"
  },
  {
    title: "Pantanal Jaguar Swamp Oasis",
    description: "Accessible completely by custom airboat routes, providing raw views into massive river hunting zones.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60" },
    price: 5200, location: "Mato Grosso", country: "Brazil", category: "wild-outposts"
  },
  {
    title: "Swedish Forest Primitive Sphere",
    description: "Zero cellular connections paired with high-end interior stoves and private woodcutting blocks.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=60" },
    price: 2100, location: "Norrland", country: "Sweden", category: "wild-outposts"
  },
  {
    title: "Vancouver Island Wilderness Float",
    description: "A completely aquatic canvas structure tracking migratory whale paths along deep freezing channels.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60" },
    price: 4400, location: "Tofino Coast", country: "Canada", category: "wild-outposts"
  },
  {
    title: "Gobi Desert Horizon Ger",
    description: "Traditional circular felt homes positioned out on endless gravel steppes under massive open skies.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=800&q=60" },
    price: 2350, location: "Omnogovi", country: "Mongolia", category: "wild-outposts"
  },
  {
    title: "Gir Forest Lion Border Cabin",
    description: "Thick natural log walls situated inside the exclusive dry deciduous habitat zone of rare big cats.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1546955121-d0ba64961933?auto=format&fit=crop&w=800&q=60" },
    price: 3500, location: "Gujarat", country: "India", category: "wild-outposts"
  },

  // --- HIGH-ALTITUDE HAVENS (20 Listings) ---
  {
    title: "Spiti Valley Mud-Brick Monastery Stay",
    description: "Live 14,000 feet high inside a fortified desert village. Includes wood fires and intense stargazing setups.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=60" },
    price: 2400, location: "Kaza Region", country: "India", category: "high-altitude"
  },
  {
    title: "Swiss Alps Extreme Jagged Ridge Chalet",
    description: "Perched high past timber limits, watch towering blue glacier walls break directly from your heated deck.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=800&q=60" },
    price: 5900, location: "Zermatt", country: "Switzerland", category: "high-altitude"
  },
  {
    title: "Leh Himalayan Glass Observatory",
    description: "Triple-paned automated smart glass dome looking out over pristine high high-altitude mountain deserts.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60" },
    price: 4600, location: "Ladakh", country: "India", category: "high-altitude"
  },
  {
    title: "Dolomites Sharp Peak A-Frame",
    description: "Dramatically vertical timber design standing right beneath massive sheer pale vertical stone pillars.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=800&q=60" },
    price: 3800, location: "Cortina d'Ampezzo", country: "Italy", category: "high-altitude"
  },
  {
    title: "Andean Skyhigh Cloud Palace",
    description: "Look straight down at dense low-level valley fog formations from your luxury polished stone chalet.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60" },
    price: 3300, location: "Cusco Highlands", country: "Peru", category: "high-altitude"
  },
  {
    title: "Chamonix Mont Blanc Glacier Suite",
    description: "A sleek black steel cabin catching first light reflections off Western Europe's highest snow sheets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&w=800&q=60" },
    price: 5200, location: "Chamonix", country: "France", category: "high-altitude"
  },
  {
    title: "Aspen Snowmass Pinnacle Cabin",
    description: "True elite ski lifestyle space offering heavy stone hearths and direct ski-in trail ramp systems.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60" },
    price: 6100, location: "Colorado", country: "United States", category: "high-altitude"
  },
  {
    title: "Patagonia Fitz Roy Base Tower",
    description: "Engineered carefully to withstand immense southern sub-polar winds. Steps from technical ridge ascents.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=60" },
    price: 4200, location: "El Chalten", country: "Argentina", category: "high-altitude"
  },
  {
    title: "Queenstown Southern Alpine Fortress",
    description: "Massive floor-to-ceiling windows tracking deep sapphire glacier lake profiles far down below.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508873696983-2df5198e4009?auto=format&fit=crop&w=800&q=60" },
    price: 4500, location: "Otago Peaks", country: "New Zealand", category: "high-altitude"
  },
  {
    title: "Banff Glacial Rim Outpost",
    description: "Stunning geometric lines hanging directly over sheer rocky drops facing freezing emerald water plains.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=60" },
    price: 4800, location: "Alberta", country: "Canada", category: "high-altitude"
  },
  {
    title: "Norwegian Fjord Edge Steel Vault",
    description: "Dark structural industrial blocks giving paths down sheer 3,000 foot drops into vertical ocean pools.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=60" },
    price: 4100, location: "Geiranger Fjord", country: "Norway", category: "high-altitude"
  },
  {
    title: "Icelandic Ash Field Volcanic Pod",
    description: "Surround yourself in completely alien landscapes featuring raw steam vents and black crag walls.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
    price: 3600, location: "Highlands", country: "Iceland", category: "high-altitude"
  },
  {
    title: "Manali Rohtang Crest Sanctuary",
    description: "Watch heavy snowfall block global passes from the absolute safety of your stone fireplace lounge.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60" },
    price: 2900, location: "Himachal Pradesh", country: "India", category: "high-altitude"
  },
  {
    title: "Tibet High Plateau Sun Station",
    description: "Unprecedented sky clarity and raw alpine light arrays striking massive ancient geometric structures.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60" },
    price: 3500, location: "Lhasa Region", country: "China", category: "high-altitude"
  },
  {
    title: "Atlas Mountain Stone Citadel",
    description: "Ancient Berber design blended with premium underfloor heating setups overlooking massive desert gaps.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=60" },
    price: 2700, location: "Imlil", country: "Morocco", category: "high-altitude"
  },
  {
    title: "Whistler Peak Timber Estate",
    description: "Massive structural logs supporting elite modern interior amenities built for deep winter freezes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=60" },
    price: 5400, location: "British Columbia", country: "Canada", category: "high-altitude"
  },
  {
    title: "Telluride Aspen Glade Chalet",
    description: "Watch shifting mountain tree lines catch autumn colors right outside an ultra-insulated glass room.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=800&q=60" },
    price: 4900, location: "Colorado", country: "United States", category: "high-altitude"
  },
  {
    title: "Kazbegi Caucasus Mountain Nest",
    description: "Look straight up at monumental stone towers cutting clean lines directly across stormy alpine horizons.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
    price: 3100, location: "Stepantsminda", country: "Georgia", category: "high-altitude"
  },
  {
    title: "Japanese Northern Alps Snow-Lodge",
    description: "Relax in an authentic outdoor steamy public bath while deep powder slopes stack up cleanly around you.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=60" },
    price: 4300, location: "Nagano", country: "Japan", category: "high-altitude"
  },
  {
    title: "Drakensberg Dragon Wall Outpost",
    description: "Sheer basalt rock cliffs towering out of sight offer intense, high-scale panoramic trekking routes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=60" },
    price: 2800, location: "KwaZulu-Natal", country: "South Africa", category: "high-altitude"
  }
];
module.exports = { data: sampleListings };