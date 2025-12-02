import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/useProjects";

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: projects = [], isLoading } = useProjects();

  // Read category from URL
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("category") || "all"
  );

  // Sync URL with state
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  /** 
   * These MUST MATCH what’s in Supabase
   * Power Bi | Machine Learning | Deep Learning
   */
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "powerbi", label: "Power BI" },
    { value: "machinelearning", label: "Machine Learning" },
    { value: "deeplearning", label: "Deep Learning" },
    { value: "websitedevelopment", label: "Website Development" },
    { value: "cloudbased", label: "Cloud Based" }
  ];

  // Helper to normalize category strings to slugs
  const normalizeCategory = (cat: string) => {
    return cat.toLowerCase().replace(/\s+/g, "").replace(/-/g, "");
  };

  // Correct filtering
  const filteredProjects =
    selectedCategory === "all" || selectedCategory === "All Projects"
      ? projects
      : projects.filter(
        (p) =>
          p.category &&
          normalizeCategory(p.category) === normalizeCategory(selectedCategory)
      );

  // Category button click handler
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />

      {/* Header Section */}
      <section className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            All Projects
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in-up">
            Browse our complete collection of ready-made academic and IT projects
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border bg-background/80 backdrop-blur sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.value)}
                className={selectedCategory === category.value ? "shadow-primary" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">Loading projects...</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredProjects.length} project
                  {filteredProjects.length !== 1 ? "s" : ""}
                </p>
              </div>

              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
                  {filteredProjects.map((project, index) => (
                    <div
                      key={project.id}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">
                    No projects found in this category.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projects;
