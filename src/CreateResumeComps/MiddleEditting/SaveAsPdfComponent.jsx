import { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import RightPreviewP from "../RightPreview/RightPreviewP";

const PdfGenerator = () => {
  const pdfExportComponent = useRef(null);

  const exportPDF = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div>
      <button onClick={exportPDF}>Export as PDF</button>
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <RightPreviewP />
      </PDFExport>
    </div>
  );
};

export default PdfGenerator;
// npm install react-to-pdf @progress/kendo-react-pdf @progress/kendo-react-common --save
