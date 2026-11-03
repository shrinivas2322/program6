#Base Image
FROM python:latest
CMD [ "echo","Docker File Executing" ]
#Coping the files 
COPY package*.json .
#Exposing the port
EXPOSE 3000
