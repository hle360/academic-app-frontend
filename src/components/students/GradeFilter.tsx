import React, { FC } from "react";
import { GradeFilterProps } from "../../lib/proptypes";

const GradeFilter : FC<GradeFilterProps> = ({ selectedGrade, setSelectedGrade }) => {
    const grades = ["all", "1", "2", "3", "4", "5"];
    return (
        <div className="grade-filter">
            <label>select a grade:</label>
            <select className="grade-select"
                value={selectedGrade}
                onChange={(e) =>
                    setSelectedGrade(
                        e.target.value === "all" ? "all" : Number(e.target.value)
                    )}
            >
                {
                    grades.map( grade => <option key={grade} value={grade}>{grade}</option>)
                }

            </select>
        </div>
    )
};

export default GradeFilter;
