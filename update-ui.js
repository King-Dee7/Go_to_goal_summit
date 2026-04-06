const fs = require('fs');

const htmlContent = fs.readFileSync('from-go-to-goal-summit (2).html', 'utf8');

// Extract CSS
const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
  let css = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n` + styleMatch[1];
  fs.writeFileSync('app/globals.css', css);
  console.log('Updated app/globals.css');
}

// Extract HTML inside <body>...</body>, excluding <script>
const bodyMatch = htmlContent.match(/<body>([\s\S]*?)<script>/);
if (bodyMatch) {
  let innerHtml = bodyMatch[1];
  
  // Convert HTML to JSX
  innerHtml = innerHtml.replace(/class=/g, 'className=');
  innerHtml = innerHtml.replace(/onclick=/g, 'onClick=');
  innerHtml = innerHtml.replace(/onsubmit=/g, 'onSubmit=');
  
  // Basic boolean attribute fixes if any
  innerHtml = innerHtml.replace(/required>/g, 'required={true}>');
  
  // Inline styles object conversion
  // E.g. style="text-align:center;font-size:15px;..." -> style={{ textAlign: 'center', fontSize: '15px', ... }}
  innerHtml = innerHtml.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(style => {
      let [key, value] = style.split(':');
      if (key && value) {
        key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        styleObj[key] = value.trim();
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });
  
  // Close unclosed tags like <input>
  innerHtml = innerHtml.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
  
  // Replace HTML comments that might throw errors in JSX if they are outside a tag but look like JS comments
  // Actually, standard HTML comments <!-- ... --> need to be converted to {/* ... */} in JSX
  innerHtml = innerHtml.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  const pageTsx = `"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const verbs = ['dream', 'build', 'lead', 'start', 'mentor', 'rise', 'create'];
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);
  const verbRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    // Hero verb cycling logic
    const cycleVerb = () => {
      if (!verbRef.current) return;
      
      verbRef.current.classList.remove('active');
      verbRef.current.classList.add('exit-up');
      
      setTimeout(() => {
        setCurrentVerbIndex((prev) => (prev + 1) % verbs.length);
        if (verbRef.current) {
          verbRef.current.classList.remove('exit-up');
          verbRef.current.classList.add('enter-below');
          
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (verbRef.current) {
                verbRef.current.classList.remove('enter-below');
                verbRef.current.classList.add('active');
              }
            });
          });
        }
      }, 500);
    };
    
    const interval = setInterval(cycleVerb, 2800);
    
    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    // Nav scroll effect
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [verbs.length]);
  
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };
  
  // We need to inject dynamic attributes back. 
  // Let's replace the static HTML fragments with our state logic below.
  return (
    <main>
${innerHtml}
    </main>
  );
}
`;
  
  fs.writeFileSync('app/page.tsx', pageTsx);
  console.log('Updated app/page.tsx');
}
