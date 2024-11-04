
// src/contaxt/HabitProvider.js
import { createContext, useState, useEffect } from "react";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(savedHabits);
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (name) => {
    const newHabit = { id: Date.now(), name, streak: 0, lastCompleted: null };
    setHabits([...habits, newHabit]);
  };

  const toggleHabitCompletion = (habitId) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === habitId) {
          const currentTime = new Date().getTime();
          const hoursSinceLastCompleted =
            (currentTime - (habit.lastCompleted || 0)) / (1000 * 60 * 60);

          if (hoursSinceLastCompleted >= 24) {
            return {
              ...habit,
              streak: habit.streak + 1,
              lastCompleted: currentTime,
            };
          } else {
            alert("Habit can only be marked once every 24 hours.");
          }
        }
        return habit;
      })
    );
  };

  const deleteHabit = (habitId) => {
    setHabits(habits.filter((habit) => habit.id !== habitId));
  };

  const editHabit = (habitId, updatedName) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === habitId ? { ...habit, name: updatedName } : habit
      )
    );
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        toggleHabitCompletion,
        deleteHabit,
        editHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};
