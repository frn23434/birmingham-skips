import { Link } from "wouter";
import { Wrench, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <a className="flex items-center cursor-pointer" data-testid="link-home">
              <Wrench className="text-primary text-2xl mr-3" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Bradford Plumbing</h1>
                <p className="text-xs text-muted-foreground">Directory of Local Plumbers</p>
              </div>
            </a>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="link-home-nav">
                Home
              </a>
            </Link>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Emergency Services
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <button className="md:hidden text-foreground" data-testid="button-menu">
            <Menu className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
