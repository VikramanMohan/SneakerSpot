const HelpCenter = () => {
  return (
    <section className="tracking-wider text-white lg:py-10 lg:px-6 md:px-10" data-aos="fade-up">
      <h2 className="mb-6 text-3xl font-bold text-center lg:text-4xl">Help Center</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Order Help */}
        <div className="p-6 bg-[#232227] shadow-md rounded-2xl hover:shadow-lg transition-all">
          <h3 className="mb-2 text-xl font-semibold text-white">Order Assistance</h3>
          <p className="mb-4 text-gray-400">
            Track your order, cancel or modify it, and view your order history.
          </p>
          <ul className="pl-5 text-gray-400 list-disc">
            <li>How to cancel or change an order</li>
            <li>Tracking status explained</li>
            <li>Why is my order delayed?</li>
          </ul>
        </div>

        {/* Shipping Help */}
        <div className="p-6 bg-[#232227] shadow-md rounded-2xl hover:shadow-lg transition-all">
          <h3 className="mb-2 text-xl font-semibold text-white">Shipping Information</h3>
          <p className="mb-4 text-gray-400">
            Learn about our delivery options, locations we ship to, and timelines.
          </p>
          <ul className="pl-5 text-gray-400 list-disc">
            <li>Delivery timeframes</li>
            <li>Shipping costs & free delivery rules</li>
            <li>Change delivery address</li>
          </ul>
        </div>

        {/* Account Help */}
        <div className="p-6 bg-[#232227] shadow-md rounded-2xl hover:shadow-lg transition-all">
          <h3 className="mb-2 text-xl font-semibold text-white">Account Support</h3>
          <p className="mb-4 text-gray-400">
            Manage your profile, reset passwords, and update preferences.
          </p>
          <ul className="pl-5 text-gray-400 list-disc">
            <li>Resetting password</li>
            <li>Updating profile details</li>
            <li>Deleting your account</li>
          </ul>
        </div>

        {/* FAQs */}
        <div className="p-6 bg-[#232227] shadow-md rounded-2xl hover:shadow-lg transition-all">
          <h3 className="mb-2 text-xl font-semibold text-white">Frequently Asked Questions</h3>
          <p className="mb-4 text-gray-400">
            Quick answers to common customer questions.
          </p>
          <ul className="pl-5 text-gray-400 list-disc">
            <li>Do I need an account to order?</li>
            <li>How to use a discount code?</li>
            <li>Can I exchange a product?</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
