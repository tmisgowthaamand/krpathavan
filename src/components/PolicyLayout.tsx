import { ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface PolicyLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const PolicyLayout = ({ children, title, description }: PolicyLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-muted/20">
        <div className="container mx-auto px-4 py-20 max-w-5xl">
          <div className="bg-background rounded-2xl shadow-sm border border-border/50 p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back
              </Link>
              <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-charcoal">{title}</h1>
              {description && (
                <p className="text-xl text-muted-foreground accent-font mb-12 border-b pb-8">{description}</p>
              )}
              <div className="prose prose-lg max-w-none prose-headings:font-poppins prose-headings:text-charcoal prose-headings:font-semibold prose-p:text-charcoal/80 prose-li:text-charcoal/80">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolicyLayout;
