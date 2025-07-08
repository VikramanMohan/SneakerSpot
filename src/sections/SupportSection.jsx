import { Link, Outlet, useLocation } from 'react-router-dom';

const SupportSection = () => {
  const location = useLocation();

  return (
    <section className="min-h-screen px-6 py-10 bg-[#333235] text-white md:px-20 tracking-wider">
      <h2 className="mb-6 text-3xl font-bold lg:text-4xl ">Customer Support.</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Help Center */}
        <div className="p-6 bg-[#232227] shadow-md rounded-2xl transition hover:shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h3 className="mb-2 text-xl font-semibold">Help Center</h3>
          <p className="mb-4 text-gray-400">
            Find answers to your questions about orders, shipping, and accounts.
          </p>
          <Link
            to="/support/help"
            className="inline-block font-medium text-[#ff626d] underline-offset-4 hover:underline transition"
          >
            Visit Help Center →
          </Link>
        </div>

        {/* Returns & Policy */}
        <div className="p-6 bg-[#232227] shadow-md rounded-2xl transition hover:shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <h3 className="mb-2 text-xl font-semibold">Returns & Policy</h3>
          <p className="mb-4 text-gray-400">
            Not satisfied with your sneakers? Read our return and refund policy.
          </p>
          <Link
            to="/support/returns"
            className="inline-block font-medium text-[#ff626d] underline-offset-4 hover:underline transition"
          >
            Return Policy →
          </Link>
        </div>
      </div>

      {location.pathname !== '/support' && (
        <div className="mt-10 rounded-xl ">
          <Outlet />
        </div>
      )}
    </section>
  );
};

export default SupportSection;
