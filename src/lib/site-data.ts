import {
  Shield, Bug, Radar, Laptop, Mail, Cloud, Headphones,
  Server, Network, DatabaseBackup, Boxes, Building2, HeartPulse,
  Landmark, GraduationCap, Briefcase, Globe2, type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

export interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const services: Service[] = [
  { slug: "cybersecurity", icon: Shield, title: "Cybersecurity", description: "End-to-end protection across your entire business with proactive threat defense.", benefits: ["24/7 threat monitoring", "Zero-trust architecture", "Compliance ready"] },
  { slug: "vulnerability-assessment", icon: Radar, title: "Vulnerability Assessment", description: "Identify, prioritize, and remediate weaknesses before attackers find them.", benefits: ["Automated scanning", "Risk scoring", "Remediation roadmap"] },
  { slug: "it-support", icon: Headphones, title: "IT Support", description: "Responsive help desk keeping your business running around the clock.", benefits: ["24/7 help desk", "Remote & on-site", "SLA guaranteed"] },
  { slug: "soc-monitoring", icon: Radar, title: "SOC Monitoring", description: "Always-on Security Operations Center with rapid incident response.", benefits: ["SIEM & SOAR", "Threat intelligence", "Sub-15min response"] },
  { slug: "penetration-testing", icon: Bug, title: "Penetration Testing", description: "Real-world attack simulations by certified ethical hackers.", benefits: ["OWASP & MITRE aligned", "Detailed reporting", "Re-test included"] },
  { slug: "endpoint-security", icon: Laptop, title: "Endpoint Security", description: "Next-gen EDR/XDR protection for every device on your network.", benefits: ["AI threat detection", "Auto-remediation", "Device control"] },
  { slug: "email-security", icon: Mail, title: "Email Security", description: "Stop phishing, BEC, and ransomware before it reaches your inbox.", benefits: ["Anti-phishing AI", "DMARC/DKIM/SPF", "Sandbox analysis"] },
  { slug: "managed-it", icon: Boxes, title: "Managed IT Services", description: "Fully managed IT operations so you can focus on growth.", benefits: ["Proactive monitoring", "Patch management", "Strategic roadmap"] },
  { slug: "network-management", icon: Network, title: "Network Management", description: "Resilient, high-performance network design and management.", benefits: ["Firewall & VPN", "Performance tuning", "Segmentation"] },
  { slug: "server-administration", icon: Server, title: "Server Administration", description: "Reliable server management with hardening and uptime focus.", benefits: ["99.8% uptime", "Security hardening", "Capacity planning"] },
  { slug: "backup-recovery", icon: DatabaseBackup, title: "Backup & Disaster Recovery", description: "Resilient backup and rapid recovery to keep you running.", benefits: ["Immutable backups", "Fast RTO/RPO", "DR testing"] },
];

export const stats: Stat[] = [
  { label: "Clients Protected", value: 25, suffix: "+" },
  { label: "Incidents Prevented", value: 10000, suffix: "+" },
  { label: "Years of Combined Experience", value: 11, suffix: "+" },
  { label: "Support Availability", value: 24, suffix: "/7" },
];

export const testimonials: Testimonial[] = [
  { quote: "JNC Ventures transformed our digital security posture.", name: "M Alfa", role: "Rector", company: "FCAT,Katsina" },
  { quote: "The penetration test was the most thorough we've ever had.", name: "DSP Hafiz", role: "OC Liberal", company: "Nigeria Police College" },
  { quote: "Their managed IT team feels like an extension of our own.", name: "Ameenah Ololade", role: "Operations Manager", company: "Meenah Logistics" },
];

export const faqs: FAQItem[] = [
  { q: "What is the difference between vulnerability assessment and penetration testing?", a: "A vulnerability assessment scans and prioritizes known weaknesses, while penetration testing actively exploits them to demonstrate real-world impact on your business and validate your defenses." },
  { q: "How quickly can JNC Venture respond to a security incident?", a: "Our 24/7 SOC delivers sub-15-minute triage and immediate containment actions, backed by a documented incident response playbook tailored to your business environment." },
  { q: "Can you work with our existing IT team and tools?", a: "Absolutely. We integrate with your current stack and operate as a co-managed partner, augmenting your team rather than replacing it." },
  { q: "Is a free security assessment really free?", a: "Yes. Our complimentary security assessment includes an external scan, risk summary, and prioritized recommendations for your business." },
];

export const solutions: Solution[] = [
  
  { icon: Briefcase, title: "SMEs", description: "Enterprise-grade protection scaled and priced for growing businesses.", points: ["Affordable bundles", "Managed IT security", "Rapid onboarding"] },
  { icon: HeartPulse, title: "Healthcare", description: "Protect patient data and medical systems with NDPC ready security.", points: ["NDPC & FMH compliance", "Medical device security", "PHI protection"] },
  { icon: Building2, title: "Government Agencies", description: "Mission-critical security meeting strict regulatory standards.", points: ["Critical infra defense", "Zero-trust"] },
  { icon: GraduationCap, title: "Education", description: "Secure campuses, student data, and research environments.", points: ["Phishing defense", "Network segmentation"] }, 
  { icon: Globe2, title: "Enterprise Organizations", description: "Scalable security operations for complex enterprises.", points: ["SOC coverage", "XDR platform", "Dedicated team"] },
];

export const blogPosts: BlogPost[] = [
  { category: "Security News", title: "The Rise of AI-Powered Phishing and How to Defend", excerpt: "Attackers are using generative AI to craft convincing campaigns. Here's how to stay ahead.", date: "Jun 2, 2026", readTime: "5 min" },
  { category: "Cybersecurity Tips", title: "10 Zero-Trust Practices Every Business Should Adopt", excerpt: "Practical steps to move toward a zero-trust architecture without disrupting business operations.", date: "May 24, 2026", readTime: "7 min" },
  { category: "Industry Insights", title: "Ransomware in 2026: Trends, Costs, and Resilience", excerpt: "What the latest data reveals about ransomware and how to build true resilience.", date: "May 10, 2026", readTime: "6 min" },
];

export const certifications = ["ISO 27001", "SOC 2 Type II", "CEH", "CISM", "CompTIA Security+", "AWS Security"];

export const partners = ["Cybergon", "Cyberplural"];

export const coreValues = [
  { title: "Integrity First", description: "We act with transparency and put your business security above all else." },
  { title: "Relentless Vigilance", description: "Business threats never sleep, and neither does our monitoring." },
  { title: "Partnership", description: "We succeed only when your business stays safe & secure." },
  { title: "Innovation", description: "We adopt the latest defenses to stay ahead of attackers." },
];

export const leadership = [
  { name: "Philip A. Olayemi", role: "Founder & CEO", initials: "PO" },
  { name: "Praise Nze", role: "Chief Security Officer", initials: "PN" },
  { name: "Zainab Mayana", role: "Head of IT Services", initials: "ZM" },
  { name: "Abdulrahman Yusuf", role: "Security Operations Lead", initials: "AY" },
  { name: "Amara Ezeh", role: "Operations Manager", initials: "AE" },
];
