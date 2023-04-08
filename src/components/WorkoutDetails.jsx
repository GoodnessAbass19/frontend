import { useWorkoutsContext } from "../Hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../Hooks/UseAuthContext";

const Workout = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: { 'Authorization': `Bearer ${user.token}` },
    }).then();
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="p-5 rounded mx-auto my-5 relative shadow-md bg-white flex justify-between w-full">
      <div className="max-w-screen-xl">
        <h2 className="text-2xl font-bold text-emerald-500 mb-4 mx-0">
          {workout.title}
        </h2>
        <p className="m-0 text-base text-gray-600">
          <strong>Load (kg): </strong> {workout.load}{" "}
        </p>
        <p className="m-0 text-base text-gray-600">
          <strong>Reps: </strong> {workout.reps}{" "}
        </p>
        <p className="m-0 text-base text-gray-600">
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>
      <div>
        <button onClick={handleClick} className="bg-gray-200 p-2 text-2xl">
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Workout;
