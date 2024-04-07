import React from 'react';
import { Badge } from 'react-bootstrap';

/**
 * A component that displays a pair of label and value.
 */
interface PairProps {
    label: string;
    value: string | number;
    valueInBadge?: boolean;
    bg?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white" | "transparent";
}

const Pair: React.FC<PairProps> = ({ label, value, valueInBadge = false, bg = "info" }) => {
    return (
        <div>
            <span><em><small aria-label={"label"}>{label}</small></em></span>
            {valueInBadge ?<Badge data-testid={label} bg={bg} aria-label={`value is ${value} it has ${bg} level`}>{value}</Badge> : <span data-testid={label}>{value}</span>}
        </div>
    );
};

export default Pair;