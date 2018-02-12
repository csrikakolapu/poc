package com.deloitte.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Scanner;
import java.util.stream.Collectors;

public class FileReaderService {

	public List<String> getFileData(String fileKey, String folderPath) throws IOException, URISyntaxException {
		List<String> fileContent = new ArrayList<>();
		loadSAPFileProperties(folderPath);
		File file = new File(folderPath + AppUtils.sapFileProperties.getProperty(fileKey));
		Scanner scanner = new Scanner(file);
				while (scanner.hasNextLine()) {
					String line = scanner.nextLine();
					fileContent.add(line);
				}

		scanner.close();
		return fileContent;
	}
	
	public Map<String, String> getAllFolderDetails() throws IOException {
		readFolderDetailsFromLog();
		return AppUtils.allFolderDetails;
	}
	
	private void readFolderDetailsFromLog() throws IOException {
		InputStream is = FileReaderService.class.getClassLoader().getResourceAsStream("data/FolderUploadLog.Properties");
		Scanner sc = new Scanner(is);
		Map<String, String> folderDetailsMap = new HashMap<>();
		while(sc.hasNext()) {
			String line = sc.nextLine();
			String[] array = line.split("=");
			folderDetailsMap.put(array[0], array[1]);
		}
		sc.close();
		is.close();
		AppUtils.allFolderDetails = folderDetailsMap;
	}

	private void loadSAPFileProperties(String folderPath) throws IOException {
		if(AppUtils.sapFileProperties == null){
			String propsFilePath = folderPath + "SAPUATProp.Properties";
			System.out.println(propsFilePath);
			InputStream is = new FileInputStream(new File(propsFilePath));
			Properties props = new Properties();
			props.load(is);
			is.close();
			AppUtils.sapFileProperties = props;
		}
	}

	public List<String> getFileData(InputStream inputStream) throws IOException, URISyntaxException {
		List<String> fileContent = null;
		try (BufferedReader br = new BufferedReader(new InputStreamReader(inputStream))) {
			//br returns as stream and convert it into a List
			fileContent = br.lines().collect(Collectors.toList());
		} catch (IOException e) {
			throw e;
		}
		return fileContent;
	}
}
