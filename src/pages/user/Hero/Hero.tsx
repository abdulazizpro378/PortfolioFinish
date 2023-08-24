// import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import {  fadeIn, slideIn } from "../../../utils/motion";
import { Variants } from "framer-motion";
import './heroOdiy.scss'

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        // variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1) as Variants}>
            Hey There,
            <br />
            I'm Abdulaziz.
          </motion.span>
          <motion.span className="secondaryText" variants={fadeIn("left", "tween", 0.4, 1) as Variants}>
            I design beautiful simple
            <br />
            things, And I love what I do{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1) as Variants}
          className={css.person}
        >
          <motion.img  className='heroimg' variants={slideIn("up", "tween", 0.5, 1.3) as Variants} src="./abupro1.jpg" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:zainkeepscode@gmail.com">
          abdumajidovabdulaziz@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1) as Variants} className={css.experience}>
            <div className="primaryText">8</div>
            <div className="secondaryText">
              <div>Month</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1) as Variants} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
