package com.deloitte.service;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import com.deloitte.constants.Constants;

public class ServiceUtils {

	protected String readServerLocationFromProps() throws IOException {
		InputStream is = getClass().getClassLoader().getResourceAsStream("config/config.properties");
		Properties props = new Properties();
		props.load(is);
		is.close();
		return props.getProperty(Constants.SERVER_LOCATION_PROPERTY_NAME);
	}
}
