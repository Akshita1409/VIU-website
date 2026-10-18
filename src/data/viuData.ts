import { ViuShow, Channel, Comment, DramaClip } from '../types/viu';

export const CHANNELS: Record<string, Channel> = {
  "tvn": {
    "id": "c-tvn",
    "name": "tvN Drama Official",
    "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "subscribers": "5.4M subscribers",
    "verified": true,
    "description": "The home of blockbuster K-Dramas like Lovely Runner, Queen of Tears, Crash Landing on You and Goblin."
  },
  "sbs": {
    "id": "c-sbs",
    "name": "SBS Drama & Entertainment",
    "avatar": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=120&auto=format&fit=crop&q=80",
    "subscribers": "6.2M subscribers",
    "verified": true,
    "description": "SBS brings you Running Man, Taxi Driver, The Penthouse, and hit Korean variety shows."
  },
  "jtbc": {
    "id": "c-jtbc",
    "name": "JTBC Voyage",
    "avatar": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=120&auto=format&fit=crop&q=80",
    "subscribers": "4.8M subscribers",
    "verified": true,
    "description": "JTBC original dramas: Reborn Rich, Strong Woman, Doctor Cha, King the Land."
  },
  "viu_orig": {
    "id": "c-viu-orig",
    "name": "Viu Original Studio",
    "avatar": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=120&auto=format&fit=crop&q=80",
    "subscribers": "3.9M subscribers",
    "verified": true,
    "description": "Award-winning Asian premium storytelling produced exclusively by Viu across SE Asia."
  },
  "mbc": {
    "id": "c-mbc",
    "name": "MBC Entertainment World",
    "avatar": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80",
    "subscribers": "4.1M subscribers",
    "verified": true,
    "description": "Home of I Live Alone, Hangout with Yoo, and King of Mask Singer."
  },
  "ani_one": {
    "id": "c-anione",
    "name": "Ani-One Asia",
    "avatar": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=120&auto=format&fit=crop&q=80",
    "subscribers": "3.2M subscribers",
    "verified": true,
    "description": "Official Japanese anime simulcasts with multi-language subtitles."
  },
  "kbs": {
    "id": "c-kbs",
    "name": "KBS World TV",
    "avatar": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&auto=format&fit=crop&q=80",
    "subscribers": "5.9M subscribers",
    "verified": true,
    "description": "KBS World: 2 Days 1 Night, The Return of Superman, Music Bank."
  }
};

export const FILTER_CHIPS = [
  'All',
  'Korean Dramas',
  'K-Variety',
  'Viu Originals',
  'Simulcast',
  'Anime',
  'Romance',
  'Action & Thriller',
  'Free to Watch',
  'Top 10 Today',
  'Chinese Dramas',
  'Completed',
];

export const VIU_SHOWS: ViuShow[] = [
  {
    "id": "lovely-runner",
    "title": "Lovely Runner (\uc120\uc7ac \uc5c5\uace0 \ud280\uc5b4) | Ep 16 [Finale] The Eclipse of Destiny",
    "englishTitle": "Lovely Runner",
    "nativeTitle": "\uc120\uc7ac \uc5c5\uace0 \ud280\uc5b4",
    "category": "Korean Drama",
    "genre": [
      "Romance",
      "Time Travel",
      "Youth",
      "Fantasy"
    ],
    "channel": {
      "id": "c-tvn",
      "name": "tvN Drama Official",
      "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
      "subscribers": "5.4M subscribers",
      "verified": true,
      "description": "The home of blockbuster K-Dramas like Lovely Runner, Queen of Tears, Crash Landing on You and Goblin."
    },
    "currentEpisode": 16,
    "totalEpisodes": 16,
    "rating": 9.9,
    "views": "5.2M views",
    "publishedTime": "1 day ago",
    "isPremium": true,
    "isSimulcast": true,
    "badge": "\ud83d\udc51 TOP 1 IN SG",
    "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&auto=format&fit=crop&q=80",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "synopsis": "Im Sol is an ardent fan of Ryu Sun-jae, a top idol star who once gave her the will to live. When tragic news of Sun-jae's untimely death breaks her heart, Sol suddenly finds herself transported 15 years back into the past when they were both 19-year-old high school students! Determined to alter destiny and protect her favorite star, she embarks on an emotional journey across time.",
    "cast": [
      {
        "name": "Byeon Woo-seok",
        "role": "Ryu Sun-jae",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Kim Hye-yoon",
        "role": "Im Sol",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Song Geon-hee",
        "role": "Kim Tae-sung",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Lee Seung-hyub",
        "role": "Baek In-hyuk",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Yoon Jong-ho, Kim Tae-yeop",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "\u7b80\u4f53\u4e2d\u6587",
      "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"
    ],
    "likes": 194200,
    "tags": [
      "LovelyRunner",
      "ByeonWooSeok",
      "KimHyeYoon",
      "Kdrama",
      "Romance",
      "TimeSlip"
    ],
    "episodes": [
      {
        "id": "lovely-runner-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 Lovely Runner - Part 1",
        "duration": "61:41",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "lovely-runner-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 Lovely Runner - Part 2",
        "duration": "62:42",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "lovely-runner-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 Lovely Runner - Part 3",
        "duration": "63:43",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "lovely-runner-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 Lovely Runner - Part 4",
        "duration": "64:44",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "lovely-runner-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 Lovely Runner - Part 5",
        "duration": "65:45",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "lovely-runner-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 Lovely Runner - Part 6",
        "duration": "66:46",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "lovely-runner-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 Lovely Runner - Part 7",
        "duration": "67:47",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "lovely-runner-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 Lovely Runner - Part 8",
        "duration": "68:48",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "lovely-runner-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 Lovely Runner - Part 9",
        "duration": "69:49",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "lovely-runner-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 Lovely Runner - Part 10",
        "duration": "70:40",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "lovely-runner-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 Lovely Runner - Part 11",
        "duration": "71:41",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "lovely-runner-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 Lovely Runner - Part 12",
        "duration": "72:42",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "lovely-runner-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 Lovely Runner - Part 13",
        "duration": "73:43",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "lovely-runner-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 Lovely Runner - Part 14",
        "duration": "74:44",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "lovely-runner-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 Lovely Runner - Part 15",
        "duration": "60:45",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "lovely-runner-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 Lovely Runner - Part 16",
        "duration": "61:46",
        "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of Lovely Runner.",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "my-genie-secretary",
    "title": "My Genie Secretary | Ep 7 | Taking Care Of CHOONGJU JI-C",
    "englishTitle": "My Genie Secretary",
    "nativeTitle": "\uc9c0\ub2c8 \ube44\uc11c\ub2d8",
    "category": "Korean Drama",
    "genre": [
      "Romance",
      "Office Comedy",
      "Fantasy"
    ],
    "channel": {
      "id": "c-tvn",
      "name": "tvN Drama Official",
      "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
      "subscribers": "5.4M subscribers",
      "verified": true,
      "description": "The home of blockbuster K-Dramas like Lovely Runner, Queen of Tears, Crash Landing on You and Goblin."
    },
    "currentEpisode": 7,
    "totalEpisodes": 16,
    "rating": 9.6,
    "views": "2.1M views",
    "publishedTime": "3 hours ago",
    "isPremium": false,
    "isSimulcast": true,
    "badge": "NEW EPISODE",
    "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
    "bannerImage": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "synopsis": "An overworked junior secretary accidentally rubs a mysterious heirloom paperweight and awakens a high-powered wish-granting genie who insists on sorting out her office politics, quarterly targets, and tangled love life.",
    "cast": [
      {
        "name": "Kim Min-kyu",
        "role": "Genie Jin",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Park Eun-bin",
        "role": "Ha Ji-won",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Park Jin-seok",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"
    ],
    "likes": 89500,
    "tags": [
      "MyGenieSecretary",
      "RomCom",
      "Kdrama2026",
      "ViuExclusive"
    ],
    "episodes": [
      {
        "id": "my-genie-secretary-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 My Genie Secretary - Part 1",
        "duration": "61:41",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "my-genie-secretary-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 My Genie Secretary - Part 2",
        "duration": "62:42",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "my-genie-secretary-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 My Genie Secretary - Part 3",
        "duration": "63:43",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "my-genie-secretary-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 My Genie Secretary - Part 4",
        "duration": "64:44",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "my-genie-secretary-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 My Genie Secretary - Part 5",
        "duration": "65:45",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "my-genie-secretary-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 My Genie Secretary - Part 6",
        "duration": "66:46",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "my-genie-secretary-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 My Genie Secretary - Part 7",
        "duration": "67:47",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "my-genie-secretary-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 My Genie Secretary - Part 8",
        "duration": "68:48",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "my-genie-secretary-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 My Genie Secretary - Part 9",
        "duration": "69:49",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "my-genie-secretary-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 My Genie Secretary - Part 10",
        "duration": "70:40",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "my-genie-secretary-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 My Genie Secretary - Part 11",
        "duration": "71:41",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "my-genie-secretary-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 My Genie Secretary - Part 12",
        "duration": "72:42",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "my-genie-secretary-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 My Genie Secretary - Part 13",
        "duration": "73:43",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "my-genie-secretary-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 My Genie Secretary - Part 14",
        "duration": "74:44",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "my-genie-secretary-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 My Genie Secretary - Part 15",
        "duration": "60:45",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "my-genie-secretary-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 My Genie Secretary - Part 16",
        "duration": "61:46",
        "thumbnail": "https://prod-images.viu.com/3064466596/9a5c4f8f291b221258f7b8b5474f859fa7e85806?im=Resize,width=720",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of My Genie Secretary.",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "running-man-2026",
    "title": "Running Man (2026) | Ep 822 | Rip and Crush Cheorwon Part 2",
    "englishTitle": "Running Man (2026)",
    "nativeTitle": "\ub7f0\ub2dd\ub9e8",
    "category": "K-Variety",
    "genre": [
      "Variety",
      "Comedy",
      "Game Show",
      "Reality"
    ],
    "channel": {
      "id": "c-sbs",
      "name": "SBS Drama & Entertainment",
      "avatar": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=120&auto=format&fit=crop&q=80",
      "subscribers": "6.2M subscribers",
      "verified": true,
      "description": "SBS brings you Running Man, Taxi Driver, The Penthouse, and hit Korean variety shows."
    },
    "currentEpisode": 822,
    "totalEpisodes": 850,
    "rating": 9.8,
    "views": "3.8M views",
    "publishedTime": "18 hours ago",
    "isPremium": false,
    "isSimulcast": true,
    "badge": "SIMULCAST",
    "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
    "bannerImage": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "synopsis": "Korea's legendary variety squad Yoo Jae-suk, HaHa, Jee Seok-jin, Kim Jong-kook, and Song Ji-hyo head to Cheorwon for an explosive name tag elimination race with special guest stars from the latest hit dramas!",
    "cast": [
      {
        "name": "Yoo Jae-suk",
        "role": "Host",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Kim Jong-kook",
        "role": "Commander",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Song Ji-hyo",
        "role": "Ace",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Choi Bo-pil",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "\u7b80\u4f53\u4e2d\u6587",
      "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
      "Malay"
    ],
    "likes": 142300,
    "tags": [
      "RunningMan",
      "YooJaeSuk",
      "KimJongKook",
      "SBSVariety",
      "Kvariety"
    ],
    "episodes": [
      {
        "id": "running-man-2026-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 Running Man (2026) - Part 1",
        "duration": "61:41",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "running-man-2026-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 Running Man (2026) - Part 2",
        "duration": "62:42",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "running-man-2026-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 Running Man (2026) - Part 3",
        "duration": "63:43",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "running-man-2026-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 Running Man (2026) - Part 4",
        "duration": "64:44",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "running-man-2026-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 Running Man (2026) - Part 5",
        "duration": "65:45",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "running-man-2026-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 Running Man (2026) - Part 6",
        "duration": "66:46",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "running-man-2026-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 Running Man (2026) - Part 7",
        "duration": "67:47",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "running-man-2026-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 Running Man (2026) - Part 8",
        "duration": "68:48",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "running-man-2026-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 Running Man (2026) - Part 9",
        "duration": "69:49",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "running-man-2026-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 Running Man (2026) - Part 10",
        "duration": "70:40",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "running-man-2026-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 Running Man (2026) - Part 11",
        "duration": "71:41",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "running-man-2026-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 Running Man (2026) - Part 12",
        "duration": "72:42",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "running-man-2026-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 Running Man (2026) - Part 13",
        "duration": "73:43",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "running-man-2026-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 Running Man (2026) - Part 14",
        "duration": "74:44",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "running-man-2026-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 Running Man (2026) - Part 15",
        "duration": "60:45",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "running-man-2026-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 Running Man (2026) - Part 16",
        "duration": "61:46",
        "thumbnail": "https://prod-images.viu.com/2405850442/d162a697fa65817b9565a5e0a6485f8a4806ee77?im=Resize,width=720",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of Running Man (2026).",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "hell-barrister",
    "title": "Hell Barrister | Ep 10 | Love and Obsession in the Courtroom",
    "englishTitle": "Hell Barrister",
    "nativeTitle": "\uc9c0\uc625\uc758 \ubcc0\ud638\uc0ac",
    "category": "Korean Drama",
    "genre": [
      "Legal Thriller",
      "Suspense",
      "Crime",
      "Mystery"
    ],
    "channel": {
      "id": "c-sbs",
      "name": "SBS Drama & Entertainment",
      "avatar": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=120&auto=format&fit=crop&q=80",
      "subscribers": "6.2M subscribers",
      "verified": true,
      "description": "SBS brings you Running Man, Taxi Driver, The Penthouse, and hit Korean variety shows."
    },
    "currentEpisode": 10,
    "totalEpisodes": 16,
    "rating": 9.7,
    "views": "1.8M views",
    "publishedTime": "5 hours ago",
    "isPremium": true,
    "isSimulcast": true,
    "badge": "\ud83d\udc51 PREMIUM",
    "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
    "bannerImage": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "synopsis": "A ruthless defense attorney who possesses supernatural insight to uncover hidden motives takes on high-stakes courtroom battles against corporate conglomerates and political titans.",
    "cast": [
      {
        "name": "Lee Je-hoon",
        "role": "Kang Do-jin",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Seo Ye-ji",
        "role": "Prosecutor Han",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Lee Myung-woo",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"
    ],
    "likes": 76400,
    "tags": [
      "HellBarrister",
      "CourtroomDrama",
      "LeeJeHoon",
      "Thriller"
    ],
    "episodes": [
      {
        "id": "hell-barrister-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 Hell Barrister - Part 1",
        "duration": "61:41",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "hell-barrister-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 Hell Barrister - Part 2",
        "duration": "62:42",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "hell-barrister-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 Hell Barrister - Part 3",
        "duration": "63:43",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "hell-barrister-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 Hell Barrister - Part 4",
        "duration": "64:44",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "hell-barrister-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 Hell Barrister - Part 5",
        "duration": "65:45",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "hell-barrister-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 Hell Barrister - Part 6",
        "duration": "66:46",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "hell-barrister-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 Hell Barrister - Part 7",
        "duration": "67:47",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "hell-barrister-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 Hell Barrister - Part 8",
        "duration": "68:48",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "hell-barrister-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 Hell Barrister - Part 9",
        "duration": "69:49",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "hell-barrister-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 Hell Barrister - Part 10",
        "duration": "70:40",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "hell-barrister-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 Hell Barrister - Part 11",
        "duration": "71:41",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "hell-barrister-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 Hell Barrister - Part 12",
        "duration": "72:42",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "hell-barrister-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 Hell Barrister - Part 13",
        "duration": "73:43",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "hell-barrister-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 Hell Barrister - Part 14",
        "duration": "74:44",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "hell-barrister-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 Hell Barrister - Part 15",
        "duration": "60:45",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "hell-barrister-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 Hell Barrister - Part 16",
        "duration": "61:46",
        "thumbnail": "https://prod-images.viu.com/1996398481/fd36bfad17233af57d14242cfdfc2e8138414509?im=Resize,width=720",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of Hell Barrister.",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "the-lament-of-autumn",
    "title": "The Lament of Autumn | Ep 11 | The Yu Army in Crisis",
    "englishTitle": "The Lament of Autumn",
    "nativeTitle": "\u79cb\u6c34\u957f\u6068",
    "category": "Chinese Drama",
    "genre": [
      "Historical",
      "Wuxia",
      "Romance",
      "Political Intrigue"
    ],
    "channel": {
      "id": "c-viu-orig",
      "name": "Viu Original Studio",
      "avatar": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=120&auto=format&fit=crop&q=80",
      "subscribers": "3.9M subscribers",
      "verified": true,
      "description": "Award-winning Asian premium storytelling produced exclusively by Viu across SE Asia."
    },
    "currentEpisode": 11,
    "totalEpisodes": 40,
    "rating": 9.5,
    "views": "2.6M views",
    "publishedTime": "1 day ago",
    "isPremium": false,
    "isSimulcast": true,
    "badge": "Cheng Lei!",
    "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
    "bannerImage": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "synopsis": "Set against the turbulent Southern dynasties, general Xiao Jinghe and warrior strategist Meng Ziqiu join forces to expose a shadow conspiracy within the royal court while their forbidden affection grows amidst warfare.",
    "cast": [
      {
        "name": "Cheng Lei",
        "role": "Xiao Jinghe",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Song Yi",
        "role": "Meng Ziqiu",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Zhu Ruibin",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "\u7b80\u4f53\u4e2d\u6587",
      "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"
    ],
    "likes": 118000,
    "tags": [
      "TheLamentOfAutumn",
      "ChengLei",
      "HistoricalDrama",
      "Cdrama"
    ],
    "episodes": [
      {
        "id": "the-lament-of-autumn-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 The Lament of Autumn - Part 1",
        "duration": "61:41",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "the-lament-of-autumn-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 The Lament of Autumn - Part 2",
        "duration": "62:42",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "the-lament-of-autumn-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 The Lament of Autumn - Part 3",
        "duration": "63:43",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "the-lament-of-autumn-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 The Lament of Autumn - Part 4",
        "duration": "64:44",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "the-lament-of-autumn-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 The Lament of Autumn - Part 5",
        "duration": "65:45",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "the-lament-of-autumn-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 The Lament of Autumn - Part 6",
        "duration": "66:46",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "the-lament-of-autumn-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 The Lament of Autumn - Part 7",
        "duration": "67:47",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "the-lament-of-autumn-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 The Lament of Autumn - Part 8",
        "duration": "68:48",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "the-lament-of-autumn-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 The Lament of Autumn - Part 9",
        "duration": "69:49",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "the-lament-of-autumn-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 The Lament of Autumn - Part 10",
        "duration": "70:40",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "the-lament-of-autumn-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 The Lament of Autumn - Part 11",
        "duration": "71:41",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "the-lament-of-autumn-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 The Lament of Autumn - Part 12",
        "duration": "72:42",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "the-lament-of-autumn-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 The Lament of Autumn - Part 13",
        "duration": "73:43",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "the-lament-of-autumn-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 The Lament of Autumn - Part 14",
        "duration": "74:44",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "the-lament-of-autumn-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 The Lament of Autumn - Part 15",
        "duration": "60:45",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "the-lament-of-autumn-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 The Lament of Autumn - Part 16",
        "duration": "61:46",
        "thumbnail": "https://prod-images.viu.com/2664477713/4eb3e54ed4d3009158339d0d3e1e86ffc6be4ae1?im=Resize,width=720",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of The Lament of Autumn.",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "i-live-alone-2026",
    "title": "I Live Alone (2026) | Ep 669 | The Joy of Doing What You Love",
    "englishTitle": "I Live Alone (2026)",
    "nativeTitle": "\ub098 \ud63c\uc790 \uc0b0\ub2e4",
    "category": "K-Variety",
    "genre": [
      "Variety",
      "Lifestyle",
      "Reality",
      "Comedy"
    ],
    "channel": {
      "id": "c-mbc",
      "name": "MBC Entertainment World",
      "avatar": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80",
      "subscribers": "4.1M subscribers",
      "verified": true,
      "description": "Home of I Live Alone, Hangout with Yoo, and King of Mask Singer."
    },
    "currentEpisode": 669,
    "totalEpisodes": 700,
    "rating": 9.8,
    "views": "1.9M views",
    "publishedTime": "12 hours ago",
    "isPremium": false,
    "isSimulcast": true,
    "badge": "NEW EPISODE",
    "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
    "bannerImage": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "synopsis": "Step inside the daily sanctuaries of Korea's beloved stars living independently. From culinary experiments and unexpected hobbies to candid heart-to-heart reflections with the Rainbow Club.",
    "cast": [
      {
        "name": "Jun Hyun-moo",
        "role": "Rainbow President",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Park Na-rae",
        "role": "Member",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Kian84",
        "role": "Artist Member",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Heo Hang",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587"
    ],
    "likes": 82300,
    "tags": [
      "ILiveAlone",
      "RainbowClub",
      "Kian84",
      "JunHyunMoo",
      "MBC"
    ],
    "episodes": [
      {
        "id": "i-live-alone-2026-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 I Live Alone (2026) - Part 1",
        "duration": "61:41",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "i-live-alone-2026-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 I Live Alone (2026) - Part 2",
        "duration": "62:42",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "i-live-alone-2026-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 I Live Alone (2026) - Part 3",
        "duration": "63:43",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "i-live-alone-2026-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 I Live Alone (2026) - Part 4",
        "duration": "64:44",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "i-live-alone-2026-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 I Live Alone (2026) - Part 5",
        "duration": "65:45",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "i-live-alone-2026-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 I Live Alone (2026) - Part 6",
        "duration": "66:46",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "i-live-alone-2026-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 I Live Alone (2026) - Part 7",
        "duration": "67:47",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "i-live-alone-2026-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 I Live Alone (2026) - Part 8",
        "duration": "68:48",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "i-live-alone-2026-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 I Live Alone (2026) - Part 9",
        "duration": "69:49",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "i-live-alone-2026-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 I Live Alone (2026) - Part 10",
        "duration": "70:40",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "i-live-alone-2026-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 I Live Alone (2026) - Part 11",
        "duration": "71:41",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "i-live-alone-2026-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 I Live Alone (2026) - Part 12",
        "duration": "72:42",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "i-live-alone-2026-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 I Live Alone (2026) - Part 13",
        "duration": "73:43",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "i-live-alone-2026-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 I Live Alone (2026) - Part 14",
        "duration": "74:44",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "i-live-alone-2026-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 I Live Alone (2026) - Part 15",
        "duration": "60:45",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "i-live-alone-2026-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 I Live Alone (2026) - Part 16",
        "duration": "61:46",
        "thumbnail": "https://prod-images.viu.com/4094628559/4cb5f13ccd494d5df4b9e134bc5c2ebae67dcbba?im=Resize,width=720",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of I Live Alone (2026).",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "live-forever",
    "title": "Live Forever | Ep 20 | The Black Wedding Dress",
    "englishTitle": "Live Forever",
    "nativeTitle": "\u957f\u751f",
    "category": "Chinese Drama",
    "genre": [
      "Fantasy",
      "Romance",
      "Reincarnation"
    ],
    "channel": {
      "id": "c-viu-orig",
      "name": "Viu Original Studio",
      "avatar": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=120&auto=format&fit=crop&q=80",
      "subscribers": "3.9M subscribers",
      "verified": true,
      "description": "Award-winning Asian premium storytelling produced exclusively by Viu across SE Asia."
    },
    "currentEpisode": 20,
    "totalEpisodes": 32,
    "rating": 9.6,
    "views": "1.7M views",
    "publishedTime": "2 days ago",
    "isPremium": true,
    "isSimulcast": false,
    "badge": "\ud83d\udc51 PREMIUM",
    "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
    "bannerImage": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "synopsis": "Trapped in an immortal form for three thousand years, a reclusive swordmaster re-encounters his fated mortal companion in modern Shanghai, leading to an exhilarating clash between ancient clans and modern laws.",
    "cast": [
      {
        "name": "Luo Yunxi",
        "role": "Li Changsheng",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Bai Lu",
        "role": "Su Qianyu",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Chu Yui-bun",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"
    ],
    "likes": 95100,
    "tags": [
      "LiveForever",
      "Xianxia",
      "Romance",
      "ViuExclusive"
    ],
    "episodes": [
      {
        "id": "live-forever-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 Live Forever - Part 1",
        "duration": "61:41",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "live-forever-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 Live Forever - Part 2",
        "duration": "62:42",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "live-forever-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 Live Forever - Part 3",
        "duration": "63:43",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "live-forever-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 Live Forever - Part 4",
        "duration": "64:44",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "live-forever-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 Live Forever - Part 5",
        "duration": "65:45",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "live-forever-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 Live Forever - Part 6",
        "duration": "66:46",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "live-forever-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 Live Forever - Part 7",
        "duration": "67:47",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "live-forever-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 Live Forever - Part 8",
        "duration": "68:48",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "live-forever-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 Live Forever - Part 9",
        "duration": "69:49",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "live-forever-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 Live Forever - Part 10",
        "duration": "70:40",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "live-forever-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 Live Forever - Part 11",
        "duration": "71:41",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "live-forever-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 Live Forever - Part 12",
        "duration": "72:42",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "live-forever-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 Live Forever - Part 13",
        "duration": "73:43",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "live-forever-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 Live Forever - Part 14",
        "duration": "74:44",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "live-forever-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 Live Forever - Part 15",
        "duration": "60:45",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "live-forever-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 Live Forever - Part 16",
        "duration": "61:46",
        "thumbnail": "https://prod-images.viu.com/2042349464/1724dfcc58a85291c4a45496b3dc226fa97e2619?im=Resize,width=720",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of Live Forever.",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "taxi-driver-2",
    "title": "Taxi Driver 2 (\ubaa8\ubc94\ud0dd\uc2dc 2) | Rainbow Deluxe Taxi Revenge",
    "englishTitle": "Taxi Driver Season 2",
    "nativeTitle": "\ubaa8\ubc94\ud0dd\uc2dc 2",
    "category": "Korean Drama",
    "genre": [
      "Action",
      "Revenge",
      "Crime Thriller"
    ],
    "channel": {
      "id": "c-sbs",
      "name": "SBS Drama & Entertainment",
      "avatar": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=120&auto=format&fit=crop&q=80",
      "subscribers": "6.2M subscribers",
      "verified": true,
      "description": "SBS brings you Running Man, Taxi Driver, The Penthouse, and hit Korean variety shows."
    },
    "currentEpisode": 16,
    "totalEpisodes": 16,
    "rating": 9.9,
    "views": "6.4M views",
    "publishedTime": "3 days ago",
    "isPremium": true,
    "isSimulcast": false,
    "badge": "ALL EPS OUT",
    "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&auto=format&fit=crop&q=80",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "synopsis": "The mysterious Rainbow Taxi Company is back! When the law fails victims of grievous crimes, driver Kim Do-gi and his technical genius crew execute ruthless undercover vengeance missions on behalf of the helpless.",
    "cast": [
      {
        "name": "Lee Je-hoon",
        "role": "Kim Do-gi",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Kim Eui-sung",
        "role": "Jang Sung-chul",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Pyo Ye-jin",
        "role": "Ahn Go-eun",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Lee Dan",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "\u7b80\u4f53\u4e2d\u6587",
      "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
      "Malay"
    ],
    "likes": 284000,
    "tags": [
      "TaxiDriver2",
      "LeeJeHoon",
      "Action",
      "ViuHit"
    ],
    "episodes": [
      {
        "id": "taxi-driver-2-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 Taxi Driver Season 2 - Part 1",
        "duration": "61:41",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "taxi-driver-2-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 Taxi Driver Season 2 - Part 2",
        "duration": "62:42",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "taxi-driver-2-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 Taxi Driver Season 2 - Part 3",
        "duration": "63:43",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "taxi-driver-2-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 Taxi Driver Season 2 - Part 4",
        "duration": "64:44",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "taxi-driver-2-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 Taxi Driver Season 2 - Part 5",
        "duration": "65:45",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "taxi-driver-2-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 Taxi Driver Season 2 - Part 6",
        "duration": "66:46",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "taxi-driver-2-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 Taxi Driver Season 2 - Part 7",
        "duration": "67:47",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "taxi-driver-2-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 Taxi Driver Season 2 - Part 8",
        "duration": "68:48",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "taxi-driver-2-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 Taxi Driver Season 2 - Part 9",
        "duration": "69:49",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "taxi-driver-2-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 Taxi Driver Season 2 - Part 10",
        "duration": "70:40",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "taxi-driver-2-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 Taxi Driver Season 2 - Part 11",
        "duration": "71:41",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "taxi-driver-2-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 Taxi Driver Season 2 - Part 12",
        "duration": "72:42",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "taxi-driver-2-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 Taxi Driver Season 2 - Part 13",
        "duration": "73:43",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "taxi-driver-2-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 Taxi Driver Season 2 - Part 14",
        "duration": "74:44",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "taxi-driver-2-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 Taxi Driver Season 2 - Part 15",
        "duration": "60:45",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "taxi-driver-2-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 Taxi Driver Season 2 - Part 16",
        "duration": "61:46",
        "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of Taxi Driver Season 2.",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "kidnap-game",
    "title": "kiDnap GAME | Ep 3 | Only One Will Survive",
    "englishTitle": "kiDnap GAME",
    "nativeTitle": "\ub0a9\uce58 \uac8c\uc784",
    "category": "Viu Original",
    "genre": [
      "Psychological Thriller",
      "Crime",
      "Suspense"
    ],
    "channel": {
      "id": "c-viu-orig",
      "name": "Viu Original Studio",
      "avatar": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=120&auto=format&fit=crop&q=80",
      "subscribers": "3.9M subscribers",
      "verified": true,
      "description": "Award-winning Asian premium storytelling produced exclusively by Viu across SE Asia."
    },
    "currentEpisode": 3,
    "totalEpisodes": 12,
    "rating": 9.4,
    "views": "1.3M views",
    "publishedTime": "6 hours ago",
    "isPremium": true,
    "isSimulcast": true,
    "badge": "\ud83d\udc51 VIU ORIGINAL",
    "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
    "bannerImage": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "synopsis": "A brilliant advertising mastermind and the rebellious daughter of his rival stage a fake kidnapping for vengeance and 30 billion won ransom, only for real ruthless syndicates to intercept the drop.",
    "cast": [
      {
        "name": "Julian Cheung",
        "role": "Vincent Chan",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Janice Man",
        "role": "Chloe",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Law Wing-cheung",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"
    ],
    "likes": 68200,
    "tags": [
      "kiDnapGAME",
      "ViuOriginal",
      "CrimeThriller",
      "OriginalSeries"
    ],
    "episodes": [
      {
        "id": "kidnap-game-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 kiDnap GAME - Part 1",
        "duration": "61:41",
        "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of kiDnap GAME.",
        "releaseDate": "12 days ago",
        "views": "4.3M views"
      },
      {
        "id": "kidnap-game-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 kiDnap GAME - Part 2",
        "duration": "62:42",
        "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of kiDnap GAME.",
        "releaseDate": "11 days ago",
        "views": "4.5M views"
      },
      {
        "id": "kidnap-game-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 kiDnap GAME - Part 3",
        "duration": "63:43",
        "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of kiDnap GAME.",
        "releaseDate": "10 days ago",
        "views": "4.7M views"
      },
      {
        "id": "kidnap-game-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 kiDnap GAME - Part 4",
        "duration": "64:44",
        "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of kiDnap GAME.",
        "releaseDate": "9 days ago",
        "views": "4.9M views"
      },
      {
        "id": "kidnap-game-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 kiDnap GAME - Part 5",
        "duration": "65:45",
        "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of kiDnap GAME.",
        "releaseDate": "8 days ago",
        "views": "3.2M views"
      },
      {
        "id": "kidnap-game-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 kiDnap GAME - Part 6",
        "duration": "66:46",
        "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of kiDnap GAME.",
        "releaseDate": "7 days ago",
        "views": "3.4M views"
      },
      {
        "id": "kidnap-game-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 kiDnap GAME - Part 7",
        "duration": "67:47",
        "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of kiDnap GAME.",
        "releaseDate": "6 days ago",
        "views": "3.6M views"
      },
      {
        "id": "kidnap-game-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 kiDnap GAME - Part 8",
        "duration": "68:48",
        "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of kiDnap GAME.",
        "releaseDate": "5 days ago",
        "views": "3.8M views"
      },
      {
        "id": "kidnap-game-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 kiDnap GAME - Part 9",
        "duration": "69:49",
        "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of kiDnap GAME.",
        "releaseDate": "4 days ago",
        "views": "3.1M views"
      },
      {
        "id": "kidnap-game-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 kiDnap GAME - Part 10",
        "duration": "70:40",
        "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of kiDnap GAME.",
        "releaseDate": "3 days ago",
        "views": "2.3M views"
      },
      {
        "id": "kidnap-game-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 kiDnap GAME - Part 11",
        "duration": "71:41",
        "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of kiDnap GAME.",
        "releaseDate": "2 days ago",
        "views": "2.5M views"
      },
      {
        "id": "kidnap-game-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 kiDnap GAME - Part 12",
        "duration": "72:42",
        "thumbnail": "https://prod-images.viu.com/24489407/ae4eddd82d4c8eb25205b01421c27c1ba6d04a83?im=Resize,width=720",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of kiDnap GAME.",
        "releaseDate": "1 days ago",
        "views": "2.7M views"
      }
    ]
  },
  {
    "id": "broken-cela",
    "title": "Broken (Cela) | Ep 12 | A Price to Pay [Season Finale]",
    "englishTitle": "Broken (Cela)",
    "nativeTitle": "Cela",
    "category": "Viu Original",
    "genre": [
      "Drama",
      "Family",
      "Mystery"
    ],
    "channel": {
      "id": "c-viu-orig",
      "name": "Viu Original Studio",
      "avatar": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=120&auto=format&fit=crop&q=80",
      "subscribers": "3.9M subscribers",
      "verified": true,
      "description": "Award-winning Asian premium storytelling produced exclusively by Viu across SE Asia."
    },
    "currentEpisode": 12,
    "totalEpisodes": 12,
    "rating": 9.5,
    "views": "1.5M views",
    "publishedTime": "1 day ago",
    "isPremium": false,
    "isSimulcast": false,
    "badge": "FINALE",
    "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
    "bannerImage": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "synopsis": "A devastating high-society scandal unravels dark generational secrets across three prominent dynasties in Jakarta and Singapore.",
    "cast": [
      {
        "name": "Reza Rahadian",
        "role": "Adrian",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Maudy Ayunda",
        "role": "Mira",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Kimo Stamboel",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "Malay"
    ],
    "likes": 72900,
    "tags": [
      "BrokenCela",
      "ViuOriginal",
      "IndonesianSeries",
      "FamilyDrama"
    ],
    "episodes": [
      {
        "id": "broken-cela-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 Broken (Cela) - Part 1",
        "duration": "61:41",
        "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of Broken (Cela).",
        "releaseDate": "12 days ago",
        "views": "4.3M views"
      },
      {
        "id": "broken-cela-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 Broken (Cela) - Part 2",
        "duration": "62:42",
        "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of Broken (Cela).",
        "releaseDate": "11 days ago",
        "views": "4.5M views"
      },
      {
        "id": "broken-cela-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 Broken (Cela) - Part 3",
        "duration": "63:43",
        "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of Broken (Cela).",
        "releaseDate": "10 days ago",
        "views": "4.7M views"
      },
      {
        "id": "broken-cela-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 Broken (Cela) - Part 4",
        "duration": "64:44",
        "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of Broken (Cela).",
        "releaseDate": "9 days ago",
        "views": "4.9M views"
      },
      {
        "id": "broken-cela-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 Broken (Cela) - Part 5",
        "duration": "65:45",
        "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of Broken (Cela).",
        "releaseDate": "8 days ago",
        "views": "3.2M views"
      },
      {
        "id": "broken-cela-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 Broken (Cela) - Part 6",
        "duration": "66:46",
        "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of Broken (Cela).",
        "releaseDate": "7 days ago",
        "views": "3.4M views"
      },
      {
        "id": "broken-cela-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 Broken (Cela) - Part 7",
        "duration": "67:47",
        "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of Broken (Cela).",
        "releaseDate": "6 days ago",
        "views": "3.6M views"
      },
      {
        "id": "broken-cela-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 Broken (Cela) - Part 8",
        "duration": "68:48",
        "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of Broken (Cela).",
        "releaseDate": "5 days ago",
        "views": "3.8M views"
      },
      {
        "id": "broken-cela-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 Broken (Cela) - Part 9",
        "duration": "69:49",
        "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of Broken (Cela).",
        "releaseDate": "4 days ago",
        "views": "3.1M views"
      },
      {
        "id": "broken-cela-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 Broken (Cela) - Part 10",
        "duration": "70:40",
        "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of Broken (Cela).",
        "releaseDate": "3 days ago",
        "views": "2.3M views"
      },
      {
        "id": "broken-cela-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 Broken (Cela) - Part 11",
        "duration": "71:41",
        "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of Broken (Cela).",
        "releaseDate": "2 days ago",
        "views": "2.5M views"
      },
      {
        "id": "broken-cela-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 Broken (Cela) - Part 12",
        "duration": "72:42",
        "thumbnail": "https://prod-images.viu.com/48066524/548d3dfcbb3411ec3281241ea885d14a652abaad?im=Resize,width=720",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of Broken (Cela).",
        "releaseDate": "1 days ago",
        "views": "2.7M views"
      }
    ]
  },
  {
    "id": "2-days-1-night-s4",
    "title": "2 Days 1 Night (Season 4) (2026) | Ep 344 | 100th Day Special",
    "englishTitle": "2 Days 1 Night Season 4",
    "nativeTitle": "1\ubc15 2\uc77c \uc2dc\uc98c4",
    "category": "K-Variety",
    "genre": [
      "Variety",
      "Travel",
      "Comedy",
      "Friendship"
    ],
    "channel": {
      "id": "c-kbs",
      "name": "KBS World TV",
      "avatar": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&auto=format&fit=crop&q=80",
      "subscribers": "5.9M subscribers",
      "verified": true,
      "description": "KBS World: 2 Days 1 Night, The Return of Superman, Music Bank."
    },
    "currentEpisode": 344,
    "totalEpisodes": 400,
    "rating": 9.7,
    "views": "2.4M views",
    "publishedTime": "1 day ago",
    "isPremium": false,
    "isSimulcast": true,
    "badge": "SIMULCAST",
    "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop&q=80",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "synopsis": "The real wild road variety show! Yeon Jung-hoon, Kim Jong-min, Moon Se-yoon, DinDin, and Na In-woo journey across scenic corners of South Korea, battling hilarious bokbulbok dinner and sleeping outdoors games!",
    "cast": [
      {
        "name": "Kim Jong-min",
        "role": "Original Member",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "DinDin",
        "role": "Member",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Lee Jeong-gyu",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "Malay"
    ],
    "likes": 105400,
    "tags": [
      "2Days1Night",
      "KBSWorld",
      "KimJongMin",
      "Kvariety"
    ],
    "episodes": [
      {
        "id": "2-days-1-night-s4-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 2 Days 1 Night Season 4 - Part 1",
        "duration": "61:41",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "2-days-1-night-s4-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 2 Days 1 Night Season 4 - Part 2",
        "duration": "62:42",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "2-days-1-night-s4-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 2 Days 1 Night Season 4 - Part 3",
        "duration": "63:43",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "2-days-1-night-s4-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 2 Days 1 Night Season 4 - Part 4",
        "duration": "64:44",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "2-days-1-night-s4-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 2 Days 1 Night Season 4 - Part 5",
        "duration": "65:45",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "2-days-1-night-s4-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 2 Days 1 Night Season 4 - Part 6",
        "duration": "66:46",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "2-days-1-night-s4-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 2 Days 1 Night Season 4 - Part 7",
        "duration": "67:47",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "2-days-1-night-s4-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 2 Days 1 Night Season 4 - Part 8",
        "duration": "68:48",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "2-days-1-night-s4-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 2 Days 1 Night Season 4 - Part 9",
        "duration": "69:49",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "2-days-1-night-s4-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 2 Days 1 Night Season 4 - Part 10",
        "duration": "70:40",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "2-days-1-night-s4-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 2 Days 1 Night Season 4 - Part 11",
        "duration": "71:41",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "2-days-1-night-s4-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 2 Days 1 Night Season 4 - Part 12",
        "duration": "72:42",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "2-days-1-night-s4-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 2 Days 1 Night Season 4 - Part 13",
        "duration": "73:43",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "2-days-1-night-s4-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 2 Days 1 Night Season 4 - Part 14",
        "duration": "74:44",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "2-days-1-night-s4-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 2 Days 1 Night Season 4 - Part 15",
        "duration": "60:45",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "2-days-1-night-s4-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 2 Days 1 Night Season 4 - Part 16",
        "duration": "61:46",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of 2 Days 1 Night Season 4.",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "jujutsu-kaisen-s2",
    "title": "Jujutsu Kaisen Season 2 | Shibuya Incident Arc [Uncut]",
    "englishTitle": "Jujutsu Kaisen Season 2",
    "nativeTitle": "\u546a\u8853\u5efb\u6226",
    "category": "Anime",
    "genre": [
      "Action",
      "Dark Fantasy",
      "Supernatural"
    ],
    "channel": {
      "id": "c-anione",
      "name": "Ani-One Asia",
      "avatar": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=120&auto=format&fit=crop&q=80",
      "subscribers": "3.2M subscribers",
      "verified": true,
      "description": "Official Japanese anime simulcasts with multi-language subtitles."
    },
    "currentEpisode": 23,
    "totalEpisodes": 23,
    "rating": 9.9,
    "views": "7.9M views",
    "publishedTime": "4 days ago",
    "isPremium": true,
    "isSimulcast": false,
    "badge": "\ud83d\udc51 4K ULTRA HD",
    "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&auto=format&fit=crop&q=80",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "synopsis": "Halloween night in Shibuya. A colossal veil descends upon the metropolis, trapping tens of thousands of civilians. Satoru Gojo descends alone into the depths of the underground station to face Pseudo-Geto and disaster curses.",
    "cast": [
      {
        "name": "Yuji Itadori",
        "role": "Protagonist",
        "avatar": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Satoru Gojo",
        "role": "Special Grade Sorcerer",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Shota Goshozono",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "\u7b80\u4f53\u4e2d\u6587",
      "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"
    ],
    "likes": 382000,
    "tags": [
      "JujutsuKaisen",
      "GojoSatoru",
      "Anime",
      "MAPPA",
      "AniOne"
    ],
    "episodes": [
      {
        "id": "jujutsu-kaisen-s2-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 Jujutsu Kaisen Season 2 - Part 1",
        "duration": "61:41",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 Jujutsu Kaisen Season 2 - Part 2",
        "duration": "62:42",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 Jujutsu Kaisen Season 2 - Part 3",
        "duration": "63:43",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 Jujutsu Kaisen Season 2 - Part 4",
        "duration": "64:44",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 Jujutsu Kaisen Season 2 - Part 5",
        "duration": "65:45",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 Jujutsu Kaisen Season 2 - Part 6",
        "duration": "66:46",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 Jujutsu Kaisen Season 2 - Part 7",
        "duration": "67:47",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 Jujutsu Kaisen Season 2 - Part 8",
        "duration": "68:48",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 Jujutsu Kaisen Season 2 - Part 9",
        "duration": "69:49",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 Jujutsu Kaisen Season 2 - Part 10",
        "duration": "70:40",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 Jujutsu Kaisen Season 2 - Part 11",
        "duration": "71:41",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 Jujutsu Kaisen Season 2 - Part 12",
        "duration": "72:42",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 Jujutsu Kaisen Season 2 - Part 13",
        "duration": "73:43",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 Jujutsu Kaisen Season 2 - Part 14",
        "duration": "74:44",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 Jujutsu Kaisen Season 2 - Part 15",
        "duration": "60:45",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "jujutsu-kaisen-s2-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 Jujutsu Kaisen Season 2 - Part 16",
        "duration": "61:46",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of Jujutsu Kaisen Season 2.",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "quite-the-girl",
    "title": "Quite the Girl | Ep 16 | The Truth Revealed",
    "englishTitle": "Quite the Girl",
    "nativeTitle": "\u975e\u51e1\u5c11\u5973",
    "category": "Chinese Drama",
    "genre": [
      "Modern Romance",
      "Workplace",
      "Youth"
    ],
    "channel": {
      "id": "c-viu-orig",
      "name": "Viu Original Studio",
      "avatar": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=120&auto=format&fit=crop&q=80",
      "subscribers": "3.9M subscribers",
      "verified": true,
      "description": "Award-winning Asian premium storytelling produced exclusively by Viu across SE Asia."
    },
    "currentEpisode": 16,
    "totalEpisodes": 24,
    "rating": 9.4,
    "views": "1.4M views",
    "publishedTime": "8 hours ago",
    "isPremium": false,
    "isSimulcast": true,
    "badge": "NEW on Viu!",
    "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
    "bannerImage": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "synopsis": "A witty, independent architecture graduate shakes up a prestigious design firm with her unconventional genius, challenging the perfectionist managing director to open his heart.",
    "cast": [
      {
        "name": "Zhao Lusi",
        "role": "Lin Yue",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Wu Lei",
        "role": "Shen Jun",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Lin Yufen",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587"
    ],
    "likes": 65100,
    "tags": [
      "QuiteTheGirl",
      "Cdrama",
      "Romance",
      "Youth"
    ],
    "episodes": [
      {
        "id": "quite-the-girl-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 Quite the Girl - Part 1",
        "duration": "61:41",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "quite-the-girl-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 Quite the Girl - Part 2",
        "duration": "62:42",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "quite-the-girl-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 Quite the Girl - Part 3",
        "duration": "63:43",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "quite-the-girl-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 Quite the Girl - Part 4",
        "duration": "64:44",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "quite-the-girl-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 Quite the Girl - Part 5",
        "duration": "65:45",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "quite-the-girl-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 Quite the Girl - Part 6",
        "duration": "66:46",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "quite-the-girl-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 Quite the Girl - Part 7",
        "duration": "67:47",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "quite-the-girl-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 Quite the Girl - Part 8",
        "duration": "68:48",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "quite-the-girl-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 Quite the Girl - Part 9",
        "duration": "69:49",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "quite-the-girl-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 Quite the Girl - Part 10",
        "duration": "70:40",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "quite-the-girl-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 Quite the Girl - Part 11",
        "duration": "71:41",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "quite-the-girl-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 Quite the Girl - Part 12",
        "duration": "72:42",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "quite-the-girl-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 Quite the Girl - Part 13",
        "duration": "73:43",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "quite-the-girl-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 Quite the Girl - Part 14",
        "duration": "74:44",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "quite-the-girl-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 Quite the Girl - Part 15",
        "duration": "60:45",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "quite-the-girl-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 Quite the Girl - Part 16",
        "duration": "61:46",
        "thumbnail": "https://prod-images.viu.com/3200078526/36d901dca05a108ed5a3cce370b1739c8c49b333?im=Resize,width=720",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of Quite the Girl.",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "love-on-the-menu",
    "title": "Love on the Menu | Ep 22 | No More Running",
    "englishTitle": "Love on the Menu",
    "nativeTitle": "\uc8fc\ubc29\uc758 \ub85c\ub9e8\uc2a4",
    "category": "Korean Drama",
    "genre": [
      "Romance",
      "Culinary",
      "Comedy"
    ],
    "channel": {
      "id": "c-jtbc",
      "name": "JTBC Voyage",
      "avatar": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=120&auto=format&fit=crop&q=80",
      "subscribers": "4.8M subscribers",
      "verified": true,
      "description": "JTBC original dramas: Reborn Rich, Strong Woman, Doctor Cha, King the Land."
    },
    "currentEpisode": 22,
    "totalEpisodes": 24,
    "rating": 9.5,
    "views": "1.9M views",
    "publishedTime": "1 day ago",
    "isPremium": false,
    "isSimulcast": true,
    "badge": "SIMULCAST",
    "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&auto=format&fit=crop&q=80",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "synopsis": "A Michelin-starred chef loses his sense of taste until he encounters an eccentric street food cart owner whose secret recipes awaken both his culinary passion and buried memories.",
    "cast": [
      {
        "name": "Jung Hae-in",
        "role": "Chef Kang",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Shin Hye-sun",
        "role": "Oh Dan-bi",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Ahn Gil-ho",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"
    ],
    "likes": 88400,
    "tags": [
      "LoveOnTheMenu",
      "JungHaeIn",
      "RomCom",
      "JTBC"
    ],
    "episodes": [
      {
        "id": "love-on-the-menu-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 Love on the Menu - Part 1",
        "duration": "61:41",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "love-on-the-menu-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 Love on the Menu - Part 2",
        "duration": "62:42",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "love-on-the-menu-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 Love on the Menu - Part 3",
        "duration": "63:43",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "love-on-the-menu-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 Love on the Menu - Part 4",
        "duration": "64:44",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "love-on-the-menu-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 Love on the Menu - Part 5",
        "duration": "65:45",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "love-on-the-menu-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 Love on the Menu - Part 6",
        "duration": "66:46",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "love-on-the-menu-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 Love on the Menu - Part 7",
        "duration": "67:47",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "love-on-the-menu-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 Love on the Menu - Part 8",
        "duration": "68:48",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "love-on-the-menu-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 Love on the Menu - Part 9",
        "duration": "69:49",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "love-on-the-menu-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 Love on the Menu - Part 10",
        "duration": "70:40",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "love-on-the-menu-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 Love on the Menu - Part 11",
        "duration": "71:41",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "love-on-the-menu-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 Love on the Menu - Part 12",
        "duration": "72:42",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "love-on-the-menu-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 Love on the Menu - Part 13",
        "duration": "73:43",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "love-on-the-menu-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 Love on the Menu - Part 14",
        "duration": "74:44",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "love-on-the-menu-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 Love on the Menu - Part 15",
        "duration": "60:45",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "love-on-the-menu-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 Love on the Menu - Part 16",
        "duration": "61:46",
        "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of Love on the Menu.",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "reborn-rich",
    "title": "Reborn Rich (\uc7ac\ubc8c\uc9d1 \ub9c9\ub0b4\uc544\ub4e4) | Soonyang Conglomerate Takeover",
    "englishTitle": "Reborn Rich",
    "nativeTitle": "\uc7ac\ubc8c\uc9d1 \ub9c9\ub0b4\uc544\ub4e4",
    "category": "Korean Drama",
    "genre": [
      "Revenge",
      "Fantasy",
      "Business",
      "Drama"
    ],
    "channel": {
      "id": "c-jtbc",
      "name": "JTBC Voyage",
      "avatar": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=120&auto=format&fit=crop&q=80",
      "subscribers": "4.8M subscribers",
      "verified": true,
      "description": "JTBC original dramas: Reborn Rich, Strong Woman, Doctor Cha, King the Land."
    },
    "currentEpisode": 16,
    "totalEpisodes": 16,
    "rating": 9.9,
    "views": "8.1M views",
    "publishedTime": "5 days ago",
    "isPremium": true,
    "isSimulcast": false,
    "badge": "\ud83d\udc51 ALL TIME BEST",
    "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "synopsis": "After being framed for embezzlement and murdered by the chaebol family he loyally served for decades, Yoon Hyun-woo is reincarnated into the 1980s as Jin Do-jun, the youngest grandson of the very dynasty that betrayed him.",
    "cast": [
      {
        "name": "Song Joong-ki",
        "role": "Jin Do-jun",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Lee Sung-min",
        "role": "Chairman Jin Yang-chul",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Shin Hyun-been",
        "role": "Prosecutor Seo Min-young",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Jeong Dae-yun",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "\u7b80\u4f53\u4e2d\u6587",
      "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
      "Malay"
    ],
    "likes": 420000,
    "tags": [
      "RebornRich",
      "SongJoongKi",
      "LeeSungMin",
      "JTBC",
      "ViuHit"
    ],
    "episodes": [
      {
        "id": "reborn-rich-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 Reborn Rich - Part 1",
        "duration": "61:41",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "reborn-rich-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 Reborn Rich - Part 2",
        "duration": "62:42",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "reborn-rich-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 Reborn Rich - Part 3",
        "duration": "63:43",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "reborn-rich-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 Reborn Rich - Part 4",
        "duration": "64:44",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "reborn-rich-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 Reborn Rich - Part 5",
        "duration": "65:45",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "reborn-rich-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 Reborn Rich - Part 6",
        "duration": "66:46",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "reborn-rich-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 Reborn Rich - Part 7",
        "duration": "67:47",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "reborn-rich-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 Reborn Rich - Part 8",
        "duration": "68:48",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "reborn-rich-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 Reborn Rich - Part 9",
        "duration": "69:49",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "reborn-rich-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 Reborn Rich - Part 10",
        "duration": "70:40",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "reborn-rich-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 Reborn Rich - Part 11",
        "duration": "71:41",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "reborn-rich-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 Reborn Rich - Part 12",
        "duration": "72:42",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "reborn-rich-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 Reborn Rich - Part 13",
        "duration": "73:43",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "reborn-rich-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 Reborn Rich - Part 14",
        "duration": "74:44",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "reborn-rich-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 Reborn Rich - Part 15",
        "duration": "60:45",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "reborn-rich-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 Reborn Rich - Part 16",
        "duration": "61:46",
        "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of Reborn Rich.",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  },
  {
    "id": "true-beauty",
    "title": "True Beauty (\uc5ec\uc2e0\uac15\ub9bc) | The High School Romance Classic",
    "englishTitle": "True Beauty",
    "nativeTitle": "\uc5ec\uc2e0\uac15\ub9bc",
    "category": "Korean Drama",
    "genre": [
      "Romance",
      "School",
      "Comedy",
      "Coming of Age"
    ],
    "channel": {
      "id": "c-tvn",
      "name": "tvN Drama Official",
      "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
      "subscribers": "5.4M subscribers",
      "verified": true,
      "description": "The home of blockbuster K-Dramas like Lovely Runner, Queen of Tears, Crash Landing on You and Goblin."
    },
    "currentEpisode": 16,
    "totalEpisodes": 16,
    "rating": 9.8,
    "views": "9.5M views",
    "publishedTime": "1 week ago",
    "isPremium": false,
    "isSimulcast": false,
    "badge": "FREE TO WATCH",
    "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&auto=format&fit=crop&q=80",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "synopsis": "Lim Ju-gyeong masters the transformative art of cosmetics to overcome insecurities and start anew at Saebom High School, drawing the affection of cold top student Lee Su-ho and bad-boy motorcycle rebel Han Seo-jun.",
    "cast": [
      {
        "name": "Moon Ga-young",
        "role": "Lim Ju-gyeong",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Cha Eun-woo",
        "role": "Lee Su-ho",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      },
      {
        "name": "Hwang In-youp",
        "role": "Han Seo-jun",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
      }
    ],
    "director": "Kim Sang-hyeop",
    "subtitles": [
      "English",
      "Bahasa Indonesia",
      "\u7e41\u9ad4\u4e2d\u6587",
      "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
      "Malay"
    ],
    "likes": 560000,
    "tags": [
      "TrueBeauty",
      "ChaEunWoo",
      "MoonGaYoung",
      "HwangInYoup",
      "Webtoon"
    ],
    "episodes": [
      {
        "id": "true-beauty-ep-1",
        "episodeNumber": 1,
        "title": "Episode 1 \u2022 True Beauty - Part 1",
        "duration": "61:41",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 1 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "16 days ago",
        "views": "4.3M views"
      },
      {
        "id": "true-beauty-ep-2",
        "episodeNumber": 2,
        "title": "Episode 2 \u2022 True Beauty - Part 2",
        "duration": "62:42",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 2 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "15 days ago",
        "views": "4.5M views"
      },
      {
        "id": "true-beauty-ep-3",
        "episodeNumber": 3,
        "title": "Episode 3 \u2022 True Beauty - Part 3",
        "duration": "63:43",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 3 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "14 days ago",
        "views": "4.7M views"
      },
      {
        "id": "true-beauty-ep-4",
        "episodeNumber": 4,
        "title": "Episode 4 \u2022 True Beauty - Part 4",
        "duration": "64:44",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 4 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "13 days ago",
        "views": "4.9M views"
      },
      {
        "id": "true-beauty-ep-5",
        "episodeNumber": 5,
        "title": "Episode 5 \u2022 True Beauty - Part 5",
        "duration": "65:45",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 5 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "12 days ago",
        "views": "3.2M views"
      },
      {
        "id": "true-beauty-ep-6",
        "episodeNumber": 6,
        "title": "Episode 6 \u2022 True Beauty - Part 6",
        "duration": "66:46",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 6 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "11 days ago",
        "views": "3.4M views"
      },
      {
        "id": "true-beauty-ep-7",
        "episodeNumber": 7,
        "title": "Episode 7 \u2022 True Beauty - Part 7",
        "duration": "67:47",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 7 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "10 days ago",
        "views": "3.6M views"
      },
      {
        "id": "true-beauty-ep-8",
        "episodeNumber": 8,
        "title": "Episode 8 \u2022 True Beauty - Part 8",
        "duration": "68:48",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 8 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "9 days ago",
        "views": "3.8M views"
      },
      {
        "id": "true-beauty-ep-9",
        "episodeNumber": 9,
        "title": "Episode 9 \u2022 True Beauty - Part 9",
        "duration": "69:49",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 9 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "8 days ago",
        "views": "3.1M views"
      },
      {
        "id": "true-beauty-ep-10",
        "episodeNumber": 10,
        "title": "Episode 10 \u2022 True Beauty - Part 10",
        "duration": "70:40",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 10 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "7 days ago",
        "views": "2.3M views"
      },
      {
        "id": "true-beauty-ep-11",
        "episodeNumber": 11,
        "title": "Episode 11 \u2022 True Beauty - Part 11",
        "duration": "71:41",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 11 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "6 days ago",
        "views": "2.5M views"
      },
      {
        "id": "true-beauty-ep-12",
        "episodeNumber": 12,
        "title": "Episode 12 \u2022 True Beauty - Part 12",
        "duration": "72:42",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 12 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "5 days ago",
        "views": "2.7M views"
      },
      {
        "id": "true-beauty-ep-13",
        "episodeNumber": 13,
        "title": "Episode 13 \u2022 True Beauty - Part 13",
        "duration": "73:43",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 13 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "4 days ago",
        "views": "2.9M views"
      },
      {
        "id": "true-beauty-ep-14",
        "episodeNumber": 14,
        "title": "Episode 14 \u2022 True Beauty - Part 14",
        "duration": "74:44",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 14 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "3 days ago",
        "views": "2.2M views"
      },
      {
        "id": "true-beauty-ep-15",
        "episodeNumber": 15,
        "title": "Episode 15 \u2022 True Beauty - Part 15",
        "duration": "60:45",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 15 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "2 days ago",
        "views": "1.4M views"
      },
      {
        "id": "true-beauty-ep-16",
        "episodeNumber": 16,
        "title": "Episode 16 \u2022 True Beauty - Part 16",
        "duration": "61:46",
        "thumbnail": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "synopsis": "Episode 16 plunges deeper into the mysteries and pivotal relationship moments of True Beauty.",
        "releaseDate": "1 days ago",
        "views": "1.6M views"
      }
    ]
  }
];

export const INITIAL_COMMENTS: Comment[] = [
  {
    "id": "c-1",
    "author": "KDramaLover_SG",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    "timestamp": "2 hours ago",
    "content": "I am literally screaming at the ending scene!! Byeon Woo-seok and Kim Hye-yoon have off-the-charts chemistry. The yellow umbrella scene is an instant classic \ud83d\ude2d\ud83d\udc9b",
    "likes": 1243,
    "isPinned": true,
    "userLiked": false
  },
  {
    "id": "c-2",
    "author": "Viu Official",
    "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "timestamp": "5 hours ago",
    "content": "\ud83d\udce2 Quick reminder to all Viu viewers: Episode 16 Full HD Uncut with English & Bahasa subtitles is now streaming! Tap Subscribe for episode notifications.",
    "likes": 3890,
    "isAuthor": true,
    "userLiked": true
  },
  {
    "id": "c-3",
    "author": "SeoulVibes99",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    "timestamp": "1 day ago",
    "content": "The soundtrack gives me chills every time. Eclipse OST needs to win Song of the Year! Who else has this on repeat all week?",
    "likes": 567,
    "userLiked": false
  },
  {
    "id": "c-4",
    "author": "Aishah_MY",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    "timestamp": "2 days ago",
    "content": "Viu\u2019s subtitle translation quality is always top-tier. Especially the cultural nuance puns in this episode! 10/10.",
    "likes": 289,
    "userLiked": false
  }
];

export const DRAMA_CLIPS: DramaClip[] = [
  {
    "id": "clip-1",
    "title": "Sun-jae runs in the rain with the yellow umbrella \u2602\ufe0f\ud83d\udc9b",
    "showTitle": "Lovely Runner",
    "views": "3.2M",
    "likes": "289K",
    "commentsCount": "4.1K",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80",
    "channel": "tvN Drama Official",
    "channelAvatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "soundTrack": "Eclipse - Sudden Shower (\uc18c\ub098\uae30)"
  },
  {
    "id": "clip-2",
    "title": "Kwang-soo and Jong-kook betrayal backfires terribly! \ud83e\udd23",
    "showTitle": "Running Man",
    "views": "5.8M",
    "likes": "512K",
    "commentsCount": "8.3K",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
    "channel": "SBS Drama & Entertainment",
    "channelAvatar": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=120&auto=format&fit=crop&q=80",
    "soundTrack": "Running Man Theme Brass Remix"
  },
  {
    "id": "clip-3",
    "title": "Kim Do-gi epic 1-vs-20 limousine alley brawl \ud83d\udd25",
    "showTitle": "Taxi Driver 2",
    "views": "4.4M",
    "likes": "430K",
    "commentsCount": "5.9K",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&auto=format&fit=crop&q=80",
    "channel": "SBS Drama & Entertainment",
    "channelAvatar": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=120&auto=format&fit=crop&q=80",
    "soundTrack": "Taxi Driver Dark Justice Beat"
  },
  {
    "id": "clip-4",
    "title": "Gojo domain expansion \"Infinite Void\" remastered 4K \u2728",
    "showTitle": "Jujutsu Kaisen",
    "views": "9.1M",
    "likes": "1.1M",
    "commentsCount": "14K",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    "channel": "Ani-One Asia",
    "channelAvatar": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=120&auto=format&fit=crop&q=80",
    "soundTrack": "Specialz - King Gnu"
  }
];
