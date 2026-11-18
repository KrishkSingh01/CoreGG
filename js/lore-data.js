"use strict";

const site = {
  "title": "CoreGG Teyvat Lore Archive",
  "baseUrl": "https://coregg.pages.dev",
  "owner": "CoreGG"
};
const regions = [
  {
    "id": "mondstadt",
    "name": "Mondstadt",
    "note": "A nation associated with freedom and the Anemo Archon.",
    "background": "github-images-02/images--lore--mondstadt-preview.webp",
    "backgroundAlt": "Mondstadt as shown in Genshin Impact"
  },
  {
    "id": "liyue",
    "name": "Liyue",
    "note": "A harbor nation shaped by contracts, trade, and long memory.",
    "background": "github-images-02/images--lore--records--liyue.webp",
    "backgroundAlt": "Liyue as shown in Genshin Impact"
  },
  {
    "id": "inazuma",
    "name": "Inazuma",
    "note": "An island nation whose stories turn around change and eternity.",
    "background": "github-images-02/images--lore--records--inazuma.webp",
    "backgroundAlt": "Inazuma as shown in Genshin Impact"
  },
  {
    "id": "sumeru",
    "name": "Sumeru",
    "note": "A land of scholarship, forests, desert, and living memory.",
    "background": "github-images-02/images--lore--records--sumeru.webp",
    "backgroundAlt": "Sumeru as shown in Genshin Impact"
  },
  {
    "id": "fontaine",
    "name": "Fontaine",
    "note": "A nation of water, courts, invention, and performance.",
    "background": "github-images-02/images--lore--records--fontaine.webp",
    "backgroundAlt": "Fontaine as shown in Genshin Impact"
  },
  {
    "id": "natlan",
    "name": "Natlan",
    "note": "A nation of tribes, contests, and the Pyro element.",
    "background": "github-images-02/images--lore--records--natlan.webp",
    "backgroundAlt": "Natlan as shown in Genshin Impact"
  },
  {
    "id": "nod-krai",
    "name": "Nod-Krai",
    "note": "A borderland at Teyvat’s northern edge, tied to the Song of the Welkin Moon.",
    "background": "github-images-02/images--lore--records--nod-krai.webp",
    "backgroundAlt": "Nod-Krai as shown in Genshin Impact"
  },
  {
    "id": "snezhnaya",
    "name": "Snezhnaya",
    "note": "A Cryo nation whose full story remains to be told.",
    "background": "github-images-02/images--lore--records--snezhnaya.webp",
    "backgroundAlt": "Snezhnaya as shown in Genshin Impact"
  },
  {
    "id": "teyvat-unknown",
    "name": "Teyvat & Unknown",
    "note": "Records that cross borders or remain difficult to place.",
    "background": "github-images-02/images--lore--records--teyvat.webp",
    "backgroundAlt": "Teyvat & Unknown as shown in Genshin Impact"
  }
];
const categories = [
  {
    "id": "character-records",
    "name": "Character Records",
    "description": "People whose choices shape Teyvat’s history."
  },
  {
    "id": "books-literature",
    "name": "Books & Literature",
    "description": "Books, songs, and written records found in the game."
  },
  {
    "id": "ancient-civilizations",
    "name": "Ancient Civilizations",
    "description": "Past societies and ruins known through in-game records."
  },
  {
    "id": "gods-divinity",
    "name": "Gods & Divinity",
    "description": "Archons, gods, and questions of divine authority."
  },
  {
    "id": "organizations-factions",
    "name": "Organizations & Factions",
    "description": "Groups that influence events across the nations."
  },
  {
    "id": "quest-chronicles",
    "name": "Quest Chronicles",
    "description": "Story chapters and the events they establish."
  },
  {
    "id": "relics-equipment",
    "name": "Relics & Equipment",
    "description": "Objects that carry a documented history."
  },
  {
    "id": "species-creatures",
    "name": "Species & Creatures",
    "description": "Peoples and creatures described in the world."
  },
  {
    "id": "geography-locations",
    "name": "Geography & Locations",
    "description": "Cities, regions, and places with a story to tell."
  },
  {
    "id": "languages-scripts",
    "name": "Languages & Ancient Scripts",
    "description": "Writing systems and language clues shown in Teyvat."
  },
  {
    "id": "hidden-lore",
    "name": "Hidden Lore",
    "description": "Details that connect clues across quests and item text."
  },
  {
    "id": "unanswered-mysteries",
    "name": "Unanswered Mysteries",
    "description": "Open questions, clearly separated from confirmed lore."
  }
];
const entries = [
  {
    "id": "book-of-mountains-and-seas",
    "slug": "book-of-mountains-and-seas",
    "title": "\"Of Mountains and Seas\"",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A classical topographical treatise from ancient Mondstadt cataloguing mountain passes, rivers, and primal elemental currents that shaped the northern valleys after the fall of Decarabian.",
    "body": [
      "\"Of Mountains and Seas\" is an ancient geographical and ecological treatise dating back to the centuries following the overthrow of Old Mondstadt. Scribed by early explorers who mapped the wilderness reshaped by Barbatos's divine winds, the text records the original names and elemental balances of Mondstadt's valleys, lakes, and coastal cliffs.",
      "The chronicle provides rare insight into the terraforming feats performed by the Anemo Archon, describing how jagged frozen peaks were planed into rolling green hills and how Cider Lake was formed around the central island sanctuary.",
      "While primarily an observational field study, the text also notes folklore concerning ancient wandering spirits and elemental creatures that inhabited the land before the establishment of the Knights of Favonius.",
      "Copies of this treatise are preserved in the historical archives of the Knights of Favonius Library and cited by cartographers in the Adventurers' Guild."
    ],
    "keywords": [
      "\"Of Mountains and Seas\"",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/%22Of_Mountains_and_Seas%22"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--dc6c05c6dff8.webp",
      "width": 480,
      "height": 480,
      "alt": "\"Of Mountains and Seas\" image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/%22Of_Mountains_and_Seas%22",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Ancient Mondstadt Geographer",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-1000-years-of-loneliness",
    "slug": "book-1000-years-of-loneliness",
    "title": "1000 Years of Loneliness",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A poignant historical narrative chronicling the thousand-year decline of Mondstadt's aristocracy, the suffering of the enslaved populace, and the lonely vigil of Barbatos before Vennessa's rebellion.",
    "body": [
      "1000 Years of Loneliness is a moving historical narrative exploring the dark millennium between the fall of Decarabian and the liberation of Mondstadt by Vennessa. It reflects on the painful moral decay of the ruling Lawrence Clan, who gradually perverted the founding ideals of freedom into cruel aristocratic tyranny and human slavery.",
      "The text contrasts the extravagant, decadent feasts of the nobles with the silent endurance of ordinary citizens, while exploring the poetic concept of the Anemo Archon's 'lonely slumber' as Barbatos wandered the world in grief over his people's suffering.",
      "Scholars treat this book as both a sobering historical chronicle and an artistic lament, reminding future generations that liberty must be continually defended against the creeping shadows of complacency and greed.",
      "The book is preserved within the upper study of the Knights of Favonius Library and referenced in lectures by the Church of Favonius."
    ],
    "keywords": [
      "1000 Years of Loneliness",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/1000_Years_of_Loneliness"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--eb5ed4d1d11c.webp",
      "width": 480,
      "height": 480,
      "alt": "1000 Years of Loneliness image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/1000_Years_of_Loneliness",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Mondstadt Poet-Chronicler",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-a-brief-history-of-the-pale-starborn",
    "slug": "book-a-brief-history-of-the-pale-starborn",
    "title": "A Brief History of the Pale Starborn",
    "region": "snezhnaya",
    "category": "books-literature",
    "classification": "canon",
    "summary": "An enigmatic mythological text from Snezhnaya recording ancient folk beliefs about the 'Pale Starborn'—stellar beings said to have fallen from the heavens during the dawn of the world.",
    "body": [
      "A Brief History of the Pale Starborn is an esoteric Snezhnayan manuscript recounting ancient northern folklore regarding celestial entities who descended from the stars before the establishment of the Seven Archon thrones. It describes mysterious 'elder fae' and star-touched lineages that navigated the polar nights.",
      "The text is of significant interest to cosmological scholars because it parallels descriptions of the ancient Seelie ancestors and early Descenders, suggesting that the harsh tundra of Snezhnaya retains cultural memories of cosmic arrivals that predate modern history.",
      "While written in an evocative, mythological register, Snezhnayan scholars and Fatui researchers frequently cross-reference its stellar allegories with Ley Line anomalies in the northern permafrost.",
      "Recovered from expeditionary archives in Snezhnaya and circulating in private scholarly collections across the continent."
    ],
    "keywords": [
      "A Brief History of the Pale Starborn",
      "Snezhnaya",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|region_lore     = Snezhnaya"
    ],
    "gameSources": [
      "In-game book collection: 1 volumes",
      "Reference location: Snezhnaya"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/A_Brief_History_of_the_Pale_Starborn"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--2de45bc3316c.webp",
      "width": 480,
      "height": 480,
      "alt": "A Brief History of the Pale Starborn image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/A_Brief_History_of_the_Pale_Starborn",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 1,
      "regionLore": "Snezhnaya",
      "author": "Snezhnayan Chronicler",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-a-drunkards-tale",
    "slug": "book-a-drunkards-tale",
    "title": "A Drunkard's Tale",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A renowned four-volume folk cycle pairing a tavern wanderer's escapades with ancient legends of Wolvendom, singing maidens, and the primordial mourning of the Seelie race.",
    "body": [
      "A Drunkard's Tale is one of Mondstadt's most beloved multi-volume folklore collections. On its surface, it recounts the eccentric misadventures of a carefree drinker who loses his way in the misty forests of Wolvendom, encountering intelligent wolves and ethereal spirits.",
      "Beneath its comedic premise, Volume 3 contains one of the most profound lore revelations in early Mondstadt literature: it describes a pale maiden sitting in an ancient sunken hall, singing a sorrowful melody of the morning star, the destruction of the three moons, and the forgotten beauty of the ancient dawn court.",
      "The text provides essential cultural context for the mutual respect between the wolves of Andrius and the mortals of Mondstadt, establishing that the wilderness carries memories far older than the city walls.",
      "Volumes are found scattered across the Dawn Winery manor, the Angel's Share tavern, and the Knights of Favonius Library."
    ],
    "keywords": [
      "A Drunkard's Tale",
      "Mondstadt",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 4 volumes",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/A_Drunkard%27s_Tale"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--3f52ccbd776d.webp",
      "width": 480,
      "height": 480,
      "alt": "A Drunkard's Tale image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/A_Drunkard%27s_Tale",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 4,
      "regionLore": "Mondstadt",
      "author": "Traditional Mondstadt Balladeer",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-a-legend-of-sword",
    "slug": "book-a-legend-of-sword",
    "title": "A Legend of Sword",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A thrilling six-volume martial-arts space fantasy novel written under a pseudonym by Xingqiu, following an interplanetary swordmaster battling cosmic threats across distant star systems.",
    "body": [
      "A Legend of Sword is an acclaimed martial arts and cosmic adventure series penned by Liyue's own Xingqiu under the nom de plume 'Zhenyu.' Combining traditional Guhua swordplay philosophy with visionary science-fiction premises, the story follows an extraordinary swordmaster traveling between celestial realms.",
      "Initially poorly received in conservative Liyue literary circles due to its unconventional font and avant-garde space setting, the novel became a runaway sensation in Inazuma after being illustrated by the famous artist Calx (Albedo) and published by the Yae Publishing House.",
      "The work demonstrates the growing cultural exchange between Liyue and Inazuma, while playfully hinting at cosmological concepts—such as journeying between stars—that mirror the real nature of the Traveler.",
      "Complete sets can be purchased at Wanwen Bookhouse in Liyue Harbor and Yae Publishing House in Inazuma City."
    ],
    "keywords": [
      "A Legend of Sword",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Zhenyu"
    ],
    "gameSources": [
      "In-game book collection: 6 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/A_Legend_of_Sword"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--b8e6059b2a55.webp",
      "width": 480,
      "height": 480,
      "alt": "A Legend of Sword image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/A_Legend_of_Sword",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 6,
      "regionLore": "None",
      "author": "Zhenyu (Xingqiu)",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-a-nameless-adventurers-notes",
    "slug": "book-a-nameless-adventurers-notes",
    "title": "A Nameless Adventurer's Notes",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "Field journal fragments left behind by an early explorer who mapped the thermal caverns, obsidian cliffs, and Saurian nesting grounds of ancient Natlan.",
    "body": [
      "A Nameless Adventurer's Notes contains surviving diary entries penned by an intrepid explorer who ventured into the untamed volcanic wilderness of Natlan before the establishment of modern tribal borders.",
      "The journal records firsthand encounters with wild Tepetlisaurs burrowing through mineral-rich obsidian veins, descriptions of geothermal hot springs, and early observations of the spiritual resonance between human souls and the Night Kingdom.",
      "The notes emphasize the unforgiving nature of Natlan's terrain, offering practical advice on navigating liquid lava flows and respecting the sacred totems of local warrior clans.",
      "Preserved as an archival relic by the Adventurers' Guild and studied by traveling scholars researching Natlan's geography."
    ],
    "keywords": [
      "A Nameless Adventurer's Notes",
      "Natlan",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/A_Nameless_Adventurer%27s_Notes"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--33c341e3d73a.webp",
      "width": 480,
      "height": 480,
      "alt": "A Nameless Adventurer's Notes image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/A_Nameless_Adventurer%27s_Notes",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Natlan",
      "author": "Nameless Natlan Adventurer",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-a-preliminary-study-of-sangonomiya-folk-belief",
    "slug": "book-a-preliminary-study-of-sangonomiya-folk-belief",
    "title": "A Preliminary Study of Sangonomiya Folk Belief",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "An academic research monograph by a Sumeru Akademiya ethnographer examining the religious veneration of the Great Serpent Orobashi on Watatsumi Island.",
    "body": [
      "A Preliminary Study of Sangonomiya Folk Belief is a rigorous anthropological monograph authored by Shihab Purbiruni, a researcher from the Vahumana Darshan of the Sumeru Akademiya. The text investigates the distinct religious culture of Watatsumi Island and its divergence from the Narukami Shogunate.",
      "The study examines how the worship of Watatsumi Omikami (Orobashi) integrates ancient Byakuyakoku (Enkanomiyan) water rituals with surface agriculture, explaining why the islanders revere the serpent god as their benevolent savior who brought them out of subterranean darkness.",
      "It also analyzes the Sangonomiya clan's role as hereditary priestesses and the tensions that arose when Orobashi was slain by the Raiden Shogun on Yashiori Island during the Archon War.",
      "Copies of this monograph are catalogued in the House of Daena in Sumeru and traded in academic circles in Inazuma."
    ],
    "keywords": [
      "A Preliminary Study of Sangonomiya Folk Belief",
      "Inazuma",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature",
      "Shihab Purbiruni"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/A_Preliminary_Study_of_Sangonomiya_Folk_Belief"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c8cc3f3e0142.webp",
      "width": 480,
      "height": 480,
      "alt": "A Preliminary Study of Sangonomiya Folk Belief image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/A_Preliminary_Study_of_Sangonomiya_Folk_Belief",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Inazuma",
      "author": "Shihab Purbiruni (Sumeru Scholar)",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-a-thousand-nights",
    "slug": "book-a-thousand-nights",
    "title": "A Thousand Nights",
    "region": "sumeru",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A celebrated six-part anthology of Sumeru desert tales and parables, weaving stories of jinn, wandering merchants, ancient kings, and the oasis spirits of the Great Red Sand.",
    "body": [
      "A Thousand Nights is a rich, tapestry-like collection of six surviving story cycles gathered by wanderers traversing the sands of Sumeru. Drawing inspiration from ancient folklore of King Deshret's era, the tales feature clever tricksters, enchanting Jinni, and moral fables about greed, wisdom, and fate.",
      "Surviving as torn parchment fragments scattered across the desert ruins and oasis settlements, the stories reflect the resilient oral culture of the Eremite tribes, who preserved the memories of lost golden cities through storytelling around evening campfires.",
      "The narrative frame also contains subtle historical allegories to the ancient paradise of Ay-Khanoum and the tragic bargains struck between human lords and primeval elemental spirits.",
      "Travelers collect torn pages throughout the desert of Sumeru, assembling them into complete volumes for the Akademiya's archives."
    ],
    "keywords": [
      "A Thousand Nights",
      "Sumeru",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|vol1      = Torn Page: A Thousand Nights (I)"
    ],
    "gameSources": [
      "In-game book collection: 6 volumes",
      "Reference location: Sumeru"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/A_Thousand_Nights"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--05dbc45fd502.webp",
      "width": 480,
      "height": 480,
      "alt": "A Thousand Nights image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/A_Thousand_Nights",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 6,
      "regionLore": "Sumeru",
      "author": "Zubayr & Desert Storytellers",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-abyss-order",
    "slug": "lore-abyss-order",
    "title": "Abyss Order",
    "region": "teyvat-unknown",
    "category": "organizations-factions",
    "classification": "canon",
    "summary": "The Abyss Order is a hostile faction whose members include hilichurls and other Abyss creatures. Its plans are tied to the Traveler’s twin and the aftermath of Khaenri’ah’s destruction.",
    "body": [
      "The Abyss Order is a hostile faction whose members include hilichurls and other Abyss creatures. Its plans are tied to the Traveler’s twin and the aftermath of Khaenri’ah’s destruction.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Abyss Order",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "organizations factions",
      "We Will Be Reunited",
      "Caribert",
      "Abyss Order quest records"
    ],
    "gameSources": [
      "We Will Be Reunited",
      "Caribert",
      "Abyss Order quest records"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Abyss_Order"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--33358e2258ef.webp",
      "width": 480,
      "height": 269,
      "alt": "Abyss Order image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Abyss_Order",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-albedo",
    "slug": "lore-albedo",
    "title": "Albedo",
    "region": "mondstadt",
    "category": "character-records",
    "classification": "canon",
    "summary": "Albedo is a synthetic human created by the alchemist Rhinedottir. He serves the Knights of Favonius as their Chief Alchemist and investigates the natural world through alchemy.",
    "body": [
      "Albedo is a synthetic human created by the alchemist Rhinedottir. He serves the Knights of Favonius as their Chief Alchemist and investigates the natural world through alchemy.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Albedo",
      "Mondstadt",
      "Genshin Impact lore",
      "character records",
      "Character Story",
      "Dragonspine quests",
      "The Chalk Prince and the Dragon"
    ],
    "gameSources": [
      "Character Story",
      "Dragonspine quests",
      "The Chalk Prince and the Dragon"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Albedo"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--f941355d3fce.webp",
      "width": 270,
      "height": 480,
      "alt": "Albedo image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Albedo",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-alice",
    "slug": "lore-alice",
    "title": "Alice",
    "region": "mondstadt",
    "category": "character-records",
    "classification": "canon",
    "summary": "Alice is a powerful, long-lived adventurer and a member of the Hexenzirkel. She is Klee’s mother and is known through her travel writing, inventions, and messages across Teyvat.",
    "body": [
      "Alice is a powerful, long-lived adventurer and a member of the Hexenzirkel. She is Klee’s mother and is known through her travel writing, inventions, and messages across Teyvat.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Alice",
      "Mondstadt",
      "Genshin Impact lore",
      "character records",
      "Character stories and voice-overs",
      "Teyvat Travel Guide",
      "Hexenzirkel references"
    ],
    "gameSources": [
      "Character stories and voice-overs",
      "Teyvat Travel Guide",
      "Hexenzirkel references"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Alice"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--5061c7742509.webp",
      "width": 332,
      "height": 480,
      "alt": "Alice image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Alice",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-along-with-divinity-prologue",
    "slug": "book-along-with-divinity-prologue",
    "title": "Along with Divinity: Prologue",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "An early theological treatise from Mondstadt examining the philosophical relationship between mortals, elemental nature, and the gentle guidance of the Anemo Archon Barbatos.",
    "body": [
      "Along with Divinity: Prologue is a reverent, philosophical text preserved by the Church of Favonius that explores what it means to live in a world governed by gods while retaining human agency and moral responsibility.",
      "The author analyzes how Barbatos chose to grant his people absolute freedom rather than commanding them like a sovereign monarch, arguing that true faith in the Wind God is demonstrated not through rigid dogma, but through courage, kindness, and free self-expression.",
      "The text provides valuable historical perspective on the early Church's theology, before the dark era of the aristocracy corrupted civic and religious institutions.",
      "Preserved in the private collections of the Mondstadt Cathedral and studied by theological scholars."
    ],
    "keywords": [
      "Along with Divinity: Prologue",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Along_with_Divinity:_Prologue"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--61936dd205fa.webp",
      "width": 480,
      "height": 480,
      "alt": "Along with Divinity: Prologue image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Along_with_Divinity:_Prologue",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Scholars of the Favonius Church",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-an-ode-to-khvarena",
    "slug": "book-an-ode-to-khvarena",
    "title": "An Ode to Khvarena",
    "region": "sumeru",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A sacred hymn and liturgical chronicle from the Girdle of the Sands celebrating the divine radiance of Khvarena and the holy struggle against the Abyssal Cataclysm.",
    "body": [
      "An Ode to Khvarena is an ancient devotional chronicle and liturgical hymn originating from the Pari and the Order of Sceptics (the Nagarjunites) in the northern desert of Sumeru. It praises the divine, uncorrupted light of Khvarena—the primeval celestial energy left behind by the Goddess of Flowers.",
      "The text records the heroic sacrifices made during the Cataclysm 500 years ago, when the great beast Elynas, Durin, and abyssal riftbeasts breached the Ley Lines. It recounts how the Pari, created through the sacrifice of Greater Lord Rukkhadevata and the divine bird Simurgh, threw themselves into the breach to seal the Tunigi Hollow.",
      "Filled with profound metaphysical lore, the hymn explains how Khvarena purges the abyssal gray crystals and restores life to contaminated desert springs.",
      "Recovered in the oasis of Vourukasha and treasured by the Pari as a testament to their sacred duty."
    ],
    "keywords": [
      "An Ode to Khvarena",
      "Sumeru",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Sumeru"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/An_Ode_to_Khvarena"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--6043ea775c63.webp",
      "width": 480,
      "height": 480,
      "alt": "An Ode to Khvarena image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/An_Ode_to_Khvarena",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Sumeru",
      "author": "Nagarjunites & Pari Scribes",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-ancient-investigation-journal-part-i",
    "slug": "book-ancient-investigation-journal-part-i",
    "title": "Ancient Investigation Journal: Part I",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "First field journal of an ill-fated historical expedition that attempted to explore the subterranean ruins and frozen palaces of Sal Vindagnyr on Dragonspine.",
    "body": [
      "Ancient Investigation Journal: Part I contains the recovered logbook entries of a pioneering scientific expedition that ventured into the freezing depths of Dragonspine centuries before modern heating equipment was developed.",
      "The journal documents the team's initial excitement upon discovering ancient stone carvings, intact ceremonial mechanisms, and frozen vegetation that proved the mountain was once a temperate, flourishing kingdom.",
      "However, the tone quickly turns foreboding as the researchers encounter severe temperature drops, malfunctioning compasses caused by the Skyfrost Nail's Ley Line interference, and structural collapses in the ice caves.",
      "Found in an abandoned campsite on the western slopes of Dragonspine, serving as both a historical record and a grim warning to modern adventurers."
    ],
    "keywords": [
      "Ancient Investigation Journal: Part I",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Ancient_Investigation_Journal:_Part_I"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--84f9a99d00d0.webp",
      "width": 480,
      "height": 480,
      "alt": "Ancient Investigation Journal: Part I image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Ancient_Investigation_Journal:_Part_I",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Dragonspine Expedition Team",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-ancient-investigation-journal-part-ii",
    "slug": "book-ancient-investigation-journal-part-ii",
    "title": "Ancient Investigation Journal: Part II",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "Second field journal recounting the expedition's discovery of the ruined Starglow Cavern and their desperate struggle against freezing temperatures and food shortages.",
    "body": [
      "Ancient Investigation Journal: Part II continues the harrowing chronicle of the Dragonspine expedition as the researchers push deeper into the subterranean heart of Starglow Cavern.",
      "The entries detail the discovery of colossal petrified roots from the ancient white tree that once nourished Sal Vindagnyr, alongside the horrifying realization that the blizzard was not an ordinary seasonal storm, but an unnatural, permanent elemental curse.",
      "With supplies dwindling and team members falling victim to hypothermia, the leader describes their futile attempts to decipher the star murals before retreating toward the summit in search of an escape route.",
      "Discovered amidst the frozen debris of Starglow Cavern during the Dragonspine exploration quest."
    ],
    "keywords": [
      "Ancient Investigation Journal: Part II",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Ancient_Investigation_Journal:_Part_II"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--84f9a99d00d0.webp",
      "width": 480,
      "height": 480,
      "alt": "Ancient Investigation Journal: Part II image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Ancient_Investigation_Journal:_Part_II",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Dragonspine Expedition Team",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-ancient-investigation-journal-part-iii",
    "slug": "book-ancient-investigation-journal-part-iii",
    "title": "Ancient Investigation Journal: Part III",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "Final tragic journal entries of the Dragonspine expedition, recording their last stand at the secret vault and their poignant final farewells.",
    "body": [
      "Ancient Investigation Journal: Part III is the heartbreaking conclusion to the Dragonspine expedition logs. Trapped in a sealed vault near the mountain summit by howling blizzards and ice avalanches, the surviving researchers write their final messages to their families in Mondstadt.",
      "The final entry contains a profound plea for future explorers to understand that the mountain's ruin was caused by a strike from the sky, warning humanity never to challenge the terrifying wrath of the heavens.",
      "The discovery of this journal unlocks the ancient sealed gate holding the Snow-Tombed Starsilver claymore, allowing the Traveler to honor the fallen researchers' memory centuries later.",
      "Recovered from the locked secret room beneath the Dragonspine statue."
    ],
    "keywords": [
      "Ancient Investigation Journal: Part III",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Ancient_Investigation_Journal:_Part_III"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--84f9a99d00d0.webp",
      "width": 480,
      "height": 480,
      "alt": "Ancient Investigation Journal: Part III image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Ancient_Investigation_Journal:_Part_III",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Dragonspine Expedition Team",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-anecdota-septentrionalis",
    "slug": "book-anecdota-septentrionalis",
    "title": "Anecdota Septentrionalis",
    "region": "fontaine",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This recovered Remurian scroll makes claims that cannot be independently checked. Its uncertain status is part of the record, not proof that the claims are true.",
    "body": [
      "This recovered Remurian scroll makes claims that cannot be independently checked. Its uncertain status is part of the record, not proof that the claims are true.",
      "The source index places this book collection in Fontaine. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Anecdota Septentrionalis",
      "Fontaine",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Fontaine"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Anecdota_Septentrionalis"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--1214167bb2d2.webp",
      "width": 480,
      "height": 480,
      "alt": "Anecdota Septentrionalis image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Anecdota_Septentrionalis",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Fontaine",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-ballads-of-the-squire",
    "slug": "book-ballads-of-the-squire",
    "title": "Ballads of the Squire",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This two-part ballad cycle tells of the Dawn Knight Ragnvindr’s early service as a squire, blending local memory with heroic storytelling.",
    "body": [
      "This two-part ballad cycle tells of the Dawn Knight Ragnvindr’s early service as a squire, blending local memory with heroic storytelling.",
      "The source index places this book collection in Mondstadt. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Ballads of the Squire",
      "Mondstadt",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Ballads_of_the_Squire"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--f9a25e83e77f.webp",
      "width": 480,
      "height": 480,
      "alt": "Ballads of the Squire image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Ballads_of_the_Squire",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "Mondstadt",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "before-sun-moon",
    "slug": "before-sun-and-moon",
    "title": "Before Sun and Moon",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Enkanomiya text preserves an ancient writer’s account of the world before the current order. Treat it as an in-world historical source: the text is canon, while its claims need to be read alongside other records.",
    "body": [
      "This Enkanomiya text preserves an ancient writer’s account of the world before the current order. Treat it as an in-world historical source: the text is canon, while its claims need to be read alongside other records.",
      "The source index places this written record in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Before Sun and Moon",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Before_Sun_and_Moon"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-01/images--lore--catalog--4e4bec5ee8cd.webp",
      "width": 480,
      "height": 480,
      "alt": "Before Sun and Moon image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Before_Sun_and_Moon",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-belyi-and-chernyi",
    "slug": "book-belyi-and-chernyi",
    "title": "Belyi and Chernyi",
    "region": "snezhnaya",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This satirical novel follows a nobleman who takes a potion and struggles with two competing minds. The story is fiction by the in-world author Hvergelmir.",
    "body": [
      "This satirical novel follows a nobleman who takes a potion and struggles with two competing minds. The story is fiction by the in-world author Hvergelmir.",
      "The source index places this book collection in Snezhnaya. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Belyi and Chernyi",
      "Snezhnaya",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|region_lore     = Snezhnaya"
    ],
    "gameSources": [
      "In-game book collection: 1 volumes",
      "Reference location: Snezhnaya"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Belyi_and_Chernyi"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--47eddfffb07a.webp",
      "width": 480,
      "height": 480,
      "alt": "Belyi and Chernyi image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Belyi_and_Chernyi",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 1,
      "regionLore": "Snezhnaya",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-biography-of-gunnhildr",
    "slug": "book-biography-of-gunnhildr",
    "title": "Biography of Gunnhildr",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A foundational historical biography chronicling the heroic leader Gunnhildr, whose faith in the wind sprite Barbatos saved her clan from the blizzard of Decarabian.",
    "body": [
      "Biography of Gunnhildr is a revered historical chronicle recounting the origin of the Gunnhildr Clan—one of the oldest and most noble founding families of Mondstadt, to which Acting Grand Master Jean and Deaconess Barbara belong.",
      "Set 2,600 years ago during the freezing conflict between Decarabian and Andrius, the text describes how the clan leader Gunnhildr led her starving people away from the howling winds into the wilderness. Praying desperately for survival, her faith reached a tiny, benevolent wind sprite that drifted upon the gale.",
      "Answering their prayers, the wind sprite Barbatos shielded the clan from the freezing blizzards, nurtured their crops, and provided shelter. In gratitude, the Gunnhildr clan became the wind sprite's first devoted followers, fighting alongside him in the revolution that toppled Decarabian.",
      "Preserved in the library of the Knights of Favonius and revered as an essential source on Mondstadt's founding ethos."
    ],
    "keywords": [
      "Biography of Gunnhildr",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Biography_of_Gunnhildr"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--fdda53fc1816.webp",
      "width": 480,
      "height": 480,
      "alt": "Biography of Gunnhildr image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Biography_of_Gunnhildr",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Gunnhildr Family Chronicler",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-breeze-amidst-the-forest",
    "slug": "book-breeze-amidst-the-forest",
    "title": "Breeze Amidst the Forest",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This two-part collection preserves old Mondstadt songs and ballads, offering a literary window into the nation’s past.",
    "body": [
      "This two-part collection preserves old Mondstadt songs and ballads, offering a literary window into the nation’s past.",
      "The source index places this book collection in Mondstadt. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Breeze Amidst the Forest",
      "Mondstadt",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Breeze_Amidst_the_Forest"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--5f4ca96855fa.webp",
      "width": 480,
      "height": 480,
      "alt": "Breeze Amidst the Forest image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Breeze_Amidst_the_Forest",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "Mondstadt",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "celestia-question",
    "slug": "celestia-unanswered-questions",
    "title": "Celestia: What Is Still Unknown?",
    "region": "teyvat-unknown",
    "category": "unanswered-mysteries",
    "classification": "canon",
    "summary": "Celestia exists in the game’s world, but its full role, motives, and history are not completely explained.",
    "body": [
      "Celestia appears in the sky above Teyvat and is discussed in quests, item descriptions, and character dialogue. The game has not yet provided a complete account of its history or purpose.",
      "This is an open question, not a claim that one fan theory is true. New quest releases may change what can be said with confidence."
    ],
    "keywords": [
      "Celestia",
      "heavenly principles",
      "Unknown God",
      "open question",
      "theory"
    ],
    "gameSources": [
      "Archon Quests",
      "Teyvat Chapter Storyline Preview: Travail"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Celestia",
      "url": "https://genshin-impact.fandom.com/wiki/Celestia"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--celestia-unanswered-questions.webp",
      "alt": "Celestia: What Is Still Unknown? image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Celestia",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 480
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-conch-echoes",
    "slug": "book-conch-echoes",
    "title": "Conch Echoes",
    "region": "nod-krai",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Nod-Krai tale recalls children who spoke with conch shells in the frontier’s distant past. The original storyteller is unknown.",
    "body": [
      "This Nod-Krai tale recalls children who spoke with conch shells in the frontier’s distant past. The original storyteller is unknown.",
      "The source index places this book collection in Nod-Krai. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Conch Echoes",
      "Nod-Krai",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|region_lore     = Nod-Krai"
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Nod-Krai"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Conch_Echoes"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--44d02826de58.webp",
      "width": 480,
      "height": 480,
      "alt": "Conch Echoes image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Conch_Echoes",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "Nod-Krai",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-customs-of-liyue",
    "slug": "book-customs-of-liyue",
    "title": "Customs of Liyue",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part reference book collects descriptions of Liyue’s traditions, edited by several scholars. It presents an in-world view of the harbor and its customs.",
    "body": [
      "This three-part reference book collects descriptions of Liyue’s traditions, edited by several scholars. It presents an in-world view of the harbor and its customs.",
      "The source index places this book collection in Liyue. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Customs of Liyue",
      "Liyue",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Fadhlan"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Customs_of_Liyue"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--61b5fdfd57a3.webp",
      "width": 480,
      "height": 480,
      "alt": "Customs of Liyue image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Customs_of_Liyue",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Liyue",
      "author": "Fadhlan",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-dainsleif",
    "slug": "lore-dainsleif",
    "title": "Dainsleif",
    "region": "teyvat-unknown",
    "category": "character-records",
    "classification": "canon",
    "summary": "Dainsleif is a survivor of Khaenri’ah who travels through Teyvat while searching for answers about the Abyss Order. His immortality is tied to the curse placed on Khaenri’ah’s people after the Cataclysm.",
    "body": [
      "Dainsleif is a survivor of Khaenri’ah who travels through Teyvat while searching for answers about the Abyss Order. His immortality is tied to the curse placed on Khaenri’ah’s people after the Cataclysm.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Dainsleif",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "character records",
      "Bough Keeper: Dainsleif",
      "We Will Be Reunited",
      "Caribert"
    ],
    "gameSources": [
      "Bough Keeper: Dainsleif",
      "We Will Be Reunited",
      "Caribert"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Dainsleif"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--a1717b572b82.webp",
      "width": 189,
      "height": 480,
      "alt": "Dainsleif image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Dainsleif",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-debates-on-the-viceroy-of-the-east",
    "slug": "book-debates-on-the-viceroy-of-the-east",
    "title": "Debates on the \"Viceroy of the East\"",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A sophisticated historical-legal dialogue examining maritime law, merchant jurisdiction, and the governance of Liyue Harbor during the early centuries of the Qixing.",
    "body": [
      "Debates on the Viceroy of the East is a scholarly dialogue between Liyue legalists and merchant elders examining how administrative power was divided between the sovereign will of Rex Lapis and mortal harbor officials in ancient times.",
      "The text provides deep insight into the origin of Liyue's maritime regulations, detailing historical debates over port tariffs, mining rights in the Chasm, and the legal definition of Adeptal contracts versus mortal merchant agreements.",
      "It shows that even thousands of years ago, Liyue's scholars were actively laying the intellectual groundwork for human self-governance, demonstrating the remarkable maturity of mortal civil law.",
      "Studied by civil servants in the Ministry of Civil Affairs and available at Wanwen Bookhouse."
    ],
    "keywords": [
      "Debates on the \"Viceroy of the East\"",
      "Inazuma",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Debates_on_the_%22Viceroy_of_the_East%22"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--f6832638ae3f.webp",
      "width": 480,
      "height": 480,
      "alt": "Debates on the \"Viceroy of the East\" image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Debates_on_the_%22Viceroy_of_the_East%22",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Inazuma",
      "author": "Liyue Legalist Historian",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-decarabian",
    "slug": "lore-decarabian",
    "title": "Decarabian",
    "region": "mondstadt",
    "category": "gods-divinity",
    "classification": "canon",
    "summary": "Decarabian ruled old Mondstadt from a city enclosed by powerful winds. The rebellion led by the nameless bard and his allies ended that rule and began a new chapter for the city.",
    "body": [
      "Decarabian ruled old Mondstadt from a city enclosed by powerful winds. The rebellion led by the nameless bard and his allies ended that rule and began a new chapter for the city.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Decarabian",
      "Mondstadt",
      "Genshin Impact lore",
      "gods divinity",
      "Mondstadt Archon Quest",
      "The Biography of Gunnhildr",
      "Old Mondstadt records"
    ],
    "gameSources": [
      "Mondstadt Archon Quest",
      "The Biography of Gunnhildr",
      "Old Mondstadt records"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Decarabian"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--fc576a1efdba.webp",
      "width": 320,
      "height": 480,
      "alt": "Decarabian image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Decarabian",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-descender",
    "slug": "lore-descender",
    "title": "Descender",
    "region": "teyvat-unknown",
    "category": "hidden-lore",
    "classification": "canon",
    "summary": "Descender is a term used for beings whose will can affect Teyvat’s fate. The game’s records caution that coming from outside the world does not automatically make someone a Descender, and the exact criteria remain tied to unfolding story evidence.",
    "body": [
      "Descender is a term used for beings whose will can affect Teyvat’s fate. The game’s records caution that coming from outside the world does not automatically make someone a Descender, and the exact criteria remain tied to unfolding story evidence.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Descender",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "hidden lore",
      "A Space and Time for You",
      "Fontaine Archon Quest, Chapter IV",
      "Narzissenkreuz Ordo records"
    ],
    "gameSources": [
      "A Space and Time for You",
      "Fontaine Archon Quest, Chapter IV",
      "Narzissenkreuz Ordo records"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Descender"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--f3ddcb19a1d4.webp",
      "width": 480,
      "height": 229,
      "alt": "Descender image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Descender",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-diary-of-roald-the-adventurer",
    "slug": "book-diary-of-roald-the-adventurer",
    "title": "Diary of Roald the Adventurer",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "These eleven diary entries follow Roald’s travels and observations across Teyvat, preserving the viewpoint of a roaming adventurer.",
    "body": [
      "These eleven diary entries follow Roald’s travels and observations across Teyvat, preserving the viewpoint of a roaming adventurer.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Diary of Roald the Adventurer",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Roald"
    ],
    "gameSources": [
      "In-game book collection: 11 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Diary_of_Roald_the_Adventurer"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c56297782471.webp",
      "width": 480,
      "height": 480,
      "alt": "Diary of Roald the Adventurer image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Diary_of_Roald_the_Adventurer",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 11,
      "regionLore": "Teyvat",
      "author": "Roald",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-draft-hilichurl-ballads",
    "slug": "book-draft-hilichurl-ballads",
    "title": "Draft Hilichurl Ballads",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "These unfinished poems are associated with Ella Musk’s language research. Their translations provide a glimpse of hilichurl verse while also showing the limits of a learner’s draft.",
    "body": [
      "These unfinished poems are associated with Ella Musk’s language research. Their translations provide a glimpse of hilichurl verse while also showing the limits of a learner’s draft.",
      "The source index places this book collection in Mondstadt. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Draft Hilichurl Ballads",
      "Mondstadt",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Draft_Hilichurl_Ballads"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--9ae65093c291.webp",
      "width": 480,
      "height": 480,
      "alt": "Draft Hilichurl Ballads image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Draft_Hilichurl_Ballads",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Mondstadt",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-dragonspine",
    "slug": "lore-dragonspine",
    "title": "Dragonspine",
    "region": "mondstadt",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "Dragonspine is a frozen mountain south of Mondstadt. Its ruins preserve the history of Sal Vindagnyr, the Skyfrost Nail, and the mountain’s collapse.",
    "body": [
      "Dragonspine is a frozen mountain south of Mondstadt. Its ruins preserve the history of Sal Vindagnyr, the Skyfrost Nail, and the mountain’s collapse.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Dragonspine",
      "Mondstadt",
      "Genshin Impact lore",
      "geography locations",
      "In the Mountains",
      "Ancient Carvings",
      "Skyfrost Nail"
    ],
    "gameSources": [
      "In the Mountains",
      "Ancient Carvings",
      "Skyfrost Nail"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Dragonspine"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--5c14846dfb1d.webp",
      "width": 480,
      "height": 270,
      "alt": "Dragonspine image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Dragonspine",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-dreams-of-the-ancient-capital",
    "slug": "book-dreams-of-the-ancient-capital",
    "title": "Dreams of the Ancient Capital",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A haunting poetic fragment written by a citizen of Old Mondstadt describing the suffocating beauty of Decarabian's tower and the longing for open skies.",
    "body": [
      "Dreams of the Ancient Capital is an evocative poetic collection dating back over 2,600 years to the twilight of Old Mondstadt. The poems capture the eerie, oppressive atmosphere of life within Decarabian's swirling storm barrier, where residents walked beneath stone arches listening to the eternal howl of the wind.",
      "The verses describe how the citizens dreamed of green grass they had never stepped on, blue skies they had never seen, and stars that were blotted out by turbulent clouds, capturing the deep yearning for freedom that eventually ignited the mortal uprising.",
      "Literary scholars in Mondstadt treasure the work as one of the extremely rare surviving literary works produced directly inside Old Mondstadt before its destruction.",
      "Catalogued in the rare book collection of the Knights of Favonius Library."
    ],
    "keywords": [
      "Dreams of the Ancient Capital",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature",
      "Andersdottir"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Dreams_of_the_Ancient_Capital"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--dfab78a0914f.webp",
      "width": 480,
      "height": 480,
      "alt": "Dreams of the Ancient Capital image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Dreams_of_the_Ancient_Capital",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "None",
      "author": "Anonymous Old Mondstadt Poet",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-enkanomiya",
    "slug": "lore-enkanomiya",
    "title": "Enkanomiya",
    "region": "inazuma",
    "category": "ancient-civilizations",
    "classification": "canon",
    "summary": "Enkanomiya is an underground region beneath Watatsumi Island. Its surviving records describe an ancient society, a period without sunlight, and the later arrival of the people who became Watatsumi’s ancestors.",
    "body": [
      "Enkanomiya is an underground region beneath Watatsumi Island. Its surviving records describe an ancient society, a period without sunlight, and the later arrival of the people who became Watatsumi’s ancestors.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Enkanomiya",
      "Inazuma",
      "Genshin Impact lore",
      "ancient civilizations",
      "From Dusk to Dawn in Byakuyakoku",
      "The Phaethons’ Syrtos",
      "Before Sun and Moon"
    ],
    "gameSources": [
      "From Dusk to Dawn in Byakuyakoku",
      "The Phaethons’ Syrtos",
      "Before Sun and Moon"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Enkanomiya"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--8ae9e802b2c0.webp",
      "width": 480,
      "height": 270,
      "alt": "Enkanomiya image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Enkanomiya",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-eremites",
    "slug": "lore-eremites",
    "title": "Eremites",
    "region": "sumeru",
    "category": "organizations-factions",
    "classification": "canon",
    "summary": "The Eremites are desert mercenaries who work in groups across Sumeru and beyond. Their contracts, factions, and histories differ, so the name covers many people rather than one unified organization.",
    "body": [
      "The Eremites are desert mercenaries who work in groups across Sumeru and beyond. Their contracts, factions, and histories differ, so the name covers many people rather than one unified organization.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Eremites",
      "Sumeru",
      "Genshin Impact lore",
      "organizations factions",
      "Sumeru Archon Quest",
      "Golden Slumber",
      "Desert quest records"
    ],
    "gameSources": [
      "Sumeru Archon Quest",
      "Golden Slumber",
      "Desert quest records"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Eremites"
    },
    "image": null,
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-fables-de-fontaine",
    "slug": "book-fables-de-fontaine",
    "title": "Fables de Fontaine",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part book compiles older poems and stories attributed in the game to Marie Hericart de La Fontaine.",
    "body": [
      "This three-part book compiles older poems and stories attributed in the game to Marie Hericart de La Fontaine.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Fables de Fontaine",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Marie Hericart de La Fontaine"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Fables_de_Fontaine"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--221c49fa0b81.webp",
      "width": 480,
      "height": 480,
      "alt": "Fables de Fontaine image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Fables_de_Fontaine",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "None",
      "author": "Marie Hericart de La Fontaine",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-fires-of-autumn-twilight",
    "slug": "book-fires-of-autumn-twilight",
    "title": "Fires of Autumn Twilight",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Natlan scroll brings together two stories associated with different periods. The archive leaves their exact relationship open because the record does not settle it.",
    "body": [
      "This Natlan scroll brings together two stories associated with different periods. The archive leaves their exact relationship open because the record does not settle it.",
      "The source index places this book collection in Natlan. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Fires of Autumn Twilight",
      "Natlan",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Fires_of_Autumn_Twilight"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--a9b8f7db51d4.webp",
      "width": 480,
      "height": 480,
      "alt": "Fires of Autumn Twilight image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Fires_of_Autumn_Twilight",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Natlan",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-first-apprentice-of-guhua",
    "slug": "book-first-apprentice-of-guhua",
    "title": "First Apprentice of Guhua",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A legendary martial chronicle detailing the deeds of the first disciple of the legendary swordsman Guhua, establishing the founding principles of the Guhua Brotherhood.",
    "body": [
      "First Apprentice of Guhua is an essential martial-arts text from Liyue recording the legendary history of the Guhua Clan. It recounts how the first apprentice trained under the grandmaster Guhua on the high peaks of Mt. Lingmeng, learning to wield both the sword (Lightpiercer) and polearm (Raincutter).",
      "The narrative emphasizes that true martial arts are not meant for violence or personal fame, but for chivalry, protecting the weak, and defending justice along the trade roads of Liyue.",
      "The text provides the philosophical foundation that Xingqiu draws upon as he seeks to revive the forgotten Guhua arts in the modern era.",
      "Preserved by the elders of the Guhua Clan at Mt. Lingmeng in Chenyu Vale."
    ],
    "keywords": [
      "First Apprentice of Guhua",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/First_Apprentice_of_Guhua"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--13b8800681a6.webp",
      "width": 480,
      "height": 480,
      "alt": "First Apprentice of Guhua image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/First_Apprentice_of_Guhua",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Teyvat",
      "author": "Guhua Clan Elder",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-flowers-for-princess-fischl",
    "slug": "book-flowers-for-princess-fischl",
    "title": "Flowers for Princess Fischl",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This collector’s text belongs to the fictional series loved by Fischl. Its special packaging and story are part of the game’s character-focused worldbuilding.",
    "body": [
      "This collector’s text belongs to the fictional series loved by Fischl. Its special packaging and story are part of the game’s character-focused worldbuilding.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Flowers for Princess Fischl",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Mr. Nine"
    ],
    "gameSources": [
      "In-game book collection: 1 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Flowers_for_Princess_Fischl"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--e156b0e929d7.webp",
      "width": 480,
      "height": 480,
      "alt": "Flowers for Princess Fischl image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Flowers_for_Princess_Fischl",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 1,
      "regionLore": "None",
      "author": "Mr. Nine",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "fontaine",
    "slug": "fontaine",
    "title": "Fontaine: The Nation of Justice",
    "region": "fontaine",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "Fontaine is a nation of courts, water, and inventions, and the setting of Archon Quest Chapter IV.",
    "body": [
      "Fontaine is one of Teyvat’s seven nations. Its story places the court system and the Opera Epiclese at the center of public life.",
      "The Archon Quest reveals major changes to Fontaine’s divine order. The game’s story should be read directly for the details; this archive keeps the summary brief."
    ],
    "keywords": [
      "Hydro",
      "Focalors",
      "Neuvillette",
      "justice",
      "Opera Epiclese"
    ],
    "gameSources": [
      "Archon Quest Chapter IV",
      "Fontaine in-game region description"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Fontaine",
      "url": "https://genshin-impact.fandom.com/wiki/Fontaine"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--fontaine.webp",
      "alt": "Fontaine: The Nation of Justice image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Fontaine",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 351
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-four-shades",
    "slug": "lore-four-shades",
    "title": "Four Shades",
    "region": "teyvat-unknown",
    "category": "gods-divinity",
    "classification": "canon",
    "summary": "The Four Shades are a group of powerful beings associated with the Heavenly Principles. Istaroth is named directly in older records; later Archon Quest events reveal more of the group while leaving parts of their identities and roles open.",
    "body": [
      "The Four Shades are a group of powerful beings associated with the Heavenly Principles. Istaroth is named directly in older records; later Archon Quest events reveal more of the group while leaving parts of their identities and roles open.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Four Shades",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "gods divinity",
      "Before Sun and Moon",
      "Song of the Welkin Moon: Act X",
      "Teyvat Chapter Interlude Teaser: The Gods’ Limits"
    ],
    "gameSources": [
      "Before Sun and Moon",
      "Song of the Welkin Moon: Act X",
      "Teyvat Chapter Interlude Teaser: The Gods’ Limits"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Four_Shades"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--22c547670642.webp",
      "width": 480,
      "height": 270,
      "alt": "Four Shades image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Four_Shades",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-frostmoon-scions",
    "slug": "lore-frostmoon-scions",
    "title": "Frostmoon Scions",
    "region": "nod-krai",
    "category": "organizations-factions",
    "classification": "canon",
    "summary": "The Frostmoon Scions are a Nod-Krai community with traditions tied to the moon and its rites. Their history is presented through local quests, characters, and the in-game hymns associated with the group.",
    "body": [
      "The Frostmoon Scions are a Nod-Krai community with traditions tied to the moon and its rites. Their history is presented through local quests, characters, and the in-game hymns associated with the group.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Frostmoon Scions",
      "Nod-Krai",
      "Genshin Impact lore",
      "organizations factions",
      "Song of the Welkin Moon",
      "Hymns of the Far North",
      "Nod-Krai world quests"
    ],
    "gameSources": [
      "Song of the Welkin Moon",
      "Hymns of the Far North",
      "Nod-Krai world quests"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Frostmoon_Scions"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c05acad2baf4.webp",
      "width": 480,
      "height": 479,
      "alt": "Frostmoon Scions image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Frostmoon_Scions",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-furina",
    "slug": "lore-furina",
    "title": "Furina",
    "region": "fontaine",
    "category": "character-records",
    "classification": "canon",
    "summary": "Furina lived for centuries carrying out a public role created as part of Fontaine’s plan against its prophecy. After the Fontaine crisis, she is free to live as a person and pursue acting on her own terms.",
    "body": [
      "Furina lived for centuries carrying out a public role created as part of Fontaine’s plan against its prophecy. After the Fontaine crisis, she is free to live as a person and pursue acting on her own terms.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Furina",
      "Fontaine",
      "Genshin Impact lore",
      "character records",
      "Fontaine Archon Quest, Chapter IV",
      "Masquerade of the Guilty",
      "Furina: Character Story"
    ],
    "gameSources": [
      "Fontaine Archon Quest, Chapter IV",
      "Masquerade of the Guilty",
      "Furina: Character Story"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Furina"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--3fcdb35c3442.webp",
      "width": 240,
      "height": 480,
      "alt": "Furina image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Furina",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-general-history-of-snezhnaya",
    "slug": "book-general-history-of-snezhnaya",
    "title": "General History of Snezhnaya",
    "region": "snezhnaya",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This two-volume history records Snezhnayan traditions and legendary rulers, including a volume focused on the Golden City.",
    "body": [
      "This two-volume history records Snezhnayan traditions and legendary rulers, including a volume focused on the Golden City.",
      "The source index places this book collection in Snezhnaya. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "General History of Snezhnaya",
      "Snezhnaya",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Y. S. Klyucheva"
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Snezhnaya"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/General_History_of_Snezhnaya"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--6d133b14c3cb.webp",
      "width": 480,
      "height": 480,
      "alt": "General History of Snezhnaya image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/General_History_of_Snezhnaya",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "Snezhnaya",
      "author": "Y. S. Klyucheva",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-general-history-of-snezhnaya-supplement",
    "slug": "book-general-history-of-snezhnaya-supplement",
    "title": "General History of Snezhnaya Supplement",
    "region": "snezhnaya",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part supplement continues the Snezhnayan history series with accounts of the Volkodlak King.",
    "body": [
      "This three-part supplement continues the Snezhnayan history series with accounts of the Volkodlak King.",
      "The source index places this book collection in Snezhnaya. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "General History of Snezhnaya Supplement",
      "Snezhnaya",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|region_lore     = Snezhnaya"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Snezhnaya"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/General_History_of_Snezhnaya_Supplement"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--ba770f3a62d8.webp",
      "width": 480,
      "height": 480,
      "alt": "General History of Snezhnaya Supplement image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/General_History_of_Snezhnaya_Supplement",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Snezhnaya",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-gliding-instruction-manual",
    "slug": "book-gliding-instruction-manual",
    "title": "Gliding Instruction Manual",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "The official, delightfully illustrated safety handbook and operational guide for wind gliding in Mondstadt, famously handed to the Traveler by Outrider Amber.",
    "body": [
      "The Gliding Instruction Manual is the official Knights of Favonius handbook required for all travelers wishing to earn a legal gliding license in the City of Freedom. Authored and illustrated with cheerful sketches by the enthusiastic Outrider Amber, it covers aerodynamic thermals, wind-speed calculation, and emergency landing techniques.",
      "Beneath its lighthearted presentation, the manual imparts serious safety lessons, recounting cautionary tales of reckless gliders who ignored updrafts and crashed into Cider Lake, alongside the inspirational story of the first bird that dared to trust the wind.",
      "Every player receives this manual during the early Archon Quest, cementing Amber's role as the Traveler's warm and welcoming guide to Mondstadt.",
      "Given directly to the Traveler during the gliding license examination in Mondstadt."
    ],
    "keywords": [
      "Gliding Instruction Manual",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Gliding_Instruction_Manual"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c188d5e948fa.webp",
      "width": 480,
      "height": 480,
      "alt": "Gliding Instruction Manual image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Gliding_Instruction_Manual",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Knights of Favonius Reconnaissance Team (Amber)",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-glimpses-of-mysterious-inazuma",
    "slug": "book-glimpses-of-mysterious-inazuma",
    "title": "Glimpses of Mysterious Inazuma",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This collection gathers Inazuman oral tales written down by a traveler from Fontaine, preserving myths from across the islands.",
    "body": [
      "This collection gathers Inazuman oral tales written down by a traveler from Fontaine, preserving myths from across the islands.",
      "The source index places this book collection in Inazuma. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Glimpses of Mysterious Inazuma",
      "Inazuma",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Leucade {{Ref/NPC|Aratani||s = Enchanted Tales of the Mikawa Festival}}"
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Glimpses_of_Mysterious_Inazuma"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c4e3111bd28b.webp",
      "width": 480,
      "height": 480,
      "alt": "Glimpses of Mysterious Inazuma image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Glimpses_of_Mysterious_Inazuma",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "Inazuma",
      "author": "Leucade {{Ref/NPC",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-guizhong",
    "slug": "lore-guizhong",
    "title": "Guizhong",
    "region": "liyue",
    "category": "character-records",
    "classification": "canon",
    "summary": "Guizhong was a god of dust and an ally of Morax. She and her people built the Guili Assembly before the Archon War scattered its community.",
    "body": [
      "Guizhong was a god of dust and an ally of Morax. She and her people built the Guili Assembly before the Archon War scattered its community.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Guizhong",
      "Liyue",
      "Genshin Impact lore",
      "character records",
      "Liyue Archon Quest",
      "Memory of Dust",
      "Guili Assembly records"
    ],
    "gameSources": [
      "Liyue Archon Quest",
      "Memory of Dust",
      "Guili Assembly records"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Guizhong"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--0ec0b994b556.webp",
      "width": 306,
      "height": 480,
      "alt": "Guizhong image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Guizhong",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-gurabad",
    "slug": "lore-gurabad",
    "title": "Gurabad",
    "region": "sumeru",
    "category": "ancient-civilizations",
    "classification": "canon",
    "summary": "Gurabad was an ancient desert city whose fall is connected to the history of the Jinn and the descendants of King Deshret. Its remains and written records appear in the Hadramaveth desert.",
    "body": [
      "Gurabad was an ancient desert city whose fall is connected to the history of the Jinn and the descendants of King Deshret. Its remains and written records appear in the Hadramaveth desert.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Gurabad",
      "Sumeru",
      "Genshin Impact lore",
      "ancient civilizations",
      "The Dirge of Bilqis",
      "The Tale of Shiruyeh and Shirin",
      "Gurabad records"
    ],
    "gameSources": [
      "The Dirge of Bilqis",
      "The Tale of Shiruyeh and Shirin",
      "Gurabad records"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Gurabad"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--f0ab5390bdf0.webp",
      "width": 480,
      "height": 240,
      "alt": "Gurabad image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Gurabad",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-handy-handbook-of-hilichurlian",
    "slug": "book-handy-handbook-of-hilichurlian",
    "title": "Handy Handbook of Hilichurlian",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A pioneering linguistic phrasebook and cultural guide compiled by the renowned scholar Ella Musk to facilitate peaceful diplomatic communication with Hilichurls.",
    "body": [
      "The Handy Handbook of Hilichurlian is a revolutionary four-part linguistic field guide authored by Mondstadt's precocious young researcher Ella Musk. Driven by the belief that Hilichurls possess complex emotions and deserve dialogue rather than extermination, Ella compiled phonetic transcriptions and translations of common phrases.",
      "The handbook translates essential terms such as 'Olah' (hello), 'Ya che!' (disgust/anger), 'Celi' (fire/sun), and 'Nunu' (sleep/peace), while offering crucial behavioral advice on approaching campfire camps without provoking combat.",
      "The text proves that the Hilichurlian tongue is a living, grammar-structured language carrying distorted echoes of ancient Khaenri'ahn speech, providing vital clues for linguistic scholars across Teyvat.",
      "Given by Ella Musk to the Traveler during the 'Poetry Exchange' and 'Language Exchange' daily commissions."
    ],
    "keywords": [
      "Handy Handbook of Hilichurlian",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Handy_Handbook_of_Hilichurlian"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c0967de64581.webp",
      "width": 480,
      "height": 480,
      "alt": "Handy Handbook of Hilichurlian image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Handy_Handbook_of_Hilichurlian",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Ella Musk (Haravatat Researcher)",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-heart-of-clear-springs",
    "slug": "book-heart-of-clear-springs",
    "title": "Heart of Clear Springs",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Springvale folk tale centers on a boy and a spring spirit. The story is passed down as local legend, keeping its supernatural details in the realm of the tale.",
    "body": [
      "This Springvale folk tale centers on a boy and a spring spirit. The story is passed down as local legend, keeping its supernatural details in the realm of the tale.",
      "The source index places this book collection in Mondstadt. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Heart of Clear Springs",
      "Mondstadt",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 4 volumes",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Heart_of_Clear_Springs"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--391f2cfa6e60.webp",
      "width": 480,
      "height": 480,
      "alt": "Heart of Clear Springs image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Heart_of_Clear_Springs",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 4,
      "regionLore": "Mondstadt",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-heart-of-the-abyssal-beast",
    "slug": "book-heart-of-the-abyssal-beast",
    "title": "Heart of the Abyssal Beast",
    "region": "snezhnaya",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Snezhnayan novel follows a man who gives up his humanity for a desperate goal. It is a literary work, not a confirmed account of a historical person.",
    "body": [
      "This Snezhnayan novel follows a man who gives up his humanity for a desperate goal. It is a literary work, not a confirmed account of a historical person.",
      "The source index places this book collection in Snezhnaya. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Heart of the Abyssal Beast",
      "Snezhnaya",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 1 volumes",
      "Reference location: Snezhnaya"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Heart_of_the_Abyssal_Beast"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--a1c0082a64fc.webp",
      "width": 480,
      "height": 480,
      "alt": "Heart of the Abyssal Beast image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Heart_of_the_Abyssal_Beast",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 1,
      "regionLore": "Snezhnaya",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-hearts-desire",
    "slug": "book-hearts-desire",
    "title": "Heart's Desire",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This four-volume fantasy series revolves around a mysterious antique shop and the people drawn to it. Later moon lore links it to a retelling of an older story, though the novel is not a literal history of the Three Moons.",
    "body": [
      "This four-volume fantasy series revolves around a mysterious antique shop and the people drawn to it. Later moon lore links it to a retelling of an older story, though the novel is not a literal history of the Three Moons.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Heart's Desire",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 4 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Heart%27s_Desire"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--7beea2fe6ea3.webp",
      "width": 480,
      "height": 480,
      "alt": "Heart's Desire image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Heart%27s_Desire",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 4,
      "regionLore": "Teyvat",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "extraSources": [
      {
        "label": "Three Moons · related lore record",
        "url": "https://genshin-impact.fandom.com/wiki/Three_Moons"
      }
    ],
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-hex-hound",
    "slug": "book-hex-hound",
    "title": "Hex & Hound",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This eleven-volume novel looks back to the aristocratic era through a summer story about a hound and the people around it.",
    "body": [
      "This eleven-volume novel looks back to the aristocratic era through a summer story about a hound and the people around it.",
      "The source index places this book collection in Mondstadt. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Hex & Hound",
      "Mondstadt",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 11 volumes",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Hex_%26_Hound"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--24e74a384e04.webp",
      "width": 480,
      "height": 480,
      "alt": "Hex & Hound image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Hex_%26_Hound",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 11,
      "regionLore": "Mondstadt",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-hexenzirkel",
    "slug": "lore-hexenzirkel",
    "title": "Hexenzirkel",
    "region": "teyvat-unknown",
    "category": "organizations-factions",
    "classification": "canon",
    "summary": "The Hexenzirkel is an association of witches whose members meet to study Irminsul and share research. Alice, Barbeloth, and Nicole are among the members named in the game; the group’s full work is still unfolding.",
    "body": [
      "The Hexenzirkel is an association of witches whose members meet to study Irminsul and share research. Alice, Barbeloth, and Nicole are among the members named in the game; the group’s full work is still unfolding.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Hexenzirkel",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "organizations factions",
      "A Tea Party Most Thorny",
      "A Winter Night’s Lazzo",
      "Hexenzirkel references"
    ],
    "gameSources": [
      "A Tea Party Most Thorny",
      "A Winter Night’s Lazzo",
      "Hexenzirkel references"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Hexenzirkel"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--ff106981c2d6.webp",
      "width": 480,
      "height": 479,
      "alt": "Hexenzirkel image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Hexenzirkel",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-hilichurl-ballad-selection",
    "slug": "book-hilichurl-ballad-selection",
    "title": "Hilichurl Ballad Selection",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This short poetry collection presents Hilichurlian verse with a translation and commentary. It is a literary record, not a complete account of every hilichurl group.",
    "body": [
      "This short poetry collection presents Hilichurlian verse with a translation and commentary. It is a literary record, not a complete account of every hilichurl group.",
      "The source index places this book collection in Mondstadt. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Hilichurl Ballad Selection",
      "Mondstadt",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Jacob Musk"
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Hilichurl_Ballad_Selection"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c090950bde60.webp",
      "width": 480,
      "height": 480,
      "alt": "Hilichurl Ballad Selection image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Hilichurl_Ballad_Selection",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "Mondstadt",
      "author": "Jacob Musk",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-hilichurl-cultural-customs",
    "slug": "book-hilichurl-cultural-customs",
    "title": "Hilichurl Cultural Customs",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "These research notes record observations about hilichurl communities. They reflect an in-world scholar’s work and viewpoint, so the text should be read as one source rather than a universal description.",
    "body": [
      "These research notes record observations about hilichurl communities. They reflect an in-world scholar’s work and viewpoint, so the text should be read as one source rather than a universal description.",
      "The source index places this book collection in Mondstadt. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Hilichurl Cultural Customs",
      "Mondstadt",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Jacob Musk"
    ],
    "gameSources": [
      "In-game book collection: 4 volumes",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Hilichurl_Cultural_Customs"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--052aadfdaa1f.webp",
      "width": 480,
      "height": 480,
      "alt": "Hilichurl Cultural Customs image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Hilichurl_Cultural_Customs",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 4,
      "regionLore": "Mondstadt",
      "author": "Jacob Musk",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-hilichurlian",
    "slug": "lore-hilichurlian",
    "title": "Hilichurlian",
    "region": "teyvat-unknown",
    "category": "languages-scripts",
    "classification": "canon",
    "summary": "Hilichurlian is a constructed language used by hilichurls in Genshin Impact. The game shows its words in dialogue, poems, and Ella Musk’s research; translations should be checked against context because some phrases remain uncertain.",
    "body": [
      "Hilichurlian is a constructed language used by hilichurls in Genshin Impact. The game shows its words in dialogue, poems, and Ella Musk’s research; translations should be checked against context because some phrases remain uncertain.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Hilichurlian",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "languages scripts",
      "Handy Handbook of Hilichurlian",
      "Ella Musk commissions",
      "Hilichurl Ballad Selection"
    ],
    "gameSources": [
      "Handy Handbook of Hilichurlian",
      "Ella Musk commissions",
      "Hilichurl Ballad Selection"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Hilichurlian"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c0967de64581.webp",
      "width": 480,
      "height": 480,
      "alt": "Hilichurlian image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Hilichurlian",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-history-of-kings-and-clans-prologue",
    "slug": "book-history-of-kings-and-clans-prologue",
    "title": "History of Kings and Clans: Prologue",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "The opening chapter of an extensive historical study detailing the rise, golden deeds, and ultimate moral corruption of Mondstadt's aristocratic ruling houses.",
    "body": [
      "History of Kings and Clans: Prologue is an analytical academic treatise examining the centuries following the overthrow of Old Mondstadt. It investigates how the three great noble houses—the Gunnhildr Clan, the Ragnvindr Clan, and the Lawrence Clan—originally united to rebuild the nation in freedom.",
      "The historian traces how the Lawrence Clan gradually centralized power, established hereditary privileges, and abandoned the reverence for Barbatos, transforming the festival of gladiators into a barbaric slave circus.",
      "The text serves as a stark warning about the fragility of democracy and human rights when power is divorced from empathy and accountability.",
      "Preserved in the historical archives of the Knights of Favonius Library."
    ],
    "keywords": [
      "History of Kings and Clans: Prologue",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/History_of_Kings_and_Clans:_Prologue"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--f49c06dbd3f7.webp",
      "width": 480,
      "height": 480,
      "alt": "History of Kings and Clans: Prologue image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/History_of_Kings_and_Clans:_Prologue",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Mondstadt Classical Historian",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-humor-from-tianheng",
    "slug": "book-humor-from-tianheng",
    "title": "Humor From Tianheng",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A witty collection of traditional satirical anecdotes, puns, and comedic parables poking fun at wealthy merchants, superstitious miners, and pompous officials in Liyue.",
    "body": [
      "Humor from Tianheng is a delightful comedic compendium capturing the sharp, self-deprecating wit of Liyue Harbor's common working folk. From tales of overambitious miners trying to outsmart Stonehide Lawachurls to funny misunderstandings between foreign merchants and tea-house storytellers, the book paints a lively portrait of street life.",
      "Beyond its humor, the collection preserves genuine social history, reflecting how common citizens navigated the intense commercial pressures of the harbor through laughter and community camaraderie.",
      "A perennial favorite among dockworkers and sailors relaxing at the Third-Round Knockout tavern.",
      "Available for purchase from Master Lu in Qingce Village and Wanwen Bookhouse in Liyue Harbor."
    ],
    "keywords": [
      "Humor From Tianheng",
      "Liyue",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature",
      "Pingshan"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Humor_From_Tianheng"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--9726114e558d.webp",
      "width": 480,
      "height": 480,
      "alt": "Humor From Tianheng image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Humor_From_Tianheng",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Liyue",
      "author": "Liyue Folk Satirist",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-hymns-of-the-far-north",
    "slug": "book-hymns-of-the-far-north",
    "title": "Hymns of the Far North",
    "region": "nod-krai",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part collection preserves old hymns of the Frostmoon Scions; its record notes that many associated rites are no longer practiced.",
    "body": [
      "This three-part collection preserves old hymns of the Frostmoon Scions; its record notes that many associated rites are no longer practiced.",
      "The source index places this book collection in Nod-Krai. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Hymns of the Far North",
      "Nod-Krai",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|region_lore     = Nod-Krai"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Nod-Krai"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Hymns_of_the_Far_North"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--292acd233022.webp",
      "width": 480,
      "height": 480,
      "alt": "Hymns of the Far North image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Hymns_of_the_Far_North",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Nod-Krai",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "inazuma",
    "slug": "inazuma",
    "title": "Inazuma: Islands and Eternity",
    "region": "inazuma",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "Inazuma is an island nation associated with the Electro Archon and the ideal of eternity.",
    "body": [
      "Inazuma is one of Teyvat’s seven nations and the setting of Archon Quest Chapter II. Its islands have distinct landscapes and histories.",
      "The nation’s central story explores the Shogunate’s pursuit of eternity and the effects that policy has on people living across the islands."
    ],
    "keywords": [
      "Electro",
      "Raiden Shogun",
      "Ei",
      "eternity",
      "islands"
    ],
    "gameSources": [
      "Archon Quest Chapter II",
      "Inazuma in-game region description"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Inazuma",
      "url": "https://genshin-impact.fandom.com/wiki/Inazuma"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--inazuma.webp",
      "alt": "Inazuma: Islands and Eternity image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Inazuma",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-incandescent-ode-of-resurrection",
    "slug": "lore-incandescent-ode-of-resurrection",
    "title": "Incandescent Ode of Resurrection",
    "region": "natlan",
    "category": "quest-chronicles",
    "classification": "canon",
    "summary": "This final Natlan Archon Quest act follows the nation’s struggle against the Abyss and the effort to protect its people. Its title and events belong to the game’s main story, while later updates may add context.",
    "body": [
      "This final Natlan Archon Quest act follows the nation’s struggle against the Abyss and the effort to protect its people. Its title and events belong to the game’s main story, while later updates may add context.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Incandescent Ode of Resurrection",
      "Natlan",
      "Genshin Impact lore",
      "quest chronicles",
      "Archon Quest, Chapter V: Act V",
      "Natlan Archon Quest",
      "Night Kingdom"
    ],
    "gameSources": [
      "Archon Quest, Chapter V: Act V",
      "Natlan Archon Quest",
      "Night Kingdom"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Incandescent_Ode_of_Resurrection"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--b4aee262e9a7.webp",
      "width": 480,
      "height": 240,
      "alt": "Incandescent Ode of Resurrection image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Incandescent_Ode_of_Resurrection",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "irminsul",
    "slug": "irminsul",
    "title": "Irminsul and the World’s Memories",
    "region": "sumeru",
    "category": "hidden-lore",
    "classification": "canon",
    "summary": "Irminsul is linked to the Ley Lines and the memories recorded across Teyvat. Sumeru’s Archon Quest and later story developments show that changing those records has wide consequences for people and history.",
    "body": [
      "Irminsul is linked to the Ley Lines and the memories recorded across Teyvat. Sumeru’s Archon Quest and later story developments show that changing those records has wide consequences for people and history.",
      "This note separates events shown in quests from older books and oral traditions that may use symbolic or incomplete language.",
      "Use the source links and in-game references to follow the evidence. Open questions are not presented as confirmed explanations."
    ],
    "keywords": [
      "Irminsul",
      "Sumeru",
      "memory",
      "world tree",
      "Nahida",
      "current Archon Quest",
      "Song of the Welkin Moon",
      "Teyvat lore"
    ],
    "gameSources": [
      "Archon Quest Chapter III",
      "Nahida Story Quest"
    ],
    "source": {
      "label": "Genshin Impact Wiki · updated lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Irminsul"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--irminsul.webp",
      "alt": "Irminsul and the World’s Memories image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Irminsul",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-istaroth",
    "slug": "lore-istaroth",
    "title": "Istaroth",
    "region": "teyvat-unknown",
    "category": "gods-divinity",
    "classification": "canon",
    "summary": "Istaroth is known in records as the God of Time and one of the Four Shades connected to the Primordial One. Evidence appears in Enkanomiya and other in-game texts; details about her remain limited.",
    "body": [
      "Istaroth is known in records as the God of Time and one of the Four Shades connected to the Primordial One. Evidence appears in Enkanomiya and other in-game texts; details about her remain limited.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Istaroth",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "gods divinity",
      "Before Sun and Moon",
      "The Byakuyakoku Collection",
      "Time and Wind quest"
    ],
    "gameSources": [
      "Before Sun and Moon",
      "The Byakuyakoku Collection",
      "Time and Wind quest"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Istaroth"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--32fc8ecd01ce.webp",
      "width": 480,
      "height": 270,
      "alt": "Istaroth image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Istaroth",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "khaenriah",
    "slug": "khaenriah",
    "title": "Khaenri’ah",
    "region": "teyvat-unknown",
    "category": "ancient-civilizations",
    "classification": "canon",
    "summary": "Khaenri’ah was a nation without an Archon, destroyed during the Cataclysm about five hundred years before the Traveler’s journey.",
    "body": [
      "Khaenri’ah’s fall is a major event in Teyvat’s ancient history. Its survivors and creations appear throughout the main story and in character histories.",
      "Many parts of its past remain uncertain in released story content. This record distinguishes established details from explanations that are still incomplete."
    ],
    "keywords": [
      "Khaenri’ah",
      "Cataclysm",
      "Abyss",
      "Dainsleif",
      "five hundred years"
    ],
    "gameSources": [
      "Archon Quests",
      "Dainsleif story appearances"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Khaenri’ah",
      "url": "https://genshin-impact.fandom.com/wiki/Khaenri%27ah"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--khaenriah.webp",
      "alt": "Khaenri’ah image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Khaenri%27ah",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 359
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-king-deshret",
    "slug": "lore-king-deshret",
    "title": "King Deshret",
    "region": "sumeru",
    "category": "gods-divinity",
    "classification": "canon",
    "summary": "King Deshret ruled the desert civilization of ancient Sumeru and formed an alliance with the Dendro Archon and Nabu Malikata. The game’s records connect his legacy to the ruins and projects scattered through the desert.",
    "body": [
      "King Deshret ruled the desert civilization of ancient Sumeru and formed an alliance with the Dendro Archon and Nabu Malikata. The game’s records connect his legacy to the ruins and projects scattered through the desert.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "King Deshret",
      "Sumeru",
      "Genshin Impact lore",
      "gods divinity",
      "Golden Slumber",
      "The Dirge of Bilqis",
      "King Deshret and the Three Magi"
    ],
    "gameSources": [
      "Golden Slumber",
      "The Dirge of Bilqis",
      "King Deshret and the Three Magi"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/King_Deshret"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--02112b7c4266.webp",
      "width": 480,
      "height": 300,
      "alt": "King Deshret image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/King_Deshret",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-king-deshret-and-the-three-magi",
    "slug": "lore-king-deshret-and-the-three-magi",
    "title": "King Deshret and the Three Magi",
    "region": "sumeru",
    "category": "quest-chronicles",
    "classification": "canon",
    "summary": "This Sumeru Archon Quest act follows the Traveler’s investigation of the Akademiya’s actions and the desert’s past, bringing the conflict around King Deshret’s legacy into the open.",
    "body": [
      "This Sumeru Archon Quest act follows the Traveler’s investigation of the Akademiya’s actions and the desert’s past, bringing the conflict around King Deshret’s legacy into the open.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "King Deshret and the Three Magi",
      "Sumeru",
      "Genshin Impact lore",
      "quest chronicles",
      "Archon Quest, Chapter III: Act IV",
      "Sumeru Archon Quest",
      "King Deshret"
    ],
    "gameSources": [
      "Archon Quest, Chapter III: Act IV",
      "Sumeru Archon Quest",
      "King Deshret"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/King_Deshret_and_the_Three_Magi"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--37eac80a469c.webp",
      "width": 480,
      "height": 240,
      "alt": "King Deshret and the Three Magi image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/King_Deshret_and_the_Three_Magi",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-king-of-invokations-book",
    "slug": "book-king-of-invokations-book",
    "title": "King of Invokations (Book)",
    "region": "sumeru",
    "category": "books-literature",
    "classification": "canon",
    "summary": "The smash-hit, action-packed light novel series from Sumeru that inspired the global trading-card game phenomenon Genius Invokation TCG.",
    "body": [
      "King of Invokations is the massively popular serialized fantasy novel that launched Genius Invokation TCG from an obscure academic gaming project in Sumeru into the most beloved tabletop card game across all seven nations.",
      "The novel follows a determined young duelist who inherits a mystical card deck, traveling across the continent to challenge card masters, summon legendary elemental champions, and uncover the grand mystery behind the cards.",
      "Its sensational success led the Yae Publishing House to print international editions, while the Adventurers' Guild integrated TCG duel boards into every major city tavern.",
      "Read by card enthusiasts from Mondstadt to Fontaine, inspiring tournaments and friendly duels everywhere."
    ],
    "keywords": [
      "King of Invokations (Book)",
      "Sumeru",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Sumeru"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/King_of_Invokations_(Book)"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--df9dd89cbdcd.webp",
      "width": 480,
      "height": 480,
      "alt": "King of Invokations (Book) image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/King_of_Invokations_(Book)",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Sumeru",
      "author": "Kshahrewar & Sumeru Novelists",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "knights",
    "slug": "knights-of-favonius",
    "title": "Knights of Favonius",
    "region": "mondstadt",
    "category": "organizations-factions",
    "classification": "canon",
    "summary": "The Knights of Favonius are Mondstadt’s principal order of knights and a major civic organization.",
    "body": [
      "The Knights protect Mondstadt and handle many public responsibilities. Their headquarters and ranks appear throughout the city and its quests.",
      "Members have different roles and outlooks. Character stories and quests show how the order’s duties connect to Mondstadt’s ideal of freedom."
    ],
    "keywords": [
      "Knights of Favonius",
      "Mondstadt",
      "Jean",
      "Varka",
      "organization"
    ],
    "gameSources": [
      "Mondstadt Archon Quests",
      "Character Stories"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Knights of Favonius",
      "url": "https://genshin-impact.fandom.com/wiki/Knights_of_Favonius"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--knights-of-favonius.webp",
      "alt": "Knights of Favonius image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Knights_of_Favonius",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 638
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-knights-of-favonius-handbook-5th-edition",
    "slug": "book-knights-of-favonius-handbook-5th-edition",
    "title": "Knights of Favonius Handbook - 5th Edition",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "The official fifth-edition code of conduct, disciplinary protocols, and civic duties governing the sworn knights of the City of Freedom.",
    "body": [
      "The Knights of Favonius Handbook: 5th Edition is the comprehensive administrative and disciplinary guidebook issued to every newly inducted knight upon completing their trials. Overseen and revised by Acting Grand Master Jean, it outlines protocols for sentry duty, gate security, handling dangerous alchemical experiments (with specific rules concerning Klee), and maintaining cordial relations with the citizenry.",
      "The text emphasizes that a knight's greatest weapon is not the sword, but the trust of the people, demanding exemplary conduct, honesty, and readiness to sacrifice personal comfort for the safety of Mondstadt.",
      "Found throughout the Knights of Favonius headquarters, the barracks, and the city gates."
    ],
    "keywords": [
      "Knights of Favonius Handbook - 5th Edition",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Knights_of_Favonius_Handbook_-_5th_Edition"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c7194f831e1e.webp",
      "width": 480,
      "height": 480,
      "alt": "Knights of Favonius Handbook - 5th Edition image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Knights_of_Favonius_Handbook_-_5th_Edition",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Knights of Favonius Disciplinary Committee (Jean)",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-kompore-the-cunning",
    "slug": "book-kompore-the-cunning",
    "title": "Kompore the Cunning",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Natlan tapestry is attributed to Sanhaj Kompore and contains short, unusual tales. The in-game record describes it as fiction rather than confirmed history.",
    "body": [
      "This Natlan tapestry is attributed to Sanhaj Kompore and contains short, unusual tales. The in-game record describes it as fiction rather than confirmed history.",
      "The source index places this book collection in Natlan. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Kompore the Cunning",
      "Natlan",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Sanhaj Kompore"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Kompore_the_Cunning"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--41e789e3dcef.webp",
      "width": 480,
      "height": 480,
      "alt": "Kompore the Cunning image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Kompore_the_Cunning",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Natlan",
      "author": "Sanhaj Kompore",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-la-chanson-derinnyes",
    "slug": "book-la-chanson-derinnyes",
    "title": "La Chanson d'Erinnyes",
    "region": "fontaine",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part Remurian poem recounts an envoy’s request to Erinnyes and the dispute over a castle’s water and land.",
    "body": [
      "This three-part Remurian poem recounts an envoy’s request to Erinnyes and the dispute over a castle’s water and land.",
      "The source index places this book collection in Fontaine. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "La Chanson d'Erinnyes",
      "Fontaine",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Fontaine"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/La_Chanson_d%27Erinnyes"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--9b9d210eafdd.webp",
      "width": 480,
      "height": 480,
      "alt": "La Chanson d'Erinnyes image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/La_Chanson_d%27Erinnyes",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Fontaine",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-legend-of-the-lone-sword",
    "slug": "book-legend-of-the-lone-sword",
    "title": "Legend of the Lone Sword",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This four-part martial-arts novel follows the origins of a revenge story in a world framed without elemental powers.",
    "body": [
      "This four-part martial-arts novel follows the origins of a revenge story in a world framed without elemental powers.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Legend of the Lone Sword",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 4 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Legend_of_the_Lone_Sword"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--1535feec8be4.webp",
      "width": 480,
      "height": 480,
      "alt": "Legend of the Lone Sword image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Legend_of_the_Lone_Sword",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 4,
      "regionLore": "None",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-legend-of-the-shattered-halberd",
    "slug": "book-legend-of-the-shattered-halberd",
    "title": "Legend of the Shattered Halberd",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This six-volume fantasy cycle imagines multiple realms and a conflict among gods. Its dramatic worldbuilding belongs to the novel inside the game.",
    "body": [
      "This six-volume fantasy cycle imagines multiple realms and a conflict among gods. Its dramatic worldbuilding belongs to the novel inside the game.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Legend of the Shattered Halberd",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Mr. Nine"
    ],
    "gameSources": [
      "In-game book collection: 6 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Legend_of_the_Shattered_Halberd"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--ceb03260beef.webp",
      "width": 480,
      "height": 480,
      "alt": "Legend of the Shattered Halberd image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Legend_of_the_Shattered_Halberd",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 6,
      "regionLore": "None",
      "author": "Mr. Nine",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-lets-go-dodoco",
    "slug": "book-lets-go-dodoco",
    "title": "Let's Go, Dodoco!",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A delightfully magical, whimsically illustrated children's adventure story written by the legendary sorceress Alice for her beloved daughter Klee.",
    "body": [
      "Let's Go, Dodoco! is a charming and heartwarming picture book authored by the world-famous adventurer and Hexenzirkel elder Alice for her daughter Klee. The story chronicles the fantastical travels of Dodoco, an adorable clover-tailed fluffball who journeys across magical islands to find true friendship.",
      "Beneath its playful illustrations, the book is infused with subtle alchemical and spatial magic, designed by Alice to reassure Klee that her mother's love and protective presence are always near, even when Alice is exploring distant corners of the cosmos.",
      "A treasured bedtime story kept lovingly inside Klee's backpack alongside her Jumpy Dumpties."
    ],
    "keywords": [
      "Let's Go, Dodoco!",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Let%27s_Go,_Dodoco!"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--1ea88dfb6472.webp",
      "width": 480,
      "height": 480,
      "alt": "Let's Go, Dodoco! image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Let%27s_Go,_Dodoco!",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Teyvat",
      "author": "Alice (Elder of the Hexenzirkel)",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-ley-line",
    "slug": "lore-ley-line",
    "title": "Ley Line",
    "region": "teyvat-unknown",
    "category": "hidden-lore",
    "classification": "canon",
    "summary": "Ley Lines carry elemental energy and hold memories of life in Teyvat. Quests show that disturbances can expose memories stored in the network, while recent story events add new consequences to how the system is maintained.",
    "body": [
      "Ley Lines carry elemental energy and hold memories of life in Teyvat. Quests show that disturbances can expose memories stored in the network, while recent story events add new consequences to how the system is maintained.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Ley Line",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "hidden lore",
      "Caribert",
      "Song of the Welkin Moon: Act X",
      "Natlan Archon Quest, Chapter V"
    ],
    "gameSources": [
      "Caribert",
      "Song of the Welkin Moon: Act X",
      "Natlan Archon Quest, Chapter V"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Ley_Line"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--fe62da9a4167.webp",
      "width": 480,
      "height": 270,
      "alt": "Ley Line image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Ley_Line",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-linlings-anthology-of-selected-poetry",
    "slug": "book-linlings-anthology-of-selected-poetry",
    "title": "Linling's Anthology of Selected Poetry",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A passionate, delightfully clumsy collection of self-published poems written by the earnest young poet Linling while gazing out over the bustling wharves of Liyue.",
    "body": [
      "Linling's Anthology of Selected Poetry is a sweet, comedic compilation of romantic and landscape verses authored by Linling, a clerk stationed at the docks of Liyue Harbor. Dreaming of becoming an acclaimed poet like the ancient bards of Jueyun Karst, Linling spends her working hours rhyming ships, gulls, and cargo crates.",
      "While her poetic meter is famously flawed—often drawing affectionate teasing from the ship captains and dockworkers—the collection radiates sincere passion and genuine love for her coastal hometown.",
      "Featured in daily commissions where the Traveler helps Linling count ships and polish her poetic verses."
    ],
    "keywords": [
      "Linling's Anthology of Selected Poetry",
      "Liyue",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Linling%27s_Anthology_of_Selected_Poetry"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--8d0449cdc264.webp",
      "width": 480,
      "height": 480,
      "alt": "Linling's Anthology of Selected Poetry image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Linling%27s_Anthology_of_Selected_Poetry",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Liyue",
      "author": "Linling (Liyue Harbor Poet)",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "liyue",
    "slug": "liyue",
    "title": "Liyue: A Harbor of Contracts",
    "region": "liyue",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "Liyue is a nation in eastern Teyvat, known for its harbor, trade, and long connection to Morax.",
    "body": [
      "Liyue is one of the seven nations and the setting of Archon Quest Chapter I. Its landscape includes mountains, rivers, plains, and the busy port of Liyue Harbor.",
      "The nation’s public life is shaped by the Liyue Qixing. Its history also includes the long era in which Morax guided the people of Liyue."
    ],
    "keywords": [
      "Geo",
      "Morax",
      "Rex Lapis",
      "Liyue Harbor",
      "Liyue Qixing",
      "contracts"
    ],
    "gameSources": [
      "Archon Quest Chapter I",
      "Liyue in-game region description"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Liyue",
      "url": "https://genshin-impact.fandom.com/wiki/Liyue"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--liyue.webp",
      "alt": "Liyue: A Harbor of Contracts image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Liyue",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-lost-adventure-notebook",
    "slug": "book-lost-adventure-notebook",
    "title": "Lost Adventure Notebook",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A weathered, ink-stained field diary recovered from dangerous ruins, recording the survival tips, puzzle discoveries, and final lessons of a veteran adventurer.",
    "body": [
      "The Lost Adventure Notebook is a time-worn survival log recovered from the monster-infested wilderness of Mondstadt. It records practical field knowledge accumulated over decades: how to spot trapped chests, identify Ruin Guard firing patterns, harvest healing herbs, and craft emergency torches during torrential downpours.",
      "The author shares intimate thoughts on the bittersweet life of an adventurer—the thrill of discovering untouched treasure paired with the loneliness of leaving loved ones behind.",
      "Treasured by the Adventurers' Guild as an educational manual for training rookie recruits."
    ],
    "keywords": [
      "Lost Adventure Notebook",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Lost_Adventure_Notebook"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c56297782471.webp",
      "width": 480,
      "height": 480,
      "alt": "Lost Adventure Notebook image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Lost_Adventure_Notebook",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Fallen Mondstadt Adventurer",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-maawe-and-monetoo",
    "slug": "book-maawe-and-monetoo",
    "title": "Maawe and Monetoo",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Natlan scroll tells how the Saurian Maawe is said to have created a hot spring. Different writing styles suggest the story was gathered across generations.",
    "body": [
      "This Natlan scroll tells how the Saurian Maawe is said to have created a hot spring. Different writing styles suggest the story was gathered across generations.",
      "The source index places this book collection in Natlan. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Maawe and Monetoo",
      "Natlan",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|vol1      = Under the east staircase of the main building at the \"People of the Springs\""
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Maawe_and_Monetoo"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--50a8fc61c145.webp",
      "width": 480,
      "height": 480,
      "alt": "Maawe and Monetoo image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Maawe_and_Monetoo",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Natlan",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-mare-jivari",
    "slug": "lore-mare-jivari",
    "title": "Mare Jivari",
    "region": "natlan",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "Mare Jivari is a remote place described in adventurer and character records as a dangerous, windless expanse. The game has referenced it for years; not every story told about it is confirmed firsthand exploration.",
    "body": [
      "Mare Jivari is a remote place described in adventurer and character records as a dangerous, windless expanse. The game has referenced it for years; not every story told about it is confirmed firsthand exploration.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Mare Jivari",
      "Natlan",
      "Genshin Impact lore",
      "geography locations",
      "Mare Jivari records",
      "Adventurers’ Guild references",
      "Natlan lore"
    ],
    "gameSources": [
      "Mare Jivari records",
      "Adventurers’ Guild references",
      "Natlan lore"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Mare_Jivari"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--8c71c6cc95e0.webp",
      "width": 480,
      "height": 258,
      "alt": "Mare Jivari image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Mare_Jivari",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-masquerade-of-the-guilty",
    "slug": "lore-masquerade-of-the-guilty",
    "title": "Masquerade of the Guilty",
    "region": "fontaine",
    "category": "quest-chronicles",
    "classification": "canon",
    "summary": "This is the final act of Fontaine’s Archon Quest. It resolves the nation’s prophecy through Furina’s long performance, Focalors’ plan, and Neuvillette’s decision during the flood.",
    "body": [
      "This is the final act of Fontaine’s Archon Quest. It resolves the nation’s prophecy through Furina’s long performance, Focalors’ plan, and Neuvillette’s decision during the flood.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Masquerade of the Guilty",
      "Fontaine",
      "Genshin Impact lore",
      "quest chronicles",
      "Archon Quest, Chapter IV: Act V",
      "Fontaine Archon Quest",
      "Furina and Neuvillette"
    ],
    "gameSources": [
      "Archon Quest, Chapter IV: Act V",
      "Fontaine Archon Quest",
      "Furina and Neuvillette"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Masquerade_of_the_Guilty"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--ed69a0c288ae.webp",
      "width": 480,
      "height": 240,
      "alt": "Masquerade of the Guilty image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Masquerade_of_the_Guilty",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-meadow-of-gems",
    "slug": "book-meadow-of-gems",
    "title": "Meadow of Gems",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A lyrical botanical and mineralogical treatise describing the luminous flora, oasis gems, and subterranean crystal meadows of the Sumeru desert.",
    "body": [
      "Meadow of Gems is an exquisite natural history treatise authored by an observant Sumeru explorer who ventured into the deep cavern ecosystems beneath the Great Red Sand. The book catalogues glowing subterranean fungi, fossilized coral formations, and radiant elemental gemstones.",
      "The author weaves empirical mineralogical observations with evocative desert poetry, describing how underground water veins nurture luminous subterranean 'meadows' that sparkle like starlight beneath hundreds of feet of sandstone.",
      "Studied by Amurta and Spantamad researchers investigating Ley Line resonance in the desert."
    ],
    "keywords": [
      "Meadow of Gems",
      "Liyue",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Meadow_of_Gems"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--674b80884433.webp",
      "width": 480,
      "height": 480,
      "alt": "Meadow of Gems image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Meadow_of_Gems",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Liyue",
      "author": "Sumeru Desert Naturalist",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-men-of-lithin",
    "slug": "book-men-of-lithin",
    "title": "Men of Lithin",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part fantasy novel circulates in Natlan and is said to have been translated from a Fontainian work; the stated origin is not confirmed.",
    "body": [
      "This three-part fantasy novel circulates in Natlan and is said to have been translated from a Fontainian work; the stated origin is not confirmed.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Men of Lithin",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "K'n-yan"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Men_of_Lithin"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--51e29ffd3aa6.webp",
      "width": 480,
      "height": 480,
      "alt": "Men of Lithin image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Men_of_Lithin",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Unknown",
      "author": "K'n-yan",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "mondstadt",
    "slug": "mondstadt",
    "title": "Mondstadt: The City of Freedom",
    "region": "mondstadt",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "Mondstadt is one of Teyvat’s seven nations. Its story is tied to the Anemo Archon Barbatos and the ideal of freedom.",
    "body": [
      "Mondstadt lies in northeastern Teyvat. Its capital stands on an island in Cider Lake, with landmarks that include the cathedral, city walls, and windmills.",
      "The nation’s Archon Quest is the Prologue. The Knights of Favonius oversee much of the city’s public life, while Barbatos is worshipped as its Anemo Archon."
    ],
    "keywords": [
      "Anemo",
      "Barbatos",
      "Cider Lake",
      "city",
      "freedom",
      "Knights of Favonius"
    ],
    "gameSources": [
      "Archon Quest Prologue",
      "Mondstadt in-game region description"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Mondstadt",
      "url": "https://genshin-impact.fandom.com/wiki/Mondstadt"
    },
    "image": {
      "path": "github-images-02/images--lore--mondstadt-preview.webp",
      "alt": "Mondstadt as shown in Genshin Impact",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Mondstadt?file=Mondstadt.png",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 960,
      "height": 540
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-moongazers-engraving",
    "slug": "book-moongazers-engraving",
    "title": "Moongazer's Engraving",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This two-part record describes an ancient lunar inscription that readers can understand despite not recognizing its writing. Its origin remains open to interpretation.",
    "body": [
      "This two-part record describes an ancient lunar inscription that readers can understand despite not recognizing its writing. Its origin remains open to interpretation.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Moongazer's Engraving",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "* Lusalim (Vol. 1)"
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Moongazer%27s_Engraving"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c4d23b3246ee.webp",
      "width": 480,
      "height": 480,
      "alt": "Moongazer's Engraving image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Moongazer%27s_Engraving",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "|region_location = Nod-Krai",
      "author": "* Lusalim (Vol. 1)",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-moonlit-bamboo-forest",
    "slug": "book-moonlit-bamboo-forest",
    "title": "Moonlit Bamboo Forest",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This four-part Liyue novel follows a young traveler into a bamboo grove. Newer moon lore points to this book as one retelling of an older Three Moons story, but it is still a fictional text, not a complete historical record.",
    "body": [
      "This four-part Liyue novel follows a young traveler into a bamboo grove. Newer moon lore points to this book as one retelling of an older Three Moons story, but it is still a fictional text, not a complete historical record.",
      "The source index places this book collection in Liyue. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Moonlit Bamboo Forest",
      "Liyue",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 4 volumes",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Moonlit_Bamboo_Forest"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--952005c4db1a.webp",
      "width": 480,
      "height": 480,
      "alt": "Moonlit Bamboo Forest image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Moonlit_Bamboo_Forest",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 4,
      "regionLore": "Liyue",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "extraSources": [
      {
        "label": "Three Moons · related lore record",
        "url": "https://genshin-impact.fandom.com/wiki/Three_Moons"
      }
    ],
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-mountainous-miscellany",
    "slug": "book-mountainous-miscellany",
    "title": "Mountainous Miscellany",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A classical anthology of landscape essays, Adeptal folklore, and herb-gathering notes gathered from the misty mountain ridges of Jueyun Karst.",
    "body": [
      "Mountainous Miscellany is an elegant collection of reflective essays written by an anonymous hermit who lived in seclusion among the soaring peaks of Jueyun Karst. The text describes seasonal changes in the cloud sea, rare mountain herbs like Violetgrass and Qingxin, and fleeting encounters with illuminated Adeptal beasts.",
      "The writing captures the sublime, tranquil Daoist philosophy of Liyue's mountains, encouraging the reader to cast aside worldly ambitions and find peace in the rustling of pine needles and the flight of cranes.",
      "Preserved in Wanwen Bookhouse and cherished by scholars seeking solace from city life."
    ],
    "keywords": [
      "Mountainous Miscellany",
      "Liyue",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Mountainous_Miscellany"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--fcad07209529.webp",
      "width": 480,
      "height": 480,
      "alt": "Mountainous Miscellany image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Mountainous_Miscellany",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Liyue",
      "author": "Liyue Mountain Hermit",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-mt-lingmeng-gossip",
    "slug": "book-mt-lingmeng-gossip",
    "title": "Mt. Lingmeng Gossip",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Chenyu Vale collection records local legends and playful folklore. Some stories are intentionally exaggerated, which is part of their character as gossip and oral tradition.",
    "body": [
      "This Chenyu Vale collection records local legends and playful folklore. Some stories are intentionally exaggerated, which is part of their character as gossip and oral tradition.",
      "The source index places this book collection in Liyue. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Mt. Lingmeng Gossip",
      "Liyue",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Mt._Lingmeng_Gossip"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--8d64a3376290.webp",
      "width": 480,
      "height": 480,
      "alt": "Mt. Lingmeng Gossip image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Mt._Lingmeng_Gossip",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Liyue",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-nabu-malikata",
    "slug": "lore-nabu-malikata",
    "title": "Nabu Malikata",
    "region": "sumeru",
    "category": "gods-divinity",
    "classification": "canon",
    "summary": "Nabu Malikata, remembered as the Goddess of Flowers, was a divine companion of King Deshret and the Dendro Archon. Desert texts preserve parts of her story, while some details remain told through poetry and legend.",
    "body": [
      "Nabu Malikata, remembered as the Goddess of Flowers, was a divine companion of King Deshret and the Dendro Archon. Desert texts preserve parts of her story, while some details remain told through poetry and legend.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Nabu Malikata",
      "Sumeru",
      "Genshin Impact lore",
      "gods divinity",
      "The Dirge of Bilqis",
      "A Thousand Nights",
      "Desert artifact descriptions"
    ],
    "gameSources": [
      "The Dirge of Bilqis",
      "A Thousand Nights",
      "Desert artifact descriptions"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Nabu_Malikata"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--cda0647ef355.webp",
      "width": 280,
      "height": 480,
      "alt": "Nabu Malikata image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Nabu_Malikata",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "nahida",
    "slug": "nahida-kusanali",
    "title": "Nahida and Lesser Lord Kusanali",
    "region": "sumeru",
    "category": "character-records",
    "classification": "canon",
    "summary": "Nahida is the Dendro Archon whose story is closely tied to Sumeru and Irminsul.",
    "body": [
      "The Sumeru Archon Quest reveals Nahida’s identity and her place in the nation’s history. She is also known by the title Lesser Lord Kusanali.",
      "Her story connects the Akademiya’s rule, the people’s memories, and the role of Irminsul. The quest itself provides the full context for those events."
    ],
    "keywords": [
      "Nahida",
      "Lesser Lord Kusanali",
      "Dendro",
      "Irminsul",
      "Sumeru"
    ],
    "gameSources": [
      "Archon Quest Chapter III",
      "Nahida Story Quest: Sapientia Oromasdis Chapter"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Nahida",
      "url": "https://genshin-impact.fandom.com/wiki/Nahida"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--nahida-kusanali.webp",
      "alt": "Nahida and Lesser Lord Kusanali image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Nahida",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 320,
      "height": 640
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-narzissenkreuz-ordo",
    "slug": "lore-narzissenkreuz-ordo",
    "title": "Narzissenkreuz Ordo",
    "region": "fontaine",
    "category": "organizations-factions",
    "classification": "canon",
    "summary": "The Narzissenkreuz Ordo was a Fontaine research group whose members tried to protect people from a prophesied disaster. Its experiments and legacy are uncovered across Fontaine world quests.",
    "body": [
      "The Narzissenkreuz Ordo was a Fontaine research group whose members tried to protect people from a prophesied disaster. Its experiments and legacy are uncovered across Fontaine world quests.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Narzissenkreuz Ordo",
      "Fontaine",
      "Genshin Impact lore",
      "organizations factions",
      "Ann of the Narzissenkreuz",
      "Ancient Colors",
      "Unfinished Comedy"
    ],
    "gameSources": [
      "Ann of the Narzissenkreuz",
      "Ancient Colors",
      "Unfinished Comedy"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Narzissenkreuz_Ordo"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c11cdf7c4d2e.webp",
      "width": 480,
      "height": 480,
      "alt": "Narzissenkreuz Ordo image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Narzissenkreuz_Ordo",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "natlan",
    "slug": "natlan",
    "title": "Natlan: The Nation of War",
    "region": "natlan",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "Natlan is the Pyro nation, with communities organized around tribes and a history shaped by conflict and renewal.",
    "body": [
      "Natlan is one of Teyvat’s seven nations and the setting of Archon Quest Chapter V. The nation’s story follows its people, its tribes, and the role of the Pyro Archon.",
      "The game introduces Natlan through quests and exploration. This entry avoids adding cultural claims that are not directly supported by the game."
    ],
    "keywords": [
      "Pyro",
      "Mavuika",
      "tribes",
      "Archon Quest",
      "war"
    ],
    "gameSources": [
      "Archon Quest Chapter V",
      "Natlan in-game region description"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Natlan",
      "url": "https://genshin-impact.fandom.com/wiki/Natlan"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--natlan.webp",
      "alt": "Natlan: The Nation of War image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Natlan",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "saurians",
    "slug": "saurians",
    "title": "Natlan’s Saurians",
    "region": "natlan",
    "category": "species-creatures",
    "classification": "canon",
    "summary": "Saurians are Natlan creatures that live alongside the region’s people and appear in exploration and story quests.",
    "body": [
      "Natlan’s Saurians are part of the region’s everyday life and exploration. Different kinds are associated with different landscapes and communities.",
      "This archive uses the in-game group name and avoids real-world zoological labels or unsupported claims about their origins."
    ],
    "keywords": [
      "Saurians",
      "Natlan",
      "creatures",
      "tribes",
      "exploration"
    ],
    "gameSources": [
      "Natlan Archon Quests",
      "Natlan exploration"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Saurian",
      "url": "https://genshin-impact.fandom.com/wiki/Saurian"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--saurians.webp",
      "alt": "Natlan’s Saurians image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Saurian",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-neuvillette",
    "slug": "lore-neuvillette",
    "title": "Neuvillette",
    "region": "fontaine",
    "category": "character-records",
    "classification": "canon",
    "summary": "Neuvillette is Fontaine’s Iudex and Chief Justice. The Fontaine Archon Quest reveals his connection to the Hydro Dragon Sovereign and the authority he regains during the crisis.",
    "body": [
      "Neuvillette is Fontaine’s Iudex and Chief Justice. The Fontaine Archon Quest reveals his connection to the Hydro Dragon Sovereign and the authority he regains during the crisis.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Neuvillette",
      "Fontaine",
      "Genshin Impact lore",
      "character records",
      "Fontaine Archon Quest, Chapter IV",
      "Masquerade of the Guilty",
      "Neuvillette: Character Story"
    ],
    "gameSources": [
      "Fontaine Archon Quest, Chapter IV",
      "Masquerade of the Guilty",
      "Neuvillette: Character Story"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Neuvillette"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--7ffe89967f6f.webp",
      "width": 240,
      "height": 480,
      "alt": "Neuvillette image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Neuvillette",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-new-chronicles-of-the-six-kitsune",
    "slug": "book-new-chronicles-of-the-six-kitsune",
    "title": "New Chronicles of the Six Kitsune",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Inazuman book retells older kitsune stories in a newer form, linking memory and change through the region’s fox legends.",
    "body": [
      "This Inazuman book retells older kitsune stories in a newer form, linking memory and change through the region’s fox legends.",
      "The source index places this book collection in Inazuma. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "New Chronicles of the Six Kitsune",
      "Inazuma",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 6 volumes",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/New_Chronicles_of_the_Six_Kitsune"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--b842ff893643.webp",
      "width": 480,
      "height": 480,
      "alt": "New Chronicles of the Six Kitsune image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/New_Chronicles_of_the_Six_Kitsune",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 6,
      "regionLore": "Inazuma",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-nibelung",
    "slug": "lore-nibelung",
    "title": "Nibelung",
    "region": "teyvat-unknown",
    "category": "ancient-civilizations",
    "classification": "canon",
    "summary": "Nibelung is identified in Teyvat’s lore as the Dragon King. Records connect Nibelung’s return and the ancient dragon rulers to the conflict over Teyvat’s order; the archive separates those stated links from details that remain uncertain.",
    "body": [
      "Nibelung is identified in Teyvat’s lore as the Dragon King. Records connect Nibelung’s return and the ancient dragon rulers to the conflict over Teyvat’s order; the archive separates those stated links from details that remain uncertain.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Nibelung",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "ancient civilizations",
      "Before Sun and Moon",
      "The Byakuyakoku Collection",
      "Song of the Welkin Moon"
    ],
    "gameSources": [
      "Before Sun and Moon",
      "The Byakuyakoku Collection",
      "Song of the Welkin Moon"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Nibelung"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--8fa366fc2c1c.webp",
      "width": 480,
      "height": 270,
      "alt": "Nibelung image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Nibelung",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-night-murmurs-from-the-far-border",
    "slug": "book-night-murmurs-from-the-far-border",
    "title": "Night Murmurs From the Far Border",
    "region": "snezhnaya",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This collection of Snezhnayan fae tales includes a story about the Varcolac and other lesser-known folklore.",
    "body": [
      "This collection of Snezhnayan fae tales includes a story about the Varcolac and other lesser-known folklore.",
      "The source index places this book collection in Snezhnaya. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Night Murmurs From the Far Border",
      "Snezhnaya",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Viliana"
    ],
    "gameSources": [
      "In-game book collection: 1 volumes",
      "Reference location: Snezhnaya"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Night_Murmurs_From_the_Far_Border"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--29b8d211e792.webp",
      "width": 480,
      "height": 480,
      "alt": "Night Murmurs From the Far Border image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Night_Murmurs_From_the_Far_Border",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 1,
      "regionLore": "Snezhnaya",
      "author": "Viliana",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "nod-krai",
    "slug": "nod-krai",
    "title": "Nod-Krai: The Northern Borderland",
    "region": "nod-krai",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "Nod-Krai is an autonomous border region in the south of Snezhnaya, and the setting of Song of the Welkin Moon.",
    "body": [
      "Nod-Krai is a major region on the edge of Teyvat. The Genshin Impact Wiki describes it as an autonomous region in Snezhnaya’s southernmost area, with Nasha Town as its main city.",
      "Its Archon Quest storyline is Song of the Welkin Moon. The region has a strong connection to lunar history; individual explanations should be checked against relevant quests and item descriptions."
    ],
    "keywords": [
      "Nasha Town",
      "Snezhnaya",
      "Song of the Welkin Moon",
      "Three Moons",
      "Frostmoon Scions"
    ],
    "gameSources": [
      "Archon Quest: Song of the Welkin Moon",
      "Nod-Krai in-game region description"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Nod-Krai",
      "url": "https://genshin-impact.fandom.com/wiki/Nod-Krai"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--nod-krai.webp",
      "alt": "Nod-Krai: The Northern Borderland image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Nod-Krai",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "old-mondstadt",
    "slug": "decarabian-old-mondstadt",
    "title": "Old Mondstadt and Decarabian",
    "region": "mondstadt",
    "category": "ancient-civilizations",
    "classification": "canon",
    "summary": "Before the modern city, Mondstadt’s people lived under Decarabian’s rule inside a storm barrier.",
    "body": [
      "The rebellion against Decarabian is part of Mondstadt’s ancient history. The Nameless Bard and the wind spirit who became Barbatos were among those connected to the revolt.",
      "The story is told through quests, character stories, and item descriptions. This archive keeps it separate from later theories about its symbolism."
    ],
    "keywords": [
      "Decarabian",
      "Old Mondstadt",
      "Nameless Bard",
      "Barbatos",
      "ancient history"
    ],
    "gameSources": [
      "Venti Story Quest",
      "Weapon and artifact descriptions associated with Old Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Decarabian’s Mondstadt",
      "url": "https://genshin-impact.fandom.com/wiki/Decarabian%27s_Mondstadt"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--decarabian-old-mondstadt.webp",
      "alt": "Old Mondstadt and Decarabian image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Decarabian%27s_Mondstadt",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 351
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-omnipresence-over-mortals",
    "slug": "lore-omnipresence-over-mortals",
    "title": "Omnipresence Over Mortals",
    "region": "inazuma",
    "category": "quest-chronicles",
    "classification": "canon",
    "summary": "This Inazuma Archon Quest act brings the conflict over Visions to the Tenshukaku and the Shogun’s Plane of Euthymia. Its outcome changes the nation’s direction but does not erase every question about eternity.",
    "body": [
      "This Inazuma Archon Quest act brings the conflict over Visions to the Tenshukaku and the Shogun’s Plane of Euthymia. Its outcome changes the nation’s direction but does not erase every question about eternity.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Omnipresence Over Mortals",
      "Inazuma",
      "Genshin Impact lore",
      "quest chronicles",
      "Archon Quest, Chapter II: Act II",
      "Inazuma Archon Quest",
      "Raiden Shogun Story Quest"
    ],
    "gameSources": [
      "Archon Quest, Chapter II: Act II",
      "Inazuma Archon Quest",
      "Raiden Shogun Story Quest"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Omnipresence_Over_Mortals"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--63b2c480e322.webp",
      "width": 480,
      "height": 240,
      "alt": "Omnipresence Over Mortals image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Omnipresence_Over_Mortals",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-onibudou",
    "slug": "book-onibudou",
    "title": "Onibudou",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A captivating collection of traditional Inazuman ghost stories, supernatural legends, and humorous encounters between samurai and the mischievous Oni clans.",
    "body": [
      "Onibudou is a beloved compilation of classic Inazuman folklore focusing on the culture, martial valor, and mischievous temperament of the Oni race. The stories range from heroic legends of crimson Oni warriors fighting alongside human generals to lighthearted folk tales of blue Oni playing pranks on greedy village tax collectors.",
      "The collection provides rich historical background for the dual tribes of the Oni, explaining their pride, their fierce loyalty to sworn oaths, and their eventual marginalization in modern Inazuma society.",
      "Read by children across Inazuma and frequently adapted into theater plays and kabuki performances."
    ],
    "keywords": [
      "Onibudou",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Onibudou"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--fcad07209529.webp",
      "width": 480,
      "height": 480,
      "alt": "Onibudou image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Onibudou",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "None",
      "author": "Inazuman Folklorist",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-orobashi",
    "slug": "lore-orobashi",
    "title": "Orobashi",
    "region": "inazuma",
    "category": "gods-divinity",
    "classification": "canon",
    "summary": "Orobashi was the serpent god worshipped on Watatsumi Island. Its death and the later conflict with the Shogunate shape the island’s history and are explored through quests and records.",
    "body": [
      "Orobashi was the serpent god worshipped on Watatsumi Island. Its death and the later conflict with the Shogunate shape the island’s history and are explored through quests and records.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Orobashi",
      "Inazuma",
      "Genshin Impact lore",
      "gods divinity",
      "The Moon-Bathed Deep",
      "Inazuma Archon Quest",
      "The Byakuyakoku Collection"
    ],
    "gameSources": [
      "The Moon-Bathed Deep",
      "Inazuma Archon Quest",
      "The Byakuyakoku Collection"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Orobashi"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--4bc410421ab5.webp",
      "width": 480,
      "height": 405,
      "alt": "Orobashi image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Orobashi",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "paimon-origin",
    "slug": "paimon-origin-theories",
    "title": "Paimon’s Origin: Community Theories",
    "region": "teyvat-unknown",
    "category": "unanswered-mysteries",
    "classification": "theory",
    "summary": "Paimon’s complete origin has not been confirmed in released story. This entry records the open question without presenting a theory as fact.",
    "body": [
      "Paimon travels with the Traveler and is known to the player from the opening of the game. The story has not given a complete, confirmed account of her origin.",
      "Many fan explanations exist, but this archive does not endorse one. Future updates should separate new in-game facts from community speculation."
    ],
    "keywords": [
      "Paimon",
      "origin",
      "community theory",
      "unconfirmed"
    ],
    "gameSources": [
      "Main story and Paimon dialogue"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Paimon",
      "url": "https://genshin-impact.fandom.com/wiki/Paimon"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--paimon-origin-theories.webp",
      "alt": "Paimon’s Origin: Community Theories image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Paimon",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 360,
      "height": 640
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-pari",
    "slug": "lore-pari",
    "title": "Pari",
    "region": "sumeru",
    "category": "species-creatures",
    "classification": "canon",
    "summary": "The Pari are spirits connected to the oasis of Vourukasha and the Khvarena. Their story unfolds through the Khvarena of Good and Evil quest chain.",
    "body": [
      "The Pari are spirits connected to the oasis of Vourukasha and the Khvarena. Their story unfolds through the Khvarena of Good and Evil quest chain.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Pari",
      "Sumeru",
      "Genshin Impact lore",
      "species creatures",
      "Khvarena of Good and Evil",
      "The Hymn of Tir Yazad",
      "Vourukasha Oasis"
    ],
    "gameSources": [
      "Khvarena of Good and Evil",
      "The Hymn of Tir Yazad",
      "Vourukasha Oasis"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Pari"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--02d04aa38205.webp",
      "width": 480,
      "height": 480,
      "alt": "Pari image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Pari",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-perinheri",
    "slug": "book-perinheri",
    "title": "Perinheri",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This two-volume Khaenri’ahn tale survives through a later literary work whose author claims a legendary source that can no longer be checked.",
    "body": [
      "This two-volume Khaenri’ahn tale survives through a later literary work whose author claims a legendary source that can no longer be checked.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Perinheri",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Perinheri"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--01e2202a7c5e.webp",
      "width": 480,
      "height": 480,
      "alt": "Perinheri image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Perinheri",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "Khaenri'ah",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-pharmacists-notebook-i",
    "slug": "book-pharmacists-notebook-i",
    "title": "Pharmacist's Notebook (I)",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "The first clinical notebook of the devoted pharmacist Yasumoto, recording his attempts to formulate a cure for the agonizing Tatarigami sickness on Yashiori Island.",
    "body": [
      "Pharmacist's Notebook: Part I contains the clinical research logs of Yasumoto, an honorable local physician on Yashiori Island who refused to flee during the civil war. Witnessing soldiers and civilians succumbing to the toxic radioactive miasma released by Orobashi's shattered bones (the Tatarigami), Yasumoto dedicated his life to discovering a remedy.",
      "The entries detail his experiments combining Naku Weeds with herbal extracts, documenting the symptoms of Tatarigami poisoning—fever, visual hallucinations, and psychological frenzy.",
      "Discovered during the world quest 'Treatment on the Island' in Higi Village, marking the beginning of a tragic doctor's heroic sacrifice."
    ],
    "keywords": [
      "Pharmacist's Notebook (I)",
      "Inazuma",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Pharmacist%27s_Notebook_(I)"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--318a19c9fcc1.webp",
      "width": 480,
      "height": 480,
      "alt": "Pharmacist's Notebook (I) image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Pharmacist%27s_Notebook_(I)",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Inazuma",
      "author": "Yasumoto (Inazuman Pharmacist)",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-pharmacists-notebook-ii",
    "slug": "book-pharmacists-notebook-ii",
    "title": "Pharmacist's Notebook (II)",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "The second notebook documenting Yasumoto's perilous decision to test experimental remedies on himself as supplies dwindle on war-torn Yashiori Island.",
    "body": [
      "Pharmacist's Notebook: Part II chronicles the escalating crisis on Yashiori Island as the civil war cuts off all medical shipments from Narukami Island. Faced with dying patients, Yasumoto makes the harrowing decision to ingest experimental medicine doses himself to test their toxicity.",
      "The entries record his worsening physical tremors and vivid nightmares of a giant coiled serpent, showing his unwavering determination to save his patients even as his own body begins to succumb to the Tatarigami curse.",
      "Found in the abandoned ruins of Higi Village, standing as a heartbreaking testament to selfless medical dedication."
    ],
    "keywords": [
      "Pharmacist's Notebook (II)",
      "Inazuma",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Pharmacist%27s_Notebook_(II)"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--318a19c9fcc1.webp",
      "width": 480,
      "height": 480,
      "alt": "Pharmacist's Notebook (II) image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Pharmacist%27s_Notebook_(II)",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Inazuma",
      "author": "Yasumoto (Inazuman Pharmacist)",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-pharmacists-notebook-iii",
    "slug": "book-pharmacists-notebook-iii",
    "title": "Pharmacist's Notebook (III)",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "The final, trembling notes of Yasumoto, recording his departure for the southern shore and his final blessing to the Traveler who aided his mission.",
    "body": [
      "Pharmacist's Notebook: Part III represents the final, tragic words of Dr. Yasumoto. With his mental faculties deteriorating from the self-administered doses, he thanks the Traveler for leaving Naku Weeds outside his hut and announces his departure to the southern reefs to test one last experimental batch.",
      "His final entry contains a touching message expressing hope that the skies of Yashiori will one day clear and that future generations will live without fear of the serpent's wrath.",
      "Recovered on the southern shore of Yashiori Island beside his medicine basket, completing his legacy."
    ],
    "keywords": [
      "Pharmacist's Notebook (III)",
      "Inazuma",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Pharmacist%27s_Notebook_(III)"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--318a19c9fcc1.webp",
      "width": 480,
      "height": 480,
      "alt": "Pharmacist's Notebook (III) image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Pharmacist%27s_Notebook_(III)",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Inazuma",
      "author": "Yasumoto (Inazuman Pharmacist)",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-polestar-ballet-anthology",
    "slug": "book-polestar-ballet-anthology",
    "title": "Polestar Ballet Anthology",
    "region": "snezhnaya",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This four-part script collection preserves selections from the Korolevskiy Troupe, including material from Black Snow Swan.",
    "body": [
      "This four-part script collection preserves selections from the Korolevskiy Troupe, including material from Black Snow Swan.",
      "The source index places this book collection in Snezhnaya. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Polestar Ballet Anthology",
      "Snezhnaya",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 4 volumes",
      "Reference location: Snezhnaya"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Polestar_Ballet_Anthology"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--ab39cda0b62f.webp",
      "width": 480,
      "height": 480,
      "alt": "Polestar Ballet Anthology image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Polestar_Ballet_Anthology",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 4,
      "regionLore": "Snezhnaya",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-pretty-please-kitsune-guuji",
    "slug": "book-pretty-please-kitsune-guuji",
    "title": "Pretty Please, Kitsune Guuji?",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A wildly successful romantic fantasy light novel from Inazuma featuring an all-powerful, teasing Kitsune shrine maiden based affectionately on Guuji Yae Miko.",
    "body": [
      "Pretty Please, Kitsune Guuji? is one of the bestselling light novels in modern Inazuma, published by the Yae Publishing House and submitted as an entry for the Magnificent Irodori Festival competition.",
      "The story follows an ordinary mortal protagonist who is taken under the wing of an impossibly beautiful, cunning, and delightfully mischievous Kitsune high priestess, navigating comedic shrine dilemmas, romantic misunderstandings, and supernatural encounters.",
      "The novel's runaway popularity amused Guuji Yae Miko herself, who personally approved the manuscript with a smirk, viewing it as fantastic publicity for the Grand Narukami Shrine.",
      "Purchased at the Yae Publishing House stall in Inazuma City."
    ],
    "keywords": [
      "Pretty Please, Kitsune Guuji?",
      "Inazuma",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Pretty_Please,_Kitsune_Guuji%3F"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--42ba0ca15804.webp",
      "width": 480,
      "height": 480,
      "alt": "Pretty Please, Kitsune Guuji? image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Pretty_Please,_Kitsune_Guuji%3F",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Inazuma",
      "author": "Yae Publishing House Author",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-primordial-one",
    "slug": "lore-primordial-one",
    "title": "Primordial One",
    "region": "teyvat-unknown",
    "category": "gods-divinity",
    "classification": "canon",
    "summary": "Before Sun and Moon describes the Primordial One’s war against the Seven Sovereigns and the creation of four Shades. Fontaine’s Archon Quest later connects the Primordial One with the Heavenly Principles; the book presents the name Phanes as a possibility, not a settled identity.",
    "body": [
      "Before Sun and Moon describes the Primordial One’s war against the Seven Sovereigns and the creation of four Shades. Fontaine’s Archon Quest later connects the Primordial One with the Heavenly Principles; the book presents the name Phanes as a possibility, not a settled identity.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Primordial One",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "gods divinity",
      "Before Sun and Moon",
      "Fontaine Archon Quest, Chapter IV",
      "The Byakuyakoku Collection"
    ],
    "gameSources": [
      "Before Sun and Moon",
      "Fontaine Archon Quest, Chapter IV",
      "The Byakuyakoku Collection"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Primordial_One"
    },
    "image": null,
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-princess-mina-of-the-fallen-nation",
    "slug": "book-princess-mina-of-the-fallen-nation",
    "title": "Princess Mina of the Fallen Nation",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This six-volume fantasy follows a princess and a wandering warrior during the fall of an imagined nation.",
    "body": [
      "This six-volume fantasy follows a princess and a wandering warrior during the fall of an imagined nation.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Princess Mina of the Fallen Nation",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|region_lore = None"
    ],
    "gameSources": [
      "In-game book collection: 6 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Princess_Mina_of_the_Fallen_Nation"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--4def64a4f069.webp",
      "width": 480,
      "height": 480,
      "alt": "Princess Mina of the Fallen Nation image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Princess_Mina_of_the_Fallen_Nation",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 6,
      "regionLore": "None",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "prologue",
    "slug": "prologue-song-of-dragon-and-freedom",
    "title": "Prologue: Song of the Dragon and Freedom",
    "region": "mondstadt",
    "category": "quest-chronicles",
    "classification": "canon",
    "summary": "The Prologue follows the Traveler’s first major journey in Mondstadt and the crisis surrounding Dvalin.",
    "body": [
      "The first Archon Quest chapter brings the Traveler into Mondstadt and introduces the Knights of Favonius, Venti, and Dvalin’s crisis.",
      "Its resolution depends on cooperation rather than defeating Dvalin. The quest establishes several ideas that return later, including the relationship between an Archon and their people."
    ],
    "keywords": [
      "Archon Quest",
      "Prologue",
      "Dvalin",
      "Stormterror",
      "Venti"
    ],
    "gameSources": [
      "Archon Quest Prologue: Song of the Dragon and Freedom"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Archon Quests",
      "url": "https://genshin-impact.fandom.com/wiki/Archon_Quest"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--prologue-song-of-dragon-and-freedom.webp",
      "alt": "Prologue: Song of the Dragon and Freedom image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Archon_Quest",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 640
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-ragged-notebook-bygones-times-like-dust-passing",
    "slug": "book-ragged-notebook-bygones-times-like-dust-passing",
    "title": "Ragged Notebook (Bygones Times Like Dust Passing)",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A fragile, weathered diary fragment unearthed from the ruins of the Guili Plains, chronicling the joyful life and catastrophic final days of the Goddess of Dust's assembly.",
    "body": [
      "Ragged Notebook: Bygones, Times Like Dust Passing is an extraordinary archaeological relic unearthed from the collapsed stone vaults of the Guili Plains. Scribed thousands of years ago by an ordinary mortal farmer, it records the gentle, prosperous life under the co-rule of Guizhong and Morax.",
      "The author describes children playing among wild Glaze Lilies, the whirring of the automated Guizhong Ballistas protecting the perimeter, and the wisdom shared by the Goddess of Dust during harvest banquets.",
      "The final pages turn into a terrified, chaotic account of the sudden torrential flood and black storm that swallowed the assembly during the Archon War, capturing the grief of losing their beloved goddess.",
      "Discovered during archaeological excavations across the Guili Plains ruins."
    ],
    "keywords": [
      "Ragged Notebook (Bygones Times Like Dust Passing)",
      "Liyue",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Ragged_Notebook_(Bygones_Times_Like_Dust_Passing)"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--318a19c9fcc1.webp",
      "width": 480,
      "height": 480,
      "alt": "Ragged Notebook (Bygones Times Like Dust Passing) image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Ragged_Notebook_(Bygones_Times_Like_Dust_Passing)",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Liyue",
      "author": "Ancient Guili Settler",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-ragged-notebook-time-and-wind",
    "slug": "book-ragged-notebook-time-and-wind",
    "title": "Ragged Notebook (Time and Wind)",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A tattered researcher's notebook found on the nameless island east of Starsnatch Cliff, detailing the forgotten joint worship of Barbatos and the God of Time (Istaroth).",
    "body": [
      "Ragged Notebook: Time and Wind is a pivotal historical text recovered from the solitary, unmapped island located far off the eastern coast of Mondstadt. It records the research of a scholar investigating the ancient sundial and the forgotten temple of time.",
      "The notebook deciphered the profound inscription: 'Seeds of stories, brought by the wind and cultivated by time,' proving that ancient Mondstadt worshipped two deities simultaneously—the Anemo Archon Barbatos and Istaroth, the ancient Shade of Time.",
      "It details the secret rituals required to disperse the wind clusters at 2:00 AM using an Anemo catalyst, unlocking the hidden boss fight against the corrupted Eye of the Storm.",
      "Essential for completing the world quest 'Time and the Wind' on the nameless island."
    ],
    "keywords": [
      "Ragged Notebook (Time and Wind)",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Ragged_Notebook_(Time_and_Wind)"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--432ca5626aa3.webp",
      "width": 480,
      "height": 480,
      "alt": "Ragged Notebook (Time and Wind) image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Ragged_Notebook_(Time_and_Wind)",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Mondstadt Sun-and-Wind Scholar",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "ei",
    "slug": "raiden-ei",
    "title": "Raiden Ei and the Shogun",
    "region": "inazuma",
    "category": "character-records",
    "classification": "canon",
    "summary": "Ei and the puppet Shogun are central to Inazuma’s story about eternity, loss, and change.",
    "body": [
      "The Inazuma Archon Quest distinguishes Ei from the puppet that governs in her name. Ei withdrew into the Plane of Euthymia while the Shogun carried out her rule.",
      "The conflict around the Vision Hunt and Sakoku Decrees is resolved through the Traveler’s encounters with Ei and the people affected by those policies."
    ],
    "keywords": [
      "Ei",
      "Raiden Shogun",
      "Electro",
      "eternity",
      "Inazuma",
      "Vision Hunt Decree"
    ],
    "gameSources": [
      "Archon Quest Chapter II",
      "Raiden Shogun Story Quest: Imperatrix Umbrosa Chapter"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Raiden Shogun",
      "url": "https://genshin-impact.fandom.com/wiki/Raiden_Shogun"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--raiden-ei.webp",
      "alt": "Raiden Ei and the Shogun image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Raiden_Shogun",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 360,
      "height": 640
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-rangi-nuis-end",
    "slug": "book-rangi-nuis-end",
    "title": "Rangi Nui's End",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Natlan folk song recounts the end of the hero Rangi Nui as remembered by the People of the Springs.",
    "body": [
      "This Natlan folk song recounts the end of the hero Rangi Nui as remembered by the People of the Springs.",
      "The source index places this book collection in Natlan. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Rangi Nui's End",
      "Natlan",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 1 volumes",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Rangi_Nui%27s_End"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--e8a109840fe7.webp",
      "width": 480,
      "height": 480,
      "alt": "Rangi Nui's End image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Rangi_Nui%27s_End",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 1,
      "regionLore": "Natlan",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-records-of-a-changing-village",
    "slug": "book-records-of-a-changing-village",
    "title": "Records of a Changing Village",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A gentle, multigenerational chronicle recording the transition of Qingce Village from a fortress settlement into a peaceful sanctuary for elderly retirees and children.",
    "body": [
      "Records of a Changing Village is a warm, sociological chronicle documenting the history of Qingce Village, nestled among the bamboo-shrouded northern terraced mountains of Liyue.",
      "The text traces how the village was originally founded on the petrified corpse of the ancient dragon Chi of Guyun, and how over centuries of peace, young adults migrated to the bustling port of Liyue Harbor for commercial work, leaving Qingce as a quiet, idyllic sanctuary cared for by village elders like Granny Ruoheart.",
      "The chronicle reflects the evolving generational dynamics of Liyue, celebrating the agricultural heritage and folk festivals that keep the village vibrant.",
      "Found in the community library of Qingce Village."
    ],
    "keywords": [
      "Records of a Changing Village",
      "Liyue",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Records_of_a_Changing_Village"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--fcad07209529.webp",
      "width": 480,
      "height": 480,
      "alt": "Records of a Changing Village image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Records_of_a_Changing_Village",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Liyue",
      "author": "Qingce Village Historian",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-records-of-hanan-pacha",
    "slug": "book-records-of-hanan-pacha",
    "title": "Records of Hanan Pacha",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part Natlan fable follows a legendary hero. The in-game record itself warns readers not to treat it as verified history.",
    "body": [
      "This three-part Natlan fable follows a legendary hero. The in-game record itself warns readers not to treat it as verified history.",
      "The source index places this book collection in Natlan. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Records of Hanan Pacha",
      "Natlan",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|vol1      = On crates near where Yawar is patrolling, at the \"Scions of the Canopy\""
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Records_of_Hanan_Pacha"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--6f88df8118c9.webp",
      "width": 480,
      "height": 480,
      "alt": "Records of Hanan Pacha image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Records_of_Hanan_Pacha",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Natlan",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-records-of-jueyun",
    "slug": "book-records-of-jueyun",
    "title": "Records of Jueyun",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Liyue collection gathers local legends, including stories about stone creatures and the places around them. Its tales show how people of the region remember the adepti and their landscape.",
    "body": [
      "This Liyue collection gathers local legends, including stories about stone creatures and the places around them. Its tales show how people of the region remember the adepti and their landscape.",
      "The source index places this book collection in Liyue. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Records of Jueyun",
      "Liyue",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Wuyuan"
    ],
    "gameSources": [
      "In-game book collection: 6 volumes",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Records_of_Jueyun"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--ed4533915446.webp",
      "width": 480,
      "height": 480,
      "alt": "Records of Jueyun image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Records_of_Jueyun",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 6,
      "regionLore": "Liyue",
      "author": "Wuyuan",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-records-of-the-gallant",
    "slug": "book-records-of-the-gallant",
    "title": "Records of the Gallant",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "These two volumes gather tales of Liyue’s wandering heroes. The stories come from different traditions and are best treated as legend rather than a single continuous biography.",
    "body": [
      "These two volumes gather tales of Liyue’s wandering heroes. The stories come from different traditions and are best treated as legend rather than a single continuous biography.",
      "The source index places this book collection in Liyue. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Records of the Gallant",
      "Liyue",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Records_of_the_Gallant"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--a126bc274def.webp",
      "width": 480,
      "height": 480,
      "alt": "Records of the Gallant image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Records_of_the_Gallant",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "Liyue",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "remuria",
    "slug": "remuria",
    "title": "Remuria",
    "region": "fontaine",
    "category": "ancient-civilizations",
    "classification": "canon",
    "summary": "Remuria is an ancient civilization explored through Fontaine’s Sea of Bygone Eras story.",
    "body": [
      "The Sea of Bygone Eras questline introduces Remuria through ruins, records, and the story of its ruler Remus.",
      "The story is delivered through a specific quest and its records, so this summary focuses on the main setting rather than treating every object description as a full historical account."
    ],
    "keywords": [
      "Remuria",
      "Remus",
      "Sea of Bygone Eras",
      "Fontaine",
      "ancient civilization"
    ],
    "gameSources": [
      "World Quest: Canticles of Harmony",
      "Remuria in-game item descriptions"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Remuria",
      "url": "https://genshin-impact.fandom.com/wiki/Remuria"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--remuria.webp",
      "alt": "Remuria image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Remuria",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-rex-incognito",
    "slug": "book-rex-incognito",
    "title": "Rex Incognito",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Liyue fantasy series imagines Rex Lapis walking among ordinary people. The books intentionally mix folklore and invention, so their scenes are not all factual history.",
    "body": [
      "This Liyue fantasy series imagines Rex Lapis walking among ordinary people. The books intentionally mix folklore and invention, so their scenes are not all factual history.",
      "The source index places this book collection in Liyue. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Rex Incognito",
      "Liyue",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 4 volumes",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Rex_Incognito"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--316db6427428.webp",
      "width": 480,
      "height": 480,
      "alt": "Rex Incognito image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Rex_Incognito",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 4,
      "regionLore": "Liyue",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-rhinedottir",
    "slug": "lore-rhinedottir",
    "title": "Rhinedottir",
    "region": "teyvat-unknown",
    "category": "character-records",
    "classification": "canon",
    "summary": "Rhinedottir, also known as Gold, is a Khaenri’ahn alchemist associated with the Hexenzirkel. She created Albedo and is linked to the monsters released during the Cataclysm.",
    "body": [
      "Rhinedottir, also known as Gold, is a Khaenri’ahn alchemist associated with the Hexenzirkel. She created Albedo and is linked to the monsters released during the Cataclysm.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Rhinedottir",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "character records",
      "Albedo: Character Story",
      "Dragonspine quests",
      "Hexenzirkel references"
    ],
    "gameSources": [
      "Albedo: Character Story",
      "Dragonspine quests",
      "Hexenzirkel references"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Rhinedottir"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--ee3c01fbd871.webp",
      "width": 272,
      "height": 480,
      "alt": "Rhinedottir image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Rhinedottir",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-robben-versus-chesterton-iridescent-brooch",
    "slug": "book-robben-versus-chesterton-iridescent-brooch",
    "title": "Robben versus Chesterton: Iridescent Brooch",
    "region": "fontaine",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Fontaine detective novel begins the fictional rivalry between thief Fantomas Robben and detective Chesterton.",
    "body": [
      "This Fontaine detective novel begins the fictional rivalry between thief Fantomas Robben and detective Chesterton.",
      "The source index places this book collection in Fontaine. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Robben versus Chesterton: Iridescent Brooch",
      "Fontaine",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Fontaine"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Robben_versus_Chesterton:_Iridescent_Brooch"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--3313f8ef56a5.webp",
      "width": 480,
      "height": 480,
      "alt": "Robben versus Chesterton: Iridescent Brooch image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Robben_versus_Chesterton:_Iridescent_Brooch",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Fontaine",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-sacred-sakura-cleansing-summary",
    "slug": "book-sacred-sakura-cleansing-summary",
    "title": "Sacred Sakura Cleansing Summary",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "The solemn ritual codex outlining the sacred five-point purification of the Thunder Sakura roots across Narukami Island to purge accumulated miasma.",
    "body": [
      "The Sacred Sakura Cleansing Summary is a sacred ritual manual outlining the ancient, dangerous ceremonies required to purify the subterranean roots of the Sacred Sakura on Narukami Island. It details the five key purification sites: Konda Village, the Abandoned Shrine, Chinju Forest, Araumi, and the Kamisato Estate shore.",
      "The text explains that the Sacred Sakura continuously absorbs the filth, malice, and lingering memories of fallen monsters and corrupted soldiers from the Cataclysm. If the cleansing ritual is not performed every few centuries, the accumulated tumor will burst, poisoning the Ley Lines and unleashing dark phantoms across Inazuma.",
      "Central to the emotional world quest 'Sacred Sakura Cleansing Ritual,' guided by the masked maiden Hanachirusato (Kazari), who was herself born from the condensed memory of the Kitsune Saiguu.",
      "Awarded upon completing the Sacred Sakura purification ritual on Mt. Yougou."
    ],
    "keywords": [
      "Sacred Sakura Cleansing Summary",
      "Inazuma",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Sacred_Sakura_Cleansing_Summary"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--fcad07209529.webp",
      "width": 480,
      "height": 480,
      "alt": "Sacred Sakura Cleansing Summary image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Sacred_Sakura_Cleansing_Summary",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Inazuma",
      "author": "Hanachirusato (Kazari) & Shrine Maidens",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-sal-vindagnyr",
    "slug": "lore-sal-vindagnyr",
    "title": "Sal Vindagnyr",
    "region": "mondstadt",
    "category": "ancient-civilizations",
    "classification": "canon",
    "summary": "Sal Vindagnyr was an ancient settlement on Dragonspine. In-game tablets and quests describe a kingdom that was struck by a Skyfrost Nail, leaving the mountain’s ruins and frozen history behind.",
    "body": [
      "Sal Vindagnyr was an ancient settlement on Dragonspine. In-game tablets and quests describe a kingdom that was struck by a Skyfrost Nail, leaving the mountain’s ruins and frozen history behind.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Sal Vindagnyr",
      "Mondstadt",
      "Genshin Impact lore",
      "ancient civilizations",
      "In the Mountains",
      "Ancient Carvings",
      "Skyfrost Nail"
    ],
    "gameSources": [
      "In the Mountains",
      "Ancient Carvings",
      "Skyfrost Nail"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Sal_Vindagnyr"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--8c8d6b003e4d.webp",
      "width": 480,
      "height": 270,
      "alt": "Sal Vindagnyr image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Sal_Vindagnyr",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-sangonomiya-chronicles",
    "slug": "book-sangonomiya-chronicles",
    "title": "Sangonomiya Chronicles",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "The definitive official history of Watatsumi Island, chronicling their exodus from Enkanomiya, the reign of Orobashi, and the modern Sangonomiya resistance.",
    "body": [
      "Sangonomiya Chronicles is the comprehensive official historical record of the people of Watatsumi Island. Written from the perspective of the shrine maidens, the chronicle documents their ancestors' harrowing survival in sunken Enkanomiya, their salvation by the great serpent Orobashi, and their emergence onto the surface to cultivate the coral-ringed island.",
      "The text provides the Watatsumi perspective on the tragic war with the Shogunate, detailing how Orobashi was driven by an unspoken celestial mandate to march onto Yashiori Island, and honoring the heroic general Gorou and the Sangonomiya clan for defending their cultural autonomy.",
      "Essential reading for anyone seeking to understand the deep political and spiritual divide within Inazuma.",
      "Catalogued in the archives of Sangonomiya Shrine on Watatsumi Island."
    ],
    "keywords": [
      "Sangonomiya Chronicles",
      "Inazuma",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Sangonomiya_Chronicles"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--b9c68006c868.webp",
      "width": 480,
      "height": 480,
      "alt": "Sangonomiya Chronicles image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Sangonomiya_Chronicles",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Inazuma",
      "author": "Watatsumi Shrine Scholar",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-scroll-of-streaming-song",
    "slug": "book-scroll-of-streaming-song",
    "title": "Scroll of Streaming Song",
    "region": "sumeru",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part desert text survives in fragments. Its author is not confirmed, so the archive does not attribute it to a named writer.",
    "body": [
      "This three-part desert text survives in fragments. Its author is not confirmed, so the archive does not attribute it to a named writer.",
      "The source index places this book collection in Sumeru. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Scroll of Streaming Song",
      "Sumeru",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Nabu Malikata {{Ref/Quest|A Divergence Leading to Oneself}}"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Sumeru"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Scroll_of_Streaming_Song"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--aab5b2333acc.webp",
      "width": 480,
      "height": 480,
      "alt": "Scroll of Streaming Song image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Scroll_of_Streaming_Song",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Sumeru",
      "author": "Nabu Malikata {{Ref/Quest",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-seelie",
    "slug": "lore-seelie",
    "title": "Seelie",
    "region": "teyvat-unknown",
    "category": "species-creatures",
    "classification": "canon",
    "summary": "Seelie are small, guiding spirits found across Teyvat. Ruins and books associate them with an older civilization, but the surviving records do not explain every part of their origin.",
    "body": [
      "Seelie are small, guiding spirits found across Teyvat. Ruins and books associate them with an older civilization, but the surviving records do not explain every part of their origin.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Seelie",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "species creatures",
      "The Boar Princess",
      "Seelie court ruins",
      "Teyvat world exploration"
    ],
    "gameSources": [
      "The Boar Princess",
      "Seelie court ruins",
      "Teyvat world exploration"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Seelie"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--2223107fe2d1.webp",
      "width": 480,
      "height": 270,
      "alt": "Seelie image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Seelie",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-shogun-almighty-reborn-as-raiden-with-unlimited-power",
    "slug": "book-shogun-almighty-reborn-as-raiden-with-unlimited-power",
    "title": "Shogun Almighty: Reborn as Raiden With Unlimited Power",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "An outrageously over-the-top, modern Inazuman reincarnation light novel featuring an all-powerful Shogun who commands unlimited lightning across the cosmos.",
    "body": [
      "Shogun Almighty: Reborn as Raiden with Unlimited Power is a wildly popular, high-energy fantasy light novel that exemplifies Inazuma's modern light novel boom. Submitted to the Yae Publishing House, it follows an overpowered protagonist reincarnated into an alternate-universe Raiden Shogun who obliterates obstacles with comically exaggerated lightning strikes.",
      "The book reflects the vibrant pop-culture scene of post-decree Inazuma, where young authors freely invent sensational adventures inspired by their revered Archon.",
      "Sold out in record time at the Yae Publishing House stall in Inazuma City."
    ],
    "keywords": [
      "Shogun Almighty: Reborn as Raiden With Unlimited Power",
      "Inazuma",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Shogun_Almighty:_Reborn_as_Raiden_With_Unlimited_Power"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--00d60a8491da.webp",
      "width": 480,
      "height": 480,
      "alt": "Shogun Almighty: Reborn as Raiden With Unlimited Power image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Shogun_Almighty:_Reborn_as_Raiden_With_Unlimited_Power",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Inazuma",
      "author": "Yae Publishing House Contestant",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "snezhnaya",
    "slug": "snezhnaya",
    "title": "Snezhnaya: A Nation Still Unfolding",
    "region": "snezhnaya",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "Snezhnaya is associated with the Cryo Archon and the Fatui. Its full nation story is not covered here as released content.",
    "body": [
      "The game identifies Snezhnaya as one of Teyvat’s seven nations and associates it with the Tsaritsa, the Cryo Archon. The Fatui are a powerful organization connected to her goals.",
      "Because the nation’s main Archon Quest chapter is upcoming in the current game story, this record sticks to information established in released dialogue and official previews. It does not use leaks."
    ],
    "keywords": [
      "Cryo",
      "Tsaritsa",
      "Fatui",
      "Chapter VI",
      "upcoming"
    ],
    "gameSources": [
      "Teyvat Chapter Storyline Preview: Travail",
      "Released in-game Fatui dialogue"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Snezhnaya",
      "url": "https://genshin-impact.fandom.com/wiki/Snezhnaya"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--snezhnaya.webp",
      "alt": "Snezhnaya: A Nation Still Unfolding image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Snezhnaya",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-someones-diary",
    "slug": "book-someones-diary",
    "title": "Someone's Diary",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This six-part collection contains personal writings connected to Qingce Village. Its private, fragmentary form leaves some details unresolved.",
    "body": [
      "This six-part collection contains personal writings connected to Qingce Village. Its private, fragmentary form leaves some details unresolved.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Someone's Diary",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 6 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Someone%27s_Diary"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--fcad07209529.webp",
      "width": 480,
      "height": 480,
      "alt": "Someone's Diary image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Someone%27s_Diary",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 6,
      "regionLore": "Teyvat",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-somewhat-aged-copy-of-tequil-the-brave",
    "slug": "book-somewhat-aged-copy-of-tequil-the-brave",
    "title": "Somewhat Aged Copy of \"Tequil the Brave\"",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A beloved, dog-eared copy of Natlan's classic folk legend about Tequil, a courageous young warrior who befriended a stubborn Saurian to protect his tribe.",
    "body": [
      "A Somewhat-Aged Copy of Tequil the Brave is a weathered, well-loved children's book found across tribal homes in Natlan. It tells the heartwarming heroic tale of Tequil, an undersized youth from the Children of the Echoes who refused to give up his dream of becoming a warrior.",
      "Tequil forms an unbreakable bond with a wounded Tepetlisaur whelp, learning to listen to the earth and digging through solid bedrock to rescue his trapped villagers during an earthquake.",
      "The story teaches Natlan children the core tribal virtues: that true bravery is not brute force, but loyalty, perseverance, and harmony with Saurian kin.",
      "Found in tribal dwellings across the Children of the Echoes settlement."
    ],
    "keywords": [
      "Somewhat Aged Copy of \"Tequil the Brave\"",
      "Natlan",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Somewhat_Aged_Copy_of_%22Tequil_the_Brave%22"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--53c9512c7a4c.webp",
      "width": 480,
      "height": 480,
      "alt": "Somewhat Aged Copy of \"Tequil the Brave\" image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Somewhat_Aged_Copy_of_%22Tequil_the_Brave%22",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Natlan",
      "author": "Natlan Children's Storyteller",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "welkin-moon",
    "slug": "song-of-the-welkin-moon",
    "title": "Song of the Welkin Moon",
    "region": "teyvat-unknown",
    "category": "quest-chronicles",
    "classification": "canon",
    "summary": "The Song of the Welkin Moon is an Archon Quest chapter that begins in Nod-Krai and continues into Sumeru. Its current acts deepen the moon lore and bring major changes to the archive’s understanding of Irminsul and the Four Shades.",
    "body": [
      "The Song of the Welkin Moon is an Archon Quest chapter that begins in Nod-Krai and continues into Sumeru. Its current acts deepen the moon lore and bring major changes to the archive’s understanding of Irminsul and the Four Shades.",
      "This note separates events shown in quests from older books and oral traditions that may use symbolic or incomplete language.",
      "Use the source links and in-game references to follow the evidence. Open questions are not presented as confirmed explanations."
    ],
    "keywords": [
      "Nod-Krai",
      "Archon Quest",
      "Welkin Moon",
      "Traveler",
      "current Archon Quest",
      "Song of the Welkin Moon",
      "Teyvat lore"
    ],
    "gameSources": [
      "Archon Quest: Song of the Welkin Moon",
      "Official update details"
    ],
    "source": {
      "label": "Genshin Impact Wiki · updated lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Song_of_the_Welkin_Moon"
    },
    "extraSources": [
      {
        "label": "HoYoverse — Nod-Krai update details",
        "url": "https://genshin.hoyoverse.com/en/news/detail/159349"
      }
    ],
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--song-of-the-welkin-moon.webp",
      "alt": "Song of the Welkin Moon image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Nod-Krai",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-spanking-new-copy-of-tequil-the-brave",
    "slug": "book-spanking-new-copy-of-tequil-the-brave",
    "title": "Spanking New Copy of \"Tequil the Brave\"",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A freshly printed, vibrant edition of the Tequil the Brave legend, featuring updated illustrations of Saurian companions and tribal banners.",
    "body": [
      "A Spanking-New Copy of Tequil the Brave is a newly published, pristine edition of Natlan's favorite children's story, printed on high-quality paper with vibrant color illustrations celebrating Saurian indwelling.",
      "Purchased by tribal parents for young children preparing for their first Saurian bonding ceremonies, the book continues to inspire the next generation of Natlan defenders.",
      "Available from traders in the Stadium of the Sacred Flame."
    ],
    "keywords": [
      "Spanking New Copy of \"Tequil the Brave\"",
      "Natlan",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Spanking_New_Copy_of_%22Tequil_the_Brave%22"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--06b908e89fca.webp",
      "width": 480,
      "height": 480,
      "alt": "Spanking New Copy of \"Tequil the Brave\" image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Spanking_New_Copy_of_%22Tequil_the_Brave%22",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Natlan",
      "author": "Natlan Tribal Publisher",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-springs-of-hidden-jade",
    "slug": "book-springs-of-hidden-jade",
    "title": "Springs of Hidden Jade",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This two-volume Liyue tale follows a young man in a secluded bamboo grove. Later moon lore names it among several storybooks that preserve a version of an older tale, with details not guaranteed to match the original.",
    "body": [
      "This two-volume Liyue tale follows a young man in a secluded bamboo grove. Later moon lore names it among several storybooks that preserve a version of an older tale, with details not guaranteed to match the original.",
      "The source index places this book collection in Liyue. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Springs of Hidden Jade",
      "Liyue",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Springs_of_Hidden_Jade"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--3e51386f32ee.webp",
      "width": 480,
      "height": 480,
      "alt": "Springs of Hidden Jade image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Springs_of_Hidden_Jade",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "Liyue",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "extraSources": [
      {
        "label": "Three Moons · related lore record",
        "url": "https://genshin-impact.fandom.com/wiki/Three_Moons"
      }
    ],
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-stone-tablet-compilations-vol-i",
    "slug": "book-stone-tablet-compilations-vol-i",
    "title": "Stone Tablet Compilations: Vol. I",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "An authoritative scholarly compilation transcribing and deciphering the ancient stone monument inscriptions erected by Rex Lapis and the Adepti across Liyue.",
    "body": [
      "Stone Tablet Compilations: Vol. I is a crucial academic transcription compiled by Liyue historians. It collects the archaic seal inscriptions engraved upon ancient stone tablets at Guyun Stone Forest, Dunyu Ruins, Luhua Pool, and Tianqiu Valley.",
      "The tablets record historical contracts between Morax and local mountain deities, divine decrees sealing malevolent earth dragons beneath the stone, and tributes to fallen Millelith warriors from the Archon War.",
      "Indispensable for Travelers and scholars solving the ancient puzzle mechanisms scattered across Liyue's wilderness.",
      "Available for study at Wanwen Bookhouse in Liyue Harbor."
    ],
    "keywords": [
      "Stone Tablet Compilations: Vol. I",
      "Liyue",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Stone_Tablet_Compilations:_Vol._I"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--ff6a68b2fa5e.webp",
      "width": 480,
      "height": 480,
      "alt": "Stone Tablet Compilations: Vol. I image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Stone_Tablet_Compilations:_Vol._I",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Liyue",
      "author": "Liyue Archaeological Society",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-string-of-pearls",
    "slug": "book-string-of-pearls",
    "title": "String of Pearls",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This five-part Liyue story begins with a fisherwoman losing a treasured necklace and follows the consequences of that small accident.",
    "body": [
      "This five-part Liyue story begins with a fisherwoman losing a treasured necklace and follows the consequences of that small accident.",
      "The source index places this book collection in Liyue. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "String of Pearls",
      "Liyue",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Yun Jin"
    ],
    "gameSources": [
      "In-game book collection: 5 volumes",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/String_of_Pearls"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--1da9568c92a8.webp",
      "width": 480,
      "height": 480,
      "alt": "String of Pearls image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/String_of_Pearls",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 5,
      "regionLore": "Liyue",
      "author": "Yun Jin",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "sumeru",
    "slug": "sumeru",
    "title": "Sumeru: Knowledge and Memory",
    "region": "sumeru",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "Sumeru brings together a rainforest, a desert, and a culture where knowledge has major political weight.",
    "body": [
      "Sumeru is one of the seven nations and the setting of Archon Quest Chapter III. The region includes rainforest and desert subregions, each with its own communities and history.",
      "The Sumeru Akademiya is a major institution in the nation. Its Archon Quest examines its power, its use of knowledge, and the role of the Dendro Archon."
    ],
    "keywords": [
      "Dendro",
      "Nahida",
      "Akademiya",
      "Irminsul",
      "desert",
      "rainforest"
    ],
    "gameSources": [
      "Archon Quest Chapter III",
      "Sumeru in-game region description"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Sumeru",
      "url": "https://genshin-impact.fandom.com/wiki/Sumeru"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--sumeru.webp",
      "alt": "Sumeru: Knowledge and Memory image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Sumeru",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-sundjattas-first-foray",
    "slug": "book-sundjattas-first-foray",
    "title": "Sundjatta's First Foray",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part Children of Echoes scroll recalls the young Sundjatta in a story handed down across generations.",
    "body": [
      "This three-part Children of Echoes scroll recalls the young Sundjatta in a story handed down across generations.",
      "The source index places this book collection in Natlan. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Sundjatta's First Foray",
      "Natlan",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Djeli Mamoudou"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Sundjatta%27s_First_Foray"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--ecca21ef4b55.webp",
      "width": 480,
      "height": 480,
      "alt": "Sundjatta's First Foray image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Sundjatta%27s_First_Foray",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Natlan",
      "author": "Djeli Mamoudou",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-sword-of-narzissenkreuz",
    "slug": "lore-sword-of-narzissenkreuz",
    "title": "Sword of Narzissenkreuz",
    "region": "fontaine",
    "category": "relics-equipment",
    "classification": "canon",
    "summary": "The Sword of Narzissenkreuz is a weapon tied to the Fontaine world-quest story of the Narzissenkreuz Ordo. Its history is best followed through the questline and the item’s own description.",
    "body": [
      "The Sword of Narzissenkreuz is a weapon tied to the Fontaine world-quest story of the Narzissenkreuz Ordo. Its history is best followed through the questline and the item’s own description.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Sword of Narzissenkreuz",
      "Fontaine",
      "Genshin Impact lore",
      "relics equipment",
      "In the Wake of Narcissus",
      "Narzissenkreuz Ordo",
      "Weapon description"
    ],
    "gameSources": [
      "In the Wake of Narcissus",
      "Narzissenkreuz Ordo",
      "Weapon description"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Sword_of_Narzissenkreuz"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--96e4b8caec58.webp",
      "width": 480,
      "height": 480,
      "alt": "Sword of Narzissenkreuz image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Sword_of_Narzissenkreuz",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-tales-carried-by-the-northwind",
    "slug": "book-tales-carried-by-the-northwind",
    "title": "Tales Carried by the Northwind",
    "region": "nod-krai",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This poetry collection remembers successive Starshynas, but only a small portion of the original work is known to survive.",
    "body": [
      "This poetry collection remembers successive Starshynas, but only a small portion of the original work is known to survive.",
      "The source index places this book collection in Nod-Krai. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Tales Carried by the Northwind",
      "Nod-Krai",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 1 volumes",
      "Reference location: Nod-Krai"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Tales_Carried_by_the_Northwind"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--f82525621bf9.webp",
      "width": 480,
      "height": 480,
      "alt": "Tales Carried by the Northwind image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Tales_Carried_by_the_Northwind",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 1,
      "regionLore": "Nod-Krai",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-tales-from-the-waves",
    "slug": "book-tales-from-the-waves",
    "title": "Tales From the Waves",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part sea legend is set in an older Liyue threatened by monsters from the water. It is a story preserved by the region, not a quest chronicle.",
    "body": [
      "This three-part sea legend is set in an older Liyue threatened by monsters from the water. It is a story preserved by the region, not a quest chronicle.",
      "The source index places this book collection in Liyue. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Tales From the Waves",
      "Liyue",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Tales_From_the_Waves"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--24aabe735ac4.webp",
      "width": 480,
      "height": 480,
      "alt": "Tales From the Waves image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Tales_From_the_Waves",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Liyue",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-tales-of-a-snow-winged-goose",
    "slug": "book-tales-of-a-snow-winged-goose",
    "title": "Tales of a Snow-Winged Goose",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part Fontaine fairy tale is associated with the legendary Snow-Winged Goose, though its cover and attribution are part of the fictional presentation.",
    "body": [
      "This three-part Fontaine fairy tale is associated with the legendary Snow-Winged Goose, though its cover and attribution are part of the fictional presentation.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Tales of a Snow-Winged Goose",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Vindia"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Tales_of_a_Snow-Winged_Goose"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--b3ef1aa3b375.webp",
      "width": 480,
      "height": 480,
      "alt": "Tales of a Snow-Winged Goose image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Tales_of_a_Snow-Winged_Goose",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "None",
      "author": "Vindia",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-teyvat-travel-guide",
    "slug": "book-teyvat-travel-guide",
    "title": "Teyvat Travel Guide",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part travel series introduces scenery across the nations through the Adventurers’ Guild and travelers’ notes.",
    "body": [
      "This three-part travel series introduces scenery across the nations through the Adventurers’ Guild and travelers’ notes.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Teyvat Travel Guide",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Alice"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Teyvat_Travel_Guide"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c7092c20c72b.webp",
      "width": 480,
      "height": 480,
      "alt": "Teyvat Travel Guide image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Teyvat_Travel_Guide",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Teyvat",
      "author": "Alice",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "teyvat",
    "slug": "teyvat",
    "title": "Teyvat: The Known World",
    "region": "teyvat-unknown",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "Teyvat is the world where the Traveler searches for their missing sibling and encounters its nations, histories, and powers.",
    "body": [
      "The game’s main journey moves through nations with distinct governments, Archon stories, and local histories. The Traveler’s journey also raises questions that cross national borders.",
      "This archive uses “Teyvat & Unknown” for records that apply across regions or do not yet have a clear regional home."
    ],
    "keywords": [
      "Traveler",
      "seven nations",
      "Celestia",
      "Abyss",
      "world"
    ],
    "gameSources": [
      "Main story and Archon Quests"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Teyvat",
      "url": "https://genshin-impact.fandom.com/wiki/Teyvat"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--teyvat.webp",
      "alt": "Teyvat: The Known World image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Teyvat",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-boar-princess",
    "slug": "book-the-boar-princess",
    "title": "The Boar Princess",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This seven-volume fairy tale follows a boar princess and her companions through a story about friendship, loss, and difficult choices.",
    "body": [
      "This seven-volume fairy tale follows a boar princess and her companions through a story about friendship, loss, and difficult choices.",
      "The source index places this book collection in Mondstadt. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Boar Princess",
      "Mondstadt",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Andersdotter"
    ],
    "gameSources": [
      "In-game book collection: 7 volumes",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Boar_Princess"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--ade7ce47715d.webp",
      "width": 480,
      "height": 480,
      "alt": "The Boar Princess image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Boar_Princess",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 7,
      "regionLore": "Mondstadt",
      "author": "Andersdotter",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-byakuyakoku-collection",
    "slug": "book-the-byakuyakoku-collection",
    "title": "The Byakuyakoku Collection",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This five-part collection preserves Watatsumi and Enkanomiya tales recorded before the serpent god’s death, offering several in-world views of the islands’ past.",
    "body": [
      "This five-part collection preserves Watatsumi and Enkanomiya tales recorded before the serpent god’s death, offering several in-world views of the islands’ past.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Byakuyakoku Collection",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 5 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Byakuyakoku_Collection"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--4e4bec5ee8cd.webp",
      "width": 480,
      "height": 480,
      "alt": "The Byakuyakoku Collection image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Byakuyakoku_Collection",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 5,
      "regionLore": "Teyvat",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-the-chasm",
    "slug": "lore-the-chasm",
    "title": "The Chasm",
    "region": "liyue",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "The Chasm is a mining region in western Liyue with an underground network and a long connection to the Abyss. Its quests reveal the miners’ records and the effects of the dark mud.",
    "body": [
      "The Chasm is a mining region in western Liyue with an underground network and a long connection to the Abyss. Its quests reveal the miners’ records and the effects of the dark mud.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "The Chasm",
      "Liyue",
      "Genshin Impact lore",
      "geography locations",
      "The Chasm Delvers",
      "Requiem of the Echoing Depths",
      "The Chasm: Underground Mines"
    ],
    "gameSources": [
      "The Chasm Delvers",
      "Requiem of the Echoing Depths",
      "The Chasm: Underground Mines"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/The_Chasm"
    },
    "image": null,
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-fall-of-the-faded-castle",
    "slug": "book-the-fall-of-the-faded-castle",
    "title": "The Fall of the Faded Castle",
    "region": "fontaine",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This anonymous poem uses an ominous voice to describe a ruined castle. The author and the truth behind its imagery remain unknown.",
    "body": [
      "This anonymous poem uses an ominous voice to describe a ruined castle. The author and the truth behind its imagery remain unknown.",
      "The source index places this book collection in Fontaine. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Fall of the Faded Castle",
      "Fontaine",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|vol1      = Inside {{LL|\"The Rusty Rudder\"|,}} next to the entrance"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Fontaine"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Fall_of_the_Faded_Castle"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--3ddea8ecc62e.webp",
      "width": 480,
      "height": 480,
      "alt": "The Fall of the Faded Castle image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Fall_of_the_Faded_Castle",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Fontaine",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "fatui",
    "slug": "fatui",
    "title": "The Fatui",
    "region": "snezhnaya",
    "category": "organizations-factions",
    "classification": "canon",
    "summary": "The Fatui are an organization based in Snezhnaya, with agents and diplomatic missions operating across Teyvat.",
    "body": [
      "The Fatui are connected to the Tsaritsa and active in several nations. Their Harbingers hold influential positions within the organization.",
      "Different Fatui members have different aims and methods. This overview does not treat one member’s actions as a complete description of the whole organization."
    ],
    "keywords": [
      "Fatui",
      "Snezhnaya",
      "Tsaritsa",
      "Harbingers",
      "organization"
    ],
    "gameSources": [
      "Archon Quests across multiple nations",
      "Teyvat Chapter Storyline Preview: Travail"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Fatui",
      "url": "https://genshin-impact.fandom.com/wiki/Fatui"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--fatui.webp",
      "alt": "The Fatui image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Fatui",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 640
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-feline-firm",
    "slug": "book-the-feline-firm",
    "title": "The Feline Firm",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This eight-part comic fantasy follows doorman Perroux after he receives an invitation from the mysterious Feline Firm.",
    "body": [
      "This eight-part comic fantasy follows doorman Perroux after he receives an invitation from the mysterious Feline Firm.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Feline Firm",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|region_lore = None"
    ],
    "gameSources": [
      "In-game book collection: 8 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Feline_Firm"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--0cf7d2d81375.webp",
      "width": 480,
      "height": 480,
      "alt": "The Feline Firm image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Feline_Firm",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 8,
      "regionLore": "None",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-folio-of-foliage",
    "slug": "book-the-folio-of-foliage",
    "title": "The Folio of Foliage",
    "region": "sumeru",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-volume account follows the Dendro Archon through a period of disaster, as reconstructed by later Sumeru researchers.",
    "body": [
      "This three-volume account follows the Dendro Archon through a period of disaster, as reconstructed by later Sumeru researchers.",
      "The source index places this book collection in Sumeru. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Folio of Foliage",
      "Sumeru",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Sumeru"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Folio_of_Foliage"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--02f57f88b3d7.webp",
      "width": 480,
      "height": 480,
      "alt": "The Folio of Foliage image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Folio_of_Foliage",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Sumeru",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-fox-in-the-dandelion-sea",
    "slug": "book-the-fox-in-the-dandelion-sea",
    "title": "The Fox in the Dandelion Sea",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This eleven-part Mondstadt fairy tale follows a fox and a hunter. Its recurring dandelion imagery connects the story to the nation’s wind and freedom motifs.",
    "body": [
      "This eleven-part Mondstadt fairy tale follows a fox and a hunter. Its recurring dandelion imagery connects the story to the nation’s wind and freedom motifs.",
      "The source index places this book collection in Mondstadt. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Fox in the Dandelion Sea",
      "Mondstadt",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 11 volumes",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Fox_in_the_Dandelion_Sea"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--ad44bce257ab.webp",
      "width": 480,
      "height": 480,
      "alt": "The Fox in the Dandelion Sea image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Fox_in_the_Dandelion_Sea",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 11,
      "regionLore": "Mondstadt",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "gnoses",
    "slug": "gnoses",
    "title": "The Gnoses",
    "region": "teyvat-unknown",
    "category": "relics-equipment",
    "classification": "canon",
    "summary": "A Gnosis is an object connected to an Archon’s authority and the divine order of Teyvat.",
    "body": [
      "Gnoses are important objects in the Archon stories. Their roles and origins are revealed over time, and different quests add details.",
      "This entry describes the object at a high level. It avoids assuming that holding a Gnosis explains every ability or decision made by an Archon."
    ],
    "keywords": [
      "Gnosis",
      "Archon",
      "Celestia",
      "elemental authority",
      "divine"
    ],
    "gameSources": [
      "Archon Quests across multiple nations"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Gnosis",
      "url": "https://genshin-impact.fandom.com/wiki/Gnosis"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--gnoses.webp",
      "alt": "The Gnoses image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Gnosis",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 575,
      "height": 640
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "guili",
    "slug": "guili-assembly",
    "title": "The Guili Assembly",
    "region": "liyue",
    "category": "ancient-civilizations",
    "classification": "canon",
    "summary": "The Guili Assembly was an ancient settlement in the Guili Plains, associated with Guizhong and Morax.",
    "body": [
      "Liyue’s quest and item records describe a community that once flourished in the Guili Plains. Its history is connected to Guizhong and Morax.",
      "The remains of the settlement are part of the region’s archaeological story. This archive avoids assigning dates or motives beyond what the game’s records establish."
    ],
    "keywords": [
      "Guili Plains",
      "Guizhong",
      "Morax",
      "Liyue",
      "ruins"
    ],
    "gameSources": [
      "World Quest: Treasure Lost, Treasure Found",
      "In-game records about Guizhong"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Guili Assembly",
      "url": "https://genshin-impact.fandom.com/wiki/Guili_Assembly"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--guili-assembly.webp",
      "alt": "The Guili Assembly image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Guili_Assembly",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-headless-coquitao",
    "slug": "book-the-headless-coquitao",
    "title": "The Headless Coquitao",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This two-part Masters of the Night-Wind scroll contains old tribal stories whose claimed age cannot be established from the text alone.",
    "body": [
      "This two-part Masters of the Night-Wind scroll contains old tribal stories whose claimed age cannot be established from the text alone.",
      "The source index places this book collection in Natlan. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Headless Coquitao",
      "Natlan",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|vol1      = On a crate by Xona in the \"Collective of Plenty\""
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Headless_Coquitao"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--46d77d975fc0.webp",
      "width": 480,
      "height": 480,
      "alt": "The Headless Coquitao image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Headless_Coquitao",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "Natlan",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-history-of-the-decline-and-fall-of-remuria",
    "slug": "book-the-history-of-the-decline-and-fall-of-remuria",
    "title": "The History of the Decline and Fall of Remuria",
    "region": "fontaine",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-volume history examines the ancient Remurian civilization through a later Fontaine scholar’s account.",
    "body": [
      "This three-volume history examines the ancient Remurian civilization through a later Fontaine scholar’s account.",
      "The source index places this book collection in Fontaine. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The History of the Decline and Fall of Remuria",
      "Fontaine",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Fontaine"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_History_of_the_Decline_and_Fall_of_Remuria"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--518d72e5138b.webp",
      "width": 480,
      "height": 480,
      "alt": "The History of the Decline and Fall of Remuria image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_History_of_the_Decline_and_Fall_of_Remuria",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Fontaine",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-the-immovable-god-and-the-eternal-euthymia",
    "slug": "lore-the-immovable-god-and-the-eternal-euthymia",
    "title": "The Immovable God and the Eternal Euthymia",
    "region": "inazuma",
    "category": "quest-chronicles",
    "classification": "canon",
    "summary": "This is the opening act of Inazuma’s Archon Quest. The Traveler reaches the islands, sees the Vision Hunt Decree at work, and becomes involved with the resistance and the Shogun’s rule.",
    "body": [
      "This is the opening act of Inazuma’s Archon Quest. The Traveler reaches the islands, sees the Vision Hunt Decree at work, and becomes involved with the resistance and the Shogun’s rule.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "The Immovable God and the Eternal Euthymia",
      "Inazuma",
      "Genshin Impact lore",
      "quest chronicles",
      "Archon Quest, Chapter II: Act I",
      "Ritou Escape Plan",
      "The Vision Hunt Decree"
    ],
    "gameSources": [
      "Archon Quest, Chapter II: Act I",
      "Ritou Escape Plan",
      "The Vision Hunt Decree"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/The_Immovable_God_and_the_Eternal_Euthymia"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--be0e03a2f50e.webp",
      "width": 480,
      "height": 240,
      "alt": "The Immovable God and the Eternal Euthymia image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Immovable_God_and_the_Eternal_Euthymia",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-lay-of-al-ahmar",
    "slug": "book-the-lay-of-al-ahmar",
    "title": "The Lay of Al-Ahmar",
    "region": "sumeru",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A passionate epic poem honoring the majesty, architectural wonders, and tragic celestial fall of King Deshret (Al-Ahmar) and his partnership with the Jinni.",
    "body": [
      "The Lay of Al-Ahmar is an evocative, rhythmic epic poem sung by desert bards and preserved by the Eremite tribes of the Great Red Sand. It glorifies the golden era of King Deshret (Al-Ahmar), the Lord of the Desert who commanded the sands, built soaring obsidian pyramids, and brought water to the arid wastes.",
      "The poem details the alliance between King Deshret and the ancient Jinni—spirits of nature and water who served his royal court—and his grand dream of constructing a utopian civilization free from death, disease, and the surveillance of the gods.",
      "It also laments the catastrophic day when King Deshret sought forbidden truths to defy fate, bringing down the celestial wrath and unleashing chaotic madness that buried his cities in sand and drove his people into generational exile.",
      "Found in the House of Daena library in Sumeru City and in Eremite camps across the desert."
    ],
    "keywords": [
      "The Lay of Al-Ahmar",
      "Sumeru",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Sumeru"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Lay_of_Al-Ahmar"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--dde7c0148908.webp",
      "width": 480,
      "height": 480,
      "alt": "The Lay of Al-Ahmar image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Lay_of_Al-Ahmar",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Sumeru",
      "author": "Eremite Desert Bards",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-legend-of-vennessa",
    "slug": "book-the-legend-of-vennessa",
    "title": "The Legend of Vennessa",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This two-part song tells of Vennessa before Mondstadt’s liberation and the events that shaped her later place in the city’s history.",
    "body": [
      "This two-part song tells of Vennessa before Mondstadt’s liberation and the events that shaped her later place in the city’s history.",
      "The source index places this book collection in Mondstadt. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Legend of Vennessa",
      "Mondstadt",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Legend_of_Vennessa"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c8f054ac5eed.webp",
      "width": 480,
      "height": 480,
      "alt": "The Legend of Vennessa image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Legend_of_Vennessa",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "Mondstadt",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-legends-of-reed-miller-thief-extraordinaire",
    "slug": "book-the-legends-of-reed-miller-thief-extraordinaire",
    "title": "The Legends of Reed Miller, Thief Extraordinaire",
    "region": "nod-krai",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part Nod-Krai anthology adapts the exploits of Reed Miller into popular fiction, with the stories’ accuracy left deliberately uncertain.",
    "body": [
      "This three-part Nod-Krai anthology adapts the exploits of Reed Miller into popular fiction, with the stories’ accuracy left deliberately uncertain.",
      "The source index places this book collection in Nod-Krai. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Legends of Reed Miller, Thief Extraordinaire",
      "Nod-Krai",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|vol1      = Sold by Dhabit at Mimisbrunnr Books in Nasha Town"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Nod-Krai"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Legends_of_Reed_Miller,_Thief_Extraordinaire"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--a3feb7912d4d.webp",
      "width": 480,
      "height": 480,
      "alt": "The Legends of Reed Miller, Thief Extraordinaire image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Legends_of_Reed_Miller,_Thief_Extraordinaire",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Nod-Krai",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-life-of-mouun-the-shrine-maiden",
    "slug": "book-the-life-of-mouun-the-shrine-maiden",
    "title": "The Life of Mouun the Shrine Maiden",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A poignant biographical chronicle commemorating Mouun, the beloved Watatsumi shrine maiden and whale-singer who sacrificed her life in the Archon War.",
    "body": [
      "The Life of Mouun the Shrine Maiden is a deeply emotional historical biography commemorating Mouun, one of Watatsumi Island's most revered ancestral heroes. Gifted with the mystical ability to communicate with the great whales of the deep sea, Mouun served as the high priestess alongside her sister Ayame.",
      "When Orobashi was forced into the tragic war on Yashiori Island, Mouun accompanied the troops, singing sea songs from the deck of her warship to calm the wounded and guide naval maneuvers through raging storms.",
      "In the climactic battle against the Shogunate fleet and the Tengu general Sasayuri, Mouun was overwhelmed and fell in battle, her soul dispersing into the ocean mist alongside the dying serpent god.",
      "Preserved in the sacred archives of Sangonomiya Shrine as a revered martyr of Watatsumi."
    ],
    "keywords": [
      "The Life of Mouun the Shrine Maiden",
      "Inazuma",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Life_of_Mouun_the_Shrine_Maiden"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--7882c48eba83.webp",
      "width": 480,
      "height": 480,
      "alt": "The Life of Mouun the Shrine Maiden image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Life_of_Mouun_the_Shrine_Maiden",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Inazuma",
      "author": "Watatsumi Shrine Archivist",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-little-witch-and-the-undying-fire",
    "slug": "book-the-little-witch-and-the-undying-fire",
    "title": "The Little Witch and the Undying Fire",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This seven-volume handwritten series is associated with the Little Witch’s Diary. Its changing voices and notes reflect a work assembled by more than one author.",
    "body": [
      "This seven-volume handwritten series is associated with the Little Witch’s Diary. Its changing voices and notes reflect a work assembled by more than one author.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Little Witch and the Undying Fire",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Alice (Vol. 1, Vol. 7 - partially) Barbeloth (Vol. 2) Rhinedottir (Vol. 3) I. Ivanovna N. (Vol. 4) Nicole (Vol. 5) Octavia (Vol. 6) Andersdotter (Vol. 7 - partially) {{Ref/CS|Durin|5}}"
    ],
    "gameSources": [
      "In-game book collection: 7 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Little_Witch_and_the_Undying_Fire"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--8e5a92e1319f.webp",
      "width": 480,
      "height": 480,
      "alt": "The Little Witch and the Undying Fire image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Little_Witch_and_the_Undying_Fire",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 7,
      "regionLore": "Unknown",
      "author": "Alice (Vol. 1, Vol. 7 - partially) Barbeloth (Vol. 2) Rhinedottir (Vol. 3) I. Ivanovna N. (Vol. 4) Nicole (Vol. 5) Octavia (Vol. 6) Andersdotter (Vol. 7 - partially) {{Ref/CS",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "qixing",
    "slug": "liyue-qixing",
    "title": "The Liyue Qixing",
    "region": "liyue",
    "category": "organizations-factions",
    "classification": "canon",
    "summary": "The Qixing are Liyue’s leading governing body, with members overseeing different parts of the harbor’s civic life.",
    "body": [
      "The Liyue Qixing are central to the nation’s human-led government. Their role becomes especially important when Morax withdraws from public rule.",
      "The main story introduces several members and their responsibilities. This entry keeps the group overview separate from any one member’s personal record."
    ],
    "keywords": [
      "Qixing",
      "Liyue Harbor",
      "Ningguang",
      "Keqing",
      "government"
    ],
    "gameSources": [
      "Archon Quest Chapter I"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Liyue Qixing",
      "url": "https://genshin-impact.fandom.com/wiki/Liyue_Qixing"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--liyue-qixing.webp",
      "alt": "The Liyue Qixing image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Liyue_Qixing",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 387
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "melusines",
    "slug": "melusines",
    "title": "The Melusines",
    "region": "fontaine",
    "category": "species-creatures",
    "classification": "canon",
    "summary": "Melusines are a people of Fontaine with a distinct history and community in Merusea Village.",
    "body": [
      "Melusines are encountered in Fontaine, especially around Merusea Village. Their story is connected to Elynas and the history of the Beryl Region.",
      "The game gives individual Melusines their own personalities, roles, and quests. They should be treated as a people, not as generic creatures."
    ],
    "keywords": [
      "Melusines",
      "Fontaine",
      "Elynas",
      "Merusea Village",
      "species"
    ],
    "gameSources": [
      "World Quest: Ancient Colors",
      "Fontaine exploration"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Melusine",
      "url": "https://genshin-impact.fandom.com/wiki/Melusine"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--melusines.webp",
      "alt": "The Melusines image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Melusine",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-mondstadt-tower",
    "slug": "book-the-mondstadt-tower",
    "title": "The Mondstadt Tower",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This romance is set in the era of Mondstadt’s old aristocracy. Read it as a fictional work preserved in the game, not as a stand-alone history source.",
    "body": [
      "This romance is set in the era of Mondstadt’s old aristocracy. Read it as a fictional work preserved in the game, not as a stand-alone history source.",
      "The source index places this book collection in Mondstadt. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Mondstadt Tower",
      "Mondstadt",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 1 volumes",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Mondstadt_Tower"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--944e4b26ee3c.webp",
      "width": 480,
      "height": 480,
      "alt": "The Mondstadt Tower image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Mondstadt_Tower",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 1,
      "regionLore": "Mondstadt",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "pale-princess",
    "slug": "pale-princess-six-pygmies",
    "title": "The Pale Princess and the Six Pygmies",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This seven-part fairy tale follows the Pale Princess through a moonlit land and its strange inhabitants. It is a story told inside Teyvat, so its events are not automatically a literal account of the world’s history.",
    "body": [
      "This seven-part fairy tale follows the Pale Princess through a moonlit land and its strange inhabitants. It is a story told inside Teyvat, so its events are not automatically a literal account of the world’s history.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Pale Princess and the Six Pygmies",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 7 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Pale_Princess_and_the_Six_Pygmies"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--catalog--b2cb0c13f066.webp",
      "width": 480,
      "height": 480,
      "alt": "The Pale Princess and the Six Pygmies image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Pale_Princess_and_the_Six_Pygmies",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 7,
      "regionLore": "Unknown",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-saga-of-hamavaran",
    "slug": "book-the-saga-of-hamavaran",
    "title": "The Saga of Hamavaran",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This volume collects the introductory pieces of an Inazuman light novel. It is a work of fiction published within the game world.",
    "body": [
      "This volume collects the introductory pieces of an Inazuman light novel. It is a work of fiction published within the game world.",
      "The source index places this book collection in Inazuma. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Saga of Hamavaran",
      "Inazuma",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Pursina"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Saga_of_Hamavaran"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--070e80ecc30d.webp",
      "width": 480,
      "height": 480,
      "alt": "The Saga of Hamavaran image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Saga_of_Hamavaran",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Inazuma",
      "author": "Pursina",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-serpent-and-drakes-of-tokoyokoku",
    "slug": "book-the-serpent-and-drakes-of-tokoyokoku",
    "title": "The Serpent and Drakes of Tokoyokoku",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "An ancient subterranean myth from Byakuyakoku detailing the primeval war between the Bathysmal Vishaps and the giant white serpent Orobashi.",
    "body": [
      "The Serpent and Drakes of Tokoyokoku is an archaic mythological account from Enkanomiya describing how the giant serpent god Orobashi first encountered the subterranean civilization trapped in eternal darkness.",
      "The chronicle details the brutal war between Orobashi and the primordial Bathysmal Vishaps—the dragon drakes who had hunted humans for centuries. Wielding coral branches grown from his own divine flesh, Orobashi shattered the vishap strongholds, driving them into the subterranean depths and creating a sanctuary of peace for the people.",
      "The text provides critical evolutionary lore on the Bathysmal Vishaps, explaining their adaptation to light and darkness.",
      "Recovered during the world quests in Enkanomiya."
    ],
    "keywords": [
      "The Serpent and Drakes of Tokoyokoku",
      "Inazuma",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Serpent_and_Drakes_of_Tokoyokoku"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--12d673854a19.webp",
      "width": 480,
      "height": 480,
      "alt": "The Serpent and Drakes of Tokoyokoku image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Serpent_and_Drakes_of_Tokoyokoku",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Inazuma",
      "author": "Enkanomiyan Scribe",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "the-seven",
    "slug": "the-seven",
    "title": "The Seven and the Archons",
    "region": "teyvat-unknown",
    "category": "gods-divinity",
    "classification": "canon",
    "summary": "The Seven are the gods associated with Teyvat’s seven nations and their elemental authorities.",
    "body": [
      "The Archon system is central to the nations’ histories. Each Archon is linked to an element and a nation, though the story shows that titles, authority, and personal identity can change.",
      "The Seven is a useful starting point for comparing regional histories, but it does not explain every divine being or power in Teyvat."
    ],
    "keywords": [
      "Archons",
      "seven nations",
      "elements",
      "Celestia",
      "divinity"
    ],
    "gameSources": [
      "Prologue and Archon Quests across the nations"
    ],
    "source": {
      "label": "Genshin Impact Wiki — The Seven",
      "url": "https://genshin-impact.fandom.com/wiki/The_Seven"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-shepherd-and-the-magic-bottle",
    "slug": "book-the-shepherd-and-the-magic-bottle",
    "title": "The Shepherd and the Magic Bottle",
    "region": "sumeru",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A delightful desert fairy tale following an honest shepherd who discovers a brass bottle containing an ancient, cantankerous Jinni with three wishes.",
    "body": [
      "The Shepherd and the Magic Bottle is a charming Sumeru desert fable that combines Arabian Nights-style storytelling with genuine in-world Jinni lore. The story follows a humble young shepherd who unearths an ancient sealed bottle from a sandstone crevice, releasing a proud, tempestuous Jinni.",
      "Rather than granting riches and palaces, the Jinni tests the shepherd's wisdom with riddles and moral dilemmas, ultimately rewarding his honesty with a perennial water spring that transforms his arid pasture into a flourishing green oasis.",
      "The fable reflects the desert culture's reverence for water and teaches that true fortune lies in humility, wisdom, and respect for ancient spirits.",
      "Sold at bookstores in Sumeru City and recited by mothers in Aaru Village."
    ],
    "keywords": [
      "The Shepherd and the Magic Bottle",
      "Sumeru",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Sumeru"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Shepherd_and_the_Magic_Bottle"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--9c84072adb63.webp",
      "width": 480,
      "height": 480,
      "alt": "The Shepherd and the Magic Bottle image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Shepherd_and_the_Magic_Bottle",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Sumeru",
      "author": "Sumeru Folklorist",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "skyfrost-nail",
    "slug": "skyfrost-nail",
    "title": "The Skyfrost Nail",
    "region": "mondstadt",
    "category": "relics-equipment",
    "classification": "canon",
    "summary": "The Skyfrost Nail is a huge object found above Dragonspine, surrounded by the ruins of an ancient settlement.",
    "body": [
      "The Skyfrost Nail is tied to Dragonspine’s exploration story and the ancient city beneath the mountain. Its presence is one of the region’s most striking pieces of environmental lore.",
      "The game reveals clues through exploration, quests, and the Frostbearing Tree. Explanations that go beyond those sources should be marked as interpretation."
    ],
    "keywords": [
      "Dragonspine",
      "Skyfrost Nail",
      "ancient city",
      "Celestia",
      "ruins"
    ],
    "gameSources": [
      "Dragonspine exploration",
      "In-game records and quest text"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Skyfrost Nail",
      "url": "https://genshin-impact.fandom.com/wiki/Skyfrost_Nail"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--skyfrost-nail.webp",
      "alt": "The Skyfrost Nail image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Skyfrost_Nail",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "akademiya",
    "slug": "sumeru-akademiya",
    "title": "The Sumeru Akademiya",
    "region": "sumeru",
    "category": "organizations-factions",
    "classification": "canon",
    "summary": "The Akademiya is Sumeru’s major scholarly institution and a powerful part of the nation’s government.",
    "body": [
      "The Akademiya’s influence over knowledge and public life is a major theme in Sumeru’s Archon Quest. Its scholars and Darshans appear across the region.",
      "The quest also shows that scholarship can be used to help people or control them. That is a story theme, not a claim about every scholar."
    ],
    "keywords": [
      "Akademiya",
      "Sumeru",
      "Darshan",
      "knowledge",
      "Nahida"
    ],
    "gameSources": [
      "Archon Quest Chapter III"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Sumeru Akademiya",
      "url": "https://genshin-impact.fandom.com/wiki/Sumeru_Akademiya"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--sumeru-akademiya.webp",
      "alt": "The Sumeru Akademiya image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Sumeru_Akademiya",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 618
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-tale-of-kuntur",
    "slug": "book-the-tale-of-kuntur",
    "title": "The Tale of Kuntur",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A heroic Natlan legend recounting the epic journey of Kuntur, a warrior who chased an Abyssal shadow across burning volcanic peaks to reclaim his tribe's stolen sacred flame.",
    "body": [
      "The Tale of Kuntur is an adrenaline-fueled heroic legend originating from the Flower-Feather Clan of Natlan. It chronicles the epic journey of Kuntur, a master archer and Qucusaur rider whose tribe's ancestral flame was extinguished by an Abyssal incursion.",
      "Soaring across volcanic vents and navigating treacherous ash clouds, Kuntur battles dark phantoms, forging an unbreakable alliance with wild Saurians and recovering the sacred flame to reignite his tribe's hearth.",
      "The story embodies Natlan's core warrior philosophy: that courage in the face of insurmountable darkness is the highest virtue a warrior can offer.",
      "Recorded on bark tablets and preserved in tribal storytelling circles."
    ],
    "keywords": [
      "The Tale of Kuntur",
      "Natlan",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|vol1      = Kuntur's Pursuit"
    ],
    "gameSources": [
      "In-game book collection: 1 volumes",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Tale_of_Kuntur"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--b9f0daa9ecff.webp",
      "width": 480,
      "height": 480,
      "alt": "The Tale of Kuntur image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Tale_of_Kuntur",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 1,
      "regionLore": "Natlan",
      "author": "Natlan Oral Scribe",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-tale-of-qoyllor-and-ukuku",
    "slug": "book-the-tale-of-qoyllor-and-ukuku",
    "title": "The Tale of Qoyllor and Ukuku",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Natlan oral tale has no known original author, so the archive preserves it as a community story rather than assigning authorship.",
    "body": [
      "This Natlan oral tale has no known original author, so the archive preserves it as a community story rather than assigning authorship.",
      "The source index places this book collection in Natlan. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Tale of Qoyllor and Ukuku",
      "Natlan",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|vol1      = {{Quest|To Wish Upon a Star}}"
    ],
    "gameSources": [
      "In-game book collection: 1 volumes",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Tale_of_Qoyllor_and_Ukuku"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--b9f0daa9ecff.webp",
      "width": 480,
      "height": 480,
      "alt": "The Tale of Qoyllor and Ukuku image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Tale_of_Qoyllor_and_Ukuku",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 1,
      "regionLore": "Natlan",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-tale-of-shiruyeh-and-shirin",
    "slug": "book-the-tale-of-shiruyeh-and-shirin",
    "title": "The Tale of Shiruyeh and Shirin",
    "region": "sumeru",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This two-part desert story follows a shepherd and a jinni through a tale whose surviving versions are strange and hard to verify.",
    "body": [
      "This two-part desert story follows a shepherd and a jinni through a tale whose surviving versions are strange and hard to verify.",
      "The source index places this book collection in Sumeru. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Tale of Shiruyeh and Shirin",
      "Sumeru",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 2 volumes",
      "Reference location: Sumeru"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Tale_of_Shiruyeh_and_Shirin"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--99baf15268b3.webp",
      "width": 480,
      "height": 480,
      "alt": "The Tale of Shiruyeh and Shirin image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Tale_of_Shiruyeh_and_Shirin",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 2,
      "regionLore": "Sumeru",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "three-moons",
    "slug": "three-moons",
    "title": "The Three Moons",
    "region": "teyvat-unknown",
    "category": "hidden-lore",
    "classification": "canon",
    "summary": "The Three Moons are a major subject of Teyvat’s ancient stories and the current Song of the Welkin Moon Archon Quest. Older books preserve poetic versions of their past; newer quest events add direct developments, so a folktale should not be treated as a complete record.",
    "body": [
      "The Three Moons are a major subject of Teyvat’s ancient stories and the current Song of the Welkin Moon Archon Quest. Older books preserve poetic versions of their past; newer quest events add direct developments, so a folktale should not be treated as a complete record.",
      "This note separates events shown in quests from older books and oral traditions that may use symbolic or incomplete language.",
      "Use the source links and in-game references to follow the evidence. Open questions are not presented as confirmed explanations."
    ],
    "keywords": [
      "Three Moons",
      "Nod-Krai",
      "Frostmoon Scions",
      "moon",
      "history",
      "current Archon Quest",
      "Song of the Welkin Moon",
      "Teyvat lore"
    ],
    "gameSources": [
      "Archon Quest: Song of the Welkin Moon",
      "Nod-Krai in-game records"
    ],
    "source": {
      "label": "Genshin Impact Wiki · updated lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Three_Moons"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--three-moons.webp",
      "alt": "The Three Moons image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Nod-Krai",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 640,
      "height": 360
    },
    "extraSources": [
      {
        "label": "HoYoverse · Return of the Three Moons",
        "url": "https://genshin.hoyoverse.com/en/news/detail/162259"
      }
    ],
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-two-musketeers",
    "slug": "book-the-two-musketeers",
    "title": "The Two Musketeers",
    "region": "fontaine",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-part Fontaine serial follows a story of conspiracy, revenge, and justice, presented as popular fiction.",
    "body": [
      "This three-part Fontaine serial follows a story of conspiracy, revenge, and justice, presented as popular fiction.",
      "The source index places this book collection in Fontaine. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Two Musketeers",
      "Fontaine",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Baptiste"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Fontaine"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Two_Musketeers"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--e28c12880878.webp",
      "width": 480,
      "height": 480,
      "alt": "The Two Musketeers image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Two_Musketeers",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Fontaine",
      "author": "Baptiste",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-the-volcano-lord-and-the-shadow-pins",
    "slug": "book-the-volcano-lord-and-the-shadow-pins",
    "title": "The Volcano Lord and the Shadow Pins",
    "region": "natlan",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This Natlan children’s legend tells of the hero Traore and is associated with the Nanatzcayan.",
    "body": [
      "This Natlan children’s legend tells of the hero Traore and is associated with the Nanatzcayan.",
      "The source index places this book collection in Natlan. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "The Volcano Lord and the Shadow Pins",
      "Natlan",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|vol1      = Close to Pacal at the \"Children of Echoes\""
    ],
    "gameSources": [
      "In-game book collection: 1 volumes",
      "Reference location: Natlan"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/The_Volcano_Lord_and_the_Shadow_Pins"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--573c53044d93.webp",
      "width": 480,
      "height": 480,
      "alt": "The Volcano Lord and the Shadow Pins image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/The_Volcano_Lord_and_the_Shadow_Pins",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 1,
      "regionLore": "Natlan",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-thick-notebook",
    "slug": "book-thick-notebook",
    "title": "Thick Notebook",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A densely packed field journal filled with sketches, weather charts, and elemental measurements taken along the cliffs of Cape Oath and the Falcon Coast.",
    "body": [
      "Thick Notebook is an exhaustive ecological field diary compiled by an observant Mondstadt researcher who spent years studying the coastal wind currents between Cape Oath, Musk Reef, and the Falcon Coast.",
      "The journal contains meticulous sketches of wandering Anemo Slimes, seasonal migration charts of migratory falcons, and temperature readings comparing sea air with the mountain drafts of Dragonspine.",
      "It also contains speculative notes regarding the mysterious spatial warp portal suspended in the sky above Cape Oath leading to the Spiral Abyss, warning travelers not to touch the anomaly without high elemental mastery.",
      "Found in the archives of the Knights of Favonius Library."
    ],
    "keywords": [
      "Thick Notebook",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Thick_Notebook"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--c56297782471.webp",
      "width": 480,
      "height": 480,
      "alt": "Thick Notebook image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Thick_Notebook",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Mondstadt Field Naturalist",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-time-trekker",
    "slug": "book-time-trekker",
    "title": "Time Trekker",
    "region": "fontaine",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This three-volume Steambird science-fiction story follows an engineer’s journey using a time machine.",
    "body": [
      "This three-volume Steambird science-fiction story follows an engineer’s journey using a time machine.",
      "The source index places this book collection in Fontaine. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Time Trekker",
      "Fontaine",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "|vol1      = Sold by Hubel"
    ],
    "gameSources": [
      "In-game book collection: 3 volumes",
      "Reference location: Fontaine"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Time_Trekker"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--e248125e02c7.webp",
      "width": 480,
      "height": 480,
      "alt": "Time Trekker image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Time_Trekker",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 3,
      "regionLore": "Fontaine",
      "author": "Traditional / In-Game Archive",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-toki-alley-tales",
    "slug": "book-toki-alley-tales",
    "title": "Toki Alley Tales",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "These six Inazuman tales draw on stories about tanuki and the islands’ past. Their playful framing makes them folklore, not a literal timeline.",
    "body": [
      "These six Inazuman tales draw on stories about tanuki and the islands’ past. Their playful framing makes them folklore, not a literal timeline.",
      "The source index places this book collection in Inazuma. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Toki Alley Tales",
      "Inazuma",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature",
      "Takizawa Kyouden"
    ],
    "gameSources": [
      "In-game book collection: 6 volumes",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Toki_Alley_Tales"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--dc434d0f9450.webp",
      "width": 480,
      "height": 480,
      "alt": "Toki Alley Tales image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Toki_Alley_Tales",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 6,
      "regionLore": "Inazuma",
      "author": "Takizawa Kyouden",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-treasured-tales-of-the-chouken-shinkageuchi",
    "slug": "book-treasured-tales-of-the-chouken-shinkageuchi",
    "title": "Treasured Tales of the Chouken Shinkageuchi",
    "region": "inazuma",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A prestigious martial-arts historical chronicle analyzing the legendary sword duel between the Raiden Shogun and the ancient masters of the Shinkage-uchi sword school.",
    "body": [
      "Treasured Tales of the Chouken Shinkageuchi is a revered martial history text from Inazuma documenting the legendary duel where the founder of the Shinkage-uchi sword school was granted permission to cross blades with the Raiden Shogun's shadow warrior.",
      "The text provides deep technical analysis of the Musou no Hitotachi—the supreme, divine sword art of Raiden Ei—contrasting its overwhelming, reality-cleaving power with mortal techniques that emphasize fluid footwork and counter-attacks.",
      "Cherished by samurai across the Tenryou Commission and studied by martial artists seeking enlightenment through the blade.",
      "Available at Wanwen Bookhouse through international import."
    ],
    "keywords": [
      "Treasured Tales of the Chouken Shinkageuchi",
      "Inazuma",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 1 volumes",
      "Reference location: Inazuma"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Treasured_Tales_of_the_Chouken_Shinkageuchi"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--b82417bcfc70.webp",
      "width": 480,
      "height": 480,
      "alt": "Treasured Tales of the Chouken Shinkageuchi image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Treasured_Tales_of_the_Chouken_Shinkageuchi",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 1,
      "regionLore": "Inazuma",
      "author": "Inazuma Swordmaster Chronicler",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-truth-amongst-the-pages-of-purana",
    "slug": "lore-truth-amongst-the-pages-of-purana",
    "title": "Truth Amongst the Pages of Purana",
    "region": "sumeru",
    "category": "quest-chronicles",
    "classification": "canon",
    "summary": "Truth Amongst the Pages of Purana is an Archon Quest in Song of the Welkin Moon: Act X. The story returns to Sumeru, where the Traveler joins Nahida and allies in events involving Irminsul and the Ley Lines.",
    "body": [
      "Truth Amongst the Pages of Purana is an Archon Quest in Song of the Welkin Moon: Act X. The story returns to Sumeru, where the Traveler joins Nahida and allies in events involving Irminsul and the Ley Lines.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Truth Amongst the Pages of Purana",
      "Sumeru",
      "Genshin Impact lore",
      "quest chronicles",
      "Archon Quest, Song of the Welkin Moon: Act X",
      "Truth Amongst the Pages of Purana quest",
      "Irminsul and the Ley Lines"
    ],
    "gameSources": [
      "Archon Quest, Song of the Welkin Moon: Act X",
      "Truth Amongst the Pages of Purana quest",
      "Irminsul and the Ley Lines"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Truth_Amongst_the_Pages_of_Purana"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--bf40bdbe938c.webp",
      "width": 480,
      "height": 240,
      "alt": "Truth Amongst the Pages of Purana image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Truth_Amongst_the_Pages_of_Purana",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-tsurumi-island",
    "slug": "lore-tsurumi-island",
    "title": "Tsurumi Island",
    "region": "inazuma",
    "category": "geography-locations",
    "classification": "canon",
    "summary": "Tsurumi Island is an Inazuman island surrounded by dense fog in its story quests. The Ruu quest chain reveals the recurring ritual and the people caught in its history.",
    "body": [
      "Tsurumi Island is an Inazuman island surrounded by dense fog in its story quests. The Ruu quest chain reveals the recurring ritual and the people caught in its history.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Tsurumi Island",
      "Inazuma",
      "Genshin Impact lore",
      "geography locations",
      "Through the Mists",
      "A Particularly Particular Author",
      "Tsurumi Island murals"
    ],
    "gameSources": [
      "Through the Mists",
      "A Particularly Particular Author",
      "Tsurumi Island murals"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Tsurumi_Island"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--fd36a9e4ba69.webp",
      "width": 480,
      "height": 270,
      "alt": "Tsurumi Island image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Tsurumi_Island",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "venti",
    "slug": "venti-barbatos",
    "title": "Venti and Barbatos",
    "region": "mondstadt",
    "category": "character-records",
    "classification": "canon",
    "summary": "Venti is the bard form of Barbatos, the Anemo Archon who presides over Mondstadt.",
    "body": [
      "Venti presents himself as a wandering bard. The story identifies him as Barbatos, the Anemo Archon worshipped in Mondstadt.",
      "His approach to ruling is unusual among the Archons: he values the people’s freedom and does not directly govern the nation day to day."
    ],
    "keywords": [
      "Venti",
      "Barbatos",
      "Anemo",
      "Archon",
      "freedom",
      "Mondstadt"
    ],
    "gameSources": [
      "Archon Quest Prologue",
      "Venti Story Quest: Carmen Dei Chapter"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Venti",
      "url": "https://genshin-impact.fandom.com/wiki/Venti"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--venti-barbatos.webp",
      "alt": "Venti and Barbatos image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Venti",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 360,
      "height": 640
    },
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-veras-melancholy",
    "slug": "book-veras-melancholy",
    "title": "Vera's Melancholy",
    "region": "teyvat-unknown",
    "category": "books-literature",
    "classification": "canon",
    "summary": "This twelve-volume science-fiction series follows Vera, a girl whose curiosity about distant worlds leads her into a larger adventure.",
    "body": [
      "This twelve-volume science-fiction series follows Vera, a girl whose curiosity about distant worlds leads her into a larger adventure.",
      "The source index places this book collection in Teyvat & Unknown. The book’s presence and catalog details are in-game facts; any story inside it should be compared with quests and other records before being read as literal history.",
      "This page is a short original catalog note. It does not reproduce the book’s full text, and the source link leads to the reference page used to check its title and details."
    ],
    "keywords": [
      "Vera's Melancholy",
      "Teyvat & Unknown",
      "Genshin Impact book",
      "Book collection",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game book collection: 12 volumes",
      "Reference location: Teyvat & Unknown"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Vera%27s_Melancholy"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--13b8800681a6.webp",
      "width": 480,
      "height": 480,
      "alt": "Vera's Melancholy image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Vera%27s_Melancholy",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Book collection",
      "volumeCount": 12,
      "regionLore": "None",
      "author": "",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-verses-of-equilibrium",
    "slug": "book-verses-of-equilibrium",
    "title": "Verses of Equilibrium",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A profound philosophical and elemental treatise expounding upon the harmony of Yin and Yang, Geo resonance, and the balanced flow of terrestrial Qi across Liyue.",
    "body": [
      "Verses of Equilibrium is a profound philosophical classic authored by ancient Liyue scholars steeped in Adeptal teachings. The book expounds upon the cosmic balance of elemental Qi, explaining how the unyielding solid nature of Geo must harmonize with the flowing life-force of Hydro and Dendro to sustain agriculture and mortal vitality.",
      "The treatise explains the geological principles behind Liyue's Ley Line stability, showing how the stone pillars erected by Rex Lapis during the Archon War continue to anchor the continent's energy grid thousands of years later.",
      "Studied by feng shui masters, herbalists at Bubu Pharmacy, and senior officials in the Ministry of Civil Affairs.",
      "Available in the classical literature section of Wanwen Bookhouse."
    ],
    "keywords": [
      "Verses of Equilibrium",
      "Liyue",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Verses_of_Equilibrium"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--18fc562c60f4.webp",
      "width": 480,
      "height": 480,
      "alt": "Verses of Equilibrium image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Verses_of_Equilibrium",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Liyue",
      "author": "Liyue Adeptal Scholar",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-vishap",
    "slug": "lore-vishap",
    "title": "Vishap",
    "region": "teyvat-unknown",
    "category": "species-creatures",
    "classification": "canon",
    "summary": "Vishaps are elemental creatures tied to the ancient beings of Teyvat. Enkanomiya’s research and quests distinguish Bathysmal Vishaps from the broader lore about elemental life.",
    "body": [
      "Vishaps are elemental creatures tied to the ancient beings of Teyvat. Enkanomiya’s research and quests distinguish Bathysmal Vishaps from the broader lore about elemental life.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Vishap",
      "Teyvat & Unknown",
      "Genshin Impact lore",
      "species creatures",
      "From Dusk to Dawn in Byakuyakoku",
      "Enkanomiya research",
      "Bathysmal Vishaps"
    ],
    "gameSources": [
      "From Dusk to Dawn in Byakuyakoku",
      "Enkanomiya research",
      "Bathysmal Vishaps"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Vishap"
    },
    "image": {
      "path": "github-images-02/images--lore--catalog--df91697fadb7.webp",
      "width": 480,
      "height": 480,
      "alt": "Vishap image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Vishap",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-wind-courage-and-wings-book",
    "slug": "book-wind-courage-and-wings-book",
    "title": "Wind, Courage, and Wings (Book)",
    "region": "mondstadt",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A poetic, deeply inspirational Mondstadt fable about the first little bird that learned to trust the invisible embrace of the wind and take flight.",
    "body": [
      "Wind, Courage, and Wings is an iconic, beloved children's fable from Mondstadt that encapsulates the entire spiritual philosophy of the City of Freedom. The story follows a tiny fledgeling bird standing trembling at the edge of a colossal cliff, terrified of the yawning drop below.",
      "Through the gentle whispering encouragement of the Wind God Barbatos, the little bird realizes that the wind is not an empty void, but an invisible sea of love that will lift anyone who possesses the courage to spread their wings and leap.",
      "The fable serves as the philosophical foundation for all wind gliding in Mondstadt, teaching every traveler that freedom requires trust, bravery, and the willingness to take risks.",
      "Read to children across Mondstadt and quoted during gliding exams."
    ],
    "keywords": [
      "Wind, Courage, and Wings (Book)",
      "Mondstadt",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Mondstadt"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Wind,_Courage,_and_Wings_(Book)"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--685ac709dee4.webp",
      "width": 480,
      "height": 480,
      "alt": "Wind, Courage, and Wings (Book) image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Wind,_Courage,_and_Wings_(Book)",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Mondstadt",
      "author": "Mondstadt Fable Author",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "teyvat-script",
    "slug": "teyvat-script",
    "title": "Written Signs Across Teyvat",
    "region": "teyvat-unknown",
    "category": "languages-scripts",
    "classification": "interpretation",
    "summary": "The game uses recurring fictional lettering on signs and objects. Some symbols can be mapped to Latin letters, but context matters.",
    "body": [
      "Players can find stylized writing across signs, books, and environmental objects. Community decoding compares some symbols with the Latin alphabet.",
      "Treat individual readings as interpretation unless the game itself translates the text. The script is visible in-game; that alone does not establish a complete spoken language system."
    ],
    "keywords": [
      "script",
      "language",
      "alphabet",
      "inscriptions",
      "interpretation"
    ],
    "gameSources": [
      "In-game signs and environmental inscriptions"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Languages",
      "url": "https://genshin-impact.fandom.com/wiki/Languages"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "lore-yaksha",
    "slug": "lore-yaksha",
    "title": "Yaksha",
    "region": "liyue",
    "category": "species-creatures",
    "classification": "canon",
    "summary": "The yaksha were adepti who fought the lingering threats left by the Archon War. Their duty brought them into contact with corruption and karmic debt, and many did not survive it.",
    "body": [
      "The yaksha were adepti who fought the lingering threats left by the Archon War. Their duty brought them into contact with corruption and karmic debt, and many did not survive it.",
      "This record is based on named quests, character stories, books, and item descriptions in Genshin Impact. Where the game leaves a detail uncertain, this summary keeps that uncertainty visible rather than filling it with a fan explanation.",
      "For the complete context, follow the linked source and the in-game references listed with this record."
    ],
    "keywords": [
      "Yaksha",
      "Liyue",
      "Genshin Impact lore",
      "species creatures",
      "Yakshas: The Guardian Adepti",
      "Perilous Trail",
      "Xiao: Character Story"
    ],
    "gameSources": [
      "Yakshas: The Guardian Adepti",
      "Perilous Trail",
      "Xiao: Character Story"
    ],
    "source": {
      "label": "Genshin Impact Wiki · lore reference",
      "url": "https://genshin-impact.fandom.com/wiki/Yaksha"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--570742ab5a82.webp",
      "width": 480,
      "height": 270,
      "alt": "Yaksha image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Yaksha",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "book-yakshas-the-guardian-adepti",
    "slug": "book-yakshas-the-guardian-adepti",
    "title": "Yakshas: The Guardian Adepti",
    "region": "liyue",
    "category": "books-literature",
    "classification": "canon",
    "summary": "A solemn, tragic chronicle commemorating the Five Foremost Yakshas appointed by Morax to purge demonic miasma after the Archon War, and their heartbreaking fall.",
    "body": [
      "Yakshas: The Guardian Adepti is a solemn, deeply moving historical chronicle documenting the five supreme Yaksha guardians chosen by Rex Lapis millennia ago to defend Liyue: Bosacius (Electro), Indarias (Pyro), Bonanus (Hydro), Menogias (Geo), and Alatus (Xiao, Anemo).",
      "The chronicle recounts how, following the deaths of hundreds of ancient gods during the Archon War, the decaying corpses of the fallen deities released black demonic miasma, plagues, and monsters across Liyue. To purge the evil, the Yakshas fought relentlessly in the dark shadows.",
      "However, the endless slaughter incurred staggering 'karmic debt'—a spiritual madness that slowly consumed the Yakshas. Three succumbed to madness and turned against one another; one fell to darkness in The Chasm; and only Alatus (Xiao, the Conqueror of Demons) survived, continuing his solitary, agonizing vigil into the present day.",
      "Preserved in Wanwen Bookhouse and revered by the Millelith as their ultimate spiritual inspiration."
    ],
    "keywords": [
      "Yakshas: The Guardian Adepti",
      "Liyue",
      "Genshin Impact book",
      "Written record",
      "lore",
      "Teyvat literature"
    ],
    "gameSources": [
      "In-game written record",
      "Reference location: Liyue"
    ],
    "source": {
      "label": "Genshin Impact Wiki · book record",
      "url": "https://genshin-impact.fandom.com/wiki/Yakshas:_The_Guardian_Adepti"
    },
    "image": {
      "path": "github-images-01/images--lore--catalog--7f72fb423537.webp",
      "width": 480,
      "height": 480,
      "alt": "Yakshas: The Guardian Adepti image from the Genshin Impact Wiki",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Yakshas:_The_Guardian_Adepti",
      "credit": "Genshin Impact Wiki / HoYoverse"
    },
    "bookDetails": {
      "recordType": "Written record",
      "volumeCount": null,
      "regionLore": "Liyue",
      "author": "Liyue Historical Chronicler",
      "indexedOn": "2026-11-18"
    },
    "addedOn": "2026-11-18",
    "updatedOn": "2026-11-18"
  },
  {
    "id": "zhongli",
    "slug": "zhongli-morax",
    "title": "Zhongli and Morax",
    "region": "liyue",
    "category": "character-records",
    "classification": "canon",
    "summary": "Zhongli is the mortal identity used by Morax, the Geo Archon known in Liyue as Rex Lapis.",
    "body": [
      "Zhongli works as a consultant at Wangsheng Funeral Parlor. The story reveals that he is Morax, the Geo Archon who helped establish Liyue’s traditions and contracts.",
      "His decision to step away from direct rule is central to Chapter I and to Liyue’s transition toward human governance."
    ],
    "keywords": [
      "Zhongli",
      "Morax",
      "Rex Lapis",
      "Geo",
      "contracts",
      "Liyue"
    ],
    "gameSources": [
      "Archon Quest Chapter I",
      "Zhongli Story Quest: Historia Antiqua Chapter"
    ],
    "source": {
      "label": "Genshin Impact Wiki — Zhongli",
      "url": "https://genshin-impact.fandom.com/wiki/Zhongli"
    },
    "addedOn": "2026-11-18",
    "image": {
      "path": "github-images-02/images--lore--records--zhongli-morax.webp",
      "alt": "Zhongli and Morax image related to Genshin Impact lore",
      "sourceUrl": "https://genshin-impact.fandom.com/wiki/Zhongli",
      "credit": "Genshin Impact Wiki / HoYoverse",
      "width": 360,
      "height": 640
    },
    "updatedOn": "2026-11-18"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { site, regions, categories, entries };
}
if (typeof window !== "undefined") {
  window.COREGG_LORE_DATA = { site, regions, categories, entries };
}
