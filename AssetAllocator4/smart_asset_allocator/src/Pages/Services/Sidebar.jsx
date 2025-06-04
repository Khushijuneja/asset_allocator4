import { motion } from "framer-motion";

export default function Sidebar({ links }) {
  //   console.log(links);

  return (
    <div className="w-full ">
      <div className="p-4 shadow-lg rounded-lg border border-gray-200">
        {/* Services Section */}
        <div className="mb-6">
          <h3 className="bg-blue-900 text-white text-lg font-semibold py-2 px-4 rounded-t-lg">
            Services
          </h3>
          <ul className="mt-2">
            {links.services.map((s, i) => (
              <motion.li
                key={i}
                className="border-b py-2 px-2 cursor-pointer hover:text-blue-600"
                whileHover={{ scale: 1.02 }}
              >
                <a href={s.link} className="font-medium block">
                  {s.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Downloads Section */}
        <div>
          <h3 className="bg-blue-900 text-white text-lg font-semibold py-2 px-4 rounded-t-lg">
            Downloads
          </h3>
          <ul className="mt-2">
            {links.downloads.map((d, i) => (
              <motion.li
                key={i}
                className="border-b py-2 px-2 cursor-pointer hover:text-blue-600"
                whileHover={{ scale: 1.02 }}
              >
                <a
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium block"
                >
                  {d.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
