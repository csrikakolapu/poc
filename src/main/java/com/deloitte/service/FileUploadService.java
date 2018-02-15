package com.deloitte.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

import org.springframework.web.multipart.MultipartFile;

import com.deloitte.constants.Constants;

public class FileUploadService {

	public static final String FOLDER_LOG_FILE_NAME = "FolderUploadLog.properties";


	public String uploadFileService(MultipartFile zipFile, String description) throws Exception {
		String timeStamp = new SimpleDateFormat("yyyy_MM_dd_HH_mm_ss").format(new Date());
		String folderName = zipFile.getOriginalFilename() + "_" + timeStamp;
		String serverLocation = readServerLocationFromProps();
//		byte[] bytes = zipFile.getBytes();
		byte[] buffer = new byte[1024];
		ZipInputStream zis = new ZipInputStream(zipFile.getInputStream());
		ZipEntry zipEntry = zis.getNextEntry();
		File destinationDir = new File(serverLocation + File.separator + folderName );
		if(!destinationDir.exists()) {
			destinationDir.mkdirs();
		}
		while(zipEntry != null){
			String fileName = zipEntry.getName();
			System.out.println("fileName : "+ fileName);
			File newFile = new File(destinationDir + File.separator + fileName);
			if(fileName.endsWith("/")) {
				newFile.mkdirs();
				zipEntry = zis.getNextEntry();
				continue;
			}
			File parent = newFile.getParentFile();
			if(parent != null) {
				parent.mkdirs();
			}
			FileOutputStream fos = new FileOutputStream(newFile);
			int len;
			while ((len = zis.read(buffer)) > 0) {
				fos.write(buffer, 0, len);
			}
			fos.close();
			zipEntry = zis.getNextEntry();
		}
		zis.closeEntry();
		zis.close();

		logFolderDetails(destinationDir.getPath() + File.separator, description);
		return folderName;
	}

	private String readServerLocationFromProps() throws IOException {
		InputStream is = FileUploadService.class.getClassLoader().getResourceAsStream("config/config.Properties");
		Properties props = new Properties();
		props.load(is);
		is.close();
		return props.getProperty(Constants.SERVER_LOCATION_PROPERTY_NAME);
	}

	private void logFolderDetails(String folderPathToLog, String description) throws Exception {
		System.out.println("inside log method");
		BufferedWriter bw = null;
		FileWriter fw = null;
		File logFile = getLogFileDataStream();
		try {
			updateLogFile(logFile, description, folderPathToLog);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			throw new Exception("Exception occured while logging folder details"+e.getMessage());
		} finally {
			try {
				if (bw != null)
					bw.close();
				if (fw != null)
					fw.close();
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
	}

	private void updateLogFile(File logFile, String description, String folderPathToLog) throws IOException {
		FileWriter fw = new FileWriter(logFile, true);
		fw.write(folderPathToLog+"="+description);
		fw.write(System.lineSeparator());
		fw.close();
	}

	private File getLogFileDataStream() {
		ClassLoader classLoader = getClass().getClassLoader();
		File logFile = new File(classLoader.getResource("data/"+FOLDER_LOG_FILE_NAME).getFile());
		return logFile;
	}
	private String getLogFilePathFromResource() throws URISyntaxException {
		ClassLoader classLoader = getClass().getClassLoader();
		URI uri = classLoader.getResource("data/"+FOLDER_LOG_FILE_NAME).toURI();
		System.out.println("uri value: "+uri.toString());
		return uri.toString();
	}
}
