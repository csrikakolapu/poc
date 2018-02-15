package com.deloitte.dto;

public class FileUploadResponseDTO {
	
	private Boolean isUploadSuccess;
	private String message;
	private String folderName;
	
	public Boolean getIsUploadSuccess() {
		return isUploadSuccess;
	}
	public void setIsUploadSuccess(Boolean isUploadSuccess) {
		this.isUploadSuccess = isUploadSuccess;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getFolderName() {
		return folderName;
	}
	public void setFolderName(String folderName) {
		this.folderName = folderName;
	}
	
}
