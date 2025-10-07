# Portfolio - Manasa Manoj

A pixel-art comic-style portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Pixel-art comic book theme
- 🎬 Horizontal scroll-jacking for Experience & Projects sections
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 📧 Contact form with EmailJS integration
- 📄 Resume download button

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Resume

Place your resume PDF in the `/public` folder as `resume.pdf`:

```
public/
  ├── resume.pdf          ← Add your resume here
  ├── favicon.ico
  ├── placeholder.svg
  └── robots.txt
```

The resume download button in the Hero section will automatically link to `/public/resume.pdf`.

### 3. Configure Contact Form (Optional)

To enable the contact form, add EmailJS credentials to `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See the contact form configuration section below for more details.

### 4. Run Development Server

```bash
npm run dev
```

## Customization

### Update Your Information

1. **Hero Section** (`src/components/Hero.tsx`):

   - Name, bio, typing animation text
   - Social media links
   - Avatar image (in `src/assets/hero.png`)

2. **Experience Section** (`src/components/Experience.tsx`):

   - Update the `experiences` array with your work, hackathons, and education

3. **Projects Section** (`src/components/Projects.tsx`):

   - Update the `projects` array with your projects

4. **Skills Section** (`src/components/Skills.tsx`):

   - Update the `skillCategories` array with your skills

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update email address and location
