import React from "react";
import "./css/productFilter.css";

const ProductFilter = ({ filters, setFilters, openFilters, setOpenFilters, filterOptions }) => {
    const handleFilterChange = (category, value) => {
        setFilters((prevFilters) => {
            const isSelected = prevFilters[category].includes(value);  // Pas de conversion toLowerCase ici
            return {
                ...prevFilters,
                [category]: isSelected
                    ? prevFilters[category].filter((item) => item !== value)
                    : [...prevFilters[category], value],
            };
        });
    };

    const toggleFilter = (id) => {
        setOpenFilters((prevOpenFilters) => ({
            ...prevOpenFilters,
            [id]: !prevOpenFilters[id],
        }));
    };

    return (
        <div className="filter-container">
            {/* Size Filter */}
            <div className="filter">
                <button className="filter-btn" onClick={() => toggleFilter("size")}>
                    Size{" "}
                    <span className="toggle-icon">
                        {openFilters.size ? "-" : "+"}
                    </span>
                </button>
                <hr />
                <div className="filter-content" style={{ display: openFilters.size ? "block" : "none" }}>
                    {filterOptions.size.map((size) => (
                        <label className="checkbox-container" key={size}>
                            {size}
                            <input
                                type="checkbox"
                                checked={filters.size.includes(size)}
                                onChange={() => handleFilterChange("size", size)}
                            />
                            <span className="checkmark"></span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Width Filter */}
            <div className="filter">
                <button className="filter-btn" onClick={() => toggleFilter("width")}>
                    Width{" "}
                    <span className="toggle-icon">
                        {openFilters.width ? "-" : "+"}
                    </span>
                </button>
                <hr />
                <div className="filter-content" style={{ display: openFilters.width ? "block" : "none" }}>
                    {filterOptions.width.map((width) => (
                        <label className="checkbox-container" key={width}>
                            {width}
                            <input
                                type="checkbox"
                                checked={filters.width.includes(width)}
                                onChange={() => handleFilterChange("width", width)}
                            />
                            <span className="checkmark"></span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Activities Filter */}
            <div className="filter">
                <button className="filter-btn" onClick={() => toggleFilter("activities")}>
                    Activities{" "}
                    <span className="toggle-icon">
                        {openFilters.activities ? "-" : "+"}
                    </span>
                </button>
                <hr />
                <div className="filter-content" style={{ display: openFilters.activities ? "block" : "none" }}>
                    {filterOptions.activities.map((activity) => (
                        <label className="checkbox-container" key={activity}>
                            {activity}
                            <input
                                type="checkbox"
                                checked={filters.activities.includes(activity)}
                                onChange={() => handleFilterChange("activities", activity)}
                            />
                            <span className="checkmark"></span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Model Filter */}
            <div className="filter">
                <button className="filter-btn" onClick={() => toggleFilter("model")}>
                    Model{" "}
                    <span className="toggle-icon">
                        {openFilters.model ? "-" : "+"}
                    </span>
                </button>
                <hr />
                <div className="filter-content" style={{ display: openFilters.model ? "block" : "none" }}>
                    {filterOptions.model.map((model) => (
                        <label className="checkbox-container" key={model}>
                            {model}
                            <input
                                type="checkbox"
                                checked={filters.model.includes(model)}
                                onChange={() => handleFilterChange("model", model)}
                            />
                            <span className="checkmark"></span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Filter */}
            <div className="filter">
                <button className="filter-btn" onClick={() => toggleFilter("price")}>
                    Price{" "}
                    <span className="toggle-icon">
                        {openFilters.price ? "-" : "+"}
                    </span>
                </button>
                <hr />
                <div className="filter-content" style={{ display: openFilters.price ? "block" : "none" }}>
                    {filterOptions.price.map((range) => (
                        <label className="checkbox-container" key={range}>
                            {range}
                            <input
                                type="checkbox"
                                checked={filters.price.includes(range)}
                                onChange={() => handleFilterChange("price", range)}
                            />
                            <span className="checkmark"></span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;
