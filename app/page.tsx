'use client';

import { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Menu,
  X,
  Server,
  Database,
  Code2,
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
  ShieldCheck,
  Radio,
  Zap,
  Info,
} from 'lucide-react';

// Skills grouped by domain
const skillCategories = [
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'TypeScript', 'JavaScript', 'NestJS', 'Express.js', 'Fastify', 'Koa.js', 'REST APIs', 'Microservices', 'Swagger / OpenAPI'],
  },
  {
    category: 'Databases & Caching',
    items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Mongoose', 'MySQL', 'Redis', 'SQL'],
  },
  {
    category: 'Queues & Real-time',
    items: ['BullMQ', 'Socket.IO', 'Cron Jobs', 'Event-Driven Architecture', 'Webhooks'],
  },
  {
    category: 'Cloud, Auth & Tools',
    items: ['AWS S3', 'AWS SQS', 'AWS IVS', 'JWT', 'RBAC', 'Zod', 'Jest', 'Git', 'GitLab', 'Postman'],
  },
];

const allSkills = skillCategories.flatMap((c) => c.items);

// Selected Projects with Live URLs & Full In-Depth Architecture Details
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
    highlights: [
      'Engineered real-time bidirectional status and event updates via Socket.IO and Redis pub/sub.',
      'Architected granular RBAC permissions, strict input validation with Zod, and automated API contract tests in Jest.',
      'Integrated AWS S3 for media storage, AWS SQS for asynchronous task queues, and AWS IVS for live video streaming.',
      'Designed transactional booking state machines covering host approvals, producer hiring threads, and crew confirmations.',
      'Implemented automated payout triggers and payment gateway webhooks for seamless marketplace billing.',
    ],
    tags: ['TypeScript', 'NestJS', 'Fastify', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Socket.IO', 'AWS SQS', 'AWS IVS'],
    accent: 'from-blue-600/30 via-cyan-600/20 to-slate-900',
    borderColor: 'border-blue-400',
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
    highlights: [
      'Developed decoupled microservices with standardized REST and event-driven communication protocols.',
      'Designed property lifecycle state management: listing, inspection, tenant discovery, lease drafting, and digital signing.',
      'Optimized MongoDB aggregation pipelines and indexing to deliver sub-100ms multi-filter property searches.',
      'Built automated broker commission calculation engines and transactional ledger audit logs.',
      'Integrated real-time notification pipelines for lease status updates via Socket.IO and AWS services.',
    ],
    tags: ['Microservices', 'Node.js', 'Koa.js', 'MongoDB', 'Socket.IO', 'TypeScript', 'AWS'],
    accent: 'from-emerald-600/30 via-teal-600/20 to-slate-900',
    borderColor: 'border-emerald-400',
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
    highlights: [
      'Built automated payment gateway integrations with idempotency keys and cryptographic webhook validation.',
      'Engineered fault-tolerant background cron workers for recurring subscription billing and ledger reconciliation.',
      'Implemented secure OAuth 2.0 social authentication and token-based session management.',
      'Created real-time balance and transaction update feeds over Socket.IO.',
    ],
    tags: ['Node.js', 'Koa.js', 'MongoDB', 'Socket.IO', 'Payment Gateway', 'Cron Jobs', 'AWS'],
    accent: 'from-violet-600/30 via-purple-600/20 to-slate-900',
    borderColor: 'border-violet-400',
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
    liveUrl: null,
    liveLabel: null,
    highlights: [
      'Orchestrated multi-step LLM API prompting pipelines with streaming response handlers.',
      'Designed dynamic schema generation and instant database provisioning micro-workflows.',
      'Handled asynchronous background build jobs using robust message queues to eliminate frontend timeouts.',
      'Collaborated closely with frontend developers to optimize end-to-end generation latency.',
    ],
    tags: ['Node.js', 'Koa.js', 'TypeScript', 'LLM Integration', 'REST APIs', 'Async Queues'],
    accent: 'from-cyan-600/30 via-teal-600/20 to-slate-900',
    borderColor: 'border-cyan-400',
  },
  {
    id: 'nipige',
    name: 'Nipige App',
    role: 'Backend Developer',
    type: 'Provider Platform Microservices',
    tagline: 'High-throughput provider API ecosystem',
    shortDesc: 'Provider platform microservices, high-throughput APIs, and third-party integrations delivering reliable backend workflows.',
    fullDesc:
      'Nipige is a service provider platform operating across a multi-tier service network. I engineered backend microservices, data synchronization pipelines, and third-party integrations with a focus on data consistency and high uptime.',
    liveUrl: null,
    liveLabel: null,
    highlights: [
      'Created modular microservice modules with consistent error-handling and logging wrappers.',
      'Engineered high-throughput data sync pipelines connecting MongoDB with external provider systems.',
      'Implemented automated batch data processing and report generation routines.',
    ],
    tags: ['MongoDB', 'TypeScript', 'Web API', 'Koa.js', 'Microservices'],
    accent: 'from-amber-600/30 via-orange-600/20 to-slate-900',
    borderColor: 'border-amber-400',
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
    highlights: [
      'Handled bidirectional device communication over Socket.IO with heartbeat health checks.',
      'Built telemetry logging and energy consumption analytics endpoints.',
      'Integrated real-time push alerts for appliance error codes and maintenance warnings.',
    ],
    tags: ['Koa.js', 'Socket.IO', 'MongoDB', 'TypeScript', 'AWS'],
    accent: 'from-rose-600/30 via-pink-600/20 to-slate-900',
    borderColor: 'border-rose-400',
  },
];

// Experience
const experiences = [
  {
    company: 'Trigital Technologies Pvt Ltd',
    role: 'Backend Developer',
    period: 'Apr 2022 – Present',
    badge: 'Current Role (3+ Years)',
    points: [
      'Build and maintain scalable backend services, microservices, and REST APIs using Node.js and TypeScript.',
      'Develop end-to-end business workflows with NestJS, PostgreSQL, Prisma, MongoDB, Redis, and Socket.IO.',
      'Architect marketplace workflows: producer applications, hiring threads, crew assignment, booking states, and payments.',
      'Design authentication, RBAC, request validation with Zod, database indexes, and payment gateway webhooks.',
      'Collaborate closely with frontend & mobile developers to deliver seamless end-to-end product features.',
      'Awarded Certificate of Excellence and Certificate of Appreciation for outstanding backend performance.',
    ],
  },
  {
    company: 'Integer Info Solutions Pvt Ltd',
    role: 'JavaScript Developer',
    period: 'Jan 2022 – Jun 2022',
    badge: 'Previous',
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
    accentColor: 'border-amber-400/70',
    tagClass: 'bg-amber-500/20 text-amber-300 border-amber-400',
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
    accentColor: 'border-blue-400/70',
    tagClass: 'bg-blue-500/20 text-blue-300 border-blue-400',
  },
];

// Education & Honors
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
  const [activeTab, setActiveTab] = useState<'engineer' | 'stack' | 'metrics'>('engineer');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('All');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeModalProject, setActiveModalProject] = useState<typeof projects[0] | null>(null);
  const [activeModalCertificate, setActiveModalCertificate] = useState<typeof certificates[0] | null>(null);

  const phone = '8349212145';
  const formattedPhone = '+91 8349212145';
  const email = 'jitendrayaduvanshi3289@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/jitendra-yaduvanshi-48b2051ba';
  const gitHub = 'https://github.com/jeetyadav2210';
  const whatsappUrl = `https://wa.me/918349212145?text=${encodeURIComponent(
    'Hi Jitendra, I reviewed your backend portfolio and would like to discuss an opportunity!'
  )}`;

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
        setActiveModalCertificate(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(`${label} copied!`);
    setTimeout(() => setCopiedText(null), 3000);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' },
  ];

  const displayedSkills =
    selectedSkillCategory === 'All'
      ? allSkills
      : skillCategories.find((c) => c.category === selectedSkillCategory)?.items || allSkills;

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#070c18] text-slate-100 selection:bg-blue-500 selection:text-white">
      {/* Toast Notification */}
      {copiedText && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl border-2 border-emerald-400 bg-slate-900 px-5 py-3 text-sm font-black text-emerald-300 shadow-2xl backdrop-blur-xl animate-bounce max-w-[90vw]">
          <Check className="h-5 w-5 text-emerald-400 shrink-0" />
          <span className="truncate">{copiedText}</span>
        </div>
      )}

      {/* 1. PROJECT DETAILS READ-MORE MODAL (Interactive Popup) */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-4 backdrop-blur-md transition-opacity"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border-2 border-slate-700 bg-[#0d162a] p-5 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-2 pr-10">
              <span className="rounded-full bg-blue-500/20 border border-blue-400 px-3 py-0.5 text-xs font-bold text-blue-300">
                {activeModalProject.role}
              </span>
              <span className="rounded-full bg-slate-800 border border-slate-700 px-3 py-0.5 text-xs font-semibold text-slate-300">
                {activeModalProject.type}
              </span>
              {activeModalProject.liveUrl && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400 px-2.5 py-0.5 text-xs font-bold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live in Production
                </span>
              )}
            </div>

            <h3 className="mt-3 text-2xl sm:text-3xl font-black text-white">
              {activeModalProject.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-blue-300 italic mt-0.5">
              {activeModalProject.tagline}
            </p>

            {/* In-depth Overview */}
            <div className="mt-5 border-t border-slate-800 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Architecture Overview</h4>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-200">
                {activeModalProject.fullDesc}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="mt-5 border-t border-slate-800 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Engineering Highlights</h4>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-200">
                {activeModalProject.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span className="leading-snug">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Tech Stack */}
            <div className="mt-5 border-t border-slate-800 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technology Stack</h4>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {activeModalProject.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-slate-700 bg-slate-800/90 px-2.5 py-1 text-xs font-semibold text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-7 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              {activeModalProject.liveUrl ? (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-blue-500 transition shadow-lg"
                >
                  Visit Live Application <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <span className="text-xs text-slate-400 font-mono">Enterprise / Production Microservice</span>
              )}

              <button
                onClick={() => setActiveModalProject(null)}
                className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-200 hover:bg-slate-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. CERTIFICATE LIGHTBOX MODAL (Interactive Popup for Viewing Certificates) */}
      {activeModalCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-5 backdrop-blur-md transition-opacity"
          onClick={() => setActiveModalCertificate(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl border-2 border-slate-700 bg-[#0b1329] p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalCertificate(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition shadow-lg"
              aria-label="Close certificate modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-2 pr-10">
              <span className={`rounded-full border px-3 py-0.5 text-xs font-bold ${activeModalCertificate.tagClass}`}>
                {activeModalCertificate.badge}
              </span>
              <span className="rounded-full bg-slate-800 border border-slate-700 px-3 py-0.5 text-xs font-semibold text-slate-300">
                {activeModalCertificate.issuer}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Issued: {activeModalCertificate.date}
              </span>
            </div>

            <h3 className="mt-2.5 text-xl sm:text-2xl font-black text-white">
              {activeModalCertificate.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Signed by {activeModalCertificate.signatory}
            </p>

            {/* High-Resolution Certificate Image Preview */}
            <div className="mt-4 overflow-hidden rounded-xl border-2 border-slate-700 bg-black/60 shadow-inner flex items-center justify-center p-1 sm:p-2">
              <img
                src={activeModalCertificate.image}
                alt={`${activeModalCertificate.title} - Jitendra Yaduvanshi`}
                className="max-h-[62vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            <p className="mt-3.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
              {activeModalCertificate.desc}
            </p>

            {/* Modal Footer Actions */}
            <div className="mt-5 pt-3.5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <a
                href={activeModalCertificate.pdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-5 py-2.5 text-xs sm:text-sm font-black text-slate-950 transition shadow-lg"
              >
                <Download className="h-4 w-4" /> Download Official PDF
              </a>

              <button
                onClick={() => setActiveModalCertificate(null)}
                className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-200 hover:bg-slate-700 transition"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Ambient Background Lights */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#070c18]">
        <div className="absolute -top-32 left-1/4 h-[350px] w-[350px] sm:h-[550px] sm:w-[550px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 h-[350px] w-[350px] sm:h-[600px] sm:w-[600px] rounded-full bg-violet-600/15 blur-[130px]" />
        <div className="absolute bottom-10 left-10 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-cyan-600/12 blur-[120px]" />
      </div>

      {/* Top Banner (Desktop Only) */}
      <div className="hidden border-b border-slate-800 bg-[#0b1329] px-4 sm:px-6 py-2 text-xs text-slate-200 sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-2 font-bold text-emerald-400">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Full-time Senior Backend Roles
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <MapPin className="h-3.5 w-3.5 text-blue-400" />
              Indore, India
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 font-bold text-emerald-400 hover:text-emerald-300 transition"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="text-white font-extrabold">{formattedPhone}</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 font-medium text-slate-200 hover:text-blue-300 transition"
            >
              <Mail className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-white font-semibold">{email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#070c18]/95 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 sm:h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo with High-Res Avatar */}
          <a href="#home" className="group flex items-center gap-3 font-black tracking-tight text-white">
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-xl border-2 border-blue-400 p-[1px] shadow-glow">
              <img
                src="/jitendra-profile.jpg"
                alt="Jitendra Yaduvanshi"
                className="h-full w-full object-cover rounded-[9px]"
              />
            </div>
            <div>
              <span className="text-base sm:text-xl font-black tracking-tight">
                Jitendra<span className="text-blue-400">.dev</span>
              </span>
              <p className="text-[9px] sm:text-[10px] font-mono text-slate-300 uppercase tracking-widest leading-none font-bold">
                Backend Engineer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-bold text-slate-200 hover:text-blue-400 transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-400 bg-emerald-950 px-4 py-2 text-xs font-black text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all shadow-md"
            >
              <Phone className="h-3.5 w-3.5" />
              {formattedPhone}
            </a>

            <a
              href="/Jitendra-Yaduvanshi-Resume.pdf"
              download="Jitendra-Yaduvanshi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-xs font-black text-white hover:bg-blue-500 shadow-glow transition-all"
            >
              <Download className="h-3.5 w-3.5" /> Resume (PDF)
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 text-slate-200 hover:text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="border-t border-slate-800 bg-[#091124] px-5 py-5 md:hidden backdrop-blur-2xl">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  onClick={() => setOpen(false)}
                  href={`#${item.id}`}
                  className="text-base font-bold text-slate-100 hover:text-white transition py-1"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-black text-white shadow-lg"
                >
                  <Phone className="h-4 w-4" /> Call: {formattedPhone}
                </a>

                <a
                  href="/Jitendra-Yaduvanshi-Resume.pdf"
                  download="Jitendra-Yaduvanshi-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-black text-white shadow-glow"
                >
                  <Download className="h-4 w-4" /> Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - 100% Mobile Friendly & Restructured */}
      <section id="home" className="grid-bg relative pt-6 sm:pt-12 pb-12 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (Full width on mobile, Col 7 on desktop) */}
            <div className="w-full lg:col-span-7 min-w-0">
              {/* Badges */}
              <div className="mb-4 sm:mb-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-blue-400 bg-blue-950 px-3.5 py-1 text-xs font-bold text-blue-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Backend Engineer • 4+ Yrs Exp
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-200">
                  <MapPin className="h-3 w-3 text-blue-400" /> Indore, India
                </span>
              </div>

              {/* Title with ZERO awkward wrapping */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                Hi, I&apos;m <span className="keep-together text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">Jitendra Yaduvanshi</span>
              </h1>

              <p className="mt-2.5 sm:mt-3 text-base sm:text-xl font-bold text-blue-300 leading-snug">
                Node.js • TypeScript • NestJS • REST APIs • Microservices
              </p>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
                Senior Backend Engineer with 4+ years of hands-on experience building high-throughput
                REST APIs, event-driven microservices, payment gateways, and real-time platforms. Proven
                expertise across PostgreSQL, Prisma, MongoDB, Redis, BullMQ, and AWS infrastructure.
              </p>

              {/* Action Buttons: Clean 2-column grid on mobile, row on tablet/desktop */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-2.5 sm:gap-3 w-full">
                {/* Call Button */}
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl sm:rounded-full bg-emerald-600 px-4 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg ring-2 ring-emerald-400 hover:bg-emerald-500 transition text-center"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>Call: {formattedPhone}</span>
                </a>

                {/* View Projects */}
                <a
                  href="#projects"
                  className="flex items-center justify-center gap-2 rounded-xl sm:rounded-full bg-blue-600 px-4 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg ring-2 ring-blue-400 hover:bg-blue-500 transition text-center"
                >
                  <span>Featured Projects</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>

                {/* Download Resume */}
                <a
                  href="/Jitendra-Yaduvanshi-Resume.pdf"
                  download="Jitendra-Yaduvanshi-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl sm:rounded-full bg-slate-900 px-4 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-extrabold text-white border-2 border-blue-400 hover:bg-blue-600 shadow-md transition text-center"
                >
                  <Download className="h-4 w-4 shrink-0 text-blue-400" />
                  <span>Download CV (PDF)</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl sm:rounded-full bg-[#25D366] px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm font-black text-slate-950 ring-2 ring-emerald-300 hover:bg-[#1ebd5a] shadow-md transition text-center"
                >
                  <MessageSquare className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Direct Copy Bar */}
              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2.5 w-full">
                <button
                  onClick={() => copyToClipboard(phone, 'Phone number')}
                  className="w-full sm:w-auto flex items-center justify-between gap-3 rounded-xl border-2 border-emerald-500/70 bg-slate-900 px-4 py-2.5 font-bold text-white hover:bg-slate-800 transition text-xs shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="font-extrabold">{formattedPhone}</span>
                  </div>
                  <span className="rounded bg-emerald-500/20 border border-emerald-400 px-2 py-0.5 text-[10px] text-emerald-300 font-mono font-bold shrink-0">
                    Copy Phone
                  </span>
                </button>

                <button
                  onClick={() => copyToClipboard(email, 'Email address')}
                  className="w-full sm:w-auto flex items-center justify-between gap-3 rounded-xl border-2 border-blue-500/70 bg-slate-900 px-4 py-2.5 font-bold text-white hover:bg-slate-800 transition text-xs shadow-sm"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Mail className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                    <span className="font-extrabold truncate max-w-[190px] sm:max-w-none">{email}</span>
                  </div>
                  <span className="rounded bg-blue-500/20 border border-blue-400 px-2 py-0.5 text-[10px] text-blue-300 font-mono font-bold shrink-0">
                    Copy Email
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Profile Spotlight & Interactive Terminal (Col 5) */}
            <div className="w-full lg:col-span-5 min-w-0">
              <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-slate-700/80 shadow-2xl overflow-hidden bg-[#0c1427]">
                {/* Profile Card Header with 520x520 High-Res Picture */}
                <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                  <div className="relative shrink-0">
                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl p-[2.5px] bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 shadow-xl shadow-blue-500/30">
                      <img
                        src="/jitendra-profile.jpg"
                        alt="Jitendra Yaduvanshi - Backend Engineer"
                        className="h-full w-full object-cover rounded-[13px]"
                      />
                    </div>
                    <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#070c18] border border-slate-800">
                      <span className="h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-emerald-400/40 animate-pulse" />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-black text-white truncate">Jitendra Yaduvanshi</h3>
                      <span className="rounded-full bg-blue-500/30 border border-blue-400 px-2 py-0.5 text-[10px] font-black text-blue-300 shrink-0">
                        Verified
                      </span>
                    </div>
                    <p className="text-xs font-bold text-blue-400 truncate mt-0.5">Software Engineer</p>
                    <p className="text-xs text-slate-300 truncate">Trigital Technologies • 4+ Yrs</p>
                    <a
                      href={`tel:${phone}`}
                      className="mt-1 inline-flex items-center gap-1 text-xs font-extrabold text-emerald-400 hover:text-emerald-300 underline"
                    >
                      <Phone className="h-3 w-3" /> {formattedPhone}
                    </a>
                  </div>
                </div>

                {/* Terminal Tabs */}
                <div className="mt-3.5 mb-3 flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span className="ml-1.5 font-mono text-xs text-slate-300 font-bold">profile.ts</span>
                  </div>

                  <div className="flex items-center gap-1 rounded-xl bg-slate-950 p-1 text-[11px] font-mono border border-slate-800">
                    <button
                      onClick={() => setActiveTab('engineer')}
                      className={`rounded-lg px-2.5 py-0.5 transition font-bold ${
                        activeTab === 'engineer' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      engineer
                    </button>
                    <button
                      onClick={() => setActiveTab('stack')}
                      className={`rounded-lg px-2.5 py-0.5 transition font-bold ${
                        activeTab === 'stack' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      stack
                    </button>
                    <button
                      onClick={() => setActiveTab('metrics')}
                      className={`rounded-lg px-2.5 py-0.5 transition font-bold ${
                        activeTab === 'metrics' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      metrics
                    </button>
                  </div>
                </div>

                {/* Tab 1 */}
                {activeTab === 'engineer' && (
                  <div className="space-y-1.5 font-mono text-xs leading-relaxed text-slate-100 overflow-x-auto">
                    <p>
                      <span className="text-violet-400 font-bold">const</span>{' '}
                      <span className="text-cyan-300 font-bold">engineer</span> = {'{'}
                    </p>
                    <p className="pl-4 text-slate-200">
                      name: <span className="text-emerald-300 font-semibold">&quot;Jitendra Yaduvanshi&quot;</span>,
                    </p>
                    <p className="pl-4 text-slate-200">
                      role: <span className="text-blue-300 font-bold">&quot;Backend Engineer&quot;</span>,
                    </p>
                    <p className="pl-4 text-slate-200">
                      experience: <span className="text-amber-300 font-bold">&quot;4+ Years&quot;</span>,
                    </p>
                    <p className="pl-4 text-slate-200">
                      company: <span className="text-violet-300">&quot;Trigital Technologies&quot;</span>,
                    </p>
                    <p className="pl-4 text-slate-200">
                      stack: [<span className="text-amber-300">&quot;Node.js&quot;</span>,{' '}
                      <span className="text-amber-300">&quot;TypeScript&quot;</span>,{' '}
                      <span className="text-amber-300">&quot;NestJS&quot;</span>],
                    </p>
                    <p className="pl-4 text-slate-200">
                      available: <span className="text-emerald-400 font-bold">true</span>
                    </p>
                    <p>{'}'}</p>

                    <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                      <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        Status: Available for Hire
                      </span>
                      <span className="text-slate-300 font-semibold">Indore, India</span>
                    </div>
                  </div>
                )}

                {/* Tab 2 */}
                {activeTab === 'stack' && (
                  <div className="space-y-1 font-mono text-xs leading-relaxed text-slate-100 overflow-x-auto">
                    <p className="text-slate-300">{'{'}</p>
                    <p className="pl-4 text-slate-200">
                      <span className="text-violet-400 font-bold">&quot;frameworks&quot;</span>: [
                      <span className="text-cyan-300">&quot;NestJS&quot;</span>, <span className="text-cyan-300">&quot;Express&quot;</span>, <span className="text-cyan-300">&quot;Fastify&quot;</span>],
                    </p>
                    <p className="pl-4 text-slate-200">
                      <span className="text-violet-400 font-bold">&quot;databases&quot;</span>: [
                      <span className="text-amber-300">&quot;PostgreSQL&quot;</span>, <span className="text-amber-300">&quot;MongoDB&quot;</span>, <span className="text-amber-300">&quot;Prisma&quot;</span>],
                    </p>
                    <p className="pl-4 text-slate-200">
                      <span className="text-violet-400 font-bold">&quot;caching&quot;</span>: [
                      <span className="text-rose-300">&quot;Redis&quot;</span>, <span className="text-rose-300">&quot;BullMQ&quot;</span>, <span className="text-rose-300">&quot;Socket.IO&quot;</span>],
                    </p>
                    <p className="pl-4 text-slate-200">
                      <span className="text-violet-400 font-bold">&quot;cloud&quot;</span>: [
                      <span className="text-emerald-300">&quot;AWS S3&quot;</span>, <span className="text-emerald-300">&quot;AWS SQS&quot;</span>]
                    </p>
                    <p className="text-slate-300">{'}'}</p>
                  </div>
                )}

                {/* Tab 3 */}
                {activeTab === 'metrics' && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-2.5 flex justify-between items-center">
                      <span className="text-slate-300 font-bold">Experience</span>
                      <span className="font-extrabold text-blue-400">4+ Years</span>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-2.5 flex justify-between items-center">
                      <span className="text-slate-300 font-bold">Completed Platforms</span>
                      <span className="font-extrabold text-emerald-400">6 Platforms</span>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-2.5 flex justify-between items-center">
                      <span className="text-slate-300 font-bold">Direct Phone</span>
                      <a href={`tel:${phone}`} className="font-black text-emerald-300 underline">
                        {formattedPhone}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4-Box Metric Ribbon - Perfectly Aligned, Uniform Height, Zero-Overflow */}
        <div className="mx-auto mt-12 sm:mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
            {/* Box 1 */}
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-cyan-400/60 bg-[#0d162a] p-4 sm:p-5 text-center shadow-xl hover:border-cyan-400 transition min-h-[130px] sm:min-h-[145px]">
              <span className="text-3xl sm:text-4xl font-black text-cyan-300 tracking-tight leading-none">
                4+
              </span>
              <p className="mt-2 text-xs sm:text-sm font-extrabold text-white leading-tight">
                Years Experience
              </p>
              <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-slate-300 leading-tight">
                Backend &amp; Distributed
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-blue-400/60 bg-[#0d162a] p-4 sm:p-5 text-center shadow-xl hover:border-blue-400 transition min-h-[130px] sm:min-h-[145px]">
              <span className="text-3xl sm:text-4xl font-black text-blue-300 tracking-tight leading-none">
                6+
              </span>
              <p className="mt-2 text-xs sm:text-sm font-extrabold text-white leading-tight">
                Live Platforms
              </p>
              <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-slate-300 leading-tight">
                Production Projects
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-emerald-400/60 bg-[#0d162a] p-4 sm:p-5 text-center shadow-xl hover:border-emerald-400 transition min-h-[130px] sm:min-h-[145px]">
              <span className="text-3xl sm:text-4xl font-black text-emerald-300 tracking-tight leading-none">
                100%
              </span>
              <p className="mt-2 text-xs sm:text-sm font-extrabold text-white leading-tight">
                Node.js &amp; TS
              </p>
              <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-slate-300 leading-tight">
                NestJS, APIs &amp; Cloud
              </p>
            </div>

            {/* Box 4 */}
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-amber-400/60 bg-[#0d162a] p-4 sm:p-5 text-center shadow-xl hover:border-amber-400 transition min-h-[130px] sm:min-h-[145px]">
              <span className="text-3xl sm:text-4xl font-black text-amber-300 tracking-tight leading-none">
                2x
              </span>
              <p className="mt-2 text-xs sm:text-sm font-extrabold text-white leading-tight">
                Company Awards
              </p>
              <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-slate-300 leading-tight">
                Excellence Honors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-900/40 px-3.5 py-1 text-xs font-bold text-blue-300">
              <Sparkles className="h-3.5 w-3.5" /> 01 / About Me
            </div>
            <h2 className="mt-3.5 text-2xl sm:text-4xl font-black tracking-tight text-white">
              Building resilient, scalable backend architectures.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
              Software Engineer with 4+ years of professional backend experience based in Indore, India.
              I specialize in designing high-throughput REST APIs, microservices, payment gateways, and
              database models that power complex real-world businesses.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-bold">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition"
              >
                <Phone className="h-4 w-4" /> {formattedPhone}
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition truncate max-w-[240px] sm:max-w-none"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="truncate">{email}</span>
              </a>
            </div>
          </div>

          <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
            {[
              {
                icon: Server,
                title: 'High-Throughput APIs',
                desc: 'Fast, secure, and documented REST APIs built with NestJS, Fastify, Express, and Swagger.',
              },
              {
                icon: Database,
                title: 'Database Design',
                desc: 'Schema modeling, indexing, and transactional integrity across PostgreSQL, Prisma, MongoDB, and Redis.',
              },
              {
                icon: Zap,
                title: 'Real-Time & Queues',
                desc: 'Asynchronous workers with BullMQ, scheduled cron automation, and live Socket.IO events.',
              },
              {
                icon: ShieldCheck,
                title: 'Security & Auth',
                desc: 'Fine-grained RBAC permissions, JWT authentication, and strict request validation with Zod.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card rounded-2xl p-5 bg-[#0c1427]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 border border-blue-400/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-base font-bold text-white">{title}</h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section border-y border-slate-800 bg-slate-900/50 py-12 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-900/40 px-3.5 py-1 text-xs font-bold text-blue-300">
                <Code2 className="h-3.5 w-3.5" /> 02 / Technical Skills
              </div>
              <h2 className="mt-3.5 text-2xl sm:text-4xl font-black tracking-tight text-white">
                Tools &amp; technologies.
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['All', 'Backend & APIs', 'Databases & Caching', 'Queues & Real-time', 'Cloud, Auth & Tools'].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedSkillCategory(cat)}
                    className={`rounded-full px-3 py-1 text-[11px] sm:text-xs font-bold transition ${
                      selectedSkillCategory === cat
                        ? 'bg-blue-600 text-white shadow-glow ring-2 ring-blue-400'
                        : 'border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Badges */}
          <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
            {displayedSkills.map((s) => (
              <span
                key={s}
                className="badge-tech rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold text-slate-100 shadow-md"
              >
                {s}
              </span>
            ))}
          </div>

          {/* 4 Category Boxes */}
          <div className="mt-10 sm:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((c) => (
              <div key={c.category} className="glass rounded-2xl p-5 border border-slate-800 bg-[#0c1427]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  <h3 className="font-bold text-white text-sm sm:text-base">{c.category}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-800 px-2.5 py-1 text-[11px] font-semibold text-slate-200 border border-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Compact Cards with "Read More" Modal Popup */}
      <section id="projects" className="section mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-900/40 px-3.5 py-1 text-xs font-bold text-blue-300">
              <Layers className="h-3.5 w-3.5" /> 03 / Selected Production Work
            </div>
            <h2 className="mt-3.5 text-2xl sm:text-4xl font-black tracking-tight text-white">
              Featured backend systems.
            </h2>
          </div>
          <span className="text-xs sm:text-sm font-mono text-blue-300 font-semibold">
            Tap &quot;Read More&quot; on any project for full architecture details
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-8 sm:mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={`group flex flex-col justify-between rounded-2xl sm:rounded-3xl border-2 ${p.borderColor} bg-gradient-to-br ${p.accent} p-5 sm:p-7 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-900 px-3 py-0.5 font-mono text-xs font-bold text-slate-200 border border-slate-700">
                    PROJ 0{i + 1}
                  </span>
                  <span className="text-xs font-bold text-blue-300">{p.role}</span>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-black uppercase tracking-widest text-blue-300">
                    {p.type}
                  </p>
                  {p.liveUrl && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/30 border border-emerald-400 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live in Production
                    </span>
                  )}
                </div>

                <h3 className="mt-1 text-xl sm:text-2xl font-black text-white group-hover:text-blue-300 transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs font-semibold text-slate-300 italic mt-0.5">{p.tagline}</p>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-200">
                  {p.shortDesc}
                </p>

                {/* Tech Tags preview */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-700 bg-slate-900/90 px-2 py-0.5 text-[11px] font-semibold text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tags.length > 5 && (
                    <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[11px] text-slate-400">
                      +{p.tags.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons: Read More & Live Link */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2.5">
                {/* READ MORE BUTTON (Opens popup modal) */}
                <button
                  onClick={() => setActiveModalProject(p)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 px-4 py-2.5 text-xs font-bold text-white transition shadow-sm"
                >
                  <Info className="h-3.5 w-3.5 text-blue-400" />
                  <span>Read More</span>
                </button>

                {/* Live Link Button (if available) */}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2.5 text-xs font-bold text-white transition shadow-md"
                  >
                    <span>Visit Live Application</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience, Education & Certifications Section */}
      <section id="experience" className="section border-y border-slate-800 bg-slate-900/50 py-12 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-900/40 px-3.5 py-1 text-xs font-bold text-blue-300">
            <Briefcase className="h-3.5 w-3.5" /> 04 / Experience &amp; Credentials
          </div>
          <h2 className="mt-3.5 text-2xl sm:text-4xl font-black tracking-tight text-white">
            Career journey &amp; background.
          </h2>

          <div className="mt-8 sm:mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            {/* Experience Timeline */}
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-lg sm:text-xl font-black text-white">
                <Briefcase className="h-5 w-5 text-blue-400" /> Professional Experience
              </h3>

              <div className="space-y-6">
                {experiences.map((e) => (
                  <div
                    key={e.company}
                    className="relative border-l-2 border-blue-500/60 pl-5 sm:pl-7 pb-2"
                  >
                    <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-500/40" />

                    <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                      <div>
                        <h4 className="text-base sm:text-xl font-black text-white">{e.role}</h4>
                        <p className="text-sm sm:text-base font-bold text-blue-300">{e.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-blue-500/30 border border-blue-400 px-2.5 py-0.5 text-[10px] font-bold text-blue-200">
                          {e.badge}
                        </span>
                        <span className="text-[11px] font-mono text-slate-300">{e.period}</span>
                      </div>
                    </div>

                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-200">
                      {e.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education Card */}
              <div className="mt-8 glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-slate-700 bg-[#0c1427]">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-black text-white">
                  <GraduationCap className="h-5 w-5 text-blue-400" /> Education
                </h3>
                <div className="mt-3.5 space-y-3">
                  {education.map((edu) => (
                    <div key={edu.degree} className="border-b border-slate-800 pb-2.5 last:border-0 last:pb-0">
                      <p className="text-xs sm:text-sm font-bold text-white">{edu.degree}</p>
                      <p className="text-[11px] sm:text-xs text-blue-300 font-bold">{edu.school}</p>
                      <p className="mt-0.5 font-mono text-[10px] sm:text-xs text-slate-300 font-semibold">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications & Awards Column - REDESIGNED with Verified Images & Lightbox */}
            <div id="certificates" className="space-y-6">
              <div className="rounded-2xl sm:rounded-3xl border-2 border-amber-500/40 bg-[#0d162a] p-5 sm:p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2 text-base sm:text-lg font-black text-amber-300">
                    <Award className="h-5 w-5 text-amber-400" /> Recognition &amp; Certifications
                  </h3>
                  <span className="rounded-full bg-amber-500/20 border border-amber-400/50 px-2.5 py-0.5 text-[11px] font-mono text-amber-300 font-bold">
                    2 Verified
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  Official corporate awards issued by Trigital Technologies Pvt Ltd
                </p>

                <div className="mt-5 space-y-4">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className={`group relative rounded-2xl border-2 ${cert.accentColor} bg-[#080e1c] p-4 transition-all duration-300 hover:shadow-2xl`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className={`inline-block rounded-md border px-2 py-0.5 text-[10px] font-bold ${cert.tagClass}`}>
                            {cert.badge}
                          </span>
                          <h4 className="mt-1 text-sm sm:text-base font-black text-white group-hover:text-amber-300 transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-xs font-semibold text-slate-300">{cert.issuer}</p>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-slate-400 shrink-0">
                          {cert.date}
                        </span>
                      </div>

                      {/* Certificate Thumbnail Preview with Click to Zoom */}
                      <div
                        onClick={() => setActiveModalCertificate(cert)}
                        className="mt-3 relative cursor-pointer overflow-hidden rounded-xl border border-slate-700 bg-slate-950 group/thumb"
                        title="Click to view full certificate"
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="h-32 sm:h-36 w-full object-cover object-top transition-transform duration-300 group-hover/thumb:scale-105 opacity-90 group-hover/thumb:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end justify-between p-2.5">
                          <span className="text-[10px] font-semibold text-slate-300 italic truncate max-w-[170px]">
                            {cert.signatory}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-lg bg-black/80 border border-slate-600 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm group-hover/thumb:bg-amber-500 group-hover/thumb:text-black transition">
                            <Sparkles className="h-3 w-3" /> Enlarge
                          </span>
                        </div>
                      </div>

                      <p className="mt-2.5 text-[11px] sm:text-xs text-slate-200 leading-relaxed">
                        {cert.desc}
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
                        {/* VIEW CERTIFICATE BUTTON */}
                        <button
                          onClick={() => setActiveModalCertificate(cert)}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 px-3 py-1.5 text-xs font-bold text-white transition shadow-sm"
                        >
                          <Info className="h-3.5 w-3.5 text-amber-400" />
                          <span>View Certificate</span>
                        </button>

                        {/* PDF DOWNLOAD BUTTON */}
                        <a
                          href={cert.pdf}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500 hover:text-black border border-amber-400/50 px-3 py-1.5 text-xs font-bold text-amber-300 transition"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span>Download PDF</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] border-2 border-blue-400/50 bg-gradient-to-br from-blue-950/70 via-slate-900/95 to-[#070c18] p-6 sm:p-14 text-center shadow-2xl backdrop-blur-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-900/40 px-3.5 py-1 text-xs font-bold text-blue-300">
            <Radio className="h-3.5 w-3.5 text-emerald-400 animate-pulse" /> 05 / Let&apos;s Connect
          </div>

          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-black text-white">
            Ready to build high-performance backends?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-base text-slate-200">
            Looking for a senior backend engineer for APIs, microservices, payments, or cloud architecture?
            I am available for full-time opportunities and technical consultations.
          </p>

          {/* Primary Featured Phone Box */}
          <div className="mx-auto mt-7 w-full max-w-md rounded-2xl border-2 border-emerald-400 bg-emerald-950/90 p-5 sm:p-6 backdrop-blur-xl shadow-glow-emerald">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">Direct Contact Number</p>
            <div className="mt-1.5 flex items-center justify-center gap-2.5">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" />
              <a
                href={`tel:${phone}`}
                className="text-xl sm:text-3xl font-black text-white hover:text-emerald-300 transition tracking-wide"
              >
                {formattedPhone}
              </a>
            </div>
            <div className="mt-3.5 flex justify-center gap-2">
              <a
                href={`tel:${phone}`}
                className="rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-black text-white hover:bg-emerald-400 transition shadow-md"
              >
                Call Now
              </a>
              <button
                onClick={() => copyToClipboard(phone, 'Phone number')}
                className="inline-flex items-center gap-1 rounded-full border border-emerald-400 bg-emerald-900 px-3.5 py-1.5 text-xs font-bold text-emerald-200 hover:bg-emerald-800 transition"
              >
                <Copy className="h-3 w-3" /> Copy
              </button>
            </div>
          </div>

          {/* Action Contact Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2.5 sm:gap-3.5 w-full">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs sm:text-sm font-black text-slate-950 hover:bg-slate-200 transition shadow-lg w-full sm:w-auto"
            >
              <Mail className="h-4 w-4 text-blue-600" />
              <span className="truncate">{email}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs sm:text-sm font-black text-slate-950 ring-2 ring-emerald-300 hover:bg-[#1ebd5a] transition shadow-lg w-full sm:w-auto"
            >
              <MessageSquare className="h-4 w-4" /> WhatsApp Chat
            </a>

            <a
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-700 bg-slate-900 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:border-blue-400 transition w-full sm:w-auto"
            >
              <Linkedin className="h-4 w-4 text-blue-400" /> LinkedIn
            </a>

            <a
              href={gitHub}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-700 bg-slate-900 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:border-slate-500 transition w-full sm:w-auto"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>

            <a
              href="/Jitendra-Yaduvanshi-Resume.pdf"
              download="Jitendra-Yaduvanshi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-xs sm:text-sm font-black text-white hover:bg-blue-500 transition shadow-glow w-full sm:w-auto"
            >
              <Download className="h-4 w-4" /> Download Resume (PDF)
            </a>
          </div>

          <p className="mt-6 text-[11px] sm:text-xs font-mono text-slate-300 font-medium">
            📍 Based in Indore, India • Open for Remote Worldwide &amp; On-Site Opportunities
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 bg-[#040813]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 text-xs sm:text-sm text-slate-300 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-blue-400 shrink-0">
              <img
                src="/jitendra-profile.jpg"
                alt="Jitendra Yaduvanshi"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="font-black text-white">Jitendra Yaduvanshi</span>
              <span className="text-slate-400 ml-1.5">• Backend Engineer</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-bold">
            <a href={`tel:${phone}`} className="text-emerald-400 hover:underline">
              {formattedPhone}
            </a>
            <a href={`mailto:${email}`} className="text-blue-400 hover:underline">
              {email}
            </a>
            <a href={gitHub} target="_blank" rel="noreferrer" className="hover:text-white transition">
              GitHub
            </a>
            <a href={linkedIn} target="_blank" rel="noreferrer" className="hover:text-white transition">
              LinkedIn
            </a>
          </div>

          <span className="text-[11px] text-slate-400 font-medium">© {new Date().getFullYear()} All Rights Reserved</span>
        </div>
      </footer>
    </main>
  );
}
