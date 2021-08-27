import { Card } from "react-bootstrap";
import React, { useState } from "react";
//import {Link} from 'react-router-dom'
import "./Dashboard.css";
const CardTemplate = (props) => {
  //   const [hoverColor, setHoverColor] = useState('#348fe2');
  //  const handleMouseOver =() =>{
  //    setHoverColor('white');

  //  }
  //  const handleMouseLeave = ()=>{
  //    setHoverColor('#348fe2');
  //  }

  return (
    <Card className={props.lastCard?"lastCard":"normalCard"} style={{width:'101%'}}>
      <Card.Body>
        <p className="cardTitle">
          {props.cardName}
          {props.lock && (
            <img
              src={props.lock}
              style={{
                position: "absolute",
                height: "20px",
                top: "8%",
                right: "6%",
              }}
            ></img>
          )}
        </p>

        {!props.lastCard ? (
          <div className="image">
            <img src={props.cardIcon} className="icon"></img>
          </div>
        ) : (
          ""
        )}

        {props.thirdCard && (
          <div class="row">
            <div className="col left">
              <p className="Text">Task Available</p>
              <h4 className="Count">72</h4>
            </div>
            <div className="col right">
              <p className="Text">Requests Available</p>
              <h4 className="Count">50</h4>
            </div>
          </div>
        )}

        {props.identify && (
          <div class="row">
            <div className="col left">
              <p className="Text">Open</p>
              <h4 className="Count">72</h4>
            </div>
            <div className="col right">
              <p className="Text">Drafts</p>
              <h4 className="Count">50</h4>
            </div>
          </div>
        )}
        {props.lastCard && (
          <div className="lastCard">
            <div className="row">
              <p className="lastCardHeader">Need Help?</p>
            </div>
            <br />
            <br />
            <div className="row">
              <b className="lastCardText">Genesys Support</b>
              <b className="lastCardEmail">Contact@nvknurseries.com</b>
            </div>
            <br />
            <div className="row">
              <b className="lastCardText">Human Resources</b>
              <b className="lastCardEmail">Contact@nvknurseries.com</b>
            </div>
            <br />

            <div
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                textAlign: "center",
                color: "black",
              }}
              className="col"
            >
              Staff Directory &nbsp;
              <a style={{ textAlign: "right", textDecoration:'none'}} className="col" href="">
                Click Here
              </a>
             
            </div>
           
            <div style ={{textAlign:'right'}}>
              <a href= "">
            <img src={props.edit} className="editIcon"></img>
            </a>
            </div>
          
           
          </div>
           
        )}
      </Card.Body>
    </Card>
  );
};

export default CardTemplate;
