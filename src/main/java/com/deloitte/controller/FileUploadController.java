package com.deloitte.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.deloitte.dto.FileUploadResponseDTO;
import com.deloitte.service.FileUploadService;

@Controller
@EnableWebMvc
@RequestMapping("/api")
public class FileUploadController {

	@RequestMapping(value = "/uploadFileContent", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public  FileUploadResponseDTO uploadFilesToServer(@RequestParam(required = true, value = "zipFile") MultipartFile zipFile, @RequestParam(required=true, value="desc") String description, HttpServletRequest  request)
	{
		FileUploadService fileUploadService = new FileUploadService();
		FileUploadResponseDTO dto = new FileUploadResponseDTO();
		try{
			String folderName = fileUploadService.uploadFileService(zipFile, description);
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
}
