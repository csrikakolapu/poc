package com.deloitte.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.deloitte.constants.Constants;
import com.deloitte.dto.ResponseDTO;
import com.deloitte.service.AppUtils;
import com.deloitte.service.FileReaderService;

@Controller
@EnableWebMvc
@RequestMapping("/api")
public class FileReadingController {

	@RequestMapping(value = "/getFileContent", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public  ResponseDTO homePage(@RequestParam(required = true, value = "fileKey") String fileKey, HttpServletRequest  request)
	{
		FileReaderService fileReaderService = new FileReaderService();
		ResponseDTO dto = new ResponseDTO();
		String folderPath = null;
		HttpSession session = request.getSession();
		if(null != session.getAttribute(Constants.FOLDER_PATH_SESSION_VAR)) {
			folderPath = (String) session.getAttribute(Constants.FOLDER_PATH_SESSION_VAR);
		}
		try{
			dto.setFileContent(fileReaderService.getFileData(fileKey, folderPath));
			
		}catch(Exception e){
			e.printStackTrace();
			List<String> response = new ArrayList<String>();
			response.add(e.getLocalizedMessage());
			dto.setFileContent(response);
			
		}
		return dto;
	}
	
	@RequestMapping(value = "/readFolderDetails", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Map<String, String> readAllFolderDetails()
	{
		FileReaderService fileReaderService = new FileReaderService();
		Map<String, String> folderDetailsMap = new HashMap<>();
		ResponseDTO dto = new ResponseDTO();
		try{
			folderDetailsMap = fileReaderService.getAllFolderDetails();
			
		}catch(Exception e){
			e.printStackTrace();
			List<String> response = new ArrayList<String>();
			response.add(e.getLocalizedMessage());
			dto.setFileContent(response);
			
		}
		return folderDetailsMap;
	}
}
