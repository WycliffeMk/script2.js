// Calculate individual's Net Salary
function calculateNetSalary(basicSalary, benefits) {
 //rate of taxes
    const KRA_TaxRate = 0.3;
    const NHIF_Rate = 0.05;
    const NSSF_Rate = 0.12;

    const payee = basicSalary * KRA_TaxRate;
    const NHIFDeductions = basicSalary * NHIF_Rate;
    const NSSFDeductions = basicSalary * NSSF_Rate;
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

    return netSalary;
}

// Example usage
const basicSalary = 50000;
const benefits = 10000;
const individualNetSalary = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary:", individualNetSalary);