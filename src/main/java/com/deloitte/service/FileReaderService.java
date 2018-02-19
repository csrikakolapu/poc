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
import java.util.Scanner;
import java.util.stream.Collectors;

import org.springframework.util.StringUtils;

import com.deloitte.constants.Constants;

public class FileReaderService {

	public List<String> getFileData(String fileKey, String folderPath) throws IOException, URISyntaxException {
		List<String> fileContent = new ArrayList<>();
		loadSAPFileProperties(folderPath);
		File file = null;
		if(StringUtils.isEmpty(folderPath)) {
			file = new File(getClass().getClassLoader().getResource("data/"+AppUtils.sapFileProperties.get(fileKey)).getFile());
		} else {
			file = new File(folderPath + AppUtils.sapFileProperties.get(fileKey));
		}
		Scanner scanner = new Scanner(file);
		while (scanner.hasNextLine()) {
			String line = scanner.nextLine();
			fileContent.add(line);
		}

		scanner.close();
		return fileContent;
	}
	
	public Map<String, String> getAllFolderDetails() throws IOException {
		InputStream is = FileReaderService.class.getClassLoader().getResourceAsStream("data/FolderUploadLog.Properties");
		return readFileAsKeyValuePair(is, Constants.DELIMETER_EQUALS);
	}
	
	private void loadSAPFileProperties(String folderPath) throws IOException {
		if(AppUtils.sapFileProperties == null){
			InputStream inputStream = null;
			if(StringUtils.isEmpty(folderPath)) {
				inputStream = FileReaderService.class.getClassLoader().getResourceAsStream("data/SAPUATProp.Properties");
			} else {
				String propsFilePath = folderPath + "SAPUATProp.Properties";
				inputStream = new FileInputStream(new File(propsFilePath));
			}
			AppUtils.sapFileProperties = readFileAsKeyValuePair(inputStream, Constants.DELIMETER_SPACE);
		}
	}
	
	private Map<String, String> readFileAsKeyValuePair(InputStream is, String delimeter) throws IOException {
		Map<String, String> fileDataAsKeyValuePair = new HashMap<>();
		Scanner sc = new Scanner(is);
		while(sc.hasNext()) {
			String line = sc.nextLine();
			String[] array = line.split(delimeter);
			fileDataAsKeyValuePair.put(array[0], array[1]);
		}
		sc.close();
		is.close();
		return fileDataAsKeyValuePair;
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
