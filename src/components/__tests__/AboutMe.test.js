import {screen, render, cleanup} from '@testing-library/react';
import AboutMe from '../AboutMe';

test('Should render AboutMe component', () => {
    const { getAllByText } = render(<AboutMe/>);
    
});