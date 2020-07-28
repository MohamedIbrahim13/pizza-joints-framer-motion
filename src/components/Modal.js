import React from 'react';
import {Link} from "react-router-dom";
import {motion,AnimatePresence} from 'framer-motion';

const backdropVariant = {
    initial :{
        opacity:0
    },
    animate :{
        opacity:1
    }
};

const ModalVariant= {
    initial:{
        y:"-100vh",
        opacity:0
    },
    animate:{
        y:"200px",
        opacity:1,
        transition :{
            delay: 0.5
        }
    }
};

const Modal =({showModal,setShowModal})=>{
    return (
        <AnimatePresence exitBeforeEnter>
            
                {showModal && (
                    <motion.div className="backdrop" variants={backdropVariant} initial="initial" animate="animate" exit="hidden">
                        <motion.div className='modal' variants={ModalVariant} initial="initial" animate="animate">
                            <p>Want to make another Pizza?</p>
                            <Link to="/">
                                <button>Start Again</button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            
        </AnimatePresence>
    )
}

export default Modal