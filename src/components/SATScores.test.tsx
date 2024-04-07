
import { describe, it, expect, vi } from 'vitest';
import SATScores from './SATScores';
import { render, screen } from '@testing-library/react';

// Mock the getSATScoresForSchool function
vi.mock('../api/nycschools', () => ({
    getSATScoresForSchool: () => Promise.resolve([{ dbn: '123', school_name: 'Test School', num_of_sat_test_takers: '100', sat_critical_reading_avg_score: '500', sat_math_avg_score: '600', sat_writing_avg_score: '550' }])
}));

describe('SATScores component', () => {
    it('should render "Select school from the list" when in initial view mode', () => {
        render(<SATScores selectedSchool={null} initView={true} />);
        const selectSchoolText = screen.getByTestId('sat-scores-dt');
        expect(selectSchoolText).toBeDefined();
    });

    it('should render a spinner when data is being fetched', () => {
        render(<SATScores selectedSchool={{ dbn: '123', school_name: 'Test School' }} initView={false} />);
        const spinner = screen.getByTestId('sat-score-spinner-dt');
        expect(spinner).toBeDefined();
    });

    it('should render the SAT scores when data is available', async () => {
        render(<SATScores selectedSchool={{ dbn: '123', school_name: 'Test School' }} initView={false} />);
        // Wait for the component to finish rendering and fetching data
        await screen.findAllByTestId("SAT reading score:");
        const numOfSATTestTakers = screen.getAllByTestId("SAT reading score:");
        expect(numOfSATTestTakers[0].textContent).toBe("500") 
    });
});

