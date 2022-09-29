const express = require('express')
const router = express.Router()
const { v4: uuidv4} = require('uuid')
const stripe = require('stripe')('sk_test_51LMCPjSEQBdQG2Rpxq28kJk4KqYWYSAi9bvXQpZWhnB6RggUFhCVJrAAJDmglTx06cAzi1oi7JB6bUeQ9VWiinuL00iGPkyPSI')
const Order = require('../models/orderModel')
router.post('/placeorder', async (req, res) => {
    const {token, subTotal, currentUser, cartItems} = req.body
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const payment = await stripe.paymentIntents.create({
            amount: subTotal * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
        }, {
            idempotencyKey: uuidv4(),
        })
        if(payment) {
            const newOrder = new Order ({
                name: currentUser.name,
                email: currentUser.email,
                userId: currentUser._id,
                orderItems: cartItems,
                orderAmount: subTotal,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip,
                },
                transectionId: payment.source.id
            })
            newOrder.save()
            res.send('Payment success')
        } else {
            res.send('Payment failed')
        }
    } catch (error) {
        res.status(400).json({
            message: 'Something went wrong',
            error:error.stack
        });
    }
})

// router.post('/getuserorder', async (req, res) => {
//     const {userid} = req.body
// })
// try {
//     const orders = await Order.find({userid}).sort({_id:'-1'})
//     res.status(200).send(orders)
// } catch (error) {
//     res.status(400).json({
//         message:'something went wrong',
//         error:error.stack
//     })
// }

module.exports = router;