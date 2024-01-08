import React from 'react';

const Second = ({foundItem}) => {
    return (
        <section className="flex flex-col justify-center">
        <div className="flex items-center justify-center w-full px-6 py-4 border-y border-gray">
          <ul className="text-sm list-disc">
            {foundItem.description[0]
              .split("\n")
              .splice(0, 5)
              .map((description) => {
                return <li key={description}>{description}</li>;
              })}
          </ul>
        </div>
      </section>
    );
}

export default Second;
