// src/controllers/paymentController.js
const PaymentService = require('../services/paymentService');

exports.createPayment = async (req, res) => {
    try {
        const payment = await PaymentService.createPayment(req.body);
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPaymentStatus = async (req, res) => {
    try {
        const status = await PaymentService.getPaymentStatus(req.params.id);
        res.status(200).json(status);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
