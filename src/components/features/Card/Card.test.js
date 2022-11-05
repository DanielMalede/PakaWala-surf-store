import Card from './Card'
import {screen,render} from '@testing-library/react'

describe("Card",()=>{
    test("vxbvx",async()=>{
        render(<Card/>)
        const elm = await screen.findByTestId('testForContainer')
        expect(elm).toBeInTheDocument()
    })
})