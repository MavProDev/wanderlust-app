import type { City } from '@/lib/types';

export const japan: City[] = [
  {
    name: 'Tokyo',
    state: 'Tokyo Prefecture',
    lat: 35.6762,
    lng: 139.6503,
    vibes: ['city', 'food', 'nightlife', 'history'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'A neon-lit megalopolis where Michelin-starred sushi bars share blocks with centuries-old Shinto shrines like Meiji Jingu. Shibuya Crossing pulses with thousands of pedestrians every light cycle, while Yanaka\'s temple-lined alleys preserve the quiet atmosphere of old Edo.',
  },
  {
    name: 'Kyoto',
    state: 'Kyoto Prefecture',
    lat: 35.0116,
    lng: 135.7681,
    vibes: ['history', 'food', 'offbeat'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Two thousand temples and shrines fill this former imperial capital, from Kinkaku-ji\'s gold-leaf pavilion to the vermillion torii tunnel at Fushimi Inari. Geisha still glide through Gion\'s lantern-lit streets at dusk, and kaiseki cuisine here is edible art refined over centuries.',
  },
  {
    name: 'Osaka',
    state: 'Osaka Prefecture',
    lat: 34.6937,
    lng: 135.5023,
    vibes: ['food', 'city', 'nightlife'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Japan\'s street food capital where the motto is kuidaore — eat until you drop. Dotonbori\'s glowing signs reflect off the canal as vendors sling takoyaki and okonomiyaki, while Shinsekai\'s retro towers and kushikatsu joints channel a grittier, more boisterous energy than its rival Tokyo.',
  },
  {
    name: 'Hiroshima',
    state: 'Hiroshima Prefecture',
    lat: 34.3853,
    lng: 132.4553,
    vibes: ['history', 'food', 'family'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The Peace Memorial Park and skeletal A-Bomb Dome stand as solemn reminders of 1945, drawing visitors into a powerful museum that advocates for nuclear disarmament. Beyond the memorials, Hiroshima thrives — its layered okonomiyaki is legendary, and the Shukkeien garden offers quiet beauty along its miniature valleys.',
  },
  {
    name: 'Fukuoka',
    state: 'Fukuoka Prefecture',
    lat: 33.5904,
    lng: 130.4017,
    vibes: ['food', 'city', 'nightlife'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Yatai food stalls line the banks of the Naka River each night, serving Hakata-style tonkotsu ramen with milky, pork-bone broth that is impossibly rich. Canal City\'s futuristic shopping complex and the ancient Kushida Shrine sit blocks apart in a city that blends modernity with Kyushu warmth.',
  },
  {
    name: 'Sapporo',
    state: 'Hokkaido',
    lat: 43.0618,
    lng: 141.3545,
    vibes: ['food', 'city', 'outdoors'],
    bestSeasons: ['winter', 'summer'],
    blurb:
      'Every February, the Snow Festival fills Odori Park with massive ice sculptures lit in brilliant color, drawing two million visitors to this northern capital. Sapporo\'s miso ramen is rich and buttery, its beer garden occupies a handsome red-brick factory, and world-class skiing awaits just an hour away.',
    weatherAdvisory:
      'Heavy snow Dec–Mar; temperatures regularly drop below -10°C in January and February.',
  },
  {
    name: 'Nagoya',
    state: 'Aichi Prefecture',
    lat: 35.1815,
    lng: 136.9066,
    vibes: ['city', 'food', 'history'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The castle with golden shachihoko dolphins anchors a city obsessed with miso — miso katsu, miso nikomi udon, and miso oden form a uniquely hearty regional cuisine. The Atsuta Shrine holds one of Japan\'s three imperial regalia swords, and the Toyota Commemorative Museum traces the rise of an industrial empire.',
  },
  {
    name: 'Kobe',
    state: 'Hyogo Prefecture',
    lat: 34.6901,
    lng: 135.1956,
    vibes: ['food', 'city', 'nightlife'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Wedged between mountains and the Inland Sea, this cosmopolitan port city is synonymous with its marbled Wagyu beef, seared tableside at Tor Road steakhouses. Kitano\'s Western-style ijinkan mansions recall its history as a foreign settlement, and the Harborland waterfront glitters after dark.',
  },
  {
    name: 'Yokohama',
    state: 'Kanagawa Prefecture',
    lat: 35.4437,
    lng: 139.6380,
    vibes: ['city', 'food', 'family'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Japan\'s largest Chinatown stretches across several blocks of steaming nikuman buns and Cantonese roast duck, while the Cup Noodles Museum lets you design your own instant ramen. The Minato Mirai waterfront mixes a massive Ferris wheel, red-brick warehouses, and views across Tokyo Bay.',
  },
  {
    name: 'Sendai',
    state: 'Miyagi Prefecture',
    lat: 38.2682,
    lng: 140.8694,
    vibes: ['food', 'city', 'history'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'The City of Trees earns its nickname from the zelkova-lined Jozenji-dori avenue, which hosts a dazzling winter illumination each December. Gyutan — thick-sliced grilled beef tongue — is the local obsession, and the ruins of Aoba Castle offer panoramic views over the city Date Masamune once ruled.',
    weatherAdvisory:
      'Cold winters with occasional heavy snow; Tanabata Festival in August draws enormous crowds.',
  },
  {
    name: 'Naha',
    state: 'Okinawa Prefecture',
    lat: 26.2124,
    lng: 127.6809,
    vibes: ['beach', 'food', 'history'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The gateway to Okinawa\'s subtropical paradise, where Shuri Castle\'s vermillion walls crown a hill above a city humming with sanshin music and awamori spirit. Kokusai Street buzzes with purple sweet potato tarts and pork-heavy Okinawan cuisine, and turquoise beaches lie just beyond the city limits.',
    weatherAdvisory:
      'Typhoon season Jun–Oct; rainy season (tsuyu) typically May–Jun. Mild winters make it a year-round destination.',
  },
  {
    name: 'Nara',
    state: 'Nara Prefecture',
    lat: 34.6851,
    lng: 135.8048,
    vibes: ['history', 'family', 'outdoors'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Over a thousand sacred deer roam freely through the park, bowing for rice crackers in the shadow of Todai-ji\'s Great Buddha — the world\'s largest bronze statue housed in the world\'s largest wooden building. This first permanent capital of Japan feels gentler and less crowded than Kyoto, with ancient temples set among primeval forests on Mount Wakakusa.',
  },
  {
    name: 'Kamakura',
    state: 'Kanagawa Prefecture',
    lat: 35.3192,
    lng: 139.5467,
    vibes: ['history', 'beach', 'outdoors'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'The Great Buddha sits serenely in the open air, a 13-meter bronze colossus that has weathered tsunamis and typhoons since 1252. Wooded hiking trails connect dozens of Zen temples, and the beaches at Yuigahama and Zaimokuza draw surfers and sunbathers just an hour from Tokyo.',
  },
  {
    name: 'Kanazawa',
    state: 'Ishikawa Prefecture',
    lat: 36.5613,
    lng: 136.6562,
    vibes: ['history', 'food', 'offbeat'],
    bestSeasons: ['spring', 'fall', 'winter'],
    blurb:
      'Spared from wartime bombing, Kanazawa preserves immaculate samurai and geisha districts alongside Kenroku-en, one of Japan\'s three great gardens. The Omicho fish market overflows with sweet Hokuriku shrimp and snow crab, and the 21st Century Museum of Contemporary Art is a striking glass circle housing boundary-pushing installations.',
    weatherAdvisory:
      'Heavy snow Dec–Feb on the Sea of Japan coast; the snow-covered Kenroku-en is hauntingly beautiful.',
  },
  {
    name: 'Takayama',
    state: 'Gifu Prefecture',
    lat: 36.1461,
    lng: 137.2522,
    vibes: ['history', 'food', 'offbeat'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'This mountain town\'s Sanmachi Suji district is a perfectly preserved Edo-era streetscape of dark-wood merchants\' houses, now home to sake breweries and Hida beef skewer shops. The biannual Takayama Festival parades ornate yatai floats through these narrow lanes, rivaling Kyoto\'s Gion Matsuri in splendor.',
    weatherAdvisory:
      'Bitterly cold winters with heavy snow; spring and fall festivals are the prime draw.',
  },
  {
    name: 'Nikko',
    state: 'Tochigi Prefecture',
    lat: 36.7500,
    lng: 139.5985,
    vibes: ['history', 'outdoors', 'mountains'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Toshogu Shrine is a riot of gold leaf, carved dragons, and the famous see-no-evil monkeys — a lavish mausoleum for shogun Tokugawa Ieyasu set in a cryptomeria forest. Beyond the shrines, Kegon Falls plunges 97 meters into a gorge, and Lake Chuzenji offers cool summer retreats and blazing autumn foliage.',
  },
  {
    name: 'Himeji',
    state: 'Hyogo Prefecture',
    lat: 34.8394,
    lng: 134.6939,
    vibes: ['history', 'family'],
    bestSeasons: ['spring'],
    blurb:
      'Himeji Castle — the White Heron — is Japan\'s finest surviving feudal fortress, its brilliant white walls and complex maze of defensive corridors crowned by a five-story keep. During cherry blossom season, over a thousand sakura trees erupt around the castle moats, creating one of the country\'s most photographed springtime scenes.',
  },
  {
    name: 'Matsumoto',
    state: 'Nagano Prefecture',
    lat: 36.2381,
    lng: 137.9720,
    vibes: ['history', 'mountains', 'outdoors'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'The jet-black Crow Castle reflects in its moat against a backdrop of the Northern Alps, its striking dark exterior unique among Japan\'s original castles. The town is a gateway to Kamikochi and the Tateyama alpine route, with a lively Nawate-dori frog street and thriving soba noodle culture fed by pure mountain water.',
  },
  {
    name: 'Kurashiki',
    state: 'Okayama Prefecture',
    lat: 34.5850,
    lng: 133.7720,
    vibes: ['history', 'offbeat'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'White-walled storehouses and weeping willows line a canal that once carried rice to merchant ships, now forming one of Japan\'s most photogenic historic quarters. The Ohara Museum of Art houses an improbable collection of El Grecos, Monets, and Renoirs in a Greek-columned building that feels transplanted from another continent.',
  },
  {
    name: 'Onomichi',
    state: 'Hiroshima Prefecture',
    lat: 34.4090,
    lng: 133.2050,
    vibes: ['offbeat', 'outdoors', 'history'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Steep hillside paths wind past 25 weathered temples and cat-filled alleyways in this port town that has inspired Japanese filmmakers for decades. It marks the starting point of the Shimanami Kaido, a 70-kilometer cycling route island-hopping across the Seto Inland Sea on soaring suspension bridges.',
  },
  {
    name: 'Naoshima',
    state: 'Kagawa Prefecture',
    lat: 34.4614,
    lng: 133.9958,
    vibes: ['offbeat', 'beach'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Yayoi Kusama\'s yellow polka-dot pumpkin perches on a pier of this tiny Seto Inland Sea island that Benesse turned into an open-air contemporary art museum. Tadao Ando\'s concrete galleries burrow into hillsides, James Turrell installations play with light underground, and old fishing houses have been reimagined as immersive art spaces.',
  },
  {
    name: 'Koyasan',
    state: 'Wakayama Prefecture',
    lat: 34.2130,
    lng: 135.6001,
    vibes: ['history', 'offbeat', 'mountains'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'This mountain-top temple complex founded by Kobo Daishi in 816 is the spiritual heart of Shingon Buddhism, where visitors sleep in temple lodgings and wake for morning prayer chants. Okunoin cemetery stretches through ancient cedar forest past 200,000 moss-covered tombstones to the mausoleum where Kobo Daishi is said to rest in eternal meditation.',
    weatherAdvisory:
      'Mountain elevation makes it significantly cooler than the lowlands; snow possible Nov–Mar.',
  },
  {
    name: 'Magome',
    state: 'Gifu Prefecture',
    lat: 35.5275,
    lng: 137.5686,
    vibes: ['history', 'outdoors', 'offbeat'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'This restored post town on the Nakasendo trail tumbles down a hillside of stone-paved paths, wooden inns, and water wheels, looking much as it did when feudal lords\' processions passed through. The 8-kilometer hike to neighboring Tsumago winds through bamboo groves and cypress forest with barely a modern structure in sight.',
  },
  {
    name: 'Tsumago',
    state: 'Nagano Prefecture',
    lat: 35.5778,
    lng: 137.5953,
    vibes: ['history', 'outdoors', 'offbeat'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Japan\'s first protected post town banned cars, power lines, and modern facades to preserve an authentic slice of Edo-period Nakasendo road life. Dark-timbered merchant houses serve gohei-mochi rice cakes, and the surrounding Kiso Valley forests feel as remote as they did when travelers walked this route between Kyoto and Edo.',
  },
  {
    name: 'Hakone',
    state: 'Kanagawa Prefecture',
    lat: 35.2326,
    lng: 139.1070,
    vibes: ['mountains', 'outdoors', 'family'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Volcanic hot springs, the Hakone Open-Air Museum\'s surreal hillside sculptures, and postcard views of Mount Fuji reflected in Lake Ashi make this the quintessential Tokyo escape. A loop route by train, cable car, ropeway, and pirate ship covers all the highlights in a single exhilarating day.',
  },
  {
    name: 'Yakushima',
    state: 'Kagoshima Prefecture',
    lat: 30.3520,
    lng: 130.5056,
    vibes: ['outdoors', 'mountains', 'offbeat'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Ancient Jomon Sugi cedars — some over 7,000 years old — tower in a moss-draped primeval forest that inspired the ethereal landscape of Studio Ghibli\'s Princess Mononoke. This UNESCO island receives extraordinary rainfall that feeds cascading waterfalls, and sea turtles nest on its southern beaches between May and August.',
    weatherAdvisory:
      'Extremely rainy year-round — locals say it rains 35 days a month. Waterproof gear essential.',
  },
  {
    name: 'Miyajima',
    state: 'Hiroshima Prefecture',
    lat: 34.2960,
    lng: 132.3196,
    vibes: ['history', 'outdoors', 'family'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The great vermillion torii gate of Itsukushima Shrine appears to float on the sea at high tide, one of Japan\'s three most celebrated views. Tame deer wander the island\'s streets past shops selling momiji manju maple-leaf cakes, and a ropeway ascends Mount Misen for panoramic views of the Inland Sea.',
  },
  {
    name: 'Shirakawa-go',
    state: 'Gifu Prefecture',
    lat: 36.2576,
    lng: 136.9066,
    vibes: ['history', 'mountains', 'offbeat'],
    bestSeasons: ['winter', 'spring'],
    blurb:
      'UNESCO-listed farmhouses with steeply pitched gassho-zukuri thatched roofs — built to shed heavy snow — cluster in a valley that looks like a fairy tale when illuminated on winter nights. In spring, rice paddies flood with snowmelt and frame these architectural survivors in emerald green.',
    weatherAdvisory:
      'Very heavy snow Dec–Mar buries the village; winter illumination events require advance lottery tickets.',
  },
  {
    name: 'Niseko',
    state: 'Hokkaido',
    lat: 42.8048,
    lng: 140.6874,
    vibes: ['mountains', 'outdoors'],
    bestSeasons: ['winter', 'summer'],
    blurb:
      'Legendary powder snow — consistently dry and deep Siberian fluff — draws skiers and snowboarders from around the world to four interconnected resorts on Mount Niseko Annupuri. Summer transforms the area into a green playground of rafting on the Shiribetsu River, mountain biking, and hiking with views of the volcanic cone of Mount Yotei.',
    weatherAdvisory:
      'Massive snowfall Nov–Apr, often exceeding 15 meters per season. Summer is mild and pleasant.',
  },
  {
    name: 'Furano',
    state: 'Hokkaido',
    lat: 43.3420,
    lng: 142.3833,
    vibes: ['outdoors', 'family', 'offbeat'],
    bestSeasons: ['summer', 'winter'],
    blurb:
      'Rolling lavender fields explode in purple every July at Farm Tomita, filling the air with fragrance and drawing photographers to one of Hokkaido\'s most iconic summer landscapes. Winter brings reliable powder snow to Furano Ski Resort and the region\'s rich dairy farms supply some of Japan\'s finest cheese and soft-serve ice cream.',
    weatherAdvisory:
      'Extreme cold in winter, dropping below -20°C; lavender peaks mid-Jul to early Aug.',
  },
  {
    name: 'Beppu',
    state: 'Oita Prefecture',
    lat: 33.2846,
    lng: 131.4914,
    vibes: ['offbeat', 'outdoors', 'budget'],
    bestSeasons: ['spring', 'fall', 'winter'],
    blurb:
      'Steam billows from every corner of this onsen town, Japan\'s hot spring capital with more thermal output than anywhere except Yellowstone. The Jigoku "Hells" tour visits boiling pools of cobalt blue, blood red, and bubbling mud, while sand baths at Beppu Beach bury you in naturally heated volcanic sand beside the sea.',
  },
  {
    name: 'Aso',
    state: 'Kumamoto Prefecture',
    lat: 32.8842,
    lng: 131.0843,
    vibes: ['outdoors', 'mountains', 'offbeat'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'One of the world\'s largest volcanic calderas stretches 25 kilometers across, its central peak Mount Nakadake still actively steaming with a turquoise crater lake. The vast Kusasenri grasslands inside the caldera support horseback riding with surreal volcanic views, and the surrounding countryside is dotted with onsen towns and pastoral farms.',
    weatherAdvisory:
      'Volcanic gas can close the crater rim trail without notice; check conditions before hiking.',
  },
  {
    name: 'Kamikochi',
    state: 'Nagano Prefecture',
    lat: 36.2478,
    lng: 137.6301,
    vibes: ['mountains', 'outdoors'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'This alpine valley in the Northern Japan Alps is car-free and accessible only by bus, opening each April when snowmelt feeds the crystal-clear Azusa River flowing beneath the iconic Kappa Bridge. Serious trekkers use it as a base camp for multi-day hikes over 3,000-meter peaks like Oku-Hotaka and Yari-ga-take.',
    weatherAdvisory:
      'Open mid-Apr to mid-Nov only; closed in winter. Afternoon thunderstorms common in summer.',
  },
  {
    name: 'Shirakami-Sanchi',
    state: 'Aomori Prefecture',
    lat: 40.4819,
    lng: 140.1439,
    vibes: ['outdoors', 'mountains', 'offbeat'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'This UNESCO World Heritage beech forest is the largest virgin stand of Siebold\'s beech in East Asia, an untouched wilderness where black bears roam and Anmon Falls cascades through emerald canopy. The Juniko chain of twelve cobalt-blue lakes includes the impossibly clear Aoike, whose depths glow an otherworldly blue.',
    weatherAdvisory:
      'Heavy snow closes most trails Nov–May; bear encounters possible — carry bells.',
  },
  {
    name: 'Tottori',
    state: 'Tottori Prefecture',
    lat: 35.5011,
    lng: 134.2351,
    vibes: ['outdoors', 'offbeat', 'family'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Japan\'s largest sand dunes stretch along the Sea of Japan coast for 16 kilometers, a surreal landscape where you can paraglide, camel ride, or sandboard down 50-meter slopes. The Sand Museum creates astonishing large-scale sand sculptures on an annual theme, and the surrounding coast yields sweet Matsuba crab in winter.',
  },
  {
    name: 'Miyako Island',
    state: 'Okinawa Prefecture',
    lat: 24.7916,
    lng: 125.2814,
    vibes: ['beach', 'outdoors'],
    bestSeasons: ['spring', 'summer'],
    blurb:
      'Maehama Beach\'s seven kilometers of powder-white sand slope into water so transparent you can see fish from the shore without a mask. The Irabu Bridge — Japan\'s longest toll-free bridge — connects to neighboring Irabu Island, and the surrounding reef system offers world-class snorkeling with sea turtles and manta rays.',
    weatherAdvisory:
      'Typhoon season Jul–Oct can disrupt travel; UV is intense year-round — sun protection essential.',
  },
  {
    name: 'Ishigaki',
    state: 'Okinawa Prefecture',
    lat: 24.3448,
    lng: 124.1572,
    vibes: ['beach', 'outdoors', 'food'],
    bestSeasons: ['spring', 'summer'],
    blurb:
      'Gateway to the Yaeyama Islands, Ishigaki serves Okinawa\'s finest beef — marbled and sweet from cattle raised in sea-salt breezes — alongside stunning Kabira Bay, where glass-bottom boats glide over emerald water too pristine for swimming. Manta rays gather in the surrounding channels from September to November.',
    weatherAdvisory:
      'Typhoons Jun–Oct; strong UV year-round. Rainy season typically May–Jun.',
  },
  {
    name: 'Amami Oshima',
    state: 'Kagoshima Prefecture',
    lat: 28.3760,
    lng: 129.4914,
    vibes: ['beach', 'outdoors', 'offbeat'],
    bestSeasons: ['spring', 'summer'],
    blurb:
      'This UNESCO-listed subtropical island between Kyushu and Okinawa harbors dense mangrove forests, the endemic Amami black rabbit, and beaches with fewer tourists than its southern neighbors. Oshima Tsumugi silk weaving — dyed with local mud — has been practiced here for 1,300 years, and the island\'s keihan chicken-rice soup is comfort food perfection.',
    weatherAdvisory:
      'Typhoon risk Jun–Oct; heavy rainy season in May–Jun.',
  },
  {
    name: 'Enoshima',
    state: 'Kanagawa Prefecture',
    lat: 35.3004,
    lng: 139.4800,
    vibes: ['beach', 'food', 'family'],
    bestSeasons: ['spring', 'summer'],
    blurb:
      'This tiny island connected to the mainland by a bridge has been a spiritual site since the 6th century, with three shrines to the goddess Benzaiten perched among sea caves and botanical gardens. Whitebait (shirasu) served raw on rice is the signature dish, eaten on terraces with views of Sagami Bay and, on clear days, Mount Fuji.',
  },
  {
    name: 'Teshima',
    state: 'Kagawa Prefecture',
    lat: 34.4897,
    lng: 134.0818,
    vibes: ['offbeat', 'outdoors'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The Teshima Art Museum — a single concrete shell open to the sky where water beads pool and merge on the floor — is one of the most meditative art experiences on earth. Rice terraces cascade down hillsides to the sea, a food culture project turns local produce into art installations, and the island\'s quiet pace is restorative.',
  },
  {
    name: 'Inujima',
    state: 'Okayama Prefecture',
    lat: 34.5542,
    lng: 134.0342,
    vibes: ['offbeat'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The smallest of the Seto Inland Sea art islands, with a population under 50 and a refinery ruin transformed into an art museum powered by solar energy and geothermal heat. Scattered "Art House Projects" by Kazuyo Sejima insert contemporary works into abandoned village homes, making a walk around the island feel like a gallery without walls.',
  },
  {
    name: 'Iya Valley',
    state: 'Tokushima Prefecture',
    lat: 33.9390,
    lng: 133.9790,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Vine bridges woven from mountain wisteria sway over the emerald Iya River gorge in one of Japan\'s three most secluded regions, where defeated Heike warriors once hid. Thatched-roof farmhouses have been converted into lodgings, and the steep valley walls glow orange and crimson during autumn, visible from hair-raising single-lane mountain roads.',
  },
  {
    name: 'Kinosaki Onsen',
    state: 'Hyogo Prefecture',
    lat: 35.6274,
    lng: 134.8117,
    vibes: ['food', 'offbeat', 'history'],
    bestSeasons: ['fall', 'winter'],
    blurb:
      'Seven public bathhouses line a willow-draped canal in this 1,300-year-old hot spring town, where guests stroll between baths in yukata robes and wooden geta clogs. Matsuba crab in winter is the culinary pinnacle — boiled, grilled, and served as sashimi — and the literary history includes visits by the great novelist Shiga Naoya.',
    weatherAdvisory:
      'Heavy snow possible Dec–Feb on the Sea of Japan coast; crab season Nov–Mar is peak.',
  },
  {
    name: 'Kurama',
    state: 'Kyoto Prefecture',
    lat: 35.1175,
    lng: 135.7705,
    vibes: ['mountains', 'history', 'offbeat'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The mountain temple Kurama-dera, reached by a steep trail through ancient cedar forest, is said to be where the young warrior Yoshitsune trained with tengu mountain goblins. The Fire Festival each October sends torch-bearing villagers surging through the narrow streets, and the Kurama onsen at the mountain\'s base offers an open-air bath surrounded by forest.',
  },
  {
    name: 'Amanohashidate',
    state: 'Kyoto Prefecture',
    lat: 35.5616,
    lng: 135.1838,
    vibes: ['outdoors', 'beach', 'offbeat'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'One of Japan\'s three most scenic views, this 3.6-kilometer pine-covered sandbar stretches across Miyazu Bay and, when viewed upside down between your legs from the hilltop, appears to be a bridge to heaven. Cycling across the bar passes 8,000 pine trees, and the surrounding bay yields fresh oysters and clams.',
  },
  {
    name: 'Takachiho',
    state: 'Miyazaki Prefecture',
    lat: 32.7131,
    lng: 131.3059,
    vibes: ['outdoors', 'history', 'offbeat'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Columnar basalt cliffs plunge into the turquoise Takachiho Gorge, where rental boats drift beneath Manai Falls — a scene straight from the Shinto creation myths set here. Nightly yokagura dance performances at the shrine reenact stories of Amaterasu, the sun goddess, and the surrounding plateau offers sweeping views of the Kyushu mountains.',
  },
  {
    name: 'Hakodate',
    state: 'Hokkaido',
    lat: 41.7688,
    lng: 140.7290,
    vibes: ['food', 'history', 'nightlife'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'The million-dollar night view from Mount Hakodate reveals a city pinched between two bays, its lights spreading like butterfly wings. The morning fish market sells uni, ikura, and crab piled absurdly high on donburi rice bowls, and the Motomachi district\'s Western-style buildings recall Hakodate\'s role as one of the first ports opened to foreign trade.',
    weatherAdvisory:
      'Cold and snowy Dec–Mar; summer is pleasantly cool compared to mainland Japan.',
  },
  {
    name: 'Kagoshima',
    state: 'Kagoshima Prefecture',
    lat: 31.5966,
    lng: 130.5571,
    vibes: ['food', 'outdoors', 'history'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The ever-smoking Sakurajima volcano looms across the bay from this southern city, occasionally dusting streets with ash — locals carry umbrellas for it. Kurobuta Berkshire pork is fatty and sweet, the Sengan-en garden frames Sakurajima as borrowed scenery, and the Satsuma samurai legacy permeates the city that launched the Meiji Restoration.',
    weatherAdvisory:
      'Volcanic ash falls intermittently; typhoon risk Aug–Oct.',
  },
  {
    name: 'Matsuyama',
    state: 'Ehime Prefecture',
    lat: 33.8392,
    lng: 132.7657,
    vibes: ['history', 'food', 'offbeat'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Dogo Onsen, one of Japan\'s oldest hot springs, is housed in a three-story 1894 bathhouse that inspired the spirit world bathhouse in Spirited Away. Matsuyama Castle sits atop a hill reached by ropeway, haiku poet Masaoka Shiki was born here, and the tram-connected city has a relaxed Shikoku charm with outstanding taimeshi sea bream rice.',
  },
  {
    name: 'Nagasaki',
    state: 'Nagasaki Prefecture',
    lat: 32.7503,
    lng: 129.8779,
    vibes: ['history', 'food', 'city'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Centuries as Japan\'s sole window to the Western world gave Nagasaki a unique cultural blend — the Oura Church, Glover Garden\'s colonial mansions, and champon noodles born from Chinese immigrant cooks. The Peace Park and Atomic Bomb Museum provide a moving counterpoint, while the harbor city\'s hills offer views as dramatic as its history.',
  },
  {
    name: 'Kumamoto',
    state: 'Kumamoto Prefecture',
    lat: 32.8032,
    lng: 130.7079,
    vibes: ['history', 'food', 'city'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Kumamoto Castle — one of Japan\'s three premier castles — is slowly being restored after the 2016 earthquake, its massive stone walls and reconstruction efforts visible as a testament to resilience. Basashi horse meat sashimi is the local delicacy, Suizenji Jojuen garden miniaturizes the Tokaido road\'s 53 stations, and the mascot Kumamon is everywhere.',
  },
  {
    name: 'Karuizawa',
    state: 'Nagano Prefecture',
    lat: 36.3486,
    lng: 138.5970,
    vibes: ['outdoors', 'mountains', 'family'],
    bestSeasons: ['summer', 'fall', 'winter'],
    blurb:
      'A highland resort town that has served as Tokyo\'s summer escape since the Meiji era, set among birch forests and volcanic plateau at the base of Mount Asama. The Shiraito Falls cascade delicately over mossy cliffs, a massive outlet mall draws shoppers, and winter brings reliable snow to nearby slopes — all just an hour from Tokyo by bullet train.',
  },
  {
    name: 'Narita',
    state: 'Chiba Prefecture',
    lat: 35.7760,
    lng: 140.3184,
    vibes: ['history', 'food', 'family'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Beyond the airport, Narita-san Shinshoji temple has drawn pilgrims for over a thousand years, its grand gate opening onto a street lined with shops selling freshwater eel grilled over charcoal — the town\'s iconic dish. The temple complex spans multiple halls, pagodas, and a vast peaceful park that rivals Kyoto\'s best without the crowds.',
  },
  {
    name: 'Okayama',
    state: 'Okayama Prefecture',
    lat: 34.6553,
    lng: 133.9195,
    vibes: ['history', 'family', 'food'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'Korakuen, one of Japan\'s three great gardens, spreads over 14 hectares of manicured lawns, plum groves, and crane aviaries with Okayama Castle\'s black silhouette as a backdrop. The "Land of Sunshine" enjoys Japan\'s least rainy climate, and its proximity to Kurashiki, Naoshima, and the Seto Inland Sea makes it an ideal Setouchi base.',
  },
];
