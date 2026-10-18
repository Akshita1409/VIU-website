export interface Channel {
  id: string;
  name: string;
  avatar: string;
  subscribers: string;
  verified: boolean;
  banner?: string;
  description?: string;
}

export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  duration: string;
  thumbnail: string;
  synopsis: string;
  releaseDate: string;
  views: string;
}

export interface ViuShow {
  id: string;
  title: string;
  englishTitle?: string;
  nativeTitle?: string;
  category: 'Korean Drama' | 'K-Variety' | 'Viu Original' | 'Anime' | 'Chinese Drama' | 'Thai Drama' | 'Movie';
  genre: string[];
  channel: Channel;
  currentEpisode: number;
  totalEpisodes: number;
  rating: number;
  views: string;
  publishedTime: string;
  isPremium: boolean;
  isSimulcast?: boolean;
  badge?: string; // e.g. "NEW EP", "FINALE", "TOP 1", "EXCLUSIVE"
  thumbnail: string;
  bannerImage: string;
  videoUrl?: string; // sample video
  synopsis: string;
  cast: { name: string; role: string; avatar?: string }[];
  director: string;
  subtitles: string[];
  episodes: Episode[];
  likes: number;
  tags: string[];
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  timestamp: string;
  content: string;
  likes: number;
  isPinned?: boolean;
  isAuthor?: boolean;
  userLiked?: boolean;
}

export interface DramaClip {
  id: string;
  title: string;
  showTitle: string;
  views: string;
  likes: string;
  commentsCount: string;
  videoUrl: string;
  thumbnail: string;
  channel: string;
  channelAvatar: string;
  soundTrack: string;
}
