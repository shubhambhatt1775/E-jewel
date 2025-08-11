import React from "react";

const PaymentMethods = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Payment Methods</h1>

      <p className="mb-4">
        We know that a smooth and secure payment experience is just as important
        as finding the perfect product. That’s why we offer multiple payment
        options to suit your preferences — whether you like the speed of digital
        wallets, the reliability of cards, or the comfort of paying in cash.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Available Payment Options</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Credit & Debit Cards:</strong> We accept Visa, MasterCard, Maestro, and RuPay.</li>
        <li><strong>UPI & Wallets:</strong> Pay easily via Google Pay, PhonePe, Paytm, or other UPI apps.</li>
        <li><strong>Net Banking:</strong> Available for all major banks with secure gateways.</li>
        <li><strong>Cash on Delivery (COD):</strong> Pay in cash when your order arrives at your doorstep.</li>
        <li><strong>EMI Options:</strong> Flexible installment plans for select banks and cards.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Secure Transactions</h2>
      <p className="mb-4">
        All online payments are processed through encrypted gateways that comply
        with PCI DSS standards. We never store your card details, ensuring your
        information remains private and secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Process</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-4">
        <li>Select your preferred payment method at checkout.</li>
        <li>Complete the secure payment process.</li>
        <li>Receive instant confirmation of your order and payment.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Our Promise</h2>
      <p className="mb-4">
        Whether you’re shopping at midnight or during a lunch break, we’ve made
        sure payments are fast, flexible, and worry-free. If you ever face
        issues during checkout, our support team is always ready to help.
      </p>

      <p className="mt-8 text-center font-semibold">
        Your trust is our priority — and that starts with safe, seamless payments.
      </p>
    </div>
  );
};

export default PaymentMethods;
