import React from 'react';
import {motion,useCycle} from 'framer-motion';

const loaderVariant = {
    caseOne:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.5
            },
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease:"easeOut"
            }

        }
    },
    caseTwo:{
        x:0,
        y:[0,-40],
        transition:{
            yoyo:Infinity,
            duration:0.25,
            ease:"easeOut"

        }
    }
}

const Loader = () => {
    const [animation,cycleAnimation] = useCycle("caseOne","caseTwo")
    return (
        <>
           <motion.div className="loader" variants={loaderVariant} animate={animation}>
           </motion.div> 
           <div onClick={()=>cycleAnimation()}>Click here to play with our Loader</div>
        </>
    )
}

export default Loader
