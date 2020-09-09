import React, { useState, useEffect } from "react";
import "./searchFilters.css";
import userStore from "../stores/userStore";
import { loadDetails } from "../actions/detailAction";

function SearchFilters() {
  const [users, setUsers] = useState();

  const [ageDown, setAgeDown] = useState(18);
  const [ageUp, setAgeUp] = useState(90);
  const [distance, setDistance] = useState(150);
  const [withSons, setWithSons] = useState();
  const [withoutSons, setWithoutSons] = useState();
  const [withJob, setWithJob] = useState();
  const [withoutJob, setWithoutJob] = useState();
  const [single, setSingle] = useState();
  const [divorced, setDivorced] = useState();
  const [widow, setWidow] = useState();
  const [married, setMarried] = useState();
  const filters = {
    ageDown: { ageDown },
    ageUp: { ageUp },
    distance: { distance },
    withSons: { withSons },
    withoutSons: { withoutSons },
    withoutJob: { withoutJob },
    withJob: { withJob },
    single: { single },
    divorced: { divorced },
    widow: { widow },
    married: { married },
  };
  console.log("aquests són els filtres", filters, withJob, withSons);

  function onFieldChange(value, setValue) {
    setValue(value);
  }
  useEffect(() => {
    userStore.addChangeListener(onChange);

    loadDetails();

    return () => userStore.removeChangeListener(onChange);
  }, []);
  function onChange() {
    setUsers(userStore.getDetailUsers());
  }
  function usingFilters() {
    let userResult = users.filter(
      (element) =>
        element.age >= +ageDown &&
        element.age <= +ageUp &&
        +element.distance <= +distance &&
        ((element.sons > 0 && withSons === "yes") ||
          (element.sons === 0 && withoutSons === "no")) &&
        ((element.job === "yes" && withJob === "yes") ||
          (element.job === "no" && withoutJob === "no")) &&
        ((element.civilState === "single" && single === "single") ||
          (element.civilState === "divorced" && divorced === "divorced") ||
          (element.civilState === "widow" && widow === "widow") ||
          (element.civilState === "married" && married === "married"))
    );
    debugger;
    console.log("aquests son els resultats filtrats", userResult);
  }

  return (
    <div className="main__window">
      <main className="main__search-filters">
        <form method="get" id="searchForm">
          <div className="filter__container ">
            <img
              className="filter__icon"
              src="https://image.flaticon.com/icons/svg/3021/3021790.svg"
              alt=""
            ></img>
            <div className="age__filter--text filter__text">from</div>
            <input
              type="text"
              className="input__filter"
              onChange={(event) =>
                onFieldChange(event.target.value, setAgeDown)
              }
            ></input>
            <div className="age__filter--text filter__text">to</div>
            <input
              type="text"
              className="input__filter"
              onChange={(event) => onFieldChange(event.target.value, setAgeUp)}
            ></input>
          </div>
          <div className="filter__container">
            <img
              className="filter__icon"
              src="https://image.flaticon.com/icons/svg/1072/1072623.svg"
              alt=""
            ></img>
            <div className="distance__filter--text filter__text">
              less than{" "}
            </div>
            <input
              type="text"
              className="input__filter"
              onChange={(event) =>
                onFieldChange(event.target.value, setDistance)
              }
            ></input>
            <div className="distance__filter--text filter__text"> km </div>
          </div>
          <div className="filter__container">
            <img
              alt=""
              className="filter__icon"
              src="https://image.flaticon.com/icons/svg/1761/1761430.svg"
            ></img>
            <input
              type="checkbox"
              value="yes"
              onChange={(event) =>
                onFieldChange(event.target.value, setWithSons)
              }
            ></input>
            <div className="sons__filter--text filter__text">yes</div>
            <input
              type="checkbox"
              value="no"
              onChange={(event) =>
                onFieldChange(event.target.value, setWithoutSons)
              }
            ></input>
            <div className="sons__filter--text filter__text">no</div>
          </div>
          <div className="filter__container">
            <img
              alt=""
              className="filter__icon "
              src="https://image.flaticon.com/icons/svg/1063/1063196.svg"
            ></img>
            <input
              type="checkbox"
              value="yes"
              onChange={(event) =>
                onFieldChange(event.target.value, setWithJob)
              }
            ></input>

            <div className="work__filter--text filter__text">yes</div>

            <input
              type="checkbox"
              value="no"
              onChange={(event) =>
                onFieldChange(event.target.value, setWithoutJob)
              }
            ></input>
            <div className="work__filter--text filter__text">no</div>
          </div>
          <div className="filter__container">
            <img
              alt=""
              className="filter__icon icon__civilState"
              src="https://image.flaticon.com/icons/svg/1102/1102457.svg"
            ></img>
            <div className="civilState__options">
              <div className="civilState__options--section">
                <div className="civilState__options--file">
                  <input
                    type="checkbox"
                    value="single"
                    onChange={(event) =>
                      onFieldChange(event.target.value, setSingle)
                    }
                  ></input>
                  <div className="civilState__filter--text filter__text">
                    single
                  </div>
                </div>
                <div className="civilState__options--file">
                  <input
                    type="checkbox"
                    value="divorced"
                    onChange={(event) =>
                      onFieldChange(event.target.value, setDivorced)
                    }
                  ></input>
                  <div className="civilState__filter--text filter__text">
                    divorced
                  </div>
                </div>
              </div>
              <div className="civilState__options--section">
                <div className="civilState__options--file">
                  <input
                    type="checkbox"
                    value="widow"
                    onChange={(event) =>
                      onFieldChange(event.target.value, setWidow)
                    }
                  ></input>
                  <div className="civilState__filter--text filter__text">
                    widow
                  </div>
                </div>
                <div className="civilState__options--file">
                  <input
                    type="checkbox"
                    value="married"
                    onChange={(event) =>
                      onFieldChange(event.target.value, setMarried)
                    }
                  ></input>
                  <div className="civilState__filter--text filter__text">
                    married
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="filter__submit"
            type="submit"
            onClick={usingFilters}
          >
            Search!
          </button>
        </form>
      </main>
    </div>
  );
}
export default SearchFilters;
