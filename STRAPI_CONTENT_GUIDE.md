# Strapi Content Creation Guide

This guide provides exact content to recreate the WiredBrains frontend in Strapi CMS.

---

## Table of Contents
1. [Services](#1-services)
2. [Testimonials](#2-testimonials)
3. [Projects (Case Studies)](#3-projects-case-studies)
4. [Global Stats](#4-global-stats)
5. [Clients](#5-clients)
6. [Site Settings](#6-site-settings)
7. [Contact Page](#7-contact-page)

---

## 1. Services

**Content Type:** `Service`
**API Endpoint:** `/api/services`

Create 6 entries with the following data:

### Service 1: Managed IT Services
| Field | Value |
|-------|-------|
| title | Managed IT Services |
| description | Comprehensive IT infrastructure management and 24/7 support that keeps your business running smoothly and securely. |
| icon | server |
| display_order | 1 |
| is_active | true |
| details | `["Proactive monitoring and maintenance", "24/7 helpdesk and remote support", "Network and server management", "Automated security patching"]` |

### Service 2: Cybersecurity Services
| Field | Value |
|-------|-------|
| title | Cybersecurity Services |
| description | Advanced threat protection and security solutions that safeguard your data and defend against evolving cyber threats. |
| icon | shield |
| display_order | 2 |
| is_active | true |
| details | `["Next-generation firewall management", "Endpoint detection and response (EDR)", "Security information and event management (SIEM)", "Vulnerability assessments and penetration testing"]` |

### Service 3: IT Strategy and Consulting
| Field | Value |
|-------|-------|
| title | IT Strategy and Consulting |
| description | Strategic technology planning and expert guidance that aligns IT initiatives with your business objectives. |
| icon | settings |
| display_order | 3 |
| is_active | true |
| details | `["Technology roadmap development", "IT budget and cost optimization", "Cloud strategy and migration planning", "Vendor and risk management"]` |

### Service 4: Microsoft 365 Consulting
| Field | Value |
|-------|-------|
| title | Microsoft 365 Consulting |
| description | Expert implementation and optimization of Microsoft 365 to enhance collaboration and productivity across your organization. |
| icon | mail |
| display_order | 4 |
| is_active | true |
| details | `["Seamless migration and deployment", "SharePoint and Teams optimization", "Advanced security and compliance setup", "User training and adoption programs"]` |

### Service 5: Business Continuity Services
| Field | Value |
|-------|-------|
| title | Business Continuity Services |
| description | Robust disaster recovery and backup solutions that ensure uninterrupted operations and protect critical business data. |
| icon | refresh-cw |
| display_order | 5 |
| is_active | true |
| details | `["Automated cloud and on-premise backups", "Disaster recovery planning and testing", "Rapid data restoration services", "High-availability infrastructure design"]` |

### Service 6: VoIP Business Telephones
| Field | Value |
|-------|-------|
| title | VoIP Business Telephones |
| description | Modern cloud-based phone systems that deliver crystal-clear communication and seamless connectivity for your team. |
| icon | phone |
| display_order | 6 |
| is_active | true |
| details | `["Cloud PBX and auto-attendant features", "Mobile and desktop app integration", "HD voice quality and call analytics", "Cost-effective scalability"]` |

---

## 2. Testimonials

**Content Type:** `Testimonial`
**API Endpoint:** `/api/testimonials`

Create 6 entries:

### Testimonial 1
| Field | Value |
|-------|-------|
| name | Sarah Johnson |
| role | CEO, TechVision |
| content | Their managed IT services transformed our operations completely. Proactive monitoring and rapid response times have eliminated downtime and boosted productivity across our organization. |
| avatar | Upload or use URL: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80` |
| display_order | 1 |
| is_active | true |

### Testimonial 2
| Field | Value |
|-------|-------|
| name | Michael Chen |
| role | CTO, GrowthCo |
| content | The cybersecurity implementation was flawless. Their team identified vulnerabilities we didn't even know existed and created a robust defense system that gives us complete peace of mind. |
| avatar | `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80` |
| display_order | 2 |
| is_active | true |

### Testimonial 3
| Field | Value |
|-------|-------|
| name | Emily Rodriguez |
| role | Founder, StyleHub |
| content | From initial consultation to full deployment, they were professional and knowledgeable. Our Microsoft 365 migration was seamless, and employee productivity increased by 40% immediately! |
| avatar | `https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80` |
| display_order | 3 |
| is_active | true |

### Testimonial 4
| Field | Value |
|-------|-------|
| name | David Thompson |
| role | VP Operations, InnovateLabs |
| content | Their IT strategy consulting helped us modernize our entire infrastructure. The roadmap they created has positioned us for sustainable growth and competitive advantage. |
| avatar | `https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80` |
| display_order | 4 |
| is_active | true |

### Testimonial 5
| Field | Value |
|-------|-------|
| name | Jessica Williams |
| role | Operations Manager, NexGen |
| content | The VoIP phone system they implemented has revolutionized our communications. Crystal-clear calls, seamless integration, and significant cost savings. Couldn't be happier with the results. |
| avatar | `https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80` |
| display_order | 5 |
| is_active | true |

### Testimonial 6
| Field | Value |
|-------|-------|
| name | Chris Martinez |
| role | CTO, DataStream |
| content | Their business continuity planning saved us during a critical incident. The disaster recovery system they built ensured zero data loss and minimal disruption. Truly exceptional service. |
| avatar | `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80` |
| display_order | 6 |
| is_active | true |

---

## 3. Projects (Case Studies)

**Content Type:** `Project`
**API Endpoint:** `/api/projects`

Create 3 entries:

### Project 1: Enterprise Network Security
| Field | Value |
|-------|-------|
| title | Enterprise Network Security |
| slug | enterprise-network-security |
| category | Cybersecurity Implementation |
| description | A comprehensive cybersecurity infrastructure implementation for a Fortune 500 company, featuring multi-layered threat protection, advanced monitoring systems, and zero-trust architecture. |
| challenge | The organization faced increasing sophisticated cyber threats while managing legacy systems across multiple global locations. They needed enterprise-grade security without disrupting daily operations or requiring complete infrastructure overhaul. Compliance with multiple regulatory frameworks (GDPR, HIPAA, SOC 2) added complexity. |
| solution | We implemented a zero-trust security architecture with next-generation firewalls, intrusion detection systems, and 24/7 security operations center (SOC) monitoring. Advanced threat intelligence feeds were integrated with automated response protocols. Employee security training programs reduced phishing susceptibility by 85%, while endpoint detection and response (EDR) solutions protected all devices. |
| hero_image | Upload: Network security operations center with multiple monitoring screens |
| display_order | 1 |
| status | published |
| stats | `[{"value": 95, "suffix": "%", "label": "Threat Reduction", "description": "Decrease in successful security incidents."}, {"value": 24, "suffix": "/7", "label": "SOC Monitoring", "description": "Round-the-clock security operations coverage."}, {"value": 99.99, "suffix": "%", "label": "System Uptime", "description": "Maintained during security implementation."}, {"value": 100, "suffix": "%", "label": "Compliance", "description": "Full regulatory compliance achieved."}]` |

### Project 2: Cloud Migration & Optimization
| Field | Value |
|-------|-------|
| title | Cloud Migration & Optimization |
| slug | cloud-migration-project |
| category | Cloud Infrastructure |
| description | Complete Microsoft 365 migration and cloud infrastructure setup for a healthcare provider, enabling remote collaboration while maintaining HIPAA compliance and enhancing data security. |
| challenge | The healthcare provider operated on outdated on-premise servers with limited remote access capabilities. Staff productivity suffered during the pandemic, and data backup processes were unreliable. They needed seamless cloud migration without compromising patient data security or violating HIPAA regulations. |
| solution | We architected a phased Microsoft 365 migration strategy, starting with non-critical departments to minimize risk. Azure Active Directory was configured with conditional access policies and multi-factor authentication. SharePoint and Teams were deployed with encrypted collaboration spaces. Automated backup solutions and disaster recovery protocols ensured zero data loss during the transition. |
| hero_image | Upload: Cloud infrastructure deployment with server racks |
| display_order | 2 |
| status | published |
| stats | `[{"value": 40, "suffix": "%", "label": "Productivity Increase", "description": "Enhanced collaboration and remote access."}, {"value": 100, "suffix": "%", "label": "HIPAA Compliant", "description": "Full regulatory compliance maintained."}, {"value": 60, "suffix": "%", "label": "Cost Reduction", "description": "Savings on infrastructure and maintenance."}, {"value": 0, "suffix": "", "label": "Data Loss", "description": "Zero data loss during entire migration."}]` |

### Project 3: Managed IT Infrastructure
| Field | Value |
|-------|-------|
| title | Managed IT Infrastructure |
| slug | managed-it-services |
| category | Managed IT Services |
| description | Full-scale managed IT services deployment with 24/7 monitoring and support for a growing manufacturing company, eliminating downtime and optimizing system performance across all facilities. |
| challenge | The manufacturing company experienced frequent system outages causing production delays and revenue loss. Their small internal IT team was overwhelmed with reactive troubleshooting rather than strategic initiatives. Inconsistent network performance across multiple facilities created operational inefficiencies. |
| solution | We deployed comprehensive managed IT services including proactive monitoring, preventive maintenance, and helpdesk support. Remote monitoring and management (RMM) tools were implemented across all endpoints. Network infrastructure was upgraded with redundant systems and failover capabilities. Regular vulnerability assessments and patch management eliminated security gaps while automated backup solutions protected critical data. |
| hero_image | Upload: IT technician maintaining server infrastructure |
| display_order | 3 |
| status | published |
| stats | `[{"value": 99.9, "suffix": "%", "label": "Uptime Achieved", "description": "Virtually eliminated unplanned downtime."}, {"value": 85, "suffix": "%", "label": "Faster Resolution", "description": "Reduced mean time to resolution for issues."}, {"value": 24, "suffix": "/7", "label": "Support Coverage", "description": "Continuous monitoring and helpdesk access."}, {"value": 50, "suffix": "%", "label": "Cost Savings", "description": "Reduced IT operational expenses."}]` |

---

## 4. Global Stats

**Content Type:** `Global-stat`
**API Endpoint:** `/api/global-stats`

Create 4 entries:

### Stat 1
| Field | Value |
|-------|-------|
| value | 500 |
| suffix | + |
| label | Systems Secured |
| description | Enterprise networks protected across healthcare, finance, and manufacturing sectors. |
| display_order | 1 |
| is_active | true |

### Stat 2
| Field | Value |
|-------|-------|
| value | 99.9 |
| suffix | % |
| label | Uptime Guarantee |
| description | Average system uptime achieved through proactive monitoring and rapid response. |
| display_order | 2 |
| is_active | true |

### Stat 3
| Field | Value |
|-------|-------|
| value | 24 |
| suffix | /7 |
| label | Support Available |
| description | Round-the-clock IT support and monitoring to keep your business running smoothly. |
| display_order | 3 |
| is_active | true |

### Stat 4
| Field | Value |
|-------|-------|
| value | 15 |
| suffix | + |
| label | Years Experience |
| description | Certified professionals delivering enterprise-grade IT solutions and cybersecurity. |
| display_order | 4 |
| is_active | true |

---

## 5. Clients

**Content Type:** `Client`
**API Endpoint:** `/api/clients`

Create entries for each client (logo upload required):

| name | display_order |
|------|---------------|
| ISC2 | 1 |
| Indagare | 2 |
| DevColor | 3 |
| Blue Grass Lending | 4 |
| STEM | 5 |
| I & E Insurance | 6 |
| BridgeView Endoscopy | 7 |
| Cassidy MD | 8 |
| Flock Theory | 9 |
| LionHeart Funding | 10 |
| DMM Law Firm | 11 |
| Social Offset | 12 |
| Solliback Reclaims | 13 |
| Miltton Insights | 14 |
| C2 Medical Spa | 15 |
| Ivy Asset Management | 16 |
| New and Moderm | 17 |
| Blooms at Belle Mead | 18 |
| InTouch Billing | 19 |
| Premier Medical Group | 20 |

**Note:** Upload actual client logos as images. Set `is_active: true` for all.

---

## 6. Site Settings

**Content Type:** `Site-setting` (Single Type)
**API Endpoint:** `/api/site-setting`

| Field | Value |
|-------|-------|
| site_name | WIRED BRAINS |
| tagline | Enterprise-Grade IT Solutions |
| email | contact@wiredbrains.io |
| phone | +1 (234) 567-890 |
| address | 123 Innovation Drive, Tech City, USA |

---

## 7. Contact Page

**Content Type:** `Contact-page` (Single Type)
**API Endpoint:** `/api/contact-page`

| Field | Value |
|-------|-------|
| title | Get in Touch |
| subtitle | We're here to answer your questions and help you get started. Fill out the form below, and we'll be in touch shortly. |
| heading | Let's build the future together. |
| description | Whether you have a question about our services, need a consultation, or want to discuss a potential project, our team is ready to assist you. |
| email | contact@wiredbrains.io |
| phone | +1 (234) 567-890 |
| address | 123 Innovation Drive, Tech City, USA |

---

## Hero Section Content (Reference)

If using dynamic Hero via Pages:

| Field | Value |
|-------|-------|
| badge_text | Enterprise-Grade IT Solutions |
| title_line1 | Secure Your |
| title_line2 | Digital Future |
| description | Comprehensive managed IT services and cybersecurity solutions that protect your business, optimize operations, and drive innovation. |
| primary_button_text | Get Started |
| primary_button_link | /contact |
| secondary_button_text | Explore Services |
| secondary_button_link | #services |

---

## CTA Section Content (Reference)

| Field | Value |
|-------|-------|
| heading | Ready to Start Your Project? |
| description | Let's turn your ideas into reality. Get in touch with us today and let's discuss how we can help you achieve your goals. |
| button_text | Get Started |
| button_link | /contact |

---

## Important Notes

1. **JSON Fields**: For `details` and `stats` fields, enter valid JSON arrays
2. **Images**: Upload images via Media Library, or use external URLs
3. **Publish**: Remember to click "Publish" after creating each entry
4. **Permissions**: Enable public `find` and `findOne` permissions for each content type in Settings > Users & Permissions > Roles > Public
5. **Display Order**: Lower numbers appear first in lists

---

## API Permissions Checklist

Go to **Settings > Users & Permissions > Roles > Public** and enable:

| Content Type | find | findOne |
|--------------|------|---------|
| Service | ✅ | ✅ |
| Testimonial | ✅ | ✅ |
| Project | ✅ | ✅ |
| Global-stat | ✅ | ✅ |
| Client | ✅ | ✅ |
| Site-setting | ✅ | - |
| Contact-page | ✅ | - |
| Page | ✅ | ✅ |
