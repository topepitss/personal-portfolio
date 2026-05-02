import accentureSalesforce from '../assets/certificates/accenture-salesforce.pdf';
import foundationalCsharp from '../assets/certificates/foundational-csharp.png';
import opswatCip from '../assets/certificates/opswat-cip.png';
import oracleJavaFoundations from '../assets/certificates/oracle-java-foundations.jpg';
import oracleJavaProgramming from '../assets/certificates/oracle-java-programming.jpg';
import salesforceAdminDeveloper from '../assets/certificates/salesforce-admin-developer.jpg';

export const certifications = [
  {
    title: 'Salesforce Administrator & Developer Training',
    issuer: 'Accenture Technology Academy',
    year: '2025',
    preview: salesforceAdminDeveloper,
    fileType: 'image',
  },
  {
    title: 'Foundational C# with Microsoft',
    issuer: 'FreeCodeCamp',
    year: '2025',
    preview: foundationalCsharp,
    fileType: 'image',
  },
  {
    title: 'IT Practicum (286 Hours)',
    issuer: 'STI Global City',
    year: '2025',
    preview: accentureSalesforce,
    fileType: 'pdf',
  },
  {
    title: 'Introduction to Critical Infrastructure Protection',
    issuer: 'OPSWAT Academy',
    year: '2025',
    preview: opswatCip,
    fileType: 'image',
  },
  {
    title: 'Java Programming (English)',
    issuer: 'Oracle Academy',
    year: '2025',
    preview: oracleJavaProgramming,
    fileType: 'image',
  },
  {
    title: 'Java Foundations',
    issuer: 'Oracle Academy',
    year: '2022',
    preview: oracleJavaFoundations,
    fileType: 'image',
  },
];
