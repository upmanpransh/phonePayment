import { SubHeading } from "../components/SubHeading"
import { Heading } from "../components/Heading"
import { Button } from "../components/Botton"
import { ButtomWarning } from "../components/ButtomWarning"
import { InputBox } from "../components/InputBox"


export const Signup = () =>{
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-ls bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"} />
                <SubHeading label={"Enter your information to create an account"}/>
                <InputBox placeholder="John" label={"First Name"}/>
                <InputBox placeholder="Doe" label={"Last Name"}/>
                <InputBox placeholder="prashun@gmail.com" label={"Email"}/>
                <InputBox placeholder="12345" label={"Password"}/>
                <div className="pt-4">
                    <Button label={"Sign up"} />
                </div>
                <ButtomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    </div>
}