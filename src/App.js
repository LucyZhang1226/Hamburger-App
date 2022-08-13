import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import FilterMeals from './components/FilterMeals/FilterMeals';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';

const MEALS_DATA = [
  {
    id: "1",
    title: "双层芝士汉堡",
    desc: "百分百纯牛肉搭配秘制香料，新鲜蔬菜搭配丝滑海鲜酱，一口回味无穷",
    price: 12,
    img: "/img/meals/1.jpg"
  }, 
  {
    id: "2",
    title: "双层麦辣鸡腿堡",
    desc: "百分百纯牛肉搭配秘制香料，新鲜蔬菜搭配丝滑海鲜酱，一口回味无穷",
    price: 17,
    img: "/img/meals/2.jpg"
  },
  {
    id: "3",
    title: "芝士牛肉堡",
    desc: "百分百纯牛肉搭配秘制香料，新鲜蔬菜搭配丝滑海鲜酱，一口回味无穷",
    price: 10,
    img: "/img/meals/3.jpg"
  },
  {
    id: "4",
    title: "深海鳕鱼堡",
    desc: "百分百纯牛肉搭配秘制香料，新鲜蔬菜搭配丝滑海鲜酱，一口回味无穷",
    price: 18,
    img: "/img/meals/4.jpg"
  },
  {
    id: "5",
    title: "照烧鸡腿堡",
    desc: "百分百纯牛肉搭配秘制香料，新鲜蔬菜搭配丝滑海鲜酱，一口回味无穷",
    price: 16,
    img: "/img/meals/5.jpg"
  },
  {
    id: "6",
    title: "麦辣鸡腿堡",
    desc: "百分百纯牛肉搭配秘制香料，新鲜蔬菜搭配丝滑海鲜酱，一口回味无穷",
    price: 21,
    img: "/img/meals/6.jpg"
  },
  {
    id: "7",
    title: "老北京鸡肉卷",
    desc: "百分百纯牛肉搭配秘制香料，新鲜蔬菜搭配丝滑海鲜酱，一口回味无穷",
    price: 17,
    img: "/img/meals/7.jpg"
  },
  {
    id: "8",
    title: "新奥尔良鸡肉卷",
    desc: "百分百纯牛肉搭配秘制香料，新鲜蔬菜搭配丝滑海鲜酱，一口回味无穷",
    price: 16,
    img: "/img/meals/8.jpg"
  },
  {
    id: "9",
    title: "秘制嫩牛五方",
    desc: "百分百纯牛肉搭配秘制香料，新鲜蔬菜搭配丝滑海鲜酱，一口回味无穷",
    price: 14,
    img: "/img/meals/9.jpg"
  }
];
const App = props => {

  //创建一个state，用来存储食物列表
  const [mealsData, setMealsData] = useState(MEALS_DATA);
  
  //创建一个state，用来存储购物车的数据
  const [cartData, setCartData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0
  });

  //创建一个过滤meals的函数
  const filterHandler = (keyword) => {
    const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1);
    setMealsData(newMealsData);
  };

  //向购物车中添加商品
  const addItem = meal => {
    //meal表示要添加的商品
    //对购物车进行浅复制
    const newCart = {...cartData};
    //判断购物车中是否存在这个商品
    if(newCart.items.indexOf(meal) === -1){
      //将meal添加到购物车中
      newCart.items.push(meal);
      meal.amount = 1;
    }else{
      meal.amount += 1;
    }
    
    newCart.totalAmount += 1;
    newCart.totalPrice += meal.price;

    setCartData(newCart);
  };

  //减少商品的数量
  const removeItem = meal => {
    //复制购物车
    const newCart = {...cartData};

    //减少商品数量
    meal.amount -= 1;

    //判断商品数量是否为0
    if(meal.amount === 0){
      newCart.items.splice(newCart.items.indexOf(meal), 1);
    }

    newCart.totalAmount -= 1;
    newCart.totalPrice -= meal.price;

    setCartData(newCart);
  } 

  const clearCart = () => {
    const newCart = {...cartData};
    //将购物车中的商品清零
    newCart.items.forEach(item => delete item.amount);
    newCart.items = [];
    newCart.totalAmount = 0;
    newCart.totalPrice = 0;

    setCartData(newCart);
  };

  return(
    
    
      <CartContext.Provider value={{...cartData, addItem, removeItem, clearCart}}>
        
        <div>
          <FilterMeals onFilter={filterHandler} />
          <Meals mealsData={mealsData} 
            
          />
          <Cart />
          
        </div>
      </CartContext.Provider>
    
  );
};

export default App;
