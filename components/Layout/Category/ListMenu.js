"use client";

const ListMenu = ({ categoryes, setMenuOpen, menuOpen }) => {
  return (
    <div className="">
      <ul className="pt-2 border-t border-slate-300">
        {categoryes.map((category) => {
          return (
            <li
              key={category._id}
              className={`px-6 mb-1 transition-colors cursor-pointer ${menuOpen == category._id ? "text-white bg-indigo-400": ""}`}
              onMouseEnter={() => setMenuOpen(category._id)}
              onClick={() => setMenuOpen(category._id)}
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListMenu;
