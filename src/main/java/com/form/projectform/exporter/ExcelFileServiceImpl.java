package com.form.projectform.exporter;

import com.form.projectform.entity.Entrepreneur;
import com.form.projectform.repository.EntrepreneurRepository;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

@Service
public class ExcelFileServiceImpl implements ExcelFileService  {

    @Autowired
    EntrepreneurRepository entrepreneurRepository;
        private Logger logger = LoggerFactory.getLogger(this.getClass());

        @Override
        public ByteArrayInputStream export() {
            try(Workbook workbook = new XSSFWorkbook()){
                Sheet sheet = workbook.createSheet("Projets");

                Row row = sheet.createRow(0);

                // Define header cell style
                CellStyle headerCellStyle = workbook.createCellStyle();
                headerCellStyle.setFillForegroundColor(IndexedColors.LIGHT_GREEN.getIndex());
//                headerCellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

                // Creating header cells
                Cell cell = row.createCell(0);
                cell.setCellValue("Id");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(1);
                cell.setCellValue("Domaine");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(2);
                cell.setCellValue("Etat");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(3);
                cell.setCellValue("Nom et Prènom");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(4);
                cell.setCellValue("Email");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(5);
                cell.setCellValue("Intilule");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(6);
                cell.setCellValue("Description");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(7);
                cell.setCellValue("Diplome");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(8);
                cell.setCellValue("Ville");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(9);
                cell.setCellValue("Développement de l'idée");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(10);
                cell.setCellValue("Numéro de téléphone ");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(11);
                cell.setCellValue("Nom autre membres");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(12);
                cell.setCellValue("Motivation");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(13);
                cell.setCellValue("Perennité");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(14);
                cell.setCellValue("Responsabilité");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(15);
                cell.setCellValue("Innovation");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(16);
                cell.setCellValue("Duree");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(17);
                cell.setCellValue("Originalité");
                cell.setCellStyle(headerCellStyle);

                cell = row.createCell(18);
                cell.setCellValue("Impact");
                cell.setCellStyle(headerCellStyle);





                int i =0;
                // Creating data rows for each contact
                for(Entrepreneur e : entrepreneurRepository.findAll() ) {

                    Row dataRow = sheet.createRow(i + 1);
                    dataRow.createCell(0).setCellValue(e.getId());
                    dataRow.createCell(1).setCellValue(e.getDomaine());
                    dataRow.createCell(2).setCellValue(e.getEtat());
                    dataRow.createCell(3).setCellValue(e.getNom_prenom());
                    dataRow.createCell(4).setCellValue(e.getEmail());
                    dataRow.createCell(5).setCellValue(e.getIntilule());
                    dataRow.createCell(6).setCellValue(e.getDescription());
                    dataRow.createCell(7).setCellValue(e.getDiplome());
                    dataRow.createCell(8).setCellValue(e.getVille());
                    dataRow.createCell(9).setCellValue(e.getDev_idee());
                    dataRow.createCell(10).setCellValue(e.getTelephone());
                    dataRow.createCell(11).setCellValue(e.getNom_autre_membre());
                    dataRow.createCell(12).setCellValue(e.getMotivation());
                    dataRow.createCell(13).setCellValue(e.getPerennite());
                    dataRow.createCell(14).setCellValue(e.getResponsabilite());
                    dataRow.createCell(15).setCellValue(e.getInnovation());
                    dataRow.createCell(16).setCellValue(e.getDuree());
                    dataRow.createCell(17).setCellValue(e.getOriginalite());
                    dataRow.createCell(18).setCellValue(e.getImpact());
                    i++;
                }

                // Making size of column auto resize to fit with data
                sheet.autoSizeColumn(0);
                sheet.autoSizeColumn(1);
                sheet.autoSizeColumn(2);
                sheet.autoSizeColumn(3);
                sheet.autoSizeColumn(4);
                sheet.autoSizeColumn(5);
                sheet.autoSizeColumn(6);
                sheet.autoSizeColumn(7);
                sheet.autoSizeColumn(8);
                sheet.autoSizeColumn(9);
                sheet.autoSizeColumn(10);
                sheet.autoSizeColumn(11);
                sheet.autoSizeColumn(12);
                sheet.autoSizeColumn(13);
                sheet.autoSizeColumn(14);
                sheet.autoSizeColumn(15);
                sheet.autoSizeColumn(16);
                sheet.autoSizeColumn(17);
                sheet.autoSizeColumn(18);

                ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
                workbook.write(outputStream);
                return new ByteArrayInputStream(outputStream.toByteArray());

            } catch (IOException ex) {
                logger.error("Error during export Excel file", ex);
                return null;
            }
        }


}
