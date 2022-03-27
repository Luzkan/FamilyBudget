echo -e "\e[45m--- Routine: down.sh\e[49m"

echo -e "\e[44m[REBUILD]\e[49m \e[33mRemoving \e[36mfamilybudget\e[33m containers\e[0m"
docker-compose down
