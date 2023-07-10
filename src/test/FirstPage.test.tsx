import { render, screen } from '@testing-library/react';
import App from '../App';
import 'intersection-observer';



it('renders the page', () => {
    render(<App />);
    const firstPage = screen.getByTestId("first-page")
    expect(firstPage).toBeInTheDocument()
});