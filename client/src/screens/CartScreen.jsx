import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {FiMinusCircle} from 'react-icons/fi'
import {HiOutlinePlusCircle} from 'react-icons/hi'
import {FiTrash2} from 'react-icons/fi'
import {addToCart, deleteFromCart} from '../actions/cartAction'
import Checkout from "../components/Checkout";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((X, item) => X + item.price,0)
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h5>
                      {item.name} [{item.varient}]
                    </h5>
                    <h6>Price : {item.quantity} x {item.prices[0][item.varient]} = {item.price}</h6>
                    <h6>Quantity : &nbsp;
                        <FiMinusCircle 
                        className="text-danger"
                        style={{cursor:'pointer'}}
                        onClick={() => {dispatch(addToCart(item,item.quantity-1, item.varient))}}
                        /> &nbsp;
                        {item.quantity} &nbsp;
                        <HiOutlinePlusCircle className="text-success"
                        style={{cursor:'pointer'}}
                        onClick={() => {dispatch(addToCart(item,item.quantity+1, item.varient))}}
                        /> &nbsp;
                        </h6>
                        <hr/>
                  </Col>
                  <Col md={5}>
                    <img alt={item.name} src={item.image} 
                    style={{height:'80px',width:'80px'}}/>
                    <FiTrash2 
                    className="text-danger"
                    style={{cursor:'pointer', margin:'20px'}}
                    onClick={() => {dispatch(deleteFromCart(item))}}
                    />
                  </Col>
                </>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
            <h4>Sub Total</h4>
            <h4>RS {subTotal} /-</h4>
            <Checkout subTotal={subTotal} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;
