import React from 'react';

/**
 * A component that displays a pair of label and value.
 */
interface PairProps {
    label: string;
    value: string | number;
}

const Pair: React.FC<PairProps> = ({ label, value }) => {
    return (
        <div><span>{label}</span><span data-testid={label}>{value}</span></div>
    );
};

export default Pair;