import Project from '../models/Project.js';

// Seed dataset to populate DB automatically if empty
const defaultProjects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'Full-featured real-time analytics portal with dynamic sales tracking, inventory management, user metrics, and payment integration.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/chandnichauhan/ecommerce-dashboard',
    liveUrl: 'https://ecommerce-dashboard-demo.vercel.app',
    category: 'Full Stack',
  },
  {
    title: 'AI Code Assistant App',
    description: 'Modern developer tool interface powered by OpenAI APIs for real-time code completion, linting recommendations, and live preview.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'REST API'],
    githubUrl: 'https://github.com/chandnichauhan/ai-code-assistant',
    liveUrl: 'https://ai-code-assistant-demo.vercel.app',
    category: 'Frontend',
  },
  {
    title: 'Social Stream Platform',
    description: 'Responsive content feed app featuring fast loading, web socket real-time comments, theme engine, and RESTful API architecture.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Express', 'MongoDB', 'Node.js'],
    githubUrl: 'https://github.com/chandnichauhan/social-stream',
    liveUrl: 'https://social-stream-demo.vercel.app',
    category: 'Full Stack',
  },
  {
    title: 'Fintech Mobile Web Portal',
    description: 'High-security financial management frontend with interactive charts, transaction history logs, and instant currency converter.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'Chart.js', 'REST API'],
    githubUrl: 'https://github.com/chandnichauhan/fintech-portal',
    liveUrl: 'https://fintech-portal-demo.vercel.app',
    category: 'Frontend',
  },
];

// @desc    Get all portfolio projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res) => {
  try {
    let projects = await Project.find().sort({ createdAt: -1 });
    
    // Auto-seed database if empty
    if (projects.length === 0) {
      projects = await Project.insertMany(defaultProjects);
    }

    return res.status(200).json(projects);
  } catch (error) {
    console.error('[Projects GET Error]:', error);
    // Return default project dataset as fallback if DB isn't connected yet
    return res.status(200).json(defaultProjects);
  }
};

// @desc    Add a new portfolio project
// @route   POST /api/projects
// @access  Public (admin)
export const createProject = async (req, res) => {
  try {
    const { title, description, image, technologies, githubUrl, liveUrl, category } = req.body;

    if (!title || !description || !image || !technologies || !githubUrl || !liveUrl) {
      return res.status(400).json({
        success: false,
        message: 'Please fill out all required project fields.',
      });
    }

    const newProject = await Project.create({
      title,
      description,
      image,
      technologies: Array.isArray(technologies) ? technologies : technologies.split(',').map(t => t.trim()),
      githubUrl,
      liveUrl,
      category: category || 'Full Stack',
    });

    return res.status(201).json({
      success: true,
      message: 'Project created successfully!',
      data: newProject,
    });
  } catch (error) {
    console.error('[Projects POST Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error creating project.',
    });
  }
};
