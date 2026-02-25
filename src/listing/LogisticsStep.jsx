import { useContext } from 'react';

import styles from './listing.module.css';
import { userContext } from '../Components/Context';

export default function LogisticsStep() {
   const {
     step,
     setStep,
     renderStep,
     formData,
     updateForm,
     createListForm,
     loading,
   } = useContext(userContext);
  return (
    <section className={styles.cardLog} aria-labelledby="logistics-title">
      <h1>Detail and Quantity</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={styles.inputParent}>
          <label htmlFor="detail">Quantty</label>
          <input
            type="text"
            placeholder="0.00"
            value={formData.quantity}
            onChange={(e) => updateForm("quantity", e.target.value)}
          />
        </div>

        <div className={styles.inputParent}>
          <label htmlFor="detail">Pickup Location</label>
          <input
            type="text"
            placeholder="City, Country"
            value={formData.location}
            onChange={(e) => updateForm("location", e.target.value)}
          />
        </div>
      </form>
    </section>
  );
}
