FROM openjdk:8
ADD /proj-manager-service-0.0.1-SNAPSHOT.jar proj-manager-service-0.0.1-SNAPSHOT.jar
EXPOSE 8092
RUN bash -c 'touch /proj-manager-service-0.0.1-SNAPSHOT.jar'
ENTRYPOINT ["java","-jar","proj-manager-service-0.0.1-SNAPSHOT.jar"]
