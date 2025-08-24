# Ojingeo Hotel - Next.js TypeScript Website

A modern hotel booking website built with Next.js, TypeScript, and Tailwind CSS.

## 🏗️ Project Structure

```
my-next-app/
├── components/           ← Reusable React components
│   ├── Layout.tsx       ← Main layout wrapper
│   ├── Navigation.tsx   ← Navigation component
│   ├── Footer.tsx       ← Footer component
│   ├── BranchGallery.tsx ← Branch gallery component
│   └── RoomDetail.tsx   ← Room detail component
├── pages/               ← Next.js pages (file-based routing)
│   ├── _app.tsx        ← Custom App component
│   ├── index.tsx       ← Home page
│   ├── aboutus.tsx     ← About us page
│   ├── booking.tsx     ← Booking page
│   ├── branches.tsx    ← Branches overview
│   ├── facilities.tsx  ← Hotel facilities
│   ├── events.tsx      ← Events page
│   ├── reviews.tsx     ← Reviews page
│   ├── membership.tsx  ← Membership signup
│   ├── rooms.tsx       ← Rooms overview
│   ├── [room-pages].tsx ← Individual room pages
│   ├── [branch-pages].tsx ← Branch gallery pages
│   └── [other-pages].tsx ← Additional pages
├── public/              ← Static files (images, CSS, JS)
│   ├── css/            ← Original CSS files
│   ├── images/         ← Hotel images and assets
│   └── js/             ← JavaScript files
├── styles/              ← Global styles
│   └── globals.css     ← Tailwind CSS imports
├── types/               ← TypeScript type definitions
│   └── jsx.d.ts        ← JSX type extensions
├── next.config.js       ← Next.js configuration
├── tailwind.config.js   ← Tailwind CSS configuration
├── postcss.config.js    ← PostCSS configuration
├── tsconfig.json        ← TypeScript configuration
└── package.json         ← Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Features

- **Modern Stack**: Next.js 13+ with TypeScript
- **Styling**: Tailwind CSS with custom hotel theme
- **Responsive Design**: Mobile-first approach
- **Interactive Components**: Slideshows, forms, and animations
- **SEO Optimized**: Next.js built-in SEO features
- **Performance**: Optimized images and code splitting

## 🏨 Pages Overview

- **Home** (`/`) - Hotel overview with gallery and events
- **Rooms** (`/rooms`) - Room types and details
- **Facilities** (`/facilities`) - Hotel amenities and schedules
- **Booking** (`/booking`) - Room booking interface
- **Branches** (`/branches`) - Hotel locations with interactive map
- **Events** (`/events`) - Upcoming hotel events
- **Reviews** (`/reviews`) - Customer reviews and rating system
- **Membership** (`/membership`) - Membership signup form
- **About Us** (`/aboutus`) - Hotel history and information

## 🎯 Custom Tailwind Classes

- `text-hotel-brown` - #664228
- `text-hotel-dark` - #4a3728  
- `text-hotel-gold` - #ffe600
- `bg-hotel-dark` - #4a3728
- `bg-hotel-gold` - #ffe600
- `animate-scroll` - Custom scrolling animation

## 📱 Responsive Breakpoints

- `sm:` - 640px and up
- `md:` - 768px and up  
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

## 🔧 Development

### Adding New Pages
1. Create a new `.tsx` file in the `pages/` directory
2. Use the `Layout` component for consistent styling
3. Import necessary components from `components/`

### Styling Guidelines
- Use Tailwind CSS classes instead of inline styles
- Utilize custom hotel theme colors
- Follow mobile-first responsive design
- Keep components reusable and modular

## 📦 Dependencies

### Core
- Next.js 13.5.6
- React 18.2.0
- TypeScript 5.2.2

### Styling
- Tailwind CSS 3.3.5
- PostCSS 8.4.31
- Autoprefixer 10.4.16

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details.

---

**Ojingeo Hotel** - Experience luxury and comfort in South Korea 🇰🇷