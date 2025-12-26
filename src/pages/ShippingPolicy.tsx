import PolicyLayout from '@/components/PolicyLayout';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <PolicyLayout
      title="Shipping Policy"
      description="Freshness Delivered with Care"
    >
      <p className="leading-relaxed">
        At K R Pathavan Trading Company, we are committed to ensuring that your premium teas, nuts, and dry fruits
        reach you in perfect condition. This Shipping Policy explains how we process orders, handle packaging, and
        manage deliveries for both retail and wholesale customers.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Order Processing Time</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Orders are processed within 2–4 business days of payment confirmation.</li>
        <li>Orders placed on Sundays or public holidays will be processed on the next working day.</li>
        <li>Bulk/wholesale orders may require longer preparation time depending on quantity and product availability. Customers will be informed in advance.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Shipping Destinations & Delivery Timelines</h2>

      <h3 className="text-xl mt-6 mb-3">Domestic Shipping (India)</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><strong>Metro Cities:</strong> 3–6 business days after dispatch</li>
        <li><strong>Non-Metro Cities & Semi-Urban Areas:</strong> 5–10 business days after dispatch</li>
        <li><strong>Remote/Rural Areas:</strong> 7–12 business days after dispatch</li>
      </ul>

      <h3 className="text-xl mt-6 mb-3">International Shipping</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>International delivery may be available for wholesale/B2B orders.</li>
        <li>Timelines depend on the destination country, customs clearance, and shipping partner schedules.</li>
        <li>Customers will be informed of estimated timelines during order confirmation.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Shipping Charges</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Charges are calculated based on order weight, packaging type, and delivery location.</li>
        <li>Shipping costs will be displayed clearly at checkout before payment.</li>
        <li>Free shipping offers may apply during promotions or for orders above a certain value.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Packaging & Handling</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Products are packed in airtight, food-grade, tamper-proof packaging to ensure freshness.</li>
        <li>Nuts and dry fruits are sealed to maintain shelf life and avoid contamination.</li>
        <li>Tea is packed in moisture-proof containers to preserve aroma and quality.</li>
        <li>Bulk/wholesale orders are carefully palletized and secured for safe long-distance transit.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Tracking Your Order</h2>
      <p className="mb-4">Once dispatched, customers will receive:</p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>A tracking ID via SMS/email</li>
        <li>A real-time tracking link to monitor shipment progress</li>
      </ul>
      <p className="mb-8">Please allow 24–48 hours for tracking details to update after dispatch.</p>

      <h2 className="text-2xl mt-10 mb-4">Delays & Exceptions</h2>
      <p className="mb-4">While we strive for timely delivery, certain factors may cause delays, including:</p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Courier or logistics partner disruptions</li>
        <li>Extreme weather conditions</li>
        <li>Regional holidays or strikes</li>
        <li>Customs delays for international orders</li>
      </ul>
      <p>In such cases, our support team will provide updates and assistance.</p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-charcoal">Contact Us</h2>
      <p className="mb-6 text-charcoal/80">For questions, shipping support, or concerns, please contact:</p>

      <div className="space-y-3 mb-12">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <span className="text-charcoal/80">43/A, ULKOTTAI ROAD, PAAPANKULAM, JAYANKONDAM, ARIYALUR, TAMIL NADU - 621802</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-secondary shrink-0" />
          <span className="text-charcoal/80">+91 93604 28764</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-accent shrink-0" />
          <span className="text-charcoal/80">info@krpathavan.com <span className="mx-2 text-border">|</span> krpathavantradingcompany@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-primary shrink-0" />
          <span className="text-charcoal/80 font-medium">krpathavan.com</span>
        </div>
      </div>

      <div className="pt-8 border-t border-border/50 space-y-1">
        <p className="text-sm text-muted-foreground">Last Updated: August 2025</p>
        <p className="text-sm text-muted-foreground">© 2025 K R Pathavan Trading Company. All Rights Reserved.</p>
      </div>
    </PolicyLayout>
  );
};

export default ShippingPolicy;
