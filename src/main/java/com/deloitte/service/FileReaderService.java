package com.deloitte.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.stream.Collectors;

import org.springframework.util.StringUtils;

import com.deloitte.constants.Constants;

public class FileReaderService {

	public List<Map<String, String>> getFileData(String fileKey, String folderPath)
			throws Exception {
		List<Map<String, String>> fileContentMappedData = new ArrayList<>();
		Map<String, String> rowKeyVal = new HashMap<>();
		loadSAPFileProperties(folderPath);
		File file = null;

		if (StringUtils.isEmpty(folderPath)) {
			URL fileURL = getClass().getClassLoader().getResource("data/" + AppUtils.sapFileProperties.get(fileKey));
			if(fileURL == null) {
				throw new Exception("File not found with given file key : "+fileKey);
			}
			file = new File(fileURL.getFile());
		} else {
			file = new File(folderPath + AppUtils.sapFileProperties.get(fileKey));
		}
		Scanner scanner = new Scanner(file);
		boolean isFirstLine = true;
		String line = "";
		String keys[] = null;
		while (scanner.hasNextLine()) {
			line = replaceTabsWithColon(scanner.nextLine(), Constants.DELIMETER_COLON);
			if (isFirstLine) {
				keys = line.split(Constants.DELIMETER_COLON);
				isFirstLine = false;
			} else {
				rowKeyVal = new HashMap<>();
				String[] values = line.split(Constants.DELIMETER_COLON);
				String key;
				for (int index = 0; index < keys.length; index++) {
					String value = "";
					key = keys[index];
					if (index < values.length) {
						value = values[index].trim();
					}
					rowKeyVal.put(key, value);
				}
				fileContentMappedData.add(rowKeyVal);
			}
		}

		scanner.close();
		return fileContentMappedData;
	}

	private String replaceTabsWithColon(String line, String delimeter) {
		return line.replaceAll("\t", delimeter);
	}

	public Map<String, String> getAllFolderDetails() throws IOException {
		InputStream is = FileReaderService.class.getClassLoader()
				.getResourceAsStream("data/FolderUploadLog.Properties");
		return readFileAsKeyValuePair(is, Constants.DELIMETER_EQUALS);
	}

	private void loadSAPFileProperties(String folderPath) throws IOException {
		if (AppUtils.sapFileProperties == null) {
			InputStream inputStream = null;
			if (StringUtils.isEmpty(folderPath)) {
				inputStream = FileReaderService.class.getClassLoader()
						.getResourceAsStream("data/SAPUATProp.Properties");
			} else {
				String propsFilePath = folderPath + "SAPUATProp.Properties";
				inputStream = new FileInputStream(new File(propsFilePath));
			}
			AppUtils.sapFileProperties = readFileAsKeyValuePair(inputStream, Constants.DELIMETER_COLON);
		}
	}

	private Map<String, String> readFileAsKeyValuePair(InputStream is, String delimeter) throws IOException {
		Map<String, String> fileDataAsKeyValuePair = new HashMap<>();
		Scanner sc = new Scanner(is);
		while (sc.hasNext()) {
			String line = sc.nextLine();
			line = replaceTabsWithColon(line, Constants.DELIMETER_COLON);
			String[] array = line.split(delimeter);
			if (!line.isEmpty() && array.length > 1) {
				fileDataAsKeyValuePair.put(array[0], array[1]);
			}
		}
		sc.close();
		is.close();
		return fileDataAsKeyValuePair;
	}

	public List<String> getFileData(InputStream inputStream) throws IOException, URISyntaxException {
		List<String> fileContent = null;
		try (BufferedReader br = new BufferedReader(new InputStreamReader(inputStream))) {
			// br returns as stream and convert it into a List
			fileContent = br.lines().collect(Collectors.toList());
		} catch (IOException e) {
			throw e;
		}
		return fileContent;
	}
}
