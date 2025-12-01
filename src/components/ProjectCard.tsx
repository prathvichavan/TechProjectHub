import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IndianRupee } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
}

const ProjectCard = ({ id, title, description, price, category, image, featured }: ProjectCardProps) => {
  const getCategoryColor = (cat: string) => {
    const colors: { [key: string]: string } = {
      "Power BI": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      "Machine Learning": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Deep Learning": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Web Development": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    };
    return colors[cat] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-primary hover:-translate-y-2 bg-gradient-card animate-scale-in">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-125 group-hover:rotate-2"
        />
        {featured && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground shadow-accent animate-glow z-20">
            Featured
          </Badge>
        )}
      </div>
      <div className="p-6">
        <div className="mb-3">
          <Badge className={getCategoryColor(category)}>
            {category}
          </Badge>
        </div>
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 transition-colors duration-300">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-2xl font-bold text-primary transition-all duration-300 group-hover:scale-110">
            <IndianRupee className="h-5 w-5" />
            <span>{price}</span>
          </div>
          <Button asChild size="sm" className="shadow-primary group-hover:shadow-secondary transition-all duration-300">
            <Link to={`/project/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
