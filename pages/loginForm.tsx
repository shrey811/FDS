import { Image, Button, Card, Checkbox, Col, Container, Grid, Input, Row, Spacer, Text } from "@nextui-org/react";
import { Dispatch, SetStateAction, useState } from "react";
import { render } from "react-dom";
import styles from '../styles/home.module.css'
import postLogin from "./axios";
import { AiOutlineMail } from 'react-icons/ai';


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
        <div className="login">
            <div style={{ width: '680px', margin: 'auto', marginTop: '10rem' }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                    <div>
                        <Image src='https://thehungryhetauda.com/images/logo-small-color.svg' height={"70px"} />
                    </div>

                    <Text size={30}>
                        Hungry Hetauda
                    </Text>

                </div>
                <Card css={{ background: "rgb(223, 223, 219)" }} >
                    <Card.Body>
                        <Row justify="center" >
                            <Col span={5}>
                                <div>
                                    <h2>Sign in to start your session</h2>
                                    <Card.Divider />


                                    <Spacer y={1.5} />

                                    <Input width="18rem" bordered labelPlaceholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} ></Input>

                                    <Spacer y={1.5} ></Spacer>
                                    <Input width="18rem" bordered type={"password"} labelPlaceholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                    <Spacer y={1} />

                                    <Checkbox size="sm" label="Remember me"> Remember me</Checkbox>

                                    <Spacer y={1} />
                                    <Row>
                                        <Col></Col>
                                        <Button size="md" type="submit" onClick={() => handlePost()} >Sign In </Button>
                                    </Row>
                                </div>
                            </Col>
                            <Col>

                                <Spacer x={10} />

                                <div className="img">
                                    <Image width={200} src='https://images.unsplash.com/photo-1619221882220-947b3d3c8861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2QlMjBkZWxpdmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
                                </div>
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>
                {/* <Container css={{ alignItems: "center", justifyContent: 'center', borderTop: "5px solid Green", borderRadius: "10px" }}> */}
                {/* </Container> */}
            </div>
        </div>

    )

}



