import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  price: number;
  category: "powerbi" | "ml" | "dl" | "web";
  image: string;
  featured?: boolean;
  features?: string[];
  tools?: string[];
  deliverables?: string[];
}

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      return data.map((project) => ({
        id: project.id,
        title: project.title,
        description: project.short_description,
        fullDescription: project.full_description,
        price: Number(project.price),
        category: project.category as "powerbi" | "ml" | "dl" | "web",
        image: project.thumbnail_url,
        featured: false, // Can be extended later
        features: [],
        tools: [],
        deliverables: [],
      })) as Project[];
    },
  });
};
