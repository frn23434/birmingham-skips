import { Link } from "wouter";
import { Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-primary mb-4" data-testid="text-404">404</h1>
          <h2 className="text-3xl font-bold mb-4" data-testid="text-not-found-title">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto" data-testid="text-not-found-message">
            The page you're looking for doesn't exist. It may have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button size="lg" className="gap-2" data-testid="button-go-home">
                <HomeIcon className="h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
