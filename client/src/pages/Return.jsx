import React from "react";

const ReturnRefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Return & Refund Policy</h1>

      <p className="mb-4">
        We understand that sometimes things don’t go as planned — maybe the size
        isn’t right, the color feels different, or it’s simply not what you
        expected. That’s why we’ve made our Return & Refund process as simple
        and fair as possible.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Eligibility for Returns</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Items must be returned within <strong>7 days</strong> of delivery.</li>
        <li>Product must be unused, in original packaging, and in the same condition as received.</li>
        <li>Some items (like personalized products) may not be eligible for return.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Refund Process</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-4">
        <li>Initiate a return request from your <strong>My Orders</strong> page.</li>
        <li>Our delivery partner will pick up the product.</li>
        <li>Once inspected and approved, we’ll process your refund within <strong>5–7 business days</strong>.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Refund Method</h2>
      <p className="mb-4">
        Refunds will be credited back to your original payment method:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Online payments → credited back to your bank/card/wallet.</li>
        <li>Cash on Delivery → refunded to your bank account via UPI or NEFT.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">When Refunds Are Not Applicable</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Products damaged due to misuse or improper handling.</li>
        <li>Items without original packaging or missing parts.</li>
        <li>Requests made after the return window has closed.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Our Commitment</h2>
      <p className="mb-4">
        We aim to make shopping with us risk-free. If something goes wrong, we’re here to
        make it right — quickly, fairly, and without unnecessary hassle.
      </p>

      <p className="mt-8 text-center font-semibold">
        Your satisfaction is our top priority — and we stand by every product we sell.
      </p>
    </div>
  );
};

export default ReturnRefundPolicy;
