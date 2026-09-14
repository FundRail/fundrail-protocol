#[derive(Clone, Debug, PartialEq, Eq)]
pub enum PaymentError {
    InvalidAmount,
    InvalidAsset,
    InvalidRecipientSplit,
    UnknownPayment,
    InvalidStatusTransition,
}

impl PaymentError {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::InvalidAmount => "invalid amount",
            Self::InvalidAsset => "invalid asset",
            Self::InvalidRecipientSplit => "invalid recipient split",
            Self::UnknownPayment => "unknown payment",
            Self::InvalidStatusTransition => "invalid status transition",
        }
    }
}

#[cfg(test)]
mod tests {
    use super::PaymentError;

    #[test]
    fn payment_error_is_described() {
        assert_eq!(PaymentError::InvalidAmount.as_str(), "invalid amount");
        assert_eq!(PaymentError::InvalidRecipientSplit.as_str(), "invalid recipient split");
    }
}
