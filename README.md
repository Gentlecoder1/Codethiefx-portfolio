# CodeThief - macOS-Inspired Portfolio Website

A beautifully crafted, interactive portfolio website that replicates the macOS desktop experience. Built with React 19 and modern web technologies, this project showcases my skills, projects, and contact information through a unique and engaging UI.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-06B6D4?logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?logo=greensock)

## ✨ Features

- **macOS Desktop Interface** - Realistic dock, navbar, and window system
- **Draggable Windows** - Interactive windows that can be moved, minimized, maximized, and focused
- **Multiple App Windows**:
  - 📁 **Finder** - Browse portfolio projects and work samples
  - 🌐 **Safari** - View blog posts and articles
  - 💻 **Terminal** - Display tech stack and skills
  - 📄 **Resume** - View and download PDF resume
  - 📧 **Contact** - Get in touch form
  - 🖼️ **Image Viewer** - View project screenshots and gallery
  - 📝 **Text Viewer** - View project details and descriptions
- **Smooth Animations** - Powered by GSAP and Framer Motion
- **Real-time Clock** - Dynamic date/time display using Day.js
- **Responsive Design** - Built with Tailwind CSS

## 🛠️ Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI Library |
| Vite | 7.2.4 | Build Tool & Dev Server |
| Tailwind CSS | 4.1.17 | Utility-first CSS Framework |

### Animation & Interaction
| Library | Version | Purpose |
|---------|---------|---------|
| GSAP | 3.13.0 | High-performance animations |
| @gsap/react | 2.1.2 | React integration for GSAP |
| Framer Motion | 12.23.25 | Declarative animations & drag functionality |

### State Management & Utilities
| Library | Version | Purpose |
|---------|---------|---------|
| Zustand | 5.0.9 | Lightweight state management |
| Immer | 11.0.1 | Immutable state updates |
| Day.js | 1.11.19 | Date/time formatting |
| clsx | 2.1.1 | Conditional class names |

### UI Components
| Library | Version | Purpose |
|---------|---------|---------|
| Lucide React | 0.556.0 | Beautiful icon library |
| React Tooltip | 5.30.0 | Tooltip components |
| React PDF | 10.2.0 | PDF viewing capability |

### Development Tools
| Tool | Version | Purpose |
|------|---------|---------|
| ESLint | 9.39.1 | Code linting |
| @vitejs/plugin-react | 5.1.1 | React plugin for Vite |

## 📚 What I Learned

### GSAP (GreenSock Animation Platform)
- Using `useGSAP` hook for React integration
- Creating smooth entrance/exit animations with `gsap.fromTo()`
- Implementing the Draggable plugin for window movement
- Managing animation states with GSAP timelines

### Day.js
- Lightweight alternative to Moment.js for date manipulation
- Formatting dates with custom patterns: `dayjs().format("ddd MMM D h:mm A")`
- Creating real-time clock displays in the navbar

### Path Aliases
- Setting up `jsconfig.json` for cleaner imports
- Using `#` prefix for absolute imports (e.g., `#components`, `#store`, `#constants`)
- Resolving component paths for easier importing across the project

### State Management with Zustand + Immer
- Creating lightweight global stores
- Managing complex window states (open, close, minimize, maximize, focus)
- Using Immer middleware for immutable state updates

### Higher-Order Components (HOC)
- Creating reusable `WindowWrapper` HOC for consistent window behavior
- Wrapping components with shared functionality (dragging, animations, state)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/codethief.git
   cd codethief
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
codethief/
├── public/
│   ├── files/          # PDF and document files
│   ├── icons/          # UI icons (wifi, search, etc.)
│   └── images/         # App icons and images
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Dock.jsx           # macOS-style dock
│   │   ├── Navbar.jsx         # Top navigation bar
│   │   ├── Welcome.jsx        # Welcome screen
│   │   └── WindowControls.jsx # Window control buttons
│   ├── constants/      # App configuration and data
│   ├── hoc/            # Higher-Order Components
│   │   └── WindowWrapper.jsx  # Window behavior wrapper
│   ├── store/          # Zustand state stores
│   │   ├── location.js        # File system navigation
│   │   └── window.js          # Window management
│   ├── windows/        # Application windows
│   │   ├── Contact.jsx
│   │   ├── Finder.jsx
│   │   ├── ImageViewer.jsx
│   │   ├── Resume.jsx
│   │   ├── Safari.jsx
│   │   ├── Terminal.jsx
│   │   └── TextViewer.jsx
│   ├── App.jsx         # Main application component
│   ├── App.css         # Global styles
│   └── main.jsx        # Application entry point
├── eslint.config.js
├── jsconfig.json       # Path alias configuration
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Development Process

1. **Project Setup** - Initialized with Vite + React template, configured Tailwind CSS 4
2. **UI Foundation** - Built the macOS-inspired navbar and dock components
3. **Window System** - Implemented draggable, resizable windows with state management
4. **Animation Layer** - Added GSAP and Framer Motion for smooth transitions
5. **Content Integration** - Created individual app windows (Finder, Safari, Terminal, etc.)
6. **State Management** - Integrated Zustand for global window and navigation state
7. **Polish & Refinement** - Added tooltips, hover effects, and responsive design

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

Feel free to reach out through the Contact window in the portfolio or connect with me on social media!

---

*Built with ❤️ by CodeThief*