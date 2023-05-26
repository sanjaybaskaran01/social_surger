// import { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const Portfolio = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPageNumber(1);
//   }

//   function changePage(offset) {
//     setPageNumber((prevPageNumber) => prevPageNumber + offset);
//   }

//   function previousPage() {
//     changePage(-1);
//   }

//   function nextPage() {
//     changePage(1);
//   }

//   return (
//     <>
//       <Document file={"/pdfs/nikesh.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <div>
//         <p>
//           Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
//         </p>
//         <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
//           Previous
//         </button>
//         <button
//           type="button"
//           disabled={pageNumber >= numPages}
//           onClick={nextPage}
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default Portfolio;
