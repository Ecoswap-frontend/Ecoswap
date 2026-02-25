import { useContext, useState } from "react";

import styles from "./listing/listing.module.css";
import { IoEyeOutline } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import {
  MdOutlineNotificationImportant,
  MdOutlineEventNote,
} from "react-icons/md";

import { userContext } from "./Components/Context.jsx";

// import InfoStep from "./listing/InfoStep.jsx";
// import DetailsStep from "./listing/DetailsStep.jsx";
// import LogisticsStep from "./listing/LogisticsStep.jsx";
// import ReviewStep from "./listing/ReviewStep.jsx";

const steps = ["info", "details", "logistics", "review"];

export default function Listing() {
  

  const {
    step,
    setStep,
    renderStep,
    
    formData,
    updateForm,
    createListForm,
    loading,
  } = useContext(userContext);

  
  const steps = [
    {
    label: "Information",
    logo: <MdOutlineNotificationImportant />,
   },
   {
    label: "Details",
    logo: <MdOutlineEventNote />,
   },

   {
    label: "Logistics",
    logo: <FaCarAlt />
   },

   {
    label: "Review",
    logo: <IoEyeOutline />
   }

]

  const nextStep = () => {
    if (step < steps.length) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <section className={styles.wizard} aria-labelledby="listing-title">
      <div className={styles.containerr}>
        <div className={styles.listcontain}>
          <span className={styles.list}>Listing /</span>{" "}
          <span>Create New List</span>
        </div>

        {/* Stepper */}
        <nav>
          <div className={styles.stepper}>
            {steps.map((data, index) => (
              <div
                key={index}
                className={`${styles.step} ${
                  step === index + 1 ? styles.active : ""
                }`}
              >
                <span>{data.logo}</span>
                {data.label}
              </div>
            ))}
          </div>
        </nav>

        <div className={styles.ListingLeft}>
          <div className={styles.dynamicPluspage}>
            <div>
              <h1 id="listing-title">Create New Listing</h1>
              <p>
                Provide the fundamental deals about your industrial by product
                or material
              </p>
            </div>
            <div className={styles.rendered_content}>
              <div className={styles.rendered_item}>{renderStep()}</div>
            </div>

            <div className={styles.navigation}>
              {step < steps.length ? (
                <button onClick={nextStep} className={styles.infobtn}>
                  Next
                </button>
              ) : (
                <button onClick={createListForm} className={styles.infobtn}>
                  {loading ? "sending...." : "Publish"}
                </button>
              )}
            </div>
          </div>

          <div className={styles.rightRendered}>
            <div className={styles.builtTips}>
              <h3>
                <span>
                  <MdLightMode color="green" />
                </span>
                PRO TIPS
              </h3>
              <ul >
                <li>
                  be transparent about impurities <br /> to build trust and
                  avoid disputes
                </li>
                <li>
                  be transparent about impurities <br /> to build trust and
                  avoid disputes
                </li>
                <li>
                  be transparent about impurities <br /> to build trust and
                  avoid disputes
                </li>
              </ul>
            </div>

            <div className={styles.impact}>
              <div>
                <p className={styles.sustain}>
                  <span>
                    <SlEnergy color="green" />
                  </span>
                  Sustainability Impact
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Aspernatur ullam libero, nobis, cupiditate quam assumenda
                  <br />
                  doloribus dignissimos fugit beatae fuga quidem et vitae
                  voluptatibus,
                  <br />
                  facilis dolore illo! Praesentium, nobis? Corporis?
                </p>
              </div>
              <div className={styles.estimator}>
                <div className={styles.iconn}>
                  <MdOutlineNotificationImportant color="green" size="15px" />
                </div>
                <div>
                  <h1>EcoScore Estimator</h1>
                  <p className={styles.plusListing}>
                    +15 plus for this listing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
