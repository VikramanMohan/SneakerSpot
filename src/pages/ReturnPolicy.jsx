const ReturnsPolicy = () => {
  return (
    <section className="text-white lg:py-10 lg:px-6 md:px-10" data-aos="fade-up">
      <h2 className="mb-6 text-3xl font-bold text-center">Returns & Refund Policy</h2>

      <div className="max-w-5xl p-6 mx-auto bg-[#232227] shadow-md rounded-2xl transition-all hover:shadow-lg">
        <h3 className="mb-4 text-xl font-semibold text-white">Easy 7-Day Return</h3>
        <p className="mb-4 text-gray-400">
          Not satisfied with your sneakers? You can return them within 7 days of delivery as long as the product is unused, unwashed, and in original packaging.
        </p>

        <h3 className="mb-4 text-xl font-semibold text-white">Return Process</h3>
        <ul className="pl-5 mb-4 text-gray-400 list-disc">
          <li>Login to your account and go to 'My Orders'</li>
          <li>Select the item and choose 'Return'</li>
          <li>Pick a return reason and confirm the pickup schedule</li>
        </ul>

        <h3 className="mb-4 text-xl font-semibold text-white">Refund Options</h3>
        <p className="mb-4 text-gray-400">
          Refunds are initiated after we receive and inspect the returned item:
        </p>
        <ul className="pl-5 mb-4 text-gray-400 list-disc">
          <li>Refund to original payment method (UPI/Card/Netbanking)</li>
          <li>Refund as store credit for future purchases</li>
        </ul>

        <p className="text-sm text-gray-500">
          *Customized or clearance items are non-returnable.
        </p>
      </div>
    </section>
  );
};

export default ReturnsPolicy;
