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
    id: 'vid-1',
    title: 'The Best Dad 💖',
    type: 'short',
    platform: 'youtube',
    niche: 'commentary',
    url: 'https://www.youtube.com/shorts/jKTOVwqCgT8',
    thumb: 'https://i.ytimg.com/vi/jKTOVwqCgT8/hqdefault.jpg',
    views: '36M views',
    duration: '0:52'
  },
  {
    id: 'vid-5',
    title: 'GET UP AND GRIND - Motivational Speech',
    type: 'short',
    platform: 'youtube',
    niche: 'motivational',
    url: 'https://www.youtube.com/shorts/5f7E4DQG6kk',
    thumb: 'https://i.ytimg.com/vi/5f7E4DQG6kk/hqdefault.jpg',
    views: '13M views',
    duration: '0:52'
  },
  {
    id: 'vid-13',
    title: 'She Used 100% Of Her Brain...(@rosivaldofreitass)',
    type: 'short',
    platform: 'youtube',
    niche: 'fitness',
    url: 'https://www.youtube.com/shorts/X1V6sYKeKV8',
    thumb: 'https://i.ytimg.com/vi/X1V6sYKeKV8/hqdefault.jpg',
    views: '7.5M views',
    duration: '0:58'
  },
  {
    id: 'vid-17',
    title: '10 Times iShowSpeed Was Almost KILLED',
    type: 'long',
    platform: 'youtube',
    niche: 'streamers',
    url: 'https://www.youtube.com/watch?v=JN2dPeWup4s',
    thumb: 'https://i.ytimg.com/vi/JN2dPeWup4s/hqdefault.jpg',
    views: '6.9M views',
    duration: '12:15'
  },
  {
    id: 'vid-3',
    title: 'The World Gymnastics Champion 🥇',
    type: 'short',
    platform: 'youtube',
    niche: 'commentary',
    url: 'https://www.youtube.com/shorts/5lAkGGtC9gA',
    thumb: 'https://i.ytimg.com/vi/5lAkGGtC9gA/hqdefault.jpg',
    views: '5.5M views',
    duration: '0:50'
  },
  {
    id: 'vid-24',
    title: "The Untold Story Of The World's Greatest Prison Escapee",
    type: 'long',
    platform: 'youtube',
    niche: 'documentary',
    url: 'https://www.youtube.com/watch?v=LpYPsCdZ1Uc',
    thumb: 'https://i.ytimg.com/vi/LpYPsCdZ1Uc/hqdefault.jpg',
    views: '4.7M views',
    duration: '25:40'
  },
  {
    id: 'vid-15',
    title: 'How Is This Even Possible?🤔(@sbt)',
    type: 'short',
    platform: 'youtube',
    niche: 'fitness',
    url: 'https://www.youtube.com/shorts/i768IdWZaM4',
    thumb: 'https://i.ytimg.com/vi/i768IdWZaM4/hqdefault.jpg',
    views: '4.3M views',
    duration: '0:45'
  },
  {
    id: 'vid-2',
    title: 'This Girl Adopted a Dog but... 🐶',
    type: 'short',
    platform: 'youtube',
    niche: 'commentary',
    url: 'https://www.youtube.com/shorts/Ja7neOJZg-k',
    thumb: 'https://i.ytimg.com/vi/Ja7neOJZg-k/hqdefault.jpg',
    views: '2.9M views',
    duration: '0:55'
  },
  {
    id: 'vid-9',
    title: "DON'T GIVE UP - Motivational Speech",
    type: 'long',
    platform: 'youtube',
    niche: 'motivational',
    url: 'https://www.youtube.com/watch?v=nKpxRwCGBGU',
    thumb: 'https://i.ytimg.com/vi/nKpxRwCGBGU/hqdefault.jpg',
    views: '2.7M views',
    duration: '10:15'
  },
  {
    id: 'vid-8',
    title: 'NEVER GIVE UP - Motivational Speech',
    type: 'short',
    platform: 'youtube',
    niche: 'motivational',
    url: 'https://www.youtube.com/shorts/H6dImOh3yBM',
    thumb: 'https://i.ytimg.com/vi/H6dImOh3yBM/hqdefault.jpg',
    views: '2.3M views',
    duration: '0:50'
  },
  {
    id: 'vid-14',
    title: "He's Way Too Intimidating\uD83E\uDD76(@grekovalan)",
    type: 'short',
    platform: 'youtube',
    niche: 'fitness',
    url: 'https://www.youtube.com/shorts/LQrR9a5l0r8',
    thumb: 'https://i.ytimg.com/vi/LQrR9a5l0r8/hqdefault.jpg',
    views: '1.7M views',
    duration: '0:50'
  },
  {
    id: 'vid-20',
    title: "Streamers Who Forgot They're Live",
    type: 'long',
    platform: 'youtube',
    niche: 'streamers',
    url: 'https://www.youtube.com/watch?v=RsKpGPC5tjY',
    thumb: 'https://i.ytimg.com/vi/RsKpGPC5tjY/hqdefault.jpg',
    views: '1.6M views',
    duration: '14:55'
  },
  {
    id: 'vid-23',
    title: "The Untold Story Of America's Greatest Car Thief",
    type: 'long',
    platform: 'youtube',
    niche: 'documentary',
    url: 'https://www.youtube.com/watch?v=TGL7zAp4fcE',
    thumb: 'https://i.ytimg.com/vi/TGL7zAp4fcE/hqdefault.jpg',
    views: '1.5M views',
    duration: '18:30'
  },
  {
    id: 'vid-26',
    title: 'The Man Who Sold An Imaginary Airport For $242 Million',
    type: 'long',
    platform: 'youtube',
    niche: 'documentary',
    url: 'https://www.youtube.com/watch?v=qarEt6NHL6w',
    thumb: 'https://i.ytimg.com/vi/qarEt6NHL6w/hqdefault.jpg',
    views: '1.5M views',
    duration: '21:15'
  },
  {
    id: 'vid-4',
    title: 'This Guy Decided to Take Revenge but...',
    type: 'short',
    platform: 'youtube',
    niche: 'commentary',
    url: 'https://www.youtube.com/shorts/HdcBgJsvuJc',
    thumb: 'https://i.ytimg.com/vi/HdcBgJsvuJc/hqdefault.jpg',
    views: '1.2M views',
    duration: '0:58'
  },
  {
    id: 'vid-25',
    title: 'The Man Who Fled in a Box from the Most Heavily Guarded Facility',
    type: 'long',
    platform: 'youtube',
    niche: 'documentary',
    url: 'https://www.youtube.com/watch?v=2BRPV5ChS0c',
    thumb: 'https://i.ytimg.com/vi/2BRPV5ChS0c/hqdefault.jpg',
    views: '1M views',
    duration: '19:10'
  },
  {
    id: 'vid-27',
    title: 'The HUNT for the Man Who Outran Every Cop',
    type: 'long',
    platform: 'youtube',
    niche: 'documentary',
    url: 'https://www.youtube.com/watch?v=ky-sCxvimlg',
    thumb: 'https://i.ytimg.com/vi/ky-sCxvimlg/hqdefault.jpg',
    views: '1M views',
    duration: '15:25'
  },
  {
    id: 'vid-28',
    title: "The HUNT For The World's Most Wanted Motorcycle Street Racer: GhostRider",
    type: 'long',
    platform: 'youtube',
    niche: 'documentary',
    url: 'https://www.youtube.com/watch?v=ClT0A8HAkAM',
    thumb: 'https://i.ytimg.com/vi/ClT0A8HAkAM/hqdefault.jpg',
    views: '970K views',
    duration: '16:45'
  },
  {
    id: 'vid-16',
    title: 'Most Genuine Apology\uD83D\uDE02(@sv.league_official_th)',
    type: 'short',
    platform: 'youtube',
    niche: 'fitness',
    url: 'https://www.youtube.com/shorts/nasNtftQwK4',
    thumb: 'https://i.ytimg.com/vi/nasNtftQwK4/hqdefault.jpg',
    views: '900K views',
    duration: '0:35'
  },
  {
    id: 'vid-18',
    title: '10 MOST EMOTIONAL ISHOWSPEED MOMENTS',
    type: 'long',
    platform: 'youtube',
    niche: 'streamers',
    url: 'https://www.youtube.com/watch?v=qL96jIAd-BU',
    thumb: 'https://i.ytimg.com/vi/qL96jIAd-BU/hqdefault.jpg',
    views: '819K views',
    duration: '15:40'
  },
  {
    id: 'vid-7',
    title: 'CONTROL YOUR MIND - Motivational Speech',
    type: 'short',
    platform: 'youtube',
    niche: 'motivational',
    url: 'https://www.youtube.com/shorts/-J8dBgLGXkk',
    thumb: 'https://i.ytimg.com/vi/-J8dBgLGXkk/hqdefault.jpg',
    views: '398K views',
    duration: '0:55'
  },
  {
    id: 'vid-10',
    title: 'BELIEVE YOU CAN DO THIS - Motivational Speech',
    type: 'long',
    platform: 'youtube',
    niche: 'motivational',
    url: 'https://www.youtube.com/watch?v=AnoUBi9qZE8',
    thumb: 'https://i.ytimg.com/vi/AnoUBi9qZE8/hqdefault.jpg',
    views: '372K views',
    duration: '8:40'
  },
  {
    id: 'vid-22',
    title: 'When Streamers Expose Their Entitled Parents',
    type: 'long',
    platform: 'youtube',
    niche: 'streamers',
    url: 'https://www.youtube.com/watch?v=eAh4uC-hcxc',
    thumb: 'https://i.ytimg.com/vi/eAh4uC-hcxc/hqdefault.jpg',
    views: '310K views',
    duration: '13:20'
  },
  {
    id: 'vid-12',
    title: 'GET UP AND GET IT DONE - Motivational Video',
    type: 'long',
    platform: 'youtube',
    niche: 'motivational',
    url: 'https://www.youtube.com/watch?v=6dtPka6xUSM',
    thumb: 'https://i.ytimg.com/vi/6dtPka6xUSM/hqdefault.jpg',
    views: '292K views',
    duration: '7:50'
  },
  {
    id: 'vid-19',
    title: '12 Times iShowSpeed Fans Went Too Far..',
    type: 'long',
    platform: 'youtube',
    niche: 'streamers',
    url: 'https://www.youtube.com/watch?v=G0C8p109KfE',
    thumb: 'https://i.ytimg.com/vi/G0C8p109KfE/hqdefault.jpg',
    views: '192K views',
    duration: '11:05'
  },
  {
    id: 'vid-6',
    title: 'DISCIPLINE YOUR MIND - Motivational Speech',
    type: 'short',
    platform: 'youtube',
    niche: 'motivational',
    url: 'https://www.youtube.com/shorts/xYeTfr53vvY',
    thumb: 'https://i.ytimg.com/vi/xYeTfr53vvY/hqdefault.jpg',
    views: '115K views',
    duration: '0:58'
  },
  {
    id: 'vid-21',
    title: 'When AMP Collabs Went Completely Wrong',
    type: 'long',
    platform: 'youtube',
    niche: 'streamers',
    url: 'https://www.youtube.com/watch?v=9k9lsxfLfKQ',
    thumb: 'https://i.ytimg.com/vi/9k9lsxfLfKQ/hqdefault.jpg',
    views: '70K views',
    duration: '8:50'
  }
];

/**
 * Key Performance Statistics
 */
export const portfolioStats: StatItem[] = [
  { value: '350M+', label: 'Views Generated' },
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
    id: 'brand-2',
    name: 'Ben Lionel Scott',
    subscriberCount: '3.44M Subs',
    avatarUrl: 'https://i.postimg.cc/Wz4Ddh24/benlionel.png',
    channelUrl: 'https://www.youtube.com/@BenLionelScott'
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
    id: 'brand-5',
    name: 'Robbers IQ',
    subscriberCount: '205K Subs',
    avatarUrl: 'https://i.postimg.cc/sx2BMvVD/robbersiq.png',
    channelUrl: 'https://www.youtube.com/@RobbersIQ'
  },
  {
    id: 'brand-6',
    name: 'Conflext',
    subscriberCount: '203K Subs',
    avatarUrl: 'https://i.postimg.cc/Qtm9NprC/conflext.png',
    channelUrl: 'https://www.youtube.com/@ConflextOfficial'
  },
  {
    id: 'brand-7',
    name: 'Speed Cartel',
    subscriberCount: '15.8K Subs',
    avatarUrl: 'https://i.postimg.cc/nz2jVvtC/speedcartel.png',
    channelUrl: 'https://www.youtube.com/@speedcartel'
  }
];

/**
 * Client Testimonials & Feedback Screenshots
 */
export const clientReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    clientName: 'Ben Lionel Scott',
    role: 'Motivational Creator (3.44M Subs)',
    comment: 'Working with them elevated our speech dynamics and visual delivery to a whole new level of intensity!',
    avatarUrl: 'https://i.postimg.cc/Wz4Ddh24/benlionel.png',
    screenshotUrl: 'https://i.postimg.cc/sD0rdK1b/benlionelreview.jpg',
  },
  {
    id: 'rev-2',
    clientName: 'Gainz',
    role: 'Fitness Creator (1.52M Subs)',
    comment: 'Pacing, energy, and visual retention are an absolute masterclass. Easily the best editor in the fitness space!',
    avatarUrl: 'https://i.postimg.cc/d307hLqq/gainz.png',
    screenshotUrl: 'https://i.postimg.cc/SNthFVJp/gainzreview.jpg',
  },
  {
    id: 'rev-3',
    clientName: 'Stream Phoenix',
    role: 'Stream Highlights (530K Subs)',
    comment: 'Perfect comedic timing and high-retention motion design that grabs attention from the first second.',
    avatarUrl: 'https://i.postimg.cc/vTm14cQZ/streamphoenix.png',
    screenshotUrl: 'https://i.postimg.cc/651XJzyJ/phoenixreview.jpg',
  },
  {
    id: 'rev-4',
    clientName: 'Robbers IQ',
    role: 'Documentary Creator (205K Subs)',
    comment: 'The masterclass editing on our long-form documentary videos completely transformed our audience retention curve!',
    avatarUrl: 'https://i.postimg.cc/sx2BMvVD/robbersiq.png',
    screenshotUrl: 'https://i.postimg.cc/651XJzTk/robbersiqreview.jpg',
  },
  {
    id: 'rev-5',
    clientName: 'Conflext',
    role: 'Commentary Creator (203K Subs)',
    comment: 'Exceptional storytelling visual overlays and sound design. Turnaround time is incredibly fast.',
    avatarUrl: 'https://i.postimg.cc/Qtm9NprC/conflext.png',
    screenshotUrl: 'https://i.postimg.cc/YqyHK8hB/conflextreview.jpg',
  }
];
