echo -e "\e[45m--- Routine: rebuild.sh\e[49m"

SETUP_PATH="$(dirname "$0")/setup.sh"
MIGRATION_PATH="$(dirname "$0")/migration.sh"
UP_PATH="$(dirname "$0")/up.sh"

echo -e "\e[44m[REBUILD]\e[49m \e[33mRemoving \e[36mfamilybudget\e[33m containers\e[0m"
docker-compose down

source "$SETUP_PATH"
BACK_PID=$!
wait $BACK_PID

source "$MIGRATION_PATH"
BACK_PID=$!
wait $BACK_PID

source "$UP_PATH"
