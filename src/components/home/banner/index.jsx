import { FiMapPin } from "react-icons/fi";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./banner.scss";
import { useState } from "react";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { format } from "date-fns";

const Banner = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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
                <i>
                  <FiMapPin />
                </i>
                <div className="location_input">
                  <span>Location <i></i></span>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Please enter your location. e.g Madrid"
                  />
                </div>
              </div>
              <div className="dates">
                <i></i>
                <div className="date_input">
                  <span onClick={() => setOpenDate(!openDate)}>
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                      date[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                    <i>
                      <FaRegCalendarAlt />
                    </i>
                  </span>
                  {openDate && (
                    <div className="date_range">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="guests">
                <i></i>
                <div className="guest_input">
                  <span>
                    Guest{" "}
                    <i>
                      <FaRegUser />
                    </i>
                  </span>
                  <small>4</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
