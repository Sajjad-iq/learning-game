import { render, screen } from '@testing-library/react';
import App from '../App';
import 'intersection-observer';



it('renders the page', () => {
    render(<App />);
    const app = screen.getByTestId("app")
    expect(app).toBeInTheDocument()
});