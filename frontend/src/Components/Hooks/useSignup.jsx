import React from 'react'
import toast from 'react-hot-toast'
import axios from "axios"

const useSignup = () => {

    const [loading, setLoading] = React.useState()

    const signup = async ({fullName, userName, password, confirmPassword, gender}) =>
    {

        const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender });
		if (!success) return;

        setLoading(true);


        try {
			const res = await axios.post("/api/auth/signup", {
                fullName, userName, password, confirmPassword, gender
            })
            if(res.data.exist)
                {
                    toast.error("user already exist")
                    return
                }
                console.log(res.data)

            toast.success("Sign-up successful!")


			
			
		} catch (error) {
			toast.error(error.message);
            console.log(error)
		} finally {
			setLoading(false);
		}
	};

    return { loading, signup }

    }


export default useSignup




function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
	if (!fullName || !userName || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}




