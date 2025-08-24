# Ojingeo Hotel - Next.js 13+ TypeScript Website

A modern hotel booking website built with Next.js 13+ (App Router), TypeScript, Tailwind CSS, and SCSS.

## 🏗️ Project Structure (Updated for Next.js 13+)

```
ojingeo-hotel-demo/
├── app/                      # App Router directory
│   ├── (auth)/               # Auth route group
│   ├── (dashboard)/          # Dashboard route group
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── account/
│   │   └── page.tsx         # User account page
│   ├── admin/
│   │   └── page.tsx         # Admin dashboard
│   ├── auth/
│   │   └── page.tsx         # Authentication pages
│   ├── booking/
│   │   ├── page.tsx         # Booking page
│   │   └── layout.tsx       # Booking layout
│   ├── branches/
│   │   ├── [branchId]/      # Dynamic branch pages
│   │   ├── page.tsx         # Branches listing
│   │   └── layout.tsx       # Branches layout
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── facilities/
│   │   └── page.tsx         # Facilities page
│   ├── rooms/
│   │   ├── [roomId]/        # Dynamic room pages
│   │   ├── page.tsx         # Rooms listing
│   │   └── layout.tsx       # Rooms layout
│   ├── globals.scss         # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
│
├── public/                  # Static files
│   ├── images/              # Optimized images
│   │   ├── branches/        # Branch images
│   │   ├── common/          # Common images
│   │   ├── events/          # Event images
│   │   ├── facilities/      # Facility images
│   │   ├── rooms/           # Room images
│   │   └── shared/          # Shared assets
│   └── scss/                # SCSS files
│
├── src/
│   ├── components/          # Feature-based components
│   │   ├── auth/            # Auth components
│   │   ├── booking/         # Booking components
│   │   ├── branches/        # Branch components
│   │   ├── common/          # Shared UI components
│   │   ├── layout/          # Layout components
│   │   ├── rooms/           # Room components
│   │   └── ui/              # Reusable UI elements
│   │
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── styles/              # Global styles and themes
│   │   ├── _mixins.scss     # SCSS mixins
│   │   ├── _variables.scss  # SCSS variables
│   │   └── globals.scss     # Global styles
│   ├── types/               # TypeScript types
│   └── utils/               # Helper functions
│
├── .github/                 # GitHub workflows
├── .next/                   # Build output
├── .vscode/                 # VS Code settings
├── node_modules/            # Dependencies
├── .env.local              # Environment variables
├── .eslintrc.json          # ESLint config
├── .gitignore              # Git ignore file
├── next-env.d.ts           # Next.js type declarations
├── next.config.js          # Next.js config
├── package.json            # Project metadata and scripts
├── postcss.config.js       # PostCSS config
├── tailwind.config.js      # Tailwind CSS config
└── tsconfig.json           # TypeScript config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm (v9+) or yarn (v1.22+)
- Git

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ojingeo-hotel-demo.git
   cd ojingeo-hotel-demo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Update the variables in .env.local
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Scripts

- `dev` - Start development server
- `build` - Create production build
- `start` - Start production server
- `lint` - Run ESLint
- `lint:fix` - Fix ESLint issues
- `type-check` - Check TypeScript types
- `format` - Format code with Prettier
- `test` - Run tests (Jest)
- `storybook` - Start Storybook
- `build-storybook` - Build Storybook

### Production Build

```bash
# Create production build
npm run build

# Start production server
npm start

# Or run with PM2
npm install -g pm2
pm2 start npm --name "ojingeo-hotel" -- start
```

## 🎨 Features

- **Next.js 13+** - App Router, Server Components, and API Routes
- **TypeScript** - Type-safe codebase
- **Tailwind CSS** - Utility-first CSS with custom theme
- **SCSS Modules** - Component-scoped styles
- **Responsive Design** - Mobile-first, fully responsive
- **Performance** - Code splitting, image optimization, and more
- **SEO Optimized** - Metadata API and semantic HTML
- **Modern Tooling** - ESLint, Prettier, and Husky
- **Testing** - Jest and React Testing Library
- **Storybook** - Component documentation
- **Internationalization** - Built-in i18n support

## 🏨 Pages & Features

### Public Pages
- **Home** (`/`) - Featured rooms, promotions, and quick booking
- **Rooms** (`/rooms`) - Room types, amenities, and pricing
- **Branches** (`/branches`) - Interactive map and branch details
- **Facilities** (`/facilities`) - Hotel amenities and services
- **About Us** (`/about`) - Hotel history, team, and values
- **Contact** (`/contact`) - Contact form and information

### User Features
- **Booking System** - Real-time availability and reservations
- **User Accounts** - Profile management and booking history
- **Reviews** - Guest reviews and ratings
- **Wishlist** - Save favorite rooms and packages

### Admin Dashboard
- **Bookings** - Manage reservations
- **Rooms** - Room inventory and pricing
- **Users** - User management
- **Content** - Manage website content

## 🛠 Development

### Code Style
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

### Git Workflow
1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run tests: `npm test`
4. Commit changes: `git commit -m "Add your feature"`
5. Push to branch: `git push origin feature/your-feature`
6. Create a Pull Request

### Environment Variables

Create a `.env.local` file with:

```env
# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here

# Database
DATABASE_URL=your-database-url

# Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASSWORD=your-password
SMTP_FROM=no-reply@example.com
```

## 📦 Dependencies

### Main Dependencies
- Next.js 13+
- React 18+
- TypeScript
- Tailwind CSS
- SCSS
- Prisma (ORM)
- NextAuth.js (Authentication)
- React Hook Form (Forms)
- React Query (Data Fetching)
- Framer Motion (Animations)

### Development Dependencies
- ESLint
- Prettier
- Husky
- Jest
- Testing Library
- Storybook
- Cypress (E2E Testing)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

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