package com.deloitte.service;

import java.util.List;
import java.util.Map;

import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@XmlRootElement
@JsonSerialize(include= JsonSerialize.Inclusion.NON_EMPTY)
public class ResponseDTO {

	private Map<String, String> fileContentMap;
	private List<String> errorMessage;
	private List<String> fileContent;

	public Map<String, String> getFileContentMap() {
		return fileContentMap;
	}

	public void setFileContentMap(Map<String, String> fileContentMap) {
		this.fileContentMap = fileContentMap;
	}

	public List<String> getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(List<String> errorMessage) {
		this.errorMessage = errorMessage;
	}

	public void setFileContent(List<String> fileContent) {
		this.fileContent = fileContent;
	}

	public List<String> getFileContent() {
		return fileContent;
	}
}
