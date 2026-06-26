import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../src/components/Navbar';

// Mock matchMedia for framer-motion/lucide-react issues in JSDOM if any
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Navbar Component', () => {
  it('renders navbar links with separate pages and large font sizes', () => {
    render(<Navbar />);

    const aboutLink = screen.getByText('About');
    const productsLink = screen.getByText('Products');
    const servicesLink = screen.getByText('Services');
    const contactLink = screen.getByText('Contact');

    // Test that they point to actual separate pages instead of just anchor tags
    expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
    expect(productsLink.closest('a')).toHaveAttribute('href', '/products');
    expect(servicesLink.closest('a')).toHaveAttribute('href', '/services');
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');

    // Test for larger font size class (e.g. text-xl) since user asked for them to be bigger
    expect(aboutLink.closest('a')).toHaveClass('text-xl');
    expect(productsLink.closest('a')).toHaveClass('text-xl');
    expect(servicesLink.closest('a')).toHaveClass('text-xl');
    expect(contactLink.closest('a')).toHaveClass('text-xl');
  });
});
