package com.deloitte.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.deloitte.constants.Constants;
import com.deloitte.dto.FileUploadResponseDTO;
import com.deloitte.service.AppUtils;
import com.deloitte.service.FileUploadService;

@Controller
@EnableWebMvc
@RequestMapping("/api")
public class FileUploadController {

	@RequestMapping(value = "/uploadZipFiles", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public  FileUploadResponseDTO uploadZipFilesToServer(@RequestParam(required = true, value = "zipFile") MultipartFile zipFile, @RequestParam(required=true, value="desc") String description, HttpServletRequest  request)
	{
		FileUploadService fileUploadService = new FileUploadService();
		FileUploadResponseDTO dto = new FileUploadResponseDTO();
		try{
			String folderName = fileUploadService.uploadZipFileService(zipFile, description);
			dto.setFolderName(folderName);
			dto.setIsUploadSuccess(Boolean.TRUE);
			dto.setMessage("Zip file uploaded succesfully to folder : "+folderName);
		}catch(Exception e){
			e.printStackTrace();
			dto.setIsUploadSuccess(Boolean.FALSE);
			dto.setMessage("File upload failed : "+e.getMessage());
		}
		return dto;
		

	}
	
	@RequestMapping(value = "/uploadFile", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public  FileUploadResponseDTO uploadFileToServer(@RequestParam(required = true, value = "file") MultipartFile file,HttpServletRequest  request)
	{
		FileUploadService fileUploadService = new FileUploadService();
		FileUploadResponseDTO dto = new FileUploadResponseDTO();
		boolean isSuccess = false;
		try{
			String folderPath = AppUtils.folderPath;
			isSuccess = fileUploadService.uploadFileService(file, folderPath);
			dto.setIsUploadSuccess(isSuccess);
			dto.setMessage("File uploaded succesfully to folder : "+folderPath);
		}catch(Exception e){
			e.printStackTrace();
			dto.setIsUploadSuccess(isSuccess);
			dto.setMessage("File upload failed : "+e.getMessage());
		}
		return dto;
		

	}
}
