import {screen, render, cleanup} from '@testing-library/react';
import AboutMe from '../AboutMe';

test('Should render AboutMe component', () => {
    const { getAllByText } = render(<AboutMe/>);
    expect(getAllByText("Hello, I'm Jakub 'm aspiring programmer intrested in low level programming and motorsports. heck out my projects below! I hope you find them somehow useful. "))
});