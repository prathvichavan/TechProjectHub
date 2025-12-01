import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  category: string; // this can be "Power BI" / "Machine Learning" / etc.
}

const CategoryCard = ({ title, description, icon, category }: CategoryCardProps) => {

  // Convert display name to correct Supabase-friendly key
  const formattedCategory = category
    .toLowerCase()
    .replace(/\s+/g, "")        // remove spaces → "Power BI" → "powerbi"
    .replace(/-/g, "");         // remove hyphens if any

  return (
    <Link to={`/projects?category=${formattedCategory}`}>
      <Card className="group relative overflow-hidden border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-primary hover:-translate-y-2 bg-gradient-card animate-fade-in-up">
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        <div className="p-6 relative z-10">
          <div className="mb-4 overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
            <img
              src={icon}
              alt={title}
              className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 transition-colors duration-300">
            {description}
          </p>
          <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-all duration-300">
            Explore Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-bounce-in" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
