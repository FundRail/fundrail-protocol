#![allow(clippy::needless_pass_by_value)]

pub mod errors;
pub mod model;
pub mod storage;

pub fn version() -> &'static str {
    "0.1.0"
}

#[cfg(test)]
mod tests {
    use super::version;

    #[test]
    fn contract_version_is_available() {
        assert_eq!(version(), "0.1.0");
    }
}
