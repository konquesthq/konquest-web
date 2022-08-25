import { motion } from "framer-motion";
import React from "react";
import OpenContactButton from "../../openContactButton";
import "./features.scss";

const featureList = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  hiddenDelay: {
    opacity: 0,
    y: -100,
    delay: 0.5,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 1,
      delayChildren: 0.5,
    },
  },
};

const HomeFeatures: React.FC = () => {
  return (
    <section className="features">
      <div className="feature-panels">
        <div className="features-summary">
          <h5>A rich feature set designed around your industry</h5>
          <p>
            We're on a mission to optimise the commission process for recruiters. Spreadsheets are slow, centralised and
            error prone. To truly optimise you must first automate, and believe spreadsheets are an outdated answer to a
            modern day problem.
            <br />
            <br />
            That's why we created Konquest, the purpose built cloud platform that fully automates commission and brings
            the process into the 21st century.
          </p>
          <OpenContactButton>Request a Demo</OpenContactButton>
        </div>
        <motion.div className="feature-list" variants={featureList} initial="hidden" whileInView="show">  
          <motion.div className="feature" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className="feature-icon" />
            <div className="feature-text">
              <h5>Total Visibility</h5>
              <p>Give your consultants real-time, on-demand visibility of their commission, past, present and future.</p>
            </div>
          </motion.div>
          <motion.div className="feature" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className="feature-icon" />
            <div className="feature-text">
              <h5>Reward your whole team</h5>
              <p>Automate team lead and manager overrides.</p>
            </div>
          </motion.div>
          <motion.div className="feature" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className="feature-icon" />
            <div className="feature-text">
              <h5>Multi-currency support</h5>
              <p>Use our live currency rates, or fix your own and automate the exchange process.</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="feature-list" variants={featureList} initial="hidden" whileInView="show">
          <motion.div className="feature" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className="feature-icon" />
            <div className="feature-text">
              <h5>Total Engagement</h5>
              <p>A transparent incentive is an engaging incentive. Connect action to reward in a way never before possible.</p>
            </div>
          </motion.div>
          <motion.div className="feature" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className="feature-icon" />
            <div className="feature-text">
              <h5>Clawbacks</h5>
              <p>Calculate clawbacks, even for multiple connected parties, and automatically generate deductions in your chosen payroll period.</p>
            </div>
          </motion.div>
          <motion.div className="feature" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className="feature-icon" />
            <div className="feature-text">
              <h5>Gamify &amp; Analyze (Beta)</h5>
              <p>Use commission analytics to drive performance with our widget driven dashboard.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFeatures;
