package com.deloitte.service;

import java.io.File;
import java.io.IOException;

public class FileService extends ServiceUtils{

	public boolean setFolderAttributeInSession(String folderName) throws IOException {
		String serverPath = readServerLocationFromProps();
		AppUtils.folderPath = serverPath + folderName + File.separator;
		AppUtils.sapFileProperties = null;
		return true;
	}
}
