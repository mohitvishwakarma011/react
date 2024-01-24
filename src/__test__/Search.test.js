import Body from "../components/Body";
import {fireEvent, render,screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/resListMockData.json"
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";

// console.log(MOCK_DATA);

global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });

it("Should search resList for vasanta input ",async ()=>{
    
    await act(async ()=> {
       return render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
       )
    })
    
    const allResCards = screen.getAllByTestId("resCard");

    expect(allResCards.length).toBe(9);

    const searchButton = screen.getByTestId("searchButton")

    const searchInput  = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value:"VasANTa"}});

    fireEvent.click(searchButton);

    //screen should load 2 cards
    const resCardsAfterSearch = screen.getAllByTestId("resCard");

    expect(resCardsAfterSearch.length).toBe(1);

})


it("Should render 7 top rated restaurants in the page after click",async()=>{

  await act( async()=> render(<BrowserRouter>
    <Body/>
</BrowserRouter>) )
  

  const resCardsBeforeFiltering = screen.getAllByTestId("resCard");

  expect(resCardsBeforeFiltering.length).toBe(9);

  const filterTopResBtn = screen.getByText("Filter Restaurant");

  fireEvent.click(filterTopResBtn);

  const resCardsAfterFiltering = screen.getAllByTestId("resCard");

  expect(resCardsAfterFiltering.length).toBe(7);
})