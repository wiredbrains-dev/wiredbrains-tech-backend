# Content Migration Guide for Strapi Cloud

This document provides step-by-step instructions for adding content to Strapi Cloud admin panel.

**Strapi Cloud Admin URL:** `https://your-project.strapiapp.com/admin`

---

## Table of Contents

1. [Site Settings](#1-site-settings)
2. [Homepage](#2-homepage)
3. [Contact Page](#3-contact-page)
4. [Clients (TrustedClients)](#4-clients-trustedclients)
5. [Testimonials](#5-testimonials)
6. [Global Stats](#6-global-stats)
7. [Projects (Portfolio)](#7-projects-portfolio)
8. [API Permissions Setup](#8-api-permissions-setup)

---

## 1. Site Settings

### Steps to Add Content:

1. Log in to Strapi Cloud admin panel
2. In the left sidebar, click **Content Manager**
3. Under **SINGLE TYPES**, click **Site Settings**
4. Fill in the fields below
5. Click **Save** (top right)
6. Click **Publish** to make it live

### Content to Add:

| Field | Value |
|-------|-------|
| site_name | `WIRED BRAINS` |
| footer_tagline | `Delivering innovative IT solutions to power your business's future.` |
| footer_copyright | `© {year} WIRED BRAINS. All Rights Reserved.` |
| contact_email | `contact@wiredbrains.io` |
| contact_phone | `+1 (234) 567-890` |
| contact_address | `123 Innovation Drive, Tech City, USA` |
| social_github | `https://github.com` |
| social_twitter | `https://twitter.com` |
| social_linkedin | `https://linkedin.com` |

**For logo field:**
1. Click the **logo** field
2. Click **Add new assets**
3. Upload the logo image or paste URL: `https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/63e13a123efaa65fe8154aefd36b980c.png`
4. Click **Upload**
5. Select the uploaded image

**nav_links (JSON field):**
```json
[
  { "name": "Services", "href": "/#services" },
  { "name": "About", "href": "/#about" },
  { "name": "Portfolio", "href": "/#portfolio" },
  { "name": "Contact", "href": "/contact" }
]
```

---

## 2. Homepage

### Steps to Add Content:

1. In the left sidebar, click **Content Manager**
2. Under **SINGLE TYPES**, click **Homepage**
3. Fill in ALL the fields below (scroll down to see all sections)
4. Click **Save** (top right)
5. Click **Publish** to make it live

### Hero Section Content:

| Field | Value |
|-------|-------|
| hero_tagline | `Enterprise-Grade IT Solutions` |
| hero_headline | `Secure Your` |
| hero_headline_accent | `Digital Future` |
| hero_subheading | `Comprehensive managed IT services and cybersecurity solutions that protect your business, optimize operations, and drive innovation.` |
| hero_primary_cta_text | `Get Started` |
| hero_primary_cta_link | `/contact` |
| hero_secondary_cta_text | `Explore Services` |
| hero_secondary_cta_link | `#services` |

### Trusted Clients Section Content:

| Field | Value |
|-------|-------|
| trusted_clients_text | `Trusted by 25+ Companies Worldwide` |

### Services Section Content:

| Field | Value |
|-------|-------|
| services_heading | `OUR SERVICES` |
| services_subheading | `We provide a comprehensive suite of IT solutions designed to protect your assets, streamline operations, and drive growth.` |

### About Section 1 Content:

| Field | Value |
|-------|-------|
| about_heading_1 | `We're committed to IT` |
| about_heading_1_accent | `excellence` |
| about_block_1_title | `Security-First Approach` |
| about_block_1_text | `Every solution is designed with enterprise-grade security protocols to protect your critical business assets and data.` |
| about_block_2_title | `Proactive IT Management` |
| about_block_2_text | `We don't just respond to issues—we prevent them with 24/7 monitoring and proactive maintenance that keeps your systems running smoothly.` |

**For about_image_1:**
1. Click the field
2. Upload image from: `https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/charlesdeluvio-lks7vei-eag-unsplash-7Or6F.jpg`

### About Section 2 Content:

| Field | Value |
|-------|-------|
| about_heading_2 | `Your technology, our` |
| about_heading_2_accent | `expertise` |
| about_block_3_title | `IT Assessment & Strategy` |
| about_block_3_text | `We begin with a comprehensive audit of your infrastructure to identify vulnerabilities, inefficiencies, and opportunities for optimization.` |
| about_block_4_title | `Seamless Implementation` |
| about_block_4_text | `Our certified engineers deploy solutions with minimal disruption, ensuring smooth transitions and ongoing support every step of the way.` |

**For about_image_2:**
1. Click the field
2. Upload image from: `https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/michael-t-rxri-ho62y4-unsplash-2-tvxRc.jpg`

### Portfolio Section Content:

| Field | Value |
|-------|-------|
| portfolio_badge | `Case Studies` |
| portfolio_heading | `Proven IT` |
| portfolio_heading_accent | `success stories` |
| portfolio_description | `Discover how we've helped businesses enhance security, optimize operations, and achieve digital transformation through innovative IT solutions.` |

### Testimonials Section Content:

| Field | Value |
|-------|-------|
| testimonials_heading | `Businesses that` |
| testimonials_heading_accent | `transformed` |

### Stats Section Content:

| Field | Value |
|-------|-------|
| stats_heading | `OUR IMPACT` |
| stats_description | `Proven results backed by certifications — we deliver secure, reliable IT infrastructure that protects your business and maximizes uptime.` |

### CTA Section Content:

| Field | Value |
|-------|-------|
| cta_heading | `Ready to Start Your Project?` |
| cta_description | `Let's turn your ideas into reality. Get in touch with us today and let's discuss how we can help you achieve your goals.` |
| cta_button_text | `Get Started` |
| cta_button_link | `/contact` |

### SEO Content:

| Field | Value |
|-------|-------|
| seo_title | `Creative Agency - Transform Your Brand` |
| seo_description | `Award-winning marketing agency specializing in digital marketing, brand strategy, and creative solutions that drive results.` |

---

## 3. Contact Page

### Steps to Add Content:

1. In the left sidebar, click **Content Manager**
2. Under **SINGLE TYPES**, click **Contact Page**
3. Fill in the fields below
4. Click **Save** (top right)
5. Click **Publish** to make it live

### Content to Add:

| Field | Value |
|-------|-------|
| heading | `Get in Touch` |
| description | `We're here to answer your questions and help you get started. Fill out the form below, and we'll be in touch shortly.` |
| sidebar_heading | `Let's build the future together.` |
| sidebar_description | `Whether you have a question about our services, need a consultation, or want to discuss a potential project, our team is ready to assist you.` |
| email | `contact@wiredbrains.io` |
| phone | `+1 (234) 567-890` |
| address | `123 Innovation Drive, Tech City, USA` |
| seo_title | `Contact Us - WIRED BRAINS` |
| seo_description | `Get in touch with WIRED BRAINS. Let's discuss your next project and how we can help you achieve your goals with our expert IT solutions.` |

---

## 4. Clients (TrustedClients)

### Steps to Add Content:

1. In the left sidebar, click **Content Manager**
2. Under **COLLECTION TYPES**, click **Client**
3. Click **Create new entry** (top right button)
4. Fill in the fields for one client
5. Click **Save**
6. Click **Publish**
7. Repeat steps 3-6 for each client below

### Client Entries to Create:

Create 20 entries with the following data:

---

**Entry 1:**
| Field | Value |
|-------|-------|
| name | `ISC2` |
| display_order | `1` |
| is_active | `true` (checked) |

---

**Entry 2:**
| Field | Value |
|-------|-------|
| name | `Indagare` |
| display_order | `2` |
| is_active | `true` (checked) |

---

**Entry 3:**
| Field | Value |
|-------|-------|
| name | `DevColor` |
| display_order | `3` |
| is_active | `true` (checked) |

---

**Entry 4:**
| Field | Value |
|-------|-------|
| name | `Blue Grass Lending` |
| display_order | `4` |
| is_active | `true` (checked) |

---

**Entry 5:**
| Field | Value |
|-------|-------|
| name | `STEM` |
| display_order | `5` |
| is_active | `true` (checked) |

---

**Entry 6:**
| Field | Value |
|-------|-------|
| name | `I & E Insurance` |
| display_order | `6` |
| is_active | `true` (checked) |

---

**Entry 7:**
| Field | Value |
|-------|-------|
| name | `BridgeView Endoscopy` |
| display_order | `7` |
| is_active | `true` (checked) |

---

**Entry 8:**
| Field | Value |
|-------|-------|
| name | `Cassidy MD` |
| display_order | `8` |
| is_active | `true` (checked) |

---

**Entry 9:**
| Field | Value |
|-------|-------|
| name | `Flock Theory` |
| display_order | `9` |
| is_active | `true` (checked) |

---

**Entry 10:**
| Field | Value |
|-------|-------|
| name | `LionHeart Funding` |
| display_order | `10` |
| is_active | `true` (checked) |

---

**Entry 11:**
| Field | Value |
|-------|-------|
| name | `DMM Law Firm` |
| display_order | `11` |
| is_active | `true` (checked) |

---

**Entry 12:**
| Field | Value |
|-------|-------|
| name | `Social Offset` |
| display_order | `12` |
| is_active | `true` (checked) |

---

**Entry 13:**
| Field | Value |
|-------|-------|
| name | `Solliback Reclaims` |
| display_order | `13` |
| is_active | `true` (checked) |

---

**Entry 14:**
| Field | Value |
|-------|-------|
| name | `Miltton Insights` |
| display_order | `14` |
| is_active | `true` (checked) |

---

**Entry 15:**
| Field | Value |
|-------|-------|
| name | `C2 Medical Spa` |
| display_order | `15` |
| is_active | `true` (checked) |

---

**Entry 16:**
| Field | Value |
|-------|-------|
| name | `Ivy Asset Management` |
| display_order | `16` |
| is_active | `true` (checked) |

---

**Entry 17:**
| Field | Value |
|-------|-------|
| name | `New and Moderm` |
| display_order | `17` |
| is_active | `true` (checked) |

---

**Entry 18:**
| Field | Value |
|-------|-------|
| name | `Blooms at Belle Mead` |
| display_order | `18` |
| is_active | `true` (checked) |

---

**Entry 19:**
| Field | Value |
|-------|-------|
| name | `InTouch Billing` |
| display_order | `19` |
| is_active | `true` (checked) |

---

**Entry 20:**
| Field | Value |
|-------|-------|
| name | `Premier Medical Group` |
| display_order | `20` |
| is_active | `true` (checked) |

---

## 5. Testimonials

### Steps to Add Content:

1. In the left sidebar, click **Content Manager**
2. Under **COLLECTION TYPES**, click **Testimonial**
3. Click **Create new entry** (top right button)
4. Fill in the fields for one testimonial
5. For avatar: Click the field → Add new assets → Upload image → Select it
6. Click **Save**
7. Click **Publish**
8. Repeat steps 3-7 for each testimonial below

### Testimonial Entries to Create:

---

**Testimonial 1:**
| Field | Value |
|-------|-------|
| name | `Sarah Johnson` |
| role | `CEO, TechVision` |
| company | `TechVision` |
| quote | `Their managed IT services transformed our operations completely. Proactive monitoring and rapid response times have eliminated downtime and boosted productivity across our organization.` |
| rating | `5` |
| display_order | `1` |
| is_active | `true` (checked) |

**avatar image URL:** `https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`

---

**Testimonial 2:**
| Field | Value |
|-------|-------|
| name | `Michael Chen` |
| role | `CTO, GrowthCo` |
| company | `GrowthCo` |
| quote | `The cybersecurity implementation was flawless. Their team identified vulnerabilities we didn't even know existed and created a robust defense system that gives us complete peace of mind.` |
| rating | `5` |
| display_order | `2` |
| is_active | `true` (checked) |

**avatar image URL:** `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`

---

**Testimonial 3:**
| Field | Value |
|-------|-------|
| name | `Emily Rodriguez` |
| role | `Founder, StyleHub` |
| company | `StyleHub` |
| quote | `From initial consultation to full deployment, they were professional and knowledgeable. Our Microsoft 365 migration was seamless, and employee productivity increased by 40% immediately!` |
| rating | `5` |
| display_order | `3` |
| is_active | `true` (checked) |

**avatar image URL:** `https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`

---

**Testimonial 4:**
| Field | Value |
|-------|-------|
| name | `David Thompson` |
| role | `VP Operations, InnovateLabs` |
| company | `InnovateLabs` |
| quote | `Their IT strategy consulting helped us modernize our entire infrastructure. The roadmap they created has positioned us for sustainable growth and competitive advantage.` |
| rating | `5` |
| display_order | `4` |
| is_active | `true` (checked) |

**avatar image URL:** `https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`

---

**Testimonial 5:**
| Field | Value |
|-------|-------|
| name | `Jessica Williams` |
| role | `Operations Manager, NexGen` |
| company | `NexGen` |
| quote | `The VoIP phone system they implemented has revolutionized our communications. Crystal-clear calls, seamless integration, and significant cost savings. Couldn't be happier with the results.` |
| rating | `5` |
| display_order | `5` |
| is_active | `true` (checked) |

**avatar image URL:** `https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`

---

**Testimonial 6:**
| Field | Value |
|-------|-------|
| name | `Chris Martinez` |
| role | `CTO, DataStream` |
| company | `DataStream` |
| quote | `Their business continuity planning saved us during a critical incident. The disaster recovery system they built ensured zero data loss and minimal disruption. Truly exceptional service.` |
| rating | `5` |
| display_order | `6` |
| is_active | `true` (checked) |

**avatar image URL:** `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`

---

## 6. Global Stats

### Steps to Add Content:

1. In the left sidebar, click **Content Manager**
2. Under **COLLECTION TYPES**, click **Global Stat**
3. Click **Create new entry** (top right button)
4. Fill in the fields for one stat
5. Click **Save**
6. Click **Publish**
7. Repeat steps 3-6 for each stat below

### Global Stat Entries to Create:

---

**Stat 1:**
| Field | Value |
|-------|-------|
| value | `500` |
| suffix | `+` |
| label | `Systems Secured` |
| description | `Enterprise networks protected across healthcare, finance, and manufacturing sectors.` |
| display_order | `1` |
| is_active | `true` (checked) |

---

**Stat 2:**
| Field | Value |
|-------|-------|
| value | `99.9` |
| suffix | `%` |
| label | `Uptime Guarantee` |
| description | `Average system uptime achieved through proactive monitoring and rapid response.` |
| display_order | `2` |
| is_active | `true` (checked) |

---

**Stat 3:**
| Field | Value |
|-------|-------|
| value | `24` |
| suffix | `/7` |
| label | `Support Available` |
| description | `Round-the-clock IT support and monitoring to keep your business running smoothly.` |
| display_order | `3` |
| is_active | `true` (checked) |

---

**Stat 4:**
| Field | Value |
|-------|-------|
| value | `15` |
| suffix | `+` |
| label | `Years Experience` |
| description | `Certified professionals delivering enterprise-grade IT solutions and cybersecurity.` |
| display_order | `4` |
| is_active | `true` (checked) |

---

## 7. Projects (Portfolio)

### Steps to Add Content:

1. In the left sidebar, click **Content Manager**
2. Under **COLLECTION TYPES**, click **Project**
3. Click **Create new entry** (top right button)
4. Fill in ALL fields for one project
5. For hero_image: Click the field → Add new assets → Upload image → Select it
6. For stats JSON: Copy and paste the JSON provided
7. Click **Save**
8. Click **Publish**
9. Repeat steps 3-8 for each project below

### Project Entries to Create:

---

**Project 1: Enterprise Network Security**

| Field | Value |
|-------|-------|
| title | `Enterprise Network Security` |
| slug | `enterprise-network-security` |
| category | `Cybersecurity` |
| short_description | `A comprehensive cybersecurity infrastructure implementation for a Fortune 500 company.` |
| display_order | `1` |
| status | `published` |

**hero_image URL:** `https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/tech-daily-lkyv7faumza-unsplash-2-FOBCl.jpg`

**challenge (paste into rich text field):**
```
A Fortune 500 company faced increasing cyber threats and needed a complete security overhaul. Their existing infrastructure was outdated and vulnerable to modern attack vectors.
```

**solution (paste into rich text field):**
```
We implemented a multi-layered security architecture including:

• Advanced threat detection and response systems
• Zero-trust network architecture
• 24/7 security operations center (SOC)
• Employee security awareness training
• Compliance with industry regulations (SOC 2, HIPAA)
```

**stats (paste into JSON field):**
```json
[
  { "value": "99.9", "suffix": "%", "label": "Threat Detection Rate" },
  { "value": "60", "suffix": "%", "label": "Reduction in Security Incidents" },
  { "value": "24", "suffix": "/7", "label": "Monitoring Coverage" },
  { "value": "100", "suffix": "%", "label": "Compliance Achievement" }
]
```

---

**Project 2: Cloud Migration & Optimization**

| Field | Value |
|-------|-------|
| title | `Cloud Migration & Optimization` |
| slug | `cloud-migration-project` |
| category | `Cloud Services` |
| short_description | `Complete Microsoft 365 migration and cloud infrastructure setup for a healthcare provider.` |
| display_order | `2` |
| status | `published` |

**hero_image URL:** `https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/gemini_generated_image_n6u5epn6u5epn6u5-5abrf-2-W2Hon.jpg`

**challenge (paste into rich text field):**
```
A regional healthcare provider was struggling with on-premise infrastructure that couldn't scale with their growing patient base. They needed HIPAA-compliant cloud solutions.
```

**solution (paste into rich text field):**
```
We delivered a comprehensive cloud transformation:

• Full Microsoft 365 migration for 500+ employees
• HIPAA-compliant Azure infrastructure
• Secure telemedicine platform integration
• Automated backup and disaster recovery
• Cost optimization and resource management
```

**stats (paste into JSON field):**
```json
[
  { "value": "40", "suffix": "%", "label": "Cost Reduction" },
  { "value": "500", "suffix": "+", "label": "Users Migrated" },
  { "value": "99.99", "suffix": "%", "label": "Uptime Achieved" },
  { "value": "0", "suffix": "", "label": "Data Loss During Migration" }
]
```

---

**Project 3: Managed IT Infrastructure**

| Field | Value |
|-------|-------|
| title | `Managed IT Infrastructure` |
| slug | `managed-it-services` |
| category | `Managed IT` |
| short_description | `Full-scale managed IT services deployment with 24/7 monitoring and support.` |
| display_order | `3` |
| status | `published` |

**hero_image URL:** `https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/sumup-vsyr_mbh7q4-unsplash-2-Hxitr.jpg`

**challenge (paste into rich text field):**
```
A mid-sized manufacturing company had no dedicated IT staff and was experiencing frequent downtime, security breaches, and inefficient workflows.
```

**solution (paste into rich text field):**
```
We became their complete IT department:

• 24/7 network monitoring and management
• Help desk support for all employees
• Proactive maintenance and patch management
• Vendor management and procurement
• IT strategy and budgeting consulting
```

**stats (paste into JSON field):**
```json
[
  { "value": "85", "suffix": "%", "label": "Reduction in Downtime" },
  { "value": "4", "suffix": "hr", "label": "Average Response Time" },
  { "value": "200", "suffix": "+", "label": "Tickets Resolved Monthly" },
  { "value": "30", "suffix": "%", "label": "IT Cost Savings" }
]
```

---

## 8. API Permissions Setup

### Steps to Configure Permissions:

1. In the left sidebar, click **Settings** (gear icon at bottom)
2. Under **USERS & PERMISSIONS PLUGIN**, click **Roles**
3. Click on **Public**
4. Scroll down to find each content type
5. Check the boxes as indicated below
6. Click **Save** (top right)

### Permissions to Enable:

| Content Type | find | findOne |
|-------------|------|---------|
| Client | ☑️ | ☑️ |
| Project | ☑️ | ☑️ |
| Global-stat | ☑️ | ☑️ |
| Testimonial | ☑️ | ☑️ |
| Service | ☑️ | ☑️ |
| Homepage | ☑️ | - |
| Contact-page | ☑️ | - |
| Site-setting | ☑️ | - |
| Page | ☑️ | ☑️ |

---

## Testing the API

After completing all steps, test the API endpoints:

| Content Type | Test URL |
|-------------|----------|
| Services | `https://your-strapi-url.com/api/services` |
| Testimonials | `https://your-strapi-url.com/api/testimonials` |
| Clients | `https://your-strapi-url.com/api/clients` |
| Projects | `https://your-strapi-url.com/api/projects` |
| Global Stats | `https://your-strapi-url.com/api/global-stats` |
| Homepage | `https://your-strapi-url.com/api/homepage` |
| Contact Page | `https://your-strapi-url.com/api/contact-page` |
| Site Settings | `https://your-strapi-url.com/api/site-setting` |

---

## Checklist

Use this checklist to track your progress:

- [ ] Site Settings - created and published
- [ ] Homepage - created and published
- [ ] Contact Page - created and published
- [ ] Clients - all 20 entries created and published
- [ ] Testimonials - all 6 entries created and published
- [ ] Global Stats - all 4 entries created and published
- [ ] Projects - all 3 entries created and published
- [ ] API Permissions - configured for Public role
- [ ] API endpoints - tested and working
