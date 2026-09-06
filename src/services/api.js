import emailjs from '@emailjs/browser';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_vrbgb4v';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_gqold5g';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '21zB4BTov-tLffPNI';

// Fallback project data matching MERN showcase requirements
export const fallbackProjects = [
  {
    _id: '1',
    title: 'Bouncing Ball Game',
    description: 'Interactive browser-based bouncing ball game featuring smooth animations, physics-based movement, collision detection, score tracking, and responsive gameplay.',
    image: 'https://res.cloudinary.com/nmrxsjhh/image/upload/v1788712439/ChatGPT_Image_Sep_6_2026_10_03_47_PM_t8doom.png',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML5 Canvas'],
    githubUrl: 'https://github.com/nehalafth77/bouncingball',
    liveUrl: 'https://bouncingball-jet.vercel.app/',
    category: 'Frontend'
  },
  {
    _id: '2',
    title: 'Sales CRM Dashboard',
    description: 'Modern sales CRM platform for managing leads, customer interactions, sales pipelines, follow-ups, and performance analytics through an intuitive dashboard.',
    image: 'https://res.cloudinary.com/nmrxsjhh/image/upload/v1788718714/1d5b6676-e203-4b22-94fe-64d95595782d_wsevtv.png',
    technologies: ['React', 'Tailwind CSS', 'Chart.js', 'REST API'],
    githubUrl: 'https://github.com/nehalafth77/crm',
    liveUrl: 'https://crm-bn7x.vercel.app/',
    category: 'Frontend'
  },
  {
    _id: '3',
    title: 'Zahara Rental E-commerce Website',
    description: 'Modern rental e-commerce platform for Zahara, featuring product browsing, rental booking, product details, responsive design, and a seamless customer shopping experience.',
    image: 'https://res.cloudinary.com/nmrxsjhh/image/upload/v1788718159/22591387-fdbf-4aa4-ae50-fee2867bd78c_rhc5c5.png',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    githubUrl: 'https://github.com/MoonLight3130/zahara',
    liveUrl: 'https://zahara-lake.vercel.app/',
    category: 'Full Stack'
  },
  {
    _id: '4',
    title: 'ResQNow',
    description: 'AI-powered emergency assistance platform designed to provide quick access to emergency services, location-based alerts, incident reporting, and real-time response coordination.',
    image: 'https://res.cloudinary.com/nmrxsjhh/image/upload/v1788717882/566c8fc5-d9a9-4cd7-98ae-8a76d84dd519_vegd6q.png',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AI', 'REST API'],
    githubUrl: 'https://github.com/MoonLight3130/ResQNow',
    liveUrl: 'https://resqnow-9e907.web.app/',
    category: 'Full Stack'
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

export const sendContactMessage = async (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  // Send email via EmailJS
  const response = await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );

  // Optional: Save to backend database asynchronously if server is running
  try {
    fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).catch(() => { });
  } catch (e) {
    // Ignore backend errors if offline
  }

  return response;
};