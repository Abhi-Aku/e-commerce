import React from 'react';


const  Home = () => {
  const data = [
    {
      id: 1,
      name: "Home",
      Image: "/Images/img.png",
      price: "$100",
    },
    {
      id: 2,
      name: "Earphones",
      Image: "/Images/product_1.png",
      price: "$100",
    },
    {
      id: 1,
      name: "Home",
      Image: "/Images/img.png",
      price: "$100",
    },
    {
      id: 2,
      name: "Earphones",
      Image: "/Images/product_1.png",
      price: "$100",
    },
  ];

  return (
    <>
    


      <section>
      <div className="flex flex-wrap">
  {data.map((item) => {
    return (
      <div key={item.id} className="p-4 flex flex-row w-1/4">
       
         <div className=' border-2 p-2 rounded-2xl '>
         <img    src={item.Image} alt="" />
          <p className=' font-light text-4xl'>{item.name}</p>
          <p>{item.price}</p>
         </div>

       
      </div>
    );
  })}
</div>


      </section>
    </>
  );
};




export default Home