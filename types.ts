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
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: string; // For Bento Grid layout
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}
