import React from 'react';

const Weight = ({article, changeItem, searchParams, data}) => {
    return (
        <div className="flex flex-wrap justify-center gap-y-2 gap-x-2">
        {
          article.items.map((item) => {
            return (
              <div
                key={item._id}
                className={`inline-block px-8 text-center border cursor-pointer w-max  transition-transform text-sm ${
                  item._id == searchParams.item
                    ? "bg-orange-500 text-white border-orange"
                    : "hover:-translate-y-1 border-gray bg-white"
                }`}
                onClick={() => changeItem(item)}
              >
                {item.weight} {data.itemUnit}
              </div>
            );
          })}
      </div>
    );
}

export default Weight;
