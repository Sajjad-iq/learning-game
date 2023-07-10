import { render, screen } from '@testing-library/react';
import App from '../App';

it('renders the page', () => {
    render(<App />);
    const firstPage = screen.getByTestId("first-page")
    expect(firstPage).toBeInTheDocument()
});