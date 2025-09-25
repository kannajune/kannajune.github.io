# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a professional design with dark/light theme support, smooth animations, and a code-themed hero section.

## 🚀 Features

- **Modern Design**: Clean, professional layout inspired by top developer portfolios
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light modes with system preference detection
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Code-Themed Hero**: Interactive code snippets with typewriter effect
- **Professional Sections**: About, Experience, Skills, Projects, and Contact sections
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Fonts**: Inter & JetBrains Mono

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📝 Customization

1. **Personal Information**: Update the content in each component file to reflect your information
2. **Projects**: Modify the projects array in `src/components/projects-section.tsx`
3. **Experience**: Update the experiences array in `src/components/experience-section.tsx`
4. **Skills**: Customize the skillCategories in `src/components/skills-section.tsx`
5. **Contact**: Update contact information in `src/components/contact-section.tsx`
6. **Metadata**: Update SEO information in `src/app/layout.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
- **Netlify**: Connect your GitHub repo and deploy
- **GitHub Pages**: Use the `npm run export` command for static export

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── experience-section.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx
│   └── theme-provider.tsx
```

## 🎨 Design Inspiration

This portfolio is inspired by modern developer portfolios with a focus on:
- Clean, professional aesthetics
- Code-themed elements
- Smooth user interactions
- Mobile-first responsive design

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

---

**Built with ❤️ using Next.js & TypeScript**
