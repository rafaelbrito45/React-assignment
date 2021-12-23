//import react from "react";
import { render,fireEvent } from "@testing-library/react";
import Form from "../components/Form";

it("renders correctly", ()=>{
    const{queryByPlaceholderText}= render(<Form/>)

    expect(queryByPlaceholderText('show title')).toBeTruthy();
})

describe("input value", () =>{
    it("updates on change",()=>{
        const{queryByPlaceholderText}= render(<Form/>);
        const showInput = queryByPlaceholderText('show title');

        fireEvent.change(showInput,{target:{value:"test"}});
        expect(showInput.value).toBe("test");
    })
})