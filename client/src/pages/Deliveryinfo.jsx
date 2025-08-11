import React from "react";

const DeliveryInfo = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Delivery Information</h1>

      <p className="mb-4">
        We believe that receiving your order should be as exciting and smooth as
        placing it. That’s why our delivery process is designed with care,
        precision, and transparency — so you always know where your order is and
        when it will arrive.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">How We Process Orders</h2>
      <p className="mb-4">
        Once your order is confirmed, our system instantly sends it to our
        fulfillment team. Each item is carefully inspected, securely packed, and
        labeled for shipping within 24 hours. Our packaging is designed to
        protect your items while also being eco-friendly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Delivery Timeline</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Local Orders:</strong> Delivered within 1–3 working days.</li>
        <li><strong>Domestic Orders:</strong> Delivered within 3–7 working days.</li>
        <li><strong>International Orders:</strong> Delivered within 7–14 working days.</li>
      </ul>
      <p className="mb-4">
        Delivery times may vary slightly depending on product availability,
        location, and unforeseen events like extreme weather.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Tracking Your Order</h2>
      <p className="mb-4">
        The moment your order leaves our warehouse, you’ll receive a tracking
        link via email and SMS. You can use this link to monitor your package in
        real-time until it reaches your doorstep.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Special Handling</h2>
      <p className="mb-4">
        For fragile, high-value, or customized products, we offer special
        handling and premium courier services to ensure maximum safety during
        transit.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Our Commitment</h2>
      <p className="mb-4">
        We’re committed to delivering your order on time and in perfect
        condition. If there’s ever an issue, our support team is here to help
        you 24/7 — because your satisfaction is our priority.
      </p>

      <p className="mt-8 text-center font-semibold">
        From our warehouse to your home, we’re with you every step of the way.
      </p>
    </div>
  );
};

export default DeliveryInfo;
