import { FiMapPin } from "react-icons/fi";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./banner.scss";
import { useState } from "react";
import {
  FaChevronDown,
  FaRegCalendarAlt,
  FaRegUser,
  FaSearch,
} from "react-icons/fa";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="banner">
      <div className="container">
        <div className="banner_text">
          <h2>Explore the huge world & enjoy it's beauty</h2>
          <article>
            discover new things in exploring the world & make<br></br> your
            vacation memorable to remember forever
          </article>
        </div>
        <div className="banner_search">
          <div className="search_wrapper">
            <div className="search_item">
              <div className="location">
                <i className="i">
                  <FiMapPin />
                </i>
                <div className="location_input">
                  <span>
                    Location{" "}
                    <i>
                      <FaChevronDown />
                    </i>
                  </span>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Please enter your location. e.g Madrid"
                  />
                </div>
              </div>
              <div className="dates">
                <div className="date_input">
                  <i className="date_i">
                    <FaRegCalendarAlt />
                  </i>
                  <div className="date_headings">
                    <h4>
                      Date{" "}
                      <i>
                        <FaChevronDown />
                      </i>
                    </h4>
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="dated"
                    >
                      {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                        date[0].endDate,
                        "MM/dd/yyyy"
                      )}`}
                    </span>
                  </div>
                  {openDate && (
                    <div className="date_range">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        style={{ color: "#9e9e9e" }}
                        minDate={new Date()}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="guests">
                <i className="guest_i">
                  <FaRegUser />
                </i>
                <div className="guest_input">
                  <span>
                    Guest
                    <i>
                      <FaChevronDown />
                    </i>
                  </span>
                  <small>4</small>
                  <div className="guest_option">
                    <div className="geust_item">
                      <span className="adult_text">Adult</span>
                      <div className="counter">
                        <button
                          disabled={options.adult <= 1}
                          className="counter_button"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="counter_number">{options.adult}</span>
                        <button
                          className="counter_button"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="geust_item">
                      <span className="adult_text">Children</span>
                      <div className="counter">
                        <button
                          disabled={options.children <= 0}
                          className="counter_button"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="counter_number">
                          {options.children}
                        </span>
                        <button
                          className="counter_button"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="geust_item">
                      <span className="adult_text">Room</span>
                      <div className="counter">
                        <button
                          disabled={options.room <= 1}
                          className="counter_button"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="counter_number">{options.room}</span>
                        <button
                          className="counter_button"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button">
                <button>
                  <i>
                    <FaSearch />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
