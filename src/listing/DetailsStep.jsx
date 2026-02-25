import { useContext, useState } from 'react';
import styles from './DetailsStep.module.css';
import { userContext } from '../Components/Context';



export default function DetailsStep() {

 const { formData, updateForm } = useContext(userContext);
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [selectedGrade, setSelectedGrade] = useState("");
  // const [description, setDescription] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = {
  //     category: selectedCategory,
  //     grade: selectedGrade,
  //     description,
  //   };

  //   console.log(formData);
  // };


  return (
    <section className={styles.card} aria-labelledby="details-title">
      <form className={styles.wasteForm__form} >
        <div className={styles.wasteForm__group}>
          <label>Materia Category</label>
          <select
            value={formData.category}
            onChange={(e) => updateForm("category",e.target.value)}
            className={styles.wasteForm__select}
          >
            <option value="">Select category</option>
            <option value="plastic">Plastic Waste</option>
            <option value="organic">Organic Waste</option>
            <option value="metal">Metal Waste</option>
            <option value="glass">Glass Waste</option>
            <option value="paper">Paper Waste</option>
          </select>
        </div>

        <div className={styles.wasteForm__group}>
          <label> Quality Grade</label>
          <select
            value={formData.grade}
            onChange={(e) => updateForm("grade",e.target.value)}
            className={styles.wasteForm__select}
          >
            <option value="">Select grade</option>
            <option value="high">High Quality</option>
            <option value="medium">Medium Quality</option>
            <option value="low">Low Quality</option>
            <option value="contaminated">Highly Contaminated</option>
          </select>
        </div>

        <div className={styles.wasteForm__group}>
          <label>Material Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => updateForm("description",e.target.value)}
            className={styles.wasteForm__textarea}
            placeholder="Describe the product or give a specific detail..."
          />
        </div>

       
      </form>
    </section>
  );
}
