import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { Leaf, Nut, Grape, ArrowRight, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import teaCategoryImage from '@/assets/tea-category.jpg';
import nutsCategoryImage from '@/assets/nuts-category.jpg';
import dryfruitsCategoryImage from '@/assets/dryfruits-category.jpg';

// Mock data for featured products
const featuredProducts = [
  {
    id: '1',
    name: 'Premium Assam Tea Powder',
    price: 700,
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/308434975/QH/SC/BW/9456940/lal-kaptaan-assam-tea-leaf-1kg-500x500.jpeg',
    category: 'tea',
    inStock: true,
    isNew: true,
    rating: 4.8,
    weight: '500g',
    description: 'Sourced from the lush gardens of Upper Assam, this robust black tea offers a rich, malty flavor and a deep amber color.',
    details: {
      benefits: ['Rich in antioxidants', 'Improves mental alertness', 'Supports heart health'],
      usage: 'Best enjoyed with milk and sugar for a traditional morning cup.'
    }
  },
  {
    id: '2',
    name: 'Premium Cashew Nuts',
    price: 2200,
    image: 'https://www.nutraj.com/cdn/shop/files/nutraj-premium-cashew-500gm-02_882x882.jpg?v=1754310557',
    category: 'nuts',
    inStock: true,
    rating: 4.9,
    weight: '500g',
    description: 'Our premium cashews are large, crunchy, and packed with a naturally sweet, creamy flavor.',
    details: {
      benefits: ['Supports heart health', 'Good source of magnesium', 'Rich in plant-based protein'],
      usage: 'Perfect as a healthy snack or for culinary use in desserts and curries.'
    }
  },
  {
    id: '3',
    name: 'Premium Dates',
    price: 1200,
    image: 'https://www.sharbatidates.com/cdn/shop/files/Untitled_design_-_2025-07-29T170736.435.webp?v=1753794566&width=1200',
    category: 'dry-fruits',
    inStock: true,
    rating: 4.7,
    weight: '500g',
    description: 'Succulent, soft, and naturally sweet dates sourced from the finest palms. Nature’s energy bars.',
    details: {
      benefits: ['Instant energy booster', 'High in fiber', 'Rich in potassium'],
      usage: 'Excellent as a pre-workout snack or natural sweetener in smoothies.'
    }
  },
  {
    id: '4',
    name: 'Pistachio Kernels',
    price: 2300,
    image: 'https://kunuts.com/cdn/shop/files/RoastedPistachiosSupreme.png?v=1715428842',
    category: 'nuts',
    inStock: true,
    isNew: true,
    rating: 4.8,
    weight: '500g',
    description: 'Vibrant green kernels that are naturally low in calories but high in flavor.',
    details: {
      benefits: ['Supports eye health', 'Heart-conscious snack', 'Rich in antioxidants'],
      usage: 'Great for snacking or as a colorful topping for salads and ice creams.'
    }
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Chennai',
    text: 'The tea quality is exceptional! Reminds me of my grandmother\'s traditional blend.',
    rating: 5
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Coimbatore',
    text: 'Best dry fruits in Tamil Nadu. Fresh, authentic, and reasonably priced.',
    rating: 5
  },
  {
    id: 3,
    name: 'Meera Krishnan',
    location: 'Madurai',
    text: 'Bulk orders are so convenient for our family business. Excellent service!',
    rating: 5
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Story Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-fluid">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold">
              From <span className="text-gradient-brand">Ariyalur</span>, with Authenticity
            </h2>
            <p className="text-lg text-muted-foreground accent-font leading-relaxed">
              K R Pathavan Trading Company has been the trusted source of premium tea,
              nuts, and dry fruits in Tamil Nadu. Our commitment to quality and authentic flavors has
              made us a household name across South India.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-accent">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Premium Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
              Our Premium <span className="text-gradient-brand">Collections</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of authentic Tamil Nadu products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <CategoryCard
              title="Premium Tea"
              description="Authentic Tamil Nadu tea powder blends, from traditional Assam to aromatic masala chai"
              href="/tea"
              icon={Leaf}
              variant="tea"
              productCount={15}
            />
            <CategoryCard
              title="Dry Fruits"
              description="Fresh, premium quality dates, figs, apricots and raisins sourced from the finest orchards"
              href="/dry-fruits"
              icon={Grape}
              variant="gold"
              productCount={20}
            />
            <CategoryCard
              title="Premium Nuts"
              description="Crunchy cashews, almonds, pistachios and walnuts perfect for snacking and cooking"
              href="/nuts"
              icon={Nut}
              variant="nuts"
              productCount={18}
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-muted/30">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
              Featured <span className="text-gradient-brand">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our customers' favorite picks
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/tea">
              <Button size="lg" variant="outline" className="btn-hero-outline">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
              What Our <span className="text-gradient-brand">Customers</span> Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by families across Tamil Nadu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-soft hover-lift">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="text-center">
                    <div className="font-semibold text-foreground mb-1">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="section-padding bg-gradient-to-r from-secondary via-primary to-accent text-white">
        <div className="container-fluid text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold">
            Partner with Us for Bulk Orders
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto accent-font">
            Special wholesale rates for restaurants, retailers, and distributors.
            Get premium quality products at competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90 shadow-lg">
              Get Bulk Pricing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-foreground">
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
