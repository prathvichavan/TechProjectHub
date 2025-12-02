import { useAuth } from "@/components/AuthProvider";
import { Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, User, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
    const { user, signOut } = useAuth();
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!user) return;

            try {
                const { data, error } = await supabase
                    .from('orders')
                    .select('*, projects(*)')
                    .eq('user_id', user.id)
                    .eq('status', 'paid')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setOrders(data || []);
            } catch (error) {
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [user]);

    const handleLogout = async () => {
        try {
            await signOut();
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error("Failed to log out");
        }
    };

    if (!user) {
        return <Navigate to="/auth/login" replace />;
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <Button variant="outline" onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Profile Information
                            </CardTitle>
                            <User className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold truncate">{user.email}</div>
                            <p className="text-xs text-muted-foreground">
                                User ID: {user.id.slice(0, 8)}...
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-2 lg:col-span-3">
                        <CardHeader>
                            <CardTitle>My Projects</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {loading ? (
                                <div className="text-center py-8">Loading projects...</div>
                            ) : orders.length > 0 ? (
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {orders.map((order: any) => (
                                        <div key={order.id} className="border rounded-lg p-4 flex flex-col space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src={order.projects?.thumbnail_url}
                                                    alt={order.projects?.title}
                                                    className="w-12 h-12 rounded object-cover"
                                                />
                                                <div>
                                                    <h3 className="font-semibold line-clamp-1">{order.projects?.title}</h3>
                                                    <p className="text-xs text-muted-foreground">{new Date(order.created_at).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                            <Button asChild size="sm" className="w-full mt-auto">
                                                <Link to={`/download/${order.project_id}`}>
                                                    Download
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-muted-foreground">
                                    No projects purchased yet.
                                    <div className="mt-4">
                                        <Button asChild variant="outline">
                                            <Link to="/projects">Browse Projects</Link>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;
