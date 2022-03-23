echo -e "\e[45m--- Routine: setup.sh\e[49m"

echo -e "\e[44m[SETUP]\e[49m \e[33mBuilding \e[36mfrontend\e[33m...\e[0m"
docker-compose build frontend

echo -e "\e[44m[SETUP]\e[49m \e[33mBuilding \e[36mbackend\e[33m...\e[0m"
docker-compose build backend
