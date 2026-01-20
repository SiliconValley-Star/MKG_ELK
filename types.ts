import { LucideIcon } from 'lucide-react';

export interface NavRoute {
  label: string;
  path: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  slug: string;
  description: string;
  specs: string[];
  status: 'AKTİF' | 'PREMIUM' | 'KURUMSAL';
  full_details: string;
  features?: string[];
  scope: string;
  deployment_time: string;
  capacity_level: string;
  image: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    readTime: string;
    tags: string[];
    image: string;
    size?: 'large' | 'standard';
    category?: string;
}

export interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    year: string;
    image: string;
    slug: string;
    description: string;
    fullDescription: string;
    scope: string[];
    systems: string[];
    metrics: { label: string; value: string }[];
}
