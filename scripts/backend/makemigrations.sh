echo -e "\e[45m--- Routine: makemigrations.sh\e[49m"

echo -e "\e[44m[BACKEND]\e[49m \e[33mmanage.py \e[36mmakemigrations\e[33m volume\e[0m"
docker-compose run --rm backend python manage.py makemigrations
