package com.deloitte.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

import org.springframework.web.multipart.MultipartFile;

import com.deloitte.constants.Constants;

public class FileUploadService extends ServiceUtils{

	public String uploadZipFileService(MultipartFile zipFile, String description) throws Exception {
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

		logFolderDetails(folderName, description);
		return folderName;
	}
	
	public boolean uploadFileService(MultipartFile file, String folderPath) throws IOException {
		File newFile = new File(folderPath + File.separator + file.getOriginalFilename());
		return writeDataToFile(newFile, file.getInputStream());
	}
	
	private boolean writeDataToFile(File file, InputStream inputStream) {
		boolean isSuccess = false;
		FileOutputStream fos = null;
		try {

			fos = new FileOutputStream(file);
			int len;
			byte[] buffer = new byte[1024];
			while ((len = inputStream.read(buffer)) > 0) {
				fos.write(buffer, 0, len);
			}
			isSuccess = true;
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if(fos != null) {
					fos.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return isSuccess;
	}

	private void logFolderDetails(String folderPathToLog, String description) throws Exception {
		System.out.println("inside log method");
		FileWriter fw = null;
		String serverLocation = readServerLocationFromProps();
		File logFile = new File(serverLocation + File.separator + Constants.FOLDER_LOG_FILE_NAME);
		if(!logFile.exists()) {
			logFile.createNewFile();
		}
		
		try {
			fw = new FileWriter(logFile, true);
			fw.write(folderPathToLog+"="+description);
			fw.write(System.lineSeparator());
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			throw new Exception("Exception occured while logging folder details"+e.getMessage());
		} finally {
			try {
				if (fw != null) {
					fw.close();
				}
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
	}

}
