export default function HeroSection() {
  return (
    <section className="hero-pattern py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Trusted Plumbers in Bradford
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Connect with local, qualified plumbing professionals in your area
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold" data-testid="text-plumber-count">150+</div>
              <div className="text-sm text-blue-100">Registered Plumbers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-blue-100">Emergency Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">2000+</div>
              <div className="text-sm text-blue-100">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
