import { Card } from "../components/Card";

import data from "../data/data.json";

export const Store = () => {
  return (
    <div className="grid justify-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 px-24">
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          url={item.url}
        />
      ))}
    </div>
  );
};
