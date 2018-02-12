package com.deloitte.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.deloitte.constants.Constants;

@Controller
@EnableWebMvc
@RequestMapping("/api")
public class FileController {

	@RequestMapping(value = "/setFolderAttribute", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public  void setFolderAttribute(@RequestParam(required = true, value = "folderPath") String folderPath, @RequestParam(required=true, value="desc") String description, HttpServletRequest  request)
	{
		HttpSession session = request.getSession();
		session.setAttribute(Constants.FOLDER_PATH_SESSION_VAR, folderPath);
	}
}
