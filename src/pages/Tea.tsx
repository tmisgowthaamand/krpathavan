import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Leaf } from 'lucide-react';

// Mock data - would come from API
const teaProducts = [
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
    description: 'Sourced from the lush gardens of Upper Assam, this robust black tea offers a rich, malty flavor and a deep amber color. Perfect for a morning energy boost.',
    details: {
      benefits: ['Rich in antioxidants', 'Improves mental alertness', 'Supports heart health', 'Boosts energy levels'],
      usage: 'Boil with water and milk. Add sugar or honey to taste. Best enjoyed for breakfast.',
      origin: 'Assam, India'
    }
  },
  {
    id: '2',
    name: 'Traditional Tamil Tea Blend',
    price: 900,
    image: 'https://ootychocolatefactory.in/cdn/shop/files/StrongTea500GM.webp?v=1714117594&width=900',
    category: 'tea',
    inStock: true,
    rating: 4.7,
    weight: '500g',
    description: 'A specially curated strong blend that captures the authentic taste of South Indian tea stalls. High-quality leaves processed for a bold kick.',
    details: {
      benefits: ['Instant refreshment', 'Strong aroma', 'Aids metabolism', 'High caffeine content for focus'],
      usage: 'Traditionally prepared as "Meter Chai" with thick milk and aromatic spices.',
      origin: 'Nilgiris, Tamil Nadu'
    }
  },
  {
    id: '3',
    name: 'Organic Green Tea Powder',
    price: 2500,
    image: 'https://images-cdn.ubuy.co.in/66055ea29e4bc57f6835d189-encha-matcha-green-tea-powder-organic.jpg',
    category: 'tea',
    inStock: true,
    rating: 4.6,
    weight: '500g',
    description: '100% organic green tea leaves stone-ground into a fine powder. Rich in EGCG and vitamins, offering a subtle earthy taste with floral notes.',
    details: {
      benefits: ['Boosts metabolic rate', 'Rich in catechins (EGCG)', 'Supports detoxification', 'Improves skin health'],
      usage: 'Whisk with hot water (80°C) until frothy. Can also be added to smoothies or lattes.',
      origin: 'Organic Gardens, Nilgiris'
    }
  },
  {
    id: '4',
    name: 'Cardamom Flavored Tea',
    price: 650,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOw-Mme51ko7dpwpHcgGyINiY2CvhivWYpZw&s',
    category: 'tea',
    inStock: false,
    rating: 4.9,
    weight: '500g',
    description: 'Premium tea leaves infused with the natural essence of freshly ground green cardamom pods. A refreshing and aromatic experience in every sip.',
    details: {
      benefits: ['Natural digestive aid', 'Relieves bloating', 'Fresh breath', 'Reduces stress'],
      usage: 'Brew with milk and a touch of ginger for a classic elachi chai.',
      origin: 'Idukki/Ariyalur Blend'
    }
  },
  {
    id: '5',
    name: 'Ginger Tea Blend',
    price: 800,
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/454882056/HT/LJ/NT/186300671/jfhgjfjh-500x500.jpg',
    category: 'tea',
    inStock: true,
    rating: 4.5,
    weight: '500g',
    description: 'Perfect for rainy days, this zesty blend combines strong CTC tea with dried ginger bits. Known for its warming properties and spicy undertones.',
    details: {
      benefits: ['Anti-inflammatory properties', 'Great for immunity', 'Relieves cold and cough', 'Aids digestion'],
      usage: 'Enjoy hot with milk or as a lemon-ginger black tea.',
      origin: 'Western Ghats'
    }
  },
  {
    id: '6',
    name: 'Masala Chai Powder',
    price: 1000,
    image: 'https://twoandabud.com/cdn/shop/files/Untitleddesign_18_6d2471b7-6e46-4088-9816-6326faffc6ac.png?v=1716289483',
    category: 'tea',
    inStock: true,
    isNew: true,
    rating: 4.8,
    weight: '500g',
    description: 'A powerful blend of 7 traditional Indian spices: CLove, Cardamom, Cinnamon, Black Pepper, Ginger, Star Anise, and Nutmeg. The ultimate Indian tea experience.',
    details: {
      benefits: ['Immunity booster', 'Rich in antioxidants', 'Natural energy lifter', 'Improves gut health'],
      usage: 'Add 1/4 teaspoon per cup while brewing your regular tea.',
      origin: 'Traditional Recipe'
    }
  }
];

const Tea = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");

  const filteredProducts = teaProducts
    .filter((product): product is typeof product & {
      name: string;
      price: number;
      category: string;
      inStock: boolean;
    } => {
      // Ensure all required properties exist and are of correct type
      const hasRequiredProps =
        typeof product?.name === 'string' &&
        typeof product?.price === 'number' &&
        typeof product?.category === 'string' &&
        typeof product?.inStock === 'boolean';

      if (!hasRequiredProps) return false;

      // Apply search and filter
      const searchTermLower = searchTerm.toLowerCase();
      const matchesSearch = product.name.toLowerCase().includes(searchTermLower);

      let matchesFilter = true;
      if (filterBy === "inStock") {
        matchesFilter = product.inStock === true;
      } else if (filterBy === "new") {
        matchesFilter = product.isNew === true;
      } else if (filterBy === "sale") {
        matchesFilter = !!(product as any).originalPrice;
      }

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "rating": return (b.rating || 0) - (a.rating || 0);
        default: return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="container-fluid">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Leaf size={16} />
              <span>Premium Tea Collection</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-poppins font-semibold text-foreground">
              Authentic Tamil Nadu <span className="text-gradient-brand">Tea Powder</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto accent-font">
              Sourced directly from the finest tea gardens of Tamil Nadu. Experience the rich,
              authentic flavors with our fresh approach to traditional blends.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 px-4 border-b">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search teas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Items</SelectItem>
                    <SelectItem value="inStock">In Stock</SelectItem>
                    <SelectItem value="new">New Items</SelectItem>
                    <SelectItem value="sale">On Sale</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-36">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-fluid">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No teas found matching your criteria.</p>
              <Button onClick={() => { setSearchTerm(""); setFilterBy("all"); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tea;