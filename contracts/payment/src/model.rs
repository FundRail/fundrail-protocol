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
pub enum PaymentTrigger {
    PaymentReceived,
    MilestoneApproved,
    RecurringWorkflow,
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct PaymentRecipient {
    pub label: String,
    pub account_id: String,
    pub percentage: u32,
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
    pub trigger: PaymentTrigger,
    pub amount: i128,
    pub asset: PaymentAsset,
    pub sender: String,
    pub recipients: Vec<PaymentRecipient>,
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
    use super::{Payment, PaymentAsset, PaymentRecipient, PaymentStatus, PaymentTrigger};

    #[test]
    fn payment_status_defaults_to_pending() {
        assert_eq!(PaymentStatus::default(), PaymentStatus::Pending);
    }

    #[test]
    fn payment_model_matches_split_workflow_frontend() {
        let payment = Payment {
            id: "pay_123".to_string(),
            trigger: PaymentTrigger::PaymentReceived,
            amount: 10_000,
            asset: PaymentAsset {
                code: "USDC".to_string(),
                issuer: Some("GA...".to_string()),
            },
            sender: "GABC".to_string(),
            recipients: vec![
                PaymentRecipient {
                    label: "Creator payout".to_string(),
                    account_id: "GCREATOR".to_string(),
                    percentage: 70,
                    memo: Some("Creator".to_string()),
                },
                PaymentRecipient {
                    label: "Agency fee".to_string(),
                    account_id: "GAGENCY".to_string(),
                    percentage: 20,
                    memo: Some("Agency".to_string()),
                },
                PaymentRecipient {
                    label: "Reserve".to_string(),
                    account_id: "GRESERVE".to_string(),
                    percentage: 10,
                    memo: Some("Reserve".to_string()),
                },
            ],
            status: PaymentStatus::Pending,
            description: Some("Client payment split".to_string()),
        };

        assert_eq!(payment.status, PaymentStatus::Pending);
        assert_eq!(payment.trigger, PaymentTrigger::PaymentReceived);
        assert_eq!(payment.recipients.len(), 3);
        assert_eq!(payment.recipients[0].percentage, 70);
        assert_eq!(payment.recipients[2].account_id, "GRESERVE");
    }
}
