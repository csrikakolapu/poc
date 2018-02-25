package com.deloitte.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.deloitte.service.FileService;

@Controller
@EnableWebMvc
@RequestMapping("/api")
public class FileController {

	@RequestMapping(value = "/setFolderAttribute", method = RequestMethod.GET)
	@ResponseBody
	public Boolean setFolderAttribute(@RequestParam(required = true, value = "folderName") String folderName, @RequestParam(required=true, value="desc") String description, HttpServletRequest  request)
	{
		FileService fileService = new FileService();
		try {
			return fileService.setFolderAttributeInSession(folderName);
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}
	}
}
