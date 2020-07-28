import React,{useState,useEffect} from 'react';
import {motion,AnimatePresence} from 'framer-motion';


const containerVariants = {
  initial:{
    x:'100vw',
    opacity:0,
     
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      type:'spring',
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  },exit:{
    x:"-100vw",
    transition:{ease:"easeInOut"}
  }
};

const childVariants = {
  initial:{
    opacity:0
  },
  animate:{
    opacity:1
  }
};

const Order = ({ pizza,setShowModal }) => {
  const [showTitle,setShow] = useState(true);


  setTimeout(()=>{
    setShow(false)
  },4000);

  
  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true)
    },5000)
  },[setShowModal])
  return (
    <motion.div className="container order" variants={containerVariants}  initial="initial" animate="animate" exit="exit">
      <AnimatePresence>
       { showTitle && (
        <motion.h2 exit={{y:-1000}}>
          Thank you for your order :)
        </motion.h2>
       )}
      </AnimatePresence>
      
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;