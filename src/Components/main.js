import React from "react";
import CardTemplate from "./Dashboard";
import customerIcon from "../assets/img/customer-quotes-lg.svg";
import purchaseIcon from "../assets/img/purchase-orders-lg.svg"; 
import inventoryIcon from "../assets/img/inventory-lg.svg";
import inventoryLock from "../assets/img/lock.svg";
import toolsIcon from "../assets/img/settings-lg.svg";
import reports from "../assets/img/reports-lg.svg";
import editIcon from "../assets/img/edit-ic.svg";
import { Container,Row, Col } from "react-bootstrap";
import HeaderNav from "./HeaderNav";
import Left from "./Left"
import "./Dashboard.css";
class Main extends React.Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <div className="row" style={{marginTop:'52px',overflowX:'hidden',marginRight:'0'} }>
          <div className="col-1" style={{width:'5%'}}>
           <Left/>
          </div>
          <div className="col-2" style={{marginLeft:'14px'}}>
            {/* <Container> */}
            <Row style = {{width:'90vw', paddingTop:'28px', paddingLeft:'0',paddingBottom:'0'}}>
              <Col xs ={12} sm ={12} md ={6} lg ={4} >
                  <CardTemplate
                    cardName="Customer & Quote Orders"
                    cardIcon = {customerIcon}
                    identify="true"
                  />
               </Col>
               <Col xs ={12}  sm ={12} md ={6} lg ={4} >
                  <CardTemplate
                    cardName="Purchase Orders"
                    cardIcon={ purchaseIcon }
                    identify="true"
                  />
                </Col>
                <Col xs ={12}  sm ={12} md ={6} lg ={4} >
                  <CardTemplate
                    cardName="Inventory Management"
                    cardIcon={inventoryIcon}
                    thirdCard = "true"
                    lock = {inventoryLock}
                  />
                </Col>
             
             
              <Col xs ={12}  sm ={12} md ={6} lg ={4} >
                  <CardTemplate
                    cardName="Tools & Settings"
                    cardIcon={toolsIcon}
                  />
                </Col>
                <Col xs ={12}  sm ={12} md ={6} lg ={4} >
                  <CardTemplate
                    cardName="Reports"
                    cardIcon={ reports }
                  />
                </Col>
                <Col  >
                  <CardTemplate lastCard="true" removeClass = "true" edit = {editIcon}/>
                </Col>
              </Row>
            {/* </Container> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
