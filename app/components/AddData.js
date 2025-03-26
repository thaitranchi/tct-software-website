import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddData() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "projects"), { name, createdAt: new Date() });
      alert("Project added!");
      setName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Project Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <button type="submit">Add Project</button>
    </form>
  );
}
