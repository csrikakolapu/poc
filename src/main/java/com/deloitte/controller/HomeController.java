package com.deloitte.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
class HomeController {

	@RequestMapping("/home")
	@ResponseBody
	public String home(){
		System.out.println("reached");
		return "Hiiii";
	}
}
