echo -e "\e[45m--- Routine: initialize.sh\e[49m"

echo -e "\e[44m[INIT]\e[49m \e[33mCreating \e[36mfamilybudget_dbdata\e[33m volume\e[0m"
docker volume create familybudget_dbdata

echo -e "\e[44m[INIT]\e[49m \e[33mBuilding \e[36mfrontend\e[33m...\e[0m"
echo -e "\e[44m[INIT]\e[49m \e[33mEstimated Time left: \e[36m170s\e[33m...\e[49m"
docker-compose build --no-cache frontend

echo -e "\e[44m[INIT]\e[49m \e[33mBuilding \e[36mbackend\e[33m...\e[0m"
echo -e "\e[44m[INIT]\e[49m \e[33mEstimated Time left: \e[36m100s\e[33m...\e[49m"
docker-compose build --no-cache backend
