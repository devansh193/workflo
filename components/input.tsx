import { string } from "zod";
import { Input } from "./ui/input"

type Props = {
    type: string;
    placeholder: string;
    id: string;
    onChange: ()=>void;
}

export const InputField = ({ type, placeholder, id, onChange}:Props) =>{
    return (
        <div>
            <Input
            className=" bg-gray-100 border-zinc-200 border-2"
            type={type}
            placeholder={placeholder}
            id={id}
            onChange={()=>{}}
            />
        </div>
    );
};