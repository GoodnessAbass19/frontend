import { useEffect } from "react";
import { useWorkoutsContext } from "../Hooks/useWorkoutsContext";
import {useAuthContext} from "../Hooks/UseAuthContext"
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm";


const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()
const {user} = useAuthContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts', {
                headers:{
                    'Authorization' : `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json })
            }
        }

        if (user) {
            fetchWorkouts()  
        }
        
    }, [dispatch, user])


    return (
        <div className="grid md:grid-cols-2 justify-center md:justify-around gap-10  w-full mx-auto">
            <div className="max-w-md">
                {
                    workouts && workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))
                }
            </div>
            <WorkoutForm />
        </div>
    );
}

export default Home;