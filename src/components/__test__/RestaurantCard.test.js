import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"
import MOCK_dATA from "../../../__mocks__/resMockData.json"

it("shulde be render the Restaurant card", ()=>{
    render(<RestaurantCard resData={MOCK_dATA} />)

    const ResCard = screen.getByText("Chocolate Chip Cookies")

    expect(ResCard).toBeInTheDocument();
})

// write test case for the non-veg cards validation