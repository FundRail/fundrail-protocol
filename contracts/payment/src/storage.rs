use crate::model::{Payment, PaymentStatus};

pub struct PaymentStore {
    payments: Vec<Payment>,
}

impl PaymentStore {
    pub fn new() -> Self {
        Self { payments: Vec::new() }
    }

    pub fn add(&mut self, payment: Payment) {
        self.payments.push(payment);
    }

    pub fn get(&self, id: &str) -> Option<&Payment> {
        self.payments.iter().find(|payment| payment.id == id)
    }

    pub fn update_status(&mut self, id: &str, status: PaymentStatus) -> bool {
        if let Some(payment) = self.payments.iter_mut().find(|payment| payment.id == id) {
            payment.status = status;
            true
        } else {
            false
        }
    }
}

impl Default for PaymentStore {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::PaymentStore;
    use crate::model::{Payment, PaymentAsset, PaymentRecipient, PaymentStatus, PaymentTrigger};

    #[test]
    fn store_tracks_payment_status_updates() {
        let mut store = PaymentStore::new();
        store.add(Payment {
            id: "pay_42".to_string(),
            trigger: PaymentTrigger::PaymentReceived,
            amount: 50,
            asset: PaymentAsset {
                code: "XLM".to_string(),
                issuer: None,
            },
            sender: "GONE".to_string(),
            recipients: vec![PaymentRecipient {
                label: "Creator payout".to_string(),
                account_id: "GTWO".to_string(),
                percentage: 100,
                memo: None,
            }],
            status: PaymentStatus::Pending,
            description: None,
        });

        assert!(store.update_status("pay_42", PaymentStatus::Completed));
        assert_eq!(store.get("pay_42").unwrap().status, PaymentStatus::Completed);
    }
}
