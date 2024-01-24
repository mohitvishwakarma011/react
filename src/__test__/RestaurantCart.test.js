import { render,screen } from "@testing-library/react";
import RestaurantCard,{WithPromotedLabel} from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("Should render Rrstaurant Card with props Data",()=>{

    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name  = screen.getByText("Darbar Veg Restaurant");

    expect(name).toBeInTheDocument();
})

