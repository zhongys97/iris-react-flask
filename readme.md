# Deployment on AWS Ubuntu EC2

Launch an EC2 instance from an **UBUNTU** image, for easy installation of npm...

## Install and configure Docker
1. `curl -fsSL https://get.docker.com -o get-docker.sh`

2. `DRY_RUN=1 sh ./get-docker.sh`
3. `sudo systemctl start docker`
4. `sudo usermod -a -G docker ubuntu` 
5. (exit and reconnect)


## Install nodejs and npm

6. (`sudo apt update`)

7. `sudo apt install nodejs`

8. `sudo apt install npm`

## Install Docker Compose

9. `sudo chown -R $(whoami) /usr/local/bin`

10. `sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose`

11. `sudo chmod +x /usr/local/bin/docker-compose`

12. check installation via `docker-compose version`

## Copy local files to the EC2 instance

13. `scp -i YOUR_KEY_PAIR_PEM_FILE -r iris-react-flask ec2-user@YOUR_PUBLIC_DNS:/home/ubuntu`

## Final commands

14. `docker-compose up -d`. This only started the backend, the frontend exited with code 127 automatically (to be fixed)

15. `cd frontend-app/frontend` and `npm install`

16. `cd ./../.. && docker-compose up -d`. It should show the frontend successfully started.


