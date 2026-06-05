/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ==============================================================================
 *                   PORTFOLIO CUSTOMIZATION INSTRUCTIONS
 * ==============================================================================
 * Welcome! To customize this portfolio with your own videos, stats, reviews, and
 * brand channels, you only need to modify this file.
 * 
 * 1. VIDEOS (portfolioVideos):
 *    - Update the 'title', 'url', 'thumb', and filters ('type', 'platform', 'niche')
 *    - 'type' options:     'long' | 'short'
 *    - 'platform' options: 'youtube' | 'tiktok'
 *    - 'niche' options:    'documentary' | 'gaming'
 *    - Leave 'thumb' as "" to use the high-fidelity dynamic visual placeholders.
 * 
 * 2. PORTFOLIO METRICS (portfolioStats):
 *    - Edit values and labels to match your career achievements.
 * 
 * 3. LOGO TICKER (workedWithChannels):
 *    - Add names of channels you've edited for. You can easily swap out the text
 *      for real image src paths in the Hero component.
 * 
 * 4. REVIEW SCREENSHOTS (clientReviews):
 *    - Place your review screenshots inside a folder (e.g. '/assets/reviews/') 
 *      and set the 'screenshotUrl' file path here.
 *    - If 'screenshotUrl' is draft or empty, a stunning fallback graphic review card
 *      will show instead so the site looks premium from day one.
 * ==============================================================================
 */

import { VideoItem, StatItem, PartnerBrand, ReviewItem } from './types';

/**
 * Core Video Portfolio Dataset
 * To edit thumbnails or add real URLs, modify the entries below.
 */
export const portfolioVideos: VideoItem[] = [
  {
    id: 'vid-17',
    title: '20 Years of No-BS SaaS Sales Advice in 7 Minutes',
    type: 'long',
    platform: 'youtube',
    niche: 'business',
    url: 'https://streamable.com/e/1eiasq?loop=0',
    thumb: 'https://cdn-cf-east.streamable.com/image/upload-1eiasq-4ca749bae0aa1cdf37428169242607.jpg?Expires=1780368720&Signature=W7JBg7Od47lbmQ5RSzPePcU9J5YvNjxQiF6nfkzzB~nUaFVwp5q3muJdi9uQFOpha2O~VSYHfzYFgwTg9atGemYQnLaiIhirzOY2kbsSYuIzdGCPWI27iYzf6tEgY-aS8AtlJgEMGxPkVWIuflKtau90Y0J7wuoqdY0Nt2fHGVlWb7QPIBZCzNeJHt9kDx309WGdbGoYdQ-5ZqHPTYaFrVtdTfw62-lAHJfSPE5SH5iuCDL~wyKtcjO8yx-54Pcv9s5CU7Oqj6k1nP4LWH0krf9XMofSqLfB2u6loMb~5DJary-JpfwivbINF89LMCcY~AVUb5DBO0xm9O7kBstX8A__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ',
    views: '4.5M views',
    duration: '7:00'
  },
  {
    id: 'vid-24',
    title: "In 8 Minutes, You'll Understand Building The Best Product",
    type: 'long',
    platform: 'youtube',
    niche: 'business',
    url: 'https://streamable.com/e/mm6br5?loop=0',
    thumb: 'https://cdn-cf-east.streamable.com/image/upload-mm6br5-59770f4fc168923e72da1ecb1810f0.jpg?Expires=1780368720&Signature=RtBNgK~Uk9-MyXLyajmO3OM-y1W9ztKTPzNNyUM2u4Xf2I9pmhaqBYiCvXopCctw~KVYRkQB7bM5TniscrJCGIEqbCTXbMqi7Iyz19nigdzQ0h1XIwG9BiU8Z8ASQS6FFQ0T7~Iuc2M6UrsWMEkk9dYARDOWIFrVKrg6KrSa1IIz6DW0uveiq1g6GHH2NI2Yy~4S8x-tDnkIEBklqmB5dEExBXYullfYGBM7IwJLhPZyUgiJmhTv~sjJRYYoRvwQHYqNFJKCtmEOiBYCQvxkxVaoyE5nqr50eDD8uzsg-W-zgPsYLlJJH~PbdIrM1YgiaZ~nB1Q9t3ij8JUFw8bSkQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ',
    views: '3.8M views',
    duration: '8:00'
  },
  {
    id: 'vid-9',
    title: 'AI Changed SaaS (And Nobody Even Realizes)',
    type: 'long',
    platform: 'youtube',
    niche: 'business',
    url: 'https://streamable.com/e/cdhovx?loop=0',
    thumb: 'https://cdn-cf-east.streamable.com/image/upload-cdhovx-96a31696206a25a8c6fe586408994b.jpg?Expires=1780368720&Signature=DMMAY--sMd1GZ~96M6xCOKhhJJSqkW0AiEnwHlRhgHEM1~7koy2~YOU5r5ES-~sfVl7ZEyzNyMSY37QR6pql0ZztZ-vMy4DIEahlq9DMCr6g7vVqeKgJqHbgGFZ2xKO4xos2c~RpiCuie7Z9TWImYiP690ABOvg8SYfHE1YfGr2XBh~UVC~wbTG8Z66ESyfZi-~LB9dJAxwPmGNwFCmMyQoxCvPXee8WmlYdajGw7F2~qD2BFAfxLZtf0wcKGB7OfSTfYNmVS4uLFD5MQLv8CGrVvOkOpuycmXQtwzwQXOBwWuNdFAHoAzW60QA5KijMGsB9ht-iuSjLp1WRHf-kew__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ',
    views: '2.5M views',
    duration: '7:30'
  },
  {
    id: 'vid-streamer-1',
    title: '$1 VS $3,000,000 Things iShowSpeed Bought..',
    type: 'long',
    platform: 'youtube',
    niche: 'streamers',
    url: 'https://streamable.com/e/znrr1c?loop=0',
    thumb: '',
    views: '5.2M views',
    duration: '11:40'
  },
  {
    id: 'vid-streamer-2',
    title: 'Times Streamers Lost It On Their Managers',
    type: 'long',
    platform: 'youtube',
    niche: 'streamers',
    url: 'https://streamable.com/e/n4lcby?loop=0',
    thumb: '',
    views: '3.1M views',
    duration: '9:25'
  },
  {
    id: 'vid-streamer-3',
    title: 'Times Streamers Lost It On Their Assistants',
    type: 'long',
    platform: 'youtube',
    niche: 'streamers',
    url: 'https://streamable.com/e/ayg28e?loop=0',
    thumb: '',
    views: '2.8M views',
    duration: '8:50'
  },
  {
    id: 'vid-short-comm-1',
    title: "The World's Rarest Car 🚗",
    type: 'short',
    platform: 'youtube',
    niche: 'commentary',
    url: 'https://streamable.com/e/4anzcv?loop=0',
    thumb: '',
    views: '4.2M views',
    duration: '0:45'
  },
  {
    id: 'vid-short-comm-2',
    title: 'This Girl Has Created a Magnificent Invention ❤️',
    type: 'short',
    platform: 'youtube',
    niche: 'commentary',
    url: 'https://streamable.com/e/fvktze?loop=0',
    thumb: '',
    views: '2.9M views',
    duration: '0:50'
  },
  {
    id: 'vid-short-comm-3',
    title: 'His Reaction Says It All 🥶',
    type: 'short',
    platform: 'youtube',
    niche: 'commentary',
    url: 'https://streamable.com/e/lyy3dt?loop=0',
    thumb: '',
    views: '3.1M views',
    duration: '0:35'
  },
  {
    id: 'vid-short-comm-4',
    title: 'Should They Get Banned? 🤔',
    type: 'short',
    platform: 'youtube',
    niche: 'commentary',
    url: 'https://streamable.com/e/z20v4w?loop=0',
    thumb: '',
    views: '1.8M views',
    duration: '0:48'
  },
  {
    id: 'vid-short-pod-1',
    title: 'Safest Home Defense Option - Delta Force Operator',
    type: 'short',
    platform: 'youtube',
    niche: 'podcast',
    url: 'https://streamable.com/e/xzri7r?loop=0',
    thumb: '',
    views: '2.4M views',
    duration: '0:45'
  },
  {
    id: 'vid-short-pod-2',
    title: 'Most Lethal Dudes On Planet',
    type: 'short',
    platform: 'youtube',
    niche: 'podcast',
    url: 'https://streamable.com/e/kpxzf1?loop=0',
    thumb: '',
    views: '1.9M views',
    duration: '0:52'
  },
  {
    id: 'vid-short-pod-3',
    title: 'Matthew Discovers The MIAMI Effect',
    type: 'short',
    platform: 'youtube',
    niche: 'podcast',
    url: 'https://streamable.com/e/wd7qzn?loop=0',
    thumb: '',
    views: '3.1M views',
    duration: '0:40'
  },
  {
    id: 'vid-short-pod-4',
    title: "Europeans Don't Know HISTORY",
    type: 'short',
    platform: 'youtube',
    niche: 'podcast',
    url: 'https://streamable.com/e/bffl3f?loop=0',
    thumb: '',
    views: '4.5M views',
    duration: '0:58'
  },
  {
    id: 'vid-short-cam-1',
    title: 'Officers Respond To a Disturbing call!',
    type: 'short',
    platform: 'youtube',
    niche: 'cams',
    url: 'https://streamable.com/e/c78zk6?loop=0',
    thumb: '',
    views: '5.1M views',
    duration: '0:41'
  },
  {
    id: 'vid-short-cam-2',
    title: 'Officer Pulls Over Lil Baby!',
    type: 'short',
    platform: 'youtube',
    niche: 'cams',
    url: 'https://streamable.com/e/trhf8a?loop=0',
    thumb: '',
    views: '3.7M views',
    duration: '0:50'
  },
  {
    id: 'vid-short-cam-3',
    title: 'This Baby Has Mastered Rage Baiting!',
    type: 'short',
    platform: 'youtube',
    niche: 'cams',
    url: 'https://streamable.com/e/toum4x?loop=0',
    thumb: '',
    views: '2.5M views',
    duration: '0:38'
  },
  {
    id: 'vid-short-cam-4',
    title: 'His First Time Trick or Treating!',
    type: 'short',
    platform: 'youtube',
    niche: 'cams',
    url: 'https://streamable.com/e/f9yop7?loop=0',
    thumb: '',
    views: '1.2M views',
    duration: '0:46'
  }
];

/**
 * Key Performance Statistics
 */
export const portfolioStats: StatItem[] = [
  { value: '450M+', label: 'Views Generated' },
  { value: '40+', label: 'Happy Clients' },
  { value: '4 Years', label: 'Experience' },
  { value: '450+', label: 'Videos Edited' }
];

/**
 * Partner Brand Channels (Automated Logo Ticker)
 */
export const workedWithChannels: PartnerBrand[] = [
  {
    id: 'brand-1',
    name: 'Dennis Brem',
    subscriberCount: '4.7M Subs',
    avatarUrl: 'https://i.postimg.cc/C5KZRzF1/denis.png',
    channelUrl: 'https://www.youtube.com/@DenisBrem'
  },
  {
    id: 'brand-3',
    name: 'Gainz',
    subscriberCount: '1.52M Subs',
    avatarUrl: 'https://i.postimg.cc/d307hLqq/gainz.png',
    channelUrl: 'https://www.youtube.com/@GainzSanity'
  },
  {
    id: 'brand-4',
    name: 'Stream Phoenix',
    subscriberCount: '530K Subs',
    avatarUrl: 'https://i.postimg.cc/vTm14cQZ/streamphoenix.png',
    channelUrl: 'https://www.youtube.com/@StreamPhoenix'
  },
  {
    id: 'brand-feasterr',
    name: 'Feasterr',
    subscriberCount: '56.9K Subs',
    avatarUrl: 'https://i.postimg.cc/QxbVFT1Q/feasterr.jpg',
    channelUrl: 'https://www.youtube.com/@feasterr'
  },
  {
    id: 'brand-navyseal6',
    name: 'NAVYSEAL6',
    subscriberCount: '25.7K Subs',
    avatarUrl: 'https://i.postimg.cc/Hs2jryXQ/NAVYSEAL6.jpg',
    channelUrl: 'https://www.youtube.com/@navyseal6'
  },
  {
    id: 'brand-microcrimes',
    name: 'MicroCrimes',
    subscriberCount: '63.4K Subs',
    avatarUrl: 'https://i.postimg.cc/dtBDhyrG/Micro-Crimes.jpg',
    channelUrl: 'https://www.youtube.com/@MicroCrimes'
  },
  {
    id: 'brand-6',
    name: 'Conflext',
    subscriberCount: '203K Subs',
    avatarUrl: 'https://i.postimg.cc/Qtm9NprC/conflext.png',
    channelUrl: 'https://www.youtube.com/@ConflextOfficial'
  },
  {
    id: 'brand-8',
    name: 'Ash Maurya',
    subscriberCount: '105K Subs',
    avatarUrl: 'https://i.ibb.co/ZRvKpJnF/Ash-Maurya.png',
    channelUrl: 'https://www.youtube.com/@AshMaurya'
  },
  {
    id: 'brand-9',
    name: 'Adam Robinson',
    subscriberCount: '9.4K Subs',
    avatarUrl: 'https://i.ibb.co/cXkHTZyr/Adam-Robinson.png',
    channelUrl: 'https://www.youtube.com/@retentionadam'
  },
  {
    id: 'brand-10',
    name: 'Scott Leese',
    subscriberCount: '1.22K Subs',
    avatarUrl: 'https://i.ibb.co/pBKFbv7C/The-Scott-Leese.png',
    channelUrl: 'https://www.youtube.com/@thescottleese'
  }
];

/**
 * Client Testimonials & Feedback Screenshots
 */
export const clientReviews: ReviewItem[] = [
  {
    id: 'rev-2',
    clientName: 'Gainz',
    role: 'Fitness Creator (1.52M Subs)',
    comment: 'Pacing, energy, and visual retention are an absolute masterclass. Easily the best editor in the fitness space!',
    avatarUrl: 'https://i.postimg.cc/d307hLqq/gainz.png',
    screenshotUrl: 'https://i.postimg.cc/SNthFVJp/gainzreview.jpg',
  },
  {
    id: 'rev-6',
    clientName: 'Adam Robinson',
    role: 'SaaS Founder & Creator (9.4K Subs)',
    comment: 'Incredible work, outstanding pacing, and high-retention editing style that keeps viewers hooked throughout.',
    avatarUrl: 'https://i.ibb.co/cXkHTZyr/Adam-Robinson.png',
    screenshotUrl: 'https://i.postimg.cc/C5HFW3wM/adamrobinsonreview.jpg',
  },
  {
    id: 'rev-7',
    clientName: 'Feasterr',
    role: 'Podcast Clips Channel (56.9K Subs)',
    comment: 'The flow, retention mechanics, and pacing are perfect. Turnaround times are incredibly fast and professional.',
    avatarUrl: 'https://i.postimg.cc/QxbVFT1Q/feasterr.jpg',
    screenshotUrl: 'https://i.postimg.cc/KjrZd6m8/feasterreview.jpg',
  },
  {
    id: 'rev-8',
    clientName: 'Stream Phoenix',
    role: 'Stream Highlights (530K Subs)',
    comment: 'Perfect timing, custom sound effects, and flawless engagement-driven flow in every single delivered cut.',
    avatarUrl: 'https://i.postimg.cc/vTm14cQZ/streamphoenix.png',
    screenshotUrl: 'https://i.postimg.cc/T1qRZzTd/streamphoenixreview.jpg',
  }
];
