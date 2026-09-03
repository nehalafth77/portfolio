import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Project image URL is required'],
    },
    technologies: {
      type: [String],
      required: [true, 'Technologies list is required'],
    },
    githubUrl: {
      type: String,
      required: [true, 'GitHub repository URL is required'],
    },
    liveUrl: {
      type: String,
      required: [true, 'Live demo URL is required'],
    },
    category: {
      type: String,
      enum: ['Full Stack', 'Frontend', 'Backend'],
      default: 'Full Stack',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Project', projectSchema);
