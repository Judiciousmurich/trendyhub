import React from 'react';

const News = ({ image, date, author, title, description }) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer select">
      <div className="rounded-[5px] h-[13rem]">
        <img className="rounded-[10px] h-full object-contain" src={image} alt="product" />
      </div>
      <p className="flex">{date} by {author}</p>
      <h3 className="font-bold">{title}</h3>
      <p className="mb-12">{description}</p>
    </div>
    
  );
};

export default News;
