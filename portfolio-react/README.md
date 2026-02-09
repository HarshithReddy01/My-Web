# Harshith Reddy's Portfolio

Welcome to my personal portfolio website! This is a modern, responsive React application that showcases my skills, projects, professional experience, and education.

## About Me

AI Engineer & Full-Stack Developer

I'm a BS Computer Science student at the University of South Dakota, specializing in Artificial Intelligence, and a research assistant under Dr. Debesh Jha, Assistant Professor at USD. I turn ideas into smart, powerful web apps that are easy and enjoyable to use. By blending AI models with strong backends and clean, responsive designs, I build products that solve real problems.

## Features

- **Responsive Design**: Works seamlessly across all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Engaging user interface with dynamic elements
- **Project Showcase**: Detailed presentation of my work and achievements
- **Work Experience**: Timeline-based layout showcasing professional experience
- **Education & Certificates**: Dedicated section for academic achievements and certifications
- **Contact Information**: Easy ways to get in touch and connect
- **Skills Section**: Comprehensive overview of my technical expertise

## Technologies Used

- **Frontend**: React.js with TypeScript
- **Styling**: CSS3 with modern design principles
- **Icons**: FontAwesome for beautiful iconography
- **Routing**: React Router for seamless navigation
- **Build Tool**: Vite for fast development and optimized builds

## Project Structure

```
portfolio-react/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Publications.tsx
│   │   ├── Skills.tsx
│   │   └── WorkExperience.tsx
│   ├── App.tsx             # Main application component
│   ├── App.css             # Global styles
│   └── index.tsx           # Application entry point
├── public/
│   └── Images/             # Static assets and images
├── index.html              # Main HTML template
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies and scripts
```

## Getting Started

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd portfolio-react
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
   Navigate to `http://localhost:5173` to view the portfolio (Vite default port)

## Available Scripts

- `npm run dev` - Runs the app in development mode with Vite (fast hot reload)
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run deploy` - Builds and deploys to GitHub Pages
- `npm test` - Launches the test runner

## Sections

### Home
The landing page featuring my introduction and key highlights.

### About
Detailed information about my background, experience, and professional journey.

### Skills
Comprehensive overview of my technical skills and expertise areas, organized by Frontend, Backend, and AI/ML categories.

### Projects
Showcase of my best work with detailed descriptions, technologies used, and links to live demos and GitHub repositories.

### Publications
Academic publications and research papers I've contributed to.

### Work Experience
Timeline-based layout showcasing my professional experience including:
- Research Assistant at University of South Dakota
- Student Ambassador (Scholarship)
- Entrepreneurial Lead at NSF I-Corps Program
- SGA Senator
- Student Supervisor
- Facilities Member

### Education
Dedicated section displaying:
- Bachelor's of Science in Computer Science with AI concentration and Mathematics minor
- Certificates including Data Structures and Algorithms - Java
- Dean's List achievements

### Contact
Multiple ways to get in touch - email, social media, and professional networks.

## Design Features

- **Color Scheme**: Red accent theme for Education and Work Experience sections
- **Timeline Layout**: Vertical timeline design for work experience entries
- **Card-Based UI**: Modern card layouts for projects, education, and experience
- **Responsive Grid**: Adaptive grid layouts that work on all screen sizes
- **Smooth Animations**: Subtle transitions and effects for better user experience

## Customization

This portfolio is designed to be easily customizable. You can:
- Update personal information in the components
- Add new projects to the projects section
- Modify the styling to match your brand
- Add new sections as needed
- Update work experience and education entries
- Change color themes in App.css

## Deployment

The portfolio is ready for deployment on various platforms:
- **GitHub Pages** - Configured with GitHub Actions workflow
- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your repository for automatic deployments
- **AWS S3** - Upload the `dist` folder contents
- **Any static hosting service** - The built files are in the `dist` directory

### GitHub Pages Deployment
The project includes deployment scripts. Run `npm run deploy` to build and deploy to GitHub Pages automatically.

## Contributing

This is a personal portfolio project, but suggestions and feedback are always welcome!

## License

This project is open source and available under the MIT License.

---

**Made by Harshith Reddy**
