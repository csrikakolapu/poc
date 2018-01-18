package com.deloitte.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.deloitte.service.FileReaderService;
import com.deloitte.service.ResponseDTO;

@Controller
public class FileReadingController {

	@RequestMapping(value = "/getFileContent", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public  ResponseDTO homePage(@RequestParam(required = true, value = "fileKey") String fileKey, HttpServletRequest  request)
	{
		FileReaderService fileReaderService = new FileReaderService();
		ResponseDTO dto = new ResponseDTO();
		try{
			dto.setFileContent(fileReaderService.getFileData(fileKey));
			
		}catch(Exception e){
			e.printStackTrace();
			List<String> response = new ArrayList<String>();
			response.add(e.getLocalizedMessage());
			dto.setFileContent(response);
			
		}
		return dto;
		

	}
}
