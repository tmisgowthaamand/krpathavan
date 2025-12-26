import PolicyLayout from '@/components/PolicyLayout';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const CancellationRefundPolicy = () => {
  return (
    <PolicyLayout
      title="Cancellation & Refund Policy"
      description="Simple, Fair & Transparent"
    >
      <p className="mb-6">
        At K R Pathavan Trading Company, we take pride in providing high-quality teas, nuts, and dry fruits sourced with care.
        While we strive to ensure that every order reaches you fresh and intact, we understand that cancellations or issues may
        occasionally arise. This policy outlines how we handle cancellations, returns, and refunds.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Order Cancellations</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Cancellation Window:</strong> Orders may be cancelled within 2 hours of purchase, provided they have not yet been packed or dispatched.</li>
        <li>Once an order is processed or handed over to the courier, cancellations are no longer possible due to the nature of food products.</li>
        <li>Customers must share their Order ID when requesting cancellation.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Returns & Replacements</h2>
      <p className="mb-2">Returns are accepted only in the following cases:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Products are damaged or tampered during delivery.</li>
        <li>The wrong product was delivered.</li>
        <li>There is a verified quality or packaging defect.</li>
      </ul>
      <p className="font-medium mb-2">Conditions:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Return requests must be raised within 48 hours of delivery.</li>
        <li>The product must remain sealed, unused, and in original packaging.</li>
        <li>Customers must share clear photos/videos of the issue for verification.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Non-Returnable Items</h2>
      <p className="mb-2">For reasons of food safety and hygiene, we cannot accept returns for:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Opened or partially consumed tea, nuts, or dry fruits.</li>
        <li>Products damaged due to improper storage after delivery.</li>
        <li>Items returned without authorization.</li>
        <li>Bulk/wholesale orders, unless a verified defect is confirmed.</li>
      </ul>

      <p className="leading-relaxed">
        We strive to provide a seamless experience. However, we understand that sometimes you may need to cancel or request a refund.
        Please review our policy below for clarity and transparency.
      </p>

      <h2 className="text-2xl mt-10 mb-4">Order Cancellations</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Cancellations are accepted within <strong>2 hours</strong> of order placement, provided the order has not been dispatched.</li>
        <li>To cancel, please contact us immediately via WhatsApp or Email with your Order ID.</li>
        <li>Once dispatched, the order cannot be cancelled, and our Return Policy will apply.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Refund Eligibility</h2>
      <p className="mb-4">Refunds are initiated only under the following conditions:</p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>The order was cancelled within the stipulated timeframe.</li>
        <li>The products received were damaged, tampered, or incorrect (subject to verification).</li>
        <li>The order was not delivered due to a logistics error on our part.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Refund Process</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Approved refunds will be processed via the original payment method.</li>
        <li>It typically takes <strong>5–7 business days</strong> for the amount to reflect in your account, depending on your bank/payment provider.</li>
        <li>For payments made via UPI, refunds are usually faster.</li>
      </ul>

      <h2 className="text-2xl mt-10 mb-4">Non-Refundable Cases</h2>
      <p className="mb-4">Refunds will not be issued if:</p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>The delivery was unsuccessful due to an incorrect address provided by the customer.</li>
        <li>The customer was unavailable at the time of delivery after multiple attempts.</li>
        <li>Natural variations in taste, color, or size occur (as products are natural and seasonal).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-charcoal">Contact Us</h2>
      <p className="mb-6 text-charcoal/80">For cancellation or refund support, please contact:</p>

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

export default CancellationRefundPolicy;
