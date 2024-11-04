
// src/pages/MainPage.jsx

import { useContext, useState } from "react";
import HabitList from "../component/HabitList";
import AddHabitForm from "../component/AddHabitForm";
import ProgressChart from "../component/ProgressChart";
import { HabitContext } from "../context/HabitProvider";

const MainPage = () => {
  const { habits, toggleHabitCompletion, deleteHabit } = useContext(HabitContext);
  const [habitToEdit, setHabitToEdit] = useState(null);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-green-600">Habit Tracker</h1>
      <AddHabitForm habitToEdit={habitToEdit} setHabitToEdit={setHabitToEdit} />
      <HabitList
        // habits={habits}
        // toggleHabitCompletion={toggleHabitCompletion}
        // deleteHabit={deleteHabit}
        setHabitToEdit={setHabitToEdit}
      />
      <ProgressChart habits={habits} />
    </div>
  );
};

export default MainPage;