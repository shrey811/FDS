
import axios from "axios";

 const postLogin = async (email: string, password: string) =>  {
    const res = await axios.post('localhos', {
        email: email,
        password: password
    })

    if (res) {
        console.log(res.data);
    }
}

export default postLogin