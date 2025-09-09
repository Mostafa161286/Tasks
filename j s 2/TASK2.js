let age = 18; 
let salary = 5000; 

// Check the applicant's age 
if (age < 18 || age > 60) {
    console.log("Applicant is rejected because they do not meet the minimum requirements");
} 
// If age is valid, check if salary meets the requirement
else if (salary < 5000) {
    console.log("Applicant is rejected because they do not meet the minimum requirements");
} 
// If both age and salary requirements are satisfied
else {
    // Calculate loan as triple the salary
    let loan = salary * 3;

    // Ensure the loan does not exceed the maximum limit of 60,000
    if (loan > 60000) {
        loan = 60000;
    }

    // Output the final approval message with the loan amount
    console.log("Congratulations! You are eligible for 60000 EGP loan");
}
