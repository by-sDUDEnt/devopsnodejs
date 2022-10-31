# HW for Kpi/Devops
## simple nodejs server + docker image

Commands used :  
docker build . -t  bysdudent/node-web-app    -> to build an image, with -t ("latest" tag)  

ddocker run -p 80:8080 -d --cpus=2 -m 1000m bysdudent/node-web-app -> to run an image. Redirect port 8080 to 80 on my machine, -d - detached mode, -m - memory, --ccpus - CPU 

docker push bysdudent/node-web-app:devopsnodejs -> push to dockerhub (authinticated by pc app)  

[DockerHub](https://hub.docker.com/repository/docker/bysdudent/node-web-app)
