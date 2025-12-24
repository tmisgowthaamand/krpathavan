import { useState } from 'react';
import { Heart, ShoppingCart, Eye, Scale, Info, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image?: string;
  category: string;
  inStock: boolean;
  isNew?: boolean;
  rating?: number;
  weight?: string;
  description?: string;
  details?: {
    benefits?: string[];
    usage?: string;
    origin?: string;
  };
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image = '/placeholder-product.png',
  category,
  inStock,
  isNew,
  rating = 4.5,
  weight = "500g",
  description = "Premium quality product selected for its authentic flavor and nutritional value.",
  details
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inStock) {
      addToCart({
        id,
        name,
        price,
        originalPrice,
        image,
        category
      });
    }
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="group relative product-card p-4 h-full flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted/10 rounded-lg mb-4 cursor-pointer">
        <Dialog>
          <DialogTrigger asChild>
            <div className="w-full h-full relative group/trigger">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-product.png';
                }}
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white text-primary px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Eye size={18} />
                  <span className="text-xs uppercase tracking-wider font-poppins">Quick View</span>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 overflow-hidden border-none shadow-2xl rounded-2xl bg-white">
            <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
              {/* Image Section */}
              <div className="md:w-1/2 bg-white flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-muted/20">
                <img
                  src={image}
                  alt={name}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {/* Details Section */}
              <div className="md:w-1/2 p-8 lg:p-10 space-y-8 bg-white overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary capitalize font-bold leading-none py-1">
                      {category}
                    </Badge>
                    <span className="text-lg font-black text-foreground flex items-center gap-2 bg-primary/5 px-4 py-1.5 rounded-full border-2 border-primary/20 uppercase tracking-tight shadow-sm">
                      <Scale size={20} className="text-primary" />
                      {weight}
                    </span>
                  </div>
                  <DialogTitle className="text-3xl lg:text-4xl font-poppins font-bold text-foreground leading-snug">
                    {name}
                  </DialogTitle>

                  <div className="flex items-end gap-4 pt-2">
                    <div className="text-4xl font-bold font-poppins text-primary">₹{price.toFixed(0)}</div>
                    {originalPrice && (
                      <div className="text-xl text-muted-foreground line-through decoration-red-500/30 mb-1">₹{originalPrice.toFixed(0)}</div>
                    )}
                    <div className="ml-auto flex items-center gap-1 bg-accent/10 px-2 py-0.5 rounded text-accent font-bold">
                      <span>{rating}</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-muted/30">
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-foreground flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
                      <Info size={16} className="text-primary" />
                      About this product
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {description}
                    </p>
                  </div>

                  {details?.benefits && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-widest text-muted-foreground">Key Benefits</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {details.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/80 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {details?.usage && (
                    <div className="p-5 bg-accent/5 rounded-xl border border-accent/20">
                      <h4 className="font-bold text-accent-foreground mb-2 flex items-center gap-2 uppercase text-xs tracking-widest">
                        Recommended Usage
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        {details.usage}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-8 mt-auto sticky bottom-0 bg-white border-t border-muted/30">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold shadow-lg shadow-primary/20"
                    disabled={!inStock}
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-3 h-5 w-5" />
                    {inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                  <Button
                    variant="outline"
                    className="h-14 w-14 p-0 border-2 hover:bg-muted/10 transition-colors"
                    onClick={toggleWishlist}
                  >
                    <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2 pointer-events-none z-10">
          {isNew && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground shadow-sm px-3 py-1 font-bold text-[10px] uppercase tracking-wider">
              New
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive" className="shadow-sm px-3 py-1 font-bold text-[10px] uppercase tracking-wider">
              -{discount}% OFF
            </Badge>
          )}
        </div>

        {!inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center rounded-lg pointer-events-none backdrop-blur-[1px] z-10">
            <Badge className="bg-foreground text-background font-bold text-xs px-4 py-2 uppercase tracking-wide">
              Out of Stock
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col">
        {/* Category & Weight */}
        <div className="flex items-center justify-between text-[10px] mb-2 px-1">
          <span className="text-muted-foreground font-bold uppercase tracking-widest bg-muted rounded-full px-2 py-0.5">{category}</span>
          <span className="text-foreground flex items-center gap-1.5 font-black uppercase tracking-tight text-sm">
            <Scale size={14} className="text-primary" />
            {weight}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-base md:text-lg line-clamp-1 mb-2 group-hover:text-primary transition-colors cursor-pointer px-1">
          {name}
        </h3>

        {/* Price & Rating */}
        <div className="flex items-center justify-between mt-auto mb-4 px-1">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-foreground">₹{price.toFixed(0)}</span>
            {originalPrice && originalPrice > price && (
              <span className="text-xs text-muted-foreground line-through decoration-red-500/50 font-bold opacity-60">
                ₹{originalPrice.toFixed(0)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 bg-accent/10 px-2 py-0.5 rounded text-accent">
            <span className="text-sm font-bold">{rating}</span>
            <span className="text-sm mb-0.5">★</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-5 gap-2">
          <Button
            onClick={handleAddToCart}
            disabled={!inStock}
            className="col-span-4 bg-primary hover:bg-primary/95 text-white font-bold shadow-sm transition-all active:scale-95 text-xs uppercase tracking-widest"
          >
            <ShoppingCart size={16} className="mr-2" />
            {inStock ? 'Add to Cart' : 'Stock Soon'}
          </Button>
          <Button
            variant="outline"
            className="p-0 border-muted hover:bg-muted/50 rounded-lg transition-all"
            onClick={toggleWishlist}
          >
            <Heart
              size={18}
              className={`${isWishlisted ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;