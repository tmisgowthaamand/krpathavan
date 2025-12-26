import PolicyLayout from '@/components/PolicyLayout';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const ReturnPolicy = () => {
  return (
    <PolicyLayout
      title="Return Policy"
      description="Quality Guaranteed, Support Assured"
    >
      <p className="leading-relaxed">
        At K R Pathavan Trading Company, we are committed to delivering premium quality tea, nuts, and dry fruits.
        Your satisfaction is our priority. If you encounter any issues with your order, we are here to help.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Return Eligibility</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><strong>Damaged or Tampered:</strong> If the product package is damaged or tampered with at the time of delivery.</li>
        <li><strong>Incorrect Item:</strong> If you received a different item than what you ordered.</li>
        <li><strong>Quality Concerns:</strong> If there is a verified quality defect (please provide proof).</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Time Period</h2>
      <p className="mb-8">
        Return requests must be initiated within <strong>48 hours</strong> of receiving the delivery.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Conditions for Return</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>The product must be unused and in its original packaging.</li>
        <li>The seal must remain intact (for food safety reasons).</li>
        <li>Proof of purchase (Order ID) and clear photos/videos of the issue are required.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Non-Returnable Items</h2>
      <p className="mb-4">The following items cannot be returned due to hygiene and safety standards:</p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Items that have been opened or partially consumed.</li>
        <li>Products damaged due to improper storage after delivery.</li>
        <li>Bulk orders, except in cases of confirmed manufacturing defects.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Process</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li>Contact us via WhatsApp or Email with your Order ID and evidence of the issue.</li>
        <li>Our team will review your request within 24-48 hours.</li>
        <li>Once approved, we will arrange for a replacement or initiate a refund.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-charcoal">Contact Us</h2>
      <p className="mb-6 text-charcoal/80">For any questions regarding returns, please reach out to us:</p>

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

export default ReturnPolicy;
