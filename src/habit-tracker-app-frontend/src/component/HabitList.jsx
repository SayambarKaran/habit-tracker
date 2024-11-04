import { useContext } from "react";
import { HabitContext } from "../context/HabitProvider";
import { HiFire } from "react-icons/hi";


const HabitList = ({ setHabitToEdit }) => {
    const { habits, toggleHabitCompletion, deleteHabit } = useContext(HabitContext);
  
    return (
      <div className="mt-4">
        {habits.map((habit) => (
          <div key={habit.id} className="flex items-center justify-between p-2 border-b">
            <span className='flex items-center w-auto justify-between gap-5'>
              <p>{habit.name}</p>
              <p className='flex items-center'>Streak: {habit.streak}<HiFire style={{color : habits.length > 0 ? "orange" : "none"}}/></p>
            </span>
            <div className="text-white">
              <button
                onClick={() => toggleHabitCompletion(habit.id)}
                className="bg-blue-500 hover:bg-blue-700 mr-2 rounded-md p-1"
              >
                Mark
              </button>
              <button
                onClick={() => setHabitToEdit(habit)}
                className="bg-green-500 hover:bg-green-700 mr-2 rounded-md p-1"
              >
                Edit
              </button>
              <button
                onClick={() => deleteHabit(habit.id)}
                className="bg-red-500 hover:bg-red-700 rounded-md p-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default HabitList;