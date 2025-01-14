import React, { useState } from 'react';
import {
  Book,
  Code,
  Video,
  Download,
  Search,
  BookOpen,
  FileText,
  Youtube,
  Wrench,
  Star,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// ... rest of the imports ...

const Resources = () => {
  // ... previous state declarations ...

  const categories = [
    // ... other categories ...
    {
      id: 'tools',
      title: 'Developer Tools',
      icon: Wrench, // Changed from Tool to Wrench
      description: 'Curated collection of tools, utilities, and resources for developers.',
      items: [
        // ... items remain the same ...
      ]
    }
  ];

  // ... rest of the component remains the same ...
};

export default Resources;