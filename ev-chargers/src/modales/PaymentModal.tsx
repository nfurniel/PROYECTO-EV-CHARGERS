
import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentModal.css';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    amount: string;
    stationName: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onSuccess, amount, stationName }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (isOpen) {
            setIsLoading(false);
            setName('');
            setErrorMessage('');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handlePay = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);
        setErrorMessage('');

        const cardElement = elements.getElement(CardElement);

        if (!cardElement) {
            setIsLoading(false);
            return;
        }


        const { error, token } = await stripe.createToken(cardElement, {
            name: name,
        });

        if (error) {
            console.error('[error]', error);
            setErrorMessage(error.message || 'Error en el pago');
            setIsLoading(false);
        } else {
            console.log('[PaymentMethod]', token);

            setTimeout(() => {
                setIsLoading(false);
                onSuccess();
            }, 1000);
        }
    };

    return (
        <div className="payment-modal-overlay">
            <div className="payment-modal-content">
                <div className="payment-header">
                    <div className="payment-title">Pago Seguro (Stripe)</div>
                    <div className="payment-description">Reservando en {stationName}</div>
                    <div className="payment-amount">{amount}</div>
                </div>

                <form className="payment-form" onSubmit={handlePay}>
                    <div className="form-group">
                        <label className="form-label">Nombre del Titular</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Nombre como aparece en la tarjeta"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Datos de la Tarjeta</label>
                        <div className="stripe-card-element-container">
                            <CardElement options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }} />
                        </div>
                    </div>

                    {errorMessage && <div className="error-message">{errorMessage}</div>}

                    <button type="submit" className="pay-button" disabled={!stripe || isLoading}>
                        {isLoading ? (
                            <>
                                <span className="spinner"></span>
                                Procesando...
                            </>
                        ) : (
                            `Pagar ${amount}`
                        )}
                    </button>

                    <button type="button" className="cancel-button" onClick={onClose} disabled={isLoading}>
                        Cancelar
                    </button>
                </form>

                <div className="stripe-badge">
                    Powered by Stripe
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
