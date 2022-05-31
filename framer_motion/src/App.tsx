import React from "react";
import { motion } from "framer-motion";
import "./index.css";

function App() {
    const [rotate, setRotate] = React.useState(false);
    const [move, setMove] = React.useState(false);

    return (
        <div className="App">
            <motion.div
                // drag
                // whileDrag={{ scale: 0.5 }}
                whileHover={{ scale: 2 }}
                className="box"
                animate={{ rotate: rotate ? 360 : 0, x: move ? 200 : -200 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                }}
                onClick={() => {
                    setRotate(!rotate);
                    setMove(!move);
                }}
            ></motion.div>
        </div>
    );
}

export default App;
