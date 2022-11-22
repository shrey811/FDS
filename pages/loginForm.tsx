import { Button, Card, Container, Grid, Input, Spacer, Text } from "@nextui-org/react";

export default function loginForm() {
    interface Values {
        username: string;
        password: string;
    }
    return (
        <div className="container">

            <Grid className="login_card">
                <div>



                </div>

                <div>
                    <Input labelPlaceholder="UserName" name="username" />
                    <Input.Password labelPlaceholder="Password" name="password" />
                    <Button type="submit">Login</Button>
                </div>

            </Grid>

        </div >
    );
}