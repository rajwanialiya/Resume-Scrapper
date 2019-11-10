// let fs = require('fs'),
// PDFParser = require("pdf2json");

// let pdfParser = new PDFParser();

// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
// pdfParser.on("pdfParser_dataReady", pdfData => {
// fs.writeFile("./testfile2.json", JSON.stringify(pdfData));
// });

// pdfParser.loadPDF("./strom_ida_resume.pdf");

//Most consistent library
// Need way to correlate lines in the JSON


const {parsePdf, extractText} = require('easy-pdf-parser')
const fs = require('fs')

let data

parsePdf('./Resume_SamHarvey_November2019.pdf').then(extractText).then(data => {
  fs.writeFile('Resume_SamHarvey_November2019.json',JSON.stringify(data, '', 2), () => console.log('success'));
});

const ResumeParser = require('resume-parser');




// // From file to file
// ResumeParser.parseResume('./resume_pdf.pdf', './') // input file, output dir
//   .then(file => {
//     console.log("Yay! " + file);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// // From URL
// ResumeParser
//   .parseResumeUrl('http://www.mysite.com/resume.txt') // url
//   .then(data => {
//     console.log('Yay! ', data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// var pdftxt = require("pdftxt");
 
// pdftxt("strom_ida_resume.pdf", function(err, data) {
 
//     if (err) return console.error(err);
//     console.log(data);
 
// });