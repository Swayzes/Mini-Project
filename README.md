# Mini Project
 CCS full-stack coding exercise

## Brief:
As a payment processing business, our customers are merchants (for example a cafe, retail shop or taxi driver). From time to time a merchant needs to update their bank account details. Currently, merchants need to phone or email to the customer support team in order to do this. This is problematic for the following reasons:

- Inefficiency: the support team has to manually carry out work which could be automated.
- Mistakes: a support agent may write down the wrong digits when taking instructions by phone
- Security: email and phone contacts are susceptible to spoofing and social engineering. Attackers know this and sometimes maliciously try to change bank account details in order to redirect funds to an account they control.

Your task is to allow merchants to automatically update their bank account details using a web interface (via their web browser). Focus on the following items in order of priority (most important first). You are not expected to complete all the items on the list; just do what you can in the time available to you:

1. Design appropriate RESTful API endpoint(s) for this feature
2. Implement your API endpoint(s) in code
3. Include some appropriate automated tests
4. Design a UI which consumes your API endpoint(s)
5. Implement your UI
6. Bonus: implement API calls for external services (it’s OK to mock these based on documentation if you can’t get API keys), e.g.:
  - Notify the merchant that their account information has been updated (e.g. via Twilio)
  - Look up the bank information using a sort code lookup API
  - Run a Confirmation of Payee check (for example, via Modulr or SurePay)

Requirements:
