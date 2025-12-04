import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";

const ARTICLES_PER_PAGE = 10;

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Filter articles by category
    const filteredArticles = selectedCategory
        ? blogArticles.filter((article) => article.category === selectedCategory)
        : blogArticles;

    // Pagination
    const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    const currentArticles = filteredArticles.slice(startIndex, endIndex);

    // Get unique categories
    const categories = Array.from(new Set(blogArticles.map((a) => a.category)));

    return (
        <div className="min-h-screen bg-gradient-hero flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                        TechProjectHub Blog
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Tutorials, guides, and insights on projects, AI/ML, Power BI, deployment, and more.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 justify-center mb-8 animate-slide-in">
                    <Button
                        variant={selectedCategory === null ? "default" : "outline"}
                        onClick={() => {
                            setSelectedCategory(null);
                            setCurrentPage(1);
                        }}
                        className="hover:scale-105 transition-all duration-300"
                    >
                        All Articles
                    </Button>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            onClick={() => {
                                setSelectedCategory(category);
                                setCurrentPage(1);
                            }}
                            className="hover:scale-105 transition-all duration-300"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Articles Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {currentArticles.map((article, index) => (
                        <Card
                            key={article.id}
                            className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up bg-gradient-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardHeader className="p-0">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={article.featuredImage}
                                        alt={article.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.currentTarget.src = "/placeholder.svg";
                                        }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-primary">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{article.readingTime} min read</span>
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h2>

                                <p className="text-muted-foreground mb-4 line-clamp-3">
                                    {article.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded"
                                        >
                                            <Tag className="h-3 w-3" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link to={`/blog/${article.slug}`}>
                                    <Button className="w-full shadow-primary hover:shadow-secondary group">
                                        Read More
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 animate-fade-in">
                        <Button
                            variant="outline"
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="hover:scale-105 transition-all"
                        >
                            Previous
                        </Button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <Button
                                key={page}
                                variant={currentPage === page ? "default" : "outline"}
                                onClick={() => setCurrentPage(page)}
                                className="hover:scale-105 transition-all"
                            >
                                {page}
                            </Button>
                        ))}

                        <Button
                            variant="outline"
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="hover:scale-105 transition-all"
                        >
                            Next
                        </Button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
