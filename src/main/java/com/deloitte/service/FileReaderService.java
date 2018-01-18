package com.deloitte.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.Scanner;
import java.util.stream.Collectors;

public class FileReaderService {

	public List<String> getFileData(String fileKey) throws IOException, URISyntaxException {
		List<String> fileContent = new ArrayList<>();
		loadSAPFileProperties();
		ClassLoader classLoader = getClass().getClassLoader();
		File file = new File(classLoader.getResource("data/"+AppUtils.sapFileProperties.getProperty(fileKey)).getFile());
		try (Scanner scanner = new Scanner(file)) {
			while (scanner.hasNextLine()) {
				String line = scanner.nextLine();
				fileContent.add(line);
			}

			scanner.close();

		} catch (IOException e) {
			e.printStackTrace();
		}

		
		
		return fileContent;
	}
	
	private void loadSAPFileProperties() throws URISyntaxException, IOException {
		if(AppUtils.sapFileProperties == null){
			InputStream is = FileReaderService.class.getClassLoader().getResourceAsStream("data/SAPUATProp.Properties");
			Properties props = new Properties();
			props.load(is);
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
