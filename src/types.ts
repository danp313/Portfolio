/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VideoItem {
  id: string;
  title: string;
  type: 'long' | 'short';
  platform: 'youtube' | 'tiktok';
  niche: 'documentary' | 'gaming' | 'education' | 'vlog' | 'finance' | 'commentary' | 'motivational' | 'fitness' | 'streamers' | 'business' | 'podcast' | 'cams';
  url: string;
  thumb: string;
  views?: string;
  duration?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PartnerBrand {
  id: string;
  name: string;
  subscriberCount?: string;
  avatarUrl?: string;
  channelUrl?: string;
}

export interface ReviewItem {
  id: string;
  clientName: string;
  role: string;
  comment: string;
  avatarUrl?: string;
  screenshotUrl?: string; // Users can drop screenshots here
}
