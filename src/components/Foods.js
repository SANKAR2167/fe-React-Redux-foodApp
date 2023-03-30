import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Button, Card, CardActions, CardContent, IconButton } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const Foods = () => {
  const productList = [
    {
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qmf1f49v268jnxfhrpe2",
      "name": "Chikken Biryani",
      "price": "299",
      "rating": "3.8",
      "category": "briyani",
      "description": "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, and fish), or in some cases without any meat, and sometimes, in addition, eggs and potatoes.",
      "id": "idio"
    },
    {
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vsont2fdjveibxuqtdff",
      "name": "Mutton Biryani",
      "price": "349",
      "rating": "4.2",
      "category": "briyani",
      "description": "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, and fish), or in some cases without any meat, and sometimes, in addition, eggs and potatoes.",
      "id": "owlo"
    },
    {
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vrk9ydhdcn6wzga68r9r",
      "name": "Plain Dosa",
      "price": "49",
      "rating": "4.5",
      "category": "dosa",
      "description": "A dosa, also called dosai, dosey, dwashi or dosha is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are popular in South Asia as well as around the world. Dosas are served hot, often with chutney and sambar",
      "id": "kjdi"
    },
    {
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/fo5heiuhuqopijvwaie6",
      "name": "Masala Dosa",
      "price": "99",
      "rating": "4.3",
      "category": "dosa",
      "description": "A dosa, also called dosai, dosey, dwashi or dosha is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are popular in South Asia as well as around the world. Dosas are served hot, often with chutney and sambar",
      "id": "eodh"
    },
    {
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/lecma5hbh5hmsaq3bkih",
      "name": "Veg Meal",
      "price": "159",
      "rating": "4",
      "category": "meals",
      "description": "Vegetables: leafy greens, asparagus, broccoli, tomatoes, carrots. Grains: quinoa, barley, buckwheat, rice, oats. Legumes: lentils, beans, peas, chickpeas. Nuts: almonds, walnuts, cashews, chestnuts",
      "id": "mcmr"
    },
    {
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/j2cvxbadfsvjds8wgbcv",
      "name": "Non Veg Meal",
      "price": "259",
      "rating": "4.1",
      "category": "meals",
      "description": "It defines non-vegetarian food as any food which contains whole or part of any animal including birds, marine animals, eggs, or products of any animal origin as an ingredient, excluding milk or milk products",
      "id": "dkfr"
    },
    {
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ovpd9vcglvtwxb3jaw8p",
      "name": "Chocolate Truffle Cake",
      "price": "349",
      "rating": "3.9",
      "category": "cake",
      "description": "Free fire candle or birthday cone with 1/2kg. free party popper or snow spray or music candle with 1kg",
      "id": "frfg"
    },
    {
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dname8r7myl9h9pwcr11",
      "name": "Black Forest Cake",
      "price": "299",
      "rating": "4.4",
      "category": "cake",
      "description": "Free fire candle or birthday cone with 1/2kg. free party popper or snow spray or music candle with 1kg",
      "id": "psdg"
    },
    {
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/eiarzf9rxnlebk1784al",
      "name": "Paan Ice Cream",
      "price": "125",
      "rating": "3.2",
      "category": "ice cream",
      "description": "The king of fruits adds a delightful flavour to your scoop. The perfect taste of rich and pure ratnagiri alphonso mango in every bite",
      "id": "fsrg"
    },
    {
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/aa0v5rhdsghrrb2udmja",
      "name": "Magnum Chocolate Truffle Ice Cream",
      "price": "99",
      "rating": "3.9",
      "category": "ice cream",
      "description": "Rich Chocolate Icecream With Truffle Sauce Wrapped In Thick Belgian Chocolate.",
      "id": "fsdg"
    }
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="food-list">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.image}
          name={i.name}
          price={i.price}
          id={i.id}
          desc={i.description}
          ret={i.rating}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc, desc, ret }) => {
  const styles = {
    color: ret >= 4 ? 'green' : 'red',
  };

  const [show, setShow] = useState(true);
  return (
    <Card className="food-container">
      <img src={imgSrc} alt={name} className="food-image" />
      <CardContent>
        <div className="food-specs">
          <h3 className='food-name'>{name} 
          <IconButton onClick={() => setShow(!show)} aria-label='toggle' color='primary'>
              {show ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
            </IconButton></h3>
          <p className="food-rating" style={styles}>⭐️{ret}</p>
        </div>
        {show ? <p className="food-description">{desc}</p> : null}
      </CardContent>

      <CardActions className="food-but">
        <h3 className="food-price">Price: ₹ {price}</h3>
        <Button
          className="food-addcart"
          variant='contained'
          color="error"
          onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add To Cart</Button>
      </CardActions>
    </Card>
  )
};


export default Foods;
