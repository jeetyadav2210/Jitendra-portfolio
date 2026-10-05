'use client';

import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Menu,
  X,
  ExternalLink,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
  Layers,
  Info,
  Clock,
  Code,
  UserCheck,
} from 'lucide-react';

// Brand SVG Skill Logos
const SkillLogos = {
  NodeJs: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L3.5 6.9V16.8L12 21.7L20.5 16.8V6.9L12 2Z"
        fill="#339933"
      />
      <path
        d="M12 4.2L18.6 8V15.7L12 19.5L5.4 15.7V8L12 4.2Z"
        fill="#5FA04E"
      />
      <path
        d="M12 6.5L16.5 9.1V14.3L12 16.9L7.5 14.3V9.1L12 6.5Z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  NestJs: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
        fill="#18181B"
      />
      <path
        d="M7 16.5C7.8 17.2 9.5 18 12 18C14.5 18 16.2 17.2 17 16.5C16.8 14.2 15.4 11.8 13.8 10.3C13.5 10 13 10.3 13.2 10.7C13.9 12.1 14 13.6 13.6 15C13.1 14.5 12.6 14.2 12 14.2C11.4 14.2 10.9 14.5 10.4 15C10 13.6 10.1 12.1 10.8 10.7C11 10.3 10.5 10 10.2 10.3C8.6 11.8 7.2 14.2 7 16.5Z"
        fill="#EA2845"
      />
      <path
        d="M10 7.5C10.5 6.5 11.2 5.5 12 5C12.8 5.5 13.5 6.5 14 7.5C13.5 8.2 12.8 8.6 12 8.6C11.2 8.6 10.5 8.2 10 7.5Z"
        fill="#EA2845"
      />
    </svg>
  ),
  TypeScript: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M12.5 13.5H14.8C15.3 13.5 15.7 13.7 16 14C16.3 14.3 16.4 14.7 16.4 15.3C16.4 15.9 16.2 16.4 15.9 16.7C15.5 17 15 17.2 14.3 17.2C13.5 17.2 12.8 16.9 12.4 16.4L13.1 15.4C13.4 15.7 13.8 15.9 14.3 15.9C14.7 15.9 14.9 15.8 15.1 15.6C15.2 15.4 15.3 15.2 15.3 15C15.3 14.8 15.2 14.7 15 14.6C14.8 14.5 14.5 14.4 14.1 14.4H13.6C12.8 14.4 12.2 14.2 11.8 13.8C11.4 13.4 11.2 12.9 11.2 12.2C11.2 11.5 11.5 11 11.9 10.6C12.3 10.2 12.9 10 13.7 10C14.4 10 15 10.2 15.5 10.6L14.8 11.6C14.4 11.3 14 11.1 13.6 11.1C13.3 11.1 13 11.2 12.8 11.4C12.6 11.6 12.5 11.8 12.5 12.1C12.5 12.3 12.6 12.5 12.8 12.6C13 12.8 13.3 12.9 13.7 12.9H14.1C14.8 12.9 15.4 13.1 15.8 13.5M6 11.3H8.3V17H9.5V11.3H11.8V10.2H6V11.3Z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  JavaScript: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7 16.5C7.5 17.2 8.3 17.6 9.4 17.6C10.7 17.6 11.6 16.9 11.6 15.4V10.2H9.8V15.3C9.8 16 9.4 16.3 8.9 16.3C8.4 16.3 8.1 16 7.8 15.5L7 16.5ZM13 16.3C13.6 17.1 14.6 17.6 15.8 17.6C17.3 17.6 18.4 16.8 18.4 15.3C18.4 14 17.6 13.4 16.3 12.8L15.9 12.6C15 12.2 14.6 11.9 14.6 11.3C14.6 10.7 15.1 10.2 15.8 10.2C16.4 10.2 16.9 10.5 17.3 11.1L18.2 10.2C17.6 9.3 16.7 8.9 15.7 8.9C14.3 8.9 13.3 9.7 13.3 11.2C13.3 12.5 14.1 13.1 15.3 13.6L15.7 13.8C16.7 14.2 17.1 14.6 17.1 15.3C17.1 16 16.5 16.4 15.7 16.4C14.9 16.4 14.3 15.9 13.9 15.1L13 16.3Z"
        fill="#000000"
      />
    </svg>
  ),
  Express: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#0F172A" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="11"
        fontWeight="800"
        fontFamily="sans-serif"
        fill="#FFFFFF"
      >
        ex
      </text>
    </svg>
  ),
  MongoDB: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C11.5 3.5 7.5 9.5 7.5 14C7.5 18 10 20.8 12 22C14 20.8 16.5 18 16.5 14C16.5 9.5 12.5 3.5 12 2Z"
        fill="#47A248"
      />
      <path
        d="M12 2V22C12 22 16.5 18 16.5 14C16.5 9.5 12 2 12 2Z"
        fill="#499D4A"
      />
      <path
        d="M12 22C11.8 21.5 11.5 20.5 11.5 19C11.5 17 12 15 12 15C12 15 12.5 17 12.5 19C12.5 20.5 12.2 21.5 12 22Z"
        fill="#E8E8E8"
      />
    </svg>
  ),
  PostgreSQL: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
        fill="#336791"
      />
      <path
        d="M17.5 11.5C17.2 9.5 15.5 8 13.5 8C12.2 8 11.1 8.6 10.4 9.5C9.6 8.6 8.5 8 7.2 8C5.2 8 3.5 9.5 3.2 11.5C3 13 3.6 14.5 4.8 15.4C5.4 15.9 6.2 16.2 7 16.2H13.7C14.5 16.2 15.3 15.9 15.9 15.4C17.1 14.5 17.7 13 17.5 11.5Z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  Redis: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M2 7.5L12 2L22 7.5L12 13L2 7.5Z"
        fill="#DC382D"
      />
      <path
        d="M2 12L12 17.5L22 12"
        stroke="#A82820"
        strokeWidth="1.5"
      />
      <path
        d="M2 16.5L12 22L22 16.5"
        stroke="#7A1C16"
        strokeWidth="1.5"
      />
    </svg>
  ),
  MySQL: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z"
        fill="#00758F"
      />
      <path
        d="M16.5 14.5C16.5 14.5 15.5 12.5 13.5 12.5C11.5 12.5 10.5 14.5 10.5 14.5"
        stroke="#F29111"
        strokeWidth="2"
      />
    </svg>
  ),
  Fastify: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#000000" />
      <path
        d="M6 5H18V8H9V11H16V14H9V19H6V5Z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  KoaJs: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#33333D" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fontFamily="sans-serif"
        fill="#FFFFFF"
      >
        K
      </text>
    </svg>
  ),
  Prisma: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M12.5 2.5L4 18.5H19.5L12.5 2.5Z"
        fill="#2D3748"
      />
      <path
        d="M12.5 2.5L7.5 18.5H19.5L12.5 2.5Z"
        fill="#16A394"
      />
    </svg>
  ),
  BullMQ: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#7C3AED" />
      <path
        d="M7 12H17M13 8L17 12L13 16"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  SocketIO: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#010101" stroke="#E2E8F0" />
      <path
        d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12"
        stroke="#2563EB"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3" fill="#2563EB" />
    </svg>
  ),
  AWS: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#232F3E" />
      <path
        d="M6.5 14.5C8.5 16 11 16.5 13.5 16C15 15.5 16.5 14.5 17.5 13.5"
        stroke="#FF9900"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 13L17.5 13.5L17 15"
        stroke="#FF9900"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Docker: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#2496ED" />
      <rect x="5" y="10" width="2.5" height="2" fill="#FFFFFF" />
      <rect x="8" y="10" width="2.5" height="2" fill="#FFFFFF" />
      <rect x="11" y="10" width="2.5" height="2" fill="#FFFFFF" />
      <rect x="8" y="7.5" width="2.5" height="2" fill="#FFFFFF" />
      <rect x="11" y="7.5" width="2.5" height="2" fill="#FFFFFF" />
      <path
        d="M4 13C4 13 6 13 7.5 14.5C9 16 11 16 12.5 14.5C14 13 16 13 17.5 14.5C19 16 20 15 20 15"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Git: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L2 12L12 22L22 12L12 2Z"
        fill="#F05032"
      />
      <circle cx="12" cy="8" r="2" fill="#FFFFFF" />
      <circle cx="12" cy="16" r="2" fill="#FFFFFF" />
      <line x1="12" y1="10" x2="12" y2="14" stroke="#FFFFFF" strokeWidth="2" />
    </svg>
  ),
  Swagger: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#85EA2D" />
      <circle cx="9" cy="12" r="1.5" fill="#0F172A" />
      <circle cx="15" cy="12" r="1.5" fill="#0F172A" />
      <circle cx="12" cy="8" r="1.5" fill="#0F172A" />
      <circle cx="6.5" cy="16" r="1.5" fill="#0F172A" />
      <circle cx="17.5" cy="16" r="1.5" fill="#0F172A" />
    </svg>
  ),
  GitLab: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M12 21L16.5 7.5H7.5L12 21Z" fill="#E24329" />
      <path d="M12 21L7.5 7.5H2L12 21Z" fill="#FC6D26" />
      <path d="M2 7.5L0.5 12C0.3 12.5 0.5 13.1 1 13.5L12 21L2 7.5Z" fill="#FCA326" />
      <path d="M12 21L16.5 7.5H22L12 21Z" fill="#FC6D26" />
      <path d="M22 7.5L23.5 12C23.7 12.5 23.5 13.1 23 13.5L12 21L22 7.5Z" fill="#FCA326" />
    </svg>
  ),
  Postman: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path d="M7 12L12 8L17 12L14 16H10L7 12Z" fill="#FFFFFF" />
    </svg>
  ),
  Zod: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#3068B7" />
      <text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="900" fontFamily="sans-serif" fill="#FFFFFF">Z</text>
    </svg>
  ),
  Jest: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#15C213" />
      <path d="M8 12L11 15L16 9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Api: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#2563EB" />
      <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="900" fontFamily="sans-serif" fill="#FFFFFF">API</text>
    </svg>
  ),
  Microservices: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7.5" height="7.5" rx="2" fill="#2563EB" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" fill="#60A5FA" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" fill="#60A5FA" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" fill="#2563EB" />
    </svg>
  ),
  Database: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.2" />
      <ellipse cx="12" cy="7" rx="6" ry="2.5" fill="#2563EB" />
      <path d="M6 7V12C6 13.5 8.7 14.5 12 14.5C15.3 14.5 18 13.5 18 12V7" stroke="#2563EB" strokeWidth="1.2" />
      <path d="M6 12V17C6 18.5 8.7 19.5 12 19.5C15.3 19.5 18 18.5 18 17V12" stroke="#2563EB" strokeWidth="1.2" />
    </svg>
  ),
  Shield: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L4 7V12C4 16.5 7.5 20.5 12 21.5C16.5 20.5 20 16.5 20 12V7L12 3Z" fill="#2563EB" />
      <path d="M9 12L11 14L15 10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Cron: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#2563EB" strokeWidth="2" />
      <path d="M12 7V12L15 14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Broadcast: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.5" fill="#2563EB" />
      <path d="M8 8C5.8 10.2 5.8 13.8 8 16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 8C18.2 10.2 18.2 13.8 16 16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 5C1.1 8.9 1.1 15.1 5 19" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 5C22.9 8.9 22.9 15.1 19 19" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Webhook: () => (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="3" fill="#2563EB" />
      <circle cx="18" cy="6" r="3" fill="#2563EB" />
      <circle cx="12" cy="18" r="3" fill="#2563EB" />
      <path d="M8.5 7.5L15.5 7.5M7.5 8.5L10.5 15.5M16.5 8.5L13.5 15.5" stroke="#2563EB" strokeWidth="1.5" />
    </svg>
  ),
};

// Categorized Skills
const skillCategories = [
  {
    id: 'backend',
    category: 'Backend & APIs',
    tagline: 'Server runtimes, frameworks, microservices & REST architecture',
    accentDot: 'bg-[#2563EB]',
    items: [
      { name: 'Node.js', Logo: SkillLogos.NodeJs },
      { name: 'TypeScript', Logo: SkillLogos.TypeScript },
      { name: 'NestJS', Logo: SkillLogos.NestJs },
      { name: 'JavaScript', Logo: SkillLogos.JavaScript },
      { name: 'Express.js', Logo: SkillLogos.Express },
      { name: 'Fastify', Logo: SkillLogos.Fastify },
      { name: 'Koa.js', Logo: SkillLogos.KoaJs },
      { name: 'REST APIs', Logo: SkillLogos.Api },
      { name: 'Microservices', Logo: SkillLogos.Microservices },
      { name: 'Swagger / OpenAPI', Logo: SkillLogos.Swagger },
    ],
  },
  {
    id: 'databases',
    category: 'Databases & Caching',
    tagline: 'Relational, document stores, ORMs, and in-memory cache tiers',
    accentDot: 'bg-[#2563EB]',
    items: [
      { name: 'PostgreSQL', Logo: SkillLogos.PostgreSQL },
      { name: 'MongoDB', Logo: SkillLogos.MongoDB },
      { name: 'Redis', Logo: SkillLogos.Redis },
      { name: 'MySQL', Logo: SkillLogos.MySQL },
      { name: 'Prisma ORM', Logo: SkillLogos.Prisma },
      { name: 'Mongoose', Logo: SkillLogos.MongoDB },
      { name: 'SQL', Logo: SkillLogos.Database },
    ],
  },
  {
    id: 'queues',
    category: 'Queues & Real-time',
    tagline: 'Asynchronous workers, pub/sub, cron schedules, and websockets',
    accentDot: 'bg-[#2563EB]',
    items: [
      { name: 'BullMQ', Logo: SkillLogos.BullMQ },
      { name: 'Socket.IO', Logo: SkillLogos.SocketIO },
      { name: 'Cron Jobs', Logo: SkillLogos.Cron },
      { name: 'Event-Driven Architecture', Logo: SkillLogos.Broadcast },
      { name: 'Webhooks', Logo: SkillLogos.Webhook },
    ],
  },
  {
    id: 'cloud',
    category: 'Cloud, Auth & Tools',
    tagline: 'AWS infrastructure, token security, testing, and modern DevOps',
    accentDot: 'bg-[#2563EB]',
    items: [
      { name: 'AWS S3', Logo: SkillLogos.AWS },
      { name: 'AWS SQS', Logo: SkillLogos.AWS },
      { name: 'AWS IVS', Logo: SkillLogos.AWS },
      { name: 'JWT', Logo: SkillLogos.Shield },
      { name: 'RBAC', Logo: SkillLogos.Shield },
      { name: 'Zod', Logo: SkillLogos.Zod },
      { name: 'Jest', Logo: SkillLogos.Jest },
      { name: 'Git & GitHub', Logo: SkillLogos.Git },
      { name: 'GitLab', Logo: SkillLogos.GitLab },
      { name: 'Postman', Logo: SkillLogos.Postman },
      { name: 'Docker', Logo: SkillLogos.Docker },
    ],
  },
];

// Selected Projects with Live URLs (Now including FastForge.ai!)
const projects = [
  {
    id: 'livdot',
    name: 'LivDot',
    role: 'Backend Engineer',
    type: 'Live-Event Streaming & Marketplace',
    tagline: 'Discover talent, manage bookings, stream live events',
    shortDesc: 'High-concurrency marketplace backend handling live event streaming, crew hiring, booking workflows, and automated payout pipelines.',
    fullDesc:
      'LivDot is an end-to-end talent marketplace and live video broadcast platform. As Backend Engineer, I developed core business workflows connecting hosts, producers, and crew members with real-time state synchronization, automated booking threads, and payment processing.',
    liveUrl: 'https://dev.livdot.co/login?redirectProfile=viewer&redirectRoute=%2Fonboarding%2Fhost',
    liveLabel: 'LivDot — Discover talent, manage bookings, stream live',
    iconInitial: 'D',
    iconBg: 'bg-blue-50 text-[#2563EB] border-blue-200',
    highlights: [
      'Engineered real-time bidirectional status and event updates via Socket.IO and Redis pub/sub.',
      'Architected granular RBAC permissions, strict input validation with Zod, and automated API contract tests in Jest.',
      'Integrated AWS S3 for media storage, AWS SQS for asynchronous task queues, and AWS IVS for live video streaming.',
      'Designed transactional booking state machines covering host approvals, producer hiring threads, and crew confirmations.',
      'Implemented automated payout triggers and payment gateway webhooks for seamless marketplace billing.',
    ],
    tags: ['TypeScript', 'NestJS', 'Fastify', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Socket.IO', 'AWS SQS', 'AWS IVS'],
  },
  {
    id: 'nipige',
    name: 'Nipige',
    role: 'Backend & Microservices Engineer',
    type: 'No-Code Marketplace Platform • Trigital Flagship',
    tagline: 'No-Code Marketplace Builder | Launch in 14 Days',
    shortDesc:
      'Flagship enterprise no-code marketplace platform developed at our organization (Trigital Technologies) powering rapid marketplace launches in 14 days, under which multiple production client applications and digital commerce systems are delivered.',
    fullDesc:
      'Nipige is the flagship no-code marketplace builder engineered by our organization, Trigital Technologies Pvt Ltd. It serves as our core engine to deliver customized, enterprise-grade multi-vendor marketplaces, booking platforms, and provider ecosystems in just 14 days. As Backend Developer on the platform, I architected high-throughput microservices, vendor onboarding pipelines, catalog management, and transactional booking state machines that power multiple client solutions deployed in production.',
    liveUrl: 'https://www.nipige.com/',
    liveLabel: 'No-Code Marketplace Builder | Launch in 14 Days, Nipige',
    iconInitial: 'N',
    iconBg: 'bg-blue-50 text-[#2563EB] border-blue-200',
    highlights: [
      'Engineered core microservices for our organization’s flagship no-code marketplace platform, enabling client launches in 14 days.',
      'Constructed scalable microservices for provider onboarding, dynamic service catalogs, and automated booking lifecycles.',
      'Developed high-throughput data sync pipelines connecting MongoDB clusters with external provider backends with strict consistency.',
      'Built multi-tenant database partitioning, automated batch processing routines, and scheduled synchronization workers.',
      'Successfully delivered and scaled multiple customer marketplace solutions running on the Nipige platform.',
    ],
    tags: ['No-Code Builder', 'Node.js', 'Koa.js', 'MongoDB', 'Microservices', 'Multi-tenant', 'REST APIs', 'AWS', 'Socket.IO'],
  },
  {
    id: 'calonex',
    name: 'CALONEX',
    role: 'Backend Developer',
    type: 'Microservices & Real Estate Platform',
    tagline: 'Find your next home in the USA',
    shortDesc: 'Distributed property management platform powering real estate listings, digital leasing, tenant discovery, and broker commissions.',
    fullDesc:
      'CALONEX is a US-wide property management and leasing ecosystem. I engineered backend microservices responsible for property publishing, tenant application scoring, automated lease generation, and multi-tier broker commission calculations.',
    liveUrl: 'https://www.calonex.com/',
    liveLabel: 'Find your next home in the USA | CALONEX',
    iconInitial: 'C',
    iconBg: 'bg-blue-50 text-[#2563EB] border-blue-200',
    highlights: [
      'Developed decoupled microservices with standardized REST and event-driven communication protocols.',
      'Designed property lifecycle state management: listing, inspection, tenant discovery, lease drafting, and digital signing.',
      'Optimized MongoDB aggregation pipelines and indexing to deliver sub-100ms multi-filter property searches.',
      'Built automated broker commission calculation engines and transactional ledger audit logs.',
      'Integrated real-time notification pipelines for lease status updates via Socket.IO and AWS services.',
    ],
    tags: ['Microservices', 'Node.js', 'Koa.js', 'MongoDB', 'Socket.IO', 'TypeScript', 'AWS'],
  },
  {
    id: 'fastforge',
    name: 'FastForge.ai',
    role: 'Backend Developer',
    type: 'Instant App & AI Platform',
    tagline: 'Instant web application generation powered by LLMs',
    shortDesc: 'No-code/low-code platform backend orchestrating LLM integrations, dynamic schema generation, and asynchronous deployment pipelines.',
    fullDesc:
      'FastForge.ai is an intelligent no-code platform that generates full-stack web applications on demand using large language models. I architected the backend generation pipeline, asynchronous task queues, and platform integrations.',
    liveUrl: 'https://www.fastforge.ai/',
    liveLabel: 'No-Code Marketplace & App Platform | FastForge.ai',
    iconInitial: '⚡',
    iconBg: 'bg-blue-50 text-[#2563EB] border-blue-200',
    highlights: [
      'Orchestrated multi-step LLM API prompting pipelines with streaming response handlers.',
      'Designed dynamic schema generation and instant database provisioning micro-workflows.',
      'Handled asynchronous background build jobs using robust message queues to eliminate frontend timeouts.',
      'Collaborated closely with frontend developers to optimize end-to-end generation latency.',
    ],
    tags: ['Node.js', 'Koa.js', 'TypeScript', 'LLM Integration', 'REST APIs', 'Async Queues'],
  },
  {
    id: 'lionscricket',
    name: 'Lions Cricket',
    role: 'Backend Developer',
    type: 'Digital Cricket Platform • Nipige',
    tagline: 'Digital cricket operations, live fixtures & fan engagement platform',
    shortDesc:
      'Enterprise sports platform unifying South African cricket operations, tournament fixtures, real-time match results, player analytics, media, and fan engagement into a unified digital experience.',
    fullDesc:
      'Lions Cricket is a comprehensive digital cricket platform built to bring cricket operations, content, fixtures, results, player and team information, media, and fan engagement into a unified online experience. As part of the backend development team at Nipige, I engineered and extended core REST APIs, resolved complex data handling and integration bugs, and enhanced cricket-specific modules for fixtures, results, administrative portals, and sponsor management while ensuring high platform stability.',
    liveUrl: 'https://lionscricket.co.za/',
    liveLabel: 'Lions Cricket — Digital Cricket Management & Fan Engagement Platform',
    iconInitial: '🏏',
    iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
    highlights: [
      'Developed and modified backend REST APIs based on project and frontend requirements.',
      'Fixed critical API and backend issues affecting existing application workflows with zero downtime.',
      'Investigated and resolved bugs involving API responses, data handling, and backend integrations.',
      'Constructed reliable fixes without disrupting live match workflows or high-traffic fan engagement sessions.',
      'Supported enhancements to cricket-related modules including fixtures, results, content, and administration.',
      'Collaborated on comprehensive API testing and team troubleshooting to ensure platform stability.',
    ],
    tags: ['Node.js', 'TypeScript', 'REST APIs', 'Sports Tech', 'API Development', 'Bug Fixing', 'Data Handling', 'Admin Portal'],
  },
  {
    id: 'aza',
    name: 'AZA',
    role: 'Backend Developer',
    type: 'Fintech, Payments & Automation',
    tagline: 'QR payments & automated settlement workflows',
    shortDesc: 'Financial application services supporting QR-based money transfer, automated recurring payments, and cron-based settlement pipelines.',
    fullDesc:
      'AZA is a modern fintech application focused on frictionless digital payments and recurring financial automation. I built the server-side payment infrastructure, webhook listeners, automated cron reconciliation, and client-facing demos.',
    liveUrl: null,
    liveLabel: null,
    iconInitial: 'A',
    iconBg: 'bg-slate-100 text-[#0F172A] border-slate-200',
    highlights: [
      'Built automated payment gateway integrations with idempotency keys and cryptographic webhook validation.',
      'Engineered fault-tolerant background cron workers for recurring subscription billing and ledger reconciliation.',
      'Implemented secure OAuth 2.0 social authentication and token-based session management.',
      'Created real-time balance and transaction update feeds over Socket.IO.',
    ],
    tags: ['Node.js', 'Koa.js', 'MongoDB', 'Socket.IO', 'Payment Gateway', 'Cron Jobs', 'AWS'],
  },
  {
    id: 'teka',
    name: 'Teka App',
    role: 'Junior Web Developer',
    type: 'IoT & Smart Appliance Control',
    tagline: 'Remote IoT appliance telemetry & energy optimization',
    shortDesc: 'IoT smart appliance backend functionality enabling remote appliance control, real-time energy telemetry, and automated alerts.',
    fullDesc:
      'Teka App connects smart kitchen appliances to the cloud. I developed server-side communication interfaces, telemetry data collectors, and device management APIs for remote status monitoring and energy tracking.',
    liveUrl: null,
    liveLabel: null,
    iconInitial: 'T',
    iconBg: 'bg-blue-50 text-[#2563EB] border-blue-200',
    highlights: [
      'Handled bidirectional device communication over Socket.IO with heartbeat health checks.',
      'Built telemetry logging and energy consumption analytics endpoints.',
      'Integrated real-time push alerts for appliance error codes and maintenance warnings.',
    ],
    tags: ['Koa.js', 'Socket.IO', 'MongoDB', 'TypeScript', 'AWS'],
  },
];

// Experience (Updated: Trigital Technologies 4+ years)
const experiences = [
  {
    company: 'Trigital Technologies Pvt Ltd',
    role: 'Software Engineer (Backend)',
    period: '2022 – Present (4+ years)',
    badge: 'Current Role',
    desc: 'Working on backend APIs, managing high-throughput services, handling microservices and distributed database architecture.',
    points: [
      'Build and maintain scalable backend services, microservices, and REST APIs using Node.js and TypeScript.',
      'Develop end-to-end business workflows with NestJS, PostgreSQL, Prisma, MongoDB, Redis, and Socket.IO.',
      'Architect marketplace workflows: producer applications, hiring threads, crew assignment, booking states, and payments.',
      'Design authentication, RBAC, request validation with Zod, database indexes, and payment gateway webhooks.',
      'Awarded Certificate of Excellence and Certificate of Appreciation for outstanding backend performance.',
    ],
  },
  {
    company: 'Integer Info Solutions Pvt Ltd',
    role: 'JavaScript Developer',
    period: 'Jan 2022 – Jun 2022',
    badge: 'Previous',
    desc: 'Engineered JavaScript modules, integrated client-facing APIs, and resolved production defects.',
    points: [
      'Developed JavaScript application modules and integrated server-side REST APIs.',
      'Investigated defects, implemented feature enhancements, and supported client production releases.',
    ],
  },
  {
    company: 'DataPure',
    role: 'Back Office Employee',
    period: 'Jun 2021 – May 2022',
    badge: 'Previous',
    desc: 'Coordinated operational pipelines and data integrity workflows.',
    points: [
      'Managed data pipelines and operational workflows supporting internal business processes.',
    ],
  },
];

// Verified Corporate Certificates & Honors
const certificates = [
  {
    id: 'excellence-2024',
    title: 'Certificate for Excellence',
    issuer: 'Trigital Technologies Pvt Ltd',
    signatory: 'Venkat Akula — Managing Director',
    date: '22 Oct 2024',
    period: 'Q3 (July – Sep 2024)',
    badge: 'Excellence Award',
    desc: 'Awarded for outstanding and exceptional backend performance throughout the Third quarter (July-Sep 2024), consistent dedication, and elevating organizational success on production systems.',
    image: '/certificates/trigital-certificate-excellence-2024.png',
    pdf: '/certificates/trigital-certificate-excellence-2024.pdf',
    accentColor: 'border-slate-200 hover:border-[#2563EB]',
    tagClass: 'bg-blue-50 text-[#2563EB] border-blue-200',
  },
  {
    id: 'appreciation-2023',
    title: 'Certificate of Appreciation',
    issuer: 'Trigital Technologies Pvt Ltd',
    signatory: 'Dr. Santosh Kumar Honnagunti — Chief Executive Officer',
    date: '27 Feb 2023',
    period: 'Annual Performance Honor',
    badge: 'Appreciation Award',
    desc: 'Awarded for extraordinary service, dedication to the software engineering profession, and reliable contributions to production backend deliverables.',
    image: '/certificates/trigital-certificate-appreciation-2023.png',
    pdf: '/certificates/trigital-certificate-appreciation-2023.pdf',
    accentColor: 'border-slate-200 hover:border-[#2563EB]',
    tagClass: 'bg-blue-50 text-[#2563EB] border-blue-200',
  },
];

// Education
const education = [
  {
    degree: 'MBA — Information Technology',
    school: 'Devi Ahilya Vishwavidyalaya, Indore',
    year: '2020 – 2022',
  },
  {
    degree: 'BCA — Information Technology',
    school: 'Vikram University',
    year: '2017 – 2020',
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeModalProject, setActiveModalProject] = useState<typeof projects[0] | null>(null);
  const [activeModalCertificate, setActiveModalCertificate] = useState<typeof certificates[0] | null>(null);
  const [projectFilter, setProjectFilter] = useState<'all' | 'live' | 'enterprise'>('all');
  const [activeCodeTab, setActiveCodeTab] = useState<'engineer' | 'stack' | 'metrics'>('engineer');
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const phone = '8349212145';
  const formattedPhone = '+91 8349212145';
  const email = 'jitendrayaduvanshi3289@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/jitendra-yaduvanshi-48b2051ba';
  const gitHub = 'https://github.com/jeetyadav2210';
  const whatsappUrl = `https://wa.me/918349212145?text=${encodeURIComponent(
    'Hi Jitendra, I reviewed your backend portfolio and would like to discuss an opportunity!'
  )}`;

  // Filter projects for recruiters & HR quick scan (Now 5 live platforms!)
  const filteredProjects = projects.filter((p) => {
    if (projectFilter === 'live') return p.liveUrl !== null;
    if (projectFilter === 'enterprise') return p.liveUrl === null;
    return true;
  });

  // Close modals on Escape key & Lock body scroll when any modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
        setActiveModalCertificate(null);
        setShowPhotoModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (activeModalProject || activeModalCertificate || showPhotoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalProject, activeModalCertificate, showPhotoModal]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(`${label} copied!`);
    setTimeout(() => setCopiedText(null), 3000);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'For Recruiters', id: 'recruiter-summary' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <main className="min-h-screen w-full max-w-full text-[#0F172A] selection:bg-[#2563EB] selection:text-white pb-20 sm:pb-0">
      {/* Toast Notification */}
      {copiedText && (
        <div className="fixed bottom-6 right-6 z-[10000] flex items-center gap-2 rounded-xl border border-[#2563EB] bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-[#0F172A] shadow-2xl backdrop-blur-xl animate-bounce max-w-[90vw]">
          <Check className="h-4 w-4 text-[#2563EB] shrink-0" />
          <span className="truncate">{copiedText}</span>
        </div>
      )}

      {/* 1. PROJECT DETAILS READ-MORE MODAL */}
      {activeModalProject && (
        <div
          id="project-modal-backdrop"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/70 p-3 sm:p-5 backdrop-blur-sm transition-opacity"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
          onClick={() => setActiveModalProject(null)}
        >
          <div
            id="project-modal-dialog"
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-2xl text-[#0F172A] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#0F172A] transition border border-slate-200 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-2 pr-10">
              <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-xs font-bold text-[#2563EB]">
                {activeModalProject.role}
              </span>
              <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-0.5 text-xs font-semibold text-slate-700">
                {activeModalProject.type}
              </span>
              {activeModalProject.liveUrl && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" /> Live in Production
                </span>
              )}
            </div>

            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              {activeModalProject.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#2563EB] italic mt-0.5">
              {activeModalProject.tagline}
            </p>

            {/* In-depth Overview */}
            <div className="mt-5 border-t border-slate-100 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Architecture Overview</h4>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#334155]">
                {activeModalProject.fullDesc}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="mt-5 border-t border-slate-100 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Key Engineering Highlights</h4>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#334155]">
                {activeModalProject.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2563EB] mt-0.5" />
                    <span className="leading-snug">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Tech Stack */}
            <div className="mt-5 border-t border-slate-100 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Technology Stack</h4>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {activeModalProject.tags.map((t) => (
                  <span
                    key={t}
                    className="tag-tech"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-7 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              {activeModalProject.liveUrl ? (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-blue inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold shadow-lg"
                >
                  Visit Live Application <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <span className="text-xs text-[#64748B] font-mono">Enterprise / Production Microservice</span>
              )}

              <button
                onClick={() => setActiveModalProject(null)}
                className="rounded-xl border border-slate-200 bg-slate-100 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0F172A] hover:bg-slate-200 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. CERTIFICATE LIGHTBOX MODAL */}
      {activeModalCertificate && (
        <div
          id="certificate-modal-backdrop"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/70 p-3 sm:p-5 backdrop-blur-sm transition-opacity"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
          onClick={() => setActiveModalCertificate(null)}
        >
          <div
            id="certificate-modal-dialog"
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-2xl text-[#0F172A] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalCertificate(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#0F172A] transition shadow border border-slate-200"
              aria-label="Close certificate modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-2 pr-10">
              <span className={`rounded-full border px-3 py-0.5 text-xs font-bold ${activeModalCertificate.tagClass}`}>
                {activeModalCertificate.badge}
              </span>
              <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-0.5 text-xs font-semibold text-slate-700">
                {activeModalCertificate.issuer}
              </span>
              <span className="text-xs font-mono text-[#64748B]">
                Issued: {activeModalCertificate.date}
              </span>
            </div>

            <h3 className="mt-2.5 text-xl sm:text-2xl font-black text-[#0F172A]">
              {activeModalCertificate.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#2563EB] font-medium">
              Signed by {activeModalCertificate.signatory}
            </p>

            {/* Certificate Image Preview */}
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-inner flex items-center justify-center p-1 sm:p-2">
              <img
                src={activeModalCertificate.image}
                alt={`${activeModalCertificate.title} - Jitendra Yaduvanshi`}
                className="max-h-[62vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>

            <p className="mt-3.5 text-xs sm:text-sm text-[#334155] leading-relaxed">
              {activeModalCertificate.desc}
            </p>

            {/* Modal Footer Actions */}
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <a
                href={activeModalCertificate.pdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-blue inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold shadow-lg"
              >
                <Download className="h-4 w-4" /> Download Official PDF
              </a>

              <button
                onClick={() => setActiveModalCertificate(null)}
                className="rounded-xl border border-slate-200 bg-slate-100 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0F172A] hover:bg-slate-200 transition"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. PROFILE PHOTO FULL-VIEW LIGHTBOX MODAL */}
      {showPhotoModal && (
        <div
          id="photo-modal-backdrop"
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/85 p-3 sm:p-5 backdrop-blur-md transition-opacity"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10000 }}
          onClick={() => setShowPhotoModal(false)}
        >
          <div
            id="photo-modal-dialog"
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-md sm:max-w-lg rounded-3xl border border-slate-700 bg-[#0B132B] p-4 sm:p-6 shadow-2xl text-slate-100 my-auto text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowPhotoModal(false)}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition border border-slate-700 cursor-pointer z-10"
              aria-label="Close photo preview"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header info */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-600/90 border border-blue-400/40 px-2.5 py-0.5 text-xs font-bold text-white shadow-sm">
                <Check className="h-3 w-3" /> Verified Profile Photo
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white">
              Jitendra Yaduvanshi
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-0.5">
              Software Engineer (Backend) • Trigital Technologies (4+ Yrs)
            </p>

            {/* Full HD Photo Container */}
            <div className="mt-4 overflow-hidden rounded-2xl border-2 border-slate-700/80 bg-slate-950/90 shadow-2xl flex items-center justify-center p-1 sm:p-2">
              <img
                src="/jitendra-profile.png"
                alt="Jitendra Yaduvanshi - Full HD Portrait"
                className="max-h-[62vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">
                📍 Indore, India • Active for Hire
              </span>
              <button
                type="button"
                onClick={() => setShowPhotoModal(false)}
                className="rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 px-4 py-2 font-bold text-white transition cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 sm:h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo with JY Monogram */}
          <a href="#home" className="group flex items-center gap-2.5 font-bold tracking-tight text-[#0F172A]">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white font-black text-sm shadow-md">
              JY
            </span>
            <span className="text-base sm:text-lg font-extrabold tracking-tight">
              Jitendra <span className="text-[#2563EB]">Yaduvanshi</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs sm:text-sm font-semibold text-[#475569] hover:text-[#2563EB] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-[#0F172A] hover:border-[#2563EB] hover:text-[#2563EB] transition shadow-sm"
            >
              <Phone className="h-3.5 w-3.5 text-[#2563EB]" />
              {formattedPhone}
            </a>

            <a
              href="/Jitendra-Yaduvanshi-Resume.pdf"
              download="Jitendra-Yaduvanshi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-blue inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition shadow-md"
            >
              <Download className="h-3.5 w-3.5" /> Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 text-[#475569] hover:text-[#0F172A] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="border-t border-slate-100 bg-white px-5 py-5 md:hidden shadow-xl">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  onClick={() => setOpen(false)}
                  href={`#${item.id}`}
                  className="text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition py-1"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-2.5 text-xs font-bold text-[#0F172A] shadow-sm"
                >
                  <Phone className="h-4 w-4 text-[#2563EB]" /> Call: {formattedPhone}
                </a>

                <a
                  href="/Jitendra-Yaduvanshi-Resume.pdf"
                  download="Jitendra-Yaduvanshi-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-blue flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold shadow-md"
                >
                  <Download className="h-4 w-4" /> Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section (Matching Reference Pattern with White Theme & Mobile Responsiveness) */}
      <section id="home" className="relative z-10 pt-6 sm:pt-10 pb-8 sm:pb-12">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content (Col 7 on desktop, full width on mobile) */}
            <div className="w-full lg:col-span-7 min-w-0">
              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/90 px-3.5 py-1 text-xs font-bold text-[#2563EB] shadow-sm">
                  Backend Engineer • 4+ Yrs Exp
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <MapPin className="h-3.5 w-3.5 text-[#2563EB]" /> Indore, India
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#0F172A]">
                Hi, I&apos;m<br />
                <span className="text-[#0F172A]">Jitendra </span>
                <span className="text-[#2563EB]">Yaduvanshi</span>
              </h1>

              {/* Subheading */}
              <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg font-bold text-[#2563EB] tracking-tight">
                Node.js • TypeScript • NestJS • REST APIs • Microservices
              </p>

              {/* Bio summary */}
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#475569] max-w-xl font-normal">
                Senior Backend Engineer with 4+ years of hands-on experience building high-throughput REST APIs,
                event-driven microservices, payment gateways, and real-time platforms. Proven expertise across
                PostgreSQL, Prisma, MongoDB, Redis, BullMQ, and AWS infrastructure.
              </p>

              {/* Action Buttons: 2x2 Grid on sm+, stacked on mobile */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-lg">
                {/* Button 1: Call: +91 8349212145 (Green) */}
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 text-xs sm:text-sm font-bold shadow-md transition"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>Call: {formattedPhone}</span>
                </a>

                {/* Button 2: Featured Projects ↗ (Royal Blue) */}
                <a
                  href="#projects"
                  className="btn-primary-blue inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold shadow-md"
                >
                  <span>Featured Projects</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>

                {/* Button 3: Download CV (PDF) (Dark Slate) */}
                <a
                  href="/Jitendra-Yaduvanshi-Resume.pdf"
                  download="Jitendra-Yaduvanshi-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-4 py-3 text-xs sm:text-sm font-bold shadow-md transition"
                >
                  <Download className="h-4 w-4 shrink-0" />
                  <span>Download CV (PDF)</span>
                </a>

                {/* Button 4: WhatsApp Chat (WhatsApp green) */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 px-4 py-3 text-xs sm:text-sm font-black shadow-md transition"
                >
                  <MessageSquare className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Quick Copy Contact Pills (Row 3) */}
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-lg">
                {/* Phone Pill */}
                <div className="flex items-center justify-between gap-2 rounded-xl border border-emerald-300/80 bg-white px-3 py-2 text-xs text-[#0F172A] shadow-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    <Phone className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span className="font-mono font-bold text-xs truncate">{formattedPhone}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(formattedPhone, 'Phone number')}
                    className="shrink-0 rounded-lg bg-emerald-50 border border-emerald-300 px-2 py-1 text-[11px] font-bold text-emerald-700 hover:bg-emerald-600 hover:text-white transition shadow-sm cursor-pointer"
                  >
                    Copy Phone
                  </button>
                </div>

                {/* Email Pill */}
                <div className="flex items-center justify-between gap-2 rounded-xl border border-blue-300/80 bg-white px-3 py-2 text-xs text-[#0F172A] shadow-sm min-w-0">
                  <div className="flex items-center gap-2 min-w-0 truncate">
                    <Mail className="h-3.5 w-3.5 text-[#2563EB] shrink-0" />
                    <span className="font-mono font-medium text-xs truncate">{email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(email, 'Email address')}
                    className="shrink-0 rounded-lg bg-blue-50 border border-blue-300 px-2 py-1 text-[11px] font-bold text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition shadow-sm cursor-pointer"
                  >
                    Copy Email
                  </button>
                </div>
              </div>

              {/* Core Technologies Logo Strip */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                  Core Technologies
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  {[
                    { name: 'Node.js', Logo: SkillLogos.NodeJs },
                    { name: 'NestJS', Logo: SkillLogos.NestJs },
                    { name: 'TypeScript', Logo: SkillLogos.TypeScript },
                    { name: 'MongoDB', Logo: SkillLogos.MongoDB },
                    { name: 'PostgreSQL', Logo: SkillLogos.PostgreSQL },
                    { name: 'Redis', Logo: SkillLogos.Redis },
                  ].map(({ name, Logo }) => (
                    <div
                      key={name}
                      className="skill-pill"
                    >
                      <Logo />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: IDE / Profile Window Card */}
            <div className="w-full lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md sm:max-w-lg rounded-3xl bg-[#0B132B] border border-slate-700/80 p-4 sm:p-5 shadow-2xl text-slate-100 font-sans">
                {/* Card Top: Avatar + Bio details */}
                <div className="flex items-center gap-3.5 sm:gap-4 pb-4 border-b border-slate-800">
                  {/* Clickable Profile Picture with Online Status Indicator (Slightly larger, crisp HD) */}
                  <div
                    onClick={() => setShowPhotoModal(true)}
                    className="relative shrink-0 cursor-pointer group/photo"
                    title="Click to view full photo in HD"
                  >
                    <div className="h-[84px] w-[84px] sm:h-[96px] sm:w-[96px] rounded-2xl overflow-hidden border-2 border-blue-500/50 p-0.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 shadow-lg group-hover/photo:border-blue-400 transition-all duration-200">
                      <img
                        src="/jitendra-profile.png"
                        alt="Jitendra Yaduvanshi - Backend Engineer"
                        className="h-full w-full object-cover object-[center_12%] rounded-[14px] group-hover/photo:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <span
                      className="absolute -bottom-1 -right-1 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-emerald-500 ring-2 ring-[#0B132B] animate-pulse"
                      title="Online & Ready for Hire"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-black/30 opacity-0 group-hover/photo:opacity-100 flex items-center justify-center transition-opacity duration-200 backdrop-blur-[1px]">
                      <span className="rounded-md bg-white/90 text-slate-900 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider shadow">View</span>
                    </div>
                  </div>

                  {/* Bio details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-black text-white truncate">
                        Jitendra Yaduvanshi
                      </h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 border border-blue-400/40 px-2 py-0.5 text-[10px] font-bold text-white shrink-0">
                        <Check className="h-2.5 w-2.5" /> Verified
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-300">
                      Software Engineer
                    </p>
                    <p className="text-xs text-slate-400 truncate">
                      Trigital Technologies • 4+ Yrs
                    </p>
                    <a
                      href={`tel:${phone}`}
                      className="mt-0.5 inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition"
                    >
                      <Phone className="h-3 w-3" />
                      <span>{formattedPhone}</span>
                    </a>
                  </div>
                </div>

                {/* Editor Window Bar: 3 Mac Dots + Filename + Fully Responsive Tabs (No mobile overflow) */}
                <div className="mt-3.5 flex items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                    </div>
                    {/* Hide filename on tiny screens to guarantee tabs never get cut off */}
                    <span className="hidden sm:inline font-mono text-xs text-slate-400 font-semibold ml-1">
                      profile.ts
                    </span>
                  </div>

                  {/* Interactive Tabs (Fits 100% on mobile screens without cut off) */}
                  <div className="flex items-center gap-1 bg-slate-900/95 p-1 rounded-xl border border-slate-800 text-[11px] sm:text-xs font-mono shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveCodeTab('engineer')}
                      className={`rounded-lg px-2.5 sm:px-3 py-1 font-bold transition cursor-pointer ${
                        activeCodeTab === 'engineer'
                          ? 'bg-[#2563EB] text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      engineer
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCodeTab('stack')}
                      className={`rounded-lg px-2.5 sm:px-3 py-1 font-bold transition cursor-pointer ${
                        activeCodeTab === 'stack'
                          ? 'bg-[#2563EB] text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      stack
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCodeTab('metrics')}
                      className={`rounded-lg px-2.5 sm:px-3 py-1 font-bold transition cursor-pointer ${
                        activeCodeTab === 'metrics'
                          ? 'bg-[#2563EB] text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      metrics
                    </button>
                  </div>
                </div>

                {/* Code Editor Body with stable minimum height for seamless tab switching */}
                <div className="mt-3 rounded-2xl bg-slate-950/90 border border-slate-800 p-3.5 sm:p-4 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto min-h-[190px] sm:min-h-[205px] flex flex-col justify-center">
                  {/* Tab 1: engineer */}
                  {activeCodeTab === 'engineer' && (
                    <pre className="text-slate-200">
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-cyan-300">engineer</span> = {'{\n'}
                      {'  '}<span className="text-slate-400">&quot;name&quot;</span>: <span className="text-emerald-300">&quot;Jitendra Yaduvanshi&quot;</span>,{'\n'}
                      {'  '}<span className="text-slate-400">&quot;role&quot;</span>: <span className="text-emerald-300">&quot;Backend Engineer&quot;</span>,{'\n'}
                      {'  '}<span className="text-slate-400">&quot;experience&quot;</span>: <span className="text-emerald-300">&quot;4+ Years&quot;</span>,{'\n'}
                      {'  '}<span className="text-slate-400">&quot;company&quot;</span>: <span className="text-emerald-300">&quot;Trigital Technologies&quot;</span>,{'\n'}
                      {'  '}<span className="text-slate-400">&quot;stack&quot;</span>: [<span className="text-amber-300">&quot;Node.js&quot;</span>, <span className="text-amber-300">&quot;TypeScript&quot;</span>, <span className="text-amber-300">&quot;NestJS&quot;</span>],{'\n'}
                      {'  '}<span className="text-slate-400">&quot;available&quot;</span>: <span className="text-cyan-400 font-bold">true</span>{'\n'}
                      {'}'}
                    </pre>
                  )}

                  {/* Tab 2: stack (Exact JSON structure from reference image) */}
                  {activeCodeTab === 'stack' && (
                    <pre className="text-slate-200">
                      {'{'}{'\n'}
                      {'  '}<span className="text-purple-400">&quot;frameworks&quot;</span>: [<span className="text-cyan-300">&quot;NestJS&quot;</span>, <span className="text-yellow-300">&quot;Express&quot;</span>, <span className="text-pink-300">&quot;Fastify&quot;</span>],{'\n'}
                      {'  '}<span className="text-purple-400">&quot;databases&quot;</span>: [<span className="text-cyan-300">&quot;PostgreSQL&quot;</span>, <span className="text-yellow-300">&quot;MongoDB&quot;</span>, <span className="text-pink-300">&quot;Prisma&quot;</span>],{'\n'}
                      {'  '}<span className="text-purple-400">&quot;caching&quot;</span>: [<span className="text-pink-300">&quot;Redis&quot;</span>, <span className="text-cyan-300">&quot;BullMQ&quot;</span>, <span className="text-yellow-300">&quot;Socket.IO&quot;</span>],{'\n'}
                      {'  '}<span className="text-purple-400">&quot;cloud&quot;</span>: [<span className="text-amber-300">&quot;AWS S3&quot;</span>, <span className="text-cyan-300">&quot;AWS SQS&quot;</span>]{'\n'}
                      {'}'}
                    </pre>
                  )}

                  {/* Tab 3: metrics (Exact 3-card metric rows from reference image) */}
                  {activeCodeTab === 'metrics' && (
                    <div className="space-y-2 sm:space-y-2.5 py-1">
                      {/* Experience */}
                      <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-3.5 py-2.5 flex items-center justify-between">
                        <span className="font-mono font-bold text-xs sm:text-sm text-slate-200">
                          Experience
                        </span>
                        <span className="font-mono font-bold text-xs sm:text-sm text-cyan-400">
                          4+ Years
                        </span>
                      </div>

                      {/* Completed Platforms */}
                      <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-3.5 py-2.5 flex items-center justify-between">
                        <span className="font-mono font-bold text-xs sm:text-sm text-slate-200">
                          Completed Platforms
                        </span>
                        <span className="font-mono font-bold text-xs sm:text-sm text-emerald-400">
                          6 Platforms
                        </span>
                      </div>

                      {/* Direct Phone */}
                      <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-3.5 py-2.5 flex items-center justify-between">
                        <span className="font-mono font-bold text-xs sm:text-sm text-slate-200">
                          Direct Phone
                        </span>
                        <a
                          href={`tel:${phone}`}
                          className="font-mono font-bold text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 transition"
                        >
                          +91 8349212145
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Editor Status Bar: Status + Location (Now non-wrapping on mobile) */}
                <div className="mt-3.5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] sm:text-xs font-mono">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="text-emerald-400 font-semibold whitespace-nowrap">
                      Status: Available for Hire
                    </span>
                  </div>
                  <span className="text-slate-400 whitespace-nowrap shrink-0">
                    Indore, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Box Metric Ribbon (5 Live Platforms with Lions Cricket!) */}
        <div className="mx-auto mt-8 sm:mt-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
            {/* Box 1 */}
            <div className="app-card flex flex-col items-center justify-center p-4 sm:p-5 text-center min-h-[125px] sm:min-h-[140px]">
              <span className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight leading-none">
                4+
              </span>
              <p className="mt-2 text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                Years Experience
              </p>
              <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-[#64748B] leading-tight">
                Backend &amp; Distributed
              </p>
            </div>

            {/* Box 2 */}
            <div className="app-card flex flex-col items-center justify-center p-4 sm:p-5 text-center min-h-[125px] sm:min-h-[140px]">
              <span className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight leading-none">
                5
              </span>
              <p className="mt-2 text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                Live Platforms
              </p>
              <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-[#64748B] leading-tight">
                Production Deployed
              </p>
            </div>

            {/* Box 3 */}
            <div className="app-card flex flex-col items-center justify-center p-4 sm:p-5 text-center min-h-[125px] sm:min-h-[140px]">
              <span className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight leading-none">
                100%
              </span>
              <p className="mt-2 text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                Node.js &amp; TS
              </p>
              <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-[#64748B] leading-tight">
                NestJS, APIs &amp; Cloud
              </p>
            </div>

            {/* Box 4 */}
            <div className="app-card flex flex-col items-center justify-center p-4 sm:p-5 text-center min-h-[125px] sm:min-h-[140px]">
              <span className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight leading-none">
                2x
              </span>
              <p className="mt-2 text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                Company Awards
              </p>
              <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-[#64748B] leading-tight">
                Excellence Honors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECRUITER & HR FAST-TRACK EXECUTIVE SUMMARY SECTION */}
      <section id="recruiter-summary" className="section relative z-10 border-t border-slate-200/80 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="app-card border-t-4 border-t-[#2563EB] p-4 sm:p-7 lg:p-8 shadow-xl">
            {/* Header: Cleanly structured for mobile & desktop */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                {/* Badge placed above */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-[#2563EB] mb-2.5 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-[#2563EB]" />
                  <span>Quick Recruiter &amp; HR Overview</span>
                </div>

                {/* Icon & Title directly aligned */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] border border-blue-200 shadow-sm">
                    <UserCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-tight">
                    Candidate Snapshot for <span className="text-[#2563EB]">Hiring Teams</span>
                  </h2>
                </div>
              </div>

              {/* Action Buttons: Symmetric 2-column on mobile, auto on sm+ */}
              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 w-full sm:w-auto mt-1 sm:mt-0 shrink-0">
                <a
                  href={`tel:${phone}`}
                  className="btn-primary-blue rounded-xl px-4 py-2.5 text-xs font-bold inline-flex items-center justify-center gap-1.5 shadow"
                >
                  <Phone className="h-3.5 w-3.5" /> Call Now
                </a>
                <a
                  href="/Jitendra-Yaduvanshi-Resume.pdf"
                  download="Jitendra-Yaduvanshi-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-blue rounded-xl px-4 py-2.5 text-xs font-bold inline-flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Download className="h-3.5 w-3.5" /> PDF Resume
                </a>
              </div>
            </div>

            {/* Recruiter Metrics Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 transition hover:bg-white hover:border-blue-200 hover:shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Notice Period</p>
                <p className="mt-1 text-base font-black text-emerald-700 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" /> Immediate / Flexible
                </p>
                <p className="mt-0.5 text-xs text-[#475569]">Ready to join immediately</p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 transition hover:bg-white hover:border-blue-200 hover:shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Current Employer</p>
                <p className="mt-1 text-base font-black text-[#0F172A] leading-snug">Trigital Technologies Pvt Ltd</p>
                <p className="mt-1 text-xs text-[#2563EB] font-semibold">Software Engineer (Backend) • 4+ Years</p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 transition hover:bg-white hover:border-blue-200 hover:shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Location &amp; Mobility</p>
                <p className="mt-1 text-base font-black text-[#0F172A] leading-snug">Indore, MP, India</p>
                <p className="mt-1 text-xs text-[#475569]">Open to Relocate / 100% Remote</p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 transition hover:bg-white hover:border-blue-200 hover:shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Highest Education</p>
                <p className="mt-1 text-base font-black text-[#0F172A] leading-snug">MBA — Information Technology</p>
                <p className="mt-1 text-xs text-[#475569]">DAVV Indore • Plus BCA in Computer Science</p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 transition hover:bg-white hover:border-blue-200 hover:shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Core Technical Stack</p>
                <p className="mt-1 text-sm sm:text-base font-bold text-[#0F172A] leading-snug">Node.js, NestJS, TypeScript, PostgreSQL</p>
                <p className="mt-1 text-xs text-[#475569]">MongoDB, Redis, BullMQ, Microservices, AWS</p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 transition hover:bg-white hover:border-blue-200 hover:shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Corporate Recognition</p>
                <p className="mt-1 text-base font-black text-[#0F172A] leading-snug">2 Verified Performance Awards</p>
                <p className="mt-0.5 text-xs text-amber-700 font-semibold">Excellence 2024 &amp; Appreciation 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section (Executive Canvas) */}
      <section id="about" className="section relative z-10 border-t border-slate-200/80 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Bio & Core Architecture Pillars */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
                About <span className="text-[#2563EB]">Me</span>
              </h2>
              <p className="mt-4 text-xs sm:text-base leading-relaxed text-[#475569] font-normal">
                I&apos;m a dedicated Software Engineer with 4+ years of professional backend experience at
                Trigital Technologies Pvt Ltd, specializing in Node.js, NestJS, TypeScript, PostgreSQL, and MongoDB.
                I focus on architecting resilient server-side systems, working with distributed teams, and turning complex product
                ideas into dependable, high-concurrency production platforms.
              </p>

              {/* 3 Core Architecture Pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="app-card p-4 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-[#2563EB]">
                    <Layers className="h-5 w-5" />
                    <span className="text-xs font-bold text-[#0F172A]">High Concurrency</span>
                  </div>
                  <p className="mt-2 text-[11px] text-[#64748B] leading-relaxed">
                    Sub-100ms microservices built with NestJS &amp; Node.js.
                  </p>
                </div>

                <div className="app-card p-4 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-[#2563EB]">
                    <Sparkles className="h-5 w-5" />
                    <span className="text-xs font-bold text-[#0F172A]">Async Pipelines</span>
                  </div>
                  <p className="mt-2 text-[11px] text-[#64748B] leading-relaxed">
                    Job queues &amp; event streaming with BullMQ, Kafka, and Redis.
                  </p>
                </div>

                <div className="app-card p-4 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-[#2563EB]">
                    <Code className="h-5 w-5" />
                    <span className="text-xs font-bold text-[#0F172A]">Data Integrity</span>
                  </div>
                  <p className="mt-2 text-[11px] text-[#64748B] leading-relaxed">
                    Optimized schemas, indexing, and ACID transactions in SQL &amp; NoSQL.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: "Engineering Focus" Highlight Card */}
            <div className="lg:col-span-5">
              <div className="app-card p-6 shadow-md relative overflow-hidden">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] border border-blue-200">
                  <Code className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-lg font-black text-[#0F172A]">
                  Engineering <span className="text-[#2563EB]">Focus</span>
                </h3>

                <ul className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-[#334155]">
                  {[
                    'Scalable Backend Microservices',
                    'REST APIs with OpenAPI / Swagger Documentation',
                    'Database Architecture & Query Optimization',
                    'Fault-Tolerant Distributed Queues & Real-Time Events',
                    'Docker Containerization & Cloud Deployments',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#2563EB] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section (Brand SVG Logos & Categorized Arsenal) */}
      <section id="skills" className="section relative z-10 border-t border-slate-200/80 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-[#2563EB]">
                <Layers className="h-3.5 w-3.5" /> Technical Arsenal
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
                Skills &amp; <span className="text-[#2563EB]">Technologies</span>
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                Categorized backend, databases, real-time queues, and cloud tools with official logos
              </p>
            </div>

            <span className="text-xs font-mono text-[#2563EB] font-bold">
              4 Core Domains • 30+ Enterprise Technologies
            </span>
          </div>

          {/* Categorized Skills Grid */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="app-card p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className={`h-2.5 w-2.5 rounded-full ${cat.accentDot}`} />
                      <h3 className="text-base sm:text-lg font-black text-[#0F172A]">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#2563EB] font-bold">
                      {cat.items.length} Skills
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                    {cat.tagline}
                  </p>

                  {/* Skills Pills with Official Brand Logos */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="skill-pill"
                      >
                        <skill.Logo />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section with Interactive Recruiter Tabs (5 Live Projects!) */}
      <section id="projects" className="section relative z-10 border-t border-slate-200/80 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs font-bold text-[#2563EB] mb-1">
                Portfolio Showcase
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
                Featured <span className="text-[#2563EB]">Projects</span>
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                Production platforms I&apos;ve built, architected, and scaled
              </p>
            </div>
            <span className="text-xs sm:text-sm font-mono text-[#2563EB] font-semibold">
              Tap &quot;Read More&quot; for full architecture details
            </span>
          </div>

          {/* HR & Recruiter Quick Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Projects', count: projects.length },
              { id: 'live', label: 'Live in Production', count: projects.filter((p) => p.liveUrl).length },
              { id: 'enterprise', label: 'Enterprise Microservices', count: projects.filter((p) => !p.liveUrl).length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setProjectFilter(tab.id as any)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition shadow-sm ${
                  projectFilter === tab.id
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-[#2563EB] hover:text-[#2563EB]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    projectFilter === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {filteredProjects.map((p, i) => (
              <article
                key={p.id}
                className="app-card flex flex-col justify-between p-5 sm:p-6 shadow-md"
              >
                <div>
                  {/* Project Header with Brand Icon Badge and Meta */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border font-black text-base shadow-sm ${p.iconBg}`}
                      >
                        {p.iconInitial}
                      </div>
                      <div>
                        <h3
                          onClick={() => setActiveModalProject(p)}
                          className="text-xl sm:text-2xl font-black text-[#0F172A] hover:text-[#2563EB] transition-colors leading-tight cursor-pointer"
                        >
                          {p.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#2563EB]">{p.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {p.liveUrl && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-emerald-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" /> Live
                        </span>
                      )}
                      <span className="rounded-lg bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-600 border border-slate-200">
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 text-xs font-semibold text-[#64748B] italic">{p.tagline}</p>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#334155]">
                    {p.shortDesc}
                  </p>

                  {/* Tech Tags preview */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="tag-tech"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tags.length > 5 && (
                      <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] text-slate-600">
                        +{p.tags.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons: Read More, Live Link, and Circular Arrow Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* READ MORE BUTTON */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveModalProject(p);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#2563EB] px-3.5 py-2 text-xs font-bold text-[#0F172A] hover:text-[#2563EB] transition shadow-sm cursor-pointer"
                    >
                      <Info className="h-3.5 w-3.5 text-[#2563EB]" />
                      <span>Read More</span>
                    </button>

                    {/* Live Link Button (if available) */}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-blue inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition shadow-md"
                      >
                        <span>Visit Live</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Circular Arrow Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveModalProject(p);
                    }}
                    aria-label={`View details for ${p.name}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#64748B] hover:border-[#2563EB] hover:bg-blue-50 hover:text-[#2563EB] transition shadow-sm cursor-pointer"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience, Education & Certifications Section */}
      <section id="experience" className="section relative z-10 border-t border-slate-200/80 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
              Experience &amp; <span className="text-[#2563EB]">Credentials</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
              Professional journey, corporate awards, and academic background
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 items-start">
            {/* Experience Timeline (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="flex items-center gap-2 text-lg sm:text-xl font-black text-[#0F172A]">
                <Briefcase className="h-5 w-5 text-[#2563EB]" /> Professional Journey
              </h3>

              <div className="space-y-6">
                {experiences.map((e) => (
                  <div
                    key={e.company}
                    className="relative border-l-2 border-blue-200 pl-5 sm:pl-7 pb-2"
                  >
                    <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#2563EB] ring-4 ring-blue-100" />

                    <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-[#0F172A]">{e.role}</h4>
                        <p className="text-xs sm:text-sm font-bold text-[#2563EB]">{e.company}</p>
                      </div>
                      <span className="text-[11px] font-mono text-[#64748B]">{e.period}</span>
                    </div>

                    <p className="mt-1.5 text-xs text-[#64748B] italic">{e.desc}</p>

                    <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-[#334155]">
                      {e.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Showcase (Col 5) */}
            <div id="certificates" className="lg:col-span-5 space-y-6">
              <div className="app-card p-5 sm:p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2 text-base sm:text-lg font-black text-[#0F172A]">
                    <Award className="h-5 w-5 text-[#2563EB]" /> Recognition &amp; Certifications
                  </h3>
                  <span className="rounded-full bg-blue-50 border border-blue-200 px-2 py-0.5 text-[10px] font-mono text-[#2563EB] font-bold">
                    2 Verified
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#64748B]">
                  Official corporate honors issued by Trigital Technologies Pvt Ltd
                </p>

                <div className="mt-5 space-y-4">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="group relative rounded-xl border border-slate-200 bg-white p-3.5 transition-all duration-300 hover:border-[#2563EB] hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className={`inline-block rounded-md border px-2 py-0.5 text-[10px] font-bold ${cert.tagClass}`}>
                            {cert.badge}
                          </span>
                          <h4 className="mt-1 text-xs sm:text-sm font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-[11px] font-semibold text-[#64748B]">{cert.issuer}</p>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#64748B] shrink-0">
                          {cert.date}
                        </span>
                      </div>

                      {/* Certificate Thumbnail Preview */}
                      <div
                        onClick={() => setActiveModalCertificate(cert)}
                        className="mt-2.5 relative cursor-pointer overflow-hidden rounded-lg border border-slate-200 bg-white group/thumb shadow-sm"
                        title="Click to view full certificate"
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="h-28 sm:h-32 w-full object-cover object-top transition-transform duration-300 group-hover/thumb:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end justify-between p-2">
                          <span className="text-[9px] font-semibold text-white italic truncate max-w-[150px]">
                            {cert.signatory}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded bg-white border border-slate-200 px-1.5 py-0.5 text-[9px] font-bold text-[#2563EB] backdrop-blur-sm group-hover/thumb:bg-[#2563EB] group-hover/thumb:text-white transition">
                            <Sparkles className="h-2.5 w-2.5" /> Enlarge
                          </span>
                        </div>
                      </div>

                      <p className="mt-2 text-[11px] text-[#475569] leading-relaxed">
                        {cert.desc}
                      </p>

                      <div className="mt-3 pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActiveModalCertificate(cert);
                          }}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs font-bold text-[#0F172A] hover:text-[#2563EB] transition shadow-sm cursor-pointer"
                        >
                          <Info className="h-3 w-3 text-[#2563EB]" />
                          <span>View Certificate</span>
                        </button>

                        <a
                          href={cert.pdf}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-blue-50 hover:bg-[#2563EB] hover:text-white border border-blue-200 px-2.5 py-1 text-xs font-bold text-[#2563EB] transition"
                        >
                          <Download className="h-3 w-3" />
                          <span>PDF Download</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dedicated Full-Width Education & Academic Qualifications */}
          <div className="mt-8 app-card p-5 sm:p-6 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] border border-blue-200">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#0F172A]">
                    Education &amp; <span className="text-[#2563EB]">Academic Qualifications</span>
                  </h3>
                  <p className="text-xs text-[#64748B]">University degrees in Information Technology and Computer Applications</p>
                </div>
              </div>
              <span className="hidden sm:inline-flex rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[11px] font-bold text-[#2563EB]">
                Verified Degrees
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition hover:border-[#2563EB] hover:bg-white"
                >
                  <span className="rounded-md bg-white border border-slate-200 px-2 py-0.5 text-[10px] font-mono font-bold text-[#2563EB]">
                    {edu.year}
                  </span>
                  <h4 className="mt-2 text-sm sm:text-base font-black text-[#0F172A]">{edu.degree}</h4>
                  <p className="mt-0.5 text-xs text-[#2563EB] font-semibold">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (Executive Theme with Royal Blue CTAs) */}
      <section id="contact" className="section relative z-10 border-t border-slate-200/80 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="app-card relative overflow-hidden p-6 sm:p-12 text-center shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Let&apos;s Connect
            </span>

            <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A]">
              Ready to build <span className="text-[#2563EB]">high-performance</span> backends?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-base text-[#475569]">
              Looking for a backend engineer for APIs, microservices, payments, or cloud infrastructure?
              I am available for full-time opportunities and technical consultations.
            </p>

            {/* Primary Featured Phone Box */}
            <div className="mx-auto mt-6 w-full max-w-md rounded-2xl border border-blue-200 bg-blue-50/70 p-4 sm:p-5 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB]">Direct Contact Number</p>
              <div className="mt-1 flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 text-[#2563EB]" />
                <a
                  href={`tel:${phone}`}
                  className="text-xl sm:text-2xl font-black text-[#0F172A] hover:text-[#2563EB] transition tracking-wide"
                >
                  {formattedPhone}
                </a>
              </div>
              <div className="mt-3 flex justify-center gap-2">
                <a
                  href={`tel:${phone}`}
                  className="btn-primary-blue rounded-xl px-4 py-1.5 text-xs font-bold shadow-md"
                >
                  Call Now
                </a>
                <button
                  onClick={() => copyToClipboard(phone, 'Phone number')}
                  className="inline-flex items-center gap-1 rounded-xl border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold text-[#2563EB] hover:bg-blue-100 transition shadow-sm"
                >
                  <Copy className="h-3 w-3 text-[#2563EB]" /> Copy
                </button>
              </div>
            </div>

            {/* Action Contact Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2.5 sm:gap-3 w-full">
              <a
                href={`mailto:${email}`}
                className="btn-secondary-blue inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold shadow-sm"
              >
                <Mail className="h-4 w-4 text-[#2563EB]" />
                <span className="truncate">{email}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs sm:text-sm font-black text-slate-950 hover:bg-[#1ebd5a] transition shadow-md"
              >
                <MessageSquare className="h-4 w-4" /> WhatsApp Chat
              </a>

              <a
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-blue inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold shadow-sm"
              >
                <Linkedin className="h-4 w-4 text-[#2563EB]" /> LinkedIn
              </a>

              <a
                href={gitHub}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-blue inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold shadow-sm"
              >
                <Github className="h-4 w-4 text-[#2563EB]" /> GitHub
              </a>

              <a
                href="/Jitendra-Yaduvanshi-Resume.pdf"
                download="Jitendra-Yaduvanshi-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-blue inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>

            <p className="mt-6 text-[11px] sm:text-xs font-mono text-[#64748B]">
              📍 Based in Indore, India • Open for Remote Worldwide &amp; On-Site Opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/80 py-8 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 text-xs sm:text-sm text-[#64748B] sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white font-black text-xs">
              JY
            </span>
            <div>
              <span className="font-bold text-[#0F172A]">Jitendra Yaduvanshi</span>
              <span className="text-[#2563EB] ml-1.5">• Backend Developer</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-semibold">
            <a href={`tel:${phone}`} className="text-[#2563EB] hover:underline">
              {formattedPhone}
            </a>
            <a href={`mailto:${email}`} className="text-[#2563EB] hover:underline">
              {email}
            </a>
            <a href={gitHub} target="_blank" rel="noreferrer" className="text-[#64748B] hover:text-[#0F172A] transition">
              GitHub
            </a>
            <a href={linkedIn} target="_blank" rel="noreferrer" className="text-[#64748B] hover:text-[#0F172A] transition">
              LinkedIn
            </a>
          </div>

          <span className="text-[11px] text-[#64748B]">Built with passion • All Rights Reserved</span>
        </div>
      </footer>

      {/* Mobile Floating HR / Recruiter Action Bar */}
      <div className="fixed bottom-3 left-3 right-3 z-40 flex sm:hidden items-center justify-between gap-2 rounded-2xl bg-white/95 border border-slate-200 p-2 shadow-2xl backdrop-blur-md">
        <a
          href={`tel:${phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200 py-2.5 text-xs font-bold text-[#0F172A] shadow-sm"
        >
          <Phone className="h-3.5 w-3.5 text-[#2563EB]" />
          <span>Call</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-2.5 text-xs font-black text-slate-950 shadow-sm"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          <span>WhatsApp</span>
        </a>
        <a
          href="/Jitendra-Yaduvanshi-Resume.pdf"
          download="Jitendra-Yaduvanshi-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl btn-primary-blue py-2.5 text-xs font-bold shadow-md"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Resume</span>
        </a>
      </div>
    </main>
  );
}
