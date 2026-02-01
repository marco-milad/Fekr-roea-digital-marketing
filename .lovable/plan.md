

# وكالة فكر ورؤية - Migration Plan to React + Tailwind CSS

## Project Overview
Migrate the **Fekr & Ro'ia Advertising Agency** website from static HTML/CSS/JS to a modern **React + Vite + Tailwind CSS** architecture. The website is an Arabic (RTL) agency portfolio with multiple sections and pages.

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── WorksSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ClientsSection.tsx
│   ├── ui/
│   │   ├── ServiceCard.tsx
│   │   ├── StatBox.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── ClientLogo.tsx
│   │   ├── Button.tsx (existing)
│   │   └── Progress.tsx (existing)
│   └── common/
│       ├── AnimatedSection.tsx
│       ├── BackToTop.tsx
│       └── WhatsAppButton.tsx
├── pages/
│   ├── Index.tsx (Homepage)
│   └── Contact.tsx
├── hooks/
│   ├── useIntersectionObserver.ts
│   └── useTestimonialSlider.ts
├── data/
│   ├── services.ts
│   ├── projects.ts
│   ├── testimonials.ts
│   └── clients.ts
└── assets/
```

---

## 🏠 Page 1: Homepage

### Hero Section
- **Animated subtitle** with decorative lines ("فكر و رؤية")
- **Main heading**: "وكالة رائدة في الدعاية والإعلان"
- **Description text** with marketing message
- **Two CTA buttons**: Primary (تواصل معنا) and Outline (اعرف المزيد)
- **Background video** with autoplay, loop, and mute toggle button
- Scroll-triggered fade-in animations

### About Section (من نحن)
- Two-column layout: Text content + Statistics grid
- **5 animated stat boxes** with progress bars:
  - رضا العملاء (90%)
  - نمو الحملات (75%)
  - العائد الاستثماري (85%)
  - طلب الخدمات (70%)
  - نمو الوكالة (65%)
- CTA button to learn more

### Services Section (خدماتنا)
- Section header with title and subtitle
- **9 service cards** in a responsive grid (3 columns on desktop):
  1. الهوية الموحدة
  2. التصميم الاحترافي
  3. بناء وتصميم العلامة التجارية
  4. التصميم الرقمي والجرافيكي
  5. الطباعة والحلول الدعائية
  6. الاستندات
  7. لوحات الطرق
  8. الدروع التذكارية
  9. الهدايا الدعائية
- Each card has: icon, title, description, "اعرف المزيد" link
- Staggered fade-in animations

### CTA Banner Section
- Yellow background with centered text
- Heading: "هل تريد معرفة المزيد من التفاصيل؟"
- "احصل على عرض" button

### Works Section (أعمالنا)
- Header with "عرض المزيد" button
- **5 alternating project showcases** (image left/right alternating):
  - Project image with shadow and rounded corners
  - Category badge
  - Project title
  - Description text
  - Statistics badge (e.g., "+٥٠٪ نمو في الزيارات")
- Slide-in animations from left/right

### Testimonials Section (آراء عملائنا)
- Section header
- **Interactive testimonial slider** with 3 testimonials:
  - Client name and role
  - Quote text
  - Navigation: Previous/Next buttons with page indicator (2/3)
- State-managed slider with React

### Clients Section (عملاؤنا)
- Grid of **15 client logos** (organizations/companies)
- Responsive: 2 cols mobile → 6 cols desktop
- "عرض جميع العملاء" button
- Staggered fade-in animations

### Footer CTA Section
- "نحن هنا لندعمك..." heading
- "تواصل معنا" button

### Floating Elements
- **Back to Top button** - appears on scroll
- **WhatsApp floating button** - links to WhatsApp chat

---

## 📞 Page 2: Contact Page

### Contact Hero Section
- Dark overlay background
- Heading: "نسعد دائمًا بالتواصل معك"
- WhatsApp direct button

### Contact Info Cards
- 3 info boxes in a row:
  - **Address**: الوجه - املج - ينبع
  - **Phone**: 0536422477 - 0553767865
  - **Email**: info@fekr-w-ro2ia.com

### Contact Form (Frontend only)
- Form fields with validation:
  - الاسم الكامل (Full Name) - required
  - البريد الإلكتروني (Email) - required, email format
  - الرسالة (Message) - required, textarea
- Submit button: "إرسال الرسالة"
- Form state management with React

### Google Maps Embed
- Embedded map showing location

---

## ⚡ Features & Functionality

### RTL Support
- Configure `dir="rtl"` and `lang="ar"` in HTML
- Use Tailwind RTL utilities where needed
- Font family: system Arabic fonts

### Scroll Animations
- Custom `useIntersectionObserver` hook
- `AnimatedSection` wrapper component
- Staggered delays for grid items
- Animation variants: fade-in, slide-left, slide-right

### Interactive Components
- **Video mute toggle**: React state for audio control
- **Testimonials slider**: useState for current index, prev/next handlers
- **Back to top button**: useEffect for scroll position
- **Mobile navigation**: useState for menu toggle

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Mobile hamburger menu
- Responsive grids for services, clients, stats

---

## 🎨 Design System (Tailwind)

### Color Palette
- **Primary/Accent**: Yellow (#FFCC00 or similar)
- **Dark text**: Near black for headings
- **Muted text**: Gray for descriptions
- **Background**: White sections, alternating with light gray
- **CTA sections**: Yellow background

### Typography
- Large bold headings (text-3xl to text-5xl)
- Arabic-optimized line heights
- Consistent spacing and padding

### Components Style
- Rounded corners (rounded-lg, rounded-xl)
- Subtle shadows (shadow-md, shadow-lg)
- Yellow accent borders/buttons
- Hover transitions on interactive elements

---

## 🔧 Technical Implementation

1. **No external CSS files** - All styling via Tailwind utilities
2. **No DOM manipulation** - All interactions via React state
3. **Functional components only** with hooks
4. **Data extraction** - Services, projects, testimonials, clients stored in separate data files
5. **React Router** for navigation between pages
6. **Reusable components** - Cards, buttons, section wrappers

