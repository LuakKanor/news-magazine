import React from "react";

const Navbar = ({ setCategory, keyword, setKeyword, setCountry, country }) => {
  const categoryList = [
    {
      id: "t",
      name: "Technology",
    },
    {
      id: "b",
      name: "Business",
    },
    {
      id: "h",
      name: "Health",
    },
    {
      id: "s",
      name: "Sports",
    },
    {
      id: "e",
      name: "Entertainment",
    },
  ];

  const countryList = [
    {
      id: "ae",
      name: "United Arab Emirates",
    },
    {
      id: "in",
      name: "India",
    },
    {
      id: "us",
      name: "United States of America",
    },
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="badge bg-light text-dark fs-4">News Magazine</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {categoryList.map((category) => {
                return (
                  <li className="nav-item" role="button" key={category.id}>
                    <div
                      className="nav-link"
                      onClick={() => setCategory(category.name.toLowerCase())}
                    >
                      {category.name}
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="d-flex justify-content-end">
              <input
                className="form-control me-2 bg-light text-dark ms-0 ms-md-5"
                type="text"
                placeholder="Search"
                aria-label="Search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-end my-md-0 my-2">
              <select
                class="form-select"
                aria-label="Select Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Select country</option>
                {countryList.map((country) => {
                  return (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
