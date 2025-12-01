export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  price: number;
  category: "powerbi" | "ml" | "dl" | "web";
  image: string;
  featured: boolean;
  features: string[];
  tools: string[];
  deliverables: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Sales Analytics Dashboard",
    description: "Comprehensive Power BI dashboard for retail sales analysis with interactive visualizations.",
    fullDescription: "A complete Power BI project featuring advanced sales analytics with multiple interactive dashboards. Includes year-over-year comparisons, regional analysis, product performance tracking, and customer segmentation. Perfect for understanding retail analytics and Power BI best practices.",
    price: 1499,
    category: "powerbi",
    image: "/placeholder.svg",
    featured: true,
    features: [
      "Interactive sales dashboard with drill-down capabilities",
      "Year-over-year and month-over-month analysis",
      "Regional and product performance metrics",
      "Customer segmentation analysis",
      "Revenue forecasting visualizations"
    ],
    tools: ["Power BI Desktop", "DAX", "Power Query", "Excel"],
    deliverables: [
      "Complete .pbix file with all visualizations",
      "Sample dataset (Excel/CSV)",
      "Detailed PDF documentation",
      "PowerPoint presentation with insights",
      "Video walkthrough (20 minutes)"
    ]
  },
  {
    id: "2",
    title: "Customer Churn Prediction",
    description: "Machine learning model to predict customer churn with 90%+ accuracy using Python and Scikit-learn.",
    fullDescription: "End-to-end machine learning project for predicting customer churn in telecom industry. Features comprehensive data preprocessing, feature engineering, model comparison, and deployment-ready code. Includes detailed analysis and visualizations.",
    price: 1999,
    category: "ml",
    image: "/placeholder.svg",
    featured: true,
    features: [
      "Complete data preprocessing pipeline",
      "Feature engineering and selection",
      "Multiple ML model comparison (RF, XGBoost, SVM)",
      "Hyperparameter tuning with GridSearchCV",
      "Model evaluation with ROC-AUC, precision-recall"
    ],
    tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    deliverables: [
      "Complete Python code (.py and .ipynb)",
      "Trained model files (.pkl)",
      "Dataset and preprocessing scripts",
      "Detailed PDF report with methodology",
      "PPT presentation",
      "30-minute video explanation"
    ]
  },
  {
    id: "3",
    title: "Image Classification CNN",
    description: "Deep learning CNN model for multi-class image classification with transfer learning.",
    fullDescription: "Advanced deep learning project using Convolutional Neural Networks for image classification. Implements transfer learning with pre-trained models (VGG16, ResNet) and achieves high accuracy. Includes data augmentation and model optimization techniques.",
    price: 2499,
    category: "dl",
    image: "/placeholder.svg",
    featured: true,
    features: [
      "CNN architecture with transfer learning",
      "Data augmentation pipeline",
      "Training with callbacks (EarlyStopping, ModelCheckpoint)",
      "Model performance visualization",
      "Confusion matrix and classification report"
    ],
    tools: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    deliverables: [
      "Complete Python code with Jupyter notebooks",
      "Trained model weights (.h5)",
      "Image dataset (organized)",
      "Comprehensive PDF documentation",
      "PPT with architecture diagrams",
      "40-minute detailed video tutorial"
    ]
  },
  {
    id: "4",
    title: "E-commerce Website",
    description: "Fully responsive e-commerce website with shopping cart, payment integration, and admin panel.",
    fullDescription: "Complete e-commerce solution built with modern web technologies. Features product catalog, shopping cart, user authentication, payment gateway integration, and comprehensive admin dashboard. Mobile-responsive and SEO optimized.",
    price: 2999,
    category: "web",
    image: "/placeholder.svg",
    featured: true,
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and wishlist functionality",
      "Payment gateway integration (demo)",
      "Admin panel for product management",
      "Responsive design for all devices"
    ],
    tools: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    deliverables: [
      "Complete source code (frontend + backend)",
      "Database setup scripts",
      "Deployment guide",
      "API documentation",
      "User manual PDF",
      "PPT presentation",
      "45-minute setup and demo video"
    ]
  },
  {
    id: "5",
    title: "HR Analytics Dashboard",
    description: "Power BI dashboard analyzing employee attrition, performance, and workforce trends.",
    fullDescription: "Comprehensive HR analytics dashboard with insights into employee attrition, department performance, salary analysis, and workforce demographics. Includes predictive indicators for employee retention.",
    price: 1299,
    category: "powerbi",
    image: "/placeholder.svg",
    featured: false,
    features: [
      "Employee attrition analysis",
      "Department-wise performance metrics",
      "Salary and compensation analysis",
      "Workforce demographics visualization",
      "Retention prediction indicators"
    ],
    tools: ["Power BI Desktop", "DAX", "Power Query"],
    deliverables: [
      ".pbix file with complete dashboard",
      "Sample HR dataset",
      "PDF documentation",
      "PPT presentation",
      "15-minute video guide"
    ]
  },
  {
    id: "6",
    title: "Sentiment Analysis System",
    description: "NLP-based sentiment analysis for product reviews using LSTM neural networks.",
    fullDescription: "Advanced NLP project using deep learning (LSTM) to classify sentiment in product reviews. Includes text preprocessing, word embeddings, and model training with real-world review data.",
    price: 2199,
    category: "dl",
    image: "/placeholder.svg",
    featured: false,
    features: [
      "Text preprocessing and tokenization",
      "Word embeddings (Word2Vec/GloVe)",
      "LSTM-based sentiment classifier",
      "Model evaluation metrics",
      "Real-time prediction interface"
    ],
    tools: ["Python", "TensorFlow", "NLTK", "Pandas"],
    deliverables: [
      "Complete Python code and notebooks",
      "Trained model files",
      "Review dataset",
      "PDF documentation",
      "PPT presentation",
      "30-minute video tutorial"
    ]
  },
  {
    id: "7",
    title: "House Price Prediction",
    description: "Machine learning regression model for predicting real estate prices with feature analysis.",
    fullDescription: "Complete regression analysis project for house price prediction. Includes exploratory data analysis, feature engineering, multiple model comparison, and detailed interpretation of results.",
    price: 1799,
    category: "ml",
    image: "/placeholder.svg",
    featured: false,
    features: [
      "Extensive EDA with visualizations",
      "Feature engineering and selection",
      "Multiple regression models (Linear, Ridge, Lasso, Random Forest)",
      "Cross-validation and model tuning",
      "Feature importance analysis"
    ],
    tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    deliverables: [
      "Python code and Jupyter notebooks",
      "Trained models (.pkl)",
      "Dataset and data dictionary",
      "Detailed PDF report",
      "PPT presentation",
      "25-minute explanation video"
    ]
  },
  {
    id: "8",
    title: "Portfolio Website Template",
    description: "Modern, responsive portfolio website with animations and contact form integration.",
    fullDescription: "Stunning portfolio website template perfect for showcasing projects and skills. Features smooth animations, responsive design, contact form, and easy customization. SEO optimized and fast-loading.",
    price: 999,
    category: "web",
    image: "/placeholder.svg",
    featured: false,
    features: [
      "Responsive design for all devices",
      "Smooth scroll animations",
      "Project showcase section",
      "Skills and experience timeline",
      "Contact form with email integration",
      "SEO optimized"
    ],
    tools: ["React", "Tailwind CSS", "Framer Motion"],
    deliverables: [
      "Complete source code",
      "Customization guide",
      "Deployment instructions",
      "PDF documentation",
      "20-minute setup video"
    ]
  }
];
