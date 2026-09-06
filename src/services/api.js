const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Web3Forms - No OAuth needed, emails delivered directly to your inbox
// Get your free access key at: https://web3forms.com
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

export const sendContactMessage = async (formData) => {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error('Contact form is not configured yet. Please email nehalafathima05@gmail.com directly.');
  }

  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    name: formData.name,
    email: formData.email,
    subject: formData.subject || 'New Portfolio Contact Message',
    message: formData.message,
    from_name: 'Nehala Fathima Portfolio',
  };

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok || data.success === false) {
    throw new Error(data.message || 'Failed to send message. Please try again.');
  }

  // Also save to backend database asynchronously if server is active
  fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }).catch(() => {});

  return data;
};
