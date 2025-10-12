function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto py-20 px-4 animate-fadeIn"
    >
      <h3 className="text-3xl font-bold text-center mb-8 text-amber-800">
        Contact Us
      </h3>
      <p className="text-center mb-6">
        Jl. Sudirman No. 123, Jakarta | Open: 08.00 – 22.00
      </p>
      <div className="flex justify-center mb-8">
        <a
          href="https://wa.me/085960424326"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition animate-bounceIn"
        >
          WhatsApp Us
        </a>
      </div>
      <div className="w-full flex justify-center">
        <iframe
          className="w-full md:w-3/4 h-64 rounded-xl shadow animate-zoomIn"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.29910868808!2d106.7987646!3d-6.2213856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f4271bbb9f%3A0xe4f47579b03b2743!2sLucky%20Cat%20Coffee%20%26%20Kitchen!5e0!3m2!1sen!2sid!4v1706500000000"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
