# Portfolio Website

A modern, interactive 3D portfolio website built with React, Three.js, and Framer Motion. This portfolio showcases professional experience, technical skills, and projects with stunning 3D animations and responsive design.

## 🌟 Features

- **3D Interactive Elements**: Built with Three.js and React Three Fiber for immersive user experience
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Contact Form**: Functional contact form powered by EmailJS
- **Skills Showcase**: Interactive display of technical skills and technologies
- **Experience Timeline**: Professional experience displayed in an engaging timeline format
- **Project Gallery**: Showcase of key projects with detailed descriptions
- **3D ID Card**: Unique 3D ID card component with physics simulation
- **Smooth Animations**: Powered by Framer Motion for fluid interactions

## 🚀 Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

- **React 19.1.0** - Modern React with latest features
- **Vite 5.4.1** - Fast build tool and development server
- **Three.js 0.176.0** - 3D graphics library
- **React Three Fiber 9.1.2** - React renderer for Three.js
- **React Three Drei 10.0.7** - Useful helpers for React Three Fiber
- **React Three Rapier 2.1.0** - Physics engine integration
- **Framer Motion 12.11.4** - Animation library

### Styling

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.5.3** - CSS post-processor
- **Custom Design System** - Unique color palette and components

### Additional Libraries

![EmailJS](https://img.shields.io/badge/EmailJS-FF6B6B?style=for-the-badge&logo=minutemailer&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- **EmailJS** - Contact form functionality
- **React Router DOM 7.6.0** - Client-side routing
- **React Vertical Timeline Component** - Experience timeline
- **Use Gesture React** - Touch and mouse gestures

### Development Tools

![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

- **ESLint** - Code linting and formatting
- **TypeScript Support** - Type definitions included
- **Hot Module Replacement** - Fast development experience

## 📁 Project Structure

```text
src/
├── components/           # React components
│   ├── About.jsx        # About section component
│   ├── Contact.jsx      # Contact form component
│   ├── Experience.jsx   # Experience timeline
│   ├── Hero.jsx         # Hero section with 3D elements
│   ├── IDCard.jsx       # 3D ID card component
│   ├── Navbar.jsx       # Navigation component
│   ├── Projects.jsx     # Projects showcase
│   ├── Tech.jsx         # Technology skills display
│   └── canvas/          # 3D canvas components
│       ├── Ball.jsx     # 3D ball animations
│       ├── Computers.jsx # 3D computer model
│       ├── Earth.jsx    # 3D Earth model
│       └── Stars.jsx    # Animated star field
├── constants/           # Application constants
│   └── index.js        # Navigation, services, tech stack data
├── assets/             # Static assets
│   ├── images/         # Images and icons
│   ├── company/        # Company logos
│   └── tech/          # Technology icons
├── hoc/               # Higher-order components
│   └── SectionWrapper.jsx # Section wrapper with animations
├── utils/             # Utility functions
│   └── motion.js      # Animation configurations
├── types/             # Type definitions
└── styles/            # Global styles
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd "Protfolio Website"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   ```text
   http://localhost:5173
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready application
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Personal Information

Update personal details in `src/constants/index.js`:

- Navigation links
- Services offered
- Technology stack
- Work experience
- Project details

### Theme Customization

- **Colors**: Modify color scheme in `tailwind.config.js`
- **Animations**: Customize animations in `src/utils/motion.js`
- **Layout**: Adjust component layouts in respective component files

### 3D Models

- Replace 3D models in `public/` directory
- Update model references in canvas components
- Adjust camera positions and lighting as needed

## 📧 Contact Form Setup

The contact form uses EmailJS for email functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email templates
3. Update EmailJS configuration in `Contact.jsx`
4. Add your service ID, template ID, and public key

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Deployment Options

- **Vercel**: Connect GitHub repository for automatic deployments
- **Netlify**: Drag and drop `dist` folder or connect repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Custom Server**: Upload `dist` folder contents to web server

## 🔧 Performance Optimization

- **Code Splitting**: Components are dynamically imported where beneficial
- **Asset Optimization**: Images are optimized for web delivery
- **Bundle Analysis**: Use `npm run build` to analyze bundle size
- **3D Optimization**: 3D models are optimized for web performance

## 🎯 Key Sections

### Hero Section

- 3D interactive ID card with physics
- Animated text introduction
- Call-to-action elements

### About Section

- Professional overview
- Service offerings
- Animated cards

### Experience Section

- Interactive timeline
- Company details
- Role descriptions

### Technology Section

- Animated technology icons
- Skill proficiency indicators
- Interactive 3D elements

### Projects Section

- Project showcases
- Technology tags
- GitHub links

### Contact Section

- Functional contact form
- 3D Earth model
- Social media links

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Three.js community for excellent 3D graphics library
- React Three Fiber team for seamless React integration
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- All open source contributors

## 📞 Contact

### Sowrin Paul

- Portfolio: [Your Website URL]
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

---

Built with ❤️ using React, Three.js, and modern web technologies
