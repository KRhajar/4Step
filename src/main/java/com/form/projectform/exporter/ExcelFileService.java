package com.form.projectform.exporter;

import com.form.projectform.entity.Entrepreneur;

import java.io.ByteArrayInputStream;
import java.util.List;

public interface ExcelFileService {

    ByteArrayInputStream export();
}
