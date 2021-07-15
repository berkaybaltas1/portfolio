import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { BsFileCode } from "react-icons/bs";
import { HiOutlineViewGrid } from "react-icons/hi";
import "./css/Cards.css";

function Cards() {
  return (
    <section className="card-container">
      <div className="card">
        <BsFileCode className="card-logo" />
        <h3>Skills.</h3>
        <ul className="card-list">
          <li>
            Proficient in HTML, CSS, Javascript using a modern library such as
            React JS.
          </li>
          <li>Experience with Node.js and MongoDB.</li>
          <li>Experience with Mongoose and Express.</li>
          <li>Familiar with SQL and AWS.</li>
        </ul>
        <hr className="card-hr"></hr>
      </div>
      <div className="card">
        <IoSchoolOutline className="card-logo" />
        <h3>Education.</h3>
        <ul className="card-list">
          <li>
            A.A.S. in Computer Information Systems - Queensborough Community
            College.
          </li>
          <li>B.S. in Information Technology - Arizona State University.</li>
        </ul>
        <hr className="card-hr"></hr>
      </div>
      <div className="card">
        <HiOutlineViewGrid className="card-logo" />
        <h3>Projects.</h3>
        <ul className="card-list">
          <li>
            Developed Tinder clone using the MERN stack. (MongoDB, Express,
            React Node){" "}
          </li>
          <li>
            Developed several mini-projects using React JS hooks such as
            useState and useEffect.
          </li>
        </ul>
        <hr className="card-hr"></hr>
      </div>
    </section>
  );
}

export default Cards;
