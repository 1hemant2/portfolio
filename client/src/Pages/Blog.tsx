import React from "react";

const Blogs = [
  {
    title:
      "Mastering Memory Management in JavaScript: Garbage Collection, Leaks, and Best Practices",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*7q_4IKX27uP-d1_oSbajlA.jpeg",
    link: "https://medium.com/@hk443957/mastering-memory-management-in-javascript-garbage-collection-leaks-and-best-practices-3dda7aea625a",
  },
  {
    title:
      "The Role of Debouncing in Web Development: Why It Matters and How to Implement It",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*2Nuoib86Ph8tCSoT",
    link: "https://medium.com/@hk443957/the-role-of-debouncing-in-web-development-why-it-matters-and-how-to-implement-it-afaf5a859010",
  },
  {
    title: "Hack-Proof Your Node.js App: Securing MVC Routes with Express.js",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*O6IoigoFWu38zWSe7MSOMg.jpeg",
    link: "https://medium.com/@hk443957/hack-proof-your-node-js-app-securing-mvc-routes-with-express-js-5b7c405c0d69",
  },
];

const Blog: React.FC = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div>
      <div className="underline text-4xl font-bold text-gray-600 flex justify-center mt-6">
        BLOGS
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:gap-3 sm:ml-[200px] sm:mr-[200px] mt-14 sm:h-[550px]  overflow-y-auto scrollbar space-y-10 sm:space-y-0 pl-6 pr-6 ">
        {Blogs.map((d) => (
          <div
            className="relative h-[200px] cursor-pointer"
            onClick={() => handleClick(d.link)}
          >
            <img
              src={d.image}
              alt="debouncing image"
              className="rounded-xl h-full w-full"
            />
            <h3 className="absolute bottom-0 left-0 right-0 p-1 bg-black bg-opacity-50 text-white rounded-xl">
              {d.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
