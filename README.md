# The Website for the War of Words Debate Championship 2024.

![Site Image](https://cdn.aayus.me/uploads/Arc_77QlapuRtO.png)

This is the official website for the War of Words Debate Championship 2024; showcasing event details, schedule, organizing comittee and more.


## Guide
To run the site locally, follow these steps:

1. Clone the repository: `git clone https://github.com/aayushxr/wwdc.git`
2. Navigate to the project directory: `cd wwdc`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and go to `http://localhost:3000` to view the site. 

## Directory Structure and Purpose

### Root Level Structure
```
/
├── app/                  # Next.js 13+ app directory (main application code)
├── components/           # Reusable UI components
├── lib/                  # Utility functions and shared logic
├── public/              # Static assets
├── data.tsx             # Central data management file
└── [config files]       # Various configuration files (next.config.mjs, tailwind.config.ts, etc.)
```
1. /app Directory (Main Application Routes)
```
/app
├── layout.tsx           # Root layout component
├── page.tsx            # Homepage component
├── globals.css         # Global styles
├── about/              # About page route
├── schedule/           # Schedule page route
├── references/         # References page route
├── motions/           # Motions page route
├── 2022/              # 2022 content
└── 2023/              # 2023 content
```

2. /components Directory
```
/components
├── ui/                 # Shadcn UI components
├── navbar.tsx          # Main navigation component
├── mobile-nav.tsx     # Mobile navigation
├── committee.tsx      # Committee related components
├── video.tsx          # Video player component
├── card.tsx           # Card component
├── moving-cards.tsx   # Animated cards component
└── [other UI components]
```
- Reusable UI components go here
- Navigation-related changes: navbar.tsx and mobile-nav.tsx
- New UI components should be added here with appropriate naming


## Common Development Tasks

### Adding New Pages
- Create a new directory under /app
- Add a page.tsx file in the new directory
- Update navigation components if needed (navbar.tsx, mobile-nav.tsx)

### Modifying UI Components
- Check /components directory for existing components
- Shadcn UI components are in /components/ui
- Create new components in /components if needed

### Styling Changes
- Global styles: Modify /app/globals.css
- Component-specific styles: Use Tailwind classes in component files
- Theme customization: Update tailwind.config.ts

### Data Updates
- Modify data.tsx for content changes
- Ensure type safety is maintained (TypeScript)
- Update corresponding components that use the modified data