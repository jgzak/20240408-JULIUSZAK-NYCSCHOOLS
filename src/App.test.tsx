import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest'
import App from './App';

// Mock the all fetching functions
vi.mock('./api/nycschools', () => ({
  getSchools: async () => Promise.resolve([{ dbn: '123', school_name: 'Test School' }]),
  getSchoolDetails: async () => Promise.resolve([{ dbn: '123', school_name: 'Test School', borough: 'Brooklyn', location: '123 Main St', phone_number: '123-456-7890' }]),
  getSATScoresForSchool: async () => Promise.resolve([{ dbn: '123', school_name: 'Test School', num_of_sat_test_takers: '100', sat_critical_reading_avg_score: '500', sat_math_avg_score: '600', sat_writing_avg_score: '550' }])
}));

describe('App', () => {
  // const user = userEvent.setup()
  it('render list of schools, find school in a list, click on it, verify all data populated in details and scores components', async () => {
    
    render(<App />);
    // Wait for the component to finish rendering and fetching data
    await screen.findAllByTestId("school-list-dt");
    const schoolLink = await screen.findByTestId("123");
    
    

    // Wait for the school details to be loaded
    await screen.findByTestId("school-details-dt");

    const schoolDetailsElement = screen.getByTestId('school-details-dt');
    expect(schoolDetailsElement).toBeDefined();

    // Click on the first school link
    fireEvent.click(schoolLink);

    // Wait for the school details to be loaded
    await screen.findByTestId('123');
    const phone = screen.getByTestId("Phone:")
    const location = screen.getByTestId("Location:")
    const sATReadingScore = screen.getByTestId("SAT reading score:")
    
    
    expect(phone.textContent).toBe("123-456-7890");
    expect(location.textContent).toBe("123 Main St");
    expect(sATReadingScore.textContent).toBe("500");
    
  });

});
