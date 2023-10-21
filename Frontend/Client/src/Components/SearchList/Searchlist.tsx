import React from 'react';
import './searchlist.css';

interface SearchItemProps {
  imageSrc: string;
  title: string;
  distance: string;
  taxiOption: string;
  subtitle: string;
  features: string;
  cancelOption: string;
  cancelOptionSubtitle: string;
  rating: string;
  price: string;
  taxOption: string;
}

const SearchItem: React.FC<SearchItemProps> = ({
  imageSrc,
  title,
  distance,
  taxiOption,
  subtitle,
  features,
  cancelOption,
  cancelOptionSubtitle,
  rating,
  price,
  taxOption,
}) => {
  return (
    <div className="searchItem">
      <img src={imageSrc} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{title}</h1>
        <span className="siDistance">{distance}</span>
        <span className="siTaxiOp">{taxiOption}</span>
        <span className="siSubtitle">{subtitle}</span>
        <span className="siFeatures">{features}</span>
        <span className="siCancelOp">{cancelOption}</span>
        <span className="siCancelOpSubtitle">{cancelOptionSubtitle}</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{rating}</span>
          <button>{rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{price}</span>
          <span className="siTaxOp">{taxOption}</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
