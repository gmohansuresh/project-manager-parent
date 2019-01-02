/**
 * ProjectManagerException.java
 *
 * Modification History
 *
 * Date        Version   Developer      Description
 * ---------   -------   ------------   --------------------------------------
 * 11/23/2018   1.0	 	 Cognizant		Initial version
 */
package com.project.manager.exception;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProjectManagerException extends Exception {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 4657743076067403540L;

	private String errorCode;
	
	private String errorMessage;
	
	private int status;

	public ProjectManagerException(String errorCode, String errorMessage, int status) {
		// TODO Auto-generated constructor stub
		super(errorMessage);
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
		this.status = status;
	}

	public ProjectManagerException() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @return the errorCode
	 */
	public String getErrorCode() {
		return errorCode;
	}

	/**
	 * @param errorCode the errorCode to set
	 */
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}

	/**
	 * @return the errorMessage
	 */
	public String getErrorMessage() {
		return errorMessage;
	}

	/**
	 * @param errorMessage the errorMessage to set
	 */
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	/**
	 * @return the status
	 */
	public int getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(int status) {
		this.status = status;
	}
	
	public ProjectManagerException transformException()
	{
		ProjectManagerException restError = new ProjectManagerException();
		restError.setErrorCode(this.errorCode);
		restError.setErrorMessage(this.errorMessage);
		return restError;
	}
	
}
