const { render,screen } = require("@testing-library/react");
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test case,",()=>{

    beforeAll(()=>{
        console.log("before All")
    })
    beforeEach(()=>{
        console.log("before Each")
    })
    afterAll(()=>{
        console.log("After All")
    })
    afterEach(()=>{
        console.log("After Each")
    })

    it("should render heading inside Contact component",()=>{

        render(<Contact/>);
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    it("should render 2 inputs inside Contact component",()=>{
    
        render(<Contact/>);
        const inputs  =screen.getAllByRole("textbox");
        // console.log(inputs.length);
        expect(inputs.length).toBe(2);
    })
    
    it("should load button inside Contact component",()=>{
    
        render(<Contact/>);
        const inputs  =screen.getByRole("button")
        // console.log(inputs.length);
        expect(inputs).toBeInTheDocument();
    })
})
