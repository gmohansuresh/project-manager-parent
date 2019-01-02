package com.project.manager.exception;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(Exception.class)

    public @ResponseBody

    ProjectManagerException handleCustomException(Exception ex, HttpServletResponse response) {

                response.setHeader("Content-Type", "application/json");

                if (ex instanceof ProjectManagerException) {

                            response.setStatus(((ProjectManagerException) ex).getStatus());

                            return ((ProjectManagerException) ex).transformException();

                }

                else

                {

                            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);

                            return returnRestError();

                }

    }



    private ProjectManagerException returnRestError() {

    	ProjectManagerException restError = new ProjectManagerException();

                restError.setErrorCode("500");

                restError.setErrorMessage("Technical Error");

                return restError;

    }

}
