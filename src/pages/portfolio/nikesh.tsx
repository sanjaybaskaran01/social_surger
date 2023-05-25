import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Portfolio = () => {
  const [numPages, setNumPages] = useState<null | number>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex justify-center w-full">
        <Document
          file={`/pdfs/nikesh.pdf`}
          onLoadSuccess={onDocumentLoadSuccess}
          className="mb-4 w-full md:w-3/4 lg:w-1/2 xl:w-1/3"
        >
          <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />
        </Document>
      </div>
      <div className="flex flex-col md:flex-row justify-around w-full max-w-md">
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          className={`px-2 py-1 mb-2 md:mb-0 ${
            pageNumber <= 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white"
          } rounded`}
        >
          Previous
        </button>
        <span className="mb-2 md:mb-0">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </span>
        <button
          disabled={pageNumber >= numPages!}
          onClick={() => setPageNumber(pageNumber + 1)}
          className={`px-2 py-1 ${
            pageNumber >= numPages!
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white"
          } rounded`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
