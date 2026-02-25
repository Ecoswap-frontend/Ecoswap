import { useContext } from "react";

import styles from "./listing.module.css";
import { userContext } from "../Components/Context";

export default function ReviewStep() {
   const { formData, updateForm, addImages } = useContext(userContext);

   const handleFiles = (e)=>{
    addImages(Array.from(e.target.files));
   }
  return (
    <section className={styles.card} aria-labelledby="review-title">
      <h2>Upload Pictures</h2>
      <form>
        <input type="file" multiple accept="image/*" onChange={handleFiles}/>
      </form>
    </section>
  );
}
