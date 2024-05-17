loanForm = document.getElementById('loan-form');
monthlyPayment = document.getElementById('monthly-payment');
totalPayment = document.getElementById('total-payment');
totalInterest = document.getElementById('total-interest');

loanForm.addEventListener('submit', function (e) {
    e.preventDefault();

    loanAmount = parseFloat(document.getElementById('loan-amount').value);
    interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    repaymentPeriod = parseFloat(document.getElementById('repayment-period').value) * 12;
    if (loanAmount > 1500000 || loanAmount <= 0) {
        alert("Loan amount must be between ₹1 and ₹15,00,000");
        return;
    }

    if (repaymentPeriod < 84 || repaymentPeriod > 180) {
        alert("Repayment period must be between 7 and 15 years");
        return;
    }

    monthlyInterestRate = interestRate / 12;
    monthlyPaymentAmount = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -repaymentPeriod));

    monthlyPayment.textContent = monthlyPaymentAmount.toFixed(2);
    totalPaymentAmount = monthlyPaymentAmount * repaymentPeriod;

    totalPayment.textContent = totalPaymentAmount.toFixed(2);
    totalInterestAmount = totalPaymentAmount - loanAmount;

    totalInterest.textContent = totalInterestAmount.toFixed(2);
});