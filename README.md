====== Lanch new ec2 =======
create new ec2

======= access to ec2 on terminal ===
- step 1 enable to access first time with ec2-key.pem and localy 
chmod 400 ec2-key.pem

- step 2 access ec2
ssh -i ec2-key.pem ubuntu@ipec2<<230.230.2932.9>>

====== Install docker ======
— Step 1:
sudo apt update
sudo apt install docker.io -y

— Step 2
sudo systemctl start docker
sudo systemctl enable docker

— Step 3 check docker version
docker --version



======= Install docker-compose =====
— Step 1
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose sudo chmod +x /usr/local/bin/docker-composesudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose sudo chmod +x /usr/local/bin/docker-compose

— Step 2 check docker compose version
docker-compose --version


====== Clone project to ec2 and run project ========
- step 1: git clone https://github.com/porthao/full-stack-course-backend.git
- step 2: cd full-stack-course-backend
- step 3: create .env -> vim .env -> paste dotenv data -> save -> click esc (wq!)
- step 4: create nest-network -> sudo docker network create nest-network
- step 5: run docker -> sudo docker-compose up -d --build
- step 6: check docker run or not -> docker ps
- step 7: check container work correctly or not -> sudo docker logs <<container-name>> --tail 100 -f


<!-- Create github action -->