import type { City } from '@/lib/types';

export const australia: City[] = [
  // ── Major Cities ──────────────────────────────────────────────────────
  {
    name: 'Sydney',
    state: 'New South Wales',
    lat: -33.8688,
    lng: 151.2093,
    vibes: ['city', 'beach', 'food', 'nightlife'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The Opera House sails gleam at dawn from Mrs Macquarie\'s Chair while ferries crisscross the harbour below. Bondi to Coogee coastal walk hugs sandstone cliffs above turquoise surf, and Chinatown\'s late-night dumplings rival anything in Shanghai.',
  },
  {
    name: 'Melbourne',
    state: 'Victoria',
    lat: -37.8136,
    lng: 144.9631,
    vibes: ['city', 'food', 'nightlife', 'offbeat'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'Laneway coffee culture runs deep here — Degraves Street and Centre Place overflow with flat whites and street art. The Queen Victoria Market is a sensory overload of artisan cheese, fresh oysters, and vintage clothing, all within tram-riding distance of the MCG.',
  },
  {
    name: 'Brisbane',
    state: 'Queensland',
    lat: -27.4705,
    lng: 153.0260,
    vibes: ['city', 'outdoors', 'food'],
    bestSeasons: ['fall', 'winter', 'spring'],
    blurb:
      'South Bank\'s man-made Streets Beach sits steps from world-class galleries and the GOMA contemporary art museum. The Brisbane River curves through a subtropical skyline where rooftop bars serve craft beer under fairy-lit jacaranda canopies.',
  },
  {
    name: 'Perth',
    state: 'Western Australia',
    lat: -31.9523,
    lng: 115.8613,
    vibes: ['city', 'beach', 'outdoors'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The most isolated major city on Earth rewards with crystalline Cottesloe Beach sunsets and Kings Park wildflower carpets in spring. A short ferry ride reaches Rottnest Island, home to the irresistible quokka — the world\'s happiest animal.',
  },
  {
    name: 'Adelaide',
    state: 'South Australia',
    lat: -34.9285,
    lng: 138.6007,
    vibes: ['city', 'food', 'history'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Australia\'s festival capital buzzes with WOMADelaide, the Fringe, and Adelaide Festival each March. The Central Market has traded in local cheeses, smallgoods, and Haigh\'s chocolates since 1869, all ringed by parklands designed by Colonel Light.',
  },
  {
    name: 'Hobart',
    state: 'Tasmania',
    lat: -42.8821,
    lng: 147.3272,
    vibes: ['food', 'history', 'outdoors'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'Salamanca Market spills across sandstone warehouses every Saturday morning with Tasmanian oysters, leatherwood honey, and cool-climate pinot. MONA — the Museum of Old and New Art — is a subterranean labyrinth carved into a cliff above the Derwent River.',
  },
  {
    name: 'Darwin',
    state: 'Northern Territory',
    lat: -12.4634,
    lng: 130.8456,
    vibes: ['outdoors', 'food', 'history'],
    bestSeasons: ['winter'],
    blurb:
      'The Mindil Beach Sunset Market is a tropical feast of laksa, crocodile skewers, and didgeridoo performances as the sun drops into the Timor Sea. Crocs bask along the harbour foreshore and WWII history lingers at the Defence of Darwin Experience.',
    weatherAdvisory:
      'Wet season (Nov–Apr) brings intense monsoonal downpours, extreme humidity, and box jellyfish in the ocean.',
  },
  {
    name: 'Canberra',
    state: 'Australian Capital Territory',
    lat: -35.2809,
    lng: 149.1300,
    vibes: ['history', 'outdoors', 'food'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The Australian War Memorial is one of the most moving museums on the planet, and the National Gallery houses major works from Sidney Nolan to Jackson Pollock. In autumn the tree-lined avenues explode in reds and golds rivalling any New England fall.',
  },
  {
    name: 'Gold Coast',
    state: 'Queensland',
    lat: -28.0167,
    lng: 153.4000,
    vibes: ['beach', 'nightlife', 'family'],
    bestSeasons: ['spring', 'fall', 'winter'],
    blurb:
      'Surfers Paradise\'s neon-lit strip pulses with nightlife, but the real magic is the uncrowded point breaks at Burleigh Heads and Snapper Rocks. Hinterland rainforest walks through Springbrook and Lamington national parks are just 30 minutes from the sand.',
  },
  {
    name: 'Cairns',
    state: 'Queensland',
    lat: -16.9186,
    lng: 145.7781,
    vibes: ['beach', 'outdoors', 'family'],
    bestSeasons: ['winter', 'spring'],
    blurb:
      'The gateway to the Great Barrier Reef drops you onto coral cays teeming with parrotfish and sea turtles within an hour by boat. Back on shore, the Esplanade Lagoon offers free saltwater swimming surrounded by pelicans and fig trees.',
    weatherAdvisory:
      'Wet season (Nov–Apr) brings cyclone risk, stinger jellyfish, and heavy tropical downpours.',
  },

  // ── Beach / Coastal ───────────────────────────────────────────────────
  {
    name: 'Byron Bay',
    state: 'New South Wales',
    lat: -28.6474,
    lng: 153.6020,
    vibes: ['beach', 'offbeat', 'food'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Australia\'s easternmost point is crowned by a lighthouse where humpback whales breach offshore from June to November. The town hums with organic markets, barefoot surfers, and an eclectic music scene that fills the Railway Friendly Bar most nights.',
  },
  {
    name: 'Noosa',
    state: 'Queensland',
    lat: -26.3936,
    lng: 153.0756,
    vibes: ['beach', 'food', 'outdoors'],
    bestSeasons: ['fall', 'winter', 'spring'],
    blurb:
      'Hastings Street\'s al fresco restaurants serve Moreton Bay bugs and local craft beer steps from a national park where koalas doze in eucalyptus canopy. The coastal walk from Main Beach to Hell\'s Gates passes through tea-tree-shaded coves perfect for snorkelling.',
  },
  {
    name: 'Port Douglas',
    state: 'Queensland',
    lat: -16.4836,
    lng: 145.4651,
    vibes: ['beach', 'outdoors', 'food'],
    bestSeasons: ['winter', 'spring'],
    blurb:
      'Four Mile Beach stretches in a perfect arc below the Daintree-draped mountains, and reef boats reach the Outer Barrier Reef faster than anywhere else. Sunday markets under a canopy of mango trees sell tropical fruit ice cream and handmade jewelry.',
    weatherAdvisory:
      'Cyclone season Nov–Apr; marine stingers present Oct–May — swim in stinger suits.',
  },
  {
    name: 'Broome',
    state: 'Western Australia',
    lat: -17.9614,
    lng: 122.2359,
    vibes: ['beach', 'history', 'offbeat'],
    bestSeasons: ['winter'],
    blurb:
      'Cable Beach stretches 22 kilometres of burnt-orange sand where camel trains silhouette against Indian Ocean sunsets. The pearling industry\'s multicultural heritage echoes through Chinatown, and the Staircase to the Moon phenomenon draws crowds to Roebuck Bay.',
    weatherAdvisory:
      'Extreme wet season heat and cyclone risk from Nov–Apr; the dry season (May–Oct) is the only comfortable visiting window.',
  },
  {
    name: 'Esperance',
    state: 'Western Australia',
    lat: -33.8614,
    lng: 121.8920,
    vibes: ['beach', 'outdoors'],
    bestSeasons: ['spring', 'summer'],
    blurb:
      'Lucky Bay is home to kangaroos that sunbathe on powder-white sand lapped by water so turquoise it looks digitally enhanced. The Great Ocean Drive loops past ten bays each more impossibly blue than the last, and Cape Le Grand\'s granite peaks frame it all.',
  },
  {
    name: 'Albany',
    state: 'Western Australia',
    lat: -35.0269,
    lng: 117.8837,
    vibes: ['history', 'outdoors', 'beach'],
    bestSeasons: ['spring', 'summer'],
    blurb:
      'Western Australia\'s oldest colonial settlement perches above a wild Southern Ocean coastline where the Gap and Natural Bridge formations smash with dramatic surf. The National Anzac Centre overlooking King George Sound is one of Australia\'s most poignant war memorials.',
  },
  {
    name: 'Margaret River',
    state: 'Western Australia',
    lat: -33.9537,
    lng: 115.0753,
    vibes: ['food', 'beach', 'outdoors'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'World-class cabernet sauvignon and chardonnay pour from over 200 cellar doors set among towering karri forests. The coastline delivers powerful surf breaks like Surfers Point and ancient limestone caves dripping with stalactites at Lake Cave.',
  },
  {
    name: 'Jervis Bay',
    state: 'New South Wales',
    lat: -35.0400,
    lng: 150.7302,
    vibes: ['beach', 'outdoors', 'family'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'Hyams Beach holds the Guinness record for the world\'s whitest sand, and dolphins cruise Jervis Bay Marine Park almost daily. After dark, bioluminescent plankton occasionally light the shallows in an eerie electric blue.',
  },
  {
    name: 'Apollo Bay',
    state: 'Victoria',
    lat: -38.7576,
    lng: 143.6715,
    vibes: ['beach', 'outdoors', 'food'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'This Great Ocean Road village nestles between the Otway Ranges rainforest and a crescent of golden sand. The Saturday market sells smoked fish and berry pies, and the Otway Fly Treetop Walk soars 25 metres above fern gullies alive with king parrots.',
  },
  {
    name: 'Airlie Beach',
    state: 'Queensland',
    lat: -20.2686,
    lng: 148.7181,
    vibes: ['beach', 'outdoors', 'nightlife'],
    bestSeasons: ['winter', 'spring'],
    blurb:
      'The jumping-off point for the Whitsunday Islands delivers Whitehaven Beach — a seven-kilometre silica-sand masterpiece swirling with tidal patterns at Hill Inlet. Back in town, the lagoon pool and backpacker bars keep the party rolling after sunset.',
    weatherAdvisory:
      'Cyclone season Nov–Apr; marine stingers present Oct–May.',
  },
  {
    name: 'Exmouth',
    state: 'Western Australia',
    lat: -21.9310,
    lng: 114.1280,
    vibes: ['beach', 'outdoors'],
    bestSeasons: ['fall', 'winter'],
    blurb:
      'Ningaloo Reef is Australia\'s accessible alternative to the Great Barrier Reef — wade straight off Turquoise Bay into a snorkelling paradise of coral gardens. Between March and July, whale sharks cruise these waters, and you can swim alongside the gentle giants.',
    weatherAdvisory:
      'Cyclone risk Nov–Apr; extreme heat Dec–Feb with temperatures regularly exceeding 40 °C.',
  },
  {
    name: 'Torquay',
    state: 'Victoria',
    lat: -38.3318,
    lng: 144.3260,
    vibes: ['beach', 'outdoors', 'family'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'The official start of the Great Ocean Road and the surf capital of Australia, where Bells Beach hosts the world\'s longest-running surf competition each Easter. The Australian National Surfing Museum and the Surf Coast Walk make this more than just a wave.',
  },
  {
    name: 'Seventeen Seventy',
    state: 'Queensland',
    lat: -24.1676,
    lng: 151.8878,
    vibes: ['beach', 'outdoors', 'history'],
    bestSeasons: ['winter', 'spring'],
    blurb:
      'Named for the year Captain Cook made his second Australian landing, this tiny headland village is the gateway to Lady Musgrave Island and its pristine reef lagoon. LARC amphibious tours splash through tidal creeks to Bustard Head lighthouse.',
    weatherAdvisory:
      'Cyclone risk Dec–Apr; marine stingers present Nov–May.',
  },
  {
    name: 'Port Fairy',
    state: 'Victoria',
    lat: -38.3927,
    lng: 142.2310,
    vibes: ['beach', 'history', 'food'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'Bluestone cottages and Norfolk pines line the streets of this 1840s whaling port at the western end of the Great Ocean Road. The annual folk music festival fills the town every March, and Griffiths Island\'s colony of short-tailed shearwaters returns each September.',
  },

  // ── Nature / Outdoor ──────────────────────────────────────────────────
  {
    name: 'Katoomba',
    state: 'New South Wales',
    lat: -33.7140,
    lng: 150.3120,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The Three Sisters sandstone formation glows amber at sunset above the Jamison Valley\'s blue eucalyptus haze. The Scenic Railway — the world\'s steepest — plunges into ancient rainforest, and Leura\'s art deco cafes serve devonshire teas on crisp mountain mornings.',
  },
  {
    name: 'Yulara',
    state: 'Northern Territory',
    lat: -25.2406,
    lng: 130.9889,
    vibes: ['outdoors', 'history', 'offbeat'],
    bestSeasons: ['winter', 'spring'],
    blurb:
      'Uluru rises 348 metres from the red desert floor, shifting through ochres, crimsons, and deep purples as the sun sets — a moment of genuine awe. The base walk reveals ancient rock art and sacred Anangu sites, and the Field of Light art installation carpets the desert with 50,000 fibre-optic stems.',
    weatherAdvisory:
      'Extreme heat Dec–Feb with temperatures exceeding 45 °C; flies are intense Oct–Mar. Winter nights can drop near freezing.',
  },
  {
    name: 'Alice Springs',
    state: 'Northern Territory',
    lat: -23.6980,
    lng: 133.8807,
    vibes: ['outdoors', 'history', 'offbeat'],
    bestSeasons: ['winter', 'spring'],
    blurb:
      'The Red Centre\'s frontier town sits in a gap in the MacDonnell Ranges where the Todd River runs dry most of the year — inspiring the famous Henley-on-Todd boat race held on sand. The Alice Springs Desert Park showcases nocturnal bilbies and free-flying raptors against a backdrop of West MacDonnell gorges.',
    weatherAdvisory:
      'Extreme heat Dec–Feb regularly above 40 °C; winter days are pleasant but nights drop to near freezing.',
  },
  {
    name: 'Jabiru',
    state: 'Northern Territory',
    lat: -12.6713,
    lng: 132.8360,
    vibes: ['outdoors', 'history'],
    bestSeasons: ['winter'],
    blurb:
      'The gateway to Kakadu National Park, a UNESCO World Heritage site where 40,000-year-old Aboriginal rock art at Ubirr and Nourlangie overlooks vast floodplains teeming with saltwater crocodiles. Yellow Water billabong cruises at dawn reveal jabirus, sea eagles, and lotus-covered wetlands.',
    weatherAdvisory:
      'Wet season (Nov–Apr) floods many roads and closes key attractions; extreme humidity and crocodile activity increase.',
  },
  {
    name: 'Daintree',
    state: 'Queensland',
    lat: -16.2500,
    lng: 145.4186,
    vibes: ['outdoors', 'offbeat'],
    bestSeasons: ['winter', 'spring'],
    blurb:
      'The world\'s oldest continuously surviving rainforest meets the Great Barrier Reef in the only place on Earth where two UNESCO World Heritage sites converge. Cassowaries stalk the forest floor, electric-blue Ulysses butterflies flash through the canopy, and crocodile-inhabited rivers wind to deserted beaches at Cape Tribulation.',
    weatherAdvisory:
      'Wet season (Nov–Apr) brings road closures, leeches, and extreme humidity; river crossings can become impassable.',
  },
  {
    name: 'Cradle Mountain',
    state: 'Tasmania',
    lat: -41.6420,
    lng: 145.9418,
    vibes: ['mountains', 'outdoors'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'Cradle Mountain\'s dolerite spires reflect in the mirror-still Dove Lake beneath ancient pencil pines and button grass plains. The Overland Track — Australia\'s most famous multi-day hike — begins here, and wombats waddle across the trails at dusk.',
    weatherAdvisory:
      'Snow possible any month of the year; pack for four seasons in one day. Winter (Jun–Aug) is bitterly cold.',
  },
  {
    name: 'Coles Bay',
    state: 'Tasmania',
    lat: -42.1169,
    lng: 148.2850,
    vibes: ['beach', 'outdoors'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'Freycinet National Park\'s Wineglass Bay is regularly voted one of the world\'s top ten beaches — a perfect crescent of white sand cupped by pink granite peaks called the Hazards. Sea kayaking to secluded coves reveals penguins, dolphins, and white-bellied sea eagles.',
  },
  {
    name: 'Kingscote',
    state: 'South Australia',
    lat: -35.6560,
    lng: 137.6390,
    vibes: ['outdoors', 'food', 'family'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'Kangaroo Island\'s main town is the launching pad for encounters with wild sea lions at Seal Bay, koalas in roadside eucalyptus, and the Remarkable Rocks — precariously balanced granite boulders sculpted by 500 million years of wind. Island Pure sheep dairy and Ligurian honey add a gourmet layer.',
  },
  {
    name: 'Halls Gap',
    state: 'Victoria',
    lat: -37.1380,
    lng: 142.5190,
    vibes: ['mountains', 'outdoors'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Nestled in the Grampians\' sandstone ridges, this tiny village wakes to kangaroos grazing on dewy lawns and kookaburras cackling in the gum trees. The Pinnacle lookout rewards a steep climb with 360-degree views across the Wartook Valley, and Brambuk Cultural Centre shares 20,000 years of Djab Wurrung and Jardwadjali history.',
  },
  {
    name: 'Coober Pedy',
    state: 'South Australia',
    lat: -29.0135,
    lng: 134.7544,
    vibes: ['offbeat', 'history'],
    bestSeasons: ['winter', 'spring'],
    blurb:
      'Half the population lives underground in dugout homes carved from the opal-rich earth to escape surface temperatures that crack 50 °C. The subterranean Serbian Orthodox Church glows with carved sandstone walls, and the lunar landscape served as a film set for Mad Max and Pitch Black.',
    weatherAdvisory:
      'Extreme heat Nov–Mar with temperatures regularly exceeding 45 °C; carry extra water and fuel at all times.',
  },

  // ── Wine / Food / Culture ─────────────────────────────────────────────
  {
    name: 'Tanunda',
    state: 'South Australia',
    lat: -34.5239,
    lng: 138.9590,
    vibes: ['food', 'history'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The heart of the Barossa Valley pours some of Australia\'s most revered shiraz from century-old vines at Penfolds, Henschke, and Seppeltsfield. German settler heritage lives on in the bakeries — try a bee sting (bienenstich) pastry with your morning coffee.',
  },
  {
    name: 'Pokolbin',
    state: 'New South Wales',
    lat: -32.7734,
    lng: 151.2873,
    vibes: ['food', 'outdoors'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The Hunter Valley\'s cellar door epicentre where over 150 wineries pour semillon and shiraz among rolling green hills dotted with hot air balloons at dawn. Cheese tastings, chocolate factories, and hatted restaurants make this a gourmand\'s weekend escape from Sydney.',
  },
  {
    name: 'Healesville',
    state: 'Victoria',
    lat: -37.6531,
    lng: 145.5134,
    vibes: ['food', 'outdoors', 'family'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The Yarra Valley gateway town pairs cool-climate chardonnay and pinot at TarraWarra and De Bortoli with the Healesville Sanctuary, where platypus glide through glass-walled tanks and keeper talks introduce hand-raised wombats.',
  },
  {
    name: 'McLaren Vale',
    state: 'South Australia',
    lat: -35.2188,
    lng: 138.5464,
    vibes: ['food', 'outdoors'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Grenache vines older than a century twist through the clay soil of this coastal wine region squeezed between the Mount Lofty Ranges and Gulf St Vincent. d\'Arenberg\'s Cube is a surreal Rubik\'s-cube-shaped cellar door, and the Shiraz Trail cycling path weaves between tastings.',
  },

  // ── Offbeat ───────────────────────────────────────────────────────────
  {
    name: 'Nimbin',
    state: 'New South Wales',
    lat: -28.5942,
    lng: 153.2238,
    vibes: ['offbeat', 'outdoors'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Australia\'s counter-culture capital exploded from the 1973 Aquarius Festival and never looked back — rainbow-painted shopfronts sell hemp products and tie-dye alongside the Nimbin Museum\'s psychedelic folk art. The surrounding Nightcap National Park protects ancient Antarctic beech rainforest and thundering Protesters Falls.',
  },
  {
    name: 'Broken Hill',
    state: 'New South Wales',
    lat: -31.9505,
    lng: 141.4688,
    vibes: ['offbeat', 'history', 'outdoors'],
    bestSeasons: ['winter', 'spring'],
    blurb:
      'This remote mining city on the edge of the outback runs on South Australian time and has inspired painters from Pro Hart to the Brushmen of the Bush. The Living Desert Sculptures — twelve sandstone totems on a hilltop — frame a sunset that turns the Barrier Ranges molten red.',
    weatherAdvisory:
      'Extreme heat Dec–Feb with temperatures often above 40 °C; carry ample water for any outback driving.',
  },
  {
    name: 'Thursday Island',
    state: 'Queensland',
    lat: -10.5829,
    lng: 142.2189,
    vibes: ['offbeat', 'history'],
    bestSeasons: ['winter'],
    blurb:
      'A speck in the Torres Strait between Australia and Papua New Guinea, Thursday Island carries the legacy of Japanese pearl divers, Torres Strait Islander culture, and a WWII fortress. Green Hill Fort offers panoramic views across the strait\'s scattered islands and turquoise channels.',
    weatherAdvisory:
      'Wet season (Nov–Apr) brings extreme humidity, cyclone risk, and restricted access; marine stingers year-round.',
  },
];
