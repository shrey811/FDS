import { Button, Card, Checkbox, Col, Container, Grid, Input, Row, Spacer, Text } from "@nextui-org/react";
import { Dispatch, SetStateAction, useState } from "react";
import { render } from "react-dom";
import styles from '../styles/home.module.css'
import postLogin from "./axios";

interface Values {
    email: string;
    password: string;
}

export default function LoginForm() {

    const [user, setUser] = useState<Values>({
        email: '',
        password: ''
    });


    const handlePost = async () => {
        const res = postLogin(
            user.email,
            user.password
        )
    }

    return (

        <div className={styles.container}>
            {/* <Image srr="" alt="Default Image" /> */}
            <div className={styles.div1}>
                <h2>Sign in to start your session</h2>
                <Card.Divider />
                <Input css={{ "marginToop": "2px" }} bordered labelPlaceholder="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <Spacer y={0.15}></Spacer>
                <Input bordered type={"password"} labelPlaceholder="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <Spacer y={0.15} />

                <Button type="submit" onClick={() => handlePost()} >Sign In</Button>
                <Checkbox size="sm" label="Remember me"> Remember me</Checkbox>
            </div>
        </div >

    )

}



