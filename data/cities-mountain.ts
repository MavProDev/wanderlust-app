import type { City } from '@/lib/types';

export const mountainAndParks: City[] = [
  {
    name: 'Pigeon Forge',
    state: 'Tennessee',
    lat: 35.7884,
    lng: -83.5543,
    vibes: ['family', 'mountains', 'food'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'Dollywood anchors this Smoky Mountain corridor where dinner theaters, go-kart tracks, and pancake houses stretch for miles along the Parkway. Behind the neon, the Little Pigeon River and Wears Valley offer surprisingly quiet escapes into the national park.',
  },
  {
    name: 'Blue Ridge',
    state: 'Georgia',
    lat: 34.8640,
    lng: -84.3241,
    vibes: ['mountains', 'outdoors', 'food'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'This revitalized railroad town at the southern end of the Blue Ridge Mountains pairs a scenic train ride through the Toccoa River gorge with a walkable downtown full of galleries and farm-to-table restaurants. The Swinging Bridge over the river draws crowds every weekend.',
  },
  {
    name: 'Bryson City',
    state: 'North Carolina',
    lat: 35.4310,
    lng: -83.4496,
    vibes: ['mountains', 'outdoors', 'family'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'The Great Smoky Mountains Railroad steams through this quiet Tuckasegee River town that serves as the less-touristy gateway to Deep Creek and Fontana Lake. Tubing, waterfall hikes, and genuine Appalachian culture thrive without the Gatlinburg crowds.',
  },
  {
    name: 'Banner Elk',
    state: 'North Carolina',
    lat: 36.1632,
    lng: -81.8715,
    vibes: ['mountains', 'outdoors'],
    bestSeasons: ['summer', 'winter'],
    blurb:
      'Perched at 3,739 feet between Sugar Mountain and Beech Mountain ski resorts, Banner Elk offers the highest-elevation skiing in the Southeast. Summer brings wildflower meadows, hawk migrations at Grandfather Mountain, and temperatures that rarely crack 80.',
    weatherAdvisory:
      'Ice storms can close mountain roads from December through February.',
  },
  {
    name: 'Killington',
    state: 'Vermont',
    lat: 43.6776,
    lng: -72.7793,
    vibes: ['mountains', 'outdoors', 'nightlife'],
    bestSeasons: ['winter', 'fall'],
    blurb:
      'The "Beast of the East" boasts the largest ski area in eastern North America with 1,509 feet of vertical drop across six interconnected peaks. The Killington Road bar scene after last chair rivals anything in Colorado.',
    weatherAdvisory:
      'Extreme cold and wind chill can plunge below -30°F on exposed ridges in January.',
  },
  {
    name: 'North Conway',
    state: 'New Hampshire',
    lat: 44.0537,
    lng: -71.1284,
    vibes: ['mountains', 'outdoors', 'family', 'budget'],
    bestSeasons: ['summer', 'fall', 'winter'],
    blurb:
      'Cathedral Ledge looms over this Mount Washington Valley village where tax-free outlet shopping meets world-class ice climbing and the Conway Scenic Railroad. The Kancamagus Highway, possibly New England\'s finest fall foliage drive, begins just down the road.',
    weatherAdvisory:
      'Mount Washington nearby holds the record for highest surface wind speed ever observed; winter conditions can be arctic.',
  },
  {
    name: 'Lake Placid',
    state: 'New York',
    lat: 44.2795,
    lng: -73.9799,
    vibes: ['mountains', 'outdoors', 'history'],
    bestSeasons: ['summer', 'winter', 'fall'],
    blurb:
      'Two Winter Olympics left behind a bobsled run, ski jumps, and a speed-skating oval that you can actually use in this Adirondack village. Mirror Lake\'s still waters reflect Whiteface Mountain, and the High Peaks trailheads for 46er summits start just outside town.',
    weatherAdvisory:
      'Adirondack winters bring heavy lake-effect snow and temperatures regularly below 0°F.',
  },
  {
    name: 'Lake George',
    state: 'New York',
    lat: 43.4262,
    lng: -73.7118,
    vibes: ['family', 'outdoors', 'mountains'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'Dubbed the "Queen of American Lakes," this 32-mile glacial jewel in the southern Adirondacks mixes classic Americana—minigolf, steamboat cruises, waterpark resorts—with pristine islands you can only reach by boat. Prospect Mountain\'s summit delivers a 100-mile panorama.',
  },
  {
    name: 'Canaan Valley',
    state: 'West Virginia',
    lat: 39.0442,
    lng: -79.4678,
    vibes: ['mountains', 'outdoors', 'budget'],
    bestSeasons: ['summer', 'winter', 'fall'],
    blurb:
      'The highest valley east of the Mississippi shelters a rare boreal ecosystem of bogs, spruce forests, and cross-country ski trails at 3,200 feet. Canaan Valley Resort and Timberline Mountain offer affordable skiing without the pretension.',
    weatherAdvisory:
      'Heavy snowfall and ice storms frequent from November through March; mountain roads can close rapidly.',
  },
  {
    name: 'McCall',
    state: 'Idaho',
    lat: 44.7321,
    lng: -116.0987,
    vibes: ['mountains', 'outdoors', 'family'],
    bestSeasons: ['summer', 'winter'],
    blurb:
      'Payette Lake glitters at the doorstep of the Frank Church Wilderness, the largest roadless area in the Lower 48. The Winter Carnival\'s massive snow sculptures draw thousands, and Brundage Mountain serves up uncrowded powder runs.',
    weatherAdvisory:
      'Heavy mountain snowfall from November through April; some backcountry roads impassable until July.',
  },
  {
    name: 'Big Sky',
    state: 'Montana',
    lat: 45.2833,
    lng: -111.4014,
    vibes: ['mountains', 'outdoors'],
    bestSeasons: ['summer', 'winter'],
    blurb:
      'Big Sky Resort\'s 5,800 skiable acres make it the largest ski area in North America, and Lone Mountain\'s tram-accessed summit sits at 11,166 feet. Summer brings world-class fly fishing on the Gallatin River and the quieter back door to Yellowstone.',
    weatherAdvisory:
      'Extreme cold and blizzard conditions from November through April; wind chill can reach -40°F.',
  },
  {
    name: 'Angel Fire',
    state: 'New Mexico',
    lat: 36.3931,
    lng: -105.2853,
    vibes: ['mountains', 'outdoors', 'family'],
    bestSeasons: ['summer', 'winter'],
    blurb:
      'This Moreno Valley resort village at 8,600 feet combines a family-friendly ski area with New Mexico\'s only downhill mountain bike park. The Vietnam Veterans Memorial State Park on the hillside above town is one of the most moving war memorials in America.',
    weatherAdvisory:
      'Afternoon thunderstorms are frequent June through August; snow possible from October through May.',
  },
  {
    name: 'Ruidoso',
    state: 'New Mexico',
    lat: 33.3317,
    lng: -105.6731,
    vibes: ['mountains', 'outdoors', 'family'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'Surrounded by the Lincoln National Forest at 7,000 feet, Ruidoso is where Texans flee the summer heat for cool pines, horse racing at Ruidoso Downs, and the otherworldly lava fields of Valley of Fires. Ski Apache, owned by the Mescalero Apache Tribe, runs through winter.',
    weatherAdvisory:
      'Monsoon thunderstorms bring flash flood risk from July through September.',
  },
  {
    name: 'Gardiner',
    state: 'Montana',
    lat: 45.0322,
    lng: -110.7057,
    vibes: ['mountains', 'outdoors'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'The original entrance to Yellowstone National Park—marked by the Roosevelt Arch since 1903—this tiny town on the Yellowstone River is the only park gateway open year-round to vehicle traffic. Elk routinely wander through the streets, and world-class whitewater rafting launches from the town park.',
    weatherAdvisory:
      'Winters are harsh with heavy snow and sub-zero temperatures; spring roads into Yellowstone open on a rolling schedule through June.',
  },
  {
    name: 'Dubois',
    state: 'Wyoming',
    lat: 43.5335,
    lng: -109.6305,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'Wedged between the Absaroka and Wind River ranges, this former tie-hack timber town shelters the National Bighorn Sheep Center and access to some of Wyoming\'s most remote wilderness. The badlands formations along the approach from Togwotee Pass rival anything in the Southwest.',
    weatherAdvisory:
      'Togwotee Pass (9,658 ft) frequently closes in winter blizzards; extreme wind gusts common.',
  },
  {
    name: 'Wall',
    state: 'South Dakota',
    lat: 43.9925,
    lng: -102.2413,
    vibes: ['outdoors', 'offbeat', 'family'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'Wall Drug\'s iconic highway billboards have lured travelers off I-90 since 1931, but the real draw is the Badlands National Park entrance just eight miles south. Bighorn sheep, bison, and prairie dogs roam a surreal landscape of eroded buttes and pinnacles.',
    weatherAdvisory:
      'Severe thunderstorms and tornadoes possible in summer; winter blizzards can close I-90.',
  },
  {
    name: 'Keystone',
    state: 'South Dakota',
    lat: 43.8928,
    lng: -103.4233,
    vibes: ['family', 'history', 'outdoors'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'The last stop before Mount Rushmore, this old mining town in the Black Hills offers the Iron Mountain Road—a marvel of pigtail bridges and tunnels that perfectly frame the monument ahead. Nearby Custer State Park\'s wildlife loop brings you face-to-face with free-roaming bison herds.',
  },
  {
    name: 'Cherokee',
    state: 'North Carolina',
    lat: 35.4743,
    lng: -83.3146,
    vibes: ['mountains', 'history', 'outdoors', 'family'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'The Qualla Boundary, homeland of the Eastern Band of Cherokee Indians, sits at the southern entrance to Great Smoky Mountains National Park. The Museum of the Cherokee Indian tells 11,000 years of history, and the Oconaluftee River trail offers easy waterside walks with elk sightings.',
  },
  {
    name: 'Townsend',
    state: 'Tennessee',
    lat: 35.6796,
    lng: -83.7533,
    vibes: ['mountains', 'outdoors', 'budget'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'Called the "Peaceful Side of the Smokies," Townsend trades Gatlinburg\'s tourist strip for a quiet two-lane road along the Little River where tubing and trout fishing are the main attractions. Cades Cove, the park\'s most visited valley of historic cabins and wildlife, is minutes away.',
  },
  {
    name: 'Cave City',
    state: 'Kentucky',
    lat: 37.1367,
    lng: -85.9569,
    vibes: ['outdoors', 'history', 'family'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'The gateway to Mammoth Cave National Park—the world\'s longest known cave system at over 420 miles mapped—this small town serves as base camp for underground tours ranging from easy walkways to belly-crawl adventures. Above ground, the Green River offers peaceful canoe floats through old-growth forest.',
  },
  {
    name: 'Lee Vining',
    state: 'California',
    lat: 37.9577,
    lng: -119.1210,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'This tiny eastern Sierra gateway guards the Tioga Pass entrance to Yosemite and the alien tufa towers of Mono Lake, a million-year-old inland sea. The Whoa Nellie Deli at the Mobil gas station is improbably one of the best restaurants in the Sierra.',
    weatherAdvisory:
      'Tioga Pass (9,943 ft) closes with the first major snowfall, typically November through late May.',
  },
  {
    name: 'Three Rivers',
    state: 'California',
    lat: 36.4388,
    lng: -118.9048,
    vibes: ['mountains', 'outdoors'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'The sole gateway to Sequoia National Park, this Kaweah River hamlet gives you the General Sherman Tree—the largest living thing on Earth—and the vertiginous Moro Rock staircase. The road climbs from oak-studded foothills to 7,000-foot giant sequoia groves in under an hour.',
    weatherAdvisory:
      'Generals Highway closes to through-traffic in winter; chains often required November through April.',
  },
  {
    name: 'Mineral',
    state: 'California',
    lat: 40.3476,
    lng: -121.5965,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'The gateway to Lassen Volcanic National Park, this barely-there crossroads offers access to boiling mud pots, fumaroles, and the largest plug dome volcano in the world. Bumpass Hell\'s boardwalk over active hydrothermal vents feels like walking on another planet.',
    weatherAdvisory:
      'Lassen Park Highway typically closes from late October through June due to heavy snowfall above 8,000 feet.',
  },
  {
    name: 'Whittier',
    state: 'Alaska',
    lat: 60.7733,
    lng: -148.6836,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['summer'],
    blurb:
      'Nearly the entire town lives in a single building—the 14-story Begich Towers—and you can only arrive via a one-lane tunnel through a mountain or by boat. But the reward is Prince William Sound\'s glaciers, and kayaking among icebergs calving from Blackstone Bay.',
    weatherAdvisory:
      'Accessible only through the Anton Anderson Memorial Tunnel; severe winter weather limits access October through May.',
  },
  {
    name: 'Winthrop',
    state: 'Washington',
    lat: 48.4712,
    lng: -120.1862,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['summer', 'winter'],
    blurb:
      'This Old West-themed Methow Valley town is the eastern gateway to North Cascades National Park and home to the largest groomed cross-country ski trail system in North America. The Methow Trails network spans 120 miles of pristine wilderness terrain.',
    weatherAdvisory:
      'North Cascades Highway (SR 20) closes from roughly November through April due to avalanche danger.',
  },
  {
    name: 'Whitewater',
    state: 'Colorado',
    lat: 38.9864,
    lng: -108.4441,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'Perched near the entrance to the Black Canyon of the Gunnison, one of America\'s steepest and most dramatic gorges, this tiny outpost provides access to the Painted Wall—Colorado\'s highest cliff face at 2,250 feet. The canyon\'s narrowest point lets in only 33 minutes of sunlight per day.',
  },
  {
    name: 'Pinedale',
    state: 'Wyoming',
    lat: 42.8666,
    lng: -109.8608,
    vibes: ['mountains', 'outdoors'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'Gateway to the Wind River Range and the Bridger Wilderness, Pinedale offers trailhead access to Cirque of the Towers—a granite amphitheater that draws serious backpackers from around the world. The Museum of the Mountain Man chronicles the fur trade rendezvous that once gathered here.',
    weatherAdvisory:
      'At 7,175 feet, winter temperatures regularly drop below -20°F; high-country trails snow-covered until July.',
  },
  {
    name: 'Silverton',
    state: 'Colorado',
    lat: 37.8119,
    lng: -107.6644,
    vibes: ['mountains', 'history', 'outdoors'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'The Durango & Silverton Narrow Gauge Railroad deposits you in this 9,318-foot mining town ringed by 13,000-foot peaks, where the entire downtown is a National Historic Landmark. The Million Dollar Highway switchbacks above town are among the most white-knuckle drives in America.',
    weatherAdvisory:
      'Avalanche terrain surrounds the town; Red Mountain Pass closes frequently in winter storms.',
  },
  {
    name: 'Heber City',
    state: 'Utah',
    lat: 40.5069,
    lng: -111.4131,
    vibes: ['mountains', 'outdoors', 'family'],
    bestSeasons: ['summer', 'winter'],
    blurb:
      'The Heber Valley Railroad runs a vintage steam train through Provo Canyon while Deer Creek Reservoir and Jordanelle State Park frame the Wasatch Range. Soldier Hollow\'s Olympic Nordic venue now hosts summer tubing runs and winter cross-country ski events.',
  },
  {
    name: 'Red River',
    state: 'New Mexico',
    lat: 36.7064,
    lng: -105.4058,
    vibes: ['mountains', 'outdoors', 'family', 'budget'],
    bestSeasons: ['summer', 'winter'],
    blurb:
      'This old mining camp turned ski village sits at 8,750 feet in the Sangre de Cristo Mountains, offering a laid-back alternative to nearby Taos Ski Valley. The Enchanted Circle Scenic Byway loops through alpine meadows and past Wheeler Peak, New Mexico\'s highest point.',
    weatherAdvisory:
      'Snow accumulates heavily from November through March; afternoon thunderstorms in summer.',
  },
  {
    name: 'Cooke City',
    state: 'Montana',
    lat: 45.0186,
    lng: -109.9383,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['summer'],
    blurb:
      'At the dead-end of the Beartooth Highway and Yellowstone\'s northeast entrance, this 75-person hamlet is one of America\'s most isolated towns accessible by paved road. Grizzlies outnumber humans in the surrounding Absaroka-Beartooth Wilderness, and snowmobiling is the only winter access.',
    weatherAdvisory:
      'The Beartooth Highway closes October through late May; accessible in winter only via Yellowstone or snowmobile.',
  },
  {
    name: 'Ennis',
    state: 'Montana',
    lat: 45.3488,
    lng: -111.7299,
    vibes: ['mountains', 'outdoors'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'The Madison River valley surrounding Ennis produces some of the finest dry-fly trout fishing on Earth, and the town sits squarely between the Tobacco Root and Madison ranges with views that stretch forever. The nearby ghost town of Virginia City preserves Montana\'s gold rush past in authentic, un-restored buildings.',
  },
  {
    name: 'Manitou Springs',
    state: 'Colorado',
    lat: 38.8586,
    lng: -104.9175,
    vibes: ['mountains', 'outdoors', 'offbeat', 'history'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'Eight natural mineral springs bubble through this quirky hillside town at the base of Pikes Peak, where the Incline—a near-vertical 2,768-step former railway grade—has become Colorado\'s most punishing urban hike. The penny arcade, cliff dwellings, and Garden of the Gods are all within walking distance.',
  },
  {
    name: 'Elkins',
    state: 'West Virginia',
    lat: 38.9262,
    lng: -79.8467,
    vibes: ['mountains', 'outdoors', 'history', 'budget'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'The gateway to Monongahela National Forest and Dolly Sods Wilderness—a windswept alpine plateau that feels more like Scotland than Appalachia. The Durbin & Greenbrier Valley Railroad runs excursion trains into some of the most remote mountain scenery in the East.',
  },
  {
    name: 'Ely',
    state: 'Minnesota',
    lat: 47.9032,
    lng: -91.8671,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['summer', 'winter'],
    blurb:
      'The canoe capital of the world sits at the edge of the Boundary Waters Canoe Area Wilderness, a million acres of pristine lakes where motors are banned and the northern lights dance overhead. In winter, the Wolf Center educates visitors about the packs that still roam this forest.',
    weatherAdvisory:
      'Winter temperatures can drop to -40°F; the Boundary Waters are ice-locked from November through April.',
  },
  {
    name: 'Jasper',
    state: 'Arkansas',
    lat: 36.0081,
    lng: -93.1863,
    vibes: ['mountains', 'outdoors', 'budget'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The self-proclaimed "Elk Capital of Arkansas" sits atop the Ozark Plateau where the Buffalo National River—America\'s first national river—carved 400-foot limestone bluffs through ancient bedrock. Boxley Valley meadows at dawn fill with grazing elk herds reintroduced in the 1980s.',
  },
  {
    name: 'Cascade',
    state: 'Idaho',
    lat: 44.5163,
    lng: -116.0420,
    vibes: ['mountains', 'outdoors', 'budget'],
    bestSeasons: ['summer', 'winter'],
    blurb:
      'Cascade Reservoir and the surrounding Boise National Forest provide uncrowded fishing, snowmobiling, and hot spring soaking at Warm Lake—a fraction of the cost and crowds of McCall just 30 miles north. Tamarack Resort offers four-season mountain recreation.',
    weatherAdvisory:
      'Heavy snow from November through March; remote forest roads may not open until late June.',
  },
  {
    name: 'Buena Vista',
    state: 'Colorado',
    lat: 38.8422,
    lng: -106.1311,
    vibes: ['mountains', 'outdoors'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'The Arkansas River roars through Brown\'s Canyon National Monument—some of the best commercial whitewater in America—while a ring of 14,000-foot peaks towers overhead. The Cottonwood Hot Springs and Mount Princeton Hot Springs offer soaking with Collegiate Peaks views.',
  },
  {
    name: 'Alpine',
    state: 'Texas',
    lat: 30.3585,
    lng: -103.6610,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['spring', 'fall', 'winter'],
    blurb:
      'This high desert college town at 4,481 feet is the gateway to Big Bend National Park and the Davis Mountains, where McDonald Observatory peers into some of the darkest skies in North America. Sul Ross State University gives it an unexpected cultural pulse for a town of 6,000.',
    weatherAdvisory:
      'Summer temperatures regularly exceed 100°F in Big Bend; carry extra water always.',
  },
  {
    name: 'Spruce Pine',
    state: 'North Carolina',
    lat: 35.9155,
    lng: -82.0688,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'This Blue Ridge Parkway town sits atop the world\'s purest quartz deposits—the raw material for every microchip on Earth. Penland School of Craft, one of America\'s premier art schools, hides in the surrounding mountains alongside gem mines where you can dig your own rubies and sapphires.',
  },
  {
    name: 'Marble Falls',
    state: 'Texas',
    lat: 30.5782,
    lng: -98.2750,
    vibes: ['outdoors', 'family'],
    bestSeasons: ['spring', 'fall'],
    blurb:
      'The gateway to the Texas Hill Country Highland Lakes chain, Marble Falls sits where the Colorado River pools into Lake Marble Falls and Lake LBJ. Granite Shoals and Longhorn Cavern State Park offer above- and below-ground adventures, and wildflower season turns the roadsides into rivers of bluebonnets.',
  },
  {
    name: 'Wellsboro',
    state: 'Pennsylvania',
    lat: 41.7487,
    lng: -77.3005,
    vibes: ['mountains', 'outdoors', 'history'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'Gas-lit streets lead to the Pennsylvania Grand Canyon—a 47-mile, 1,450-foot-deep gorge carved by Pine Creek through the Allegheny Plateau. The Pine Creek Rail Trail runs the canyon floor, and Leonard Harrison State Park overlooks a wilderness that rivals western canyons.',
  },
  {
    name: 'West Jefferson',
    state: 'North Carolina',
    lat: 36.4035,
    lng: -81.4929,
    vibes: ['mountains', 'offbeat', 'food'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'Ashe County\'s creative heart hides a Church of the Frescoes with Ben Long murals, a surprising cheese trail featuring local creameries, and the New River—paradoxically one of the oldest rivers in the world. Mount Jefferson State Natural Area offers panoramic views in every direction.',
  },
  {
    name: 'Cloudcroft',
    state: 'New Mexico',
    lat: 32.9571,
    lng: -105.7425,
    vibes: ['mountains', 'outdoors', 'budget'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'At 8,663 feet in the Sacramento Mountains, Cloudcroft offers a cool pine-forest escape from the Chihuahuan Desert below—temperatures can be 30 degrees cooler than Alamogordo just down the mountain. The Trestle Recreation Area and Rim Trail deliver stunning views over White Sands far below.',
    weatherAdvisory:
      'Snow and ice make US-82 treacherous from November through March; chains sometimes required.',
  },
  {
    name: 'Weaverville',
    state: 'California',
    lat: 40.7307,
    lng: -122.9422,
    vibes: ['mountains', 'outdoors', 'history'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'Gateway to the Trinity Alps Wilderness—California\'s second-largest wilderness area—this Gold Rush town preserves an 1874 Joss House, the oldest continuously used Chinese temple in the state. Granite peaks, alpine lakes, and the Trinity River\'s wild trout streams feel worlds away from the rest of California.',
  },
  {
    name: 'Saguache',
    state: 'Colorado',
    lat: 38.0883,
    lng: -106.1439,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'This tiny San Luis Valley outpost guards access to the Great Sand Dunes National Park, where 750-foot dunes pile against the Sangre de Cristo Range in a landscape that defies Colorado expectations. The fourth-floor museum in the old schoolhouse is a delightfully eccentric local treasure.',
    weatherAdvisory:
      'Sand temperatures can exceed 150°F in summer; high-altitude sun is intense at 7,700 feet.',
  },
  {
    name: 'Livingston',
    state: 'Montana',
    lat: 45.6621,
    lng: -110.5600,
    vibes: ['mountains', 'outdoors', 'food'],
    bestSeasons: ['summer', 'fall'],
    blurb:
      'The Yellowstone River runs through this ranching town where literary legends like Thomas McGuane and Jim Harrison drank at the Murray Bar. A growing restaurant scene and world-class fly fishing on spring creeks make it the sophisticated counterpoint to Big Sky\'s resort polish.',
    weatherAdvisory:
      'Notorious for extreme wind; gusts regularly exceed 60 mph funneling through the Yellowstone Valley gap.',
  },
  {
    name: 'Talkeetna',
    state: 'Alaska',
    lat: 62.3209,
    lng: -150.1066,
    vibes: ['mountains', 'outdoors', 'offbeat'],
    bestSeasons: ['summer'],
    blurb:
      'This funky bush-pilot hamlet at the confluence of three rivers is the staging ground for Denali climbing expeditions, and flightseeing tours of North America\'s tallest peak launch from its gravel airstrip. The town once elected a cat as honorary mayor, which tells you everything about the vibe.',
    weatherAdvisory:
      'Denali is visible only about 30% of summer days due to cloud cover; winters bring extreme cold and minimal daylight.',
  },
  {
    name: 'Grants Pass',
    state: 'Oregon',
    lat: 42.4390,
    lng: -123.3284,
    vibes: ['outdoors', 'mountains', 'budget'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'The Rogue River carves through one of America\'s few Wild and Scenic river corridors here, offering jet boat excursions and multi-day rafting trips through roadless canyon wilderness. Oregon Caves National Monument hides in the Siskiyou Mountains an hour south, a marble palace underground.',
  },
  {
    name: 'Norris',
    state: 'Tennessee',
    lat: 36.1984,
    lng: -84.0681,
    vibes: ['mountains', 'outdoors', 'history'],
    bestSeasons: ['spring', 'summer', 'fall'],
    blurb:
      'America\'s first planned TVA town preserves its 1930s New Deal architecture while Norris Dam State Park and the Museum of Appalachia provide a window into mountain heritage. The Clinch River tailwater below the dam is one of Tennessee\'s premier trout streams, and Big Ridge State Park offers quiet lake swimming.',
  },
];
