import React, { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { HabitContext } from '../context/HabitProvider';

const AddHabitForm = ({ habitToEdit, setHabitToEdit }) => {
  const [habitName, setHabitName] = useState('');
  const { addHabit, editHabit } = useContext(HabitContext);

  useEffect(() => {
    if (habitToEdit) {
      setHabitName(habitToEdit.name);
    }
  }, [habitToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      if (habitToEdit) {
        editHabit(habitToEdit.id, habitName);
        toast.success("Habit updated successfully");
        setHabitToEdit(null); // Reset edit state after updating
      } else {
        addHabit(habitName);
        toast.success("Habit added successfully");
      }
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="New habit"
        className="flex-grow p-2 border rounded"
      />
      <button
        type="submit"
        className={`ml-2 ${habitToEdit ? 'bg-blue-500' : 'bg-green-500'} text-white py-2 px-4 rounded hover:${habitToEdit ? 'bg-blue-600' : 'bg-green-600'}`}
      >
        {habitToEdit ? 'Update Habit' : 'Add Habit'}
      </button>
    </form>
  );
};

export default AddHabitForm;