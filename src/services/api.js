import emailjs from '@emailjs/browser';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// EmailJS Configuration
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'service_vrbgb4v';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_gqold5g';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '21zB4BTov-tLffPNI';

// Optional Web3Forms fallback
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

// Fallback project data
export const fallbackProjects = [
  {
    _id: '1',
    title: 'E-Commerce Dashboard',
    description: 'Full-featured real-time analytics portal with dynamic sales tracking, inventory management, user metrics, and payment integration.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/nehalafth77/ecommerce-dashboard',
    liveUrl: 'https://ecommerce-dashboard-demo.vercel.app',
    category: 'Full Stack',
  },
  {
    _id: '2',
    title: 'AI Code Assistant App',
    description: 'Modern developer tool interface powered by OpenAI APIs for real-time code completion, linting recommendations, and live preview.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'REST API'],
    githubUrl: 'https://github.com/nehalafth77/ai-code-assistant',
    liveUrl: 'https://ai-code-assistant-demo.vercel.app',
    category: 'Frontend',
  },
  {
    _id: '3',
    title: 'Social Stream Platform',
    description: 'Responsive content feed app featuring fast loading, web socket real-time comments, theme engine, and RESTful API architecture.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Express', 'MongoDB', 'Node.js'],
    githubUrl: 'https://github.com/nehalafth77/social-stream',
    liveUrl: 'https://social-stream-demo.vercel.app',
    category: 'Full Stack',
  },
  {
    _id: '4',
    title: 'Fintech Mobile Web Portal',
    description: 'High-security financial management frontend with interactive charts, transaction history logs, and instant currency converter.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'Chart.js', 'REST API'],
    githubUrl: 'https://github.com/nehalafth77/fintech-portal',
    liveUrl: 'https://fintech-portal-demo.vercel.app',
    category: 'Frontend',
  },
];

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`);
    if (!res.ok) throw new Error('Backend response error');
    const data = await res.json();
    return data.length > 0 ? data : fallbackProjects;
  } catch (err) {
    console.warn('Backend API offline or unreachable, using local fallback project dataset.');
    return fallbackProjects;
  }
};

const saveToBackend = (formData) => {
  fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }).catch(() => {});
};

export const sendContactMessage = async (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject || 'New Portfolio Contact Message',
    message: formData.message,
  };

  // If a valid Web3Forms key is configured, try it
  if (WEB3FORMS_ACCESS_KEY && !WEB3FORMS_ACCESS_KEY.includes('YOUR_WEB3FORMS')) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Contact Message',
          message: formData.message,
          from_name: 'Nehala Fathima Portfolio',
        }),
      });
      const data = await res.json();
      if (res.ok && data.success !== false) {
        saveToBackend(formData);
        return data;
      }
    } catch (web3Err) {
      console.warn('Web3Forms failed, falling back to EmailJS:', web3Err);
    }
  }

  // Primary sending via EmailJS
  const response = await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );

  saveToBackend(formData);
  return response;
};
