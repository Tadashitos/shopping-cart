import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import formatCurrency from '../../utils/formatCurrency';

import './ProductCard.css';
import AppContext from '../../context/AppContext';

export default function ProductCard({ data }) {
  const { title, price, thumbnail } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([ ...cartItems, data ]);

  return (
    <section className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="card__image" />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="button__add-cart" onClick={ handleAddCart }><BsFillCartPlusFill /></button>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({})
}.isRequired;

/*
  OBS: A URL da thumbnail que está chegando da API do Mercado Livre está em um formato de imagem menor. Este formato é definido através do final da URL da imagem, que pode ser tanto "I.jpg" quanto "O.jpg" e também pode haver outros. O objetivo aqui é converter essa imagem para um formato maior, substituindo essa sequência de caracteres por "W.jpg". Poderíamos utilizar um thumbnail.replace("I.jpg")? Não,, pois como dito antes, existem outros padrões de imagem, logo, essa abordagem não funciona. O que podemos fazer aqui é utilizar regex (Regular Expression). Nós vamos fazer dessa forma: thumbnail.replace(/\w\.jpg/gi, 'W.jpg').
  \w = qualquer caractere que possua:
  .jpg
  /gi = de forma global (g) (string inteira) e independente de ser case sensitive (i)
*/
