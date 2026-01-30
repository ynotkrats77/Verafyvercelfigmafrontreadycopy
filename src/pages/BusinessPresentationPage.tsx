import React from "react";

const BusinessPresentationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Business Presentation</h1>
      <div className="prose mx-auto">
        <p>
          Welcome to our Business Presentation page! Here you will find an overview of our company, our mission, and the value we bring to our clients and partners.
        </p>
        <h2>About Us</h2>
        <p>
          [Insert a brief description of your business, its history, and core values.]
        </p>
        <h2>Our Mission</h2>
        <p>
          [Describe the mission statement and what drives your business forward.]
        </p>
        <h2>Key Offerings</h2>
        <ul>
          <li>[Highlight your main products or services]</li>
          <li>[Showcase unique selling points]</li>
          <li>[Mention any awards or recognitions]</li>
        </ul>
        <h2>Contact & Next Steps</h2>
        <p>
          Interested in learning more or partnering with us? <a href="/contact" className="text-blue-600 underline">Contact us</a> today!
        </p>
      </div>
    </div>
  );
};

export default BusinessPresentationPage;
