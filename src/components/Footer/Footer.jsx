import React from "react";

const footerData = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"],
  },
  {
    title: "Products",
    links: ["Features", "Pricing", "Integrations", "API"],
  },
  {
    title: "Resources",
    links: ["Docs", "Community", "Support", "FAQs"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookies"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-8">
        {footerData.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-lg font-semibold text-white mb-4">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 sm:mt-0">
          <a href="#" className="hover:text-white">
            Twitter
          </a>
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
