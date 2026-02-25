import { useContext, useState } from "react";

import styles from "./listing.module.css";
import { MdLightMode } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { userContext } from "../Components/Context";

export default function InfoStep() {
  const [stage, setStage] = useState(0);
  const onNext = () => setStage((s) => Math.min(s + 1, steps.length - 1));
  const onPrev = () => setStage((s) => Math.max(s - 1, 0));
  const [form, setForm] = useState({});
  const onChange = (patch) => setForm((f) => ({ ...f, ...patch }));

  const { formData, updateForm } = useContext(userContext);

  const steps = ["Information", "Details", "Logistics", "Review"];
  

  return (
    <section className={styles.card} aria-labelledby="info-title">
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // onNext();
        }}
        className={styles.InfoForm}
      >
        <div className={styles.listParent}>
          <div className={styles.ListingLeft}>
            <div>
              <label className={styles.listLabel}>
                Listing title
                <input
                  type="text"
                  placeholder="eg 5ookg Recycled Glass Grade-A"
                  value={formData.title}
                  onChange={(e)=>updateForm("title", e.target.value)}
                />
              </label>
              <p>Be descriptive, include material type and waste</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
