#[derive(Clone, Debug, PartialEq, Eq)]
pub enum PaymentStatus {
    Pending,
    Approved,
    Processing,
    Completed,
    Failed,
    Cancelled,
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct PaymentRecipient {
    pub account_id: String,
    pub memo: Option<String>,
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct PaymentAsset {
    pub code: String,
    pub issuer: Option<String>,
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct Payment {
    pub id: String,
    pub amount: i128,
    pub asset: PaymentAsset,
    pub sender: String,
    pub recipient: PaymentRecipient,
    pub status: PaymentStatus,
    pub description: Option<String>,
}

impl Default for PaymentStatus {
    fn default() -> Self {
        Self::Pending
    }
}

#[cfg(test)]
mod tests {
    use super::{Payment, PaymentAsset, PaymentRecipient, PaymentStatus};

    #[test]
    fn payment_status_defaults_to_pending() {
        assert_eq!(PaymentStatus::default(), PaymentStatus::Pending);
    }

    #[test]
    fn payment_model_can_be_constructed() {
        let payment = Payment {
            id: "pay_123".to_string(),
            amount: 250_000,
            asset: PaymentAsset {
                code: "USDC".to_string(),
                issuer: Some("GA...".to_string()),
            },
            sender: "GABC".to_string(),
            recipient: PaymentRecipient {
                account_id: "GXYZ".to_string(),
                memo: Some("Invoice 42".to_string()),
            },
            status: PaymentStatus::Pending,
            description: Some("Settlement".to_string()),
        };

        assert_eq!(payment.status, PaymentStatus::Pending);
        assert_eq!(payment.recipient.account_id, "GXYZ");
    }
}
