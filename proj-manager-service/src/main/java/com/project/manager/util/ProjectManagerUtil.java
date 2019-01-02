package com.project.manager.util;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.project.manager.constants.ProjectManagerConstants;

public class ProjectManagerUtil implements ProjectManagerConstants {

	private final static Logger logger = LoggerFactory.getLogger(ProjectManagerUtil.class);
	
	public static String dateToString(Date date) {
		String dateInStr = EMPTY;
		try {
			if(null != date) {
				SimpleDateFormat sdf = new SimpleDateFormat(YYYY_MM_DD);
				dateInStr = sdf.format(date);
			}
		} catch(Exception e) {
			logger.error("Error - ProjectManagerUtil dateToString : " + e);
		}
		return dateInStr;
	}
	
	public static Date stringToDate(String dateInStr) {
		Date date = null;
		try {
			if(null != dateInStr) {
				SimpleDateFormat sdf = new SimpleDateFormat(YYYY_MM_DD);
				date = sdf.parse(dateInStr);
			}
		} catch(Exception e) {
			logger.error("Error - ProjectManagerUtil stringToDate : " + e);
		}
		return date;
	}
	
}
