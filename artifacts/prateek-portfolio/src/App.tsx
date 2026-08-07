import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpRight, Check, ChevronDown, Code2, Download, Linkedin, Mail, MapPin, Menu, Moon, Phone, Radio, Sun, Terminal, X } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { portfolioData, type Experience, type SkillGroup } from '@/data/portfolioData';

const queryClient = new QueryClient();
const navItems = [
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition hover:border-primary hover:text-primary" onClick={onToggle} aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'} data-testid="button-theme-toggle">
      {isDark ? <Sun size={16} strokeWidth={1.7} /> : <Moon size={16} strokeWidth={1.7} />}
    </button>
  );
}

function Navigation({ activeSection, isDark, onThemeToggle }: { activeSection: string; isDark: boolean; onThemeToggle: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigate = (id: string) => { scrollToSection(id); setOpen(false); };
  return (
    <header className={`nav-shell fixed inset-x-0 top-0 z-30 border-b border-transparent ${scrolled ? 'scrolled' : ''}`} data-testid="navigation">
      <div className="container-wide flex h-[72px] items-center justify-between">
        <button onClick={() => navigate('top')} className="group flex items-center gap-3" aria-label="Back to top" data-testid="button-logo">
          <span className="flex h-8 w-8 items-center justify-center border border-foreground font-mono text-xs font-medium transition group-hover:bg-foreground group-hover:text-background">PU</span>
          <span className="hidden text-[11px] font-semibold uppercase tracking-[.2em] sm:block">Prateek Upadhyay</span>
        </button>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => navigate(item.id)} className={`relative py-2 text-[11px] font-semibold uppercase tracking-[.16em] transition hover:text-primary ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground'}`} data-testid={`link-nav-${item.id}`}>
              {item.label}
              {activeSection === item.id && <span className="absolute -bottom-[1px] left-0 h-px w-full bg-primary" />}
            </button>
          ))}
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} data-testid="button-mobile-menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && <div className="border-t border-border bg-background px-6 py-5 md:hidden">
        <nav className="container-wide flex flex-col gap-1" aria-label="Mobile navigation">
          {navItems.map((item) => <button key={item.id} onClick={() => navigate(item.id)} className="border-b border-border py-4 text-left text-xs font-semibold uppercase tracking-[.16em]" data-testid={`link-mobile-nav-${item.id}`}>{item.label}</button>)}
        </nav>
      </div>}
    </header>
  );
}

function SectionHeading({ index, eyebrow, title, description }: { index: string; eyebrow: string; title: string; description?: string }) {
  return <div className="mb-14 grid gap-5 md:grid-cols-[120px_1fr] md:gap-10">
    <div className="eyebrow flex items-start gap-3 pt-2"><span className="text-primary">{index}</span><span className="hidden h-px w-8 bg-primary md:block" /></div>
    <div><h2 className="display max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">{title}</h2>{description && <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{description}</p>}</div>
  </div>;
}

function Hero() {
  const { personal } = portfolioData;
  return <section id="top" className="hero-grid relative flex min-h-[780px] items-center overflow-hidden border-b border-border pt-24">
    <div className="container-wide relative z-10 grid w-full gap-14 pb-20 pt-14 lg:grid-cols-[1fr_360px] lg:items-end lg:gap-24">
      <div>
        <div className="reveal eyebrow mb-8 flex items-center gap-3"><span className="inline-block h-2 w-2 rounded-full bg-primary" /> Open to technical conversations <span className="hidden sm:inline">/ Bengaluru, KA</span></div>
        <h1 className="display reveal reveal-delay-1 max-w-4xl text-[clamp(3.8rem,10vw,8.7rem)] font-semibold leading-[.87] text-foreground">{personal.fullName.split(' ')[0]}<br /><span className="text-primary">{personal.fullName.split(' ').slice(1).join(' ')}</span></h1>
        <div className="reveal reveal-delay-2 mt-9 grid max-w-2xl gap-7 border-l-2 border-primary pl-5 sm:grid-cols-[190px_1fr] sm:pl-7">
          <p className="font-mono text-xs uppercase leading-6 tracking-[.13em] text-muted-foreground">{personal.role}<br />{personal.company}</p>
          <p className="max-w-md text-base leading-7 text-muted-foreground">Validating the systems behind connected vehicles — with a bias for repeatable automation, observable test results, and clean handoffs.</p>
        </div>
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-3">
          <button onClick={() => scrollToSection('experience')} className="group inline-flex items-center gap-3 bg-foreground px-5 py-3.5 text-xs font-bold uppercase tracking-[.14em] text-background transition hover:bg-primary" data-testid="button-hero-experience">View experience <ArrowDown size={15} className="transition group-hover:translate-y-1" /></button>
          <button onClick={() => scrollToSection('contact')} className="inline-flex items-center gap-3 border border-border px-5 py-3.5 text-xs font-bold uppercase tracking-[.14em] transition hover:border-primary hover:text-primary" data-testid="button-hero-contact">Start a conversation <ArrowUpRight size={15} /></button>
        </div>
      </div>
      <div className="relative mx-auto h-[300px] w-[300px] lg:mb-6">
        <div className="absolute inset-0 rounded-full border border-primary/30" />
        <div className="hero-orbit absolute inset-8 rounded-full border border-dashed border-primary/45"><span className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-primary" /></div>
        <div className="absolute inset-[28%] flex flex-col items-center justify-center rounded-full bg-foreground text-center text-background shadow-2xl"><Radio size={19} strokeWidth={1.4} className="mb-3 text-primary" /><span className="font-mono text-[9px] uppercase tracking-[.2em] text-background/60">System focus</span><span className="mt-2 px-5 font-mono text-xs uppercase leading-5 tracking-[.14em]">Connected<br />vehicle quality</span></div>
        <span className="absolute left-2 top-1/2 font-mono text-[9px] uppercase tracking-[.18em] text-muted-foreground">01 / signal</span>
        <span className="absolute bottom-3 right-0 font-mono text-[9px] uppercase tracking-[.18em] text-muted-foreground">precision / 24</span>
      </div>
    </div>
    <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-4 text-muted-foreground md:flex"><span className="h-8 w-px bg-border" /><span className="eyebrow">Scroll to inspect</span></div>
  </section>;
}

function About() {
  const { personal } = portfolioData;
  return <section id="about" className="section"><div className="container-wide"><SectionHeading index="01" eyebrow="Profile" title="Engineering confidence into every update." description="A focused practice built across embedded software, vehicle networks, and system-level validation." />
    <div className="grid gap-12 md:grid-cols-[1.2fr_.8fr] md:gap-24">
      <p className="max-w-2xl text-xl leading-9 text-foreground/85" data-testid="text-about-summary">{personal.summary}</p>
      <div className="grid grid-cols-2 border-t border-border pt-5">
        <div><span className="eyebrow">Current base</span><p className="mt-3 flex items-center gap-2 text-sm"><MapPin size={15} className="text-primary" />{personal.location}</p></div>
        <div><span className="eyebrow">Specialism</span><p className="mt-3 text-sm leading-6">Automotive system testing<br />OTA / FOTA validation</p></div>
      </div>
    </div>
  </div></section>;
}

function HighlightStrip() {
  return <section className="border-y border-border bg-foreground py-10 text-background"><div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{portfolioData.highlights.map((highlight, index) => <div className={`${index ? 'border-l-0 sm:border-l sm:border-background/20 sm:pl-7' : ''}`} key={highlight.label} data-testid={`highlight-${index}`}><div className="display text-4xl font-semibold text-primary">{highlight.value}</div><div className="mt-2 text-xs font-bold uppercase tracking-[.1em]">{highlight.label}</div><div className="mt-2 font-mono text-[10px] uppercase tracking-[.12em] text-background/50">{highlight.detail}</div></div>)}</div></section>;
}

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  return <article className="hover-lift border border-border bg-card p-6" data-testid={`skill-group-${index}`}><div className="mb-10 flex items-center justify-between"><span className="eyebrow text-primary">0{index + 1}</span><Code2 size={18} className="text-muted-foreground" /></div><h3 className="display text-2xl font-semibold">{group.label}</h3><div className="mt-6 flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="border border-border bg-background px-3 py-2 text-xs text-muted-foreground">{skill}</span>)}</div></article>;
}

function Capabilities() {
  return <section id="capabilities" className="section"><div className="container-wide"><SectionHeading index="02" eyebrow="Capabilities" title="The stack, without the theatre." description="Tools and domains from the resume, grouped around the work they enable." /><div className="grid gap-4 md:grid-cols-2">{portfolioData.skills.map((group, index) => <SkillGroupCard key={group.label} group={group} index={index} />)}</div></div></section>;
}

function ExperienceCard({ item, index }: { item: Experience; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  return <article className="relative grid gap-5 md:grid-cols-[116px_1fr] md:gap-10" data-testid={`experience-card-${item.id}`}>
    <div className="eyebrow pt-2 text-primary">{item.period}</div>
    <div className="border-t border-border pt-5">
      <button className="group flex w-full items-start justify-between gap-5 text-left" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} data-testid={`button-expand-${item.id}`}>
        <div><div className="eyebrow mb-3">{item.company}</div><h3 className="display text-3xl font-semibold leading-tight sm:text-4xl">{item.role}</h3><p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">{item.intro}</p></div>
        <span className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition ${expanded ? 'rotate-180 bg-primary text-primary-foreground' : 'group-hover:border-primary'}`}><ChevronDown size={16} /></span>
      </button>
      {expanded && <div className="reveal mt-8 grid gap-8 border-l border-primary/40 pl-5 md:grid-cols-[1fr_180px] md:pl-7">
        <ul className="space-y-3">{item.details.map((detail, detailIndex) => <li key={detailIndex} className="flex gap-3 text-sm leading-6 text-foreground/80"><Check size={15} className="mt-1 shrink-0 text-primary" />{detail}</li>)}</ul>
        <div><span className="eyebrow">Environment</span><div className="mt-3 flex flex-wrap gap-2">{item.tools.map((tool) => <span key={tool} className="font-mono text-[10px] uppercase tracking-[.08em] text-muted-foreground">{tool}</span>)}</div>{item.outcome && <div className="mt-8 border-t border-border pt-4"><span className="eyebrow">Measured outcome</span><p className="mt-2 text-sm font-semibold leading-6">{item.outcome}</p></div>}</div>
      </div>}
    </div>
  </article>;
}

function Experience() {
  return <section id="experience" className="section"><div className="container-wide"><SectionHeading index="03" eyebrow="Experience" title="Closer to the system than the slide deck." description="A timeline of hands-on delivery across automated validation and embedded interfaces." /><div className="relative space-y-12 before:absolute before:bottom-0 before:left-[5px] before:top-0 before:w-px before:bg-border md:before:left-[121px]">{portfolioData.experience.map((item, index) => <ExperienceCard key={item.id} item={item} index={index} />)}</div></div></section>;
}

function Education() {
  const education = portfolioData.education[0];
  return <section id="education" className="section"><div className="container-wide"><SectionHeading index="04" eyebrow="Education" title="The foundation underneath the practice." /><div className="grid gap-8 border-y border-border py-8 md:grid-cols-[1fr_1.4fr_auto] md:items-center"><div className="eyebrow">{education.period}</div><div><h3 className="display text-2xl font-semibold">{education.degree}</h3><p className="mt-2 text-sm text-muted-foreground">{education.institution}</p></div><div className="md:text-right"><span className="eyebrow">Result</span><p className="mt-2 font-mono text-sm text-primary">{education.result}</p></div></div></div></section>;
}

function Contact() {
  const { personal } = portfolioData;
  return <section id="contact" className="section pb-20"><div className="container-wide"><div className="relative overflow-hidden bg-foreground px-6 py-14 text-background sm:px-12 sm:py-20"><div className="absolute -right-12 -top-16 h-64 w-64 rounded-full border border-background/10" /><div className="absolute -right-2 -top-6 h-44 w-44 rounded-full border border-background/10" /><div className="relative grid gap-12 lg:grid-cols-[1fr_350px] lg:items-end"><div><div className="eyebrow text-primary">05 / Contact</div><h2 className="display mt-5 max-w-3xl text-5xl font-semibold leading-[.96] sm:text-7xl">Let’s talk<br /><span className="text-primary">systems.</span></h2><p className="mt-7 max-w-md text-sm leading-7 text-background/65">For roles, technical conversations, or a closer look at how I approach automotive test automation.</p><div className="mt-9 flex flex-wrap gap-3"><a href={`mailto:${personal.email}`} className="inline-flex items-center gap-2 bg-primary px-5 py-3.5 text-xs font-bold uppercase tracking-[.12em] text-primary-foreground transition hover:bg-background hover:text-foreground" data-testid="link-email"><Mail size={15} /> Email me</a>{personal.resumeUrl && <a href={personal.resumeUrl} download className="inline-flex items-center gap-2 border border-background/30 px-5 py-3.5 text-xs font-bold uppercase tracking-[.12em] transition hover:border-background" data-testid="link-download-resume"><Download size={15} /> Resume PDF</a>}</div></div><div className="space-y-5 border-t border-background/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8"><a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-sm text-background/80 hover:text-primary" data-testid="contact-email"><Mail size={16} className="text-primary" />{personal.email}</a><a href={`tel:${personal.phone}`} className="flex items-center gap-3 text-sm text-background/80 hover:text-primary" data-testid="contact-phone"><Phone size={16} className="text-primary" />{personal.phone}</a><a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-background/80 hover:text-primary" data-testid="contact-linkedin"><Linkedin size={16} className="text-primary" />linkedin.com/prateek1202 <ArrowUpRight size={13} /></a><div className="flex items-center gap-3 text-sm text-background/80"><MapPin size={16} className="text-primary" />{personal.location}</div></div></div></div></div></section>;
}

function Footer() {
  return <footer className="border-t border-border py-7"><div className="container-wide flex flex-col gap-4 text-[10px] uppercase tracking-[.15em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span data-testid="text-footer-name">© {new Date().getFullYear()} {portfolioData.personal.fullName}</span><span className="flex items-center gap-2"><Terminal size={13} className="text-primary" /> Built around signal, not noise.</span><button onClick={() => scrollToSection('top')} className="flex items-center gap-2 transition hover:text-primary" data-testid="button-back-top">Back to top <ArrowUp size={13} /></button></div></footer>;
}

function Home() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('prateek-theme') === 'dark');
  const [activeSection, setActiveSection] = useState('about');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('prateek-theme', isDark ? 'dark' : 'light');
  }, [isDark]);
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }), { rootMargin: '-25% 0px -60% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <div className="site-shell min-h-[100dvh]"><Navigation activeSection={activeSection} isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} /><main><Hero /><About /><HighlightStrip /><Capabilities /><Experience /><Education /><Contact /></main><Footer /><button className="back-top fixed bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 shadow-lg backdrop-blur transition hover:border-primary hover:text-primary" onClick={() => scrollToSection('top')} aria-label="Back to top" data-testid="button-floating-back-top"><ArrowUp size={16} /></button></div>;
}

export default function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><Home /><Toaster /></TooltipProvider></QueryClientProvider>;
}